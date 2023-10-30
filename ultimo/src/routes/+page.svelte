<script>
  import io from '/src/routes/img/io.jpg';
  import ita from '/src/routes/textITA.json';
</script>

<style>
  p{
    color: white;
  }
</style>


<div>
    <div class="bg-black flex-auto relative top-5 w-auto h-24 items-center border-b-2 white flex rounded-3xl ">
    <h1  class="text-white text-4xl font-bold flex relative left-2 justify-center cursor-default">HomeCode<h1 class="animate-pulse text-white">|</h1></h1>
    </div>

    <div class="bg-zinc-800 h-10 flex-auto flex flex-row items-center justify-between relative top-12  rounded-lg md:w-[60%] md:left-[35%] md:-top-12 "> 
    <a href="/" class=" text-white font-bold ml-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500">Home</a>
    <a href="/skills" class=" text-white font-bold cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500">Skills</a>
    <a href="/progetti" class=" text-white font-bold mr-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500">Progetti</a>
    </div>
</div>


<div class="bg-black w-auto h-[3000px] md:h-[2300px] lg:h-[1800px] rounded-3xl relative top-36 border-teal-500 border-b-4 border-r-4 flex justify-center ">
    <img alt="io" src={io} class="w-[30%] md:left-[5%] md:top-[1%] rounded-full md:w-[25%] lg:w-[20%] border-b-4 border-teal-500 absolute left-0"/>
    <h1 class="text-teal-500 font-bold text-3xl md:text-5xl absolute top-2 md:top-8 left-[35%] ">{ita.testo.titolo}</h1>

    <div class="w-[80%] h-60 absolute top-[7%] md:top-[15%] lg:top-[16%] md:left-[5%] md:w-[90%] rounded-xl grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 md:gap-x-[1%] lg:grid-cols-4 lg:grid-rows-1 lg:gap-x-[1%] items-center ">
    <p class="bg-neutral-800 inline-flex rounded-lg p-1 cursor-default justify-center">Email: alessiosantillo31199@gmail.com</p>
    <p class="bg-neutral-800 inline-flex rounded-lg p-1 cursor-default justify-center">Telefono: 3898938262</p>
    <a href="https://github.com/Ale31199" class="bg-neutral-800 inline-flex rounded-lg p-1 cursor-pointer underline text-teal-500 justify-center">Github: Ale31199 </a>
    <a href="https://www.linkedin.com/in/alessio-santillo-422186275/" class="bg-neutral-800 inline-flex text-teal-500 rounded-lg p-1 cursor-pointer underline justify-center ">LinkedIn: Alessio Santillo</a>
    </div>

    <div class="w-[80%] h-[80%] md:h-[70%] absolute bottom-[0%] bg-neutral-900 flex justify-center text-justify rounded-t-3xl">
    <p class="text-justify ml-4 mr-4 text-2xl relative top-[4%] font-extrabold" >Chi sono?</p>
    <p class="text-justify ml-4 mr-4 absolute top-[8%] font-thin text-sm md:text-lg w-[80%]" >{ita.testo.testo2}</p>
    <p class="text-justify ml-4 mr-4 text-2xl absolute top-[49%] font-extrabold" >Il Mio Percorso  </p>
    <p class="text-justify ml-4 mr-4 absolute top-[53%] font-thin text-sm md:text-lg w-[80%]" >{ita.testo.testo3}</p>
    <p class="text-justify ml-4 mr-4 text-2xl absolute top-[83%]  font-extrabold" >Il Futuro  </p>
    <p class="text-justify ml-4 mr-4 absolute top-[87%] font-thin text-sm md:text-lg w-[80%]" >{ita.testo.testo4}</p>
    </div>

    
</div>


