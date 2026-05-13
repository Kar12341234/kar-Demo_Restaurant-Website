import {
  CalendarDays,
  ChevronRight,
  Clock,
  MapPin,
  Menu,
  Phone,
  Star,
  Users,
  Wine
} from "lucide-react";

const menuGroups = [
  {
    title: "Appetizers",
    items: [
      {
        name: "Charred Sourdough & Cultured Butter",
        price: "$12",
        description: "Wood-fired sourdough with smoked sea salt and herb butter."
      },
      {
        name: "Burrata with Embered Tomatoes",
        price: "$18",
        description: "Creamy burrata, basil oil, aged balsamic, toasted pistachio."
      },
      {
        name: "Crispy Calamari",
        price: "$16",
        description: "Lemon pepper crust, saffron aioli, pickled chili."
      }
    ]
  },
  {
    title: "Main Dishes",
    items: [
      {
        name: "Dry-Aged Ribeye",
        price: "$48",
        description: "12oz ribeye, black garlic jus, roasted seasonal vegetables."
      },
      {
        name: "Miso Glazed Sea Bass",
        price: "$36",
        description: "Pan-seared sea bass, sesame greens, citrus beurre blanc."
      },
      {
        name: "Wild Mushroom Risotto",
        price: "$29",
        description: "Arborio rice, truffle, parmesan, thyme, crispy shallots."
      }
    ]
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Burnt Basque Cheesecake",
        price: "$13",
        description: "Silky center, caramelized top, berry compote."
      },
      {
        name: "Dark Chocolate Torte",
        price: "$14",
        description: "Single-origin chocolate, espresso cream, candied orange."
      },
      {
        name: "Vanilla Bean Panna Cotta",
        price: "$12",
        description: "Honey roasted stone fruit and almond crumble."
      }
    ]
  },
  {
    title: "Drinks",
    items: [
      {
        name: "Golden Hour Spritz",
        price: "$15",
        description: "Aperitivo, prosecco, citrus, fresh rosemary."
      },
      {
        name: "House Negroni",
        price: "$16",
        description: "Gin, bitter orange, sweet vermouth, smoked orange peel."
      },
      {
        name: "Single-Origin Espresso",
        price: "$6",
        description: "Rotating local roaster, rich crema, chocolate finish."
      }
    ]
  }
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=85",
    alt: "Warm restaurant dining room with pendant lights"
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
    alt: "Premium plated main dish"
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=85",
    alt: "Elegant restaurant bar counter"
  },
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=85",
    alt: "Chef preparing food in a professional kitchen"
  }
];

const reviews = [
  {
    name: "Amelia R.",
    role: "Local Food Guide",
    quote:
      "A beautifully paced dinner with polished service, warm lighting, and flavors that felt both modern and comforting."
  },
  {
    name: "Marcus L.",
    role: "Private Event Host",
    quote:
      "Our anniversary booking was handled flawlessly. The atmosphere feels intimate, premium, and incredibly welcoming."
  },
  {
    name: "Nora Chen",
    role: "Neighborhood Regular",
    quote:
      "The menu changes enough to stay exciting, but the quality is consistently excellent every single visit."
  }
];

const stats = [
  ["12+", "Seasonal signature dishes"],
  ["4.9", "Average guest rating"],
  ["7 days", "Dinner service weekly"]
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="absolute left-0 right-0 top-0 z-20">
        <nav className="container-pad flex min-h-20 items-center justify-between text-cream">
          <a href="#" className="font-serif text-2xl font-semibold">
            Luma & Ember
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium lg:flex">
            <a href="#about" className="transition hover:text-gold">
              About
            </a>
            <a href="#menu" className="transition hover:text-gold">
              Menu
            </a>
            <a href="#reservation" className="transition hover:text-gold">
              Reservation
            </a>
            <a href="#contact" className="transition hover:text-gold">
              Contact
            </a>
          </div>
          <a href="#reservation" className="hidden border border-cream/50 px-5 py-2 text-sm font-semibold transition hover:border-gold hover:bg-gold hover:text-ink sm:inline-flex">
            Reserve
          </a>
          <button aria-label="Open navigation menu" className="inline-flex h-10 w-10 items-center justify-center border border-cream/40 lg:hidden">
            <Menu size={20} />
          </button>
        </nav>
      </header>

      <section className="hero-image relative min-h-[92vh] bg-cover bg-center text-cream">
        <div className="container-pad flex min-h-[92vh] items-center pb-16 pt-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Modern Restaurant Website Demo
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
              Seasonal dining with a warm, cinematic edge.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-cream/82 sm:text-lg">
              A polished website concept for restaurants, cafes, bars, and local
              hospitality brands that need premium visuals, easy reservations,
              and a menu guests can explore on any device.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#reservation" className="button-primary">
                Book a Table <CalendarDays size={18} />
              </a>
              <a href="#menu" className="button-secondary">
                View Menu <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-ink/82 py-5 backdrop-blur">
          <div className="container-pad grid gap-5 text-sm text-cream/82 sm:grid-cols-3">
            {stats.map(([value, label]) => (
              <div key={label} className="flex items-center gap-4">
                <span className="font-serif text-3xl text-gold">{value}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="grain py-20 sm:py-28">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative min-h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=85"
              alt="Chef plating a refined restaurant dish"
              className="h-[500px] w-[82%] object-cover shadow-glow"
            />
            <div className="absolute bottom-10 right-0 max-w-xs bg-ink p-7 text-cream shadow-2xl">
              <Wine className="mb-5 text-gold" size={28} />
              <p className="font-serif text-2xl leading-snug">
                Crafted for slow dinners, golden lighting, and memorable local nights.
              </p>
            </div>
          </div>
          <div>
            <p className="section-label">About The Restaurant</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              A brand story that feels refined, local, and easy to trust.
            </h2>
            <p className="mt-6 text-lg leading-8 text-black/70">
              Luma & Ember is a fictional modern dining room inspired by
              independent restaurants that combine elevated food with a relaxed
              neighborhood spirit. The website is designed to help guests feel
              the atmosphere before they ever step through the door.
            </p>
            <p className="mt-5 leading-8 text-black/65">
              The layout highlights strong photography, clear calls to action,
              reservation flow, menu browsing, reviews, and contact details so a
              local business can turn visitors into bookings without friction.
            </p>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              <div className="border-l-2 border-gold pl-5">
                <h3 className="font-serif text-2xl">Seasonal kitchen</h3>
                <p className="mt-2 text-sm leading-6 text-black/60">
                  Menu blocks are structured for quick scanning and easy updates.
                </p>
              </div>
              <div className="border-l-2 border-copper pl-5">
                <h3 className="font-serif text-2xl">Local hospitality</h3>
                <p className="mt-2 text-sm leading-6 text-black/60">
                  Clear booking, contact, and opening-hour details for real customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-ink py-20 text-cream sm:py-28">
        <div className="container-pad">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label text-gold">Curated Menu</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
              Dinner favorites with elegant descriptions and clear pricing.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {menuGroups.map((group) => (
              <section key={group.title} className="border border-cream/12 bg-white/[0.04] p-6 sm:p-8">
                <h3 className="font-serif text-3xl text-gold">{group.title}</h3>
                <div className="mt-6 space-y-6">
                  {group.items.map((item) => (
                    <article key={item.name} className="border-b border-cream/10 pb-5 last:border-0 last:pb-0">
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="font-serif text-xl">{item.name}</h4>
                        <span className="shrink-0 font-semibold text-gold">{item.price}</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-cream/65">{item.description}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section id="reservation" className="bg-linen py-20 sm:py-28">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-label">Reservations</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              A booking form UI built for real restaurant conversions.
            </h2>
            <p className="mt-6 leading-8 text-black/65">
              This section can be connected to email, a booking API, Google
              Calendar, or a restaurant reservation platform depending on the
              client&apos;s workflow.
            </p>
            <div className="mt-8 space-y-4 text-sm text-black/70">
              <p className="flex items-center gap-3">
                <Clock className="text-copper" size={20} /> Dinner bookings from 5:00 PM
              </p>
              <p className="flex items-center gap-3">
                <Users className="text-copper" size={20} /> Private tables for 2 to 12 guests
              </p>
            </div>
          </div>

          <form className="grid gap-5 bg-white p-6 shadow-glow sm:grid-cols-2 sm:p-8">
            <label className="text-sm font-semibold">
              Date
              <input type="date" className="field mt-2" />
            </label>
            <label className="text-sm font-semibold">
              Time
              <input type="time" className="field mt-2" />
            </label>
            <label className="text-sm font-semibold">
              Party Size
              <select className="field mt-2" defaultValue="">
                <option value="" disabled>
                  Select guests
                </option>
                <option>2 guests</option>
                <option>4 guests</option>
                <option>6 guests</option>
                <option>8+ guests</option>
              </select>
            </label>
            <label className="text-sm font-semibold">
              Phone
              <input type="tel" placeholder="+1 (555) 123-4567" className="field mt-2" />
            </label>
            <label className="text-sm font-semibold sm:col-span-2">
              Name
              <input type="text" placeholder="Your full name" className="field mt-2" />
            </label>
            <label className="text-sm font-semibold sm:col-span-2">
              Email
              <input type="email" placeholder="you@example.com" className="field mt-2" />
            </label>
            <label className="text-sm font-semibold sm:col-span-2">
              Notes
              <textarea rows={4} placeholder="Occasion, seating preference, dietary needs" className="field mt-2 resize-none" />
            </label>
            <button type="button" className="button-primary sm:col-span-2">
              Request Reservation <ChevronRight size={18} />
            </button>
          </form>
        </div>
      </section>

      <section className="bg-charcoal py-20 text-cream sm:py-28">
        <div className="container-pad">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="section-label text-gold">Gallery</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
                Atmosphere, food, and service in one visual story.
              </h2>
            </div>
            <a href="#reservation" className="button-secondary max-w-max">
              Book Now <CalendarDays size={18} />
            </a>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <figure key={image.alt} className={index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-80 w-full object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="grain py-20 sm:py-28">
        <div className="container-pad">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label">Guest Reviews</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
              Social proof that supports bookings and local trust.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.name} className="bg-white p-7 shadow-sm">
                <div className="flex gap-1 text-gold" aria-label="Five star rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-6 leading-8 text-black/70">&ldquo;{review.quote}&rdquo;</p>
                <div className="mt-7 border-t border-black/10 pt-5">
                  <h3 className="font-serif text-xl">{review.name}</h3>
                  <p className="mt-1 text-sm text-black/55">{review.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-ink py-20 text-cream sm:py-28">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-label text-gold">Contact</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
              Everything guests need before they visit.
            </h2>
            <div className="mt-9 space-y-6 text-cream/75">
              <p className="flex items-start gap-4">
                <MapPin className="mt-1 shrink-0 text-gold" size={22} />
                128 Market Street, Downtown District, New York, NY
              </p>
              <p className="flex items-start gap-4">
                <Phone className="mt-1 shrink-0 text-gold" size={22} />
                +1 (555) 018-2048
              </p>
              <p className="flex items-start gap-4">
                <Clock className="mt-1 shrink-0 text-gold" size={22} />
                Mon-Thu 5:00 PM - 10:00 PM<br />
                Fri-Sun 4:30 PM - 11:30 PM
              </p>
            </div>
          </div>
          <div className="grid min-h-[420px] place-items-center border border-cream/14 bg-white/[0.04] p-6">
            <div className="text-center">
              <MapPin className="mx-auto text-gold" size={42} />
              <h3 className="mt-5 font-serif text-3xl">Google Map Placeholder</h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-cream/60">
                Replace this panel with an embedded Google Map, Mapbox view, or
                clickable location card for the restaurant client.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-cream/10 bg-ink py-8 text-cream/60">
        <div className="container-pad flex flex-col justify-between gap-4 text-sm sm:flex-row">
          <p>Luma & Ember Restaurant Website Demo</p>
          <p>Built with Next.js, TypeScript, Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}
