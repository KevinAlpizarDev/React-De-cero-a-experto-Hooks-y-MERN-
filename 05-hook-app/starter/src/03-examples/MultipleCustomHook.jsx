import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";



export const MultipleCustomHook = () => {
  const { counter, increment, decrement } = useCounter(1);  // Empieza en 1 para que sea Bulbasaur
  const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <div>
      <div className="flex justify-around mb-6">
        <button
          className="px-6 py-3 bg-yellow-300 text-white font-bold rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-300 flex items-center space-x-2"
        //   onClick={(count) => count >= 1 ? decrement() : 0 }  // Cambié esta línea para llamar la función correctamente
        onClick={ () => counter > 1 ? decrement() : null}  // Cambié esta línea para llamar la función correctamente
        >
          <span className="text-lg">⬅️</span>
          <span>Previamente</span>
        </button>

        <button
          className="px-6 py-3 bg-blue-300 text-white font-bold rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 flex items-center space-x-2"
          onClick={() => increment()}  // Asegúrate de que la función increment se llame correctamente
        >
          <span>Siguiente</span>
          <span className="text-lg">➡️</span>
        </button>
      </div>

      {isLoading ? 
(
<LoadingMessage/>
)
       : 
     (
        <div>

        < PokemonCard
         id={counter}
          name={data.name}
          sprites={[
data.sprites.front_default,
data.sprites.front_shiny,
data.sprites.back_default,
data.sprites.back_shiny,
          ]}
          />
        
                  {/* <h1 className="text-4xl font-bold">{data?.name}</h1> */}
                  {/* <img src={data?.sprites?.front_default} alt={data?.name} className="mt-4" /> */}
                </div>
     )
      }
    </div>
  );
};
