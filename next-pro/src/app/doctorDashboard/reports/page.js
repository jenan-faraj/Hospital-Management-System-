// // // // // // "use client";

// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import axios from "axios";

// // // // // // const UploadReportForm = () => {
// // // // // //   const [bookings, setBookings] = useState([]); // لتخزين الحجوزات
// // // // // //   const [file, setFile] = useState(null); // لتخزين الملف المرفوع
// // // // // //   const [loading, setLoading] = useState(false); // حالة التحميل
// // // // // //   const [error, setError] = useState(null); // لتخزين رسائل الخطأ
// // // // // //   const [success, setSuccess] = useState(null); // لتخزين رسالة النجاح

// // // // // //   // جلب الحجوزات من الـ API
// // // // // //   useEffect(() => {
// // // // // //     const fetchBookings = async () => {
// // // // // //       try {
// // // // // //         const response = await axios.get("/api/doctorDashboard/patients");
// // // // // //         setBookings(response.data); // تخزين الحجوزات في state
// // // // // //       } catch (err) {
// // // // // //         setError("حدث خطأ في جلب البيانات.");
// // // // // //       }
// // // // // //     };

// // // // // //     fetchBookings();
// // // // // //   }, []);

// // // // // //   // التعامل مع تغيير الملف
// // // // // //   const handleFileChange = (e) => {
// // // // // //     // تأكد من أن الملف يتم اختياره
// // // // // //     const selectedFile = e.target.files[0];
// // // // // //     setFile(selectedFile);
// // // // // //   };

// // // // // //   // إرسال الملف إلى الـ API
// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     if (!file) {
// // // // // //       setError("من فضلك اختر ملفًا للرفع");
// // // // // //       return;
// // // // // //     }

// // // // // //     setLoading(true);
// // // // // //     setError(null);
// // // // // //     setSuccess(null);

// // // // // //     const formData = new FormData();
// // // // // //     formData.append("report", file);
// // // // // //     // formData.append("bookingId", bookingId); // إرسال الـ bookingId
// // // // // //     // formData.append("patientId", patientId); // إرسال الـ patientId

// // // // // //     try {
// // // // // //         console.log(formData);
// // // // // //       const response = await axios.post("/api/doctorDashboard/report", formData, {
// // // // // //         headers: {
// // // // // //           "Content-Type": "multipart/form-data", // تحديد نوع المحتوى
// // // // // //         },
// // // // // //       });

// // // // // //       setSuccess("تم رفع التقرير بنجاح!");
// // // // // //     } catch (err) {
// // // // // //       setError("حدث خطأ أثناء رفع التقرير.");
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
// // // // // //       <h2 className="text-2xl font-semibold mb-4">رفع تقرير للمريض</h2>

// // // // // //       {error && <div className="text-red-600 mb-4">{error}</div>}
// // // // // //       {success && <div className="text-green-600 mb-4">{success}</div>}

// // // // // //       {/* عرض الحجوزات والمعلومات الخاصة بكل مريض */}
// // // // // //       {bookings.length > 0 ? (
// // // // // //         bookings.map((booking) => (
// // // // // //           <div key={booking._id} className="mb-6">
// // // // // //             <div className="mb-4">
// // // // // //               <p className="font-semibold">معلومات المريض:</p>
// // // // // //               <p>الاسم: {booking.patient.name}</p>
// // // // // //               <p>البريد الإلكتروني: {booking.patient.email}</p>
// // // // // //               <p>الحالة: {booking.patient.status}</p>
// // // // // //             </div>

// // // // // //             {/* نموذج رفع التقرير لكل مريض */}
// // // // // //             <form onSubmit={(e) => handleSubmit(e, booking._id, booking.patient._id)}>
// // // // // //               <div className="mb-4">
// // // // // //                 <label htmlFor="report" className="block text-gray-700">اختر التقرير (صورة أو PDF)</label>
// // // // // //                 <input
// // // // // //                   type="file"
// // // // // //                   id="report"
// // // // // //                   name="report"
// // // // // //                   accept="image/*,application/pdf"
// // // // // //                   onChange={handleFileChange}
// // // // // //                   className="mt-2 p-2 border border-gray-300 rounded"
// // // // // //                 />
// // // // // //               </div>

// // // // // //               <div className="mb-4">
// // // // // //                 <button
// // // // // //                   type="submit"
// // // // // //                   disabled={loading}
// // // // // //                   className={`px-4 py-2 bg-blue-500 text-white rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
// // // // // //                 >
// // // // // //                   {loading ? "جاري الرفع..." : "رفع التقرير"}
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             </form>
// // // // // //           </div>
// // // // // //         ))
// // // // // //       ) : (
// // // // // //         <p>لا توجد حجوزات لعرضها.</p>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default UploadReportForm;
// // // // // "use client";

// // // // // import React, { useState, useEffect } from "react";
// // // // // import axios from "axios";

// // // // // const UploadReportForm = () => {
// // // // //   const [bookings, setBookings] = useState([]); // لتخزين الحجوزات
// // // // //   const [file, setFile] = useState(null); // لتخزين الملف المرفوع
// // // // //   const [loading, setLoading] = useState(false); // حالة التحميل
// // // // //   const [error, setError] = useState(null); // لتخزين رسائل الخطأ
// // // // //   const [success, setSuccess] = useState(null); // لتخزين رسالة النجاح

// // // // //   // جلب الحجوزات من الـ API
// // // // //   useEffect(() => {
// // // // //     const fetchBookings = async () => {
// // // // //       try {
// // // // //         const response = await axios.get("/api/doctorDashboard/patients");
// // // // //         setBookings(response.data); // تخزين الحجوزات في state
// // // // //       } catch (err) {
// // // // //         setError("حدث خطأ في جلب البيانات.");
// // // // //       }
// // // // //     };

// // // // //     fetchBookings();
// // // // //   }, []);

// // // // //   // التعامل مع تغيير الملف
// // // // //   const handleFileChange = (e) => {
// // // // //     // تأكد من أن الملف يتم اختياره
// // // // //     const selectedFile = e.target.files[0];
// // // // //     setFile(selectedFile);
// // // // //   };

// // // // //   // إرسال الملف إلى الـ API
// // // // //   const handleSubmit = async (e, bookingId, patientId) => {
// // // // //     e.preventDefault();
// // // // //     if (!file) {
// // // // //       setError("من فضلك اختر ملفًا للرفع");
// // // // //       return;
// // // // //     }

// // // // //     setLoading(true);
// // // // //     setError(null);
// // // // //     setSuccess(null);

// // // // //     const formData = new FormData();
// // // // //     formData.append("report", file); // إضافة الملف إلى FormData
// // // // //     formData.append("bookingId", bookingId); // إرسال الـ bookingId
// // // // //     formData.append("patientId", patientId); // إرسال الـ patientId

// // // // //     try {
// // // // //       console.log(formData);
// // // // //       const response = await axios.post("/api/doctorDashboard/report", formData, {
// // // // //         headers: {
// // // // //           "Content-Type": "multipart/form-data", // تحديد نوع المحتوى
// // // // //         },
// // // // //       });

// // // // //       setSuccess("تم رفع التقرير بنجاح!");
// // // // //     } catch (err) {
// // // // //       setError("حدث خطأ أثناء رفع التقرير.");
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
// // // // //       <h2 className="text-2xl font-semibold mb-4">رفع تقرير للمريض</h2>

// // // // //       {error && <div className="text-red-600 mb-4">{error}</div>}
// // // // //       {success && <div className="text-green-600 mb-4">{success}</div>}

// // // // //       {/* عرض الحجوزات والمعلومات الخاصة بكل مريض */}
// // // // //       {bookings.length > 0 ? (
// // // // //         bookings.map((booking) => (
// // // // //           <div key={booking._id} className="mb-6">
// // // // //             <div className="mb-4">
// // // // //               <p className="font-semibold">معلومات المريض:</p>
// // // // //               <p>الاسم: {booking.patient.name}</p>
// // // // //               <p>البريد الإلكتروني: {booking.patient.email}</p>
// // // // //               <p>الحالة: {booking.patient.status}</p>
// // // // //             </div>

// // // // //             {/* نموذج رفع التقرير لكل مريض */}
// // // // //             <form onSubmit={(e) => handleSubmit(e, booking._id, booking.patient._id)}>
// // // // //               <div className="mb-4">
// // // // //                 <label htmlFor="report" className="block text-gray-700">اختر التقرير (صورة أو PDF)</label>
// // // // //                 <input
// // // // //                   type="file"
// // // // //                   id="report"
// // // // //                   name="report"
// // // // //                   accept="image/*,application/pdf"
// // // // //                   onChange={handleFileChange}
// // // // //                   className="mt-2 p-2 border border-gray-300 rounded"
// // // // //                 />
// // // // //               </div>

// // // // //               <div className="mb-4">
// // // // //                 <button
// // // // //                   type="submit"
// // // // //                   disabled={loading}
// // // // //                   className={`px-4 py-2 bg-blue-500 text-white rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
// // // // //                 >
// // // // //                   {loading ? "جاري الرفع..." : "رفع التقرير"}
// // // // //                 </button>
// // // // //               </div>
// // // // //             </form>
// // // // //           </div>
// // // // //         ))
// // // // //       ) : (
// // // // //         <p>لا توجد حجوزات لعرضها.</p>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default UploadReportForm;
// // // // "use client";

// // // // import React, { useState, useEffect } from "react";
// // // // import axios from "axios";

// // // // const UploadReportForm = () => {
// // // //   const [bookings, setBookings] = useState([]); // لتخزين الحجوزات
// // // //   const [file, setFile] = useState(null); // لتخزين الملف المرفوع
// // // //   const [loading, setLoading] = useState(false); // حالة التحميل
// // // //   const [error, setError] = useState(null); // لتخزين رسائل الخطأ
// // // //   const [success, setSuccess] = useState(null); // لتخزين رسالة النجاح

// // // //   // جلب الحجوزات من الـ API
// // // //   useEffect(() => {
// // // //     const fetchBookings = async () => {
// // // //       try {
// // // //         const response = await axios.get("/api/doctorDashboard/patients");
// // // //         setBookings(response.data); // تخزين الحجوزات في state
// // // //       } catch (err) {
// // // //         setError("حدث خطأ في جلب البيانات.");
// // // //       }
// // // //     };

// // // //     fetchBookings();
// // // //   }, []);

// // // //   // التعامل مع تغيير الملف
// // // //   const handleFileChange = (e) => {
// // // //     // تأكد من أن الملف يتم اختياره
// // // //     const selectedFile = e.target.files[0];
// // // //     setFile(selectedFile); // تعيين الملف في الحالة
// // // //     console.log(selectedFile); // تحقق من أن الملف تم اختياره بشكل صحيح
// // // //   };

// // // //   // إرسال الملف إلى الـ API
// // // //   const handleSubmit = async (e, bookingId, patientId) => {
// // // //     e.preventDefault();
// // // //     if (!file) {
// // // //       setError("من فضلك اختر ملفًا للرفع");
// // // //       return;
// // // //     }

// // // //     setLoading(true);
// // // //     setError(null);
// // // //     setSuccess(null);

// // // //     // إعداد FormData
// // // //     const formData = new FormData();
// // // //     formData.append("report", file); // إضافة الملف إلى FormData
// // // //     formData.append("bookingId", bookingId); // إرسال الـ bookingId
// // // //     formData.append("patientId", patientId); // إرسال الـ patientId
// // // //     for (let pair of formData.entries()) {
// // // //         console.log(pair[0]+ ', ' + pair[1]);
// // // //       }
// // // //     // تحقق من محتويات FormData
// // // //     console.log("FormData:", formData);

// // // //     try {
// // // //       // إرسال الطلب إلى السيرفر
// // // //       const response = await axios.post("/api/doctorDashboard/report", formData, {
// // // //         headers: {
// // // //           "Content-Type": "multipart/form-data", // تحديد نوع المحتوى
// // // //         },
// // // //       });

// // // //       setSuccess("تم رفع التقرير بنجاح!");
// // // //     } catch (err) {
// // // //       setError("حدث خطأ أثناء رفع التقرير.");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
// // // //       <h2 className="text-2xl font-semibold mb-4">رفع تقرير للمريض</h2>

// // // //       {error && <div className="text-red-600 mb-4">{error}</div>}
// // // //       {success && <div className="text-green-600 mb-4">{success}</div>}

// // // //       {/* عرض الحجوزات والمعلومات الخاصة بكل مريض */}
// // // //       {bookings.length > 0 ? (
// // // //         bookings.map((booking) => (
// // // //           <div key={booking._id} className="mb-6">
// // // //             <div className="mb-4">
// // // //               <p className="font-semibold">معلومات المريض:</p>
// // // //               <p>الاسم: {booking.patient.name}</p>
// // // //               <p>البريد الإلكتروني: {booking.patient.email}</p>
// // // //               <p>الحالة: {booking.patient.status}</p>
// // // //             </div>

// // // //             {/* نموذج رفع التقرير لكل مريض */}
// // // //             <form onSubmit={(e) => handleSubmit(e, booking._id, booking.patient._id)}>
// // // //               <div className="mb-4">
// // // //                 <label htmlFor="report" className="block text-gray-700">اختر التقرير (صورة أو PDF)</label>
// // // //                 <input
// // // //                   type="file"
// // // //                   id="report"
// // // //                   name="report"
// // // //                   accept="image/*,application/pdf"
// // // //                   onChange={handleFileChange}
// // // //                   className="mt-2 p-2 border border-gray-300 rounded"
// // // //                 />
// // // //               </div>

// // // //               <div className="mb-4">
// // // //                 <button
// // // //                   type="submit"
// // // //                   disabled={loading}
// // // //                   className={`px-4 py-2 bg-blue-500 text-white rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
// // // //                 >
// // // //                   {loading ? "جاري الرفع..." : "رفع التقرير"}
// // // //                 </button>
// // // //               </div>
// // // //             </form>
// // // //           </div>
// // // //         ))
// // // //       ) : (
// // // //         <p>لا توجد حجوزات لعرضها.</p>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default UploadReportForm;
// // // "use client";

// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";

// // // const UploadReportForm = () => {
// // //   const [bookings, setBookings] = useState([]); // لتخزين الحجوزات
// // //   const [file, setFile] = useState(null); // لتخزين الملف المرفوع
// // //   const [loading, setLoading] = useState(false); // حالة التحميل
// // //   const [error, setError] = useState(null); // لتخزين رسائل الخطأ
// // //   const [success, setSuccess] = useState(null); // لتخزين رسالة النجاح

// // //   // جلب الحجوزات من الـ API
// // //   useEffect(() => {
// // //     const fetchBookings = async () => {
// // //       try {
// // //         const response = await axios.get("/api/doctorDashboard/patients");
// // //         setBookings(response.data); // تخزين الحجوزات في state
// // //       } catch (err) {
// // //         setError("حدث خطأ في جلب البيانات.");
// // //       }
// // //     };

// // //     fetchBookings();
// // //   }, []);

// // //   // التعامل مع تغيير الملف
// // //   const handleFileChange = (e) => {
// // //     const selectedFile = e.target.files[0];
// // //     setFile(selectedFile); // تعيين الملف في الحالة
// // //     console.log(selectedFile); // تحقق من أن الملف تم اختياره بشكل صحيح
// // //   };

// // //   // إرسال الملف إلى الـ API
// // //   const handleSubmit = async (e, bookingId, patientId) => {
// // //     e.preventDefault();
// // //     if (!file) {
// // //       setError("من فضلك اختر ملفًا للرفع");
// // //       return;
// // //     }

// // //     setLoading(true);
// // //     setError(null);
// // //     setSuccess(null);

// // //     // إعداد FormData
// // //     const formData = new FormData();
// // //     formData.append("report", file); // إضافة الملف إلى FormData
// // //     formData.append("bookingId", bookingId); // إرسال الـ bookingId
// // //     formData.append("patientId", patientId); // إرسال الـ patientId

// // //     // التحقق من محتويات FormData باستخدام entries()
// // //     for (let pair of formData.entries()) {
// // //       if (pair[0] === "report") {
// // //         // إذا كان الحقل هو "report" (الملف)
// // //         console.log(`${pair[0]}: ${pair[1].name}, ${pair[1].size} bytes, ${pair[1].type}`);
// // //       } else {
// // //         console.log(`${pair[0]}: ${pair[1]}`);
// // //       }
// // //     }

// // //     try {
// // //       // إرسال الطلب إلى السيرفر
// // //       const response = await axios.post("/api/doctorDashboard/report", formData, {
// // //         headers: {
// // //           "Content-Type": "multipart/form-data", // تحديد نوع المحتوى
// // //         },
// // //       });

// // //       setSuccess("تم رفع التقرير بنجاح!");
// // //     } catch (err) {
// // //       setError("حدث خطأ أثناء رفع التقرير.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
// // //       <h2 className="text-2xl font-semibold mb-4">رفع تقرير للمريض</h2>

// // //       {error && <div className="text-red-600 mb-4">{error}</div>}
// // //       {success && <div className="text-green-600 mb-4">{success}</div>}

// // //       {/* عرض الحجوزات والمعلومات الخاصة بكل مريض */}
// // //       {bookings.length > 0 ? (
// // //         bookings.map((booking) => (
// // //           <div key={booking._id} className="mb-6">
// // //             <div className="mb-4">
// // //               <p className="font-semibold">معلومات المريض:</p>
// // //               <p>الاسم: {booking.patient.name}</p>
// // //               <p>البريد الإلكتروني: {booking.patient.email}</p>
// // //               <p>الحالة: {booking.patient.status}</p>
// // //             </div>

// // //             {/* نموذج رفع التقرير لكل مريض */}
// // //             <form onSubmit={(e) => handleSubmit(e, booking._id, booking.patient._id)}>
// // //               <div className="mb-4">
// // //                 <label htmlFor="report" className="block text-gray-700">اختر التقرير (صورة أو PDF)</label>
// // //                 <input
// // //                   type="file"
// // //                   id="report"
// // //                   name="report"
// // //                   accept="image/*,application/pdf"
// // //                   onChange={handleFileChange}
// // //                   className="mt-2 p-2 border border-gray-300 rounded"
// // //                 />
// // //               </div>

// // //               <div className="mb-4">
// // //                 <button
// // //                   type="submit"
// // //                   disabled={loading}
// // //                   className={`px-4 py-2 bg-blue-500 text-white rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
// // //                 >
// // //                   {loading ? "جاري الرفع..." : "رفع التقرير"}
// // //                 </button>
// // //               </div>
// // //             </form>
// // //           </div>
// // //         ))
// // //       ) : (
// // //         <p>لا توجد حجوزات لعرضها.</p>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default UploadReportForm;
// // "use client";

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const UploadReportForm = () => {
// //   const [bookings, setBookings] = useState([]);
// //   const [filteredBookings, setFilteredBookings] = useState([]);
// //   const [file, setFile] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [success, setSuccess] = useState(null);
// //   const [nameFilter, setNameFilter] = useState("");
// //   const [statusFilter, setStatusFilter] = useState("");

// //   // جلب الحجوزات من الـ API
// //   useEffect(() => {
// //     const fetchBookings = async () => {
// //       try {
// //         setLoading(true);
// //         const response = await axios.get("/api/doctorDashboard/patients");
// //         setBookings(response.data);
// //         setFilteredBookings(response.data);
// //       } catch (err) {
// //         setError("حدث خطأ في جلب البيانات.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchBookings();
// //   }, []);

// //   // تطبيق الفلاتر عند تغيير قيمة الاسم أو الحالة
// //   useEffect(() => {
// //     filterBookings();
// //   }, [nameFilter, statusFilter, bookings]);

// //   // وظيفة فلترة الحجوزات
// //   const filterBookings = () => {
// //     let filtered = [...bookings];

// //     // فلترة بالاسم
// //     if (nameFilter) {
// //       filtered = filtered.filter(booking => 
// //         booking.patient.name.toLowerCase().includes(nameFilter.toLowerCase())
// //       );
// //     }

// //     // فلترة بالحالة
// //     if (statusFilter) {
// //       filtered = filtered.filter(booking => 
// //         booking.patient.status === statusFilter
// //       );
// //     }

// //     setFilteredBookings(filtered);
// //   };

// //   // التعامل مع تغيير الملف
// //   const handleFileChange = (e) => {
// //     const selectedFile = e.target.files[0];
// //     setFile(selectedFile);
// //   };

// //   // إرسال الملف إلى الـ API
// //   const handleSubmit = async (e, bookingId, patientId) => {
// //     e.preventDefault();
// //     if (!file) {
// //       setError("من فضلك اختر ملفًا للرفع");
// //       return;
// //     }

// //     setLoading(true);
// //     setError(null);
// //     setSuccess(null);

// //     // إعداد FormData
// //     const formData = new FormData();
// //     formData.append("report", file);
// //     formData.append("bookingId", bookingId);
// //     formData.append("patientId", patientId);

// //     try {
// //       // إرسال الطلب إلى السيرفر
// //       const response = await axios.post("/api/doctorDashboard/report", formData, {
// //         headers: {
// //           "Content-Type": "multipart/form-data",
// //         },
// //       });

// //       setSuccess("تم رفع التقرير بنجاح!");
// //       setFile(null);
      
// //       // إعادة تعيين قيمة حقل الملف
// //       const fileInput = document.getElementById(`report-${bookingId}`);
// //       if (fileInput) fileInput.value = "";
      
// //     } catch (err) {
// //       setError("حدث خطأ أثناء رفع التقرير.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // الحصول على القيم الفريدة للحالة
// //   const getUniqueStatuses = () => {
// //     const statuses = bookings.map(booking => booking.patient.status);
// //     return [...new Set(statuses)];
// //   };

// //   return (
// //     <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
// //       <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">نظام رفع تقارير المرضى</h2>
      
// //       {/* قسم الفلاتر */}
// //       <div className="bg-gray-50 p-4 rounded-lg mb-6 shadow-sm">
// //         <h3 className="text-lg font-semibold mb-3 text-gray-700">فلترة المرضى</h3>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           <div>
// //             <label htmlFor="nameFilter" className="block text-gray-600 mb-1">البحث بالاسم</label>
// //             <input
// //               type="text"
// //               id="nameFilter"
// //               value={nameFilter}
// //               onChange={(e) => setNameFilter(e.target.value)}
// //               placeholder="أدخل اسم المريض..."
// //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none"
// //             />
// //           </div>
// //           <div>
// //             <label htmlFor="statusFilter" className="block text-gray-600 mb-1">تصفية بالحالة</label>
// //             <select
// //               id="statusFilter"
// //               value={statusFilter}
// //               onChange={(e) => setStatusFilter(e.target.value)}
// //               className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none"
// //             >
// //               <option value="">جميع الحالات</option>
// //               {getUniqueStatuses().map((status, index) => (
// //                 <option key={index} value={status}>{status}</option>
// //               ))}
// //             </select>
// //           </div>
// //         </div>
// //       </div>

// //       {/* عرض رسائل الخطأ والنجاح */}
// //       {error && <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4 border border-red-200">{error}</div>}
// //       {success && <div className="bg-green-50 text-green-700 p-3 rounded-md mb-4 border border-green-200">{success}</div>}

// //       {/* عرض حالة التحميل الأولية */}
// //       {loading && bookings.length === 0 && (
// //         <div className="text-center py-10">
// //           <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-blue-600 mb-2"></div>
// //           <p className="text-gray-600">جاري تحميل بيانات المرضى...</p>
// //         </div>
// //       )}

// //       {/* عرض رسالة إذا لم يتم العثور على نتائج للفلتر */}
// //       {filteredBookings.length === 0 && bookings.length > 0 && (
// //         <div className="text-center py-6 bg-gray-50 rounded-lg">
// //           <p className="text-gray-600">لا توجد نتائج مطابقة للفلتر المحدد.</p>
// //         </div>
// //       )}

// //       {/* عرض الحجوزات والمعلومات الخاصة بكل مريض */}
// //       <div className="space-y-6">
// //         {filteredBookings.map((booking) => (
// //           <div key={booking._id} className="bg-gray-50 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
// //             <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
// //               {/* معلومات المريض */}
// //               <div className="flex-1">
// //                 <h3 className="text-lg font-semibold text-gray-800 mb-2">معلومات المريض</h3>
// //                 <div className="bg-white p-3 rounded shadow-sm">
// //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
// //                     <p><span className="font-medium">الاسم:</span> {booking.patient.name}</p>
// //                     <p><span className="font-medium">البريد الإلكتروني:</span> {booking.patient.email}</p>
// //                     <p><span className="font-medium">الحالة:</span> 
// //                       <span className={`mr-2 px-2 py-1 rounded-full text-xs ${
// //                         booking.patient.status === "نشط" ? "bg-green-100 text-green-800" : 
// //                         booking.patient.status === "منتظر" ? "bg-yellow-100 text-yellow-800" : 
// //                         "bg-gray-100 text-gray-800"
// //                       }`}>
// //                         {booking.patient.status}
// //                       </span>
// //                     </p>
// //                     <p><span className="font-medium">رقم الحجز:</span> {booking._id.slice(-6)}</p>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* نموذج رفع التقرير */}
// //               <div className="flex-1">
// //                 <h3 className="text-lg font-semibold text-gray-800 mb-2">رفع تقرير</h3>
// //                 <form onSubmit={(e) => handleSubmit(e, booking._id, booking.patient._id)} className="bg-white p-3 rounded shadow-sm">
// //                   <div className="mb-3">
// //                     <label htmlFor={`report-${booking._id}`} className="block text-gray-600 mb-1">اختر الملف (صورة أو PDF)</label>
// //                     <input
// //                       type="file"
// //                       id={`report-${booking._id}`}
// //                       name="report"
// //                       accept="image/*,application/pdf"
// //                       onChange={handleFileChange}
// //                       className="w-full p-2 border border-gray-300 rounded-md text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
// //                     />
// //                   </div>
// //                   <button
// //                     type="submit"
// //                     disabled={loading}
// //                     className={`w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
// //                   >
// //                     {loading ? (
// //                       <span className="flex items-center justify-center">
// //                         <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></span>
// //                         جاري الرفع...
// //                       </span>
// //                     ) : "رفع التقرير"}
// //                   </button>
// //                 </form>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* عرض رسالة في حالة عدم وجود حجوزات */}
// //       {bookings.length === 0 && !loading && (
// //         <div className="text-center py-10 bg-gray-50 rounded-lg">
// //           <p className="text-gray-600">لا توجد حجوزات لعرضها.</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default UploadReportForm;
// "use client";

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const UploadReportForm = () => {
//   const [bookings, setBookings] = useState([]);
//   const [filteredBookings, setFilteredBookings] = useState([]);
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const [nameFilter, setNameFilter] = useState("");
//   const [statusFilter, setStatusFilter] = useState("");
//   const [activeBookingId, setActiveBookingId] = useState(null);

//   // جلب الحجوزات من الـ API
//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get("/api/doctorDashboard/patients");
//         setBookings(response.data);
//         setFilteredBookings(response.data);
//       } catch (err) {
//         setError("حدث خطأ في جلب البيانات.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);

//   // تطبيق الفلاتر عند تغيير قيمة الاسم أو الحالة
//   useEffect(() => {
//     filterBookings();
//   }, [nameFilter, statusFilter, bookings]);

//   // وظيفة فلترة الحجوزات
//   const filterBookings = () => {
//     let filtered = [...bookings];

//     // فلترة بالاسم
//     if (nameFilter) {
//       filtered = filtered.filter(booking => 
//         booking.patient.name.toLowerCase().includes(nameFilter.toLowerCase())
//       );
//     }

//     // فلترة بالحالة
//     if (statusFilter) {
//       filtered = filtered.filter(booking => 
//         booking.patient.status === statusFilter
//       );
//     }

//     setFilteredBookings(filtered);
//   };

//   // التعامل مع تغيير الملف
//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   };

//   // إرسال الملف إلى الـ API
//   const handleSubmit = async (e, bookingId, patientId) => {
//     e.preventDefault();
//     if (!file) {
//       setError("من فضلك اختر ملفًا للرفع");
//       return;
//     }

//     setLoading(true);
//     setActiveBookingId(bookingId);
//     setError(null);
//     setSuccess(null);

//     // إعداد FormData
//     const formData = new FormData();
//     formData.append("report", file);
//     formData.append("bookingId", bookingId);
//     formData.append("patientId", patientId);

//     try {
//       // إرسال الطلب إلى السيرفر
//       const response = await axios.post("/api/doctorDashboard/report", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       setSuccess("تم رفع التقرير بنجاح!");
//       setFile(null);
      
//       // إعادة تعيين قيمة حقل الملف
//       const fileInput = document.getElementById(`report-${bookingId}`);
//       if (fileInput) fileInput.value = "";
      
//     } catch (err) {
//       setError("حدث خطأ أثناء رفع التقرير.");
//     } finally {
//       setLoading(false);
//       setActiveBookingId(null);
//     }
//   };

//   // الحصول على القيم الفريدة للحالة
//   const getUniqueStatuses = () => {
//     const statuses = bookings.map(booking => booking.patient.status);
//     return [...new Set(statuses)];
//   };

//   // تعريف الألوان حسب الحالة
//   const getStatusColor = (status) => {
//     switch (status) {
//       case "نشط":
//         return "bg-green-100 text-green-800 border-green-200";
//       case "منتظر":
//         return "bg-yellow-100 text-yellow-800 border-yellow-200";
//       case "مكتمل":
//         return "bg-blue-100 text-blue-800 border-blue-200";
//       case "ملغي":
//         return "bg-red-100 text-red-800 border-red-200";
//       default:
//         return "bg-gray-100 text-gray-800 border-gray-200";
//     }
//   };

//   const handleClearFilters = () => {
//     setNameFilter("");
//     setStatusFilter("");
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 font-sans">
//       <div className="max-w-5xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-indigo-900">نظام رفع تقارير المرضى</h1>
//           <p className="mt-2 text-gray-600">إدارة وتحميل تقارير المرضى في مكان واحد</p>
//         </div>

//         {/* Filter Section */}
//         <div className="bg-white rounded-xl shadow-md mb-8 overflow-hidden">
//           <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100">
//             <h2 className="text-lg font-semibold text-indigo-900">فلترة المرضى</h2>
//           </div>
//           <div className="p-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="nameFilter" className="block text-sm font-medium text-gray-700 mb-1">البحث بالاسم</label>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     id="nameFilter"
//                     value={nameFilter}
//                     onChange={(e) => setNameFilter(e.target.value)}
//                     placeholder="أدخل اسم المريض..."
//                     className="block w-full pr-10 pl-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                   />
//                   {nameFilter && (
//                     <button
//                       onClick={() => setNameFilter("")}
//                       className="absolute inset-y-0 left-0 pl-3 flex items-center"
//                     >
//                       <span className="text-gray-400 hover:text-gray-500">✕</span>
//                     </button>
//                   )}
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="statusFilter" className="block text-sm font-medium text-gray-700 mb-1">تصفية بالحالة</label>
//                 <select
//                   id="statusFilter"
//                   value={statusFilter}
//                   onChange={(e) => setStatusFilter(e.target.value)}
//                   className="block w-full py-2.5 px-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                 >
//                   <option value="">جميع الحالات</option>
//                   {getUniqueStatuses().map((status, index) => (
//                     <option key={index} value={status}>{status}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//             <div className="mt-4 flex justify-end">
//               <button
//                 onClick={handleClearFilters}
//                 className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
//               >
//                 مسح الفلاتر
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Alerts */}
//         {error && (
//           <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4 rounded-md shadow-sm">
//             <div className="flex">
//               <div className="flex-shrink-0">
//                 <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                 </svg>
//               </div>
//               <div className="mr-3">
//                 <p className="text-sm text-red-700">{error}</p>
//               </div>
//             </div>
//           </div>
//         )}

//         {success && (
//           <div className="mb-6 bg-green-50 border-l-4 border-green-400 p-4 rounded-md shadow-sm">
//             <div className="flex">
//               <div className="flex-shrink-0">
//                 <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                 </svg>
//               </div>
//               <div className="mr-3">
//                 <p className="text-sm text-green-700">{success}</p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Loading */}
//         {loading && bookings.length === 0 && (
//           <div className="bg-white rounded-xl shadow-md p-8 mb-6">
//             <div className="flex justify-center items-center flex-col">
//               <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-100 border-t-indigo-600"></div>
//               <p className="mt-4 text-gray-600">جاري تحميل بيانات المرضى...</p>
//             </div>
//           </div>
//         )}

//         {/* No Results */}
//         {filteredBookings.length === 0 && bookings.length > 0 && (
//           <div className="bg-white rounded-xl shadow-md p-8 mb-6 text-center">
//             <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//             <h3 className="mt-2 text-lg font-medium text-gray-900">لا توجد نتائج</h3>
//             <p className="mt-1 text-gray-500">لا توجد نتائج مطابقة للفلتر المحدد.</p>
//             <div className="mt-6">
//               <button
//                 onClick={handleClearFilters}
//                 className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
//               >
//                 مسح الفلاتر
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Patient List */}
//         <div className="space-y-6">
//           {filteredBookings.map((booking) => (
//             <div key={booking._id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
//               <div className="border-b border-gray-100 bg-indigo-50 px-6 py-4 flex justify-between items-center">
//                 <h3 className="text-lg font-medium text-indigo-900">
//                   {booking.patient.name}
//                 </h3>
//                 <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(booking.patient.status)}`}>
//                   {booking.patient.status}
//                 </span>
//               </div>
              
//               <div className="p-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {/* Patient Info */}
//                   <div>
//                     <h4 className="text-base font-medium text-gray-800 mb-3">معلومات المريض</h4>
//                     <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
//                       <dl className="grid grid-cols-1 gap-3">
//                         <div className="flex justify-between">
//                           <dt className="text-sm font-medium text-gray-500">البريد الإلكتروني:</dt>
//                           <dd className="text-sm text-gray-900">{booking.patient.email}</dd>
//                         </div>
//                         <div className="flex justify-between">
//                           <dt className="text-sm font-medium text-gray-500">رقم الحجز:</dt>
//                           <dd className="text-sm text-gray-900">{booking._id.slice(-6)}</dd>
//                         </div>
//                         {booking.reason && (
//                           <div className="flex justify-between">
//                             <dt className="text-sm font-medium text-gray-500">سبب الزيارة:</dt>
//                             <dd className="text-sm text-gray-900">{booking.reason}</dd>
//                           </div>
//                         )}
//                         {booking.date && (
//                           <div className="flex justify-between">
//                             <dt className="text-sm font-medium text-gray-500">تاريخ الموعد:</dt>
//                             <dd className="text-sm text-gray-900">{booking.date}</dd>
//                           </div>
//                         )}
//                         {booking.time && (
//                           <div className="flex justify-between">
//                             <dt className="text-sm font-medium text-gray-500">وقت الموعد:</dt>
//                             <dd className="text-sm text-gray-900">{booking.time}</dd>
//                           </div>
//                         )}
//                       </dl>
//                     </div>
//                   </div>
                  
//                   {/* Upload Form */}
//                   <div>
//                     <h4 className="text-base font-medium text-gray-800 mb-3">رفع تقرير</h4>
//                     <form onSubmit={(e) => handleSubmit(e, booking._id, booking.patient._id)} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
//                       <div className="mb-4">
//                         <label htmlFor={`report-${booking._id}`} className="block text-sm font-medium text-gray-700 mb-2">
//                           اختر الملف (صورة أو PDF)
//                         </label>
//                         <input
//                           type="file"
//                           id={`report-${booking._id}`}
//                           name="report"
//                           accept="image/*,application/pdf"
//                           onChange={handleFileChange}
//                           className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 border border-gray-300 rounded-lg px-3 py-2 cursor-pointer"
//                         />
//                         <p className="mt-1 text-xs text-gray-500">الملفات المدعومة: صور، PDF</p>
//                       </div>
//                       <button
//                         type="submit"
//                         disabled={loading && activeBookingId === booking._id}
//                         className={`w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
//                           loading && activeBookingId === booking._id ? "opacity-70 cursor-not-allowed" : ""
//                         }`}
//                       >
//                         {loading && activeBookingId === booking._id ? (
//                           <>
//                             <span className="inline-block h-4 w-4 mr-2 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
//                             جاري الرفع...
//                           </>
//                         ) : (
//                           "رفع التقرير"
//                         )}
//                       </button>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* No Bookings */}
//         {bookings.length === 0 && !loading && (
//           <div className="bg-white rounded-xl shadow-md p-8 text-center">
//             <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
//             </svg>
//             <h3 className="mt-2 text-lg font-medium text-gray-900">لا توجد حجوزات</h3>
//             <p className="mt-1 text-gray-500">لا توجد حجوزات متاحة لعرضها حاليًا.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UploadReportForm;
"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const UploadReportForm = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [activeBookingId, setActiveBookingId] = useState(null);

  // Fetch bookings from the API
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/doctorDashboard/patients");
        setBookings(response.data);
        setFilteredBookings(response.data);
      } catch (err) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // Apply filters when name or status changes
  useEffect(() => {
    filterBookings();
  }, [nameFilter, statusFilter, bookings]);

  // Function to filter bookings
  const filterBookings = () => {
    let filtered = [...bookings];

    // Filter by name
    if (nameFilter) {
      filtered = filtered.filter((booking) =>
        booking.patient.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    // Filter by status
    if (statusFilter) {
      filtered = filtered.filter(
        (booking) => booking.patient.status === statusFilter
      );
    }

    setFilteredBookings(filtered);
  };

  // Handle file change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  // Submit the file to the API
  const handleSubmit = async (e, bookingId, patientId) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    setLoading(true);
    setActiveBookingId(bookingId);
    setError(null);
    setSuccess(null);

    // Prepare FormData
    const formData = new FormData();
    formData.append("report", file);
    formData.append("bookingId", bookingId);
    formData.append("patientId", patientId);

    try {
      // Submit the request to the server
      await axios.post("/api/doctorDashboard/report", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccess("Report uploaded successfully!");
      setFile(null);

      // Reset file input value
      const fileInput = document.getElementById(`report-${bookingId}`);
      if (fileInput) fileInput.value = "";
    } catch (err) {
      setError("An error occurred while uploading the report.");
    } finally {
      setLoading(false);
      setActiveBookingId(null);
    }
  };

  // Get unique status values
  const getUniqueStatuses = () => {
    const statuses = bookings.map((booking) => booking.patient.status);
    return [...new Set(statuses)];
  };

  // Define colors based on status
  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 border-green-200";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Completed":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const handleClearFilters = () => {
    setNameFilter("");
    setStatusFilter("");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6">
  
        {/* Header */}
        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-gray-800">
            Patient Report Upload System
          </h1>
          <p className="mt-2 text-gray-600">
            Manage and upload patient reports in one place
          </p>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-xl shadow-md mb-8 overflow-hidden">
          <div className="bg-gray-100 px-6 py-4 border-b border-indigo-100">
            <h2 className="text-lg font-semibold text-gray-700">
              Filter Patients
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="nameFilter"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Search by Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="nameFilter"
                    value={nameFilter}
                    onChange={(e) => setNameFilter(e.target.value)}
                    placeholder="Enter patient name..."
                    className="block w-full pr-10 pl-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  {nameFilter && (
                    <button
                      onClick={() => setNameFilter("")}
                      className="absolute inset-y-0 left-0 pl-3 flex items-center"
                    >
                      <span className="text-gray-400 hover:text-gray-500">
                        ✕
                      </span>
                    </button>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="statusFilter"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Filter by Status
                </label>
                <select
                  id="statusFilter"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="block w-full py-2.5 px-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">All statuses</option>
                  {getUniqueStatuses().map((status, index) => (
                    <option key={index} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleClearFilters}
                className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Alerts */}
        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4 rounded-md shadow-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="mr-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {success && (
          <div className="mb-6 bg-green-50 border-l-4 border-green-400 p-4 rounded-md shadow-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="mr-3">
                <p className="text-sm text-green-700">{success}</p>
              </div>
            </div>
          </div>
        )}

        {/* Loading */}
        {loading && bookings.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-8 mb-6">
            <div className="flex justify-center items-center flex-col">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-100 border-t-indigo-600"></div>
              <p className="mt-4 text-gray-600">Loading patient data...</p>
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredBookings.length === 0 && bookings.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-8 mb-6 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No results found
            </h3>
            <p className="mt-1 text-gray-500">
              No results match the applied filter.
            </p>
            <div className="mt-6">
              <button
                onClick={handleClearFilters}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

        {/* Patient List */}
        <div className="space-y-6">
          {filteredBookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="border-b border-gray-100 bg-gray-100 px-6 py-4 flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-700">
                  {booking.patient.name}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                    booking.patient.status
                  )}`}
                >
                  {booking.patient.status}
                </span>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Patient Info */}
                  <div>
                    <h4 className="text-base font-medium text-gray-800 mb-3">
                      Patient Information
                    </h4>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                      <dl className="grid grid-cols-1 gap-3">
                        <div className="flex justify-between">
                          <dt className="text-sm font-medium text-gray-500">
                            Email:
                          </dt>
                          <dd className="text-sm text-gray-900">
                            {booking.patient.email}
                          </dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-sm font-medium text-gray-500">
                            Booking ID:
                          </dt>
                          <dd className="text-sm text-gray-900">
                            {booking._id.slice(-6)}
                          </dd>
                        </div>
                        {booking.reason && (
                          <div className="flex justify-between">
                            <dt className="text-sm font-medium text-gray-500">
                              Reason for Visit:
                            </dt>
                            <dd className="text-sm text-gray-900">
                              {booking.reason}
                            </dd>
                          </div>
                        )}
                        {booking.date && (
                          <div className="flex justify-between">
                            <dt className="text-sm font-medium text-gray-500">
                              Appointment Date:
                            </dt>
                            <dd className="text-sm text-gray-900">
                              {booking.date}
                            </dd>
                          </div>
                        )}
                        {booking.time && (
                          <div className="flex justify-between">
                            <dt className="text-sm font-medium text-gray-500">
                              Appointment Time:
                            </dt>
                            <dd className="text-sm text-gray-900">
                              {booking.time}
                            </dd>
                          </div>
                        )}
                      </dl>
                    </div>
                  </div>

                  {/* Upload Form */}
                  <div>
                    <h4 className="text-base font-medium text-gray-800 mb-3">
                      Upload Report
                    </h4>
                    <form
                      onSubmit={(e) =>
                        handleSubmit(e, booking._id, booking.patient._id)
                      }
                      className="bg-gray-50 rounded-lg p-4 border border-gray-100"
                    >
                      <div className="mb-4">
                        <label
                          htmlFor={`report-${booking._id}`}
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Select file (image or PDF)
                        </label>
                        <input
                          type="file"
                          id={`report-${booking._id}`}
                          name="report"
                          accept="image/*,application/pdf"
                          onChange={handleFileChange}
                          className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 border border-gray-300 rounded-lg px-3 py-2 cursor-pointer"
                        />
                        <p className="mt-1 text-xs text-gray-500">
                          Supported files: Images, PDF
                        </p>
                      </div>
                      <button
                        type="submit"
                        disabled={
                          loading && activeBookingId === booking._id
                        }
                        className={`w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                          loading && activeBookingId === booking._id
                            ? "opacity-70 cursor-not-allowed"
                            : ""
                        }`}
                      >
                        {loading && activeBookingId === booking._id ? (
                          <>
                            <span className="inline-block h-4 w-4 mr-2 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                            Uploading...
                          </>
                        ) : (
                          "Upload Report"
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Bookings */}
        {bookings.length === 0 && !loading && (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No bookings found
            </h3>
            <p className="mt-1 text-gray-500">
              There are no bookings available for display right now.
            </p>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default UploadReportForm;
