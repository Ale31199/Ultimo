<script>
  import axios from 'axios';
  import homee from './imm/home.png';
  import moviecode from './imm/moviecode.png';
  import star from './imm/star.png';
  import arrow from './imm/arrow.png';
  // @ts-ignore
  import ita from '/src/routes/textITA.json';
  // @ts-ignore
  import eng from '/src/routes/textENG.json';
  
  import { lingua } from './lingua.js';
  import {onMount} from 'svelte';
 

  let ital = 'Italiani'
  let engl = 'English'
  let salvaSele;

  onMount(()=>{
    if (typeof window !== 'undefined') {
      const salvaLingua = localStorage.getItem('lingua');
      const salvaital = localStorage.getItem('ital');
      const salvaengl = localStorage.getItem('engl');
       salvaSele = localStorage.getItem('salvaSele');
      if (salvaLingua) {
        lingua.set(salvaLingua === 'ita' ? ita : eng)
      }
      if (salvaital) {
        ital = JSON.parse(salvaital)
      }
      if (salvaengl) {
        engl = JSON.parse(salvaengl)
      }
     
    }
  });

  const TraduciPagina = (linguatraduci) => {
    switch (linguatraduci) {
      case 'ita':
        lingua.set(ita);
        ital = 'Italiani'
        localStorage.setItem('ital', JSON.stringify(ital))
        localStorage.setItem('lingua', 'ita');
        localStorage.setItem('salvaSele', 'ita');
        break;
      case 'eng':
        lingua.set(eng);
        engl = 'English'
        localStorage.setItem('engl', JSON.stringify(engl))
        localStorage.setItem('lingua', 'eng');
        localStorage.setItem('salvaSele', 'eng');
        break;
    }
  };
 

 let home= false
 let skills = false
 let progetti = true

  // @ts-ignore
  const selezionaPag=(pagina)=>{
    switch (pagina) {
      case 'home':
        home = true
        skills =false
        progetti=false
        break;

        case 'skills':
          skills = true
          home = false
          progetti = false
          break;

          case 'progetti':
            progetti = true
            home = false
            skills= false
            break;
    
      default: home= false;
              skills = false;
              progetti = false
        break;
    }
  }

  



  let searchKeyword = '';
  let limit = 14
  let searchResults = [];
  let discoverSoon = []
  let discoverMovies = [];
  let discoverTv = [];
  let discoverAll = []
  let showwSer = false;
  let showwAll = false;
  let showwAll2 = false
  let showwAll3 = false
  let showwMostra = true
  let showwMostra2 = true
  let showwMostra3 = true
  let showwMostraH = false

  const mostra=()=>{
    if (showwSer === true){
        showwSer = true;
      showwAll = true
      showwAll2 = true
      showwAll3 = true
      showwMostra = false
      showwMostra2 = false
      showwMostra3 = false
      showwMostraH = true
    }
  }

  $: unmostra=()=>{
      showwSer = false;
      showwAll = false
      showwAll2 = false
      showwAll3 = false
      showwMostra = true
      showwMostra2 = true
      showwMostra3 = true
      showwMostraH = false
      searchKeyword = ''
      page = 1
      limit = 14
      isLoading = false;
      moreRes = true;
      window.removeEventListener('scroll', caricaItems);
      window.removeEventListener('scroll', caricaItems1);
      window.removeEventListener('scroll', caricaItems2);
      window.removeEventListener('scroll', caricaItems3);
  }
  
  

  let page = 1;
  const itempage= 14
  let isLoading = false
  let moreRes = true

 
  const moreItem = async () => {
  if (isLoading || !moreRes) return;
  isLoading = true;
  setTimeout(async () => {
    try {
     await searchMovies(searchKeyword)
     showwSer = true
    } finally {
      isLoading = false
    }
  }, 50);
};




const mostraTutto = async () => {
  if (isLoading || !moreRes) return;
  isLoading = true;
  setTimeout(async () => {
    try { 
      await showAll();
    
      limit = 200
      showwAll = false
      showwAll2 = true;
      showwAll3 = true;
      showwMostraH = false
      showwMostra = false
      showwMostra2 = false
      showwMostra3 = false
    } finally {
      isLoading = false;
    }
    
    if (limit === 200){
    window.addEventListener('scroll', caricaItems1);
   }
  }, 50);
};

const mostraTutto2 = async () => {
  if (isLoading || !moreRes) return;
  isLoading = true;
  setTimeout(async () => {
    try { 
      await showTrendy();
      limit = 200
      showwAll = true
      showwAll2 = false;
      showwAll3 = true;
      showwMostraH = false
      showwMostra = false
      showwMostra2 = false
      showwMostra3 = false
    } finally {
      isLoading = false;
    }
    
    if (limit === 200){
    window.addEventListener('scroll', caricaItems2);
   }
  }, 50);
};

const mostraTutto3 = async () => {
  if (isLoading || !moreRes) return;
  isLoading = true;
  setTimeout(async () => {
    try { 
      await showTv();
      limit = 200
      showwAll = true
      showwAll2 = true;
      showwAll3 = false;
      showwMostraH = false
      showwMostra = false
      showwMostra2 = false
      showwMostra3 = false
    } finally {
      isLoading = false;
    }
    
    if (limit === 200){
    window.addEventListener('scroll', caricaItems3);
   }
  }, 50);
};

const caricaItems = () => {
    const resultBox = document.getElementById('searchmore');
    if (!resultBox || isLoading || !moreRes || !showwSer ) return;
    if (window.innerHeight + window.scrollY >= resultBox.offsetHeight + resultBox.offsetTop) {
      moreItem();
    }
  }

  const caricaItems1 = () => {
    const resultAll = document.getElementById('allmore');
    if ( !resultAll || isLoading || !moreRes || showwAll) return;
    if (window.innerHeight + window.scrollY >= resultAll.offsetHeight + resultAll.offsetTop) {
      mostraTutto();
    }
  }

  const caricaItems2 = () => {
    const resultMovie = document.getElementById('allmovie');
    if (!resultMovie || isLoading || !moreRes || showwAll2) return;
    if (window.innerHeight + window.scrollY >= resultMovie.offsetHeight + resultMovie.offsetTop) {
      mostraTutto2();
    }
  }

  const caricaItems3 = () => {
    const resultTv = document.getElementById('alltv');
    if (!resultTv || isLoading || !moreRes || showwAll3) return;
    if (window.innerHeight + window.scrollY >= resultTv.offsetHeight + resultTv.offsetTop) {
      mostraTutto3();
    }
  }

  



   let bodyLimit;

  const cambiaRicerca=(Nuova)=>{
    searchKeyword = Nuova
    page = 1
    searchMovies(Nuova)
    showwSer = true
    mostra()
    
    if (showwSer === true){
    window.addEventListener('scroll', caricaItems);
    } else{
    window.removeEventListener('scroll', caricaItems);
    page = 1
    }
  }


  const searchMovies = async (query) => {
    const apiKey = '758d1e2e3df3b485c0c62b322b0e9128';  
    const searchEndpoint = 'https://api.themoviedb.org/3/search/movie';
    try {
      const response = await axios.get(searchEndpoint, {
        params: {
          api_key: apiKey,
          query: query,
          page: page
        },
      });
      console.log(response.data);

      if (page === 1) {
      searchResults = response.data.results || [];
      }else {
        searchResults = [...searchResults, ...response.data.results];
       
      }
      page++
      mostra()
    } catch (error) {
      console.error('Errore durante la ricerca di film:', error);
    }
    
  };

  

  const showAll= async ()=>{
    const apiKey = '758d1e2e3df3b485c0c62b322b0e9128'; 
    const discoverAllen = 'https://api.themoviedb.org/3/trending/all/week';
    try {
      const allResponse = await axios.get(discoverAllen, {
        params: {
          api_key: apiKey,
          include_adult: false,
          include_video: false,
          language: 'en-US',
          page: page,
          sort_by: 'popularity.desc',
        },
      });

      const uniqueResults = allResponse.data.results.filter(result => !discoverAll.some(existing => existing.id === result.id));

          if (page === 1){
          discoverAll = allResponse.data.results || []
        }else{
        discoverAll = [...discoverAll, ...uniqueResults];
        }
        
      console.log(allResponse.data);
      page++
      mostra()
    } catch (error) {
      console.error('Errore durante la ricerca di tendenze:', error);
    }
   
  }



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
          page: page,
          sort_by: 'popularity.desc',
        },
      });

      const unico = discoverResponse.data.results.filter(result => !discoverMovies.some(existing => existing.id === result.id))
       
      if (page === 1){
        discoverMovies = discoverResponse.data.results || []
      }else{
        discoverMovies = [...discoverMovies, ...unico]
        }
        
      console.log(discoverResponse.data);
      page++
      mostra()
    } catch (error) {
      console.error('Errore durante la ricerca di film popolari:', error);
    }
  }

  const showTv = async () => {
  const apiKey = '758d1e2e3df3b485c0c62b322b0e9128'; 
  const discoverEndtv = 'https://api.themoviedb.org/3/discover/tv';
  try {
    const tvResponse = await axios.get(discoverEndtv, {
      params: {
        api_key: apiKey,
        include_adult: false,
        include_video: false,
        language: 'en-US',
        page: page,
        sort_by: 'popularity.desc',
      },
    });

      const unicoh = tvResponse.data.results.filter(resulto=> !discoverTv.some(existingo => existingo.id === resulto.id))

    if (page === 1){
      discoverTv = tvResponse.data.results || []
    }else{
      discoverTv = [...discoverTv, ...unicoh]
    }
    
    console.log(tvResponse.data);
    mostra()
    page++
  } catch (error) {
    console.error('Errore durante la ricerca di serie popolari:', error);
  }
}

  showAll()
  showTrendy();
  showTv()

 const Enter=(event)=>{
  if (event.key === 'Enter'){
    cambiaRicerca(searchKeyword)
  }
 }

 const upButton=()=>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
 }



</script>

<div>
  <div class="bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-800 flex-auto relative top-5 w-auto h-24 items-center border-b-2 white flex rounded-3xl ">
  <h1  class="text-white text-4xl font-bold flex relative left-[88px] justify-center cursor-default">HomeCode </h1>
  </div>

  <div class="bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-800 h-10 flex-auto flex flex-row items-center justify-between relative top-12 rounded-xl md:w-[50%] md:left-[45%] md:-top-12 "> 
  <a href="/" class=" font-bold ml-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {home ? "border-b-2 rounded-sm border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('home')}">Home</a>
  <a href="/skills" class=" text-white font-bold cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {skills ? "border-b-2 border-teal-500":""}" on:click="{()=>selezionaPag('skills')}">Skills</a>
  <a href="/progetti" class=" font-bold mr-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {progetti ? "border-b-2 border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('progetti')}">{$lingua.testo.progetti}</a>
  </div>
</div>

<select value="{salvaSele}" on:change="{(event)=>TraduciPagina(event.target.value)}" class="w-[100px] absolute top-[200px] sm:top-[200px] md:top-[130px] bg-gradient-to-tr p-2 from-white to-neutral-300 border-2 border-neutral-300 rounded-2xl invert">
<option value="ita" >Italiano</option>
<option value="eng" >English</option>
</select>

<main class="text-black top-[120px] rounded-t-2xl relative text-base font-semibold {showwSer ? "h-[1000px] lg:h-[1000px]": "h-[6000px] sm:h-[8300px] md:h-[6000px] lg:h-[5000px] xl:h-[3900px] 2xl:h-[2800px]"}  bg-gradient-to-t from-transparent to-neutral-900 bg-opacity-20">
  <div class=" flex w-[100%] justify-center relative top-[0px] sfoca bg-black bg-opacity-90 rounded-t-2xl p-2 items-center h-[250px] md:h-[160px]">
    <img on:click="{()=> unmostra()}" src={moviecode} alt="home" class="w-[340px] sm:w-[480px] absolute top-[50px] md:top-[10px] " />
    <div class="absolute top-[150px] md:top-[100px] flex justify-center w-[100%]">
  <img on:click="{()=> unmostra()}" src={homee} alt="home" class="w-[50px] p-3 hover:rounded-3xl bg-gradient-to-t to-teal-400 from-violet-400 rounded-2xl cursor-pointer hover:bg-teal-400 hover:invert-0 transi  hover:border-black" />
  <input bind:value={searchKeyword} on:keyup={Enter} placeholder={$lingua.progetti.cfilm} class="placeholder:text-black text-sm bg-gradient-to-t from-violet-400 bg-opacity-30 to-teal-400 w-[180px] sm:w-[400px] lg:w-[700px] p-3 rounded-xl ml-3 mr-3 outline-none" />
  <button class="p-3 rounded-xl bg-gradient-to-t to-teal-400 from-violet-400 hover:rounded-3xl hover:bg-teal-400 transi" on:click={() => cambiaRicerca(searchKeyword)}>{$lingua.progetti.cerca}</button>
</div>
</div>



{#if discoverAll !== null}
<div class="flex w-[100%] justify-center sfoca2 relative {showwAll ? "invisible": "visible"} {showwMostra ? "relative top-[100px]" : "relative top-[100px]"}">
  <p class="text-white font-bold absolute top-[-50px] left-8 text-xl md:text-3xl">{$lingua.progetti.tendenza}</p>
  <button on:click="{()=>mostraTutto()}" class="text-white bg-teal-700 rounded-md hover:rounded-3xl transi p-1 md:p-2 font-bold absolute top-[-50px] right-8 text-sm md:text-sm {showwMostra ? "visible" : "invisible"}">{$lingua.progetti.mostra}</button>
  <div class="bg-gradient-to-t from-pink-950 to-teal-950 bg-opacity-25 rounded-2xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 p-4 overflow-x-auto gap-6" >
    {#each discoverAll.slice(0, limit) as allmovie (allmovie.id)}
      <div id="allmore" class="bg-gradient-to-t from-black to-transparent rounded-xl p-2 cursor-pointer hover:border-2 hover:border-teal-600 hover:scale-105 transi w-[148px] h-[230px] sm:w-[217px] sm:h-[340px]">
        <div class="relative">
        <img class="w-[200px] h-[190px] sm:h-[300px] relative top-[1px] rounded-lg" src={`https://image.tmdb.org/t/p/w500${allmovie.poster_path}`} alt="poster"/>
        <div class="flex flex-row">
        <img class="w-[45px] md:w-[50px] bg-black bg-opacity-70 pr-7 absolute top-2 left-1 rounded-lg" src={star} alt="poster"/>
        <p class="text-white text-sm font-bold absolute top-[6px] md:top-[9px] left-7 md:left-8  ">{Math.floor(allmovie.vote_average)}</p>
        </div>
        </div>
        {#if allmovie.original_title}
        <h2 class="text-white text-xs md:text-base font-semibold text-ellipsis whitespace-nowrap overflow-hidden w-[130px] relative top-[10px] md:top-[5px] sm:w-[200px] ">{allmovie.original_title}</h2>
        {:else if allmovie.original_name}
        <h2 class="text-white text-xs md:text-base font-semibold text-ellipsis whitespace-nowrap overflow-hidden w-[130px] relative top-[10px] md:top-[5px] sm:w-[200px]">{allmovie.original_name}</h2>
        {/if}
      </div>
      {/each}
    </div>
  </div>
  {/if}

  {#if discoverMovies !== null}
  <div class="flex w-[100%] justify-center sfoca3  {showwAll2 ? "invisible": "visible"} {showwMostra2 ? "relative top-[200px]" : "absolute top-[350px] md:top-[260px]"}">
    <p class="text-white font-bold absolute top-[-50px] left-8 text-xl md:text-3xl">{$lingua.progetti.film}</p>
    <button on:click="{()=>mostraTutto2()}" class="text-white bg-teal-700 rounded-md hover:rounded-3xl transi p-1 md:p-2 font-bold absolute top-[-50px] right-8 text-sm md:text-sm {showwMostra2 ? "visible" : "invisible"}">{$lingua.progetti.mostra}</button>
    <div class="bg-gradient-to-t from-orange-950 to-green-950 bg-opacity-25 rounded-2xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 p-4 overflow-x-auto gap-6" >
      {#each discoverMovies.slice(0, limit) as discmovie (discmovie.id)}
        <div id="allmovie" class="bg-gradient-to-t from-black to-transparent rounded-xl p-2 cursor-pointer hover:border-2 hover:border-green-600  hover:scale-105 transi w-[148px] h-[230px] sm:w-[217px] sm:h-[340px]">
          <div class="relative">
            <img class="w-[200px] h-[190px] sm:h-[300px] relative top-[1px] rounded-lg" src={`https://image.tmdb.org/t/p/w500${discmovie.poster_path}`} alt="poster"/>
            <div class="flex flex-row">
            <img class="w-[45px] md:w-[50px] bg-black bg-opacity-70 pr-7 absolute top-2 left-1 rounded-lg" src={star} alt="poster"/>
            <p class="text-white text-sm font-bold absolute top-[6px] md:top-[9px] left-7 md:left-8  ">{Math.floor(discmovie.vote_average)}</p>
            </div>
            </div>
          <h2 class="text-white text-xs md:text-base font-semibold text-ellipsis whitespace-nowrap overflow-hidden w-[130px] relative top-[10px] md:top-[5px] sm:w-[200px] ">{discmovie.original_title}</h2>
        </div>
        {/each}
      </div>
    </div>
    {/if}

    
  {#if discoverTv !== null}
  <div class="flex w-[100%] justify-center sfoca4  {showwAll3 ? "invisible": "visible"} {showwMostra3 ? "relative top-[300px]" : "absolute top-[350px] md:top-[260px]"}">
    <p class="text-white font-bold absolute top-[-50px] left-8 text-xl md:text-3xl">{$lingua.progetti.tv}</p>
    <button on:click="{()=>mostraTutto3()}" class="text-white bg-teal-700 rounded-md hover:rounded-3xl transi p-1 md:p-2 font-bold absolute top-[-50px] right-8 text-sm md:text-sm {showwMostra3 ? "visible" : "invisible"}">{$lingua.progetti.mostra}</button>
    <div class="bg-gradient-to-t from-red-950 to-yellow-900 bg-opacity-25 rounded-2xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 p-4 overflow-x-auto gap-6" >
      {#each discoverTv.slice(0, limit) as tvmovie (tvmovie.id)}
        <div id="alltv" class="bg-gradient-to-t from-black to-transparent rounded-xl p-2 cursor-pointer hover:border-2 hover:border-yellow-600  hover:scale-105 transi w-[148px] h-[230px] sm:w-[217px] sm:h-[340px]">
          <div class="relative">
            <img class="w-[200px] h-[190px] sm:h-[300px] relative top-[1px] rounded-lg" src={`https://image.tmdb.org/t/p/w500${tvmovie.poster_path}`} alt="poster"/>
            <div class="flex flex-row">
            <img class="w-[45px] md:w-[50px] bg-black bg-opacity-70 pr-7 absolute top-2 left-1 rounded-lg" src={star} alt="poster"/>
            <p class="text-white text-sm font-bold absolute top-[6px] md:top-[9px] left-7 md:left-8  ">{Math.floor(tvmovie.vote_average)}</p>
            </div>
            </div>
          <h2 class="text-white text-xs md:text-base font-semibold text-ellipsis whitespace-nowrap overflow-hidden w-[130px] relative top-[10px] md:top-[5px] sm:w-[200px] ">{tvmovie.original_name}</h2>
        </div>
        {/each}
      </div>
    </div>
    {/if}

  {#if searchResults !== null}
  <div class="flex w-[100%] justify-center {showwSer ? "grid": "hidden"}">
    <div class="flex w-[100%] justify-center absolute top-[350px] md:top-[260px] ">
      {#if searchResults.length > 0}
      <p class="text-white font-bold absolute top-[-50px] left-8 text-xl md:text-3xl">{$lingua.progetti.risultato}</p>
        <ul class="bg-gradient-to-t from-violet-950 to-teal-950 bg-opacity-25 rounded-2xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 p-4 gap-6 ">
          {#each searchResults as movie (movie.id)}
          <div id="searchmore" class="bg-gradient-to-t from-black to-transparent rounded-xl mb-8 p-2 relative top-[0px] hover:border-2 hover:border-violet-600 transi cursor-pointer hover:scale-105 w-[148px] h-[230px] sm:w-[217px] sm:h-[340px]">
            <div class="relative">
              <img class="w-[200px] h-[190px] sm:h-[300px] relative top-[1px] rounded-lg" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster"/>
              <div class="flex flex-row">
              <img class="w-[45px] md:w-[50px] bg-black bg-opacity-70 pr-7 absolute top-2 left-1 rounded-lg" src={star} alt="poster"/>
              <p class="text-white text-sm font-bold absolute top-[6px] md:top-[9px] left-7 md:left-8  ">{Math.floor(movie.vote_average)}</p>
              </div>
              </div>
              <h2 class="text-white text-xs md:text-base font-semibold text-ellipsis whitespace-nowrap overflow-hidden w-[130px] relative top-[10px] md:top-[5px] sm:w-[200px] ">{movie.original_title}</h2>
              
            </div>
          {/each}
        </ul>
      {:else}
        <p>Nessun risultato trovato.</p>
      {/if}
    </div>
  </div>
  {/if}

<div on:click="{upButton}" id="up" class="cursor-pointer md:w-[50px] bg-white bg-opacity-70 p-3 fixed bottom-4 right-8 rounded-full">
  <img class="w-[30px]" src={arrow} alt="poster"/>
</div>
 

  </main>
 
  

  <style>

  #body{
    height: bodyLimit
  }


    .transi{
      transition: 1s;
    }

    
  .sfoca{
  animation: forwards 1s sfoc;
  opacity: 0;
}
.sfoca2{
  animation: forwards 1s sfoc2;
  animation-delay: 0.5s;
  opacity: 0;
}
.sfoca3{
  animation: forwards 1s sfoc3;
  animation-delay: 1s;
  opacity: 0;
}
.sfoca4{
  animation: forwards 1s sfoc4;
  animation-delay: 1.5s;
  opacity: 0;
}
.sfoca5{
  animation: forwards 1s sfoc5;
  animation-delay: 2s;
  opacity: 0;
}
.sfoca6{
  animation: forwards 1s sfoc6;
  animation-delay: 2.5s;
  opacity: 0;
}
.sfoca7{
  animation: forwards 1s sfoc7;
  animation-delay: 3s;
  opacity: 0;
}

@keyframes sfoc {
  0%{filter: blur(5px);}
  100%{filter: blur(0px); opacity: 1;}
}
@keyframes sfoc2 {
 0%{filter: blur(5px);}
  100%{filter: blur(0px); opacity: 1;}
}
@keyframes sfoc3 {
 0%{filter: blur(5px);}
  100%{filter: blur(0px); opacity: 1;}
}
@keyframes sfoc4 {
0%{filter: blur(5px);}
  100%{filter: blur(0px); opacity: 1;}
}
@keyframes sfoc5 {
 0%{filter: blur(5px);}
  100%{filter: blur(0px); opacity: 1;}
}
@keyframes sfoc6 {
0%{filter: blur(5px);}
  100%{filter: blur(0px); opacity: 1;}
}
@keyframes sfoc7 {
 0%{filter: blur(5px);}
  100%{filter: blur(0px); opacity: 1;}
}

  </style>