<script>
import rps from '/src/routes/img/rpslogo.png';
import sasso from './imma/stone.png';
import carta from './imma/paper.png';
import forbici from './imma/scissors.png';
//@ts-ignore
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






	let result = '';

	$: pc = [$lingua.progetti.carta, $lingua.progetti.forbice, $lingua.progetti.sasso];

	$: rock = $lingua.progetti.sasso
	$: paper = $lingua.progetti.carta;
	$: scissors= $lingua.progetti.forbice;
  let wins = 0;
  let lose = 0;
  let tie = 0;
	
	const RocK=()=>{
		let pick = RandonPick()
		if (pick === $lingua.progetti.sasso){
			result = `${$lingua.progetti.prendi} ${rock}, ${$lingua.progetti.prendipc} ${rock}, ${$lingua.progetti.pari}`
      tie += 1
		} else if (pick === $lingua.progetti.carta){
			result =` ${$lingua.progetti.prendi} ${rock}, ${$lingua.progetti.prendipc} ${paper}, ${$lingua.progetti.perso}`
      lose += 1
		} else if (pick === $lingua.progetti.forbice){
			result = `${$lingua.progetti.prendi} ${rock}, ${$lingua.progetti.prendipc} ${scissors}, ${$lingua.progetti.vinto}`
      wins += 1
		}
	}

	const PapeR=()=>{
		let pick = RandonPick()
		if (pick === $lingua.progetti.carta){
			result = `${$lingua.progetti.prendi} ${paper}, ${$lingua.progetti.prendipc} ${paper}, ${$lingua.progetti.pari}`
      tie += 1
		} else if (pick === $lingua.progetti.sasso){
			result = `${$lingua.progetti.prendi} ${paper}, ${$lingua.progetti.prendipc} ${rock}, ${$lingua.progetti.vinto}`
      wins += 1
		} else if (pick === $lingua.progetti.forbice){
			result = `${$lingua.progetti.prendi} ${paper}, ${$lingua.progetti.prendipc} ${scissors}, ${$lingua.progetti.perso}`
      lose += 1
		}
	}

	const SciS=()=>{
		let pick = RandonPick()
		if (pick === $lingua.progetti.forbice){
			result = `${$lingua.progetti.prendi} ${scissors}, ${$lingua.progetti.prendipc} ${scissors}, ${$lingua.progetti.pari}`
      tie += 1
		} else if (pick === $lingua.progetti.carta){
			result = `${$lingua.progetti.prendi} ${scissors}, ${$lingua.progetti.prendipc} ${paper}, ${$lingua.progetti.vinto}`
      wins += 1
		} else if (pick === $lingua.progetti.sasso){
			result = `${$lingua.progetti.prendi} ${scissors}, ${$lingua.progetti.prendipc} ${rock}, ${$lingua.progetti.perso}`
      lose += 1
		}
	}

	const RandonPick=()=>{
		const random = Math.floor(Math.random()* pc.length)
		return pc[random]
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

<div class="relative top-36 h-[350px] w-[100%] flex justify-center">
<div style="padding-bottom: 10%" class="bg-black border-2 border-neutral-800 w-[330px] sm:w-[600px] md:scale-125 sm:h-[350px] md:h-[350px] h-[320px] relative  mb-[10%] rounded-3xl flex justify-center">
  <h1 class="text-3xl sm:text-4xl text-white font-bold absolute top-[20px] sm:top-[20px]">Rock Paper Scissors</h1>

<div class="w-[80%] h-[200px] grid gap-7 sm:gap-8 absolute top-[30px] sm:top-[50px] grid-cols-3 grid-rows-1 justify-items-center items-center ">

  <div on:click={RocK}>
    <img src={sasso} alt="sasso" class="cursor-pointer w-[220px] scale-125 sm:scale-100 sm:w-[150px] bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-900 hover:to-neutral-700 hover:border-neutral-700 p-2 md:p-6 rounded-3xl md:rounded-[55px] transition-[2s] hover:rounded-[35px]" />
  </div>

  <div on:click={PapeR}>
    <img src={carta} alt="carta" class="cursor-pointer w-[220px] scale-125 sm:scale-100 sm:w-[150px] bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-900 hover:to-neutral-700 hover:border-neutral-700 p-2 md:p-6 rounded-3xl md:rounded-[55px] transition-[2s] hover:rounded-[35px]"  />
  </div>

  <div on:click={SciS}>
    <img src={forbici} alt="forbici" class="cursor-pointer w-[220px] scale-125 sm:scale-100 sm:w-[150px] bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-900 hover:to-neutral-700 hover:border-neutral-700 p-2 md:p-6 rounded-3xl md:rounded-[55px] transition-[2s] hover:rounded-[35px]" />
  </div>

</div>


<div class="w-[100%] flex justify-center text-center">
  <div class="flex w-[80%] sm:w-[70%] text-sm justify-between text-white absolute bottom-[80px] sm:bottom-[74px]">
    <p class="bg-green-900 p-1 rounded-lg text-white">{$lingua.progetti.vinci} {wins}</p>
    <p class="bg-neutral-800 p-1 rounded-lg text-white">{$lingua.progetti.pareggi} {tie}</p>
    <p class="bg-red-900 p-1 rounded-lg text-white">{$lingua.progetti.perdi} {lose}</p>
  </div>
<p class="text-white absolute text-xs h-[50px] sm:h-[30px] w-[90%] sm:w-[70%] text-center bottom-5 bg-violet-950 rounded-md p-2">{result}</p>
</div>

</div>
</div>

