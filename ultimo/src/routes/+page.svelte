<script>
  import io from '/src/routes/img/io.jpg';
  import curriculum from './CurriculumAggiornato2023.pdf';
  import hc from './img/HomeCode.png';
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
 

 let home= true
 let skills = false
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

  .transizione{
    transition: 0.7s;
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


<div>
    <div class="bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-800 flex-auto relative top-5 w-auto h-24 items-center border-b-2 white flex rounded-3xl ">
    <img src={hc} class="w-[250px] flex relative left-[65px] justify-center cursor-default" />
    </div>

    <div class="bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-800 h-10 flex-auto flex flex-row items-center justify-between relative top-12 rounded-xl md:w-[50%] md:left-[45%] md:-top-12 "> 
    <a href="/" class=" font-bold ml-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {home ? "border-b-2 rounded-sm border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('home')}">Home</a>
    <a href="/skills" class=" text-white font-bold cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {skills ? "border-b-2 border-teal-500":""}" on:click="{()=>selezionaPag('skills')}">Skills</a>
    <a href="/progetti" class=" text-white font-bold mr-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {progetti ? "border-b-2 border-teal-500":""}" on:click="{()=>selezionaPag('progetti')}">{$lingua.testo.progetti}</a>
    </div>
</div>

<select value="{salvaSele}" on:change="{(event)=>TraduciPagina(event.target.value)}" class="w-[100px] absolute top-[200px] sm:top-[200px] md:top-[130px] bg-gradient-to-tr p-2 from-white to-neutral-300 border-2 border-neutral-300 rounded-2xl invert">
  <option value="ita" >Italiano</option>
  <option value="eng" >English</option>
</select>


<div class="flex justify-center w-[100%] sm:h-[1900px] h-[2200px] md:h-[1900px] lg:h-[1650px] xl:h-[1750px]">
<div class="bg-black w-[100%] sm:h-[1700px] h-[2000px] md:h-[1700px] lg:h-[1450px] xl:h-[1550px] rounded-3xl relative top-36 border-teal-500 border-b-4 border-r-4 flex justify-center ">
    <img alt="io" src={io} class="w-[25%] top-[1.5%] left-[5%] sm:w-[25%] sm:left-[5%] sm:top-[1%] md:left-[5%] md:top-[1%] rounded-full md:w-[25%] lg:w-[20%] 2xl:w-[15%] border-2 border-teal-500 absolute sfoca"/>
    <h1 class="text-teal-500 font-bold text-4xl sm:text-6xl sm:top-[1%] lg:top-[2.5%] md:text-7xl absolute top-7 md:top-8 left-[35%] lg:left-[27%] sfoca ">{$lingua.testo.titolo}</h1>

    
    <div class=" w-[100%] lg:w-[80%] xl:w-[60%] h-[240px] lg:h-[100px] text-sm md:text-lg lg:text-base absolute top-[10.5%] sm:top-[14%] md:top-[18%] lg:top-[20%]  rounded-xl grid grid-cols-1 grid-rows-4 md:grid-cols-1 md:grid-rows-4 md:gap-x-[1%] lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-[1%] lg:gap-y-[0%] justify-items-center items-center ">
    <p class="bg-neutral-800 sfoca2 inline-flex w-[310px] sm:w-[500px] md:w-[600px] lg:w-[300px] rounded-lg p-1 cursor-default justify-center">Email: alessiosantillo31199@gmail.com</p>
    <p class="bg-neutral-800 sfoca3 inline-flex w-[310px] sm:w-[500px] md:w-[600px] lg:w-[300px] rounded-lg p-1 cursor-default justify-center">{$lingua.testo.tel}: 3898938262</p>
    <a href="https://github.com/Ale31199" class="bg-neutral-800 sfoca4 w-[310px] sm:w-[500px] md:w-[600px] lg:w-[300px] inline-flex rounded-lg p-1 cursor-pointer underline text-teal-500 justify-center">Github: Ale31199 </a>
    <a href={curriculum} class="bg-teal-800 sfoca5 hover:bg-gradient-to-l from-teal-950 to-teal-800 w-[310px] sm:w-[500px] md:w-[600px] lg:w-[300px] inline-flex text-white hover:rounded-2xl transizione rounded-lg p-1 cursor-pointer justify-center ">{$lingua.testo.curr}</a>
    </div>
  


    <div class="w-[310px] sfoca6 sm:w-[500px] md:w-[600px] lg:w-[750px] 2xl:w-[1000px] h-[1500px] sm:h-[1200px] md:h-[1100px] lg:h-[1000px] xl:h-[1100px] absolute bottom-[0%] sm:bottom-[0%] bg-gradient-to-bl from-neutral-800 to-neutral-950 border-2 border-neutral-800 grid grid-cols-1 grid-rows-3 justify-items-center text-justify rounded-3xl">
      
      <div class="flex flex-col items-center">
    <p class="text-justify ml-4 mr-4 text-2xl relative top-[3%] sm:top-[5%] md:top-[3%] lg:top-[7%] md:text-3xl lg:text-4xl  font-extrabold" >{$lingua.testo.chi}</p>
    <p class="text-justify ml-4 mr-4 absolute top-[4%] sm:top-[5%] lg:top-[7%] font-thin text-[12px] sm:text-[13px] lg:text-[15px] xl:text-[15px] 2xl:text-[17px] md:text-[14px] w-[90%] sm:w-[80%] " >{$lingua.testo.testo2}</p>
      </div>

      <div class="flex flex-col items-center">
    <p class="text-justify ml-4 mr-4 text-2xl absolute top-[50%] sm:top-[48%] md:top-[51%] lg:top-[50%] xl:top-[49%] md:text-3xl lg:text-4xl font-extrabold" >{$lingua.testo.percorso}</p>
    <p class="text-justify ml-4 mr-4 absolute top-[53%] sm:top-[52%] md:top-[55%] lg:top-[55%] xl:top-[54%] font-thin text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px] md:text-[13px] w-[90%] sm:w-[80%]" >{$lingua.testo.testo3}</p>
      </div>

      <div class="flex flex-col items-center">
    <p class="text-justify ml-4 mr-4 text-2xl absolute top-[84%] sm:top-[82%] lg:top-[81%] md:text-3xl lg:text-4xl  font-extrabold" >{$lingua.testo.futuro}</p>
    <p class="text-justify ml-4 mr-4 absolute top-[87%] sm:top-[86%] font-thin text-[12px] sm:text-[13px] lg:text-[15px] md:text-[14px] xl:text-[15px] 2xl:text-[17px] w-[90%] sm:w-[80%]" >{$lingua.testo.testo4}</p>
    </div>

  </div>

    
</div>
</div>



