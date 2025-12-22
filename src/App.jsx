import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import EventsSection from './components/EventsSection';
import Footer from './components/Footer';
import { parseEventsCSV, separateEvents } from './util/parseEvents';

function App() {
  const [events, setEvents] = useState({ upcoming: [], past: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadEvents() {
      const allEvents = await parseEventsCSV();
      const { upcoming, past } = separateEvents(allEvents);
      setEvents({ upcoming, past });
      setLoading(false);
    }

    loadEvents();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-xl">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex justify-center">
      <div className="w-full max-w-[375px] min-h-screen bg-black text-white font-sans">
        {/* Hero Section */}
        <Hero nextEvent={events.upcoming[0]} />

        {/* Upcoming Events Section */}
        {events.upcoming.length > 0 && (
          <EventsSection
            title="PRÓXIMAS FECHAS"
            events={events.upcoming}
            isUpcoming={true}
            gradient="bg-gradient-to-br from-primary to-neon-magenta"
          />
        )}

        {/* Past Events Section */}
        {events.past.length > 0 && (
          <EventsSection
            title="EVENTOS PASADOS"
            events={events.past}
            isUpcoming={false}
            gradient="bg-gradient-to-br from-secondary to-neon-purple"
            usePagination={true}
          />
        )}

        {/* About Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-rainbow bg-clip-text text-transparent">
                EPIC
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Más que una fiesta, somos una familia. EPIC reúne a los mejores artistas de música electrónica
              de América del Sur en una celebración inclusiva y llena de energía.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="px-6 py-2 bg-primary/20 border border-primary rounded-full text-primary font-bold">
                House
              </span>
              <span className="px-6 py-2 bg-secondary/20 border border-secondary rounded-full text-secondary font-bold">
                Techno
              </span>
              <span className="px-6 py-2 bg-neon-cyan/20 border border-neon-cyan rounded-full text-neon-cyan font-bold">
                LGBTQ+ Friendly
              </span>
              <span className="px-6 py-2 bg-neon-orange/20 border border-neon-orange rounded-full text-neon-orange font-bold">
                Inclusivo
              </span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
