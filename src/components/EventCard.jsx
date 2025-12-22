export default function EventCard({ event, isUpcoming }) {
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="group relative bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,110,0.3)]">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

      <div className="relative p-6">
        {/* Date Badge */}
        <div className="inline-block bg-secondary/20 border border-secondary rounded-lg px-4 py-2 mb-4">
          <p className="text-neon-cyan font-bold text-sm tracking-wider">
            {formattedDate}
          </p>
        </div>

        {/* Venue */}
        <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {event.venue}
        </h3>

        {/* Location */}
        <p className="text-gray-400 text-lg mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-neon-magenta" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {event.city}, {event.country}
        </p>

        {/* Action Button */}
        {isUpcoming && event.ticketUrl && (
          <a
            href={event.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center bg-primary hover:bg-neon-magenta text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:shadow-[0_0_20px_rgba(255,0,110,0.5)]"
          >
            CONSEGUIR TICKETS
          </a>
        )}

        {!isUpcoming && event.galleryUrl && (
          <a
            href={event.galleryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center bg-secondary hover:bg-secondary-600 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:shadow-[0_0_20px_rgba(131,56,236,0.5)]"
          >
            VER GALERÍA
          </a>
        )}
      </div>

      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-neon opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"></div>
    </div>
  );
}
