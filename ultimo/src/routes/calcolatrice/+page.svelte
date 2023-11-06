<script>
  import gameboy from '/src/routes/calcolatrice/gameboy.gif';
  import devil from '/src/routes/calcolatrice/littledevil.gif';
  import sticky from '/src/routes/calcolatrice/sticky.gif';

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

  const frasi = [
    'Benvenuto su The Calculator', 
    'Ricorda: 2+2 è uguale 4',
    'Come te la passi?',
    'Sono sempre qui per aiutarti',
    'Mi fa piacere che tu mi stia usando :)',
    "E' un giorno stupendo per calcolare!",
    '109 97 116 104',
    'Stai andando alla grande!',
    'Sei un genio/a!',
    'Io sono Sticky!',
    'Beep Boop Boop Beep...',
    'Vuoi un caffè?',
    'Uhhhh la mia schiena...',
    'Si, vivo dentro questo rettangolo nero',
    'Spero ti stia divertendo ^_^',
    'Stai leggendo tutto quello che dico vero?',
    'Fermo! fissami per 5 secondi!',
    'Usami per i tuoi compiti',
    'GUARDA DIETRO DI TE!!',
    'Bisogno di una pausa?',
    'Dimmi i tuoi segreti',
    'Mettiti comodo e fai i tuoi calcoli con me!',
    'Non fare 666!!!',
    'Prova a fare 666...',
    'Prova a fare 101010...',
    'Sto sempre in piedi',
  ]

  let newfrasi = 'Sono stato programmato da Alessio Santillo'

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
    active = !active
  }

  let pix = false
  const pixelMode=()=>{
    pix= !pix
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
  <h1  class="text-white text-4xl font-bold flex relative left-[68px] justify-center cursor-default">HomeCode<h1 class="effetto text-white">|</h1></h1>
  </div>
  <div class="bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-800 h-10 flex-auto flex flex-row items-center justify-between relative top-12 rounded-xl md:w-[50%] md:left-[45%] md:-top-12 "> 
  <a href="/" class=" font-bold ml-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {home ? "border-b-2 rounded-sm border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('home')}">Home</a>
  <a href="/skills" class="  font-bold cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {skills ? "border-b-2 border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('skills')}">Skills</a>
  <a href="/progetti" class="  font-bold mr-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {progetti ? "border-b-2 border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('progetti')}">Progetti</a>
  </div>
</div>


<div class="h-[600px] w-[100%] flex justify-center relative top-[15%]">
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
    <button on:click="{()=>calcola('1')}" on:click="{()=>pixellato()}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500 border-2 border-red-900  text-black rounded-full duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer '}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl sm:text-3xl md:text-4xl font-semibold font-roboto relative top-[160%] left-[10%] ">1</button>
    <button on:click="{()=>calcola('2')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer '}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl sm:text-3xl md:text-4xl font-semibold relative top-[160%] left-[10%]">2</button>
    <button on:click="{()=>calcola('3')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-neutral-900 text-white   hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl sm:text-3xl md:text-4xl font-semibold relative top-[160%] left-[10%]">3</button>
    <button on:click="{()=>calcola('/')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-teal-900 text-white  '}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-teal-900 text-white'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl sm:text-3xl md:text-4xl font-semibold relative top-[160%] left-[10%] hover:bg-orange-700 hover:rounded-2xl hover:duration-700 hover:ease-in-out hover:cursor-pointer">/</button>
    <button on:click="{()=>calcola('4')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer '}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl sm:text-3xl md:text-4xl font-semibold relative top-[120%] left-[10%]">4</button>
    <button on:click="{()=>calcola('5')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl sm:text-3xl md:text-4xl font-semibold relative top-[120%] left-[10%]">5</button>
    <button on:click="{()=>calcola('6')}" on:click="{()=>diavolo()}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl sm:text-3xl md:text-4xl font-semibold relative top-[120%] left-[10%]">6</button>
    <button on:click="{()=>calcola('*')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-teal-900 text-white '}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-teal-900 text-white'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl sm:text-3xl md:text-4xl font-semibold relative top-[120%] left-[10%] hover:bg-orange-700 hover:rounded-2xl hover:duration-700 hover:ease-in-out hover:cursor-pointer">*</button>
    <button on:click="{()=>calcola('7')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl sm:text-3xl md:text-4xl font-semibold relative top-[80%] left-[10%]">7</button>
    <button on:click="{()=>calcola('8')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl sm:text-3xl md:text-4xl font-semibold relative top-[80%] left-[10%]">8</button>
    <button on:click="{()=>calcola('9')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl sm:text-3xl md:text-4xl font-semibold relative top-[80%] left-[10%]">9</button>
    <button on:click="{()=>calcola('-')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-teal-900 text-white '}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-teal-900 text-white'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl sm:text-3xl md:text-4xl font-semibold relative top-[80%] left-[10%]  hover:bg-orange-700 hover:rounded-2xl hover:duration-700 hover:ease-in-out hover:cursor-pointer">-</button>
    <button on:click="{()=>calcola('0')}" on:click="{()=>pixellato()}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer '}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl sm:text-3xl md:text-4xl font-semibold relative top-[40%] left-[10%]">0</button>
    <button on:click="{()=>calcola('.')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-neutral-900 text-white  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl sm:text-3xl md:text-4xl font-semibold relative top-[40%] left-[10%]">.</button>
    <button on:click="{()=>calcola('=')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-green-900 text-white '}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-teal-900 text-white'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl sm:text-3xl md:text-4xl font-semibold relative top-[40%] left-[10%]    hover:bg-green-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">=</button>
    <button on:click="{()=>calcola('+')}" class=" {active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-teal-900 text-white '}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-teal-900 text-white'} w-[62px] h-[43px] rounded-xl flex justify-center text-center items-center text-2xl sm:text-3xl md:text-4xl font-semibold relative top-[40%] left-[10%]  hover:bg-orange-700 hover:rounded-2xl hover:duration-700 hover:ease-in-out hover:cursor-pointer">+</button>
    <button on:click="{()=>calcola('Reset')}" class="{active ?"bg-black hover:bg-red-950 hover:text-red-500  border-2 border-red-900 text-black rounded-full duration-1000": 'bg-red-900 text-white '}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": 'bg-red-900 text-white'} w-[136px] h-[50px] rounded-xl flex justify-center text-center items-center text-2xl sm:text-3xl md:text-4xl font-semibold relative top-[10%] left-[10%]  hover:bg-red-700 hover:rounded-full hover:duration-1000 hover:ease-in-out hover:cursor-pointer">Reset</button>
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
</style>