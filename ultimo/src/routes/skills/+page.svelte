<script>
  import html from '/src/routes/img/html-5.png';
  import css from '/src/routes/img/css-3.png';
  import js from '/src/routes/img/js.png';
  import react from '/src/routes/img/atom.png';
  import php from '/src/routes/img/php.png';
  import sql from '/src/routes/img/mysql.png';
  import github from '/src/routes/img/github.png';
  import svelte from '/src/routes/img/svelte.png';
  import tailwind from '/src/routes/img/tailwind.png';
  import ita from '/src/routes/textITA.json';
  import eng from '/src/routes/textENG.json';
  import hc from '/src/routes/img/HomeCode.png';
 
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
 let skills = true
 let progetti = false

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
</script>

<style>
  p{
    color: white;
  }

  .gira{
    animation: spinna infinite 10s linear;
  }
  @keyframes spinna {
    from{rotate:0deg}
    to{rotate:360deg}
  }
  .effetto{
    animation: 1s infinite alternate-reverse effe;
  }
  @keyframes effe {
    from{opacity: 0;}
    to{opacity: 1;}
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
.sfoca8{
  animation: forwards 1s sfoc8;
  animation-delay: 3.5s;
  opacity: 0;
}
.sfoca9{
  animation: forwards 1s sfoc9;
  animation-delay: 4s;
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
@keyframes sfoc8 {
0%{filter: blur(5px);}
  100%{filter: blur(0px); opacity: 1;}
}
@keyframes sfoc9 {
 0%{filter: blur(5px);}
  100%{filter: blur(0px); opacity: 1;}
}


</style>



<div>
  <div class="bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-800 flex-auto relative top-5 w-auto h-24 items-center border-b-2 white flex rounded-3xl ">
    <img src={hc} class="w-[250px] flex relative left-[65px] justify-center cursor-default" />
  </div>
  <div class="bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-800 h-10 flex-auto flex flex-row items-center justify-between relative top-12 rounded-xl md:w-[50%] md:left-[45%] md:-top-12 "> 
  <a href="/" class=" font-bold ml-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {home ? "border-b-2 rounded-sm border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('home')}">Home</a>
  <a href="/skills" class="  font-bold cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {skills ? "border-b-2 border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('skills')}">Skills</a>
  <a href="/progetti" class="  font-bold mr-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {progetti ? "border-b-2 border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('progetti')}">{$lingua.testo.progetti}</a>
  </div>
</div>

<select value="{salvaSele}" on:change="{(event)=>TraduciPagina(event.target.value)}" class="w-[100px] absolute top-[200px] sm:top-[200px] md:top-[130px] bg-gradient-to-tr p-2 from-white to-neutral-300 border-2 border-neutral-300 rounded-2xl invert">
  <option value="ita">Italiano</option>
  <option value="eng">English</option>
  </select>


<div class="flex justify-center w-[100%]">
<div class="bg-black w-[100%] sm:h-[5300px] md:h-[3000px] lg:h-[1900px] h-[5300px] relative top-36 rounded-3xl flex justify-center">
  
    <div class="grid lg:grid-cols-3 lg:grid-rows-3 w-[100%] gap-6 sm:grid-cols-1 md:grid-cols-2 justify-items-center">

      <div class="sfoca bg-gradient-to-bl to-orange-950 from-neutral-950 border-2 border-orange-950 sm:h-[520px] md:w-[320px] w-[300px] sm:w-[500px] lg:w-[285px] xl:w-[350px] 2xl:w-[400px] h-[490px] flex justify-center relative top-10 rounded-3xl hover:transition hover:ease-in-out hover:duration-1000 hover:border-solid hover:border-orange-600 hover:border-[5px]">
      <img src={html} alt="html" class="w-[120px]  md:w-[150px] lg:w-[135px] absolute top-8 sm:top-6  lg:top-[30px]" />
      <h1 class="bg-orange-600 flex flex-row w-[100%] h-[10%] absolute top-[36%] font-extrabold text-5xl justify-center items-center">HTML</h1>
      <p class="absolute text-[13px] sm:text-[16px] md:text-[14px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] top-[50%] w-[90%] text-justify">{$lingua.skills.html}</p>
      <h1 class="absolute bottom-4 bg-neutral-950 rounded-3xl w-[80%] text-center p-3 font-semibold text-teal-500 border-orange-950 border-2">{$lingua.skills.ma}</h1>
      </div>

      <div class="sfoca2 bg-gradient-to-bl to-blue-950 from-neutral-950 border-2 border-blue-950 sm:h-[520px] h-[490px] md:w-[320px] w-[300px] sm:w-[500px] lg:w-[285px] xl:w-[350px] 2xl:w-[400px] flex justify-center relative top-10 rounded-3xl hover:transition hover:ease-in-out hover:duration-1000 hover:border-solid hover:border-blue-600 hover:border-[5px]">
        <img src={css} alt="html" class="w-[120px] md:w-[150px] lg:w-[135px] absolute top-8  sm:top-6 lg:top-[30px]" />
        <h1 class="bg-blue-600 flex flex-row w-[100%] h-[10%] absolute top-[36%] font-extrabold text-5xl justify-center items-center">CSS</h1> 
        <p class="absolute text-[13px] sm:text-[16px] md:text-[14px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] top-[50%] w-[90%] text-justify">{$lingua.skills.css}</p>
        <h1 class="absolute bottom-4 bg-neutral-950 rounded-3xl w-[80%] text-center p-3 font-semibold text-teal-500 border-blue-950 border-2">{$lingua.skills.ma}</h1>
        </div>

        <div class="sfoca3 bg-gradient-to-bl to-yellow-950 from-neutral-950 border-2 border-yellow-950 sm:h-[520px] h-[490px] md:w-[320px] w-[300px] sm:w-[500px] lg:w-[285px] xl:w-[350px] 2xl:w-[400px] flex justify-center relative top-10 rounded-3xl hover:transition hover:ease-in-out hover:duration-1000 hover:border-solid hover:border-yellow-500 hover:border-[5px]">
          <img src={js} alt="html" class="w-[120px] md:w-[150px] lg:w-[135px] absolute top-8 sm:top-6 lg:top-[30px]" />
          <h1 class="bg-yellow-500 flex flex-row w-[100%] h-[10%] absolute top-[36%] font-extrabold text-[40px] justify-center items-center">JAVASCRIPT</h1>
          <p class="absolute text-[13px] sm:text-[16px] md:text-[14px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] top-[50%] w-[90%] text-justify">{$lingua.skills.js}</p>
          <h1 class="absolute bottom-4 bg-neutral-950 rounded-3xl w-[80%] text-center p-3 font-semibold text-teal-500 border-yellow-950 border-2">{$lingua.skills.m}</h1>
          </div>
          
          <div class="sfoca4 bg-gradient-to-bl to-blue-950 from-neutral-950 border-2 border-blue-950 sm:h-[520px] h-[490px] md:w-[320px] w-[300px] sm:w-[500px] lg:w-[285px]  xl:w-[350px] 2xl:w-[400px] flex justify-center relative top-10 rounded-3xl hover:transition hover:ease-in-out hover:duration-1000 hover:border-solid hover:border-blue-600 hover:border-[5px]">
            <img src={react} alt="html" class="w-[120px] md:w-[150px] lg:w-[135px] absolute top-8 sm:top-6 lg:top-[30px]" />
            <h1 class="bg-blue-600 flex flex-row w-[100%] h-[10%] absolute top-[36%] font-extrabold text-5xl justify-center items-center">REACT</h1>
            <p class="absolute text-[13px] sm:text-[16px] md:text-[14px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] top-[50%] w-[90%] text-justify">{$lingua.skills.react}</p>
            <h1 class="absolute bottom-4 bg-neutral-950 rounded-3xl w-[80%] text-center p-3 font-semibold text-teal-500 border-blue-950 border-2">{$lingua.skills.m}</h1>
            </div>

            <div class="sfoca5 bg-gradient-to-bl to-orange-950 from-neutral-950 border-2 border-orange-950 sm:h-[520px] h-[490px] md:w-[320px] w-[300px] sm:w-[500px] lg:w-[285px]  xl:w-[350px] 2xl:w-[400px] flex justify-center relative top-10 rounded-3xl hover:transition hover:ease-in-out hover:duration-1000 hover:border-solid hover:border-orange-600 hover:border-[5px]">
              <img src={svelte} alt="html" class="w-[120px] md:w-[150px] lg:w-[135px] absolute top-8 sm:top-6 lg:top-[30px]" />
              <h1 class="bg-orange-600 flex flex-row w-[100%] h-[10%] absolute top-[36%] font-extrabold text-5xl justify-center items-center">SVELTE</h1>
              <p class="absolute text-[13px] sm:text-[16px] md:text-[14px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] top-[50%] w-[90%] text-justify">{$lingua.skills.svelte}</p>
              <h1 class="absolute bottom-4 bg-neutral-950 rounded-3xl w-[80%] text-center p-3 font-semibold text-teal-500 border-orange-950 border-2">{$lingua.skills.m}</h1>
              </div>

              <div class="sfoca6 bg-gradient-to-bl to-blue-950 from-neutral-950 border-2 border-blue-950 sm:h-[520px] h-[490px] md:w-[320px] w-[300px] sm:w-[500px] lg:w-[285px]  xl:w-[350px] 2xl:w-[400px] flex justify-center relative top-10 rounded-3xl hover:transition hover:ease-in-out hover:duration-1000 hover:border-solid hover:border-blue-600 hover:border-[5px]">
                <img src={tailwind} alt="html" class="w-[120px] md:w-[150px] lg:w-[135px] absolute top-8 sm:top-6 lg:top-[30px]" />
                <h1 class="bg-blue-600 flex flex-row w-[100%] h-[10%] absolute top-[36%] font-extrabold text-5xl justify-center items-center">TAILWIND</h1>
                <p class="absolute text-[13px] sm:text-[16px] md:text-[14px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] top-[50%] w-[90%] text-justify">{$lingua.skills.tailwind}</p>
                <h1 class="absolute bottom-4 bg-neutral-950 rounded-3xl w-[80%] text-center p-3 font-semibold text-teal-500 border-blue-950 border-2">{$lingua.skills.m}</h1>
                </div>

            <div class="sfoca7 bg-gradient-to-bl to-violet-950 from-neutral-950 border-2 border-violet-950 sm:h-[520px] h-[490px] md:w-[320px] w-[300px] sm:w-[500px] lg:w-[285px]  xl:w-[350px] 2xl:w-[400px] flex justify-center relative top-10 rounded-3xl hover:transition hover:ease-in-out hover:duration-1000 hover:border-solid hover:border-violet-400 hover:border-[5px]">
              <img src={php} alt="html" class="w-[120px] md:w-[150px] lg:w-[135px] absolute top-8 sm:top-6 lg:top-[30px]" />
              <h1 class="bg-violet-400 flex flex-row w-[100%] h-[10%] absolute top-[36%] font-extrabold text-5xl justify-center items-center">PHP</h1>
              <p class="absolute text-[13px] sm:text-[16px] md:text-[14px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] top-[50%] w-[90%] text-justify">{$lingua.skills.php}</p>
              <h1 class="absolute bottom-4 bg-neutral-950 rounded-3xl w-[80%] text-center p-3 font-semibold text-teal-500 border-violet-950 border-2">{$lingua.skills.b}</h1>
              </div>

              <div class="sfoca8 bg-gradient-to-bl to-teal-950 from-neutral-950 border-2 border-teal-950 sm:h-[520px] h-[490px] md:w-[320px] w-[300px] sm:w-[500px] lg:w-[285px]  xl:w-[350px] 2xl:w-[400px] flex justify-center relative top-10 rounded-3xl hover:transition hover:ease-in-out hover:duration-1000 hover:border-solid hover:border-teal-300 hover:border-[5px]">
                <img src={sql} alt="html" class="w-[120px] md:w-[150px] lg:w-[135px] absolute top-8 sm:top-6 lg:top-[30px]" />
                <h1 class="bg-teal-300 flex flex-row w-[100%] h-[10%] absolute top-[36%] font-extrabold text-5xl justify-center items-center">MYSQL</h1>
                <p class="absolute text-[13px] sm:text-[16px] md:text-[14px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] top-[50%] w-[90%] text-justify">{$lingua.skills.sql}</p>
                <h1 class="absolute bottom-4 bg-neutral-950 rounded-3xl w-[80%] text-center p-3 font-semibold text-teal-500 border-teal-950 border-2">{$lingua.skills.b}</h1>
                </div>

                <div class="sfoca9 bg-gradient-to-bl to-neutral-600 from-neutral-950 border-2 border-neutral-600 sm:h-[520px] h-[490px] md:w-[320px] w-[300px] sm:w-[500px] lg:w-[285px] xl:w-[350px] 2xl:w-[400px] flex justify-center relative top-10 rounded-3xl hover:transition hover:ease-in-out hover:duration-1000 hover:border-solid hover:border-white hover:border-[5px]">
                  <img src={github} alt="html" class="w-[120px] md:w-[150px] lg:w-[135px] absolute top-8 sm:top-6 lg:top-[30px] invert" />
                  <h1 class="bg-white flex flex-row w-[100%] h-[10%] absolute top-[36%] font-extrabold text-5xl justify-center items-center">GITHUB</h1>
                  <p class="absolute text-[13px] sm:text-[16px] md:text-[14px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] top-[50%] w-[90%] text-justify">{$lingua.skills.github}</p>
                  <h1 class="absolute bottom-4 bg-neutral-950 rounded-3xl w-[80%] text-center p-3 font-semibold text-teal-500 border-neutral-600 border-2">{$lingua.skills.bm}</h1>
                  </div>

           



    </div>  
</div>
</div>
