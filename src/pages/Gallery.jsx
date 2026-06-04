const Gallery = () => {
  return (
    <main className="relative z-20 pb-24">
      {/* Hero Section with Parallax */}
      <header className="relative h-[614px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 parallax-bg"
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAv7XV8TFtKPYRxopiykXRqYJWt-nxOg4Fg5BZv-gDs6pILKsb77wgPdZipsAky-0lOuZPaB9BoEIK-KSkZwgeKfWw172FRgvgPw3KyZVSj0xad76ixLZylh51hZEJZUyagr6HWXkqdftGvNcp5cPpwpmR7MMI8-Od4e3wNMdJEx6QQT0dWAfgiGe378ogpsKMQpTgI5GaIxA_GBx2audnjX9DqCtDynYLQiwPPYz_cdqZ_3lIIp2V8qfcRCNEqllNPKyaDTQg-NsA')" }}
        >
          <div className="absolute inset-0 bg-primary/20 backdrop-brightness-75"></div>
        </div>
        <div className="relative z-10 text-center px-6 mt-16">
          <span className="font-label text-sm uppercase tracking-[0.3em] text-secondary-container mb-4 block">The Expedition Journal</span>
          <h1 className="font-headline text-5xl md:text-7xl text-white font-black tracking-tight mb-6">Visual Quests</h1>
          <p className="max-w-2xl mx-auto text-white/90 text-lg md:text-xl font-light leading-relaxed">
            Capturing the raw soul of the Indian Ocean's emerald jewel through the lens of modern exploration.
          </p>
        </div>
      </header>

      {/* Filter & Content Section */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 -mt-16">
        {/* Category Filter Bar */}
        <div className="relative z-30 bg-surface-container-lowest rounded-xl shadow-xl p-4 mb-16 flex flex-wrap items-center justify-center gap-4 border border-outline-variant/10 backdrop-blur-md">
          <button className="px-8 py-2.5 rounded-full bg-secondary-container text-on-secondary-container font-label font-bold transition-all">History</button>
          <button className="px-8 py-2.5 rounded-full hover:bg-surface-container-high text-on-surface-variant font-label font-medium transition-all">Cultural Heritage</button>
          <button className="px-8 py-2.5 rounded-full hover:bg-surface-container-high text-on-surface-variant font-label font-medium transition-all">Economy</button>
          <button className="px-8 py-2.5 rounded-full hover:bg-surface-container-high text-on-surface-variant font-label font-medium transition-all">Cuisine</button>
          <button className="px-8 py-2.5 rounded-full hover:bg-surface-container-high text-on-surface-variant font-label font-medium transition-all">Arts, Music & Dance</button>
          <button className="px-8 py-2.5 rounded-full hover:bg-surface-container-high text-on-surface-variant font-label font-medium transition-all">Education & Health Care</button>
        </div>

        {/* Masonry Gallery */}
        <div className="masonry-grid gap-8">
          {/* Gallery Item 1 */}
          <div className="mb-8 break-inside-avoid group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg bg-surface-container">
              <img
                alt="Sri Lanka Coast"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbzHl6j8Qknjx5RyQRDQYjREM1B2FZ71nDm2utOof7c-d0Y6xClH8fWT3Xvt9PyxAlK6ezAp4lYtm4yz1fHDsD_lqW3pbxi3z86sHUE8WM1qozn89aipCVShecaucB8feO_Qs92LJsW8-YmVut9sr3iD52KS6DqC1omH_cqeMO6Lg3ohkdVC-Aoq4V-WtDEtCzCcuatvqDf0N2OBJBP-uH4JI4ZHCpQviBqtHqPdoETkqlOH-f0FHlWyMV6hc4fPCjPNo2UVnOBYg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-secondary-container font-label text-xs tracking-widest uppercase mb-1">Beaches</span>
                <h3 className="text-white font-headline text-xl font-bold">Mirissa Gold</h3>
              </div>
            </div>
          </div>

          {/* Gallery Item 2 */}
          <div className="mb-8 break-inside-avoid group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg bg-surface-container">
              <img
                alt="Sri Lanka Wildlife"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWI34N_LBbhvfe3FJx8UZW13zguvApgPDO5ShnZEaBG0Kp7_OOg9G6aWUN58SxOHodyDAQ3OUxxZqfl9OyQH0J794u2_MXb3vBIjAcSu8VCCJ-j4yj8NPwlhYz0WyCa7w7sSPyicG3L3yoXpAT0x-foAV4jjW34PSS8geF2IkDuidowFyR8JCC1MQszyyhYMaUUsc8n-5JBVxZRwgYGwX7AetSdMdX1VSAugJTVLsTaycOqD8zyZa4qE2MeaG1wYYdeIciflzswBY"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-secondary-container font-label text-xs tracking-widest uppercase mb-1">Wildlife</span>
                <h3 className="text-white font-headline text-xl font-bold">Yala Shadows</h3>
              </div>
            </div>
          </div>

          {/* Gallery Item 3 */}
          <div className="mb-8 break-inside-avoid group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg bg-surface-container">
              <img
                alt="Temple architecture"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfFwlrhevEBOPQ-N2DLMSqNA2O7wqSYfowO-4XSDTpgi-dVWKsbLY3hJXFBWjRdG25AJWleuXOhVW4YKvAMFCHL9S_xwsNL4R-T3mv8LB0dld0FAZ4HpvsKOeP6DvX6ldawLu4f9B7QyhqqeHNDyDCSIPDNDXexnEE2sRZa_u33FybZt1MWwq1qyo5EMtMGCgQSkVbG9_jdOozugzGz_akyTqSYFRyUw1-9wV5hN__yRci8tzVz0vJPSJYoCJ5CaZsMgZjwEjaPC0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-secondary-container font-label text-xs tracking-widest uppercase mb-1">Heritage</span>
                <h3 className="text-white font-headline text-xl font-bold">Polonnaruwa Echoes</h3>
              </div>
            </div>
          </div>

          {/* Gallery Item 4 - Large Vertical */}
          <div className="mb-8 break-inside-avoid group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg bg-surface-container">
              <img
                alt="Nine Arches Bridge"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVO-ZUeMymt9098Jx1yIrsbPiteAabsUJn65NEMrcu_5UQTN3fRq60PGNnNFIJyxsx63v4jA0XjWg7uDpX5T75EXOKyBUPusyCJCUlk7dFhdpp52mOQFgK7vEAeFOC5TJ21TQdzxiUs5Or8ypqdvbHvDsFMDliBxOZtvfv8LedrQIK7cDkdPMAxoag0Lgqjoe-QMGdozv_BFMOxMh_DnudXLL43xrUbDZ7rmsuOPnGnNi7nc0sj-1pCQZukdaYR51TRYK73fdeDU0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-secondary-container font-label text-xs tracking-widest uppercase mb-1">Mountains</span>
                <h3 className="text-white font-headline text-xl font-bold">The Ella Loop</h3>
              </div>
            </div>
          </div>

          {/* Gallery Item 5 */}
          <div className="mb-8 break-inside-avoid group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg bg-surface-container">
              <img
                alt="Elephant sanctuary"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr9i30BfessbqMOlmX-LBDy-R67fb-jYJdQFwQoSzwVTVdekN7Z2hA6N-nSmzbOSmTAVo5lhlWu9cTsHzEhrGX9s-9ANoT_ReZq5ZpG-LJ3DM7ljjq-YA1BAk5hmmqHwCeEqJ4HaOOyU3Q95VGPswi2TotBLaAf8RYbqDsM-HRGe6qDLufG67f5_E-g_L2jTVDzK2AFCNBf6zbMjOVQTDz_Qs_N2ynQeWDeomWX-hJv7XJBB6JtFPNj4QeR0dyRmxgFRT6zicM2Ko"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-secondary-container font-label text-xs tracking-widest uppercase mb-1">Wildlife</span>
                <h3 className="text-white font-headline text-xl font-bold">River Giants</h3>
              </div>
            </div>
          </div>

          {/* Gallery Item 6 */}
          <div className="mb-8 break-inside-avoid group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg bg-surface-container">
              <img
                alt="Mountain sunset"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgJ8gryrDs0y6deq0HoVY8vLJLH0m6xzHl5TN39eZHn9IDTaXwHI5XET14WQosAErjkAzFvbosNsMCG3BKjIl-azrvqxt9Q3j0W0RFfSBauApg7Ws4sy1RgljdIqlkWEDWK2INL2IzCpHi5PCKRqLDTolaXRy9C9UAUH9Z5qSDAMAQGl41pbP_51idYgKCG0xZVDFtXWZgzvfREQesLS9uOfm4Igch93d-HN2_8KHdZJcLypmGMrCpNVKbJhKhnCSL1gY-hbaZksc"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-secondary-container font-label text-xs tracking-widest uppercase mb-1">Mountains</span>
                <h3 className="text-white font-headline text-xl font-bold">Peak Nirvana</h3>
              </div>
            </div>
          </div>

          {/* Gallery Item 7 */}
          <div className="mb-8 break-inside-avoid group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg bg-surface-container">
              <img
                alt="Stilt Fishermen"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIJotG9fc_LhsjckaebE7xevwM2CPtse8hB3g1Roq8ih4r5YR-2R0rIx-K8A_0Md_b_y8PktLYQzJJi30M1Y2AZp5T9xPiwd1faEkVNsMpTvQd7ltI7iWpqH-9NWGq8tyOiN7ivCwAvg-ngXnUojM38mB652esS7mjYsF5m8oGpoSba2vMihzue-P_pbaWwGxtXfmxdWq4E7pCbgCJj7ERaC-NoAuvl1sdMjoai83y8CxLjNXwDxQ6TJVnGEN_7fOdXjGylIzTiq0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-secondary-container font-label text-xs tracking-widest uppercase mb-1">Heritage</span>
                <h3 className="text-white font-headline text-xl font-bold">Ancestral Waters</h3>
              </div>
            </div>
          </div>

          {/* Gallery Item 8 */}
          <div className="mb-8 break-inside-avoid group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg bg-surface-container">
              <img
                alt="Tropical interior"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqmBKd3Osn83wPTHsntmbnnh8IyE9u-RsFKgbd_a1-8_KQEf25TiuvL_2WbVNJU6NumCncFYRVfdjzhJg83rHumEH5c6ulXSBT8hAbP1cQ0dlrk_jCHdTQrdV9thjhUxCkCdebU5KpXSJtJaZCRy0mJoa3t8SGaRBvgGbMqmbLVJsGFN9PtDI0KooETvIZxPYvP25mYVSs-QdQzCNnZsvajGEMXZTIRzvv77gowntXI7KAAxm0kQOIRgua5J3LuMdYkKR2Q7LUIqo"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-secondary-container font-label text-xs tracking-widest uppercase mb-1">Eco-Living</span>
                <h3 className="text-white font-headline text-xl font-bold">Forest Hideaway</h3>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="mt-24 bg-primary rounded-2xl overflow-hidden relative flex flex-col md:flex-row items-center justify-between p-12 md:p-20 shadow-2xl">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2"></div>
          <div className="relative z-10 max-w-xl">
            <h2 className="font-headline text-4xl text-white font-bold mb-6">Start Your Own Story</h2>
            <p className="text-white/80 text-lg mb-8">Ready to witness these wonders with your own eyes? Our curated expeditions take you beyond the lens.</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-md font-label font-bold hover:scale-105 transition-transform">Inquire Now</button>
              <button className="border border-white/30 text-white px-10 py-4 rounded-md font-label font-bold hover:bg-white/10 transition-colors">View Destinations</button>
            </div>
          </div>
          <div className="mt-12 md:mt-0 relative z-10 flex -space-x-4">
            <div className="w-16 h-16 rounded-full border-2 border-primary bg-surface overflow-hidden">
              <img
                alt="Explorer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVoQZAJdNpJ-gRly24iok4jekXHWk88ge3m0R3jwbHktYkw_9TwGcjZLRYIBkEV4PzT9_f2Nd6HhgFxr6waYZDMlOMQzQ-EStfow79t0qfRMuODoVbvZjO8dOcMtHdyFUKJER5izV2ZCL5o6c4Cvr3WEbfCLDcZojrL4STar8FKqmyatME4tjJe3k-_U-Kt492uG12mVYSY-B2bFr7ZRhkwzGSKL8xbpO3B8VX5yyL8ZA4LYI116qUi-YH1yDxf_l9n4qbzyiWa7I"
              />
            </div>
            <div className="w-16 h-16 rounded-full border-2 border-primary bg-surface overflow-hidden">
              <img
                alt="Explorer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1OQUGscmMuxaajUTiXgFE4NEKjQ242w1IIrqk3sf9lausE90iB8Y7BYkOotcBKc0FYchGwkruT4zkOHDLo72g4BG0upnthqQLPd7euqiE420IyuSdACm6UyLHk2CUXJxr7NTRQncUQTRxVnG9RB4LgsImx0rd3RjYusqlJQZKHSE4CJO-pAZEFYRHvJVBhsewfJS_lw7o3dFbReMm8-cduCe8pJGQgmRb1hWd3sbP_eLVFWKLUs3AXkZk9WbjAen9O1AfpayDIzo"
              />
            </div>
            <div className="w-16 h-16 rounded-full border-2 border-primary bg-surface-container-highest flex items-center justify-center font-bold text-primary">
              +2k
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default Gallery;
