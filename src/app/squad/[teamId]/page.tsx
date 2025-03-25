import Image from 'next/image';

const teams = [
  {
    id: 1,
    name: 'Red Dragons FC',
    players: [
      { id: 1, name: 'John Smith', position: 'Forward', number: 9, age: 25, image: '/players/player1.jpg' },
      { id: 2, name: 'Mike Johnson', position: 'Midfielder', number: 8, age: 28, image: '/players/player2.jpg' },
      { id: 3, name: 'David Wilson', position: 'Defender', number: 4, age: 26, image: '/players/player3.jpg' },
      { id: 4, name: 'Tom Brown', position: 'Goalkeeper', number: 1, age: 29, image: '/players/player4.jpg' },
      { id: 5, name: 'James Lee', position: 'Forward', number: 11, age: 23, image: '/players/player5.jpg' },
    ],
    officials: [
      { id: 1, name: 'John Smith', role: 'Manager', image: '/officials/official1.jpg' },
      { id: 2, name: 'Sarah Wilson', role: 'Assistant Manager', image: '/officials/official2.jpg' },
      { id: 3, name: 'Mike Brown', role: 'Goalkeeper Coach', image: '/officials/official3.jpg' },
      { id: 4, name: 'David Lee', role: 'Physiotherapist', image: '/officials/official4.jpg' },
    ],
  },
  {
    id: 2,
    name: 'Blue Lions United',
    players: [
      { id: 1, name: 'Tom Wilson', position: 'Forward', number: 10, age: 27, image: '/players/player6.jpg' },
      { id: 2, name: 'James Johnson', position: 'Midfielder', number: 6, age: 24, image: '/players/player7.jpg' },
      { id: 3, name: 'Mike Brown', position: 'Defender', number: 5, age: 28, image: '/players/player8.jpg' },
      { id: 4, name: 'David Lee', position: 'Goalkeeper', number: 1, age: 31, image: '/players/player9.jpg' },
      { id: 5, name: 'John Davis', position: 'Forward', number: 7, age: 25, image: '/players/player10.jpg' },
    ],
    officials: [
      { id: 1, name: 'Sarah Johnson', role: 'Manager', image: '/officials/official5.jpg' },
      { id: 2, name: 'Mike Wilson', role: 'Assistant Manager', image: '/officials/official6.jpg' },
      { id: 3, name: 'David Brown', role: 'Fitness Coach', image: '/officials/official7.jpg' },
      { id: 4, name: 'Emma White', role: 'Physiotherapist', image: '/officials/official8.jpg' },
    ],
  },
];

export default function TeamSquadPage({ params }: { params: { teamId: string } }) {
  const team = teams.find(t => t.id === parseInt(params.teamId));

  if (!team) {
    return (
      <div className="bg-black min-h-screen py-24 sm:py-32">
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">Team not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-indigo-400 sm:text-5xl">{team.name} Squad</h2>
          <p className="mt-2 text-lg leading-8 text-gray-400">Complete list of players and officials.
          </p>
        </div>
        
        {/* Players Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-300 mb-6">Players</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.players.map((player) => (
              <div key={player.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-sm">
                    #{player.number}
                  </div>
                </div>
                <div className="p-4">
                  <h5 className="font-semibold text-gray-900">{player.name}</h5>
                  <p className="text-sm text-gray-500">{player.position}</p>
                  <p className="text-sm text-gray-500">Age: {player.age}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Officials Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-300 mb-6">Officials</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.officials.map((official) => (
              <div key={official.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-32 w-full">
                  <Image
                    src={official.image}
                    alt={official.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h5 className="font-semibold text-gray-900">{official.name}</h5>
                  <p className="text-sm text-gray-500">{official.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 