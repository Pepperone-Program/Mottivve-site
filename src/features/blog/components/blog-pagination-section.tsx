'use client';

import { useState } from 'react';

interface BlogPaginationSectionProps {
  totalPages?: number;
  currentPage?: number;
}

const BlogPaginationSection: React.FC<BlogPaginationSectionProps> = ({
  totalPages = 10,
  currentPage = 2
}) => {
  const [activePage, setActivePage] = useState<number>(currentPage);

  const handlePageClick = (page: number) => {
    setActivePage(page);
  };

  const handlePrevious = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  const handleNext = () => {
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
    }
  };

  return (
    <div className="container px-4 mx-auto">
      <div>
        <nav>
          <ul className="flex items-center justify-center">
            {/* Previous Button */}
            <li className="mr-2">
              <a
                className="inline-flex items-center justify-center w-9 h-9 text-sm text-gray-500 rounded-md border border-gray-200 shadow-sm hover:bg-gray-50 cursor-pointer"
                onClick={handlePrevious}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 5L7.5 10L12.5 15" stroke="#3B5444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </a>
            </li>

            {/* Page Numbers */}
            <li className="mx-px">
              <a
                className={`inline-flex items-center justify-center w-9 h-9 text-sm rounded-md cursor-pointer ${
                  activePage === 1
                    ? 'text-gray-900 font-semibold bg-gray-50'
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
                onClick={() => handlePageClick(1)}
              >
                1
              </a>
            </li>

            <li className="mx-px">
              <a
                className={`inline-flex items-center justify-center w-9 h-9 text-sm rounded-md cursor-pointer ${
                  activePage === 2
                    ? 'text-gray-900 font-semibold bg-gray-50'
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
                onClick={() => handlePageClick(2)}
              >
                2
              </a>
            </li>

            <li className="mx-px">
              <a
                className={`inline-flex items-center justify-center w-9 h-9 text-sm rounded-md cursor-pointer ${
                  activePage === 3
                    ? 'text-gray-900 font-semibold bg-gray-50'
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
                onClick={() => handlePageClick(3)}
              >
                3
              </a>
            </li>

            {/* Ellipsis */}
            <li className="mx-px">
              <a className="inline-flex items-center justify-center w-9 h-9 text-sm text-gray-500 rounded-md hover:bg-gray-50">
                ...
              </a>
            </li>

            {/* Last Page */}
            <li className="mx-px">
              <a
                className={`inline-flex items-center justify-center w-9 h-9 text-sm rounded-md cursor-pointer ${
                  activePage === totalPages
                    ? 'text-gray-900 font-semibold bg-gray-50'
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
                onClick={() => handlePageClick(totalPages)}
              >
                {totalPages}
              </a>
            </li>

            {/* Next Button */}
            <li className="ml-2">
              <a
                className="inline-flex items-center justify-center w-9 h-9 text-sm text-gray-500 rounded-md border border-gray-200 shadow-sm hover:bg-gray-50 cursor-pointer"
                onClick={handleNext}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="#3B5444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BlogPaginationSection;