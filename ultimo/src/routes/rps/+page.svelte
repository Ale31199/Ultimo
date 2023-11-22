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

	let pc = ['Rock', 'Paper', 'Scissors'];

	const rock = 'Rock'
	const paper = 'Paper';
	const scissors= 'Scissors';
	
	const RocK=()=>{
		let pick = RandonPick()
		if (pick === 'Rock'){
			result = `You picked ${rock}, pc picked ${rock} it's a tie.`
		} else if (pick === 'Paper'){
			result = `You picked ${rock}, pc picked ${paper}, you lose.`
		} else if (pick === 'Scissors'){
			result = `You picked ${rock}, pc picked ${scissors}, you win.`
		}
	}

	const PapeR=()=>{
		let pick = RandonPick()
		if (pick === 'Paper'){
			result = `You picked ${paper}, pc picked ${paper} it's a tie.`
		} else if (pick === 'Rock'){
			result = `You picked ${paper}, pc picked ${rock}, you win.`
		} else if (pick === 'Scissors'){
			result = `You picked ${paper}, pc picked ${scissors}, you lose.`
		}
	}

	const SciS=()=>{
		let pick = RandonPick()
		if (pick === 'scissors'){
			result = `You picked ${scissors}, pc picked ${scissors} it's a tie.`
		} else if (pick === 'Paper'){
			result = `You picked ${scissors}, pc picked ${paper}, you win.`
		} else if (pick === 'Rock'){
			result = `You picked ${scissors}, pc picked ${rock}, you lose.`
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

<div class="relative top-36 h-[1000px] w-[100%] flex justify-center">
<div style="padding-bottom: 10%" class="bg-black w-[100%] lg:w-[80%] sm:h-[920px] md:h-[920px] lg:h-[920px] h-[920px] relative  mb-[10%] rounded-3xl flex justify-center">
  <h1>Rock Paper Scissors</h1>

<button  on:click={RocK}>{rock}</button>
<button  on:click={PapeR}>{paper}</button>
<button  on:click={SciS}>{scissors}</button>

<p>{result}</p>


</div>
</div>

