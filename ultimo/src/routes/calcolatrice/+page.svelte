<script>
  import gameboy from '/src/routes/calcolatrice/gameboy.gif';
  import devil from '/src/routes/calcolatrice/littledevil.gif';
  import sticky from '/src/routes/calcolatrice/sticky.gif';

  let count = '';
  const reset = 'Reset';
  
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



</script>

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


<div class="w-[90%] md:w-[60%] lg:w-[30%] h-[90%] {active ? "bg-gradient-to-tl from-black to-neutral-950": ""} absolute top-[27%] left-[5%] md:left-[20%] lg:left-[35%] rounded-3xl bg-black flex justify-center border-solid border-2 border-gray-700 shadow-xl bg-gradient-to-tl from-black to-gray-950">  
  <div>
    <p class="text-white tracking-[10px] md:tracking-[15px] font-extrabold text-sm sm:text-2xl md:text-3xl cursor-default">THE CALCULATOR</p>
    <div class="flex flex-row w-[70%] absolute left-[32%] md:left-[52%]">
    <button on:click="{hellMode}" class="text-white bg-red-900 {active ?"rounded-sm border-solid border-black border-6 text-orange-500": ""} rounded-md p-0 font-semibold cursor-pointer mr-[5%] md:mr-[10%]">Hell Mode</button>
    <button on:click="{pixelMode}" class="text-white bg-teal-900 {pix ?"rounded-sm border-solid border-white border-6 text-black": ""} rounded-md p-0 font-semibold cursor-pointer">Pixel Mode</button>
    </div>
  </div>
  <div class="bg-black flex w-[90%] h-[9%] rounded-3xl absolute top-[10%]">
    <img src={sticky} alt="sticky" class="invert {active ? "border-teal-500 border-r-2 border-solid": ""} w-[15%] sm:w-[13%] sm:top-[5%] md:top-[5%] rounded-full border-solid border-red-500 border-r-2 absolute" />
    <p class="text-teal-500 {active ? "text-red-600": ""} font-mono absolute top-[25%] left-[17%] flex tracking-tighter text-xs md:text-base ">{newfrasi}</p>
  </div>


  <div class="w-[90%] h-[15%] {active ? "bg-gradient-to-tl from-black to-red-950 duration-1000 border-red-950": ""}{pix ? "bg-gradient-to-tl from-black to-teal-950 duration-1000 border-teal-950": ""} absolute top-[20%] bg-gradient-to-tl from-black to-neutral-900 rounded-2xl border-solid border-2 border-gray-600 text-teal-700 items-start flex justify-start text-6xl"><p class="text-teal-600 {active ? "text-red-600": ""} text-4xl absolute top-[26%] right-[5%]">{count}</p></div>
  <div class="grid grid-cols-4 grid-rows-5 absolute w-[100%] h-[80%] left-[2.5%] top-[15%]">
    <button on:click="{()=>calcola('1')}" on:click="{()=>pixellato()}" class="bg-neutral-900 {active ?"bg-red-900 text-black rounded-md duration-1000": ''}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": ''} w-[60%] h-[40%] rounded-full flex justify-center text-center items-center text-white text-4xl font-semibold font-roboto relative top-[160%] left-[10%]  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">1</button>
    <button on:click="{()=>calcola('2')}" class="bg-neutral-900 {active ?"bg-red-900 text-black rounded-md duration-1000": ''}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": ''} w-[60%] h-[40%] rounded-full flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[160%] left-[10%]  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">2</button>
    <button on:click="{()=>calcola('3')}" class="bg-neutral-900 {active ?"bg-red-900 text-black rounded-md duration-1000": ''}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": ''} w-[60%] h-[40%] rounded-full flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[160%] left-[10%]  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">3</button>
    <button on:click="{()=>calcola('/')}" class="bg-teal-900 {active ?"bg-red-900 text-black rounded-md duration-1000": ''}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": ''} w-[60%] h-[40%] rounded-xl flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[160%] left-[10%] hover:bg-orange-700 hover:rounded-2xl hover:duration-700 hover:ease-in-out hover:cursor-pointer">/</button>
    <button on:click="{()=>calcola('4')}" class="bg-neutral-900 {active ?"bg-red-900 text-black rounded-md duration-1000": ''}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": ''} w-[60%] h-[40%] rounded-full flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[120%] left-[10%]  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">4</button>
    <button on:click="{()=>calcola('5')}" class="bg-neutral-900 {active ?"bg-red-900 text-black rounded-md duration-1000": ''}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": ''} w-[60%] h-[40%] rounded-full flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[120%] left-[10%]  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">5</button>
    <button on:click="{()=>calcola('6')}" on:click="{()=>diavolo()}" class="bg-neutral-900 {active ?"bg-red-900 text-black rounded-md duration-1000": ''}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": ''} w-[60%] h-[40%] rounded-full flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[120%] left-[10%]  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">6</button>
    <button on:click="{()=>calcola('*')}" class="bg-teal-900 {active ?"bg-red-900 text-black rounded-md duration-1000": ''}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": ''} w-[60%] h-[40%] rounded-xl flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[120%] left-[10%] hover:bg-orange-700 hover:rounded-2xl hover:duration-700 hover:ease-in-out hover:cursor-pointer">*</button>
    <button on:click="{()=>calcola('7')}" class="bg-neutral-900 {active ?"bg-red-900 text-black rounded-md duration-1000": ''}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": ''} w-[60%] h-[40%] rounded-full flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[80%] left-[10%]  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">7</button>
    <button on:click="{()=>calcola('8')}" class="bg-neutral-900 {active ?"bg-red-900 text-black rounded-md duration-1000": ''}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": ''} w-[60%] h-[40%] rounded-full flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[80%] left-[10%]  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">8</button>
    <button on:click="{()=>calcola('9')}" class="bg-neutral-900 {active ?"bg-red-900 text-black rounded-md duration-1000": ''}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": ''} w-[60%] h-[40%] rounded-full flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[80%] left-[10%]  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">9</button>
    <button on:click="{()=>calcola('-')}" class="bg-teal-900 {active ?"bg-red-900 text-black rounded-md duration-1000": ''}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": ''} w-[60%] h-[40%] rounded-xl flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[80%] left-[10%]  hover:bg-orange-700 hover:rounded-2xl hover:duration-700 hover:ease-in-out hover:cursor-pointer">-</button>
    <button on:click="{()=>calcola('0')}" on:click="{()=>pixellato()}" class="bg-neutral-900 {active ?"bg-red-900 text-black rounded-md duration-1000": ''}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": ''} w-[60%] h-[40%] rounded-full flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[40%] left-[10%]  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">0</button>
    <button on:click="{()=>calcola('.')}" class="bg-neutral-900 {active ?"bg-red-900 text-black rounded-md duration-1000": ''}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": ''} w-[60%] h-[40%] rounded-full flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[40%] left-[10%]  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">.</button>
    <button on:click="{()=>calcola('=')}" class="bg-green-900 {active ?"bg-red-900 text-black rounded-md duration-1000": ''}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": ''} w-[60%] h-[40%] rounded-full flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[40%] left-[10%]    hover:bg-green-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">=</button>
    <button on:click="{()=>calcola('+')}" class="bg-teal-900 {active ?"bg-red-900 text-black rounded-md duration-1000": ''}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": ''} w-[60%] h-[40%] rounded-xl flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[40%] left-[10%]  hover:bg-orange-700 hover:rounded-2xl hover:duration-700 hover:ease-in-out hover:cursor-pointer">+</button>
    <button on:click="{()=>calcola('Reset')}" class="bg-red-900 {active ?"bg-red-900 text-black rounded-md duration-1000": ''}{pix ?" text-teal-500 border-teal-500 border-solid border-2 rounded-none duration-1000": ''} w-[130%] h-[40%] rounded-xl flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[10%] left-[10%]  hover:bg-red-700 hover:rounded-full hover:duration-1000 hover:ease-in-out hover:cursor-pointer">Reset</button>
  </div>

  <div>
    <img src={devil} alt="devil" class="w-[30%] absolute bottom-[2%] right-[15%] {active?"visible transition-[3s] ease-in-out":"invisible"}"  />
    <img src={gameboy} alt="game" class="w-[30%] absolute bottom-[2%] right-[15%] {pix?"visible transition-[3s] ease-in-out rounded-full bg-black":"invisible"}"  />
  </div>

</div>