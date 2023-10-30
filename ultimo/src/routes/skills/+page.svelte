<script>
  import html from '/src/routes/img/html-5.png';
  import css from '/src/routes/img/css-3.png';
  import js from '/src/routes/img/js.png';
  import react from '/src/routes/img/atom.png';
  import php from '/src/routes/img/php.png';
  import sql from '/src/routes/img/mysql.png';
  import github from '/src/routes/img/github.png';
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


<div class="bg-black w-[100%] md:h-[280%] h-[5300px] relative top-36 rounded-3xl flex justify-center">
    <div class="grid lg:grid-cols-3 lg:grid-rows-3 w-[100%] gap-10 sm:grid-cols-1 md:grid-cols-2">

      <div class="bg-neutral-900 w-[90%] md:h-[90%] h-[90%] flex justify-center relative top-10 left-[5%] rounded-3xl hover:transition hover:ease-in-out hover:duration-1000 hover:border-solid hover:border-orange-600 hover:border-[5px]">
      <img src={html} alt="html" class="w-[60%] md:w-[40%] lg:w-[50%] absolute top-8" />
      <h1 class="bg-orange-600 flex flex-row w-[100%] h-[10%] absolute top-[36%] font-extrabold text-5xl justify-center items-center">HTML</h1>
      <p class="absolute top-[50%] w-[90%] text-justify">{ita.skills.html}</p>
      <h1 class="absolute bottom-8 bg-neutral-950 rounded-3xl w-[80%] text-center p-3 font-semibold text-teal-500">{ita.skills.ma}</h1>
      </div>

      <div class="bg-neutral-900 h-[90%] w-[90%] md:h-[90%] flex justify-center relative top-10 left-[5%] rounded-3xl hover:transition hover:ease-in-out hover:duration-1000 hover:border-solid hover:border-blue-600 hover:border-[5px]">
        <img src={css} alt="html" class="w-[60%] md:w-[40%] lg:w-[50%] absolute top-8" />
        <h1 class="bg-blue-600 flex flex-row w-[100%] h-[10%] absolute top-[36%] font-extrabold text-5xl justify-center items-center">CSS</h1>
        <p class="absolute top-[50%] w-[90%] text-justify">{ita.skills.css}</p>
        <h1 class="absolute bottom-8 bg-neutral-950 rounded-3xl w-[80%] text-center p-3 font-semibold text-teal-500">{ita.skills.ma}</h1>
        </div>

        <div class="bg-neutral-900 h-[90%] w-[90%] md:h-[90%] flex justify-center relative top-10 left-[5%] rounded-3xl hover:transition hover:ease-in-out hover:duration-1000 hover:border-solid hover:border-yellow-500 hover:border-[5px]">
          <img src={js} alt="html" class="w-[60%] md:w-[40%] lg:w-[50%] absolute top-8" />
          <h1 class="bg-yellow-500 flex flex-row w-[100%] h-[10%] absolute top-[36%] font-extrabold text-[40px] justify-center items-center">JAVASCRIPT</h1>
          <p class="absolute top-[50%] w-[90%] text-justify">{ita.skills.js}</p>
          <h1 class="absolute bottom-8 bg-neutral-950 rounded-3xl w-[80%] text-center p-3 font-semibold text-teal-500">{ita.skills.m}</h1>
          </div>
          
          <div class="bg-neutral-900 h-[90%] w-[90%] md:h-[90%] flex justify-center relative top-10 left-[5%] rounded-3xl hover:transition hover:ease-in-out hover:duration-1000 hover:border-solid hover:border-blue-600 hover:border-[5px]">
            <img src={react} alt="html" class="w-[60%] md:w-[40%] lg:w-[50%] absolute top-8" />
            <h1 class="bg-blue-600 flex flex-row w-[100%] h-[10%] absolute top-[36%] font-extrabold text-5xl justify-center items-center">REACT</h1>
            <p class="absolute top-[50%] w-[90%] text-justify">{ita.skills.react}</p>
            <h1 class="absolute bottom-8 bg-neutral-950 rounded-3xl w-[80%] text-center p-3 font-semibold text-teal-500">{ita.skills.m}</h1>
            </div>

            <div class="bg-neutral-900 h-[90%] w-[90%] md:h-[90%] flex justify-center relative top-10 left-[5%] rounded-3xl hover:transition hover:ease-in-out hover:duration-1000 hover:border-solid hover:border-violet-400 hover:border-[5px]">
              <img src={php} alt="html" class="w-[60%] md:w-[40%] lg:w-[50%] absolute top-8" />
              <h1 class="bg-violet-400 flex flex-row w-[100%] h-[10%] absolute top-[36%] font-extrabold text-5xl justify-center items-center">PHP</h1>
              <p class="absolute top-[50%] w-[90%] text-justify">{ita.skills.php}</p>
              <h1 class="absolute bottom-8 bg-neutral-950 rounded-3xl w-[80%] text-center p-3 font-semibold text-teal-500">{ita.skills.b}</h1>
              </div>

              <div class="bg-neutral-900 h-[90%] w-[90%] md:h-[90%] flex justify-center relative top-10 left-[5%] rounded-3xl hover:transition hover:ease-in-out hover:duration-1000 hover:border-solid hover:border-teal-300 hover:border-[5px]">
                <img src={sql} alt="html" class="w-[60%] md:w-[40%] lg:w-[50%] absolute top-8" />
                <h1 class="bg-teal-300 flex flex-row w-[100%] h-[10%] absolute top-[36%] font-extrabold text-5xl justify-center items-center">MYSQL</h1>
                <p class="absolute top-[50%] w-[90%] text-justify">{ita.skills.sql}</p>
                <h1 class="absolute bottom-8 bg-neutral-950 rounded-3xl w-[80%] text-center p-3 font-semibold text-teal-500">{ita.skills.b}</h1>
                </div>

                <div class="bg-neutral-900 h-[90%] w-[90%] md:h-[90%] flex justify-center relative top-10 left-[5%] rounded-3xl hover:transition hover:ease-in-out hover:duration-1000 hover:border-solid hover:border-white hover:border-[5px]">
                  <img src={github} alt="html" class="w-[60%] md:w-[40%] lg:w-[50%] absolute top-8 invert" />
                  <h1 class="bg-white flex flex-row w-[100%] h-[10%] absolute top-[36%] font-extrabold text-5xl justify-center items-center">GITHUB</h1>
                  <p class="absolute top-[50%] w-[90%] text-justify">{ita.skills.github}</p>
                  <h1 class="absolute bottom-8 bg-neutral-950 rounded-3xl w-[80%] text-center p-3 font-semibold text-teal-500">{ita.skills.bm}</h1>
                  </div>




    </div>  
</div>
