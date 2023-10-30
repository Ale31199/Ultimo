<script>
  import gameboy from '/src/routes/calcolatrice/gameboy.gif';
  import devil from '/src/routes/calcolatrice/littledevil.gif';
  import sticky from '/src/routes/calcolatrice/sticky.gif';

  let result = '';
  let count = '';
  const uno = '1';
  const due = '2';
  const tre = '3';
  const quattro = '4';
  const cinque = '5';
  const sei = '6';
  const sette= '7';
  const otto = '8';
  const nove= '9';
  const zero = '0';
  const piu = '+';
  const meno = '-';
  const diviso= '/';
  const per = '*';
  const uguale = '=';
  const punto = '.'


  const calc=(input)=>{
    if (input === '='){
      result = eval(result);
    }else if (input === 'Reset'){
      result = '';
    }else{
      result += input
    }
  }

  const maxlimit = 9 

  const limit=(event)=>{
    const text = event.target.value;
    if (text.length > maxlimit){
      
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

<div class="w-[90%] h-[90%] absolute top-[27%] left-[5%] rounded-3xl bg-black flex justify-center border-solid border-2 border-gray-700 shadow-2xl bg-gradient-to-tl from-black to-gray-950">
  <div class="w-[90%] h-[15%] absolute top-[20%] bg-neutral-900 rounded-2xl border-solid border-2 border-gray-700 text-teal-700 items-start flex justify-center text-4xl">{result}</div>
  <div class="grid grid-cols-4 grid-rows-5 absolute w-[100%] h-[100%] left-[2.5%] top-[5%]">
    <div on:click="{()=>calc('1')}" class="bg-neutral-900 w-[60%] h-[40%] rounded-full flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[160%] left-[10%]  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">1</div>
    <div class="bg-neutral-900 w-[60%] h-[40%] rounded-full flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[160%] left-[10%]  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">2</div>
    <div class="bg-neutral-900 w-[60%] h-[40%] rounded-full flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[160%] left-[10%]  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">3</div>
    <div on:click="{()=>calc('+')}" class="bg-teal-900 w-[60%] h-[40%] rounded-xl flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[160%] left-[10%] hover:bg-orange-700 hover:rounded-2xl hover:duration-700 hover:ease-in-out hover:cursor-pointer">/</div>
    <div class="bg-neutral-900 w-[60%] h-[40%] rounded-full flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[120%] left-[10%]  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">4</div>
    <div class="bg-neutral-900 w-[60%] h-[40%] rounded-full flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[120%] left-[10%]  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">5</div>
    <div class="bg-neutral-900 w-[60%] h-[40%] rounded-full flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[120%] left-[10%]  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">6</div>
    <div class="bg-teal-900 w-[60%] h-[40%] rounded-xl flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[120%] left-[10%] hover:bg-orange-700 hover:rounded-2xl hover:duration-700 hover:ease-in-out hover:cursor-pointer">*</div>
    <div class="bg-neutral-900 w-[60%] h-[40%] rounded-full flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[80%] left-[10%]  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">7</div>
    <div class="bg-neutral-900 w-[60%] h-[40%] rounded-full flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[80%] left-[10%]  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">8</div>
    <div class="bg-neutral-900 w-[60%] h-[40%] rounded-full flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[80%] left-[10%]  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">9</div>
    <div class="bg-teal-900 w-[60%] h-[40%] rounded-xl flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[80%] left-[10%]  hover:bg-orange-700 hover:rounded-2xl hover:duration-700 hover:ease-in-out hover:cursor-pointer">-</div>
    <div class="bg-neutral-900 w-[60%] h-[40%] rounded-full flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[40%] left-[10%]  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">0</div>
    <div class="bg-neutral-900 w-[60%] h-[40%] rounded-full flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[40%] left-[10%]  hover:text-teal-400 hover:bg-neutral-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">.</div>
    <div on:click="{()=>calc('=')}" class="bg-green-900 w-[60%] h-[40%] rounded-full flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[40%] left-[10%]    hover:bg-green-700 hover:rounded-lg hover:duration-700 hover:ease-in-out hover:cursor-pointer">=</div>
    <div class="bg-teal-900 w-[60%] h-[40%] rounded-xl flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[40%] left-[10%]  hover:bg-orange-700 hover:rounded-2xl hover:duration-700 hover:ease-in-out hover:cursor-pointer">+</div>
    <div on:click="{()=>calc('Reset')}" class="bg-red-900 w-[130%] h-[40%] rounded-xl flex justify-center text-center items-center text-white text-4xl font-semibold relative top-[10%] left-[10%]  hover:bg-red-700 hover:rounded-full hover:duration-700 hover:ease-in-out hover:cursor-pointer">Reset</div>
  </div>
</div>