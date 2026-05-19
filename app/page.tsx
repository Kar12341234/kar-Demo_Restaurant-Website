import {
  CalendarDays,
  ChefHat,
  ChevronRight,
  Clock,
  Coffee,
  GlassWater,
  MapPin,
  Phone,
  Quote,
  Sparkles,
  Star,
  Users,
  Utensils,
  Wine
} from "lucide-react";
import Image from "next/image";

const navItems = [
  ["Story", "#about"],
  ["Menu", "#menu"],
  ["Gallery", "#gallery"],
  ["Visit", "#contact"]
];

const highlights = [
  ["4.9", "Guest rating"],
  ["15 min", "From Central Station"],
  ["7 days", "Dinner and weekend brunch"]
];

const menuGroups = [
  {
    title: "Appetizers",
    note: "Small plates for sharing",
    icon: Utensils,
    items: [
      {
        name: "Coal-Roasted Carrots",
        price: "$14",
        description: "Whipped feta, pistachio crumble, preserved lemon, garden herbs."
      },
      {
        name: "Burrata & Embered Tomatoes",
        price: "$18",
        description: "Creamy burrata, basil oil, aged balsamic, toasted sourdough."
      },
      {
        name: "Crispy Calamari",
        price: "$17",
        description: "Lemon pepper crust, saffron aioli, pickled chili, parsley."
      }
    ]
  },
  {
    title: "Main Dishes",
    note: "Seasonal house signatures",
    icon: ChefHat,
    items: [
      {
        name: "Dry-Aged Ribeye",
        price: "$52",
        description: "12oz ribeye, black garlic jus, charred broccolini, sea salt fries."
      },
      {
        name: "Miso Glazed Sea Bass",
        price: "$38",
        description: "Pan-seared sea bass, sesame greens, ginger rice, citrus beurre blanc."
      },
      {
        name: "Wild Mushroom Risotto",
        price: "$29",
        description: "Arborio rice, roasted mushrooms, parmesan, thyme, crispy shallots."
      }
    ]
  },
  {
    title: "Desserts",
    note: "Finished at the table",
    icon: Sparkles,
    items: [
      {
        name: "Burnt Basque Cheesecake",
        price: "$13",
        description: "Silky center, caramelized top, berry compote, vanilla cream."
      },
      {
        name: "Dark Chocolate Torte",
        price: "$14",
        description: "Single-origin chocolate, espresso cream, candied orange."
      },
      {
        name: "Honey Panna Cotta",
        price: "$12",
        description: "Vanilla bean custard, roasted stone fruit, almond crumble."
      }
    ]
  },
  {
    title: "Drinks",
    note: "Cocktails, wine, and coffee",
    icon: Wine,
    items: [
      {
        name: "Golden Hour Spritz",
        price: "$15",
        description: "Aperitivo, prosecco, blood orange, rosemary, soda."
      },
      {
        name: "Smoked House Negroni",
        price: "$17",
        description: "Gin, bitter orange, sweet vermouth, smoked citrus peel."
      },
      {
        name: "Single-Origin Espresso",
        price: "$6",
        description: "Rotating local roaster with a rich crema and chocolate finish."
      }
    ]
  }
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1100&q=85",
    alt: "Warm restaurant dining room with pendant lights",
    label: "Dining room"
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
    alt: "Premium steak dinner served on a dark plate",
    label: "Signature mains"
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=85",
    alt: "Elegant restaurant bar with warm lighting",
    label: "Bar seating"
  },
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=85",
    alt: "Chef preparing food in a professional kitchen",
    label: "Open kitchen"
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85",
    alt: "Restaurant table set for dinner service",
    label: "Private tables"
  }
];

const reviews = [
  {
    name: "Amelia R.",
    location: "Downtown regular",
    quote:
      "The room feels intimate without being formal, and every dish arrived beautifully paced. It has become our first choice for date night."
  },
  {
    name: "Marcus Lee",
    location: "Private event host",
    quote:
      "We booked a birthday dinner for ten guests and the team made it effortless. Great service, polished food, and a warm local feel."
  },
  {
    name: "Nora Chen",
    location: "Weekend brunch guest",
    quote:
      "Strong cocktails, thoughtful vegetarian options, and staff who remember the small details. It feels like a neighborhood place done properly."
  }
];

const hours = [
  ["Monday - Thursday", "5:00 PM - 10:00 PM"],
  ["Friday", "5:00 PM - 11:30 PM"],
  ["Saturday", "11:00 AM - 11:30 PM"],
  ["Sunday", "11:00 AM - 9:30 PM"]
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-linen">
      <header className="absolute left-0 right-0 top-0 z-30">
        <nav className="container-pad flex min-h-20 items-center justify-between text-cream">
          <a href="#" className="font-serif text-2xl font-semibold">
            Luma & Ember
          </a>
          <div className="hidden items-center gap-8 text-sm font-semibold lg:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-gold">
                {label}
              </a>
            ))}
          </div>
          <a href="#reservation" className="button-outline hidden sm:inline-flex">
            Book a Table
          </a>
        </nav>
      </header>

      <section className="hero-image relative min-h-[94svh] bg-cover bg-center text-cream">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(201,155,72,0.22),transparent_28%)]" />
        <div className="container-pad relative z-10 flex min-h-[94svh] items-center pb-28 pt-24 sm:pb-32">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-gold">
              Downtown Dining Room & Cocktail Bar
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-8xl">
              Luma & Ember
            </h1>
            <p className="mt-5 max-w-2xl text-2xl font-medium leading-9 text-cream sm:text-3xl">
              Seasonal fire-led cooking, golden cocktails, and a room made for memorable nights.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-cream/75">
              Join us downtown for relaxed service, carefully sourced
              ingredients, and a dining room that feels just right for a first
              date, family dinner, or late drink at the bar.
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
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-cream/10 bg-ink/90 py-5 backdrop-blur">
          <div className="container-pad grid gap-5 text-sm text-cream/75 sm:grid-cols-3">
            {highlights.map(([value, label]) => (
              <div key={label} className="flex items-center gap-4">
                <span className="font-serif text-3xl text-gold">{value}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="grain py-20 sm:py-28">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] w-[88%] overflow-hidden border border-black/10 bg-cream shadow-glow">
              <Image
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1100&q=85"
                alt="Chef plating a refined dish with warm restaurant lighting"
                fill
                sizes="(min-width: 1024px) 42vw, 88vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-6 right-0 max-w-xs border border-gold/30 bg-ink p-6 text-cream shadow-2xl sm:p-7">
              <Wine className="mb-5 text-gold" size={28} />
              <p className="font-serif text-2xl leading-snug">
                Built around fire, seasonal produce, and generous local hospitality.
              </p>
            </div>
          </div>
          <div>
            <p className="section-label">Brand Story</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              A neighborhood restaurant with the finish of a special occasion.
            </h2>
            <p className="mt-6 text-lg leading-8 text-black/70">
              Luma & Ember began as a small supper club above a market street
              coffee shop. Today, the kitchen still cooks with the same close
              relationship to local growers, fishmongers, bakers, and roasters.
            </p>
            <p className="mt-5 leading-8 text-black/60">
              The menu changes with the season, but the promise stays consistent:
              carefully sourced ingredients, comfortable service, and a dining
              room that feels premium without losing its neighborhood warmth.
            </p>
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {[
                ["Local suppliers", "Produce and bread from nearby independent makers."],
                ["Fire-led kitchen", "Charcoal, cast iron, and bright finishing sauces."],
                ["Private dining", "Flexible seating for dates, families, and events."]
              ].map(([title, body]) => (
                <article key={title} className="border-l-2 border-gold bg-white/60 p-5">
                  <h3 className="font-serif text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/60">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-ink py-20 text-cream sm:py-28">
        <div className="container-pad">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label text-gold">Menu</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Seasonal favorites from the hearth, the bar, and the pastry bench.
            </h2>
            <p className="mt-5 text-sm leading-7 text-cream/60 sm:text-base">
              The kitchen builds each dish around fire, acidity, texture, and
              the best produce available from nearby suppliers.
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {menuGroups.map((group) => {
              const Icon = group.icon;

              return (
                <section key={group.title} className="menu-panel">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-cream/40">
                        {group.note}
                      </p>
                      <h3 className="mt-2 font-serif text-3xl text-gold">{group.title}</h3>
                    </div>
                    <span className="grid h-12 w-12 shrink-0 place-items-center border border-gold/30 bg-gold/10 text-gold">
                      <Icon size={22} />
                    </span>
                  </div>
                  <div className="mt-7 space-y-6">
                    {group.items.map((item) => (
                      <article key={item.name} className="border-b border-cream/10 pb-5 last:border-0 last:pb-0">
                        <div className="flex items-start justify-between gap-5">
                          <h4 className="font-serif text-xl leading-7">{item.name}</h4>
                          <span className="shrink-0 font-semibold text-gold">{item.price}</span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-cream/60">{item.description}</p>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section id="reservation" className="bg-linen py-20 sm:py-28">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="section-label">Reservations</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Mobile-friendly booking for lunch, dinner, and private tables.
            </h2>
            <p className="mt-6 leading-8 text-black/60">
              Choose your preferred date and time, then leave any notes for
              birthdays, allergies, quiet corners, or a seat near the open kitchen.
            </p>
            <div className="mt-8 grid gap-4 text-sm text-black/70 sm:grid-cols-2 lg:grid-cols-1">
              <p className="flex items-center gap-3 border border-black/10 bg-white/70 p-4">
                <Clock className="text-copper" size={20} /> Dinner bookings from 5:00 PM
              </p>
              <p className="flex items-center gap-3 border border-black/10 bg-white/70 p-4">
                <Users className="text-copper" size={20} /> Tables for 2 to 12 guests
              </p>
              <p className="flex items-center gap-3 border border-black/10 bg-white/70 p-4">
                <GlassWater className="text-copper" size={20} /> Bar seats available for walk-ins
              </p>
            </div>
          </div>

          <form className="reservation-form grid gap-5 bg-white p-6 shadow-glow sm:grid-cols-2 sm:p-8">
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

      <section id="gallery" className="bg-charcoal py-20 text-cream sm:py-28">
        <div className="container-pad">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <p className="section-label text-gold">Gallery</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
                A warm dining room, a lively bar, and plates worth lingering over.
              </h2>
            </div>
            <a href="#reservation" className="button-secondary max-w-max">
              Book Now <CalendarDays size={18} />
            </a>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <figure
                key={image.alt}
                className={`group relative h-80 overflow-hidden border border-cream/10 ${
                  index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                } ${index === 4 ? "sm:col-span-2" : ""}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={index === 0 || index === 4 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/90 to-transparent p-5 font-serif text-xl">
                  {image.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="grain py-20 sm:py-28">
        <div className="container-pad">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label">Customer Reviews</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Loved by regulars, first dates, and private dinner hosts.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.name} className="review-card bg-white p-7 shadow-sm">
                <Quote className="text-gold" size={30} />
                <div className="mt-5 flex gap-1 text-gold" aria-label="Five star rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={17} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-6 leading-8 text-black/70">&ldquo;{review.quote}&rdquo;</p>
                <div className="mt-7 border-t border-black/10 pt-5">
                  <h3 className="font-serif text-xl">{review.name}</h3>
                  <p className="mt-1 text-sm text-black/60">{review.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-ink py-20 text-cream sm:py-28">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-label text-gold">Visit Us</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Visit us on Market Street for dinner, drinks, and weekend brunch.
            </h2>
            <div className="mt-9 space-y-5 text-cream/75">
              <p className="flex items-start gap-4">
                <MapPin className="mt-1 shrink-0 text-gold" size={22} />
                <span>128 Market Street, Downtown District, New York, NY</span>
              </p>
              <p className="flex items-start gap-4">
                <Phone className="mt-1 shrink-0 text-gold" size={22} />
                <span>+1 (555) 018-2048</span>
              </p>
              <p className="flex items-start gap-4">
                <Coffee className="mt-1 shrink-0 text-gold" size={22} />
                <span>hello@lumaember.example</span>
              </p>
            </div>

            <div className="mt-10 border border-cream/10 bg-white/5 p-6">
              <h3 className="font-serif text-2xl text-gold">Opening Hours</h3>
              <div className="mt-5 space-y-3 text-sm text-cream/70">
                {hours.map(([day, time]) => (
                  <p key={day} className="flex justify-between gap-6 border-b border-cream/10 pb-3 last:border-0 last:pb-0">
                    <span>{day}</span>
                    <span className="text-right text-cream">{time}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="map-panel relative grid min-h-[460px] place-items-center overflow-hidden border border-cream/10 bg-white/5 p-6">
            <div className="absolute inset-0 opacity-60">
              <div className="h-full w-full bg-[linear-gradient(90deg,rgba(247,239,224,0.08)_1px,transparent_1px),linear-gradient(rgba(247,239,224,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />
            </div>
            <div className="relative text-center">
              <span className="mx-auto grid h-16 w-16 place-items-center border border-gold/30 bg-gold/20 text-gold">
                <MapPin size={34} />
              </span>
              <h3 className="mt-5 font-serif text-3xl">Downtown Market Street</h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-cream/60">
                Map preview placeholder
              </p>
              <a href="#reservation" className="button-secondary mt-7">
                Reserve Nearby <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-cream/10 bg-ink py-9 text-cream/60">
        <div className="container-pad flex flex-col justify-between gap-5 text-sm sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-2xl text-cream">Luma & Ember</p>
            <p className="mt-1">Seasonal dining, cocktails, and private tables.</p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-gold">
                {label}
              </a>
            ))}
            <a href="#reservation" className="transition hover:text-gold">
              Reservations
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gold/25 bg-ink/95 p-3 text-cream shadow-2xl backdrop-blur sm:hidden">
        <div className="grid grid-cols-2 gap-3">
          <a href="#menu" className="button-secondary min-h-11 px-3 py-2 text-xs">
            View Menu
          </a>
          <a href="#reservation" className="button-primary min-h-11 px-3 py-2 text-xs">
            Book Table
          </a>
        </div>
      </div>
    </main>
  );
}
