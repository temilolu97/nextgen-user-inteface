const results = [
  {
    id: 1,
    homeTeam: 'Red Dragons FC',
    awayTeam: 'Blue Lions United',
    homeScore: 2,
    awayScore: 1,
    date: '2024-03-15',
    scorers: ['John Smith (RED) 23\'', 'Mike Johnson (RED) 67\'', 'Tom Wilson (BLU) 89\''],
  },
  {
    id: 2,
    homeTeam: 'Green Eagles',
    awayTeam: 'Golden Knights',
    homeScore: 0,
    awayScore: 0,
    date: '2024-03-14',
    scorers: [],
  },
  {
    id: 3,
    homeTeam: 'Silver Wolves',
    awayTeam: 'Black Panthers FC',
    homeScore: 3,
    awayScore: 2,
    date: '2024-03-13',
    scorers: [
      'David Lee (SIL) 12\'',
      'Emma White (BLA) 34\'',
      'David Lee (SIL) 56\'',
      'James Black (BLA) 78\'',
      'David Lee (SIL) 90\'',
    ],
  },
];

export default function ResultsPage() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-indigo-400 sm:text-5xl">Match Results</h2>
          <p className="mt-2 text-lg leading-8 text-gray-400">Latest results from the tournament.</p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl space-y-8 border-t border-indigo-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
          {results.map((result) => (
            <article key={result.id} className="relative flex flex-col gap-8 rounded-xl bg-indigo-900 p-6 shadow-lg lg:flex-row">
              <div className="relative w-full lg:w-64">
                <div className="flex h-full items-center justify-center rounded-xl bg-indigo-800 p-4">
                  <div className="text-center text-white">
                    <div className="flex items-center justify-center space-x-4 text-3xl font-bold">
                      <span>{result.homeScore}</span>
                      <span>-</span>
                      <span>{result.awayScore}</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-300">{result.date}</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold text-white">{result.homeTeam} vs {result.awayTeam}</div>
                <div className="mt-4 border-t border-gray-700 pt-4">
                  <h3 className="text-sm font-medium text-indigo-300">Scorers:</h3>
                  {result.scorers.length > 0 ? (
                    <ul className="mt-2 space-y-1 text-sm text-gray-300">
                      {result.scorers.map((scorer, index) => (
                        <li key={index}>{scorer}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-sm text-gray-400">No goals scored</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
