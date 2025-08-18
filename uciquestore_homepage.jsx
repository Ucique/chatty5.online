/*
 * UciqueHome – a complete homepage component for the Ucique project.
 *
 * This component uses Tailwind CSS for styling and assumes that Tailwind is
 * configured in your React project. It features a dark, poetic aesthetic
 * with a parallax background, glassmorphic cards, product previews and
 * content sections inspired by the Ucique brand. For SEO, meta tags and
 * structured data are added via react‑helmet.
 */

const products = [
  {
    name: 'Signal: 3·6·9 Spiral Tee',
    subtitle: 'Eco / organic cotton',
    price: '€29',
  },
  {
    name: 'Ritual Scar Hoodie',
    subtitle: 'Organic / recycled',
    price: '€59',
  },
  {
    name: 'Ghost‑Field Print',
    subtitle: 'Museum grade print',
    price: '€39',
  },
  {
    name: 'Silver‑8 Ancestral Cap',
    subtitle: 'Recycled cotton',
    price: '€24',
  },
  {
    name: 'Fifth Age Poster',
    subtitle: 'Recycled paper',
    price: '€19',
  },
  {
    name: 'Frequency Journal',
    subtitle: 'Recycled paper',
    price: '€12',
  },
];

const blogPosts = [
  {
    title: 'How to Heal Without Becoming a Liar',
    excerpt: 'Healing isn’t pretty. It’s messy, radical honesty and art that bites back.',
    link: 'blog/heal-without-lies.html',
  },
  {
    title: 'Gifted & Gaslit',
    excerpt: 'For the geniuses and misfits told to shrink, here’s a manifesto.',
    link: 'blog/gifted-and-gaslit.html',
  },
  {
         title: 'Insane Stepmothers',
        excerpt: 'A poetic grotesque memoir of masks, poison and ritual flowers.',
        link: 'blog/insane-stepmothers.html',
      },

];

// Define Helmet as a passthrough component since react-helmet is not available
const Helmet = (props) => React.createElement(React.Fragment, null, props.children);


const UciqueHome = () => {
  // Structured data for SEO (Organization & Website schema)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Ucique',
    'url': 'https://ucique.com',
    'logo': 'https://ucique.com/logo.png',
    'sameAs': [
      'https://instagram.com/ucique',
      'https://tiktok.com/@ucique',
    ],
  };

  return (
    <div className="relative overflow-x-hidden bg-black text-white font-sans">
      {/* SEO meta tags */}
      <Helmet>
        <title>UCIQUE — Healing Processes in a Distorted World</title>
        <meta
          name="description"
          content="Ritual clothing, wearable wounds, sacred sarcasm. Art that bites back, poetry that mends with teeth. Spiritual gangstar: raw, eco, authentic."
        />
        <meta
          name="keywords"
          content="Ucique, healing processes, ritual clothing, wearable wounds, sacred sarcasm, spiritual gangstar, eco apparel, organic streetwear, healing poetry, trauma art"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@400;600&display=swap');
          :root {
            --font-display: 'Cinzel', serif;
            --font-body: 'Inter', sans-serif;
          }
        `}</style>
      </Helmet>

      {/* Parallax background layers */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-black to-gray-950"
      />
      {/* Stars & aurora layer */}
      <div
        className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top_left,_rgba(16,185,129,0.2),_transparent),radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.15),_transparent)] bg-cover bg-fixed"
        style={{
          backgroundBlendMode: 'screen',
        }}
      />

      {/* Header / Navigation */}
      <header className="flex items-center justify-between px-6 py-4 backdrop-blur-sm bg-white/5 border-b border-white/10 sticky top-0 z-10">
        <div className="text-2xl tracking-widest font-bold" style={{ fontFamily: 'var(--font-display)' }}>
          UCIQUE
        </div>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
          <a href="#store" className="hover:text-emerald-400">Shop</a>
          <a href="#discussion" className="hover:text-emerald-400">Discussion</a>
          <a href="#gallery" className="hover:text-emerald-400">Gallery</a>
          <a href="#blog" className="hover:text-emerald-400">Blog</a>
          <a href="#ethos" className="hover:text-emerald-400">Eco</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center pt-32 pb-40 px-4 md:px-10">
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-widest mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          HEALING PROCESSES
        </h1>
        <p className="max-w-3xl text-lg md:text-xl text-gray-300 mb-8" style={{ fontFamily: 'var(--font-body)' }}>
          spiritual gangstar edition. I make art that bites back, poetry that mends with teeth.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <a
            href="#discussion"
            className="px-8 py-3 rounded-full bg-emerald-500/80 hover:bg-emerald-400 text-black font-semibold uppercase tracking-wide"
          >
            Enter the Process
          </a>
          <a
            href="#store"
            className="px-8 py-3 rounded-full border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black font-semibold uppercase tracking-wide"
          >
            Visit the Store
          </a>
        </div>
      </section>

      {/* Three glass cards */}
      <section className="px-4 md:px-10 -mt-20 mb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Art & Apparel */}
          <div className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:-translate-y-2 transition-all duration-300">
            <div className="text-xs uppercase tracking-widest text-emerald-400 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
              Ritual clothing
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Art & Apparel</h3>
            <p className="text-gray-300 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
              Ritual clothing, wearable wounds, sacred sarcasm.  Shop prints, clothing and objects made to vibrate.
            </p>
            <a href="#store" className="inline-flex items-center gap-2 text-emerald-400 hover:underline uppercase text-sm font-semibold">
              Visit the Store
            </a>
          </div>
          {/* Discussion */}
          <div className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:-translate-y-2 transition-all duration-300">
            <div className="text-xs uppercase tracking-widest text-emerald-400 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
              Unpolished forum
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Discussion</h3>
            <p className="text-gray-300 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
              A forum for the burned and brilliant.  Talk trauma, intelligence, healing and madness.
            </p>
            <a href="#discussion" className="inline-flex items-center gap-2 text-emerald-400 hover:underline uppercase text-sm font-semibold">
              Join the Forum
            </a>
          </div>
          {/* Artwork */}
          <div className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:-translate-y-2 transition-all duration-300">
            <div className="text-xs uppercase tracking-widest text-emerald-400 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
              Visual stories
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Artwork</h3>
            <p className="text-gray-300 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
              Distorted beauty in ghost fields and spirals.  A gallery of frequencies, truths and poetic fragments.
            </p>
            <a href="#gallery" className="inline-flex items-center gap-2 text-emerald-400 hover:underline uppercase text-sm font-semibold">
              Enter Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Store Preview */}
      <section id="store" className="px-4 md:px-10 py-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
            Featured Pieces
          </h2>
          <a href="#" className="text-sm uppercase tracking-widest text-emerald-400 hover:text-emerald-300" style={{ fontFamily: 'var(--font-body)' }}>
            All Products →
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden border border-white/15 bg-white/10 backdrop-blur-md p-4 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-emerald-700/30 via-indigo-700/30 to-purple-700/30 flex items-center justify-center">
                {/* Placeholder graphic – abstract swirling shape */}
                <svg viewBox="0 0 200 200" className="h-full w-full opacity-80">
                  <defs>
                    <linearGradient id={`grad-${idx}`} x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="rgba(16,185,129,0.6)" />
                      <stop offset="100%" stopColor="rgba(59,130,246,0.5)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M100 20c-35 0-64 29-64 64s29 64 64 64 64-29 64-64-29-64-64-64zm0 18a46 46 0 100 92 46 46 0 000-92z"
                    fill={`url(#grad-${idx})`}
                  />
                  <circle cx="100" cy="100" r="6" fill="white" />
                </svg>
              </div>
              <div className="pt-4" style={{ fontFamily: 'var(--font-body)' }}>
                <div className="text-lg font-semibold">{item.name}</div>
                <div className="text-gray-400 text-sm">{item.subtitle}</div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-gray-200 font-medium">{item.price}</span>
                  <button className="px-3 py-2 rounded-full bg-emerald-500/90 hover:bg-emerald-400 text-black text-sm font-bold uppercase tracking-wider">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Discussion CTA */}
      <section id="discussion" className="px-4 md:px-10 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Join the Community</h2>
            <p className="text-gray-300 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              This is not a safe space.  It’s a real space.  No filters.  No fixations.  No gods.  Just breath, breakage and becoming.  Bring your story.  Bring your edges.  Leave the costume.
            </p>
            <a href="#" className="rounded-full px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white/90 font-semibold tracking-wider uppercase" style={{ fontFamily: 'var(--font-body)' }}>
              Join the Forum
            </a>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-6">
            <div className="text-xs uppercase tracking-widest text-gray-400" style={{ fontFamily: 'var(--font-body)' }}>
              House Rules
            </div>
            <ul className="mt-3 space-y-2 text-gray-200 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              <li>• Radical honesty. No spiritual bypassing.</li>
              <li>• No saviour‑complex. Offer experience, not prescriptions.</li>
              <li>• Respect boundaries. No voyeurism, no harassment.</li>
              <li>• Art welcome. Mess welcome. Sales okay in #show‑your‑work.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="px-4 md:px-10 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Artwork</h2>
        <p className="text-gray-300 max-w-3xl mb-8" style={{ fontFamily: 'var(--font-body)' }}>
          Visual stories, poetic fragments, distorted beauty.  A gallery of frequencies, ghosts and truths.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-br from-emerald-700/20 via-blue-700/20 to-purple-700/20 flex items-center justify-center hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-gray-400">Artwork {i + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Preview */}
      <section id="blog" className="px-4 md:px-10 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Latest from the Blog</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, idx) => (
            <a
              key={idx}
              href={post.link}
              className="block rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-6 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-xl font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>{post.title}</div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                {post.excerpt}
              </p>
              <div className="inline-flex items-center gap-2 text-emerald-400 font-semibold tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
                Read More
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Eco Section */}
      <section id="ethos" className="px-4 md:px-10 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Earth First — Real Sustainability</h2>
            <p className="text-gray-300 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              Everything here is built on ecological principles.  Organic cotton or recycled fibres, water‑based inks, print‑on‑demand to avoid over‑production, minimal packaging, carbon‑aware shipping and repair over replacement.  Art can be medicine without poisoning the planet.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-200 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              <li>• Organic / recycled textiles only</li>
              <li>• Water‑based, low‑impact inks</li>
              <li>• On‑demand: zero dead stock</li>
              <li>• Re‑use, repair, circularity</li>
              <li>• Plastic‑free packaging</li>
              <li>• Transparent suppliers</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-6">
            <div className="text-xs uppercase tracking-widest text-gray-400 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
              My Oath
            </div>
            <p className="text-gray-100 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              I won’t greenwash.  If a supplier fails the bar, I drop them.  I don’t sell enlightenment.  I sell reality‑tested art, texts and tools that help you stay honest while you heal.  Spiritual gangstar, not spiritual mascot.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="subscribe" className="px-4 md:px-10 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Subscribe — Healing Poetry & Releases</h2>
        <p className="text-gray-300 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
          Monthly rage, art and insight — straight to your soul.  No spam.  No bullshit.  No lightworker fluff.
        </p>
<<form action="mailto:usicueme@gmail.com" className="flex flex-col sm:flex-row gap-4 justify-center">>
          <input
            type="email"
            required
            placeholder="your@email.com"
            className="w-full sm:w-80 rounded-full bg-white/10 border border-white/20 px-5 py-3 outline-none placeholder:text-gray-400"
            style={{ fontFamily: 'var(--font-body)' }}
          />
          <button
            type="submit"
            className="rounded-full px-6 py-3 bg-emerald-500/90 hover:bg-emerald-400 text-black font-bold tracking-wider uppercase"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/15 py-10 text-sm text-gray-400" style={{ fontFamily: 'var(--font-body)' }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-10">
          <div>© {new Date().getFullYear()} UCIQUE — Healing Processes</div>
          <nav className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="https://instagram.com/ucique" className="hover:text-white">Instagram</a>
            <a href="https://tiktok.com/@ucique" className="hover:text-white">TikTok</a>
          </nav>
        </div>
        <p className="mt-4 text-center text-xs text-gray-500">
          Ritual clothing, wearable wounds, sacred sarcasm.  Healing processes in a distorted world.
        </p>
      </footer>
    </div>
  );
};

// Global export for browser
window.UciqueHome = UciqueHome;
