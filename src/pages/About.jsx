import { useState } from 'react';

const About = () => {
  const [expandedTopic, setExpandedTopic] = useState(null);

  const topics = [
    {
      title: "Ceylon",
      description: (
        <div className="space-y-4">
          <p>The Former Name of Sri Lanka Used During the Period of British colonial Rule. "Ceylon". The Name Ceylon was used for centuries by European Powers remained until 1972. As we "Ceylon Eco Quest" Represents Ceylon - It holds historical, cultural and economic Significance, Symbolizing the islands colonial Heritages.</p>
          <p>In 1505-1508 Ceylon was captured by Portuguese, which was the first Europeans to arrive Ceylon.<br />In 1658-1796 Ceylon was captured by the Dutch from the Portuguese.</p>
          <p>In 1796-1948 Ceylon was taken control by British from the Dutch.</p>
          <p>After the British taking Over Ceylon, Ceylon Became a British Colonial Colony in 1802.</p>
          <p>In 1948, Ceylon Gained Independence. After Independence in "Ceylon" Name was retained for nearly for 54 more years.</p>
          <p>In 1972, the nation became a Republic by adopting the name "Sri Lanka".</p>
          <p>Sri Lanka :- Resplendent Island in Sri lanka.</p>
          <p>"Ceylon Eco Quest" We Represent The Name "Ceylon" in our Brand. Ceylon allocates to have a long history both colonial charms, misty tea estates and timeless beauty. Ceylon Eco Quest "We" Are Ready to Take You to the Era Which the Name "Ceylon" was Existed. Let's Find Out The "Real Story Behind "Ceylon" By Exploring the Magical Treasures in Ceylon. (Sri Lanka).</p>
        </div>
      )
    },
    {
      title: "Ecology",
      description: (
        <div className="space-y-4">
          <p>Ecology " which is the branch of biology that have the relationships between living organisms and the environment. Ceylon Eco Quest Our Brand Name Itself we closely linked with. Eco-tourism and Sustainable Tourism.</p>
          <p>With the relationship having between tourism and the natural environment it's very important to know how the impact of tourism activities which are connected to the natural environment by protecting the eco-systems.</p>
          <p>Since We Interacts with natural habitats, wildlife & Local Environment. Our Goal Is to minimize negative environmental impacts while we are on our travel journey as well as when we are connected with the nature.</p>
          <p>Ecology which is very important that It Preserves natural resources, promotes Sustainable development & Educates Us through how we need to protect the environment.</p>
          <p>Let's Stop Some Habits which will Give a Negative Impact to the nature and the environment.</p>
          <p>"Ceylon Eco Quest" We Suggest You To Minimize the Usage of Plastic & To Minimize the Wastage of Water Usage in a these Unnecessary manner.</p>
          <p>As Ceylon Eco Quest We Take You Through The Wildlife Experience. It's a very Important that Not To Harm Animals as well as feeding animals uncovered or under restricted areas.</p>
          <p>Let's Protect ecology while we Are On the tour by experiencing the beautiful nature in Srilanka while conserving the environment and benefiting local communities.</p>
        </div>
      )
    },
    {
      title: "Environmental Sustainability",
      description: (
        <div className="space-y-4">
          <p>Environmental Sustainability which is a very important factor in tourism industry it refers to responsible travel practices that protect natural environments, conserve resources, and support the long-term well-being of destinations and local communities. Our concept of Ceylon Eco Quest is closely connected with the environmental sustainability. It is very important, know the related factors regarding environmental sustainability. As tourism is one of the Sri Lanka's major industries, sustainability has become essential for preserving the island's forests, beaches, wildlife, marine eco-systems, and cultural heritage for future generation.</p>
          <p>Since Sri Lanka is known for its rich biodiversity, tropical rain forests, wildlife reserves, mountains, and coastal ecosystems. Ceylon Eco Quest We Are Ready to Take You through a journey with a Sustainable Tourism Tour with connected to the natural environment. So Ceylon Eco Quest we suggest to follow some important points on Environmental sustainability, during the tour journey.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>To Protect natural resources and wildlife habitats.</li>
            <li>To Reduce environmental damage caused by mass tourism.</li>
            <li>Promote conservation of forests, wetlands and coral reefs.</li>
            <li>To Support local communities and traditional livelihoods.</li>
            <li>Encourage respect responsible travel behaviour.</li>
          </ul>
          <p>Eco-tourism has grown rapidly in Sri Lanka, specially in areas with rich biodiversity like Yala National Park, Sinharaja Forest Reserve, knuckles Mountain Range & Udawalawe National Park. So these Destinations promote wildlife conservation, nature education, and low-impact tourism activities such as birdwatching, trekking safari tours, and eco-lodging.</p>
          <p>Sri Lanka contains many endemic species of plants and animals. Sustainable tourism which supports conservation projects like:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Protection of elephants, leopards, sea turtles and birds.</li>
            <li>Forest preservation programs.</li>
            <li>Marine conservation initiatives.</li>
            <li>Anti-poaching awareness campaigns.</li>
          </ul>
          <p>Sustainable Accommodation which is also a main factor in tourism we Ceylon eco Quest will suggest You the Accommodations which are sustainably certified in Sri Lanka. Hotels and Accommodations in Sri Lanka which uses:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Solar energy systems.</li>
            <li>Rainwater harvesting.</li>
            <li>Natural ventilation.</li>
            <li>Organic farming.</li>
            <li>Energy efficient lighting.</li>
            <li>Sustainable architecture.</li>
          </ul>
          <p>Sri Lanka is increasingly focusing on regenerative and sustainable tourism models that protect ecosystems while improving community livelihoods for future of Sustainable tourism in Sri Lanka. Some Future priorities includes:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>To Expanding eco-certification programs.</li>
            <li>Promoting renewable energy in tourism.</li>
            <li>Encouraging low-carbon travel.</li>
            <li>Strengthening environmental focus.</li>
            <li>Developing sustainable coastal and marine tourism.</li>
          </ul>
          <p>Explore the Magical Travel Experience in Sri Lanka with Ceylon Eco Quest connected with sustainable tourism which is becoming essential for maintaining Sri Lanka's reputation as a world-class nature and cultural destination.</p>
        </div>
      )
    },
    {
      title: "Eco-friendly Travel",
      description: (
        <div className="space-y-4">
          <p>Eco-Friendly Travel which is also an important factor in tourism, Ceylon Eco Quest Our Theme follows the Eco-Friendly concept in Sri Lanka which focuses on exploring the island while protecting nature, supporting local communities, and preserving cultural heritage. With its rainforests, wildlife reserves, beaches, tea plantations, and ancient heritage sites.</p>
          <p>Sri Lanka offers diverse natural and cultural experiences within a small geographical area. Travelers can enjoy wildlife safaris, mountain trekking, Village tourism, eco-lodges, and organic farming experience while minimizing environmental impact.</p>
          <p>Ceylon Eco Quest We are ready to take You to most Popular Eco-Friendly Destinations in Sri Lanka.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Sinharaja Forest Reserve</li>
            <li>Yala National Park.</li>
            <li>Knuckles Mountain Range.</li>
            <li>Ella.</li>
            <li>Arugam Bay.</li>
          </ul>
          <p>Ceylon Eco Quest Encourages You All Some Sustainable Travel Practices in Sri Lanka To have an Eco-friendly Tour.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Use reusable water bottles and avoid single-use plastics.</li>
            <li>Going on ethical wildlife experiences and avoid animal exploitation.</li>
            <li>Respect local customs, religious sites, and natural habitats.</li>
          </ul>
          <p>Ceylon Eco Quest We Are Ready To give An incredible experience of Eco-friendly Activities.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Rainforest Trekking.</li>
            <li>Bird Watching tours.</li>
            <li>Whale Watching with responsible operators.</li>
            <li>Cycling through rural villages.</li>
            <li>Organic farm visits.</li>
            <li>Ayurveda and wellness treats.</li>
            <li>Community-based cultural experience.</li>
          </ul>
          <p>Following all these eco-friendly tips. Let's travel the journey with a peaceful vibe which also brings same benefit for Eco-friendly , Tourism traveling Eco-friendly will helps.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>To protect Sri Lanka's Wildlife and ecosystems.</li>
            <li>To preserve cultural and historical heritages.</li>
            <li>To create income for local communities</li>
            <li>To promote responsible and meaningful travel experience.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Mindful Exploration",
      description: (
        <div className="space-y-4">
          <p>
            Mindful exploration in Sri Lanka is a form of travel encourages visitors to experience the island with awareness, balance, and deeper connection. Rather than rushing between attractions, mindful travelers focus on meaningful experiences, cultural understanding, personal wellness, and respect of nature and local communities. Ceylon Eco Quest which we are aware to give that mindfulness experience to you. Our concept is closely linked with it.
          </p>
          <p>
            The peaceful atmosphere, rich, spiritual traditions, tropical landscapes, and slow-paced rural lifestyle make Sri Lanka on ideal destination for mindful travel.
          </p>
          <p>
            Ceylon Eco Quest we are ready to take you to the spiritual and cultural connections in Sri Lanka to give and experience of a mindful tour. So travelers can explore ancient temples, meditation centers, and sacred cities while learning about Buddhism and traditional Sri Lanka values.
          </p>
          <p>
            We are also ready to you through the nature and store travel experience to give a mindful exploration often involves slow and immersive travel through nature. Visitors can enjoy scenic train rides, walk through tea plantations, rainforest, and quiet moments near waterfall or beaches.
          </p>
          <p>
            Wellness and Meditation which is well-known in Sri Lanka for Ayurveda, Yoga retreats, and meditation programs. Ceylon Eco Quest is ready to provide you the experience of wellness and meditation with having Many Wellness centers around Sri Lanka that provide holistic treatments using herbal medicine, healthy food, yoga practices, and stress-relief therapies. Let's relax physically and mentally while reconnecting with themselves.
          </p>
          <p>
            Mindful travel also promotes environmental conservation and support for local communities. We Ceylon Eco Quest kindly suggests you to
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Respect wildlife and national habitats</li>
            <li>Reduce plastic waste.</li>
            <li>Support local business and actions</li>
            <li>Travel responsibly and sustainably</li>
          </ul>
          <p>
            Following all these mindful things we will have lot of benefits of Mindful exploration in Sri Lanka with providing
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Inner Peace and relaxation</li>
            <li>Cultural understanding</li>
            <li>Stronger connection with nature</li>
            <li>Reduced stress and mental refreshment</li>
            <li>Authentic and meaningful travel experiences</li>
          </ul>
          <p>
            Going on we the concept of Mindful exploration, Ceylon Eco Quest we are ready to transform your travel into a journey of awareness, discovery, and personal growth, with its spiritual heritage, natural beauty, wellness traditions, and warm hospitality , Sri Lanka offers and unforgettable destination for travelers seeking peace, balance, and meaningful experiences.
          </p>
        </div>
      )
    },
    {
      title: "Adventures Tourism",
      description: (
        <div className="space-y-4">
          <p>
            Adventure tourism in Sri Lanka offers exciting experience that combine nature, culture, and outdoor activities. Ceylon Eco Quest where one of our theme concept is going on with adventures Tourism, Sri Lanka provides a diverse landscapes including mountains, rainforests, rivers, beaches, and wildlife reserves, making it one of the leading adventure destination in Sri Lanka.
          </p>
          <p>
            Ceylon Eco Quest we Are ready to give you the magical experience of most popular adventures activities in Sri Lanka.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Hiking and Trekking one of the major activities that there are many scenic hiking trails through mountains, forests, and tea plantation</li>
            <li>Wildlife safaris which also a main adventures attractions in Sri Lanka in Wildlife tourism</li>
            <li>With having coastal regions in Sri Lanka Water Sports and Surfing provides a high value of many water-based adventures activities in coastal regions in Sri Lanka</li>
            <li>Travelers who are interesting in adventures travel they can experience eco-tourism and camping in forests, mountains and near rivers.</li>
          </ol>
          <p>
            Ceylon Eco Quest where we give the cultural and historical experience in Sri Lanka we tend to give the experience of cultural and adventure both combination for travelers to explore ancient cities, traditional villages, tea estates, and local cuisine while participating in adventurous experiences.
          </p>
        </div>
      )
    },

  ];

  return (
    <main>
      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Majestic Sri Lankan Landscape"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-qFLIYl2dAfdwVHRchxc1uqUbBjXIOTqpwVggbUXDtVmqJkTntVBeI6ScenrYLzvc5SDQKLePLV8N5O3eZuLtqB_V9qub1wuivbLbWYSovpM0Otlx9HKla89GJUqUh5ijxchEeH6wZMEoBoljcmDG6d1JzKXgNt7REkby7eiGcX_EsQ8785eYmovMl9CqCElk9a_xeoHWhd8xeMfozYQk8glbcbZkNDjCMY_jbpPkczDqRgohzAA9rYB1uVlCBI6ArLeCY6bMKF8"
          />
          <div className="absolute inset-0 bg-primary/20"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <span className="font-bold font-label text-secondary uppercase tracking-[0.5em] text-sm mb-6 block">Our Identity</span>
          <h1 className="font-headline text-5xl md:text-8xl text-white font-black leading-tight italic">
            The Spirit of <br />Ceylon Eco Quest
          </h1>
        </div>
      </header>

      {/* Theme Section */}
      <section className="py-24 bg-surface-container-lowest px-8 md:px-12 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="h-1 w-12 bg-primary"></div>
              <h3 className="font-headline text-3xl font-bold text-primary italic">Ceylon</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg font-body">
                Representing the soul of Sri Lanka, evoking authenticity, heritage, and the island’s breathtaking natural beauty that has enchanted travelers for centuries.
              </p>
            </div>
            <div className="space-y-6">
              <div className="h-1 w-12 bg-secondary"></div>
              <h3 className="font-headline text-3xl font-bold text-primary italic">Eco</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg font-body">
                Our commitment to ecology and sustainability. We emphasize respect for nature through mindful exploration and eco-friendly travel practices.
              </p>
            </div>
            <div className="space-y-6">
              <div className="h-1 w-12 bg-primary"></div>
              <h3 className="font-headline text-3xl font-bold text-primary italic">Quest</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg font-body">
                An adventure designed to discover the environment intimately. We don't just show you places; we guide you through transformative experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      {/* <section className="py-24 bg-background px-8 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-surface-container">
              <img 
                alt="Sri Lankan Nature" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuApm3nVk5EriW5URwWayxu7XmUHeQNxsWdL0i6eGKv36S7jVeMcbG5wgdVWOkWvsfPx0G7Za0uB5krWdSm9vnFSk-LdXkQVog6gSYt50zXUeORzkkDZ_8Jme2yjkWWXWgLuS_ZKiVF77HsBkY1swyFhqztHerBzCUMIpSv5DSzv2cneyGnQIlimzYacefWRXKqVUQ5QUW5qJ97NDZEM7-l2KpxVQ9nUCfWGc70VkigItuiVxwI5P6VpFBsrLwaAzkfnYkw35PRFRDA" 
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary rounded-2xl -z-0 hidden lg:block"></div>
          </div>
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="font-bold font-label text-primary tracking-widest uppercase text-xs">Our Commitment</span>
              <h2 className="font-headline text-4xl md:text-5xl text-on-surface leading-tight font-bold">A Mindful Exploration Where Adventure Meets Nature</h2>
            </div>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg font-body">
              <p>
                At Ceylon Eco Quest, we bridge the gap between global explorers and the hidden gems of Sri Lanka. From the sun-kissed southern beaches to the misty emerald peaks of the central highlands, we curate safe, meaningful experiences that resonate with the heart of the traveler.
              </p>
              <p>
                Our core values are rooted in deep environmental sustainability. We are dedicated to reducing the footprint of tourism by empowering local communities and protecting the fragile ecosystems that make our island a paradise. Every journey with us is a step toward a more conscious future.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-primary font-headline">100%</span>
                <span className="text-[10px] uppercase tracking-tighter font-bold font-label">Eco-Friendly</span>
              </div>
              <div className="w-px h-10 bg-outline-variant/30"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-primary font-headline">50+</span>
                <span className="text-[10px] uppercase tracking-tighter font-bold font-label">Local Partners</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Topics Section */}
      <section className="py-24 bg-background px-8 md:px-12 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="font-bold font-label text-primary tracking-widest uppercase text-xs">Our Focus</span>
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface leading-tight font-bold">Key Pillars of Our Journey</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topics.map((topic, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-outline-variant/30 group"
              >
                <div
                  className="p-8 cursor-pointer flex justify-between items-center bg-surface-container relative overflow-hidden"
                  onClick={() => setExpandedTopic(expandedTopic === idx ? null : idx)}
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface group-hover:text-primary transition-colors ml-2">{topic.title}</h3>
                  <button className="text-primary p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors">
                    <svg className={`w-6 h-6 transition-transform duration-500 ${expandedTopic === idx ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                <div
                  className={`transition-all duration-700 ease-in-out overflow-hidden grid ${expandedTopic === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="p-8 pt-6 text-on-surface-variant font-body text-[17px] leading-relaxed border-t border-outline-variant/10">
                      {topic.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-surface-container-lowest px-8 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>

        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="font-bold font-label text-primary tracking-widest uppercase text-xs">Our Leadership</span>
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface leading-tight font-bold">The Minds Behind the Quest</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

            {/* Founder Card */}
            <div className="group flex flex-col gap-10 bg-background p-10 md:p-14 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-500 border border-outline-variant/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-inner border-4 border-surface-container ring-[6px] ring-primary/10 group-hover:ring-primary/30 transition-all duration-500 bg-surface-container-high mx-auto relative">
                {/* <img
                  src="/owner_photo.png"
                  alt="Ahmed Anoof Sodig - Founder of Ceylon Eco Quest"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                /> */}
                <div className="absolute inset-0 flex items-center justify-center text-primary/20 group-hover:text-primary/40 transition-colors">
                  <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                </div>
              </div>

              <div className="space-y-8 text-on-surface-variant leading-relaxed text-[17px] font-body flex-1 flex flex-col">
                <div className="text-center">
                  <h2 className="font-headline text-3xl md:text-4xl text-on-surface font-bold group-hover:text-primary transition-colors">Ahmed Anoof Sodig</h2>
                  <div className="mt-4">
                    <span className="font-label text-primary font-bold uppercase tracking-widest text-[11px] bg-primary/10 px-5 py-2 rounded-full">Founder</span>
                  </div>
                </div>

                <div className="grid transition-all duration-500 ease-in-out grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                  <div className="overflow-hidden">
                    <div className="space-y-4 pt-4 text-center lg:text-justify text-on-surface-variant/90">
                      <p>
                        Ahmed Anoof Sodig is the founder of Ceylon Eco Quest. As we all love to travel the world, he became obsessed to travel with people around the world. As he was going school at the age of 14, his mother used to travel with tourists from the Maldives. So he used to go with his mother during tours. After traveling for a long period of time, he became addicted to traveling, and after the age of 17, he got the driving license and started driving with his mother.
                      </p>
                      <p>
                        At the age of 18, he started carrying tourists by alone with his mother’s vehicle. Meanwhile, he was studying to become a chef, with the passion and interest to having to became a chef. He focused on his culinary path, giving up his favorite thing, which was tourism.
                      </p>
                      <p>
                        Later, he moved to the Maldives to work as a chef in 2024 to carry on his passion. With addiction he got after traveling in Sri Lanka inspired him once again. He decided to open his company which is Ceylon Eco Quest, to emphasize quality service through the tourism industry. He also came up with that Ceylon Eco Quest will be a sustainable and eco-friendly tourism service.
                      </p>
                      <p>
                        To the people as the founder of Ceylon Eco Quest, he will be taking all the responsibilities as the leader of the company, with his strong and passionate team, to provide a better quality travel experience in Sri Lanka. Let’s enjoy life’s the life journey with a beautiful travel journeys.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-auto pt-4 border-t border-outline-variant/20 transition-opacity duration-500 group-hover:opacity-0">
                  <span className="text-primary font-label text-[13px] font-bold uppercase tracking-wider">
                    Read full profile
                  </span>
                </div>
              </div>
            </div>

            {/* Team Member Card */}
            <div className="group flex flex-col gap-10 bg-background p-10 md:p-14 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-500 border border-outline-variant/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-inner border-4 border-surface-container ring-[6px] ring-secondary/10 group-hover:ring-secondary/30 transition-all duration-500 bg-surface-container-high mx-auto relative">
                {/* <img
                  src="/divani_photo.png"
                  alt="Divani Perera - Computer Engineer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                /> */}
                <div className="absolute inset-0 flex items-center justify-center text-secondary/20 group-hover:text-secondary/40 transition-colors">
                  <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                </div>
              </div>

              <div className="space-y-8 text-on-surface-variant leading-relaxed text-[17px] font-body flex-1 flex flex-col">
                <div className="text-center">
                  <h2 className="font-headline text-3xl md:text-4xl text-on-surface font-bold group-hover:text-secondary transition-colors">Divani Perera</h2>
                  <div className="mt-4">
                    <span className="font-label text-secondary font-bold uppercase tracking-widest text-[11px] bg-secondary/10 px-5 py-2 rounded-full">Computer Engineer</span>
                  </div>
                </div>

                <div className="grid transition-all duration-500 ease-in-out grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                  <div className="overflow-hidden">
                    <div className="space-y-4 pt-4 text-center lg:text-justify text-on-surface-variant/90">
                      <p>
                        Divani Perera is a passionate Computer Engineer who has been with Ceylon Eco Quest since the very beginning. As a founding team member, she plays a key role in driving the company's digital presence and delivering efficient, technology-driven solutions across our operations.
                      </p>
                      <p>
                        With a strong foundation in Information Technology, Divani brings valuable technical expertise to our field — bridging the gap between eco-focused services and modern digital capabilities. Her commitment to continuous improvement and her deep understanding of IT systems enable her to contribute meaningfully to Ceylon Eco Quest's growth and innovation. Let's be organized and see the world in a Clear vision.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-auto pt-4 border-t border-outline-variant/20 transition-opacity duration-500 group-hover:opacity-0">
                  <span className="text-secondary font-label text-[13px] font-bold uppercase tracking-wider">
                    Read full profile
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Visual Break / Parallax */}
      <section className="parallax-bg relative h-[600px] flex items-center justify-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCeSqqHQ6SCKw8FyYMfYjmB6intiz3HQrZOoKUiHXQD2EDInoRrFm0WNUCBw7Z_YoZfe8Zu_B4JtOdyD32ZmJLzhkzFbpUbswMLLoIZHqim5R4BHq64fjkbNhpC8LlVmUejDgn-XbKCGFnZT6mAA0zY9U4rUKOCGQJ9mROQuSMH4MtS3XwQiI4GfExMjsU1EcO7U4XTgxwdSxdiXfG58o50aSXTtP0aBPX_USGS73vxCn3FzLP4ltOEfyWQa6de-GNBJ0fM4tIuLA')" }}>
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h2 className="font-headline text-3xl md:text-5xl text-white font-bold mb-6 italic leading-snug">
            "We believe a quest should leave you changed, not the destination."
          </h2>
        </div>
      </section>
    </main>
  );
};

export default About;
