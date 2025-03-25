import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden  from-indigo-100/30 pt-14">
        <div className="mx-auto max-w-7xl px-6  text-center sm:py-10 lg:px-8">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-200 sm:text-7xl">
            This is <span className="text-indigo-600">NEXTGEN</span>!
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            The future of football starts here – where rising stars battle for glory.
          </p>
          <p className="mt-6 text-lg text-gray-200">
            Six teams, One Ultimate Champion
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/teams"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              View Teams
            </Link>
            <Link
              href="/table"
              className="text-lg font-semibold text-gray-400 transition hover:text-indigo-600"
            >
              League Table <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-6  sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-indigo-600">
            Tournament Features
          </h2>
          <p className="mt-4 text-4xl font-bold tracking-tight text-gray-400 sm:text-5xl">
            Stay updated with every moment of the competition
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid max-w-4xl mx-auto gap-12 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              {/* <feature.icon className="h-14 w-14  text-indigo-600" /> */}
              <h3 className="mt-6 text-xl font-bold text-gray-400">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-100">{feature.description}</p>
              <Link
                href={feature.link}
                className="mt-4 text-indigo-600 font-semibold transition hover:text-indigo-500"
              >
                {feature.linkText} <span aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Feature data
const features = [
  {
    title: "Team Profiles",
    description:
      "Explore each team's squad, stats, and tournament performance.",
    link: "/teams",
    linkText: "Learn more",
    icon: () => <svg className="h-12 w-12 text-center text-indigo-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 16l-4-4 1.41-1.41L8 13.17l6.59-6.59L16 8l-8 8z" /></svg>,
  },
  {
    title: "Match Results",
    description:
      "Get live scores, key match stats, and tournament standings.",
    link: "/results",
    linkText: "View results",
    icon: () => <svg className="h-6 w-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 16l-4-4 1.41-1.41L8 13.17l6.59-6.59L16 8l-8 8z" /></svg>,
  },
  {
    title: "Tournament News",
    description:
      "Breaking news, match previews, and expert analysis.",
    link: "/blog",
    linkText: "Read blog",
    icon: () => <svg className="h-6 w-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 16l-4-4 1.41-1.41L8 13.17l6.59-6.59L16 8l-8 8z" /></svg>,
  },
];
