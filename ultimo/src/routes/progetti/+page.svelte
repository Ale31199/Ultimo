<script>
  import alien from '/src/routes/img/alien.png';
  import spotify from '/src/routes/img/spotify.png';
  import pixel from '/src/routes/img/gamepad.png';
  import calculator from '/src/routes/img/calculator.png';
  import ita from '/src/routes/textITA.json';


 let alieno = false;
 let spot = false;
 let night = false;
 let cal = false;


 const selezionaA=()=>{
  if(alieno){
    alieno = false
  } else {
    alieno = true
  spot = false;
  night = false;
  cal = false;
  }
 }

 const selezionaS=()=>{
  if(spot){
    spot = false
  } else {
    spot = true
  alieno = false;
  night = false;
  cal = false;
  }
 }

 const selezionaP=()=>{
  if(night){
    night = false
  } else {
    night = true
  spot = false;
  alieno = false;
  cal = false;
  }
 }

 const selezionaC=()=>{
  if(cal){
    cal = false
  } else {
    cal = true
  spot = false;
  night = false;
  alieno = false;
  }
 }

let titolo = ita.progetti.benvenuto
let descrizione = ita.progetti.desc;
let titolobottone = 'ciao'
let linkk = ''

const scegliApp=()=>{
  if (titolo === ita.progetti.benvenuto){
    titolo = 'X-FLIES'
    descrizione = ita.progetti.alien;
  }
  if (titolo === ita.progetti.benvenuto){
    titolo = 'SPOTIFY'
    descrizione = ita.progetti.spotify;
  }
  if (titolo === ita.progetti.benvenuto){
    titolo = 'PIXEL NIGHTMARE'
    descrizione = ita.progetti.pixel;
  }
  if (titolo === ita.progetti.benvenuto){
    titolo = 'CALCULATOR'
    descrizione = ita.progetti.calculator;
  }
}


</script>


<style>
  p{
    color: white;
  }
  .transizione{
    transition: 1.3s;
  }

  .ombraA{
    box-shadow: teal 0px 0px 25px 0px;
    animation: infinite 1s alternate-reverse pulsa;
  }
  @keyframes pulsa {
    from{box-shadow: teal 0px 0px 25px 0px;}
    to{box-shadow: teal 0px 0px 0px 0px;}
  }
  .ombraS{
    box-shadow: green 0px 0px 25px 0px;
    animation: infinite 1s alternate-reverse pulsa;
  }
  @keyframes pulsa {
    from{box-shadow: green 0px 0px 25px 0px;}
    to{box-shadow: green 0px 0px 0px 0px;}
  }
  .ombraP{
    box-shadow: purple 0px 0px 25px 0px;
    animation: infinite 1s alternate-reverse pulsa;
  }
  @keyframes pulsa {
    from{box-shadow: purple 0px 0px 25px 0px;}
    to{box-shadow: purple 0px 0px 0px 0px;}
  }
  .ombraC{
    box-shadow: darkred 0px 0px 25px 0px;
    animation: infinite 1s alternate-reverse pulsa;
  }
  @keyframes pulsa {
    from{box-shadow: darkred 0px 0px 25px 0px;}
    to{box-shadow: darkred 0px 0px 0px 0px;}
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


<div class="relative top-36 h-[1000px] w-[100%]">
<div style="padding-bottom: 10%" class="bg-black w-[100%] sm:h-[230%] md:h-[170%] lg:h-[280%] h-[920px] relative  mb-[10%] rounded-3xl flex justify-center">
  <div class="grid grid-cols-2 grid-rows-2 gap-5 justify-center items-center w-[90%] h-[290px] absolute top-[5%] ">
    <div on:click="{selezionaA}" on:click="{scegliApp}" class=" w-[100%] h-[140px] bg-gradient-to-tr from-black to-teal-950 hover:border-2 hover:border-teal-500 flex items-center justify-center {alieno ? "rounded-full border-teal-500 border-2 transizione ombraA" : "rounded-2xl border-teal-950 border-2 transizione"}">
      <img src={alien} alt="spotify" class="w-[80%]" />
    </div>
    <div on:click="{selezionaS}" class=" w-[100%] h-[140px] bg-gradient-to-tr from-black to-green-950 hover:border-2 hover:border-green-500 flex items-center justify-center  {spot ? "rounded-full border-green-500 border-2 transizione ombraS" : "rounded-2xl border-2 border-green-950 transizione"}">
      <img src={spotify} alt="spotify" class="w-[80%]" />
    </div>
    <div on:click="{selezionaP}" class=" w-[100%] h-[140px] bg-gradient-to-tr from-black to-violet-950 hover:border-2 hover:border-violet-500  flex items-center justify-center {night ? "rounded-full border-violet-500 border-2 transizione ombraP" : "rounded-2xl border-2 border-violet-950 transizione"}">
      <img src={pixel} alt="spotify" class="w-[80%]" />
    </div> 
    <div on:click="{selezionaC}" class=" w-[100%] h-[140px] bg-gradient-to-tr from-black to-red-950 hover:border-2 hover:border-red-500  flex items-center justify-center {cal ? "rounded-full border-red-500 border-2 transizione ombraC" : "rounded-2xl border-2 border-red-950 transizione"}">
      <img src={calculator} alt="spotify" class="w-[80%]" />
    </div>
  </div>

<div class="absolute top-[40%] w-[90%] h-[510px] bg-gradient-to-tr from-black to-neutral-800 border-2 border-neutral-900 rounded-2xl flex flex-col items-center justify-center" >
  <p class="font-bold text-lg absolute top-[5%]" >{titolo}</p>
  <p class="w-[80%] text-justify text-[12px] absolute top-[13%]">{descrizione}</p>
  <a class="w-[80%] h-[60px] absolute bottom-[5%] rounded-xl bg-white text-black hover:text-white flex font-bold items-center justify-center hover:border-2 hover:border-teal-500 hover:bg-gradient-to-tr hover:rounded-3xl transizione  hover:from-black hover:to-neutral-800">{titolobottone}</a>
</div>






</div>
</div>

<!--
{alieno ? "rounded-full border-teal-500" : "rounded-2xl border-teal-950 hover:border-teal-500"}
-->