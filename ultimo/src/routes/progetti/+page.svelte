<script>
  import alien from '/src/routes/img/alien.png';
  import spotify from '/src/routes/img/spotify.png';
  import pixel from '/src/routes/img/gamepad.png';
  import calculator from '/src/routes/img/calculator.png';
  import ita from '/src/routes/textITA.json';
</script>


<style>
  p{
    color: white;
  }
</style>



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


<div class="bg-black w-[100%] md:h-[170%] lg:h-[280%] h-[3300px] relative top-36 rounded-3xl flex justify-center">
    <div class="grid lg:grid-cols-1 lg:grid-rows-4 w-[100%] lg:w-[80%] gap-10 sm:grid-cols-1 md:grid-cols-2">
       
      <div class="bg-neutral-900 w-[90%] md:h-[90%] lg:h-[70%] h-[90%] flex justify-center relative top-10 left-[5%] rounded-3xl hover:transition hover:ease-in-out hover:duration-1000 hover:border-solid hover:border-teal-500 hover:border-[5px]">
        <img src={alien} alt="html" class="w-[50%] md:w-[50%] lg:w-[30%] lg:left-[5%] absolute top-8" />
        <h1 class="bg-teal-500 flex flex-row w-[100%] h-[10%] absolute top-[36%] font-extrabold text-5xl justify-center items-center lg:top-[5%] lg:w-[40%] lg:right-[13%] lg:rounded-xl ">X-FLIES</h1>
        <p class="absolute top-[50%] w-[90%] text-justify lg:w-[40%] text-[13px] md:text-[15px] lg:text-xl lg:right-[13%] lg:top-[20%]">{ita.progetti.alien}</p>
        <a href="/xflies" class="absolute bottom-8 bg-neutral-950 rounded-3xl w-[80%] text-center p-3 font-semibold text-teal-500 lg:bottom-[5%] lg:w-[40%] lg:right-[13%] lg:h-[10%] text-xl hover:rounded-lg hover:bg-black duration-700 ">Prova X-Flies</a>
        </div>

        <div class="bg-neutral-900 w-[90%] md:h-[90%] lg:h-[70%] h-[90%] flex justify-center relative top-10 left-[5%] rounded-3xl hover:transition hover:ease-in-out hover:duration-1000 hover:border-solid hover:border-green-500 hover:border-[5px]">
          <img src={spotify} alt="html" class="w-[50%] md:w-[50%] lg:w-[30%] lg:left-[5%] absolute top-8" />
          <h1 class="bg-green-500 flex flex-row w-[100%] h-[10%] absolute top-[36%] font-extrabold text-5xl justify-center items-center lg:top-[5%] lg:w-[40%] lg:right-[13%] lg:rounded-xl ">SPOTIFY</h1>
          <p class="absolute top-[50%] w-[90%] text-justify lg:w-[40%] text-[13px] md:text-[15px]  lg:text-xl lg:right-[13%] lg:top-[20%]">{ita.progetti.spotify}</p>
          <a href="/spotify" class="absolute bottom-8 bg-neutral-950 rounded-3xl w-[80%] text-center p-3 font-semibold text-teal-500 lg:bottom-[5%] lg:w-[40%] lg:right-[13%] lg:h-[10%] text-xl hover:rounded-lg hover:bg-black duration-700 ">Prova Spotify</a>
          </div>

          <div class="bg-neutral-900 w-[90%] md:h-[90%] lg:h-[70%] h-[90%] flex justify-center relative top-10 left-[5%] rounded-3xl hover:transition hover:ease-in-out hover:duration-1000 hover:border-solid hover:border-violet-900 hover:border-[5px]">
            <img src={pixel} alt="html" class="w-[50%] md:w-[50%] lg:w-[30%] lg:left-[5%] absolute top-8" />
            <h1 class="bg-violet-900 flex flex-row w-[100%] h-[10%] absolute top-[36%] font-extrabold text-3xl justify-center items-center lg:top-[5%] lg:w-[40%] lg:right-[13%] lg:rounded-xl md:text-4xl lg:text-[40px] ">PIXEL NIGHTMARE</h1>
            <p class="absolute top-[50%] w-[90%] text-justify lg:w-[40%] text-[13px] md:text-[15px]  lg:text-xl lg:right-[13%] lg:top-[20%]">{ita.progetti.pixel}</p>
            <a href="/pixelnightmare" class="absolute bottom-8 bg-neutral-950 rounded-3xl w-[80%] text-center p-3 font-semibold text-teal-500 lg:bottom-[5%] lg:w-[40%] lg:right-[13%] lg:h-[10%] text-xl hover:rounded-lg hover:bg-black duration-700 ">Prova Pixel Nightmare</a>
            </div>

            <div class="bg-neutral-900 w-[90%] md:h-[90%] lg:h-[70%] h-[90%] flex justify-center relative top-10 left-[5%] rounded-3xl hover:transition hover:ease-in-out hover:duration-1000 hover:border-solid hover:border-red-700 hover:border-[5px]">
              <img src={calculator} alt="html" class="w-[50%] md:w-[50%] lg:w-[30%] lg:left-[5%] absolute top-8" />
              <h1 class="bg-red-700 flex flex-row w-[100%] h-[10%] absolute top-[36%] font-extrabold text-4xl justify-center items-center lg:top-[5%] lg:w-[40%] lg:right-[13%] lg:rounded-xl ">CALCULATOR</h1>
              <p class="absolute top-[50%] w-[90%] text-justify lg:w-[40%] text-[13px] md:text-[15px]  lg:text-[18px] lg:right-[13%] lg:top-[20%]">{ita.progetti.calculator}</p>
              <a href="/calcolatrice" class="absolute bottom-8 bg-neutral-950 rounded-3xl w-[80%] text-center p-3 font-semibold text-teal-500 lg:bottom-[5%] lg:w-[40%] lg:right-[13%] lg:h-[10%] text-xl hover:rounded-lg hover:bg-black duration-700 ">Prova Calculator</a>
              </div>
  
        
              
  

    </div>  
</div>
