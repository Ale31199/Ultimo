<script>
import alien from './ximg/alien.png';
import alien1 from './ximg/alien1.png';
import alien2 from './ximg/alien2.png';
import alien3 from './ximg/alien3.png';
import aliens from './ximg/aliens.png';
import area51 from './ximg/area-51.png';
import ufo from './ximg/ufo.png';
import hand from './ximg/handshake.png';
import chat from './ximg/chat.png';
// @ts-ignore
import ita from '/src/routes/xflies/xtesto.json';
import eng from '/src/routes/xflies/xtestoeng.json';

import { lingua } from './lingua.js';


const TraduciPagina=(linguatraduci)=>{
  switch(linguatraduci){
    case 'ita':
      lingua.set(ita)
      break;
    case 'eng':
      lingua.set(eng)
    break;
  }
}



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

  
 let homex= true
 let biglietti = false
 let xshop = false

  // @ts-ignore
  const selezionaPagx=(paginax)=>{
    switch (paginax) {
      case 'homex':
        home = true
        skills =false
        progetti=false
        break;

        case 'biglietti':
          skills = true
          home = false
          progetti = false
          break;

          case 'xshop':
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

<div>
  <div class="bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-800 flex-auto relative top-5 w-auto h-24 items-center border-b-2 white flex rounded-3xl ">
  <h1  class="text-white text-4xl font-bold flex relative left-[68px] justify-center cursor-default">HomeCode </h1>
  </div>
  <div class="bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-800 h-10 flex-auto flex flex-row items-center justify-between relative top-12 rounded-xl md:w-[50%] md:left-[45%] md:-top-12 "> 
  <a href="/" class=" font-bold ml-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {home ? "border-b-2 rounded-sm border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('home')}">Home</a>
  <a href="/skills" class="  font-bold cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {skills ? "border-b-2 border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('skills')}">Skills</a>
  <a href="/progetti" class=" font-bold mr-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {progetti ? "border-b-2 border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('progetti')}">{$lingua.homepage.progetti}</a>
    </div>
</div>

<select on:change="{(event)=>TraduciPagina(event.target.value)}" class="w-[100px] absolute top-[30%] sm:top-[20%] md:top-[13%] bg-gradient-to-tr p-2 from-white to-neutral-300 border-2 border-neutral-300 rounded-2xl invert">
<option value="ita">Italiano</option>
<option value="eng">English</option>
</select>

<div class="bg-black w-[100%] h-[3800px] sm:h-[4500px] md:h-[4500px] lg:h-[4500px] rounded-3xl relative top-36 flex justify-center ">
  <div class="w-[90%] h-[5%] flex flex-col">
    <div class="bg-gradient-to-br from-gray-950 to-teal-950 flex-auto relative top-5 w-[100%] h-[30%] items-center teal-500 flex rounded-3xl ">
    <img src={alien} alt="alien" class="w-[80px] sm:w-[90px] md:left-[4%] relative" />
    <div class="flex flex-col  md:left-[5%] relative">
    <h1  class="text-white text-4xl flex relative left-[0px] font-thin justify-center tracking-[10px] cursor-default">X-FLIES</h1>
     <p class="text-white text-sm italic">Your First Alien Space Travel</p>
    </div>
    </div>

  
    <div class="bg-gradient-to-br from-gray-950 to-teal-950 md:bg-gradient-to-br md:from-black md:to-neutral-900 h-[1%] flex-auto flex flex-row items-center justify-between relative top-12  rounded-lg md:w-[50%] md:left-[45%] md:-top-[41%] "> 
    <a href="/xflies" on:click="{()=>selezionaPagx('homex')}" class=" font-bold ml-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {homex ? "text-teal-500 border-b-2 border-teal-500": "text-white"}">Home</a>
    <a href="/xflies/biglietti" on:click="{()=>selezionaPagx('biglietti')}" class=" font-bold cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {biglietti ? "text-teal-500 border-b-2 border-teal-500": "text-white"}">{$lingua.homepage.biglietti}</a>
    <a href="/xflies/shop" on:click="{()=>selezionaPagx('xshop')}" class="  font-bold mr-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {xshop ? "text-teal-500 border-b-2 border-teal-500": "text-white"}">X-Shop</a>
    </div>

    <div class="flex w-[100%] justify-center">

    <div class="grid grid-cols-1 grid-rows-3 justify-items-center absolute top-[8%]  w-[290px] sm:w-[500px] md:w-[600px] lg:w-[800px] 2xl:w-[1200px] h-[10%] sm:h-[15%] lg:h-[15%] sm:bg-gradient-to-tr from-black to-neutral-900 sm:border-2 sm:border-neutral-900 rounded-3xl">
      <img src={hand} alt="hand" class="w-[130px] sm:w-[170px] lg:w-[200px] relative top-[0%] animazione" />
      <p class="text-teal-500 text-3xl sm:text-4xl lg:text-5xl top-[8%] sm:top-[-8%] lg:top-[10%] relative ">{$lingua.homepage.ben}</p>
      <p class="text-white text-justify text-[13px] md:text-[14px] lg:text-[15px] 2xl:text-[18px] absolute top-[50%] sm:top-[40%] lg:top-[50%] sm:w-[80%] md:w-[530px] lg:w-[730px] 2xl:w-[1100px]">{$lingua.homepage.benvenuto}</p>
    </div>

    <div class="grid grid-cols-1 grid-rows-3 justify-items-center absolute top-[27%] sm:top-[26%] w-[290px] sm:w-[500px] md:w-[600px] lg:w-[800px] 2xl:w-[1200px] h-[9%] sm:h-[16%] lg:h-[16%] sm:bg-gradient-to-tr from-black to-neutral-900 sm:border-2 sm:border-neutral-900 rounded-3xl">
      <img src={alien1} alt="hand" class="w-[110px] sm:w-[190px] lg:w-[200px] relative top-[5%] md:top-[20%]" />
      <p class="text-teal-500 text-2xl sm:text-4xl lg:text-5xl top-[8%] sm:top-[-8%] md:top-[10%] md:text-4xl lg:top-[15%] relative ">{$lingua.homepage.mes}</p>
      <p class="text-white text-justify text-[13px] md:text-[14px] lg:text-[15px] 2xl:text-[18px] absolute top-[50%] md:top-[46%]  sm:top-[40%] lg:top-[50%] sm:w-[80%] md:w-[530px] lg:w-[730px] 2xl:w-[1100px]">{$lingua.homepage.messaggio}</p>
    </div>
    
    <div class="grid grid-cols-1 grid-rows-3 justify-items-center absolute top-[46%] sm:top-[45%] w-[290px] sm:w-[500px] md:w-[600px] lg:w-[800px] 2xl:w-[1200px] h-[10%] sm:h-[14%] lg:h-[14%] sm:bg-gradient-to-tr from-black to-neutral-900 sm:border-2 sm:border-neutral-900 rounded-3xl">
      <img src={ufo} alt="hand" class="w-[140px] sm:w-[200px] md:w-[250px] lg:w-[250px] relative top-[10%] md:top-[5%] animazione2" />
      <p class="text-teal-500 text-[22px] sm:text-3xl lg:text-5xl top-[8%] sm:top-[5%] md:top-[20%] md:text-4xl lg:top-[15%] relative ">{$lingua.homepage.pil}</p>
      <p class="text-white text-justify text-[13px] md:text-[14px] lg:text-[15px] 2xl:text-[18px] absolute top-[50%] md:top-[50%] sm:top-[45%] lg:top-[51%] sm:w-[80%] md:w-[530px] lg:w-[730px] 2xl:w-[1100px]">{$lingua.homepage.piloti}</p>
    </div>

    <div class=" grid grid-cols-1 grid-rows-3 justify-items-center absolute top-[61.5%] sm:top-[62%] w-[290px] sm:w-[500px] md:w-[600px] lg:w-[800px] 2xl:w-[1200px] h-[10%] sm:h-[18%] lg:h-[18%] sm:bg-gradient-to-tr from-black to-neutral-900 sm:border-2 sm:border-neutral-900 rounded-3xl">
      <img src={alien3} alt="hand" class="w-[110px] sm:w-[200px] lg:w-[230px] relative top-[10%] md:top-[25%]" />
      <p class="text-teal-500 text-2xl sm:text-4xl lg:text-5xl top-[8%] sm:top-[-8%] md:top-[13%] md:text-4xl lg:top-[20%] relative ">{$lingua.homepage.lic}</p>
      <p class="text-white text-justify text-[13px] md:text-[14px] lg:text-[15px] 2xl:text-[18px] absolute top-[50%] md:top-[46%]  sm:top-[40%] lg:top-[50%] sm:w-[80%] md:w-[530px] lg:w-[730px] 2xl:w-[1100px]">{$lingua.homepage.licenze}</p>
    </div>

    <div class=" grid grid-cols-1 grid-rows-3 justify-items-center absolute top-[83.5%] sm:top-[83%] w-[290px] sm:w-[500px] md:w-[600px] lg:w-[800px] 2xl:w-[1200px] h-[10%] sm:h-[14%] lg:h-[15%] sm:bg-gradient-to-tr from-black to-neutral-900 sm:border-2 sm:border-neutral-900 rounded-3xl">
      <img src={area51} alt="hand" class="w-[140px] sm:w-[200px] md:w-[250px] lg:w-[270px] relative top-[6%]" />
      <p class="text-teal-500 text-3xl sm:text-4xl lg:text-5xl top-[8%] md:top-[20%] md:text-4xl lg:top-[15%] relative ">{$lingua.homepage.are}</p>
      <p class="text-white text-justify text-[13px] md:text-[14px] lg:text-[15px] 2xl:text-[18px] absolute top-[50%] md:top-[50%]  sm:top-[45%] lg:top-[50%] sm:w-[80%] md:w-[530px] lg:w-[730px] 2xl:w-[1100px]">{$lingua.homepage.area}</p>
    </div>

    </div>





   <div>

   </div> 

  


  </div>
</div>

<style>

.effetto{
    animation: 1s infinite alternate-reverse effe;
  }
  @keyframes effe {
    from{opacity: 0;}
    to{opacity: 1;}
  }
  
  .animazione{
    animation: 2s infinite alternate-reverse saluta;
  }
  @keyframes saluta{
    from{top: 0%;}
    to{top: 10%;}
  }

  .animazione2{
    animation: 2s infinite alternate-reverse vola;
  }
  @keyframes vola{
    from{left: -20%;}
    to{left: 20%;}
  }
</style>

