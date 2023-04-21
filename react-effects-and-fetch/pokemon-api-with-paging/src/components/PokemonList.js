import { useEffect, useState } from "react";

const initialUrl = "https://pokeapi.co/api/v2/pokemon?offset=0";

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export default function PokemonList() {
  const [currentUrl, setCurrentUrl] = useState(initialUrl);
  const [pokemon, setPokemon] = useState([]);
  const [response, setResponse] = useState();
  const [fetchInProgress, setFetchInProgress] = useState();

  useEffect(() => {
    async function loadPokemon() {
      try {
        setFetchInProgress(true);
        await wait(1500);
        const response = await fetch(currentUrl);
        const data = await response.json();
        // console.log(data);
        setPokemon(data.results);
        setResponse(data);
      } catch (error) {
        console.log(error);
      } finally {
        setFetchInProgress(false);
      }
    }

    loadPokemon();
  }, [currentUrl]);

  function handlePreviousPage() {
    const url = response.previous;
    if (url) setCurrentUrl(url);
  }

  function handleNextPage() {
    const url = response.next;
    if (url) setCurrentUrl(url);
  }

  return (
    <main>
      {(!response || fetchInProgress) && <div>Loading...</div>}
      <button
        type="button"
        onClick={handlePreviousPage}
        disabled={!response?.previous || fetchInProgress}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={handleNextPage}
        disabled={!response?.next || fetchInProgress}
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
