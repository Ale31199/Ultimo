<script>
  import trash from './imma/trash.png';
  import check from './imma/check.png';
  import indietro from './imma/arrow.png';
  import edit from './imma/editing.png';
  import add from './imma/add.png';
  import taskdone from './imma/taskdone.wav';
  import taskdelete from './imma/taskdelete.wav';
  import hc from './imma/HomeCode.png'
  import {onMount} from 'svelte'
  //@ts-ignore
   import ita from '/src/routes/textITA.json';
    // @ts-ignore
    import eng from '/src/routes/textENG.json';
  
    
  import { lingua } from './lingua.js';
 
  let ital = 'Italiani'
  let engl = 'English'
  let salvaSele;

  onMount(()=>{
    if (typeof window !== 'undefined') {
      const salvaLingua = localStorage.getItem('lingua');
      const salvaital = localStorage.getItem('ital');
      const salvaengl = localStorage.getItem('engl');
       salvaSele = localStorage.getItem('salvaSele');
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
        localStorage.setItem('salvaSele', 'ita');
        break;
      case 'eng':
        lingua.set(eng);
        engl = 'English'
        localStorage.setItem('engl', JSON.stringify(engl))
        localStorage.setItem('lingua', 'eng');
        localStorage.setItem('salvaSele', 'eng');
        break;
    }
  };
 
  
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
        const taskdel = new Audio(taskdelete)
        taskdel.play()
        tasks = tasks.filter(i => i !== index);
      localStorage.setItem('tasks', JSON.stringify(tasks))
      }


      const completaTask=(index)=>{
        const taskd = new Audio(taskdone)
        taskd.play()
        let completata = index
         tasks = tasks.filter(i=> i !== index)
          taskComplete = [...taskComplete, completata]
        localStorage.setItem('taskComplete', JSON.stringify(taskComplete))
        localStorage.setItem('tasks', JSON.stringify(tasks))
      }
    
  
      const rimuoviTaskC=(index)=>{
        const taskdel = new Audio(taskdelete)
        taskdel.play()
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
      <img src={hc} class="w-[250px] flex relative left-[65px] justify-center cursor-default" />
    </div>
    <div class="bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-800 h-10 flex-auto flex flex-row items-center justify-between relative top-12 rounded-xl md:w-[50%] md:left-[45%] md:-top-12 "> 
    <a href="/" class=" font-bold ml-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {home ? "border-b-2 rounded-sm border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('home')}">Home</a>
    <a href="/skills" class="  font-bold cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {skills ? "border-b-2 border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('skills')}">Skills</a>
    <a href="/progetti" class="  font-bold mr-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {progetti ? "border-b-2 border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('progetti')}">{$lingua.testo.progetti}</a>
    </div>
  </div>
  
  <select value="{salvaSele}" on:change="{(event)=>TraduciPagina(event.target.value)}" class="w-[100px] absolute top-[200px] sm:top-[200px] md:top-[130px] bg-gradient-to-tr p-2 from-white to-neutral-300 border-2 border-neutral-300 rounded-2xl invert">
    <option value="ita">Italiano</option>
    <option value="eng">English</option>
    </select>
  
  <div class="relative top-36 h-[650px] sm:h-[800px] md:h-[800px] w-[100%] flex justify-center">
  <div style="padding-bottom: 10%" class="bg-gradient-to-b from-black to-neutral-800 border-2 border-neutral-700 w-[630px] sm:w-[1000px] md:w-[600px] lg:w-[800px] md:scale-125 sm:h-[600px] h-[620px] relative  mb-[10%] rounded-3xl flex justify-center">
 
   <div class="bg-black sticky top-0 border-b-2 border-neutral-700 rounded-t-3xl h-[60px] w-[100%] items-center flex">
   <input disabled={mod} placeholder={$lingua.progetti.lista} bind:value="{nomelista}" on:change="{(event)=>modificaNom(event.target.value)}" class= "outline-none text-neutral-200 bg-transparent font-bold text-base md:text-xl w-[70%] absolute left-[30px]">
   <img src={edit} on:click="{()=>attivaMod()}" alt="edit" class="{addno ? "right-[30px]": "right-[70px]"} w-[20px] absolute  invert-[0.8] cursor-pointer -rotate-90" />
   <img src={add} alt="add" class="{addno ? "invisible": "visible"} w-[25px] hover:border-2 hover:border-red-400 rounded-full absolute right-[30px] invert-[0.8] cursor-pointer -rotate-90" />
   </div>


   <div class="absolute top-[75px] sm:top-[63px]  overflow-hidden gap-y-5 grid grid-cols-1 grid-rows-2 lg:grid-cols-2 justify-items-center h-[470px] w-[100%]">


    <div class="flex rounded-3xl p-3 w-[100%] justify-center">
      <div class="flex w-[100%] text-neutral-300 font-semibold text-base justify-center">
        <p class="absolute left-[30px] cursor-default">{$lingua.progetti.taskfare}</p>
       <div class="bg-black bg-opacity-30 rounded-3xl grid grid-cols-1 gap-y-2 p-3 w-[100%] sm:w-[580px] lg:w-[45%] h-[180px] lg:h-[430px] absolute top-[36px] overflow-y-auto overflow-x-hidden">
        {#each tasks as task}
        <div class="flex w-[100%] h-[60px] bg-gradient-to-b from-neutral-900 to-neutral-900 border-2 border-neutral-800 rounded-2xl relative items-center sfoca">
        <img on:click="{()=>completaTask(task)}" src={check} alt="trash" class="w-[23px] absolute left-[10px] invert-[0] cursor-pointer opacity-20 border-2 transizione hover:border-0 hover:w-[22px] rounded-full hover:opacity-100 hover:invert-[1]"/>
        <img on:click="{()=>rimuoviTask(task)}" src={trash} alt="trash" class="w-[20px] absolute right-[10px] invert-[0.8] hover:animate-bounce cursor-pointer hover:invert-[1] border-b-2 border-cyan-400 pb-1"/>
        <p class="text-neutral-300 font-semibold absolute left-[45px] text-[10px] sm:text-[12px] w-[70%] h-[55px] items-center flex rounded-2xl leading-tight text-start cursor-default">{task}</p>
        </div>
        {/each}
       </div>
      </div>
    </div>


    <div class="flex rounded-3xl p-3 w-[100%] justify-center">
      <div class="flex w-[100%] text-neutral-300 font-semibold text-base justify-center">
        <p class="absolute left-[30px] lg:left-[427px] top-[240px] lg:top-[11.5px] cursor-default">{$lingua.progetti.taskcomp}</p>
       <div class="bg-black bg-opacity-30 grid grid-cols-1 rounded-3xl gap-y-2 p-3 w-[100%] sm:w-[580px] lg:w-[45%] h-[180px] lg:h-[430px] absolute top-[265px] lg:top-[36px] overflow-y-auto overflow-x-hidden">
        {#each taskComplete as taskc}
        <div class="flex w-[100%] h-[60px] bg-gradient-to-b from-neutral-900 to-neutral-900 border-2 border-neutral-800 rounded-2xl relative items-center sfoca">
        <img src={check} alt="trash" class="w-[20px] absolute left-[10px] invert-[1] opacity-100">
        <img on:click="{()=>rimuoviTaskC(taskc)}" src={trash} alt="trash" class="w-[20px] absolute right-[10px] invert-[0.8] hover:animate-bounce cursor-pointer hover:invert-[1] border-b-2 border-cyan-400 pb-1"/>
        <p class="text-neutral-300 font-semibold absolute left-[45px] text-[10px] sm:text-[12px] w-[70%] h-[55px] items-center flex rounded-2xl leading-tight text-start line-through cursor-default">{taskc}</p>
        </div>
       {/each}
       </div>
      </div>
    </div>

   


    
   </div>

   <div class="bg-neutral-900 absolute bottom-[0%] border-t-2 border-neutral-700 rounded-b-3xl h-[60px] w-[100%] flex justify-center items-center "  >
     <input bind:value="{newTask}" on:change="{(event)=>aggiungiTask(event.target.value)}" placeholder={$lingua.progetti.aggiungi} maxlength="120" class="rounded-md p-4 bg-neutral-600 text-neutral-200 font-semibold w-[80%] h-[30px] outline-none" >
   </div>

     

  
  </div>
  </div>
  
  

  <style>
    .sfoca{
  animation: forwards 0.5s sfoc;
  opacity: 0;
}
@keyframes sfoc {
  0%{filter: blur(5px); filter: invert(1);}
  100%{filter: blur(0px); filter: invert(0); opacity: 1;}
}

.transizione{
    transition: 1s;
  }

  </style>