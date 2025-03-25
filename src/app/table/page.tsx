const standings = [
  {
    position: 1,
    team: 'Red Dragons FC',
    played: 10,
    won: 7,
    drawn: 2,
    lost: 1,
    goalsFor: 22,
    goalsAgainst: 10,
    points: 23,
  },
  {
    position: 2,
    team: 'Silver Wolves',
    played: 10,
    won: 7,
    drawn: 1,
    lost: 2,
    goalsFor: 20,
    goalsAgainst: 12,
    points: 22,
  },
  {
    position: 3,
    team: 'Blue Lions United',
    played: 10,
    won: 6,
    drawn: 2,
    lost: 2,
    goalsFor: 18,
    goalsAgainst: 11,
    points: 20,
  },
  {
    position: 4,
    team: 'Green Eagles',
    played: 10,
    won: 5,
    drawn: 3,
    lost: 2,
    goalsFor: 15,
    goalsAgainst: 10,
    points: 18,
  },
  {
    position: 5,
    team: 'Golden Knights',
    played: 10,
    won: 3,
    drawn: 2,
    lost: 5,
    goalsFor: 12,
    goalsAgainst: 16,
    points: 11,
  },
  {
    position: 6,
    team: 'Black Panthers FC',
    played: 10,
    won: 0,
    drawn: 2,
    lost: 8,
    goalsFor: 8,
    goalsAgainst: 26,
    points: 2,
  },
];

export default function TablePage() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-indigo-400 sm:text-5xl">League Table</h2>
          <p className="mt-2 text-lg leading-8 text-gray-400">Current standings</p>
        </div>
        <div className="mt-10 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-100 sm:pl-0">Pos</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100">Team</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100">P</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100">W</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100">D</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100">L</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100">GF</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100">GA</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100">GD</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-100">Pts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {standings.map((team) => (
                    <tr key={team.position} className={team.position <= 3 ? 'bg-green-50' : 'bg-white'}>
                      <td className="whitespace-nowrap py-4 px-2 pr-3 text-center text-sm font-medium text-gray-900 sm:pl-0">
                        {team.position}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4  text-sm text-gray-900">{team.team}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{team.played}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{team.won}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{team.drawn}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{team.lost}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{team.goalsFor}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{team.goalsAgainst}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {team.goalsFor - team.goalsAgainst}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-900">{team.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 