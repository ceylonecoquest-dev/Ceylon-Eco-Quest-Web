import { Link } from 'react-router-dom';
import { useState } from 'react';

const Destinations = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState({ status: 'idle', message: '' });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setSubscribeStatus({ status: 'loading', message: 'Subscribing...' });

    // Simulate API call for sending email
    setTimeout(() => {
      setSubscribeStatus({
        status: 'success',
        message: 'Welcome to the Ceylon Eco Quest, We\'ll send you the further updates soon.'
      });
      setEmail('');

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubscribeStatus({ status: 'idle', message: '' });
      }, 5000);
    }, 1500);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for fixed headers if any
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scenicLocations = [
    {
      id: 'nuwara-eliya',
      name: 'Nuwara Eliya',
      longDesc: 'The charming hill city located in the Central highlands of Sri Lanka, known as "Little England." Having a cool climate, misty mountains, and tea plantations, with a rich colonial heritage.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBanW6tJL-27yIw2L2TK1MlIVEP2tpIUVCcuU4Dy0fNjgFJSV8D0XcnxL2HQZ9hlkYkZ2kEw2MWNvJIhDoiKUtZYQuBhRLzIpLvYPWMvWkaArzUZgxm8LqoJ8keiuRmngSHo1FGxMiOiG566oI9SGytaJ4a_iBU2PB__x38_TT0Y-c_gv2WALmvhrRwfLidnxV0yl1HMOcJIOMxQ99FZ1TbCNZEpbs1Wv6dgVEG3qyN_isRQARr28g6ZaMoH2CKpQsjaoYotddzyPw',
      details: [
        {
          title: 'Location & Geography',
          content: 'Located in the Central Province of Sri Lanka, about 170 km from Colombo, surrounded by lush mountains, valleys, waterfalls, and rivers. Close to major natural attractions like Horton Plains National Park. It is around an altitude of 1,868 m (6,128 feet) above sea level. It offers a refreshing escape from the tropical heat of the island.'
        },
        {
          title: 'Climate',
          content: 'Cool climate throughout the year with average temperatures around 15°C–20°C, with cold nights it can drop to below 10°C. Frequently mist, fog, and rainfall occur. The dry season from March to May is the best time to visit for those familiar with moderate temperatures.'
        },
        {
          title: 'History & Heritage',
          content: 'Developed by the British in the 19th century as a hill station used as a holiday retreat for colonial officials. It has a strong influence of English culture, architecture, and lifestyle featuring Tudor-style houses, golf courses, and landscaped gardens.'
        },
        {
          title: 'Culture',
          content: 'With tourism playing a key role in the local economy of Sri Lanka, Nuwara Eliya is one of the major industries, having tea production, vegetable farming, and flower cultivation.Nuwara Eliya culture also plays a key role in tourist attractions, with horse races, flower shows, and motor racing. It is a blend of Sri Lankan tradition and British colonial lifestyle.The Atmosphere and lifestyle in Nuwara Eliya are peaceful, quiet, and have a scenic environment, well suited for romantic getaways and relaxation, featuring colonial bungalows, luxury hotels, and cozy cottages.'
        }
      ],
      teaSection: {
        title: 'Champagne of Ceylon Tea',
        icon: 'local_cafe',
        description: 'Nuwara Eliya is one of the most famous tea-growing regions in Sri Lanka and is often referred to as the "Champagne of Ceylon Tea". Its high altitude, cool climate, and misty environment make it ideal for producing some of the finest and lightest tea in the world.',
        history: 'Tea was introduced to Sri Lanka by British planter James Taylor in the 1860s. After coffee plantations were destroyed by disease, tea became the main crop. Then Nuwara Eliya quickly grew into one of the key centers of the Ceylon tea industry was developed under British rule, and even today many colonial-era tea factories and estates are still in operation.',
        characteristics: 'A light, fragrant, and delicately floral aroma. It shows a pale golden color and produces a fresh, brisk taste with a hint of fruity aroma. It considered a premium high-grown tea and belongs to the highest quality category in Sri Lanka.',
        estates: [
          { name: 'Pedro Tea Estate', info: "Includes the Lover's Leap Factory, which offers guided tours and tea tastings." },
          { name: 'Blue Field Tea Gardens', info: 'Popular among visitors for tea demonstrations and scenic views.' },
          { name: 'Mackwoods Labookellie', info: 'A historic plantation with a tea center and café.' },
          { name: 'Damro Tea Estate', info: 'One of the largest producers, featuring a beautiful visitor center.' }
        ],
        additionalSections: [
          {
            title: 'Economic and Cultural Importance',
            content: 'The tea industry has a major impact on exports to other countries and is an important part of national identity. Thousands of local families depend on tea cultivation for their livelihood. Sustainability is also a key aspect, as Ceylon tea estates help preserve cultural traditions and support environmental protection in the region.'
          },
          {
            title: 'Tourism',
            content: 'Tourism is a major factor in Sri Lanka’s economy. Nuwara Eliya tea plantations attract visitors who come to tour tea factories, learn about tea plucking and processing, and enjoy freshly brewed Ceylon tea. The rolling green hills and terraced plantations offer a magical experience and create breathtaking landscapes for photography.'
          }
        ]

      }
    },
    {
      id: 'knuckles',
      name: 'Knuckles Mountain Range',
      longDesc: 'The Knuckles Mountain Range is one of the most spectacular natural landscapes in Sri Lanka, renowned for its rugged beauty, rich biodiversity, and cultural significance.',
      image: '/images/knuckles_mountain_range.png',
      details: [
        {
          title: 'Location & Origin',
          content: 'Located in the central highlands of Sri Lanka, the Knuckles Mountain Range stretches across the districts of Kandy and Matale. The name “Knuckles” was given by the British because the mountain peaks resemble the knuckles of a clenched first.'
        },
        {
          title: 'Landscape & Scenery',
          content: 'The Knuckles Mountain Range features unique natural beauty and landscapes with mist-covered peaks and deep valleys, surrounded by dense forests and cloud forests, flowing rivers, cascading waterfalls, and terraced paddy fields.'
        },
        {
          title: 'Biodiversity & Wildlife',
          content: 'The Knuckles region is a biodiversity hotspot where many endemic plant and animal species, rare orchids, medicinal plants, and ferns exist. Wildlife such as monkeys, deer, leopards, and numerous bird species can be found here.'
        },
        {
          title: 'Climate',
          content: 'Due to its altitude, the climate varies significantly: it is cool and misty at higher elevations, while lower areas are warmer with frequent rainfall, especially during monsoon seasons.'
        }
      ],
      teaSection: {
        title: 'Adventure & Traditions',
        icon: 'mountain_flag',
        description: 'The Knuckles Mountain Range is a perfect destination for eco-tourism and adventure, blending cultural significance with traditional farming methods and preserving unique customs and lifestyles lived in harmony with nature.The most exciting part for visitors is that the range is ideal for various activities, including trekking, hiking, camping, and nature exploration through bird watching and wildlife photography, along with village tours to experience the traditional lifestyle.',

      }
    },
    {
      id: 'ella',
      name: 'Ella Highlands',
      longDesc: 'Ella Highlands is one of the most scenic and peaceful regions in Sri Lanka, located in the central hill country of Uva Province. It is famous for its breathtaking mountain landscapes, lush tea plantations, and cool climate.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0D2dEXKb_32XmIyiXqH6wxR8mfi6WptFCeGi13xX12lbM6eOJhLw0N6lROF87LNEX1mWVXAQWMqt6MClD5Gylxobj9yFm8bY4Q7OJkkWoD7N5Qvr7mkFSHw503VPfDSQ7vBiPzlQ2yE5JSRJTM6LAdhAWueeEiTQDJWaVsjkhDPT1BQjOu1hRHehZhB-gkD_rNMRq05UUI7sCyztgOhyubEQXgfHmriZ5i03OguMkYK7ebX2j9l2NGW295gja3Iwuk4jsqaoHgls',
      details: [
        {
          title: 'Geography & Atmosphere',
          content: 'Ella lies about 200 km east of Colombo and sits at an elevation of around 1,041 meters above sea level, giving it a refreshing highland atmosphere. It is surrounded by misty mountains, valleys, and cloud forests, offering stunning viewpoints like Ella Gap, where visitors can see across the southern plains. The area is rich in biodiversity, with diverse flora and fauna.'
        },
        {
          title: 'Natural Splendor',
          content: 'Ella is known for its natural beauty, dramatic rolling tea plantations covering the hills, cascading waterfalls such as Ravana Falls, dense green forests, and hiking trails with panoramic mountain views. It is a perfect blend of nature, adventure, and relaxation.'
        },
        {
          title: 'Climate & Best Time',
          content: 'Ella enjoys a mild and pleasant climate year-round, with average temperatures between 20–25°C,which is cooler than the lowland areas due to its elevation. For the best hiking conditions and clear blue skies, plan your visit between January and April.'
        },
        {
          title: 'Landmarks & Iconic Trails',
          content: 'Ella Highlands includes several popular tourist destinations, such as the Nine Arches Bridge, an iconic railway bridge surrounded by jungle; Little Adam’s Peak, which offers an easy hike with stunning sunrise views; Ella Rock, a more challenging trek for hikers; and Ravana Falls, one of the widest waterfalls in Sri Lanka.'
        }
      ],
      teaSection: {
        title: 'Highland Vibe & Tourism',
        icon: 'explore',
        description: 'Tourism is a major factor in Ella’s economy. Ella Highlands is known for its laid-back and relaxing vibe, with cozy cafés, boutique hotels, scenic viewpoints, and the famous Kandy-to-Ella train journey, considered one of the most beautiful train rides in the world. It attracts travelers seeking both adventure and tranquility.'
      }
    }
  ];

  const anuradhapuraData = {
    id: 'anuradhapura',
    name: 'Anuradhapura',
    image: '/images/anuradhapura_new.png',
    longDesc: 'Anuradhapura is one of the oldest continuously inhabited cities in the world and a major cultural and spiritual center in Sri Lanka. It served as the island’s first capital from around the 4th century BCE to the 11th century CE, making it a cornerstone of Sri Lankan civilization.',
    details: [
      {
        title: 'History & Buddhism',
        content: 'Anuradhapura rose to prominence under ancient Sinhalese kings and became a hub of political power, religion, and culture. The introduction of Buddhism in the 3rd century BCE during the reign of King Devanampiya Tissa transformed the city into a sacred destination. It is closely associated with Emperor Ashoka, whose son Mahinda Thero brought Buddhism to Sri Lanka.'
      },
      {
        title: 'Religious Significance',
        content: 'When it comes to religious importance, it is a city which is one of the most sacred Buddhist sites in the world. The most significant landmark is Sri Maha Bodhi Tree, which is believed to be the oldest historically documented tree still alive.'
      },
      {
        title: 'Iconic Landmarks',
        content: 'Anuradhapura also has different key attractions where visitors must visit:\n\ni) Ruwanweliseya, which is a massive white stupa symbolizing Buddhist devotion.\nii) Jetavanaramaya was among the tallest structures in the ancient world.\niii) Abhayagiri Monastery, which is a major center of Buddhist learning.\niv) Isurumuniya Temple, which is famous for its rock carvings.\nv) Samadhi Buddha Statue, which is a serene sculpture representing meditation.'
      },
      {
        title: 'Ancient Engineering',
        content: 'The city of Anuradhapura showcases advanced ancient engineering, especially its irrigation system with reservoirs (tanks) like Tissa Wewa, which is a main support for agriculture and urban life. Today, the city remains an active pilgrimage site and a symbol of Sri Lankan Buddhist heritage, where visitors can experience a blend of ancient ruins, spiritual atmosphere, and living traditions.'
      }
    ]
  };

  const polonnaruwaData = {
    id: 'polonnaruwa',
    name: 'Polonnaruwa',
    image: '/images/polonnaruwa.png',
    longDesc: 'Polonnaruwa which is an important historical city in Sri Lanka served as the island\'s capital after the decline of Anuradhapura. Flourishing between the 11th and 13th centuries, it is now a well-preserved archaeological site and a designated UNESCO World Heritage Site.',
    details: [
      {
        title: 'Historical Significance',
        content: 'Polonnaruwa rose to prominence under King Vijayabahu I, who liberated the country from South Indian rule. It reached its golden age during the reign of Parakramabahu I (1153–1186), known for his strong leadership, irrigation projects, and architectural achievements.'
      },
      {
        title: 'Key Attractions',
        content: 'Polonnaruwa is famous for visitors:\n\n1. Royal Palace of King Parakramabahu - A grand multi-story palace showcasing advanced construction techniques.\n2. Gal Viharaya - Famous for its four magnificent Buddha statues carved into granite rock.\n3. Polonnaruwa Vatadage - A beautifully preserved circular shrine with intricate stone carvings.\n4. Rankoth Vehera - One of the largest stupas in Sri Lanka.\n5. Parakrama Samudra - A massive man-made lake symbolizing an advanced irrigation system.'
      },
      {
        title: 'Art & Architecture',
        content: 'Polonnaruwa reflects a blend of Sinhalese and South Indian influences in its art and architecture. Buddhist monasteries, stupas, and Hindu temples highlight the religious harmony of the era.'
      },
      {
        title: 'Tourism & Planning',
        content: 'Polonnaruwa is a major tourist destination which attracts visitors who are interested in history, archaeology, and culture. It is well-preserved for its valuable insight into ancient Sri Lankan civilization and urban planning.'
      }
    ]
  };

  const kandyData = {
    id: 'kandy',
    name: 'Kandy',
    image: '/images/kandy_new.png',
    longDesc: 'Kandy, which is a historical & cultural city located in the central highlands of Sri Lanka, surrounded by lush mountains and scenic landscapes, served as the last royal capital of the Sinhalese Kingdom before falling to the British in 1815. Kandy is a vibrant city blending tradition, religion, and natural beauty, and it\'s recognized as a UNESCO World Heritage Site.',
    details: [
      {
        title: 'Historical Significance',
        content: 'Kandy was the stronghold of Sri Lankan independence during colonial times. The city gained prominence under the Kandyan kings and remained unconquered by European powers for centuries until the Kandyan Convention, when it was ceded to the British.'
      },
      {
        title: 'Spiritual Heart',
        content: 'Kandy is considered the spiritual heart of Sri Lanka, largely due to the sacred Temple of the Sacred Tooth Relic (Sri Dalada Maligawa). This temple houses what is believed to be the tooth of Gautama Buddha, making it one of the most revered Buddhist sites in the world. Kandy is also known for preserving traditional Sri Lankan arts, music, and dance.'
      },
      {
        title: 'Cultural Traditions',
        content: 'Kandyan dance is one of the country\'s most iconic cultural expressions, often performed during festivals and ceremonies. One of the special things is that each year, the city hosts the famous Esala Perahera, a grand cultural procession featuring traditional dancers, drummers, and decorated elephants.'
      },
      {
        title: 'Climate & Nature',
        content: 'Kandy has a tropical rainforest climate, with mild temperatures compared to lowland areas in Sri Lanka, with an average temperature of 20°C–30°C and rainfall throughout the year. It is surrounded by misty hills, forests, and tea plantations. At the heart of the city lies the serene Kandy Lake, built in 1807, offering a peaceful atmosphere and scenic views, with famous attractions including Udawalawa Forest Reserve and Peradeniya Botanical Garden.'
      }
    ]
  };

  const galleData = {
    id: 'galle',
    name: 'Galle',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDX7uMGghsY3yp8doYKgJSu5I0nyfRzHc9ydH2hP_8xlMYH-_e_BIMQJyUqr3NH5d8MBbP6GyKyo20f0_qLsZ_f2r8oKuHVV-fCcCNBSy29liUN3F7RshjNpc1HCXMQHo_ZDGktGuMRmtSGDofGR7d_kGk1VYaIX9zsQa4ECXz6rNs73NdXwE7q9atNNSf45Y37WABbZzRKSxvu6CjTxftZFdhWLuU4MtihptACVw99HixR4ciSgRi4wRwgcidzAn_oq3aKwHGA55Q',
    longDesc: 'Galle is a historic coastal city located in the Southern Province of Sri Lanka. Known for its rich colonial heritage, scenic coastline, and vibrant culture, Galle is also one of the country\'s most popular tourist destinations.',
    details: [
      {
        title: 'Historical Background',
        content: 'Galle has a long history that dates back over 2,000 years as a major trading port. It became especially significant during European colonial times. The Portuguese first arrived in the 16th century, followed by the Netherlands, who built the iconic Galle Fort in the 17th century. Later, the United Kingdom took control, adding further architectural influences.'
      },
      {
        title: 'Natural Beauty',
        content: 'Galle is surrounded by beautiful beaches such as Unawatuna and Hikkaduwa, known for golden sands, coral reefs, and water sports. The coastal scenery, palm-lined shores, and tropical climate make it a perfect destination for relaxation.'
      },
      {
        title: 'Cultural Attractions',
        content: 'Galle is a blend of cultural attractions influenced by colonial history and local traditions. Key attractions in Galle include the Dutch Reformed Church, which is one of the oldest Protestant churches in Sri Lanka, and the Galle Lighthouse, an iconic landmark near the sea. The National Maritime Museum showcases Sri Lanka\'s maritime history.\n\nThe centerpiece of the city is the Galle Fort, which is a well-preserved fortified city and a UNESCO World Heritage Site that features cobblestone streets, colonial buildings, museums, boutique shops, and charming cafes. Walking along the fort walls offers stunning views of the Indian Ocean.'
      },
      {
        title: 'Economy & Tourism',
        content: 'Tourism also plays a major role in Galle\'s economy, as well as the country\'s economy, along with fishing and handicrafts.\nThe city has a relaxed atmosphere, combining modern amenities with old-world charm.'
      }
    ]
  };

  const arugamBayData = {
    id: 'arugambay',
    name: 'Arugam Bay',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiUZoG_tlHSzczOX41U-eTaOx5jJTbVU_Q9skoMc4b2H-FciengDTqp6-ypiuyGOC_Co_O0-cWYvtAlGwxCtKBi2iMRfcmvwNLvJKEeFYiFplHtV6CdOLs9Mnyr-KshrVwv5yzUM-_bUS8vZcnawRNbNItaV__trFGTCv3HYgr5nmBTDTYvq9DZ1E59JX-4Iu-D_CPs_popZDxJum-t7tzTWiubft4c0Ci2J4SKgmonFPDPO86AXYTZ7O0nUTuBjkCphVko8TSuaY',
    longDesc: 'Arugam Bay, often called "Arugam" or "A-Bay," is one of the most famous coastal destinations in Sri Lanka, especially known for its world-class surfing, laid-back atmosphere, and natural beauty. Located on the island\'s southeastern coast in the Ampara District, it attracts both international surfers and travelers seeking a relaxed beach experience.',
    details: [
      {
        title: 'Natural Beauty & Environment',
        content: 'The bay features long stretches of golden sandy beaches, clear blue waters, and surrounding lagoons. One of the most attractive places is Kumana National Park, famous for its birdlife and elephants, as well as Pottuvil Lagoon, which is perfect for eco-tours and wildlife spotting. The area is also rich in biodiversity, with opportunities to see crocodiles, elephants, and a wide variety of birds.'
      },
      {
        title: 'Cultural & Lifestyle',
        content: 'Arugam Bay has a unique blend of local Sri Lankan culture and international surf culture, with small beach cafes and seafood restaurants, yoga retreats and wellness centers, and a relaxed, friendly, and multicultural vibe.'
      },
      {
        title: 'Surfing Paradise',
        content: 'Arugam Bay is globally recognized as a top surfing destination. It hosts several excellent surf breaks, including Main Point, which is the most popular and consistent wave; Whiskey Point, which is beginner-friendly and scenic; and Peanut Farm, which is quieter and less crowded.'
      },
      {
        title: 'Climate & Accessibility',
        content: 'Climate is important when visiting Arugam Bay, as it has a dry, sunny climate during the peak season (May–September), unlike much of Sri Lanka, which experiences monsoon rains at that time. The bay is about 6–8 hours by road from Colombo. Though relatively remote, improved roads and transport options have made it more accessible in recent years.'
      }
    ]
  };

  const trincomaleeData = {
    id: 'trincomalee',
    name: 'Trincomalee',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjk9tz9G5xOBLUuJN2YYViQK4VCWtYtIMT8sUPTZGNxt7LhLLyT2m-HGYB5ue8garE6nKiejuS8EHYv_lIsRFiIyeM18n8MFiHKjIzTl4SMLgizL7fgUDgowJ-PyX6w6I9FUqqypyMvflCZRXWrv7r6B-bkcbl6DAiYCfnx8vVeBKc0up54qkJbEIPZjnJsr1fD6WnRrhbKgFD6dYq357kgoohdicm2UCTdID2as8sUoKs0vhN94IXneqOZPMpC__fOKiiW0X9xGI',
    longDesc: "Trincomalee is a historic port city located on the northeastern coast of Sri Lanka, known for its natural deep water harbour, pristine beaches, and rich cultural heritage. It is one of the island's most important coastal destinations.",
    details: [
      {
        title: 'History & Culture',
        content: "Trincomalee has a long and diverse history influenced by ancient Sinhalese, Tamil, and colonial powers including the Portuguese, Dutch, and British. A key cultural landmark is the Koneswaram Temple, a sacred Hindu site perched dramatically on Swami Rock overlooking the ocean."
      },
      {
        title: 'Location & Geography',
        content: "Trincomalee sits along one of the world's finest natural harbours, which is the Trincomalee Harbour. The area features a mix of sandy beaches, rocky cliffs, and lush surroundings, making it both scenic and strategically significant."
      },
      {
        title: 'Wildlife & Activities',
        content: "Trincomalee is one of the best places in Sri Lanka for whale and dolphin watching, especially during the season from May to September. Visitors can also enjoy diving, snorkelling, and boat tours."
      },
      {
        title: 'Beaches & Attractions',
        content: "Trincomalee is one of the major attractive cities in Sri Lanka with beaches & attractions like Nilaveli Beach, which is a calm, white-sand beach ideal for relaxation, and also Uppuveli Beach, which is popular for its laid-back vibe, restaurants, and nightlife. One of the main attractions is also the Pigeon Island National Park, famous for snorkelling, coral reefs, and marine life."
      },
      {
        title: 'Climate & Accessibility',
        content: "The region has a tropical climate, but unlike much of Sri Lanka, Trincomalee experiences its best weather from May to September, making it a perfect destination when the southwest of the island is rainy. Trincomalee is accessible by road, rail, and domestic flights from major cities like Colombo. The journey will offer a scenic view of Sri Lanka's countryside."
      }
    ]
  };

  const yalaData = {
    id: 'yala',
    name: 'Yala National Park',
    image: '/images/yala_new.png',
    longDesc: 'Yala National Park is the most famous and widely visited wildlife reserve in Sri Lanka, located in the Southeastern region of the island, it is renowned for its rich biodiversity and thrilling safari experiences, especially its reputation as one of the best places in the world to see leopards in the wild.',
    details: [
      {
        title: 'Location & Landscape',
        content: "Yala lies along the Indian Ocean coastline, mainly in the Southern and Uva Provinces. The park features a diverse range of eco systems, including Dry monsoon forests, Grasslands and open plains, Lagoons and wetlands and Sandy beaches and coastal dunes. It's a mix of habitats supports a wide variety of wildlife species"
      },
      {
        title: 'Wildlife Highlights',
        content: "Yala is globally known for having one of the highest densities of Leopards, particularly in Block 1, making sightings more frequent than in my other countries. \n\n Large herds of Sri Lankan elephants roam freely, often seen near waterholes. \n\n Rare and Seasonal, but can be spotted especially during the fruiting season (Jun-July)\n\n Other animals like Mugger crocodiles, spotted deer, Sambars, wild boar and Jackals and mongooses."
      },
      {
        title: 'Bird Life',
        content: "Yala is a paradise for bird watches, with over 200 bird species, including peacocks, eagles and hawks and also Migratory water birds"
      },
      {
        title: 'Safari Experience',
        content: "In Yala The Safari experience which is a major thing the jeep safari's usually take place early morning or late afternoon, Block 1 is the most visited and accessible area.\n\nYala offers a classic safari experience combining thrilling wildlife encounters, scenic landscapes, and coastal beauty. It is one of the top destinations in Asia for anyone interested in nature, photography, and adventure tourism."
      }
    ]
  };

  const udawalawaData = {
    id: 'udawalawa',
    name: 'Udawalawa National Park',
    image: '/images/udawalawa_new.png',
    longDesc: "Udawalawa National Park is one of Sri Lanka's most important wildlife reserves, best known for its large population of Sri Lankan elephants and excellent safari opportunities. Located in the south-central part of the island, it offers a more open and accessible wildlife experience compared to denser parks like Yala.",
    details: [
      {
        title: 'Location & Geography',
        content: "Udawalawe lies on the boundary of Sabaragamuwa and Uva Province , about 165 km from Colombo. The park surrounds the Udawalawa Reservoir, which is a major water source attracting wildlife year-round. There are different landscape features like open grasslands and shrub forests. Riverine forests along waterways, Marshes and wetlands near the reservoir and scenic mountain views in the distance"
      },
      {
        title: 'Wild Life',
        content: "Wild life which is a major thing in Udawalawe National Park . There are so many kinds of animals . Mainly Elephant attraction.\n\nElephants home to 500+ and can be seen throughout the year with frequent sightings of herds, including calves and it is one of the best places in Asia to observe elephants in the wild.\n\nOther mammals like Leopards, sloth bears, water buffalo, spotted deer and sambar deer, Jackals, foxes and mongooses can be seen too.\n\nReptiles and Amphibians like Mugger crocodiles in water bodies, Monitor lizards and various snakes and amphibians can be found.\n\nUdawalawe is a great destination for bird lovers, with over 200 species recorded. Crested serpent Eagle, Fish Eagle, Kingfishers, Storks and herons and Migratory birds during certain seasons can be seen."
      },
      {
        title: 'Elephant Transit Home',
        content: "One of the most unique features near the park is the Elephant transit home which is a rehabilitation center for orphaned baby elephants which are raised with minimal human contact . Later released back into the wild. Visitors can observe feeding times from a distance"
      },
      {
        title: 'Safari Experience & Best Time to Visit',
        content: "Safari experience which is a major factor you can expect easy wildlife spotting due to open terrain, less crowded than Yala and Ideal for photography and relaxed safaris\n\nThe best time to visit is year-round destination which is best during dry months (May to September).\nAnimals gather near water sources during dry periods. And you can easily reach from cities like Ella, Tangalla, and Hambantota"
      }
    ]
  };

  const wilpaththuData = {
    id: 'wilpaththu',
    name: 'Wilpaththu National Park',
    image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2028&auto=format&fit=crop',
    longDesc: 'Wilpaththu National Park is the largest and one of the oldest national parks in Sri Lanka, celebrated for its untouched wilderness, low visitor density, and unique natural features. Unlike more crowded parks, Wilpaththu offers an immersive safari experience in a truly wild setting.',
    details: [
      {
        title: 'Location & Landscape',
        content: 'Wilpaththu is located in the northwestern part of Sri Lanka, spanning the Northwestern and North Central provinces, close to the historic city of Anuradhapura. Landscape features like Dry zone forests and scrublands, open grassy plains, Sandy tracks and dense jungle and natural lakes called "Villus" (a defining feature of the park)\n\nVillus :- Villus are shallow, rain-fed natural lakes surrounded by grasslands. These water sources attract a wide range of wildlife, making them excellent spots for sightings.'
      },
      {
        title: 'Wild life in Wilpaththu',
        content: 'One of the best places in Sri Lanka to see leopards and Sightings are less frequent than in Yala, but often more natural and undisturbed.\n\nElephants are seen in smaller numbers compared to Udawalawe often found near villus and forest edges.\n\nWilpaththu is one of the best parks to spot sloth bears and most visible during the fruiting season (May-July)\n\nOther Mammals like spotted deer and sambar deer, water buffalo, wild boar and jackals and mongooses can be seen.\n\nReptiles like Mugger crocodiles near villus and monitor lizards and various snake species can be also seen.\n\nWilpaththu is a great destination for birdwatching, with both resident and migratory species like painted storks, open bill storks, eagles and owls and wetland birds around villus.'
      },
      {
        title: 'Safari Experience',
        content: 'Safari experience which makes Wilpaththu unique. it is less crowded than parks like Yala, More unique environment, longer safari routes through dense and ideal for those seeking solitude and authentic wilderness. Generally the best period to visit is February to October. Dry months increase chances of wildlife sightings near water sources and some areas may close during heavy rains.\n\nWilpaththu National Park is perfect for travelers who prefer a deeper, more peaceful connection with nature rather than busy safari crowds. It offers a raw and authentic wilderness experience that feels truly untouched.'
      }
    ]
  };


  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[716px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBanW6tJL-27yIw2L2TK1MlIVEP2tpIUVCcuU4Dy0fNjgFJSV8D0XcnxL2HQZ9hlkYkZ2kEw2MWNvJIhDoiKUtZYQuBhRLzIpLvYPWMvWkaArzUZgxm8LqoJ8keiuRmngSHo1FGxMiOiG566oI9SGytaJ4a_iBU2PB__x38_TT0Y-c_gv2WALmvhrRwfLidnxV0yl1HMOcJIOMxQ99FZ1TbCNZEpbs1Wv6dgVEG3qyN_isRQARr28g6ZaMoH2CKpQsjaoYotddzyPw"
            alt="Wide cinematic shot of misty Sri Lankan tea plantations"
          />
          <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl pt-16">
          <span className="font-label text-sm font-bold uppercase tracking-[0.3em] text-secondary-fixed mb-4 block">The Ceylon Awaits for You</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight italic font-headline">Unveil the Soul of Ceylon</h1>
          {/* <p className="text-sm md:text-base text-white/70 font-body max-w-xl mx-auto mb-8 leading-relaxed italic tracking-wide">
            Where one experiences a sense of freedom, deep peace, and a connection to a larger, divine, or universal consciousness.
          </p> */}
          <p className="text-lg md:text-xl text-white/90 font-body max-w-2xl mx-auto leading-relaxed">
            From mist-shrouded highlands to the sapphire embrace of the Indian Ocean,by exploring through our hand-picked eco-destinations.
          </p>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="relative z-20 -mt-12 px-6">
        <div className="max-w-5xl mx-auto bg-surface-container-lowest p-4 md:p-6 rounded-full shadow-xl shadow-primary/5 flex justify-center items-center">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 flex-col sm:flex-row">

            <button onClick={() => scrollToSection('nature')} className="font-headline px-6 py-2 rounded-full bg-transparent text-primary hover:bg-secondary-container/30 font-bold text-sm border border-primary/10 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">forest</span> Nature
            </button>
            <button onClick={() => scrollToSection('culture')} className="font-headline px-6 py-2 rounded-full bg-transparent text-primary hover:bg-secondary-container/30 font-bold text-sm border border-primary/10 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">temple_hindu</span> Culture
            </button>
            <button onClick={() => scrollToSection('coast')} className="font-headline px-6 py-2 rounded-full bg-transparent text-primary hover:bg-secondary-container/30 font-bold text-sm border border-primary/10 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">waves</span> Coast
            </button>
            <button onClick={() => scrollToSection('wildlife')} className="font-headline px-6 py-2 rounded-full bg-transparent text-primary hover:bg-secondary-container/30 font-bold text-sm border border-primary/10 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">pets</span> Wildlife
            </button>
            {/* <button onClick={() => scrollToSection('adventure')} className="font-headline px-6 py-2 rounded-full bg-transparent text-primary hover:bg-secondary-container/30 font-bold text-sm border border-primary/10 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">hiking</span> Adventure
            </button> */}
          </div>
        </div>
      </section>

      {/* Destination Grid Section 01: Nature */}
      <section id="nature" className="py-24 px-6 max-w-screen-2xl mx-auto border-b border-outline-variant/10">
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="font-label text-xs font-bold text-secondary uppercase tracking-[0.5em] mb-6 block">nature & scenic</span>
              <h2 className="text-5xl md:text-7xl font-bold font-headline text-primary leading-tight">Nature & Scenic<br />Destinations</h2>
            </div>
            <div className="lg:col-span-7 pt-4 lg:pt-16">
              <div className="relative pl-0 md:pl-12">
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-secondary/30 hidden md:block"></div>
                <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed font-body italic">
                  "Sri Lanka is renowned for its breathtaking natural landscapes and scenic beauty, making it one of the most attractive destinations for nature lovers. This small island offers an incredible variety of environments—from misty mountains and lush forests to flowing waterfalls, rolling tea plantations, and diverse wildlife habitats."
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {scenicLocations.map((location) => (
            <div key={location.id} className="group cursor-pointer" onClick={() => setSelectedLocation(location)}>
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-6">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={location.image}
                  alt={location.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                  <h3 className="text-2xl font-headline font-bold mb-1">{location.name}</h3>
                </div>
                <div className="absolute top-4 right-4 z-10 pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur text-white flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined">zoom_in</span>
                  </div>
                </div>
              </div>
              <div>
                {/* <p className="text-on-surface-variant line-clamp-2">{location.shortDesc}</p> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Parallax Divider 1: Culture */}
      <section id="culture" className="parallax-section relative flex items-center justify-center h-[300px]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAkPFIcJgSoeAMOAlX65kImuY2upOZOBrQeK6Je2zUvyH5FrhUxqHaEkU7t5cR-hgsM1IE4w_wMjYbsWgg_kZ6sCBmLM37fudXDTyT14i0TfpihO3A0vYrSOAjFwn0saOjRRrmIk6_1liLDsR5Q8fOnA-cHXrFl03Y0milh7SC5BGSX7SRYWL4rLPpKMs05873B6vSF8774JfNCfzk1nbVA4sKEEmKJrl2Hpq_26BiUQzCp_6YWzMayg0MuoawmlWYz8K4WD171E_g")' }}>
        <div className="absolute inset-0 bg-primary/40 backdrop-brightness-75"></div>
        <div className="relative z-10 text-center max-w-2xl px-6">
          <h2 className="text-4xl md:text-6xl font-headline font-black text-white italic mb-6"> Cultural and Historical Destinations </h2>
          {/* <p className="text-white/90 text-lg">Walk through the corridors of time in cities built by kings and carved by devotion.</p> */}
        </div>
      </section>

      {/* Destination Grid Section 02: Culture & Heritage */}
      <section className="py-24 bg-surface-container-low px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col gap-16">
            <div className="w-full max-w-3xl mx-auto text-center">
              <p className="text-on-surface-variant mb-10 leading-relaxed text-lg italic">
                Sri Lanka is one of the richest countries in South Asia in terms of cultural and historical heritage. With a history spanning over 2,500 years, the island is home to ancient cities, sacred temples, impressive monuments, and UNESCO World Heritage Sites. These destinations reflect the country’s deep-rooted traditions, religious importance, and architectural brilliance.
              </p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Bento Item 1 - Anuradhapura */}
              <div
                className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group"
                onClick={() => setSelectedLocation(anuradhapuraData)}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    src={anuradhapuraData.image}
                    alt="Anuradhapura"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">zoom_in</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-headline font-bold text-primary mb-2">Anuradhapura</h4>
                <p className="text-sm text-on-surface-variant line-clamp-2">Ancient capital of Sri Lanka, a sacred city of ruins and spiritual heritage.</p>
              </div>

              {/* Bento Item 2 - Polonnaruwa */}
              <div
                className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group"
                onClick={() => setSelectedLocation(polonnaruwaData)}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    src={polonnaruwaData.image}
                    alt="Polonnaruwa"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">zoom_in</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-headline font-bold text-primary mb-2">Polonnaruwa</h4>
                <p className="text-sm text-on-surface-variant line-clamp-2">The medieval capital, famous for its well-preserved archaeological treasures.</p>
              </div>

              {/* Bento Item 3 - Kandy */}
              <div
                className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group"
                onClick={() => setSelectedLocation(kandyData)}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    src={kandyData.image}
                    alt="Kandy"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">zoom_in</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-headline font-bold text-primary mb-2">Kandy</h4>
                <p className="text-sm text-on-surface-variant line-clamp-2">The spiritual heart of the island, home to the Sacred Tooth Relic.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Parallax Divider 2: Coast */}
      <section id="coast" className="parallax-section relative flex items-center justify-center h-[300px]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKtllothzxfhLXMeVVgV6hF_X6dPMvRH5FQpPxd0fea4OCY2c5-m5jMkgs4NmAFIxI4kNlk30uPKvK_bErT6XcdIvsPmtDmFMzcM5taceA-bH6UUCfJSZRB4mRSUYlEwxyrQamCdwnCQcyBrTOyVg6CQcCDdeGKcd5r1RYLa8axzDoWeP8ZH2Y2CLjQ46d-Ddske5s4cdVpEgsSd9d6K8tpeaujC6DM0yrlDDhyLur4zB2hnGw-fm4QG0n5-UTejxvztcD2AzCOfA")' }}>
        <div className="absolute inset-0 bg-primary/30 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center max-w-2xl px-6">
          <h2 className="text-4xl md:text-6xl font-headline font-black text-white italic mb-6">Ocean Whispers</h2>

        </div>
      </section>

      {/* Destination Grid Section 03: Coastal */}
      <section className="py-24 px-6 max-w-screen-2xl mx-auto">
        {/* <div className="text-center mb-16">
          <span className="font-label text-sm font-bold text-secondary uppercase tracking-widest mb-2 block">The Sapphire Coast</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary italic">Blue Horizons</h2>
        </div> */}

        <div className="w-full max-w-4xl mx-auto text-center mb-16">
          <p className="text-on-surface-variant leading-relaxed text-lg italic">
            Sri Lanka is surrounded by the Indian Ocean and boasts a stunning coastline of over 1,300 kilometers.
            The island&apos;s beaches are known for their golden sands, clear blue waters, swaying coconut palms, and vibrant marine life.
            Coastal tourism is one of the most popular attractions in Sri Lanka, offering relaxation, adventure, and scenic beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coastal Item 1 - Galle */}
          <div
            className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group"
            onClick={() => setSelectedLocation(galleData)}
          >
            <div className="relative overflow-hidden rounded-lg mb-6">
              <img
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                src={galleData.image}
                alt="Galle"
              />
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm">zoom_in</span>
                </div>
              </div>
            </div>
            <h4 className="text-xl font-headline font-bold text-primary mb-2">Galle</h4>
            <p className="text-sm text-on-surface-variant line-clamp-2">Historic coastal city known for its colonial heritage and iconic fort.</p>
          </div>

          {/* Coastal Item 2 - Arugam Bay */}
          <div
            className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group"
            onClick={() => setSelectedLocation(arugamBayData)}
          >
            <div className="relative overflow-hidden rounded-lg mb-6">
              <img
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                src={arugamBayData.image}
                alt="Arugam Bay"
              />
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm">zoom_in</span>
                </div>
              </div>
            </div>
            <h4 className="text-xl font-headline font-bold text-primary mb-2">Arugam Bay</h4>
            <p className="text-sm text-on-surface-variant line-clamp-2">A world-class surfing destination with a laid-back atmosphere.</p>
          </div>

          {/* Coastal Item 3 - Trincomalee */}
          <div
            className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group"
            onClick={() => setSelectedLocation(trincomaleeData)}
          >
            <div className="relative overflow-hidden rounded-lg mb-6">
              <img
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                src={trincomaleeData.image}
                alt="Trincomalee"
              />
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm">zoom_in</span>
                </div>
              </div>
            </div>
            <h4 className="text-xl font-headline font-bold text-primary mb-2">Trincomalee</h4>
            <p className="text-sm text-on-surface-variant line-clamp-2">Explore the untouched eastern shores, famous for its deep natural harbor and coral reefs.</p>
          </div>
        </div>
      </section>

      {/* Parallax Divider 3: Wildlife */}
      <section id="wildlife" className="parallax-section relative flex items-center justify-center h-[300px]" style={{ backgroundImage: 'url("/images/yala_new.png")' }}>
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center max-w-2xl px-6">
          <h2 className="text-4xl md:text-6xl font-headline font-black text-white italic mb-6">The Wild Roar</h2>

        </div>
      </section>

      {/* Destination Grid Section 04: Wildlife */}
      <section className="py-24 bg-surface-container-low px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-1/3">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-8 leading-tight">Wild life & National Parks</h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                Sri Lanka is one of the richest wildlife destinations in Asia, offering an incredible variety of ecosystems and animals within a relatively small island. From dense rainforests to open savannas and coastal wetlands the country's national parks protect a remarkable diversity of flora and fauna.
              </p>
              <p className="text-on-surface-variant mb-6 leading-relaxed">
                Home to over 100 species of mammals, nearly 500 species of birds, and countless reptiles, amphibians, and insects. Iconic wildlife includes:
              </p>
              <div className="flex flex-col gap-3 mb-10">
                {[
                  { icon: 'pets', title: 'Sri Lankan Elephant', desc: 'Commonly seen in large herds', color: 'text-primary', bg: 'bg-primary/10' },
                  { icon: 'cruelty_free', title: 'Sri Lankan Leopard', desc: 'The island\'s elusive top predator', color: 'text-secondary', bg: 'bg-secondary/10' },
                  { icon: 'forest', title: 'Sloth Bear', desc: 'Rare but found in dry zone forests', color: 'text-primary', bg: 'bg-primary/10' },
                  { icon: 'sailing', title: 'Marine Life', desc: 'Blue Whales & dolphins off the coast', color: 'text-secondary', bg: 'bg-secondary/10' },
                  { icon: 'flutter_dash', title: 'Endemic Birds', desc: 'Peacocks, hornbills & diverse species', color: 'text-primary', bg: 'bg-primary/10' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/50 hover:shadow-md transition-all duration-300 group cursor-default">
                    <div className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <span className={`material-symbols-outlined ${item.color}`}>{item.icon}</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-on-surface text-sm md:text-base">{item.title}</h5>
                      <p className="text-xs md:text-sm text-on-surface-variant mt-0.5 leading-tight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Wildlife Card 1 - Yala */}
              <div
                className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group"
                onClick={() => setSelectedLocation(yalaData)}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    src={yalaData.image}
                    alt="Yala National Park"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">zoom_in</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-headline font-bold text-primary mb-2">Yala National Park</h4>
                <p className="text-sm text-on-surface-variant line-clamp-2">The world's highest density of leopards and a diverse ecosystem of coastal brush and monsoon forests.</p>
              </div>

              {/* Wildlife Card 2 - Udawalawa */}
              <div
                className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group"
                onClick={() => setSelectedLocation(udawalawaData)}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    src={udawalawaData.image}
                    alt="Udawalawa National Park"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">zoom_in</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-headline font-bold text-primary mb-2">Udawalawa National Park</h4>
                <p className="text-sm text-on-surface-variant line-clamp-2">Gatherings of wild elephants that roam the vast plains against the backdrop of the highland mountains.</p>
              </div>

              {/* Wildlife Card 3 - Wilpaththu */}
              <div
                className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group md:col-span-2"
                onClick={() => setSelectedLocation(wilpaththuData)}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    className="w-full md:h-80 h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    src={wilpaththuData.image}
                    alt="Wilpaththu National Park"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">zoom_in</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-headline font-bold text-primary mb-2">Wilpaththu National Park</h4>
                <p className="text-sm text-on-surface-variant line-clamp-2">The largest and one of the oldest national parks, celebrated for its untouched wilderness and natural lakes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Divider 4: Adventure */}
      {/* <section id="adventure" className="parallax-section relative flex items-center justify-center h-[300px]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTb9a8c7d6e5f4g3h2i1j0k9l8m7n6o5p4r3s2t1u0v9w8x7y6z5a4b3c2d1e0f9g8")' }}>
        <div className="absolute inset-0 bg-primary/30 backdrop-blur-[1px]"></div>
        <div className="relative z-10 text-center max-w-2xl px-6">
          <h2 className="text-4xl md:text-6xl font-headline font-black text-white italic mb-6">Adrenaline Peaks</h2>
          <p className="text-white/90 text-lg">Conquer the rapids, scale the hidden peaks, and find your edge in the island's most rugged terrains.</p>
        </div>
      </section> */}


      {/* Destination Grid Section 05: Adventure */}
      {/* <section className="py-24 px-6 max-w-screen-2xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-label text-sm font-bold text-secondary uppercase tracking-widest mb-2 block">Thrill & Discovery</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary italic">The Adventure Frontier</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       
       
          <div className="group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-lg">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT-X9y8z7w6v5u4t3s2r1q0p9o8n7m6l5k4j3i2h1g0f9e8d7c6b5a4z3y2x1w0v9"
                alt="Kitulgala Rafting"
              />
            </div>
            <div className="p-8">
              <span className="text-xs font-black text-secondary tracking-widest uppercase mb-4 block">Water Quest</span>
              <h3 className="text-2xl font-headline font-bold text-primary mb-3">Kitulgala Rapids</h3>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">White-water rafting and canyoning through the Kelani River in a lush tropical rainforest setting.</p>
              <hr className="border-outline-variant/30 mb-6" />
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary/60 uppercase">High Intensity</span>
              </div>
            </div>
          </div>
       
       
          <div className="group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-lg">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTe3d2c1b0a9z8y7x6w5v4u3t2s1r0q9p8o7n6m5l4k3j2i1h0g9f8e7d6c5b4"
                alt="Belihuloya Adventure"
              />
            </div>
            <div className="p-8">
              <span className="text-xs font-black text-secondary tracking-widest uppercase mb-4 block">Nature Quest</span>
              <h3 className="text-2xl font-headline font-bold text-primary mb-3">Belihuloya</h3>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Canoeing on the Samanalawewa reservoir and trekking through multiple eco-zones at the edge of the highlands.</p>
              <hr className="border-outline-variant/30 mb-6" />
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary/60 uppercase">Exploration</span>
              </div>
            </div>
          </div>
        
          <div className="group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-lg">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTf7g6h5i4j3k2l1m0n9o8p7q6r5s4t3u2v1w0x9y8z7a6b5c4d3e2f1g"
                alt="Meemure Village"
              />
            </div>
            <div className="p-8">
              <span className="text-xs font-black text-secondary tracking-widest uppercase mb-4 block">Remote Quest</span>
              <h3 className="text-2xl font-headline font-bold text-primary mb-3">Hidden Meemure</h3>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Sri Lanka’s most remote village, offering untouched mountain hikes and stream sliding in natural pools.</p>
              <hr className="border-outline-variant/30 mb-6" />
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary/60 uppercase">Soul Quest</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}


      {/* Newsletter CTA Section */}
      {/* <section className="py-24 px-6 bg-primary overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <span className="material-symbols-outlined text-[400px] leading-none select-none" style={{ fontVariationSettings: '"FILL" 1' }}>eco</span>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6">Begin Your Personalized Quest</h2>
          <p className="text-primary-fixed-dim text-lg mb-12 max-w-xl mx-auto">Subscribe to receive exclusive expedition itineraries and sustainable travel tips directly to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={handleSubscribe}>
            <input
              className="flex-1 px-6 py-4 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-secondary-fixed transition-all disabled:opacity-50"
              placeholder="Your email address"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={subscribeStatus.status === 'loading'}
            />
            <button
              type="submit"
              disabled={subscribeStatus.status === 'loading'}
              className="px-8 py-4 bg-secondary-container text-on-secondary-container font-black uppercase tracking-widest rounded-md hover:bg-surface-container-lowest hover:text-primary transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[160px]"
            >
              {subscribeStatus.status === 'loading' ? (
                <svg className="animate-spin h-5 w-5 text-on-secondary-container" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : 'Join Quest'}
            </button>
          </form>
          {subscribeStatus.status === 'success' && (
            <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-md text-green-100 max-w-lg mx-auto animate-in fade-in slide-in-from-bottom-2">
              <p className="flex items-center justify-center gap-2 text-sm font-medium">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {subscribeStatus.message}
              </p>
            </div>
          )}
        </div>
      </section> */}

      {/* Details Popup Modal */}
      {
        selectedLocation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm" onClick={() => setSelectedLocation(null)}></div>
            <div className="bg-surface-container-lowest rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl animate-in fade-in zoom-in duration-300">
              <button
                onClick={() => setSelectedLocation(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/30 backdrop-blur rounded-full text-white flex items-center justify-center hover:bg-black/50 z-20 transition-all font-bold"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
              <div className="relative h-64 md:h-80 w-full">
                <img src={selectedLocation.image} alt={selectedLocation.name} className="w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
              </div>
              <div className="p-8 -mt-16 relative z-10">
                <h2 className="text-4xl md:text-6xl font-headline font-black text-primary mb-8">{selectedLocation.name}</h2>

                <div className="max-w-none">
                  <p className="text-on-surface-variant text-xl leading-relaxed mb-12 font-medium italic border-l-4 border-secondary pl-6">
                    {selectedLocation.longDesc}
                  </p>

                  {selectedLocation.details && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                      {selectedLocation.details.map((section, idx) => (
                        <div key={idx} className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
                          <h4 className="font-headline font-bold text-primary mb-3 uppercase tracking-wider text-sm">{section.title}</h4>
                          <p className="text-on-surface-variant text-base leading-relaxed line-clamp-4 hover:line-clamp-none transition-all whitespace-pre-line">{section.content}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {selectedLocation.teaSection && (
                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-12">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="material-symbols-outlined text-primary text-3xl">
                          {selectedLocation.teaSection.icon || 'star_rate'}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary">
                          {selectedLocation.teaSection.title}
                        </h3>
                      </div>

                      <p className="text-on-surface-variant mb-6 text-lg font-medium leading-relaxed">
                        {selectedLocation.teaSection.description}
                      </p>

                      {(selectedLocation.teaSection.history || selectedLocation.teaSection.characteristics || selectedLocation.teaSection.estates) && (
                        <div className="space-y-8 mt-8 border-t border-primary/10 pt-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {selectedLocation.teaSection.history && (
                              <div>
                                <h4 className="font-bold text-primary mb-2 text-sm uppercase tracking-widest">History</h4>
                                <p className="text-on-surface-variant text-sm leading-relaxed">{selectedLocation.teaSection.history}</p>
                              </div>
                            )}
                            {selectedLocation.teaSection.characteristics && (
                              <div>
                                <h4 className="font-bold text-primary mb-2 text-sm uppercase tracking-widest">Profile</h4>
                                <p className="text-on-surface-variant text-sm leading-relaxed">{selectedLocation.teaSection.characteristics}</p>
                              </div>
                            )}
                          </div>

                          {selectedLocation.teaSection.estates && (
                            <div>
                              <h4 className="font-bold text-primary mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                                Key Estates & Highlights
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {selectedLocation.teaSection.estates.map((estate, idx) => (
                                  <div key={idx} className="bg-white/80 p-4 rounded-lg border border-primary/10 shadow-sm">
                                    <span className="block font-bold text-primary text-sm mb-1">{estate.name}</span>
                                    <span className="text-xs text-on-surface-variant leading-tight">{estate.info}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {selectedLocation.teaSection.additionalSections && (
                        <div className="space-y-8 mt-8 border-t border-primary/10 pt-8">
                          {selectedLocation.teaSection.additionalSections.map((section, idx) => (
                            <div key={idx}>
                              <h4 className="font-bold text-primary mb-2 text-sm uppercase tracking-widest">{section.title}</h4>
                              <p className="text-on-surface-variant text-base leading-relaxed">{section.content}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}


                </div>
              </div>
            </div>
          </div>
        )
      }
    </main >
  );
};

export default Destinations;
