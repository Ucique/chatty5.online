function UciqueHome() {
  const products = [
    { name: "Signal: 3·6·9 Spiral Tee", subtitle: "Eco / organic cotton", price: "€29" },
    { name: "Ritual Scar Hoodie", subtitle: "Organic / recycled", price: "€59" },
    { name: "Ghost‑Field Print", subtitle: "Museum grade print", price: "€39" },
    { name: "Silver‑8 Ancestral Cap", subtitle: "Recycled cotton", price: "€24" },
    { name: "Fifth Age Poster", subtitle: "Recycled paper", price: "€19" },
    { name: "Frequency Journal", subtitle: "Recycled paper", price: "€12" },
  ];

  const blogPosts = [
    { title: "How to Heal Without Becoming a Liar", excerpt: "Healing isn’t pretty. It’s messy, radical honesty and art that bites back.", link: "#" },
    { title: "Gifted & Gaslit", excerpt: "For the geniuses and misfits told to shrink — here’s a manifesto.", link: "#" },
    { title: "Insane Stepmothers", excerpt: "A poetic grotesque of masks, poison and ritual flowers — and how to reclaim it.", link: "#" },
  ];

  // Forum state
  const [discussions, setDiscussions] = React.useState([]);
  React.useEffect(() => {
    fetch('https://api.github.com/repos/Ucique/chatty5.online/discussions')
      .then(res => res.json())
      .then(data => {
        // sort by most recent
        const sorted = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setDiscussions(sorted);
      })
      .catch(() => setDiscussions([]));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur bg-white/5 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl tracking-widest font-bold">UCIQUE</div>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide text-white/90">
            <a className="hover:text-emerald-400" href="#store">Shop</a>
            <a className="hover:text-emerald-400" href="#gallery">Gallery</a>
            <a className="hover:text-emerald-400" href="#blog">Blog</a>
            <a className="hover:text-emerald-400" href="#ethos">Eco</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-black to-gray-950" />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top_left,_rgba(16,185,129,0.20),_transparent),radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.15),_transparent)]" style={{ backgroundBlendMode: 'screen' }} />
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-36 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-widest">Dark Healing Art & Apparel</h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg md:text-xl text-white/80">
            for Misfits and Survivors — Ritual clothing, sacred sarcasm, and art that honors scars.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#process" className="px-8 py-3 bg-emerald-500 rounded-full text-black font-semibold uppercase tracking-wide">Enter the Process</a>
            <a href="#store" className="px-8 py-3 border border-emerald-500 rounded-full text-emerald-400 font-semibold uppercase tracking-wide">Visit the Store</a>
          </div>
        </div>
      </section>

      {/* Three glass cards */}
      <section className="max-w-6xl mx-auto px-6 -mt-20 mb-24 grid md:grid-cols-3 gap-6">
        <Card title="Art & Apparel" tag="Ritual clothing" linkText="Visit the Store" href="#store">
          Ritual clothing, wearable wounds, sacred sarcasm. Shop prints, clothing and objects made to vibrate.
        </Card>
        <Card title="Discussion" tag="Unpolished forum" linkText="Join the Forum" href="#forum">
          A forum for the burned and brilliant. Talk trauma, intelligence, healing and madness.
        </Card>
        <Card title="Artwork" tag="Visual stories" linkText="Enter Gallery" href="#gallery">
          Distorted beauty in ghost fields and spirals. A gallery of frequencies, truths and poetic fragments.
        </Card>
      </section>

      {/* Store Preview */}
      <section id="store" className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Pieces</h2>
          <a href="#" className="text-sm uppercase tracking-widest text-emerald-400 hover:text-emerald-300">All Products →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden border border-white/15 bg-white/10 backdrop-blur-md p-4 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-emerald-700/30 via-indigo-700/30 to-purple-700/30 flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="h-full w-full opacity-80">
                  <defs>
                    <linearGradient id={`grad-${idx}`} x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="rgba(16,185,129,0.6)" />
                      <stop offset="100%" stopColor="rgba(59,130,246,0.5)" />
                    </linearGradient>
                  </defs>
                  <path d="M100 20c-35 0-64 29-64 64s29 64 64 64 64-29 64-64-29-64-64-64zm0 18a46 46 0 100 92 46 46 0 000-92z" fill={`url(#grad-${idx})`} />
                  <circle cx="100" cy="100" r="6" fill="white" />
                </svg>
              </div>
              <div className="pt-4">
                <div className="text-lg font-semibold">{item.name}</div>
                <div className="text-gray-400 text-sm">{item.subtitle}</div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-gray-200 font-medium">{item.price}</span>
                  <button className="px-3 py-2 rounded-full bg-emerald-500/90 hover:bg-emerald-400 text-black text-sm font-bold uppercase tracking-wider">Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Forum Preview */}
      <section id="forum" className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">Forum</h2>
          <a href="forum.html" className="text-sm uppercase tracking-widest text-emerald-400 hover:text-emerald-300">View All →</a>
        </div>
        {discussions.length > 0 ? (
          <div className="grid sm:grid-cols-1 gap-6">
            {discussions.slice(0, 5).map((disc) => (
              <div key={disc.node_id} className="border border-white/15 rounded-2xl p-4 bg-white/5 hover:bg-white/10 transition">
                <h3 className="text-xl font-semibold mb-2">
                  <a href={`forum.html?node=${encodeURIComponent(disc.node_id)}`} className="text-emerald-400 hover:underline">
                    {disc.title}
                  </a>
                </h3>
                <p className="text-gray-400 text-sm">{disc.body ? disc.body.substring(0, 180) + '…' : ''}</p>
                <p className="text-gray-600 text-xs mt-1">{disc.comments} comment{disc.comments === 1 ? '' : 's'}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No discussions yet.</p>
        )}
      </section>

      {/* Blog */}
      <section id="blog" className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">Latest from the Blog</h2>
          <a href="#" className="text-sm uppercase tracking-widest text-emerald-400 hover:text-emerald-300">All Posts →</a>
        </div>
        <div className="grid sm:grid-cols-1 gap-6">
          {blogPosts.map((post, idx) => (
            <div key={idx} className="border border-white/15 rounded-2xl p-4 bg-white/5 hover:bg-white/10 transition">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{post.excerpt}</p>
              <a href={post.link} className="text-emerald-400 hover:underline text-sm uppercase">Read More</a>
            </div>
          ))}
        </div>
      </section>

      {/* Eco */}
      <section id="ethos" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Earth First — Real Sustainability</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Everything here is built on ecological principles. Organic cotton or recycled fibres, water‑based inks, print‑on‑demand to avoid over‑production, minimal packaging, carbon‑aware shipping and repair over replacement. Art can be medicine without poisoning the planet.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-200 text-sm">
              <li>• Organic / recycled textiles only</li>
              <li>• Water‑based, low‑impact inks</li>
              <li>• On‑demand: zero dead stock</li>
              <li>• Re‑use, repair, circularity</li>
              <li>• Plastic‑free packaging</li>
              <li>• Transparent suppliers</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-6">
            <div className="text-xs uppercase tracking-widest text-gray-400 mb-2">My Oath</div>
            <p className="text-gray-100 text-sm">
              I won’t greenwash. If a supplier fails the bar, I drop them. I don’t sell enlightenment. I sell reality‑tested art, texts and tools that help you stay honest while you heal. Spiritual gangstar, not spiritual mascot.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="subscribe" className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe — Healing Poetry & Releases</h2>
        <p className="text-white/80 mb-6">Monthly rage, art and insight — straight to your soul. No spam. No bullshit. No lightworker fluff.</p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => { e.preventDefault(); window.location.href = 'mailto:uciqueme@gmail.com?subject=Subscribe'; }}>
          <input type="email" placeholder="your@email.com" className="w-full sm:w-80 rounded-full bg-white/10 border border-white/20 px-5 py-3 outline-none placeholder:text-gray-400" />
          <button type="submit" className="rounded-full px-6 py-3 bg-emerald-500/90 hover:bg-emerald-400 text-black font-bold tracking-wider uppercase">Subscribe</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/15 py-10 text-sm text-gray-400">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} UCIQUE — Healing Processes</div>
          <nav className="flex flex-wrap gap-6">
            <a href="mailto:uciqueme@gmail.com" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="https://www.facebook.com/profile.php?id=61572832235659" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
            <a href="https://www.instagram.com/uciqueme/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
            <a href="https://www.tiktok.com/@ucique_" target="_blank" rel="noopener noreferrer" className="hover:text-white">TikTok</a>
          </nav>
        </div>
        <p className="mt-4 text-center text-xs text-gray-500">Ritual clothing, wearable wounds, sacred sarcasm. Healing processes in a distorted world.</p>
      </footer>
    </div>
  );
}

function Card({ title, tag, children, linkText, href }) {
  return (
    <div className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:-translate-y-2 transition-all duration-300">
      <div className="text-xs uppercase tracking-widest text-emerald-400 mb-2">{tag}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{children}</p>
      <a href={href} className="inline-flex items-center gap-2 text-emerald-400 hover:underline uppercase text-sm font-semibold">
        {linkText}
      </a>
    </div>
  );
}

// Expose components on window for mounting in index.html
window.UciqueHome = UciqueHome;
window.Card = Card;