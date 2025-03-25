const posts = [
  {
    id: 1,
    title: 'Red Dragons FC Maintain Top Spot After Thrilling Victory',
    description: 'A last-minute goal from John Smith secures another crucial win for the league leaders.',
    date: '2024-03-15',
    author: 'Mike Thompson',
    readTime: '3 min read',
    category: 'Match Report',
  },
  {
    id: 2,
    title: 'Silver Wolves Sign Star Striker David Lee',
    description: 'The transfer window sensation as Silver Wolves strengthen their attack with the signing of prolific scorer David Lee.',
    date: '2024-03-14',
    author: 'Sarah Wilson',
    readTime: '4 min read',
    category: 'Transfer News',
  },
  {
    id: 3,
    title: 'Tournament MVP Race: Top 5 Contenders',
    description: 'Analysis of the leading candidates for this season\'s Most Valuable Player award.',
    date: '2024-03-13',
    author: 'James Anderson',
    readTime: '5 min read',
    category: 'Analysis',
  },
  {
    id: 4,
    title: 'Blue Lions United Manager Interview',
    description: 'Exclusive interview with Sarah Johnson about the team\'s strategy for the remainder of the season.',
    date: '2024-03-12',
    author: 'Tom Wilson',
    readTime: '6 min read',
    category: 'Interview',
  },
];
export default function BlogPage() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Tournament News</h2>
          <p className="mt-2 text-lg leading-8 text-gray-300">
            Latest news, interviews, and analysis from the tournament.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-gray-400">
                  {post.date}
                </time>
                <span className="relative z-10 rounded-full bg-indigo-600 px-3 py-1.5 font-medium text-white hover:bg-indigo-500">
                  {post.category}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-indigo-400 group-hover:text-indigo-300">
                  <span className="absolute inset-0" />
                  {post.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-white">
                    <span className="absolute inset-0" />
                    {post.author}
                  </p>
                  <p className="text-gray-400">{post.readTime}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
