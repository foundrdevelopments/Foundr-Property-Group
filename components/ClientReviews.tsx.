
const reviews = [
  {
    location: "Sandton Project",
    service: "Protect & Refine",
    quote:
      "The Foundr team successfully transformed our living and entertainment areas while undertaking a challenging damp-proofing and painting project. Our expectations were exceeded by the team's care, attention to detail and commitment to bringing our vision to life. An exceptional project experience from start to finish.",
  },
  {
    location: "East Rand Project",
    service: "Refine",
    quote:
      "Foundr understood our vision of converting our outbuildings and an unused garage into exceptional living spaces for our on-site staff. Their thorough planning, attention to detail and continuous engagement throughout the project allowed us to transform previously underutilised spaces into valuable property assets.",
  },
  {
    location: "Craighall Park",
    service: "Develop",
    quote:
      "Foundr achieved what we once thought impossible, bringing our ambitious ideas and timelines to life through a complete home renovation. The team's 30+ years of experience were evident throughout the project, which not only met but exceeded our expectations, with the keys successfully handed over ahead of the scheduled completion date.",
  },
  {
    location: "Morningside",
    service: "Develop, Refine & Protect",
    quote:
      "Our project encompassed everything from converting unused spaces into a state-of-the-art home gym to upgrading our entertainment area, creating an elegant, stylish and modern living environment. The team also highlighted the importance of preventative maintenance, which led to a comprehensive weatherproofing project incorporating detailed waterproofing and damp-prevention measures throughout our home.",
  },
  {
    location: "Sandton",
    service: "Protect",
    quote:
      "Our commercial property was in need of a new lease on life. Through an in-depth and detailed consultation, Foundr carefully established the scope of work while incorporating our requirements and input. Their comprehensive planning and professional execution brought the project together seamlessly, delivering a result that exceeded our expectations.",
  },
  {
    location: "Kempton Park",
    service: "Refine",
    quote:
      "Our home stands out within one of South Africa's finest golf and lifestyle estates. Foundr's exceptional attention to detail and quality of workmanship have captivated not only us but also those passing by along the golf course.",
  },
  {
    location: "Timbavati Game Reserve",
    service: "Protect",
    quote:
      "Foundr demonstrated a thorough understanding of property protection and long-term preservation. Our camp, situated in the northern region of the Kruger National Park, is exposed to the harsh African climate. The team carefully stripped, maintained, restored and sealed all the thatched roofs, ensuring their continued protection and longevity.",
  },
  {
    location: "Alrode",
    service: "Develop",
    quote:
      "Our company premises required an exciting new space that would inspire and motivate our team. Foundr delivered a modern mezzanine floor overlooking our operational facilities, creating an impressive new vantage point. The carefully executed addition has provided us with an exceptional space to showcase our operations to visiting clients and investors.",
  },
  {
    location: "Bryanston",
    service: "Protect",
    quote:
      "As first-time property owners, we entrusted Foundr with a complete cosmetic makeover of our apartment. The comprehensive painting project was completed well ahead of our anticipated timeline, exceeding our expectations. This allowed us to bring forward our move-in date, adding even more excitement to the experience of settling into our first home.",
  },
  {
    location: "Kensington",
    service: "Protect & Refine",
    quote:
      "Preserving the heritage of one of Johannesburg's leading girls' schools is of the utmost importance to us. We required a detail-oriented contractor who understood the significance of maintaining and protecting our historic campus for future generations. Foundr delivered exceptional workmanship, ensuring that our campus remains beautifully maintained while preserving the character and heritage that make it so special.",
  },
];

const featuredLocations = [
  "Craighall Park",
  "Sandton Project",
  "Morningside",
];

const featuredReviews = featuredLocations.map(
  (location) => reviews.find(
    (review) => review.location === location
  )!
);

const additionalReviews = reviews.filter(
  (review) => !featuredLocations.includes(review.location)
);

type Review = (typeof reviews)[number];

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex h-full flex-col border border-[#B39A78]/30 bg-transparent p-7 md:p-9">
      <div className="mb-7 h-px w-10 bg-[#B39A78]" />

      <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] opacity-65">
        {review.service}
      </p>

      <h3 className="mb-6 text-xl font-medium">
        {review.location}
      </h3>

      <blockquote className="flex-1 text-[15px] leading-8 opacity-85">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
    </article>
  );
}

export default function ClientReviews() {
  return (
    <section
      id="client-experiences"
      aria-labelledby="client-experiences-heading"
      className="w-full bg-transparent px-5 py-20 text-inherit md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-14 text-center">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] opacity-60">
            Foundr Property Group
          </p>

          <h2
            id="client-experiences-heading"
            className="text-3xl font-medium tracking-tight md:text-4xl"
          >
            Client Experiences
          </h2>

          <div className="mx-auto my-6 h-px w-14 bg-[#B39A78]" />

          <p className="mx-auto max-w-2xl text-sm leading-7 opacity-75 md:text-base">
            A reflection of our commitment to quality,
            craftsmanship and lasting relationships.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {featuredReviews.map((review) => (
            <ReviewCard
              key={`${review.location}-${review.service}`}
              review={review}
            />
          ))}
        </div>

        <details className="group mt-10">
          <summary className="mx-auto flex w-fit cursor-pointer list-none items-center justify-center gap-3 border border-[#B39A78] px-8 py-4 text-sm font-medium tracking-wide transition-opacity hover:opacity-70 [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">
              View All Client Experiences
            </span>
            <span className="hidden group-open:inline">
              Show Fewer Experiences
            </span>
            <span
              aria-hidden="true"
              className="text-[#B39A78]"
            >
              +
            </span>
          </summary>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {additionalReviews.map((review) => (
              <ReviewCard
                key={`${review.location}-${review.service}`}
                review={review}
              />
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
