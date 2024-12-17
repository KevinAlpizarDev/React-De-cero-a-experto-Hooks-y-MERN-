export const PokemonCard = ({ id, name, sprites = [] }) => {
    return (
      <section className="p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-xl font-bold text-gray-800">Pokémon Card</h1>
        <br />
        <h2 className="text-lg text-gray-600">
          {id} - Pokémon: <span className="capitalize">{name}</span>
        </h2>
        <br />
        <div className="flex space-x-4">
        {
            sprites.map(sprite => (
             <div key={sprite}  className="border p-5 rounded-3xl">
                   <img src={sprite} alt="" />
             </div>
            ))
        }
        </div>
      </section>
    );
  };
  


