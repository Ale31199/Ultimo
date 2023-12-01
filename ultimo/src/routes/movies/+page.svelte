<script>
  import axios from 'axios';

  let searchKeyword = '';
  let searchResults = null;

  const searchMovies = async (query) => {
    const options = {
      method: 'GET',
      url: 'https://advanced-movie-search.p.rapidapi.com/search/movie',
      params: {
        query: query,
        page: '1'
      },
      headers: {
        'X-RapidAPI-Key': '4f316b99eemsh1aae6c140486511p1decddjsnf449bafb9866',
        'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      searchResults = response.data.results || [];
    } catch (error) {
      console.error('Errore durante la ricerca di film:', error);
    }
  };
</script>

<main class="text-blue-700 text-base font-semibold">
  <h1>Ricerca Film</h1>
  <input bind:value={searchKeyword} placeholder="Inserisci una parola chiave" />
  <button on:click={() => searchMovies(searchKeyword)}>Cerca Film</button>

  {#if searchResults !== null}
    <div class="flex w-[100%] justify-center">
      {#if searchResults.length > 0}
        <ul  class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {#each searchResults as movie (movie.id)}
            <li>
              <img class="w-[200px] h-[300px] rounded-lg" src="{movie.poster_path}" alt="poster"/>
              <h2 class="text-white text-base font-semibold text-ellipsis whitespace-nowrap overflow-hidden w-[150px] md:w-[150px] lg:w-[200px]">{movie.original_title}</h2>
              <!-- Altre informazioni possono essere aggiunte qui -->
            </li>
          {/each}
        </ul>
      {:else}
        <p>Nessun risultato trovato.</p>
      {/if}
    </div>
  {/if}
</main>
