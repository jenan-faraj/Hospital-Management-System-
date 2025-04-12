// /app/doctors/page.jsx
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import DoctorList from "../components/DoctorList";
import Link from "next/link";

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const searchParams = useSearchParams();
  const specialization = searchParams.get("specialization");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const url = specialization
          ? `/api/doctors/category?specialization=${specialization}`
          : "/api/doctors/category";

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch doctors");
        }

        const result = await response.json();
        setDoctors(result.data);
      } catch (err) {
        console.error("Error fetching doctors:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [specialization]);

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Categories for filtering
  const categories = ["Children", "Cosmetic", "General"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        {/* Header Section with Back Button and Title */}
        <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
          <Link
            href="/"
            className="text-[#2b4163] hover:text-[#293c55] flex items-center transition duration-200 group"
          >
            <div className="bg-gray-100 rounded-full p-2 mr-2 group-hover:bg-gray-200 transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="font-medium">Back to Home</span>
          </Link>

          <h2 className="text-xl font-semibold text-[#2b4163] hidden md:block">
            Find Your Doctor
          </h2>
        </div>

        {/* Search and Filter Container */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Search Bar */}
          <div className="flex-grow md:flex-grow-0 md:w-64">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#415A80] focus:border-transparent transition duration-200"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Filter Section */}
          <div className="flex-grow">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-600 font-medium mr-2">Filter by:</span>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/doctors"
                  className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
                    !specialization
                      ? "bg-[#415A80] text-white shadow-sm"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  All
                </Link>

                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/doctors?specialization=${category}`}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
                      specialization === category
                        ? "bg-[#415A80] text-white shadow-sm"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#415A80]"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
          {error}
        </div>
      ) : (
        <DoctorList doctors={filteredDoctors} specialization={specialization} />
      )}
    </div>
  );
}
