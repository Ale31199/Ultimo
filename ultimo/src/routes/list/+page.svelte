<script>
  import trash from './imma/trash.png';
  import check from './imma/check.png';
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
 
   <div class="bg-gradient-to-t from-neutral-950 to-neutral-900 sticky top-0 border-b-2 border-neutral-800 rounded-t-3xl h-[60px] w-[100%] items-center flex">
   <p class="text-neutral-300 font-bold text-3xl absolute left-[30px]">To Do List</p>
   </div>


   <div class="absolute top-[75px] sm:top-[63px]  overflow-hidden gap-y-5 grid grid-cols-1 grid-rows-2 justify-items-center h-[470px] w-[100%]">


    <div class="flex rounded-3xl p-3 w-[100%] justify-center">
      <div class="flex w-[100%] text-neutral-300 font-semibold text-base justify-center">
        <p class="absolute left-[30px]">Task Da Completare</p>
       <div class="grid grid-cols-1 rounded-3xl gap-y-2 p-3 w-[340px] sm:w-[600px] h-[180px] absolute top-[35px] overflow-y-auto overflow-x-hidden">

        <div class="flex w-[100%] h-[60px] bg-neutral-800 rounded-2xl relative items-center">
        <img src={check} alt="trash" class="w-[25px] absolute left-[10px] invert-[0] cursor-pointer opacity-20 border-2 hover:border-red-400 rounded-full hover:opacity-100 hover:invert-[1]"/>
        <img src={trash} alt="trash" class="w-[25px] absolute right-[10px] invert-[0.5] cursor-pointer hover:invert-[1] border-b-2 border-cyan-400 pb-1"/>
        <p class="text-neutral-300 font-semibold absolute left-[45px] text-[10px] sm:text-[12px] w-[70%] h-[55px] items-center flex rounded-2xl leading-tight text-start">fare responsive per torta omn</p>
        </div>
    
       </div>
      </div>
    </div>




    
   </div>

   <div class="bg-gradient-to-t to-neutral-950 from-neutral-900 absolute bottom-[0%] border-t-2 border-neutral-800 rounded-b-3xl h-[60px] w-[100%] flex justify-center items-center "  >
     <input placeholder="Aggiungi Task..." maxlength="120" class="rounded-md p-4 bg-neutral-800 text-neutral-500 w-[80%] h-[30px] outline-none" >
   </div>

     

  
  </div>
  </div>
  
  