import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import VideoBackground from '../components/VideoBackground';
import ImageSlideshow from '../components/ImageSlideshow';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const heritageSites = [
  {
    title: 'Sacred City of Anuradhapura',
    image: '/images/anuradhapura_home.jpeg',
    description:
      "which is a UNESCO World Heritage Site remaining a sacred pilgrimage destinations as well as with popular tourist attractions. It is one of the oldest and most important ancient cities in Sri Lanka. It served as the country's first capital for over 1000 years and it is a major center of Buddhist culture and heritage. It is famous for its well-preserved ruins of ancient civilization, including large stupas, monasteries, and irrigation systems. With having important sites including Sri Maha Bodhi, believed to be the oldest historically recorded tree in the world, and the Ruwanwelimahaseya, which is a magnificent white Stupa.",
  },
  {
    title: 'Ancient City of Polonnaruwa',
    image: '/images/polonnaruwa-home.jpg',
    description:
      "which also a UNESCO World Heritage Site and a major cultural and historical tourist destination in Sri Lanka Ancient City in Sri Lanka and Served as the country's second capital after Anuradhapura. It is well known for it's well-preserved archeological ruins, reflecting advanced urban planning, irrigation system and beautiful architecture. Historical places including Gal Viharaya, famous for its large Buddha Statues carved into Rock, and the Parakrama Samudra, which is a massive man-made lake built by Kind Parakramabahu 1.",
  },
  {
    title: 'Ancient City of Sigiriya',
    image: '/images/sigiriya-home.jpg',
    description:
      "The Sigiriya Rock which is a UNESCO World Heritage Site and one of most iconic tourist attractions. It is known as the Lion Rock, which is a famous ancient rock fortress in Sri Lanka. It was built in the 5th century CE by king Kashyapa. I as a royal palace and stronghold. The site is renowned for its massive rock column rising about 200 meters high surrounded by landscapes gardens, water, features and frescoces. The ancient city of Sigiriya also famous for its surrounded by well-planed gardens, advanced irrigation systems, and also the architectural and engineering brilliance of ancient Sri Lanka.",
  },
  {
    title: 'Sacred City of Kandy',
    image: '/images/kandy.jpeg',
    description:
      "The Sacred city of Kandy which is also a UNESCO World heritage site and a major cultural and tourist destination in Sri Lanka. The sacred city of Kandy which is a historic and spiritual city that served as the last capital of the Sri Lankan kingdom. It is best know for the temple of the Tooth Relic, which houses a sacred tooth of Gautama Buddha. It makes Kandy one of the most important religious sites for Buddhists around the world. The city is also surrounded by scenic hills and a beautiful lake, also Kandy which famous for it's cultural traditions, especially the annual Esala Perahara.",
  },
  {
    title: 'Old Town of Galle',
    image: '/images/galle.jpeg',
    description:
      "The old town of Galle and it's fortifications are recognized as a UNESCO world heritage site and remain a popular tourist destination in Sri Lanka. It is located on the southern coast of Sri Lanka which is a historic city know for it's well-preserved colonial architecture. It is famous for the Galle Fort, originally built by the Portuguese in the 16th century and later expanded by the dutch. The Fort features cobblestones streets, old churches, museums, and charming building that reflects European and South Asian influences.",
  },
  {
    title: 'Rangiri Dambulla Cave Temple',
    image: '/images/rangiri dambulla.jpeg',
    description:
      "The temple is an important religious pilgrimage site and showcases impressive ancient Buddhist art and architecture and today. it is recognized as a UNESCO World Heritage site. The Rangiri Dambulla Cave Temple, located in Sri Lanka is the largest and best-preserved cave temple complex in the country. Special factor that which is in the 1st century BCE, it consists of five caves filled with over ISO satutues of Gautama Buddha along with painting covering the walls and celings.",
  },
  {
    title: 'Sinharaja Forest Reserve',
    image: '/images/sinharaja_forest.png',
    description:
      "which is a UNESCO World Heritage Sites and a popular destination for eco-tourism and nature lovers located in Sri Lanka which is a tropical rainforest and the country's last viable area of primary forest. It is reowned for it's rich bio-diversity, including money endemic species of plants, birds and animals found no where else in the world. The forest plays a vital role in conserving Sri Lanka's natural eco system.",
  },
  {
    title: 'Central Highlands of Sri Lanka',
    image: '/images/central_highlands.png',
    description:
      "which is located in the South-central part of Sri Lanka which is a UNESCO World Heritage natural site known for its stunning mountain landscape and rich biodiversity. Central Highlands includes the key protected areas such as Hortain Plains National Park, Peak Wilderness Sanctuary, and knuckles Conservation forest. It is very famous for it's unique flora and fauna, many of which are endemic, as well as scenic features like waterfalls, grasslands, and misty mountains. The area is also important for water catchment and environmental conservation.",
  },
];


const Home = () => {
  const scrollRef = useRef(null);

  const scrollByCard = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector('[data-card]');
    const cardWidth = card ? card.offsetWidth + 24 : 320;
    container.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  const homeSlides = [
    '/images/home/Home banner1.jpeg',
    '/images/home/Home banner2.jpeg',
    '/images/home/Home banner3.jpeg',
    '/images/home/Home banner4.jpeg',
    '/images/home/Home banner5.jpeg',
    '/images/home/Home banner6.jpeg',
  ];

  return (
    <main>
      {/* Hero Section */}
      <header className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        {/* <VideoBackground /> */}
        <ImageSlideshow images={homeSlides} />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/50 to-surface z-10"></div>
        <motion.div
          className="relative z-20 text-center px-6 max-w-5xl pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <span className="font-label text-sm uppercase tracking-[0.3em] text-secondary-fixed mb-6 block font-bold drop-shadow-md">The Art of Island Wandering</span>
          <h1 className="font-headline text-5xl md:text-8xl text-white font-black mb-6 leading-tight drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] italic">Explore Sri Lanka</h1>
          <p className="font-body text-lg md:text-2xl text-white max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-lg font-medium">
            An eco-friendly journey of adventure and discovery across the natural and cultural wonders of Sri Lanka.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/destinations" className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-4 rounded-md font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2 min-w-[220px]">
              <span className="material-symbols-outlined">explore</span>
              Explore Destinations
            </Link>
            <Link to="/about" className="bg-surface-container-highest text-primary px-10 py-4 rounded-md font-bold hover:bg-surface-dim transition-all flex items-center justify-center gap-2 min-w-[220px]">
              <span className="material-symbols-outlined">info</span>
              Learn About Us
            </Link>
          </div>
        </motion.div>
      </header>

      {/* Minimalist Scrolling Track Section */}
      <section className="bg-primary py-8 overflow-hidden relative z-30">
        <div className="animate-scroll-x flex items-center gap-12 whitespace-nowrap">
          <div className="flex items-center gap-12 text-white/90 font-headline text-2xl md:text-3xl font-light tracking-widest uppercase italic border-r-0">
            <span>Eco-friendly</span>
            <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
            <span>Adventures Journey</span>
            <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
            <span>Cultural Wonders</span>
            <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
            <span>Natural Beauty</span>
            <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
            <span>Mindful Exploration</span>
            <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
            <span>Historic Destinations</span>
            <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
          </div>
          <div className="flex items-center gap-12 text-white/90 font-headline text-2xl md:text-3xl font-light tracking-widest uppercase italic pr-12">
            <span>Eco-friendly</span>
            <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
            <span>Adventures Journey</span>
            <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
            <span>Cultural Wonders</span>
            <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
            <span>Natural Beauty</span>
            <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
            <span>Mindful Exploration</span>
            <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
            <span>Historic Destinations</span>
            <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
          </div>
        </div>
      </section>

      {/* UNESCO Heritage Description Section */}
      <section className="bg-surface py-16 lg:py-20 relative overflow-hidden px-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
        <motion.div
          className="max-w-5xl mx-auto relative z-10 text-center"
          {...fadeInUp}
        >
          <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed font-light">
            <span className="text-primary font-medium">UNESCO</span> which stands - United Nations Educational, Scientific and Cultural Organization. It was established in 1945 to promote international cooperation through education, science, culture and communication. The Organization works to preserve cultural heritages, protect natural sites, improve education worldwide. Sri Lanka is home to <span className="text-primary font-medium"> 8 UNESCO WORLD HERITAGE</span> Sites recognized for their outstanding cultural and natural value. UNESCO plays a key role of safeguarding the world's cultural and natural treasures for future generation.
          </p>
        </motion.div>
      </section>

      {/* UNESCO Heritage Sites — horizontal card carousel */}
      <section className="relative bg-surface-container-low py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none"></div>

        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 relative z-10">
          {/* Section header */}
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12"
            {...fadeInUp}
          >
            <div>
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-[0.2em] mb-3">
                <MapPin className="w-4 h-4" />
                8 UNESCO World Heritage Sites
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-on-surface">
                Sri Lanka's World Heritages
              </h2>
            </div>

            {/* Nav buttons */}
            <div className="flex items-center gap-3 self-start md:self-auto">
              {/* <button
                onClick={() => scrollByCard('left')}
                aria-label="Scroll left"
                className="w-11 h-11 rounded-full border border-on-surface/20 flex items-center justify-center hover:bg-surface-container-highest transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-on-surface" />
              </button>
              <button
                onClick={() => scrollByCard('right')}
                aria-label="Scroll right"
                className="w-11 h-11 rounded-full border border-on-surface/20 flex items-center justify-center hover:bg-surface-container-highest transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-on-surface" />
              </button> */}

              <button onClick={() => scrollByCard('left')} aria-label="Scroll left" className="w-11 h-11 rounded-full border border-on-surface/20 flex items-center justify-center hover:bg-surface-container-highest transition-colors text-xl">
                ‹
              </button>
              <button onClick={() => scrollByCard('right')} aria-label="Scroll right" className="w-11 h-11 rounded-full border border-on-surface/20 flex items-center justify-center hover:bg-surface-container-highest transition-colors text-xl">
                ›
              </button>
            </div>
          </motion.div>

          {/* Horizontal scrolling cards */}
          <motion.div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            {...fadeInUp}
          >
            {heritageSites.map((site) => (
              <div
                key={site.title}
                data-card
                className="snap-start shrink-0 w-[260px] sm:w-[300px] md:w-[320px] bg-surface rounded-2xl shadow-lg overflow-hidden flex flex-col"
              >
                <div className="w-full h-[180px] sm:h-[200px] overflow-hidden">
                  <img
                    src={site.image}
                    alt={site.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="font-headline text-lg font-semibold text-on-surface leading-snug">
                    {site.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {site.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default Home;
