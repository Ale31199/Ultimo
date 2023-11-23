<script>
	import { parse } from 'cookie';
  import trash from './imma/trash.png';
  import check from './imma/check.png';
  import indietro from './imma/arrow.png';
  import edit from './imma/editing.png';
  import add from './imma/add.png';
  import {onMount} from 'svelte'
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
  
  
    let tasks = []
    let taskComplete = []
    let newTask = ''


    onMount(()=>{
      const salvaTask = localStorage.getItem('tasks')
      if(salvaTask){
        tasks = JSON.parse(salvaTask)
      }
    })

    onMount(()=>{
      const salvaCompletate = localStorage.getItem('taskComplete')
      if (salvaCompletate){
        taskComplete = JSON.parse(salvaCompletate)
      }
    })


      const aggiungiTask=()=>{
      tasks = [...tasks, newTask]
      newTask = ''
      localStorage.setItem('tasks', JSON.stringify(tasks))
      }
    
  
      const rimuoviTask=(index)=>{
        tasks = tasks.filter(i => i !== index);
      localStorage.setItem('tasks', JSON.stringify(tasks))
      }


      const completaTask=(index)=>{
        let completata = index
         tasks = tasks.filter(i=> i !== index)
          taskComplete = [...taskComplete, completata]
        localStorage.setItem('taskComplete', JSON.stringify(taskComplete))
        localStorage.setItem('tasks', JSON.stringify(tasks))
      }
    
  
      const rimuoviTaskC=(index)=>{
        taskComplete = taskComplete.filter(i => i !== index);
      localStorage.setItem('taskComplete', JSON.stringify(taskComplete))
      }
    


      let addno = true
      let mod = true
      let nomelista = ''

     onMount(()=>{
      const salvanome = localStorage.getItem('nomelista')
      if (salvanome){
        nomelista = JSON.parse(salvanome)
      }
     })


     const modificaNom=()=>{
      if(nomelista !== ''){
        localStorage.setItem('nomelista', JSON.stringify(nomelista))
        mod = true
      }
     }

     const attivaMod=()=>{
      mod = false
      nomelista = ''
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
  
  <div class="relative top-36 h-[650px] sm:h-[800px] md:h-[800px] w-[100%] flex justify-center">
  <div style="padding-bottom: 10%" class="bg-neutral-950 border-2 border-neutral-800 w-[630px] sm:w-[1000px] md:w-[600px] md:scale-125 sm:h-[600px] h-[620px] relative  mb-[10%] rounded-3xl flex justify-center">
 
   <div class="bg-neutral-800 sticky top-0 border-b-2 border-neutral-800 rounded-t-3xl h-[60px] w-[100%] items-center flex">
    <img src={indietro} alt="back" class="w-[20px] absolute left-[30px] invert-[0.8] cursor-pointer -rotate-90" />
   <input disabled={mod} placeholder={$lingua.progetti.lista} bind:value="{nomelista}" on:change="{(event)=>modificaNom(event.target.value)}" class= "outline-none text-neutral-300 bg-transparent font-bold text-base w-[60%] absolute left-[70px]">
   <img src={edit} on:click="{()=>attivaMod()}" alt="edit" class="{addno ? "right-[30px]": "right-[70px]"} w-[20px] absolute  invert-[0.8] cursor-pointer -rotate-90" />
   <img src={add} alt="add" class="{addno ? "invisible": "visible"} w-[25px] hover:border-2 hover:border-red-400 rounded-full absolute right-[30px] invert-[0.8] cursor-pointer -rotate-90" />
   </div>


   <div class="absolute top-[75px] sm:top-[63px]  overflow-hidden gap-y-5 grid grid-cols-1 grid-rows-2 justify-items-center h-[470px] w-[100%]">


    <div class="flex rounded-3xl p-3 w-[100%] justify-center">
      <div class="flex w-[100%] text-neutral-300 font-semibold text-base justify-center">
        <p class="absolute left-[30px]">{$lingua.progetti.taskfare}</p>
       <div class="bg-black grid grid-cols-1 rounded-3xl gap-y-2 p-3 w-[100%] sm:w-[580px] h-[180px] absolute top-[36px] overflow-y-auto overflow-x-hidden">
        {#each tasks as task}
        <div class="flex w-[100%] h-[60px] bg-neutral-800 rounded-2xl relative items-center">
        <img on:click="{()=>completaTask(task)}" src={check} alt="trash" class="w-[23px] absolute left-[10px] invert-[0] cursor-pointer opacity-20 border-2 hover:border-0 hover:w-[22px] rounded-full hover:opacity-100 hover:invert-[1]"/>
        <img on:click="{()=>rimuoviTask(task)}" src={trash} alt="trash" class="w-[20px] absolute right-[10px] invert-[0.5] cursor-pointer hover:invert-[1] border-b-2 border-cyan-400 pb-1"/>
        <p class="text-neutral-300 font-semibold absolute left-[45px] text-[10px] sm:text-[12px] w-[70%] h-[55px] items-center flex rounded-2xl leading-tight text-start">{task}</p>
        </div>
        {/each}
       </div>
      </div>
    </div>


    <div class="flex rounded-3xl p-3 w-[100%] justify-center">
      <div class="flex w-[100%] text-neutral-300 font-semibold text-base justify-center">
        <p class="absolute left-[30px] top-[240px]">{$lingua.progetti.taskcomp}</p>
       <div class="bg-black grid grid-cols-1 rounded-3xl gap-y-2 p-3 w-[100%] sm:w-[580px] h-[180px] absolute top-[265px] overflow-y-auto overflow-x-hidden">
        {#each taskComplete as taskc}
        <div class="flex w-[100%] h-[60px] bg-neutral-800 rounded-2xl relative items-center">
        <img src={check} alt="trash" class="w-[20px] absolute left-[10px] invert-[1] opacity-100">
        <img on:click="{()=>rimuoviTaskC(taskc)}" src={trash} alt="trash" class="w-[20px] absolute right-[10px] invert-[0.5] cursor-pointer hover:invert-[1] border-b-2 border-cyan-400 pb-1"/>
        <p class="text-neutral-300 font-semibold absolute left-[45px] text-[10px] sm:text-[12px] w-[70%] h-[55px] items-center flex rounded-2xl leading-tight text-start line-through">{taskc}</p>
        </div>
       {/each}
       </div>
      </div>
    </div>

   


    
   </div>

   <div class="bg-neutral-800 absolute bottom-[0%] border-t-2 border-neutral-800 rounded-b-3xl h-[60px] w-[100%] flex justify-center items-center "  >
     <input bind:value="{newTask}" on:change="{(event)=>aggiungiTask(event.target.value)}" placeholder={$lingua.progetti.aggiungi} maxlength="120" class="rounded-md p-4 bg-neutral-600 text-neutral-200 font-semibold w-[80%] h-[30px] outline-none" >
   </div>

     

  
  </div>
  </div>
  
  