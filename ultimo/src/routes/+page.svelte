<script>
  import io from '/src/routes/img/io.jpg';
  // @ts-ignore
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


<div class="bg-black w-auto sm:h-[1700px] h-[2300px] md:h-[1800px] lg:h-[1500px] rounded-3xl relative top-36 border-teal-500 border-b-4 border-r-4 flex justify-center ">
    <img alt="io" src={io} class="w-[25%] top-[1.5%] left-[5%] sm:w-[25%] sm:left-[5%] sm:top-[1%] md:left-[5%] md:top-[1%] rounded-full md:w-[25%] lg:w-[20%] border-2 border-teal-500 absolute"/>
    <h1 class="text-teal-500 font-bold text-4xl sm:text-6xl sm:top-[2%] lg:top-[7%] md:text-7xl absolute top-7 md:top-8 left-[35%] ">{ita.testo.titolo}</h1>

    <div class="w-[80%] sm:w-[60%] md:w-[80%] h-60 text-sm md:text-lg absolute top-[8%] sm:top-[12%] md:top-[15%] lg:top-[20%] md:left-[10%] rounded-xl grid grid-cols-1 grid-rows-4 md:grid-cols-1 md:grid-rows-4 md:gap-x-[1%] lg:grid-cols-4 lg:grid-rows-1 lg:gap-x-[1%] items-center ">
    <p class="bg-neutral-800 inline-flex rounded-lg p-1 cursor-default lg:text-base justify-center">Email: alessiosantillo31199@gmail.com</p>
    <p class="bg-neutral-800 inline-flex rounded-lg p-1 cursor-default justify-center">Telefono: 3898938262</p>
    <a href="https://github.com/Ale31199" class="bg-neutral-800 inline-flex rounded-lg p-1 cursor-pointer underline text-teal-500 justify-center">Github: Ale31199 </a>
    <a href="https://www.linkedin.com/in/alessio-santillo-422186275/" class="bg-neutral-800 inline-flex text-teal-500 rounded-lg p-1 cursor-pointer underline justify-center ">LinkedIn: Alessio Santillo</a>
    </div>

    <div class="w-[80%] h-[1800px] sm:h-[1200px] md:h-[70%] lg:h-[1000px] absolute bottom-[0%] sm:bottom-[0%] bg-gradient-to-bl from-neutral-800 to-neutral-950 border-2 border-neutral-800 grid grid-cols-1 grid-rows-3 justify-items-center text-justify rounded-t-3xl">
      
      <div class="flex flex-col items-center">
    <p class="text-justify ml-4 mr-4 text-2xl relative top-[5%] sm:top-[8%] lg:top-[5%] md:text-4xl lg:text-4xl  font-extrabold" >Chi sono?</p>
    <p class="text-justify ml-4 mr-4 absolute top-[4%] sm:top-[7%] lg:top-[7%] md font-thin text-[12px] sm:text-[13px] lg:text-[17px] md:text-[15px] w-[80%]" >{ita.testo.testo2}</p>
      </div>

      <div class="flex flex-col items-center">
    <p class="text-justify ml-4 mr-4 text-2xl absolute top-[51%] sm:top-[50%] md:top-[48%] lg:top-[47%] md:text-4xl lg:text-4xl font-extrabold" >Il Mio Percorso  </p>
    <p class="text-justify ml-4 mr-4 absolute top-[53%] sm:top-[54%] md:top-[52%] font-thin text-[12px] sm:text-[13px] lg:text-[17px] md:text-[15px] w-[80%]" >{ita.testo.testo3}</p>
      </div>

      <div class="flex flex-col items-center">
    <p class="text-justify ml-4 mr-4 text-2xl absolute top-[85%] sm:top-[82%] lg:top-[81%] md:text-4xl lg:text-4xl  font-extrabold" >Il Futuro  </p>
    <p class="text-justify ml-4 mr-4 absolute top-[87%] sm:top-[86%] font-thin text-[12px] sm:text-[13px] lg:text-[17px] md:text-[15px] w-[80%]" >{ita.testo.testo4}</p>
    </div>

  </div>

    
</div>


