<script>
  import gameboy from '/src/routes/calcolatrice/gameboy.gif';
  import devil from '/src/routes/calcolatrice/littledevil.gif';
  import sticky from '/src/routes/calcolatrice/sticky.gif';
  //@ts-ignore
  import ita from '/src/routes/textITA.json';
  //@ts-ignore
  import eng from '/src/routes/textENG.json';

  
  import { lingua } from './lingua.js';
  import {onMount} from 'svelte';
 

  let ital = 'Italiani'
  let engl = 'English'

  onMount(() => {
    if (typeof window !== 'undefined') {
      const salvaLingua = localStorage.getItem('lingua');
      const salvaital = localStorage.getItem('ital');
      const salvaengl = localStorage.getItem('engl');
      if (salvaLingua) {
        lingua.set(salvaLingua === 'ita' ? ita : eng)
      }
      if (salvaital) {
        ital = JSON.parse(salvaital)
      }
      if (salvaengl) {
        engl = JSON.parse(salvaengl)
      }
     
    }
  });

  const TraduciPagina = (linguatraduci) => {
    switch (linguatraduci) {
      case 'ita':
        lingua.set(ita);
        ital = 'Italiani'
        localStorage.setItem('ital', JSON.stringify(ital))
        localStorage.setItem('lingua', 'ita');
        break;
      case 'eng':
        lingua.set(eng);
        engl = 'English'
        localStorage.setItem('engl', JSON.stringify(engl))
        localStorage.setItem('lingua', 'eng');
        break;
    }
  };

  let count = '';
  const reset = 'Reset';
  
  // @ts-ignore
  const calcola=(value)=>{
      switch (value) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '+':
        case '-':
        case '*':
        case '/':
        case '.':
          count = count + value;
          break;
          case '=':
            try {
              count = eval(count)
            } catch (error) {
              count = 'Error'
            }
            break;
            case 'Reset':
              count = '';
              break;
        default:
          break;
      }
    }

  $: frasi = [
 $lingua.progetti.a,
 $lingua.progetti.b,
 $lingua.progetti.c,
 $lingua.progetti.d,
 $lingua.progetti.e,
 $lingua.progetti.f,
 $lingua.progetti.g,
 $lingua.progetti.h,
 $lingua.progetti.i,
 $lingua.progetti.j,
 $lingua.progetti.k,
 $lingua.progetti.l,
 $lingua.progetti.m,
 $lingua.progetti.n,
 $lingua.progetti.o,
 $lingua.progetti.p,
 $lingua.progetti.q,
 $lingua.progetti.r,
 $lingua.progetti.s,
 $lingua.progetti.u,
 $lingua.progetti.v,
 $lingua.progetti.w,
 $lingua.progetti.x,
 $lingua.progetti.y,
 $lingua.progetti.z,
 $lingua.progetti.zz
  ]

  $: newfrasi = $lingua.progetti.programmato

  const generaRandom=()=>{
    const random = setInterval(()=>{
    const rand = Math.floor(Math.random() * frasi.length)
    newfrasi = frasi[rand]
    }, 5000)
    return ()=> clearInterval(random)
  }

  generaRandom()


  let active = false;
  const hellMode=()=>{
    if (active){
      active = false
    }else{
      active  = true
      pix = false
    }
  }

  let pix = false
  const pixelMode=()=>{
    if (pix){
      pix = false
    }else{
      pix  = true
      active = false
    }
  }


  const diavolo=()=>{
    if (count === '666'){
      hellMode()
    }
  }
  const pixellato=()=>{
    if(count === '101010'){
      pixelMode()
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

<select value="{$lingua}" on:change="{(event)=>TraduciPagina(event.target.value)}" class="w-[100px] absolute top-[200px] sm:top-[200px] md:top-[130px] bg-gradient-to-tr p-2 from-white to-neutral-300 border-2 border-neutral-300 rounded-2xl invert">
  <option value="ita">Italiano</option>
  <option value="eng">English</option>
  </select>


<div class="h-[600px] w-[100%] flex justify-center relative top-[18%] sm:top-[15%] xl:trasform xl:scale-[110%] xl:overflow-hidden">
  <div class="w-[350px] md:w-[360px] lg:w-[360px] h-[550px] {active ? "bg-gradient-to-tl from-black to-neutral-950": ""} relative top-[0%] rounded-2xl bg-black flex justify-center border-solid border-2 border-gray-700 shadow-xl bg-gradient-to-tl from-black to-gray-950">  
    <div>
    <p class="text-white tracking-[6px] md:tracking-[6px] font-extrabold text-[25px] sm:text-[25px] lg:text-[25px] md:text-[25px] cursor-default">THE CALCULATOR</p>
    <div class="flex flex-row w-[70%] top-[8%] absolute left-[120px]">
      <button on:click="{hellMode}" class=" {active ?"rounded-sm border-white border-2 text-white bg-red-900": "text-white bg-red-900"} rounded-md p-1 font-semibold cursor-pointer mr-[5%] md:mr-[10%]">Hell Mode</button>
      <button on:click="{pixelMode}" class=" {pix ?"rounded-sm border-white border-2 text-white bg-teal-900": "text-white bg-teal-900"} rounded-md p-1 font-semibold cursor-pointer">Pixel Mode</button>
    </div>
   </div>
  <div class="bg-black flex w-[90%] h-[9%] rounded-3xl absolute top-[15%]">
    <img src={sticky} alt="sticky" class="invert {active ? "border-teal-500 border-r-2 border-solid": ""} w-[15%] sm:w-[13%] top-[10%] sm:top-[5%] md:top-[5%] rounded-full border-solid border-red-500 border-r-2 absolute" />
    <p class=" {active ? "text-red-600": "text-teal-500"} font-mono absolute top-[25%] left-[17%] flex tracking-tighter text-xs md:text-xs ">{newfrasi}</p>
  </div>

 
  <div class="w-[300px] h-[90px] {active ? "bg-gradient-to-tl from-black to-red-950 duration-1000 border-red-950": ""}{pix ? "bg-gradient-to-tl from-black to-teal-950 duration-1000 border-teal-950": ""} absolute top-[26%] bg-gradient-to-tl from-black to-neutral-900 rounded-2xl sm:rounded-2xl border-solid border-2 border-gray-600 text-teal-700 items-start flex justify-center text-6xl"><p class=" {active ? "text-red-600": "text-teal-600"} text-2xl absolute top-[26%] right-[5%]">{count}</p></div>
  <div class="grid grid-cols-4 grid-rows-5 absolute w-[310px] h-[80%]  top-[20%]">
    <button on:click="{()=>calcola('1')}" on:click="{()=>pixellato()}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500 border-2 border-red-900  text-black rounded-full duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer '}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl  font-semibold font-roboto relative top-[160%] left-[10%] ">1</button>
    <button on:click="{()=>calcola('2')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer '}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl  font-semibold relative top-[160%] left-[10%]">2</button>
    <button on:click="{()=>calcola('3')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-neutral-900 text-white   hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl  font-semibold relative top-[160%] left-[10%]">3</button>
    <button on:click="{()=>calcola('/')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-teal-900 text-white  '}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-teal-900 text-white'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl  font-semibold relative top-[160%] left-[10%] hover:bg-orange-700 hover:rounded-2xl hover:duration-700 hover:ease-in-out hover:cursor-pointer">/</button>
    <button on:click="{()=>calcola('4')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer '}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl  font-semibold relative top-[120%] left-[10%]">4</button>
    <button on:click="{()=>calcola('5')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl  font-semibold relative top-[120%] left-[10%]">5</button>
    <button on:click="{()=>calcola('6')}" on:click="{()=>diavolo()}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl  font-semibold relative top-[120%] left-[10%]">6</button>
    <button on:click="{()=>calcola('*')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-teal-900 text-white '}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-teal-900 text-white'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl  font-semibold relative top-[120%] left-[10%] hover:bg-orange-700 hover:rounded-2xl hover:duration-700 hover:ease-in-out hover:cursor-pointer">*</button>
    <button on:click="{()=>calcola('7')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl  font-semibold relative top-[80%] left-[10%]">7</button>
    <button on:click="{()=>calcola('8')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl  font-semibold relative top-[80%] left-[10%]">8</button>
    <button on:click="{()=>calcola('9')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl  font-semibold relative top-[80%] left-[10%]">9</button>
    <button on:click="{()=>calcola('-')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-teal-900 text-white '}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-teal-900 text-white'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl  font-semibold relative top-[80%] left-[10%]  hover:bg-orange-700 hover:rounded-2xl hover:duration-700 hover:ease-in-out hover:cursor-pointer">-</button>
    <button on:click="{()=>calcola('0')}" on:click="{()=>pixellato()}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer '}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl  font-semibold relative top-[40%] left-[10%]">0</button>
    <button on:click="{()=>calcola('.')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl  font-semibold relative top-[40%] left-[10%]">.</button>
    <button on:click="{()=>calcola('=')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-green-900 text-white '}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-teal-900 text-white'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl  font-semibold relative top-[40%] left-[10%]    hover:bg-green-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">=</button>
    <button on:click="{()=>calcola('+')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-teal-900 text-white '}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-teal-900 text-white'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl  font-semibold relative top-[40%] left-[10%]  hover:bg-orange-700 hover:rounded-2xl hover:duration-700 hover:ease-in-out hover:cursor-pointer">+</button>
    <button on:click="{()=>calcola('Reset')}" class="{active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-red-900 text-white '}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-red-900 text-white'} w-[136px] h-[50px] rounded-xl flex justify-center text-center items-center text-2xl  font-semibold relative top-[10%] left-[10%]  hover:bg-red-700 hover:rounded-full hover:duration-1000 hover:ease-in-out hover:cursor-pointer">Reset</button>
  </div>


  <div>
    <img src={devil} alt="devil" class="w-[20%] absolute bottom-[5%] right-[15%] {active?"visible transition-[3s] ease-in-out":"invisible"}"  />
    <img src={gameboy} alt="game" class="w-[20%] absolute bottom-[4%] right-[15%] {pix?"visible transition-[3s] ease-in-out rounded-full bg-black":"invisible"}"  />
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

  .zoom{
    zoom: 130%;
  }


</style>