<script>
  import axios from 'axios';

  let searchKeyword = '';
  let searchResults = null;
  let discoverMovies = null;
  let showSearch = false;

  const searchMovies = async (query) => {
    const apiKey = '758d1e2e3df3b485c0c62b322b0e9128';  // Sostituisci con la tua chiave API
    const searchEndpoint = 'https://api.themoviedb.org/3/search/movie';

    try {
      const response = await axios.get(searchEndpoint, {
        params: {
          api_key: apiKey,
          query: query,
        },
      });

      console.log(response.data);
      searchResults = response.data.results || [];
    } catch (error) {
      console.error('Errore durante la ricerca di film:', error);
    }
  };

  const showTrendy= async ()=>{
    const apiKey = '758d1e2e3df3b485c0c62b322b0e9128'; 
    const discoverEndpoint = 'https://api.themoviedb.org/3/discover/movie';
    try {
      const discoverResponse = await axios.get(discoverEndpoint, {
        params: {
          api_key: apiKey,
          include_adult: false,
          include_video: false,
          language: 'en-US',
          page: 2,
          sort_by: 'popularity.desc',
        },
      });

      console.log(discoverResponse.data);
      discoverMovies = discoverResponse.data.results || [];
    } catch (error) {
      console.error('Errore durante la ricerca di film popolari:', error);
    }
  }

  showTrendy();

 const Enter=(event)=>{
  if (event.key === 'Enter'){
    searchMovies(searchKeyword)
  }
 }

</script>

<main class="text-black text-base font-semibold">
  <div class=" flex w-[100%] justify-center relative top-[50px]">
  <input bind:value={searchKeyword} on:keyup={Enter} placeholder="Cerca Film o Serie TV..." class="w-[800px] p-3 rounded-xl mr-3 outline-none" />
  <button class="p-3 rounded-xl bg-teal-400" on:click={() => searchMovies(searchKeyword)}>Cerca</button>
</div>

  {#if discoverMovies !== null}
  <div class="flex w-[100%] justify-center relative top-[200px]">
    <p class="text-white font-bold absolute top-[-50px] left-8 text-3xl">In Tendenza</p>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-rows-3 lg:grid-cols-7 p-4 overflow-x-auto gap-6" >
      {#each discoverMovies as discmovie (discmovie.id)}
        <div class="bg-neutral-800 rounded-xl p-2 cursor-pointer hover:scale-105 transi">
          <img class="w-[200px] h-[300px] rounded-lg hover:opacity-70" src={`https://image.tmdb.org/t/p/w500${discmovie.poster_path}`} alt="poster"/>
          <h2 class="text-white text-base font-semibold text-ellipsis whitespace-nowrap overflow-hidden w-[150px] md:w-[150px] lg:w-[200px]">{discmovie.original_title}</h2>
        </div>
        {/each}
      </div>
    </div>
    {/if}

  {#if searchResults !== null}
    <div class="flex w-[100%] justify-center ">
      {#if searchResults.length > 0}
        <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 absolute top-[0px]">
          {#each searchResults as movie (movie.id)}
          <div class="bg-neutral-800 rounded-xl p-2 cursor-pointer hover:scale-105 transi">
              <img class="w-[200px] h-[300px] rounded-lg" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster"/>
              <h2 class="text-white text-base font-semibold text-ellipsis whitespace-nowrap overflow-hidden w-[150px] md:w-[150px] lg:w-[200px]">{movie.original_title}</h2>
              <!-- Altre informazioni possono essere aggiunte qui -->
            </div>
          {/each}
        </ul>
      {:else}
        <p>Nessun risultato trovato.</p>
      {/if}
    </div>
  {/if}


  </main>
  

  <style>
    .transi{
      transition: 1s;
    }
  </style>