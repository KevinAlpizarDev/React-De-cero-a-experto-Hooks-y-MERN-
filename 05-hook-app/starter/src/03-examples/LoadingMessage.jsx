export const LoadingMessage = () => {
    return (
      <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-yellow-400 via-red-400 to-blue-500">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-md animate-bounce tracking-widest">
          ¡Cargando Pokémon!
        </h1>
        <div className="mt-8">
          <div className="flex space-x-4">
            <div className="w-8 h-8 bg-red-500 rounded-full animate-ping"></div>
            <div className="w-8 h-8 bg-yellow-500 rounded-full animate-ping"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full animate-ping"></div>
          </div>
        </div>
      </section>
    );
  };
  