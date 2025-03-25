import Image from 'next/image';
import Link from 'next/link';

const teams = [
  {
    id: 1,
    name: 'Red Dragons FC',
    logo: '/teams/red-dragons.png',
    description: 'A powerhouse team known for their attacking style of play.',
    stats:{
      played:0,
      wins:0,
      draws:0,
      losses:0
    }
  },
  {
    id: 2,
    name: 'Blue Lions United',
    logo: '/teams/blue-lions.png',
    description: 'Defensive masters with a strong midfield presence.',
    stats:{
      played:0,
      wins:0,
      draws:0,
      losses:0
    }
  },
  {
    id: 3,
    name: "Green Eagles",
    location: "Liverpool",
    founded: "1901",
    manager: "Mike Wilson",
    stadium: "Eagle's Nest",
    stats:{
      played:0,
      wins:0,
      draws:0,
      losses:0
    }
  },
  {
    id: 4,
    name: "Golden Knights",
    location: "Birmingham",
    founded: "1899",
    manager: "David Brown",
    stadium: "Knight's Castle",
    stats:{
      played:0,
      wins:0,
      draws:0,
      losses:0
    }
  },
  {
    id: 5,
    name: "Silver Wolves",
    location: "Leeds",
    founded: "1908",
    manager: "Emma Davis",
    stadium: "Wolf Den Stadium",
    stats:{
      played:0,
      wins:0,
      draws:0,
      losses:0
    }
  },
  {
    id: 6,
    name: "Black Panthers FC",
    location: "Newcastle",
    founded: "1894",
    manager: "James Wilson",
    stadium: "Panther Park",
    stats:{
      played:0,
      wins:0,
      draws:0,
      losses:0
    }
  },
];

export default function TeamsPage() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-indigo-400 sm:text-5xl">Our Teams</h2>
          <p className="mt-2 text-lg leading-8 text-gray-400">Get to know the teams participating in this edition of the tournament.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {teams.map((team) => (
            <Link
              href={`/squad/${team.id}`}
              key={team.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className="relative h-16 w-16 flex-shrink-0">
                  {/* <Image
                    src={team.logo}
                    alt={team.name}
                    fill
                    className="object-contain"
                  /> */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 group-hover:text-indigo-600 transition-colors duration-200">
                    {team.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-300">{team.description}</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-4 gap-4 border-t border-gray-200 pt-4">
              <div>
                  <p className="text-sm font-medium text-gray-400">Played</p>
                  <p className="mt-1 text-lg font-semibold text-gray-300">{team.stats.wins}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400">Wins</p>
                  <p className="mt-1 text-lg font-semibold text-gray-300">{team.stats.wins}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400">Losses</p>
                  <p className="mt-1 text-lg font-semibold text-gray-300">{team.stats.losses}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400">Draws</p>
                  <p className="mt-1 text-lg font-semibold text-gray-300">{team.stats.draws}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
