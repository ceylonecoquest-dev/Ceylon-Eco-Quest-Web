import { useState } from 'react';

const Gallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const albums = [
    {
      id: 'history',
      title: 'History',
      cover: '/images/Gallery/Historical Places/HP3.jpeg',
      photos: [
        { src: '/images/Gallery/Historical Places/HP1.jpeg' },
        { src: '/images/Gallery/Historical Places/HP3.jpeg' },
        { src: '/images/Gallery/Historical Places/HP4.jpeg' },

      ]
    },
    {
      id: 'cultural-heritage',
      title: 'Cultural Heritage',
      cover: '/images/Gallery/Culture and Heritage/CH1.jpeg',
      photos: [
        { src: '/images/Gallery/Culture and Heritage/CH1.jpeg' },
        { src: '/images/Gallery/Culture and Heritage/CH2.jpeg' },
        { src: '/images/Gallery/Culture and Heritage/CH3.jpeg' },
        { src: '/images/Gallery/Culture and Heritage/CH4.jpeg' }
      ]
    },
    {
      id: 'economy',
      title: 'Economy',
      cover: '/images/Gallery/Sri Lanka Economy/Eco2.jpeg',
      photos: [
        { src: '/images/Gallery/Sri Lanka Economy/Eco1.jpeg' },
        { src: '/images/Gallery/Sri Lanka Economy/Eco2.jpeg' },
        { src: '/images/Gallery/Sri Lanka Economy/Eco3.jpeg' },
        { src: '/images/Gallery/Sri Lanka Economy/Eco4.jpeg' },
        { src: '/images/Gallery/Sri Lanka Economy/Eco5.jpeg' }
      ]
    },
    {
      id: 'cuisine',
      title: 'Cuisine',
      cover: '/images/Gallery/Sri lanka Cuisine/Cus2.jpeg',
      photos: [
        { src: '/images/Gallery/Sri lanka Cuisine/Cus1.jpeg' },
        { src: '/images/Gallery/Sri lanka Cuisine/Cus2.jpeg' },
        { src: '/images/Gallery/Sri lanka Cuisine/Cus3.jpeg' },
        { src: '/images/Gallery/Sri lanka Cuisine/Cus4.jpeg' },
        { src: '/images/Gallery/Sri lanka Cuisine/Cus5.jpeg' },
        { src: '/images/Gallery/Sri lanka Cuisine/Cus7.jpeg' },
        { src: '/images/Gallery/Sri lanka Cuisine/Cus8.jpeg' },
        { src: '/images/Gallery/Sri lanka Cuisine/Cus9.jpeg' },
        { src: '/images/Gallery/Sri lanka Cuisine/Cus10.jpeg' },
        { src: '/images/Gallery/Sri lanka Cuisine/Cus11.jpeg' }
      ]
    },
    {
      id: 'education-health',
      title: 'Education & Health Care',
      cover: '/images/Gallery/Education & Health/EH3.jpeg',
      photos: [
        { src: '/images/Gallery/Education & Health/EH1.jpeg' },
        { src: '/images/Gallery/Education & Health/EH2.jpeg' },
        { src: '/images/Gallery/Education & Health/EH3.jpeg' }
      ]
    }
  ];

  return (
    <main className="relative z-20 pb-16 md:pb-24">
      {/* Hero Section with Parallax */}
      <header className="relative h-[500px] md:h-[614px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 parallax-bg bg-cover bg-center"
          style={{ backgroundImage: "url('/images/gallery banner.jpg')" }}
        >
          <div className="absolute inset-0 bg-primary/30 backdrop-brightness-50 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 text-center px-6 mt-16">
          <span className="font-bold font-label text-secondary-container uppercase tracking-[0.5em] text-sm mb-6 block">The Expedition Journal</span>
          <h1 className="font-headline text-5xl md:text-7xl text-white font-black tracking-tight mb-6">Visual Quests</h1>
          <p className="max-w-2xl mx-auto text-white/90 text-lg md:text-xl font-light leading-relaxed">
            Capturing the raw soul of the Indian Ocean's emerald jewel through the lens of modern exploration.
          </p>
        </div>
      </header>

      {/* Content Section */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 -mt-16">

        {!selectedAlbum ? (
          // Albums Grid
          <div className="flex flex-wrap justify-center gap-8 relative z-30">
            {albums.map((album) => (
              <div
                key={album.id}
                className="group cursor-pointer rounded-2xl overflow-hidden shadow-xl border border-outline-variant/10 bg-surface-container aspect-video relative w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
                onClick={() => setSelectedAlbum(album)}
              >
                <img src={album.cover} alt={album.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-headline font-bold text-white mb-2">{album.title}</h3>
                    <p className="text-white/80 font-label text-xs uppercase tracking-wider">{album.photos.length} Photos</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Selected Album Gallery
          <div className="relative z-30 bg-surface-container-lowest rounded-[2rem] shadow-xl p-8 md:p-12 border border-outline-variant/10 animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-3">{selectedAlbum.title}</h2>
                <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest">{selectedAlbum.photos.length} Photos</p>
              </div>
              <button
                onClick={() => setSelectedAlbum(null)}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container-high hover:bg-primary hover:text-white text-on-surface transition-colors font-bold font-label text-sm"
              >
                <span className="material-symbols-outlined text-lg">arrow_back</span>
                Back to Albums
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {selectedAlbum.photos.map((photo, idx) => (
                <div key={idx} className="group w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
                  <div className="relative overflow-hidden rounded-xl bg-surface-container aspect-square md:aspect-[4/3]">
                    <img
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={photo.src}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <h3 className="text-white font-headline text-xl font-bold">{photo.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
};

export default Gallery;
