<script>
import alien from '/src/routes/xflies/ximg/alien.png';
import alien1 from '/src/routes/xflies/ximg/alien1.png';
import alien2 from '/src/routes/xflies/ximg/alien2.png';
import alien3 from '/src/routes/xflies/ximg/alien3.png';
import aliens from '/src/routes/xflies/ximg/aliens.png';
import area51 from '/src/routes/xflies/ximg/area-51.png';
import ufo from '/src/routes/xflies/ximg/ufo.png';
import hand from '/src/routes/xflies/ximg/handshake.png';
import chat from '/src/routes/xflies/ximg/chat.png';
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
      <img src={hand} alt="hand" class="w-[35%] lg:w-[20%] relative top-[0%] animazione" />
      <p class="text-teal-500 text-3xl lg:text-5xl lg:top-[15%] relative ">Benvenuti su biglietti!</p>
      <p class="text-white text-justify text-[13px] lg:text-[18px] absolute top-[50%] sm:top-[40%] lg:top-[50%] sm:w-[80%]">{ita.homepage.benvenuto}</p>
    </div>

    <div class="grid grid-cols-1 grid-rows-3 justify-items-center absolute top-[27%] sm:top-[26%] w-[90%] sm:w-[70%] h-[9%] sm:h-[16%] lg:h-[16%] sm:bg-gradient-to-tr from-black to-neutral-900 rounded-3xl">
      <img src={alien1} alt="hand" class="w-[35%] lg:w-[15%] relative top-[10%]" />
      <p class="text-teal-500 text-2xl  lg:text-5xl absolute md:top-[40%] md:text-3xl ">Messaggio Per Gli Umani</p>
      <p class="text-white text-justify text-[13px] lg:text-[18px] absolute top-[50%] md:top-[46%]  sm:top-[40%] lg:top-[50%] sm:w-[80%]">{ita.homepage.messaggio}</p>
    </div>
    
    <div class="grid grid-cols-1 grid-rows-3 justify-items-center absolute top-[46%] sm:top-[45%] w-[90%] sm:w-[70%] h-[10%] sm:h-[14%] lg:h-[14%] sm:bg-gradient-to-tr from-black to-neutral-900 rounded-3xl">
      <img src={ufo} alt="hand" class="w-[45%] lg:w-[25%] relative top-[0%] animazione2" />
      <p class="text-teal-500 text-2xl lg:text-5xl absolute md:top-[40%] md:text-3xl ">L'Eccellenza dei Nostri Piloti</p>
      <p class="text-white text-justify text-[13px] lg:text-[18px] absolute top-[50%] md:top-[46%] sm:top-[40%] lg:top-[50%] sm:w-[80%]">{ita.homepage.piloti}</p>
    </div>

    <div class=" grid grid-cols-1 grid-rows-3 justify-items-center absolute top-[61.5%] sm:top-[62%] w-[90%] sm:w-[70%] h-[10%] sm:h-[18%] lg:h-[18%] sm:bg-gradient-to-tr from-black to-neutral-900 rounded-3xl">
      <img src={alien3} alt="hand" class="w-[40%] lg:w-[25%] relative top-[10%]" />
      <p class="text-teal-500 text-2xl lg:text-5xl absolute md:top-[40%] md:text-3xl ">Licenze di Volo su XFlies</p>
      <p class="text-white text-justify text-[13px] lg:text-[18px] absolute top-[50%] md:top-[46%]  sm:top-[40%] lg:top-[50%] sm:w-[80%]">{ita.homepage.licenze}</p>
    </div>

    <div class=" grid grid-cols-1 grid-rows-3 justify-items-center absolute top-[82.5%] sm:top-[83%] w-[90%] sm:w-[70%] h-[10%] sm:h-[14%] lg:h-[15%] sm:bg-gradient-to-tr from-black to-neutral-900 rounded-3xl">
      <img src={area51} alt="hand" class="w-[45%] lg:w-[25%] relative top-[0%]" />
      <p class="text-teal-500 text-3xl lg:text-5xl absolute md:top-[40%] md:text-3xl ">L'Area 51 su XFlies</p>
      <p class="text-white text-justify text-[13px] lg:text-[18px] absolute top-[50%] md:top-[46%]  sm:top-[40%] lg:top-[50%] sm:w-[80%]">{ita.homepage.area}</p>
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

