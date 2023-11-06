<script>
  import alien from '/src/routes/img/alien.png';
  import spotify from '/src/routes/img/spotify.png';
  import pixel from '/src/routes/img/gamepad.png';
  import calculator from '/src/routes/img/calculator.png';
  // @ts-ignore
  import ita from '/src/routes/textITA.json';


 let alieno = false;
 let spot = false;
 let night = false;
 let cal = false;



 const scegliA=()=>{
  if(alieno){
    alieno = false
  } else {
    alieno = true
  spot = false;
  night = false;
  cal = false;
  }
 }

 const scegliS=()=>{
  if(spot){
    spot = false
  } else {
    spot = true
  alieno = false;
  night = false;
  cal = false;
  }
 }

 const scegliP=()=>{
  if(night){
    night = false
  } else {
    night = true
  spot = false;
  alieno = false;
  cal = false;
  }
 }

 const scegliC=()=>{
  if(cal){
    cal = false
  } else {
    cal = true
  spot = false;
  night = false;
  alieno = false;
  }
 }
 

let titolo = ita.progetti.benvenuto;
let descrizione = ita.progetti.desc;
let titolobottone = 'Scegli un progetto per iniziare'

// @ts-ignore
const scegliApp=(app)=>{
  switch(app){
case 'X-FLIES':
  titolo = 'X-FLIES';
  descrizione = ita.progetti.alien;
  titolobottone = 'Prova X-Flies'
  return '/xflies'
break
case 'SPOTIFY':
  titolo = 'SPOTIFY',
  descrizione = ita.progetti.spotify,
  titolobottone = 'Prova Spotify'
  return '/spotify'
break
case 'PIXEL NIGHTMARE':
  titolo = 'PIXEL NIGHTMARE',
  descrizione = ita.progetti.pixel,
  titolobottone = 'Prova Pixel Nightmare'
  return '/pixelnightmare'
break
case 'THE CALCULATOR':
  titolo = 'THE CALCULATOR',
  descrizione = ita.progetti.calculator,
  titolobottone = 'Prova The Calculator'
  return '/calcolatrice'
break
default:
  titolo = ita.progetti.benvenuti,
  descrizione = ita.progetti.desc
break
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


</script>


<div>
  <div class="bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-800 flex-auto relative top-5 w-auto h-24 items-center border-b-2 white flex rounded-3xl ">
  <h1  class="text-white text-4xl font-bold flex relative left-[68px] justify-center cursor-default">HomeCode<h1 class="effetto text-white">|</h1></h1>
  </div>
  <div class="bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-800 h-10 flex-auto flex flex-row items-center justify-between relative top-12 rounded-xl md:w-[50%] md:left-[45%] md:-top-12 "> 
  <a href="/" class=" font-bold ml-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {home ? "border-b-2 rounded-sm border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('home')}">Home</a>
  <a href="/skills" class="  font-bold cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {skills ? "border-b-2 border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('skills')}">Skills</a>
  <a href="/progetti" class="  font-bold mr-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {progetti ? "border-b-2 border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('progetti')}">Progetti</a>
  </div>
</div>


<div class="relative top-36 h-[1000px] w-[100%] flex justify-center">
<div style="padding-bottom: 10%" class="bg-black w-[100%] lg:w-[80%] sm:h-[920px] md:h-[920px] lg:h-[920px] h-[920px] relative  mb-[10%] rounded-3xl flex justify-center">
  <div class="grid grid-cols-2 grid-rows-2 gap-5 justify-center items-center w-[90%] md:w-[80%] h-[290px] absolute top-[5%] ">
    <div on:click="{()=>scegliApp('X-FLIES')}" on:click="{()=>scegliA()}" class="cursor-pointer w-[100%] h-[140px] bg-gradient-to-tr from-black to-teal-950 hover:border-2 hover:border-teal-500 flex items-center justify-center {alieno ? "rounded-full border-teal-500 border-2 transizione ombraA" : "rounded-2xl border-teal-950 border-2 transizione"}">
      <img src={alien} alt="spotify" class="w-[80%] sm:w-[50%] md:w-[30%] lg:w-[25%]" />
    </div>
    <div on:click="{()=>scegliApp('SPOTIFY')}" on:click="{()=>scegliS()}" class="cursor-pointer w-[100%] h-[140px] bg-gradient-to-tr from-black to-green-950 hover:border-2 hover:border-green-500 flex items-center justify-center  {spot ? "rounded-full border-green-500 border-2 transizione ombraS" : "rounded-2xl border-2 border-green-950 transizione"}">
      <img src={spotify} alt="spotify" class="w-[80%] sm:w-[40%] md:w-[25%] lg:w-[20%]" />
    </div>
    <div on:click="{()=>scegliApp('PIXEL NIGHTMARE')}" on:click="{()=>scegliP()}" class="cursor-pointer w-[100%] h-[140px] bg-gradient-to-tr from-black to-violet-950 hover:border-2 hover:border-violet-500  flex items-center justify-center {night ? "rounded-full border-violet-500 border-2 transizione ombraP" : "rounded-2xl border-2 border-violet-950 transizione"}">
      <img src={pixel} alt="spotify" class="w-[80%] sm:w-[50%] md:w-[30%] lg:w-[25%]" />
    </div> 
    <div on:click="{()=>scegliApp('THE CALCULATOR')}" on:click="{()=>scegliC()}" class="cursor-pointer w-[100%] h-[140px] bg-gradient-to-tr from-black to-red-950 hover:border-2 hover:border-red-500  flex items-center justify-center {cal ? "rounded-full border-red-500 border-2 transizione ombraC" : "rounded-2xl border-2 border-red-950 transizione"}">
      <img src={calculator} alt="spotify" class="w-[80%] sm:w-[40%] md:w-[25%] lg:w-[20%]" />
    </div>
  </div>

<div class="absolute top-[40%] w-[90%] md:w-[80%] h-[510px] bg-gradient-to-tr from-black to-neutral-800 border-2 border-neutral-900 rounded-2xl flex flex-col items-center justify-center" >
  <p class="font-bold text-lg sm:text-4xl absolute top-[5%]" >{titolo}</p>
  <p class="w-[80%] text-justify text-[12px] sm:text-[16px] lg:text-[18px] absolute sm:top-[16%] top-[13%]">{descrizione}</p>
  <a href="{ alieno ? scegliApp('X-FLIES') : (spot ? scegliApp('SPOTIFY') : (night ? scegliApp('PIXEL NIGHTMARE') : (cal ? scegliApp('THE CALCULATOR') : '#'))) }" class=" cursor-pointer w-[80%] md:w-[60%] h-[60px] absolute bottom-[5%] rounded-xl border-2 border-teal-500 bg-gradient-to-tr from-black to-neutral-800 text-white hover:text-teal-500 text-sm sm:text-base md:text-lg flex font-bold items-center justify-center hover:border-2 hover:border-white-900 hover:bg-gradient-to-tr hover:rounded-3xl transizione  hover:from-black hover:to-neutral-700">{titolobottone}</a>
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
    animation: infinite 1s alternate-reverse pulsa2;
  }
  @keyframes pulsa2 {
    from{box-shadow: green 0px 0px 25px 0px;}
    to{box-shadow: green 0px 0px 0px 0px;}
  }
  .ombraP{
    box-shadow: darkmagenta 0px 0px 25px 0px;
    animation: infinite 1s alternate-reverse pulsa3;
  }
  @keyframes pulsa3 {
    from{box-shadow: darkmagenta 0px 0px 25px 0px;}
    to{box-shadow: darkmagenta 0px 0px 0px 0px;}
  }
  .ombraC{
    box-shadow: darkred 0px 0px 25px 0px;
    animation: infinite 1s alternate-reverse pulsa4;
  }
  @keyframes pulsa4 {
    from{box-shadow: darkred 0px 0px 25px 0px;}
    to{box-shadow: darkred 0px 0px 0px 0px;}
  }
</style>