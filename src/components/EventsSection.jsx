import { useState } from 'react';
import EventCard from './EventCard';

export default function EventsSection({ title, events, isUpcoming, gradient, usePagination = false }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  if (events.length === 0) return null;

  // Calculate pagination
  const totalPages = usePagination ? Math.ceil(events.length / itemsPerPage) : 1;
  const startIndex = usePagination ? currentPage * itemsPerPage : 0;
  const endIndex = usePagination ? startIndex + itemsPerPage : events.length;
  const displayedEvents = events.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="py-20 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-0 w-96 h-96 ${gradient} opacity-10 blur-3xl`}></div>
        <div className={`absolute bottom-0 right-0 w-96 h-96 ${gradient} opacity-10 blur-3xl`}></div>
      </div>

      <div className="w-full mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-4 inline-block">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-neon mx-auto rounded-full"></div>
        </div>

        {/* Events Grid */}
        <div className="flex flex-col gap-6">
          {displayedEvents.map((event, index) => (
            <EventCard key={index} event={event} isUpcoming={isUpcoming} />
          ))}
        </div>

        {/* Pagination Controls */}
        {usePagination && totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 0}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-transform"
              aria-label="Página anterior"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <span className="text-white font-bold">
              {currentPage + 1} / {totalPages}
            </span>

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages - 1}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-transform"
              aria-label="Página siguiente"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
