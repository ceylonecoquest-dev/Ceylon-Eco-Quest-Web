import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import VideoBackground from '../components/VideoBackground';

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

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <header className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <VideoBackground />
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
      <section className="bg-surface py-20 relative overflow-hidden px-8">
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

      {/* Sacred City of Anuradhapura*/}
      <section className="relative bg-surface-container-low py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/35 via-primary/5 to-primary/20 pointer-events-none"></div>
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          <motion.div className="lg:col-span-7 relative" {...fadeInLeft}>
            <div className="absolute -top-8 -left-10 w-64 h-64 bg-secondary-container/40 rounded-full blur-3xl"></div>
            <img
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl relative z-10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-3c71bLSaVcFNXqSCq0DedQZFzvpNiSpExeFVsXKzQT3puRV1At5B1UI1OuUc6-W5gOZ6fpAaTR29q17LmXpjPN3mC77nl3biSsPfCKAD3snNwLGTWOwtbteZLC7cUzrrIJEhtHVUiCTqP-eGJsgQFV4OwZmjEGZROXaUZ2p1xBo70zI3VLmzMPSVl0rQ2J7JT-HE19HYzVALBOWV5vCXM8c5XkV1-ivRSUumocJOqwc3thOdOH5QySttNUvQxgP8eFbpNXUh3O4"
              alt="Ancient stone temple ruins at sunrise"
            />
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-primary/30 rounded-full blur-3xl"></div>
          </motion.div>
          <motion.div className="lg:col-span-5 space-y-8 text-center text-center" {...fadeInRight}>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-on-surface text-center">Sacred City of Anuradhapura</h2>
            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed text-center">
              which is a UNESCO World Heritage Site remaining a sacred pilgrimage destinations as well as with popular tourist attractions. It is one of the oldest and most important ancient cities in Sri Lanka. It served as the country's first capital for over 1000 years and it is a major center of Buddhist culture and heritage. It is famous for its well-preserved ruins of ancient civilization, including large stupas, monasteries, and irrigation systems. With having important sites including Sri Maha Bodhi, believed to be the oldest historically recorded tree in the world, and the Ruwanwelimahaseya, which is a magnificent white Stupa.
            </p>
          </motion.div>
        </div>
      </section>

      {/*Ancient City of Polonnaruwa */}
      <section className="relative bg-surface py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-secondary-container/20 via-primary/10 to-primary/25 pointer-events-none"></div>
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          <motion.div className="lg:col-span-5 space-y-8 order-2 lg:order-1 text-center" {...fadeInLeft}>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-on-surface text-center">Ancient City of Polonnaruwa</h2>
            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed text-center">
              which also a UNESCO World Heritage Site and a major cultural and historical tourist destination in Sri Lanka Ancient City in Sri Lanka and Served as the country's second capital after Anuradhapura. It is well known for it's well-preserved archeological ruins, reflecting advanced urban planning, irrigation system and beautiful architecture. Historical places including Gal Viharaya, famous for its large Buddha Statues carved into Rock, and the Parakrama Samudra, which is a massive man-made lake built by Kind Parakramabahu 1.
            </p>
          </motion.div>
          <motion.div className="lg:col-span-7 relative order-1 lg:order-2" {...fadeInRight}>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/25 rounded-full blur-3xl"></div>
            <img
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl relative z-10"
              src="/images/polonnaruwa_gal_viharaya.png"
              alt="Ancient City of Polonnaruwa"
            />
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-secondary-container/30 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Ancient City of Sigiriya*/}
      <section className="relative bg-surface-container-low py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/5 to-secondary-container/25 pointer-events-none"></div>
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          <motion.div className="lg:col-span-7 relative" {...fadeInLeft}>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary-container/40 rounded-full blur-3xl"></div>
            <img
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl relative z-10"
              src="https://images.unsplash.com/photo-1588614959060-4d144f28b207?q=80&w=2000&auto=format&fit=crop"
              alt="Ancient City of Sigiriya"
            />
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-primary/35 rounded-full blur-3xl"></div>
          </motion.div>
          <motion.div className="lg:col-span-5 space-y-8 text-center" {...fadeInRight}>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-on-surface text-center">Ancient City of Sigiriya</h2>
            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed text-center">
              The Sigiriya Rock which is a UNESCO World Heritage Site and one of most iconic tourist attractions. It is known as the "Lion Rock", which is a famous ancient rock fortress in Sri Lanka. It was built in the 5th century CE by king Kashyapa. I as a royal palace and stronghold. The site is renowned for its massive rock column rising about 200 meters high surrounded by landscapes gardens, water, features and frescoces. The ancient city of Sigiriya also famous for it's surrounded by well-planed gardens, advanced irrigation systems, and also the architectural and engineering brilliance of ancient Sri Lanka.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sacred City of Kandy */}
      <section className="relative bg-surface py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-secondary-container/20 via-primary/10 to-primary/25 pointer-events-none"></div>
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          <motion.div className="lg:col-span-5 space-y-8 order-2 lg:order-1 text-center" {...fadeInLeft}>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-on-surface text-center">Sacred City of Kandy</h2>
            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed text-center">
              The Sacred city of Kandy which is also a UNESCO World heritage site and a major cultural and tourist destination in Sri Lanka. The sacred city of Kandy which is a historic and spiritual city that served as the last capital of the Sri Lankan kingdom. It is best know for the temple of the Tooth Relic, which houses a sacred tooth of Gautama Buddha. It makes Kandy one of the most important religious sites for Buddhists around the world. The city is also surrounded by scenic hills and a beautiful lake, also Kandy which famous for it's cultural traditions, especially the annual Esala Perahara.
            </p>
          </motion.div>
          <motion.div className="lg:col-span-7 relative order-1 lg:order-2" {...fadeInRight}>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/25 rounded-full blur-3xl"></div>
            <img
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl relative z-10"
              src="/images/kandy_temple.png"
              alt="Temple of the Tooth Relic in Kandy"
            />
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-secondary-container/30 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Old Town of Galle */}
      <section className="relative bg-surface-container-low py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/5 to-secondary-container/25 pointer-events-none"></div>
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          <motion.div className="lg:col-span-7 relative" {...fadeInLeft}>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary-container/40 rounded-full blur-3xl"></div>
            <img
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl relative z-10"
              src="/images/galle_fort.png"
              alt="Galle Fort in Sri Lanka"
            />
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-primary/35 rounded-full blur-3xl"></div>
          </motion.div>
          <motion.div className="lg:col-span-5 space-y-8 text-center" {...fadeInRight}>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-on-surface text-center">Old Town of Galle</h2>
            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed text-center">
              The old town of Galle and it's fortifications are recognized as a UNESCO world heritage site and remain a popular tourist destination in Sri Lanka. It is located on the southern coast of Sri Lanka which is a historic city know for it's well-preserved colonial architecture. It is famous for the Galle Fort, originally built by the Portuguese in the 16th century and later expanded by the dutch. The Fort features cobblestones streets, old churches, museums, and charming building that reflects European and South Asian influences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rangiri Dambulla Cave Temple */}
      <section className="relative bg-surface py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-secondary-container/20 via-primary/10 to-primary/25 pointer-events-none"></div>
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          <motion.div className="lg:col-span-5 space-y-8 order-2 lg:order-1 text-center" {...fadeInLeft}>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-on-surface text-center">Rangiri Dambulla Cave Temple</h2>
            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed text-center">
              The temple is an important religious pilgrimage site and showcases impressive ancient Buddhist art and architecture and today. it is recognized as a UNESCO World Heritage site. The Rangiri Dambulla Cave Temple, located in Sri Lanka is the largest and best-preserved cave temple complex in the country. Special factor that which is in the 1st century BCE, it consists of five caves filled with over ISO satutues of Gautama Buddha along with painting covering the walls and celings.
            </p>
          </motion.div>
          <motion.div className="lg:col-span-7 relative order-1 lg:order-2" {...fadeInRight}>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/25 rounded-full blur-3xl"></div>
            <img
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl relative z-10"
              src="/images/dambulla_cave.png"
              alt="Rangiri Dambulla Cave Temple"
            />
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-secondary-container/30 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Sinharaja Forest Reserve */}
      <section className="relative bg-surface-container-low py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/5 to-secondary-container/25 pointer-events-none"></div>
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          <motion.div className="lg:col-span-7 relative" {...fadeInLeft}>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary-container/40 rounded-full blur-3xl"></div>
            <img
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl relative z-10"
              src="/images/sinharaja_forest.png"
              alt="Sinharaja Forest Reserve"
            />
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-primary/35 rounded-full blur-3xl"></div>
          </motion.div>
          <motion.div className="lg:col-span-5 space-y-8 text-center" {...fadeInRight}>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-on-surface text-center">Sinharaja Forest Reserve</h2>
            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed text-center">
              which is a UNESCO World Heritage Sites and a popular destination for eco-tourism and nature lovers located in Sri Lanka which is a tropical rainforest and the country's last viable area of primary forest. It is reowned for it's rich bio-diversity, including money endemic species of plants, birds and animals found no where else in the world. The forest plays a vital role in conserving Sri Lanka's natural eco system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Central Highlands of Sri Lanka */}
      <section className="relative bg-surface py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-secondary-container/20 via-primary/10 to-primary/25 pointer-events-none"></div>
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          <motion.div className="lg:col-span-5 space-y-8 order-2 lg:order-1 text-center" {...fadeInLeft}>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-on-surface text-center">Central Highlands of Sri Lanka</h2>
            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed text-center">
              which is located in the South-central part of Sri Lanka which is a UNESCO World Heritage natural site known for its stunning mountain landscape and rich biodiversity. Central Highlands includes the key protected areas such as Hortain Plains National Park, Peak Wilderness Sanctuary, and knuckles Conservation forest. It is very famous for it's unique flora and fauna, many of which are endemic, as well as scenic features like waterfalls, grasslands, and misty mountains. The area is also important for water catchment and environmental conservation.
            </p>
          </motion.div>
          <motion.div className="lg:col-span-7 relative order-1 lg:order-2" {...fadeInRight}>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/25 rounded-full blur-3xl"></div>
            <img
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl relative z-10"
              src="/images/central_highlands.png"
              alt="Central Highlands of Sri Lanka"
            />
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-secondary-container/30 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default Home;
