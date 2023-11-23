<script>
  import alien from '/src/routes/img/alien.png';
  import spotify from '/src/routes/img/spotify.png';
  import pixel from '/src/routes/img/gamepad.png';
  import calculator from '/src/routes/img/calculator.png';
  import rps from '/src/routes/img/rpslogo.png';
  import list from '/src/routes/img/to-do-list.png';
  // @ts-ignore
  import ita from '/src/routes/textITA.json';
  // @ts-ignore
  import eng from '/src/routes/textENG.json';

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



//mettere un reload per la traduzione che aggiorna il testo

 let alieno = false;
 let spot = false;
 let night = false;
 let cal = false;
 let rp = false;
 let lis = false;



 const scegliA=()=>{
  alieno = true
  spot = false;
  night = false;
  cal = false;
  rp = false;
  lis = false;
  }
 

 const scegliS=()=>{
    spot = true
  alieno = false;
  night = false;
  cal = false;
  rp = false;
  lis = false;
  }

 const scegliP=()=>{
    night = true
  spot = false;
  alieno = false;
  cal = false;
  rp = false;
  lis = false;
  }

 const scegliC=()=>{
    cal = true
  spot = false;
  night = false;
  alieno = false;
  rp = false;
  lis = false;
  }

  const scegliR=()=>{
    rp = true
    lis= false
    night = false
  spot = false;
  alieno = false;
  cal = false;
  }

 const scegliL=()=>{
  lis = true
  rp =false
    cal = false
  spot = false;
  night = false;
  alieno = false;
  }
 





$: titolo = $lingua.progetti.benvenuto;
$: descrizione = $lingua.progetti.desc;
$: titolobottone = $lingua.progetti.scegli



// @ts-ignore
const scegliApp=(app)=>{
  switch(app){
case 'X-FLIES':
  titolo = 'X-FLIES';
  descrizione = $lingua.progetti.alien;
  titolobottone = $lingua.progetti.provaX
  return '/xflies'
break
case 'SPOTIFY':
  titolo = 'SPOTIFY',
  descrizione = $lingua.progetti.spotify,
  titolobottone = $lingua.progetti.provaS
  return '/spotify'
break
case 'PIXEL NIGHTMARE':
  titolo = 'PIXEL NIGHTMARE',
  descrizione = $lingua.progetti.pixel,
  titolobottone = $lingua.progetti.provaP
  return '/pixelnightmare'
break
case 'THE CALCULATOR':
  titolo = 'THE CALCULATOR',
  descrizione = $lingua.progetti.calculator,
  titolobottone = $lingua.progetti.provaC
  return '/calcolatrice'
break
case 'RPS':
  titolo = 'ROCK PAPER SCISSORS',
  descrizione = $lingua.progetti.rpss,
  titolobottone = $lingua.progetti.provaR
  return '/rps'
break
case 'TODO':
  titolo = 'TO DO LIST',
  descrizione = $lingua.progetti.tod,
  titolobottone = $lingua.progetti.provaL
  return '/list'
break
default:
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
  <h1  class="text-white text-4xl font-bold flex relative left-[68px] justify-center cursor-default">HomeCode </h1>
  </div>
  <div class="bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-800 h-10 flex-auto flex flex-row items-center justify-between relative top-12 rounded-xl md:w-[50%] md:left-[45%] md:-top-12 "> 
  <a href="/" class=" font-bold ml-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {home ? "border-b-2 rounded-sm border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('home')}">Home</a>
  <a href="/skills" class="  font-bold cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {skills ? "border-b-2 border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('skills')}">Skills</a>
  <a href="/progetti" class="  font-bold mr-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {progetti ? "border-b-2 border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('progetti')}">{$lingua.testo.progetti}</a>
  </div>
</div>

<select on:change="{(event)=>TraduciPagina(event.target.value)}" class="w-[100px] absolute top-[30%] sm:top-[20%]  md:top-[13%] bg-gradient-to-tr p-2 from-white to-neutral-300 border-2 border-neutral-300 rounded-2xl invert">
  <option value="ita">Italiano</option>
  <option value="eng">English</option>
  </select>

<div class="relative top-36 h-[1100px] w-[100%] flex justify-center">
<div style="padding-bottom: 10%" class="bg-black w-[100%] lg:w-[80%] sm:h-[920px] md:h-[920px] lg:h-[920px] h-[1000px] relative  mb-[10%] rounded-3xl flex justify-center">
  <div class="grid grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 gap-5 gap-y-[150px] sm:gap-y-2 justify-center items-center w-[90%] md:w-[80%] h-[290px] absolute top-[8%] sm:top-[5%] ">
    <div on:click="{()=>scegliApp('X-FLIES')}" on:click="{()=>scegliA()}" class=" sfoca cursor-pointer w-[100%] h-[140px] bg-gradient-to-tr from-black to-teal-950 hover:border-2 hover:border-teal-500 flex items-center justify-center {alieno ? "rounded-full border-teal-500 border-2 transizione ombraA" : "rounded-2xl border-teal-950 border-2 transizione"}">
      <img src={alien} alt="spotify" class="w-[110px] sm:w-[140px]" />
    </div>
    <div on:click="{()=>scegliApp('SPOTIFY')}" on:click="{()=>scegliS()}" class="sfoca2 cursor-pointer w-[100%] h-[140px] bg-gradient-to-tr from-black to-green-950 hover:border-2 hover:border-green-500 flex items-center justify-center  {spot ? "rounded-full border-green-500 border-2 transizione ombraS" : "rounded-2xl border-2 border-green-950 transizione"}">
      <img src={spotify} alt="spotify" class="w-[110px] sm:w-[120px]" />
    </div>
    <div on:click="{()=>scegliApp('PIXEL NIGHTMARE')}" on:click="{()=>scegliP()}" class="sfoca3 cursor-pointer w-[100%] h-[140px] bg-gradient-to-tr from-black to-violet-950 hover:border-2 hover:border-violet-500  flex items-center justify-center {night ? "rounded-full border-violet-500 border-2 transizione ombraP" : "rounded-2xl border-2 border-violet-950 transizione"}">
      <img src={pixel} alt="spotify" class="w-[110px] sm:w-[140px]" />
    </div>
    <div on:click="{()=>scegliApp('TODO')}" on:click="{()=>scegliL()}" class="sfoca4 cursor-pointer w-[100%] h-[140px] bg-gradient-to-tr from-black to-yellow-800 hover:border-2 hover:border-yellow-500  flex items-center justify-center {lis ? "rounded-full border-yellow-500 border-2 transizione ombraL" : "rounded-2xl border-2 border-yellow-800 transizione"}">
      <img src={list} alt="spotify" class="w-[110px] sm:w-[120px]" />
    </div>
    <div on:click="{()=>scegliApp('RPS')}" on:click="{()=>scegliR()}" class="sfoca5 cursor-pointer w-[100%] h-[140px] bg-gradient-to-tr from-black to-orange-800 hover:border-2 hover:border-orange-500  flex items-center justify-center {rp ? "rounded-full border-orange-500 border-2 transizione ombraR" : "rounded-2xl border-2 border-orange-800 transizione"}">
      <img src={rps} alt="spotify" class="w-[110px] -rotate-90 sm:w-[120px]" />
    </div>
    <div on:click="{()=>scegliApp('THE CALCULATOR')}" on:click="{()=>scegliC()}" class="sfoca6 cursor-pointer w-[100%] h-[140px] bg-gradient-to-tr from-black to-red-950 hover:border-2 hover:border-red-500  flex items-center justify-center {cal ? "rounded-full border-red-500 border-2 transizione ombraC" : "rounded-2xl border-2 border-red-950 transizione"}">
      <img src={calculator} alt="spotify" class="w-[110px] sm:w-[120px]" />
    </div>
  </div>

<div class="sfoca7 absolute top-[48%] sm:top-[40%] w-[90%] md:w-[80%] h-[510px] bg-gradient-to-tr from-black to-neutral-800 border-2 border-neutral-900 rounded-2xl flex flex-col items-center justify-center" >
  <p class="font-bold text-lg sm:text-4xl absolute top-[5%]" >{titolo}</p>
  <p class="w-[80%] text-justify text-[12px] sm:text-[16px] lg:text-[18px] absolute sm:top-[16%] top-[13%]">{descrizione}</p>
  <a href="{ alieno ? scegliApp('X-FLIES') : (lis ? scegliApp('TODO') : (rp ? scegliApp('RPS') : (spot ? scegliApp('SPOTIFY') : (night ? scegliApp('PIXEL NIGHTMARE') : (cal ? scegliApp('THE CALCULATOR') : '#'))))) }" class=" cursor-pointer w-[80%] md:w-[60%] h-[60px] absolute bottom-[5%] rounded-xl border-2 border-teal-500 bg-gradient-to-tr from-black to-neutral-800 text-white hover:text-teal-500 text-sm sm:text-base md:text-lg flex font-bold items-center justify-center hover:border-2 hover:border-white-900 hover:bg-gradient-to-tr hover:rounded-3xl transizione  hover:from-black hover:to-neutral-700">{titolobottone}</a>
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
    box-shadow: teal 0px 0px 15px 0px;
    animation: infinite 1s alternate-reverse pulsa;
  }
  @keyframes pulsa {
    from{box-shadow: teal 0px 0px 15px 0px;}
    to{box-shadow: teal 0px 0px 0px 0px;}
  }
  .ombraS{
    box-shadow: green 0px 0px 15px 0px;
    animation: infinite 1s alternate-reverse pulsa2;
  }
  @keyframes pulsa2 {
    from{box-shadow: green 0px 0px 15px 0px;}
    to{box-shadow: green 0px 0px 0px 0px;}
  }
  .ombraP{
    box-shadow: darkmagenta 0px 0px 15px 0px;
    animation: infinite 1s alternate-reverse pulsa3;
  }
  @keyframes pulsa3 {
    from{box-shadow: darkmagenta 0px 0px 15px 0px;}
    to{box-shadow: darkmagenta 0px 0px 0px 0px;}
  }
  .ombraC{
    box-shadow: darkred 0px 0px 15px 0px;
    animation: infinite 1s alternate-reverse pulsa4;
  }
  @keyframes pulsa4 {
    from{box-shadow: darkred 0px 0px 15px 0px;}
    to{box-shadow: darkred 0px 0px 0px 0px;}
  }

  .ombraR{
    box-shadow: darkorange 0px 0px 15px 0px;
    animation: infinite 1s alternate-reverse pulsa4;
  }
  @keyframes pulsa4 {
    from{box-shadow: darkorange 0px 0px 15px 0px;}
    to{box-shadow: darkorange 0px 0px 0px 0px;}
  }

  .ombraL{
    box-shadow: rgb(143, 143, 0) 0px 0px 15px 0px;
    animation: infinite 1s alternate-reverse pulsa4;
  }
  @keyframes pulsa4 {
    from{box-shadow: rgb(143, 143, 0) 0px 0px 15px 0px;}
    to{box-shadow: rgb(143, 143, 0) 0px 0px 0px 0px;}
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