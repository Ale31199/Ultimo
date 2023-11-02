<script>
import terra from '/src/routes/xflies/ximg/earth.png';
import luna from '/src/routes/xflies/ximg/full-moon.png';
import marte from '/src/routes/xflies/ximg/mars.png';
import giove from '/src/routes/xflies/ximg/jupiter.png';
import venere from '/src/routes/xflies/ximg/venus.png';
import nettuno from '/src/routes/xflies/ximg/neptune.png';
import plutone from '/src/routes/xflies/ximg/pluto.png';
import saturno from '/src/routes/xflies/ximg/saturn.png';
import mercurio from '/src/routes/xflies/ximg/mercury.png';
import urano from '/src/routes/xflies/ximg/uranus.png';
import sistema from '/src/routes/xflies/ximg/solar-system.png';
import chat from '/src/routes/xflies/ximg/chat.png';
import american from '/src/routes/xflies/ximg/american-express.png';
import paypal from '/src/routes/xflies/ximg/paypal.png';
import card from '/src/routes/xflies/ximg/card.png';
import visa from '/src/routes/xflies/ximg/visa.png';
import alien from '/src/routes/xflies/ximg/alien.png';


// @ts-ignore
import ita from '/src/routes/xflies/xtesto.json';

</script>

<div>
  <div class="bg-black flex-auto relative top-5 w-auto h-24 items-center border-b-2 white flex rounded-3xl ">
  <h1  class="text-white text-4xl font-bold flex relative left-[50px] justify-center cursor-default">HomeCode<h1 class="animate-pulse text-white">|</h1></h1>
  </div>

  <div class="bg-zinc-800 h-10 flex-auto flex flex-row items-center justify-between relative top-12  rounded-lg md:w-[60%] md:left-[35%] md:-top-12 "> 
  <a href="/" class=" text-white font-bold ml-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500">Home</a>
  <a href="/skills" class=" text-white font-bold cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500">Skills</a>
  <a href="/progetti" class=" text-white font-bold mr-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500">Progetti</a>
  </div>
</div>


<div class="bg-black w-[100%] h-[3800px] sm:h-[4500px] md:h-[4500px] lg:h-[4500px] rounded-3xl relative top-36 flex justify-center ">
  <div class="w-[90%] h-[5%] flex flex-col">
    <div class="bg-gradient-to-br from-gray-950 to-teal-950 flex-auto relative top-5 w-[100%] h-[30%] items-center teal-500 flex rounded-3xl ">
    <img src={alien} alt="alien" class="w-[30%] sm:w-[20%] md:w-[10%]  md:left-[4%] relative" />
    <div class="flex flex-col  md:left-[5%] relative">
    <h1  class="text-white text-4xl flex relative left-[0px] font-thin justify-center tracking-[10px] cursor-default">X-FLIES</h1>
     <p class="text-white text-sm italic">Your First Alien Space Travel</p>
    </div>
    </div>

  
    <div class="bg-gradient-to-br from-gray-950 to-teal-950 md:bg-gradient-to-br md:from-black md:to-neutral-900 h-[1%] flex-auto flex flex-row items-center justify-between relative top-12  rounded-lg md:w-[50%] md:left-[45%] md:-top-[41%] "> 
    <a href="/xflies" class=" text-white font-bold ml-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500">Home</a>
    <a href="/xflies/biglietti" class=" text-white font-bold cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500">Biglietti</a>
    <a href="/xflies/shop" class=" text-white font-bold mr-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500">X-Shop</a>
    </div>

    <div class="flex w-[100%] justify-center">

    <div class="grid grid-cols-1 grid-rows-3 justify-items-center absolute top-[8%]  w-[90%] sm:w-[70%] h-[10%] sm:h-[15%] lg:h-[15%] sm:bg-gradient-to-tr from-black to-neutral-900 rounded-3xl">
      <img src={terra} alt="hand" class="w-[35%] lg:w-[20%] relative top-[0%] animazione" />
      <p class="text-teal-500 text-3xl lg:text-5xl lg:top-[15%] relative ">Benvenuti su X!</p>
      <p class="text-white text-justify text-[13px] lg:text-[18px] absolute top-[50%] sm:top-[40%] lg:top-[50%] sm:w-[80%]">{ita.homepage.terra}</p>
    </div>

    <div class="grid grid-cols-1 grid-rows-3 justify-items-center absolute top-[27%] sm:top-[26%] w-[90%] sm:w-[70%] h-[9%] sm:h-[16%] lg:h-[16%] sm:bg-gradient-to-tr from-black to-neutral-900 rounded-3xl">
      <img src={giove} alt="hand" class="w-[35%] lg:w-[20%] relative top-[10%]" />
      <p class="text-teal-500 text-2xl lg:text-5xl md:top-[20%] md:text-3xl lg:top-[15%] relative ">Messaggio Per Gli Umani</p>
      <p class="text-white text-justify text-[13px] lg:text-[18px] absolute top-[50%] md:top-[46%]  sm:top-[40%] lg:top-[50%] sm:w-[80%]">{ita.homepage.giove}</p>
    </div>
    
    <div class="grid grid-cols-1 grid-rows-3 justify-items-center absolute top-[46%] sm:top-[45%] w-[90%] sm:w-[70%] h-[10%] sm:h-[14%] lg:h-[14%] sm:bg-gradient-to-tr from-black to-neutral-900 rounded-3xl">
      <img src={venere} alt="hand" class="w-[45%] lg:w-[25%] relative top-[0%] animazione2" />
      <p class="text-teal-500 text-2xl  lg:text-5xl md:top-[20%] md:text-3xl lg:top-[15%] relative ">L'Eccellenza dei Nostri Piloti</p>
      <p class="text-white text-justify text-[13px] lg:text-[18px] absolute top-[50%] md:top-[46%] sm:top-[40%] lg:top-[50%] sm:w-[80%]">{ita.homepage.venere}</p>
    </div>

    <div class=" grid grid-cols-1 grid-rows-3 justify-items-center absolute top-[61.5%] sm:top-[62%] w-[90%] sm:w-[70%] h-[10%] sm:h-[18%] lg:h-[18%] sm:bg-gradient-to-tr from-black to-neutral-900 rounded-3xl">
      <img src={mercurio} alt="hand" class="w-[35%] lg:w-[20%] relative top-[10%] md:top-[25%]" />
      <p class="text-teal-500 text-2xl  lg:text-5xl md:top-[20%] md:text-3xl lg:top-[15%] relative ">Licenze di Volo su XFlies</p>
      <p class="text-white text-justify text-[13px] lg:text-[18px] absolute top-[50%] md:top-[46%]  sm:top-[40%] lg:top-[50%] sm:w-[80%]">{ita.homepage.mercurio}</p>
    </div>

    <div class=" grid grid-cols-1 grid-rows-3 justify-items-center absolute top-[82.5%] sm:top-[83%] w-[90%] sm:w-[70%] h-[10%] sm:h-[14%] lg:h-[15%] sm:bg-gradient-to-tr from-black to-neutral-900 rounded-3xl">
      <img src={nettuno} alt="hand" class="w-[45%] lg:w-[25%] relative top-[0%]" />
      <p class="text-teal-500 text-3xl  lg:text-5xl md:top-[20%] md:text-3xl lg:top-[15%] relative ">L'Area 51 su XFlies</p>
      <p class="text-white text-justify text-[13px] lg:text-[18px] absolute top-[50%] md:top-[46%]  sm:top-[40%] lg:top-[50%] sm:w-[80%]">{ita.homepage.nettuno}</p>
    </div>

    </div>





   <div>

   </div> 

  


  </div>
</div>

<style>
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


