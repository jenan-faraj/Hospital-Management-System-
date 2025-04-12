'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, X, Search, Calendar, Tag, ChevronRight, FileText } from 'lucide-react';

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const getArticles = async () => {
      try {
        const res = await fetch('/api/articles');
        const data = await res.json();
        setArticles(data.data);
        setFilteredArticles(data.data);
      } catch (error) {
        console.error('Failed to fetch articles:', error);
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  useEffect(() => {
    filterArticles();
  }, [searchQuery, activeCategory, articles]);

  const filterArticles = () => {
    let results = [...articles];
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.summary.toLowerCase().includes(query) ||
          (article.fullContent && article.fullContent.toLowerCase().includes(query)) ||
          (article.tags && article.tags.some((tag) => tag.toLowerCase().includes(query))) ||
          (article.category && article.category.toLowerCase().includes(query))
      );
    }
    
    // Filter by category
    if (activeCategory !== 'All') {
      results = results.filter(article => article.category === activeCategory);
    }
    
    setFilteredArticles(results);
  };

  const closePopup = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'auto';
  };

  const openArticlePopup = (article) => {
    setSelectedArticle(article);
    document.body.style.overflow = 'hidden';
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setActiveCategory('All');
  };

  // Extract unique categories from articles
  const categories = ['All', ...new Set(articles.map(article => article.category).filter(Boolean))];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section with Search */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/92/a9/b3/92a9b380d4785c149eaeabdc49530518.jpg"
          alt="Medical articles hero image"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#415A80]/70 to-[#415A80]/90"></div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 text-center text-white z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Health Articles & Resources</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl opacity-90">
            Discover the latest insights, tips, and research in healthcare and wellness
          </p>
          
          {/* Search Bar */}
          <div className="w-full max-w-3xl mx-auto">
            <div className="relative flex items-center">
              <Search className="absolute left-4 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-4 py-4 bg-[#d6d4e24f] placeholder:text-[#f2f2f2] rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#A5D4DC] shadow-lg"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 text-gray-400 hover:text-gray-600"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="bg-white shadow-sm sticky top-0 z-20">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto py-3">
            <div className="flex space-x-2 min-w-max">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-[#415A80] text-white'
                      : 'bg-[#D7E2E9] text-[#415A80] hover:bg-[#A5D4DC]/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filter Results Info */}
          {!loading && (
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-4 sm:mb-0">
                <h2 className="text-2xl font-bold text-[#415A80]">
                  {searchQuery || activeCategory !== 'All' ? 'Search Results' : 'All Articles'}
                </h2>
                {(searchQuery || activeCategory !== 'All') && (
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    {searchQuery && (
                      <span className="bg-[#D7E2E9] text-[#415A80] text-sm px-3 py-1 rounded-full flex items-center">
                        <Search size={14} className="mr-1" />
                        {searchQuery}
                      </span>
                    )}
                    {activeCategory !== 'All' && (
                      <span className="bg-[#D7E2E9] text-[#415A80] text-sm px-3 py-1 rounded-full flex items-center">
                        <Tag size={14} className="mr-1" />
                        {activeCategory}
                      </span>
                    )}
                    <span className="text-gray-500 text-sm">
                      ({filteredArticles.length} results)
                    </span>
                  </div>
                )}
              </div>
              
              {(searchQuery || activeCategory !== 'All') && (
                <button
                  onClick={clearFilters}
                  className="flex items-center text-sm text-[#415A80] hover:text-[#A5D4DC] transition-colors"
                >
                  <X size={16} className="mr-1" />
                  Clear filters
                </button>
              )}
            </div>
          )}

          {/* Articles Grid */}
          {loading ? (
            // Loading skeleton
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <div key={n} className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-100 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-100 rounded w-5/6 mb-6"></div>
                    <div className="flex justify-between">
                      <div className="h-4 w-16 bg-gray-200 rounded"></div>
                      <div className="h-4 w-20 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredArticles.length === 0 ? (
            // No results state
            <div className="bg-white rounded-xl shadow-sm p-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D7E2E9] text-[#415A80] mb-4">
                <FileText size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#415A80] mb-2">No articles found</h3>
              <p className="text-gray-500 mb-6">
                We couldn't find any articles matching your search criteria
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-2 bg-[#415A80] text-white rounded-lg hover:bg-[#A5D4DC] transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            // Articles grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {filteredArticles.map((article, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-[#D7E2E9] hover:border-[#A5D4DC] group"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {article.category && (
                      <span className="absolute top-3 left-3 bg-[#415A80]/80 text-white text-xs px-2 py-1 rounded">
                        {article.category}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#415A80] mb-2 group-hover:text-[#A5D4DC] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {article.summary}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-xs flex items-center">
                        <Clock size={14} className="mr-1" />
                        {article.readTime}
                      </span>
                      <button
                        onClick={() => openArticlePopup(article)}
                        className="text-[#415A80] font-medium text-sm flex items-center group-hover:text-[#A5D4DC] transition-colors"
                      >
                        Read More
                        <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Article Popup Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-[#415A80]/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-xl">
            <div className="relative">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              >
                <X size={20} />
              </button>
              {selectedArticle.category && (
                <span className="absolute bottom-4 left-4 bg-[#415A80] text-white text-sm px-3 py-1 rounded-lg">
                  {selectedArticle.category}
                </span>
              )}
            </div>
            <div className="p-6 md:p-8 overflow-y-auto">
              <h3 className="text-2xl font-bold text-[#415A80] mb-4">
                {selectedArticle.title}
              </h3>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-gray-500 text-sm flex items-center">
                  <Clock size={16} className="mr-1" />
                  {selectedArticle.readTime}
                </span>
                {selectedArticle.publishDate && (
                  <span className="text-gray-500 text-sm flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {selectedArticle.publishDate}
                  </span>
                )}
              </div>

              {selectedArticle.tags && selectedArticle.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedArticle.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#D7E2E9] px-3 py-1 rounded-full text-sm text-[#415A80]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="prose prose-lg max-w-none text-gray-700">
                {selectedArticle.fullContent
                  .split('\n\n')
                  .map((paragraph, idx) => (
                    <p key={idx} className="mb-4">{paragraph}</p>
                  ))}
              </div>
            </div>
            <div className="p-6 border-t border-[#D7E2E9] mt-auto">
              <button
                onClick={closePopup}
                className="w-full py-3 bg-[#415A80] text-white rounded-lg font-medium hover:bg-[#A5D4DC] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}