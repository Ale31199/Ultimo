<script>
  import logo from '/src/routes/pixelnightmare/logo2.png';
  import choices from '/src/routes/pixelnightmare/choicesound.mp3';
  import castello from '/src/routes/pixelnightmare/castello.jpg';

  // @ts-ignore
  import sto from '/src/routes/pixelnightmare/story.json';
   // @ts-ignore
  import stoeng from '/src/routes/pixelnightmare/storyeng.json';

  import { lingua } from './lingua.js';

const TraduciPagina=(linguatraduci)=>{
  switch(linguatraduci){
    case 'ita':
      lingua.set(sto)
      break;
    case 'eng':
      lingua.set(stoeng)
    break;
  }
}



      /////////////////////////////////////////////////////////////////////


      $: text = $lingua.storia.t0
      $: choice1 = $lingua.storia.r0[0]
      $: choice2 = $lingua.storia.r0[1]

      // @ts-ignore
      
      const GStory=(risp)=>{
    if(text === $lingua.storia.t0 && risp === $lingua.storia.r0[0]){
      setTimeout(()=>{
      text = $lingua.storia.t1
      choice1 = $lingua.storia.r1
      choice2 = ''
    },1500)
    } else if(text === $lingua.storia.t1 && risp === $lingua.storia.r1){
      setTimeout(()=>{
      text = $lingua.storia.t3
      choice1= $lingua.storia.r2[0]
      choice2=$lingua.storia.r2[1]
    }, 1500)
    } else if(text === $lingua.storia.t0 && risp === $lingua.storia.r0[1]){
      setTimeout(()=>{
      text= $lingua.storia.t2
      choice1=''
      choice2=''
    }, 1500)
    }else if(text === $lingua.storia.t3 && risp === $lingua.storia.r2[0]){
      setTimeout(()=>{
      text=$lingua.storia.t4
      choice1=$lingua.storia.r3[0]
      choice2=$lingua.storia.r3[1]
    }, 1500)
    }else if(text === $lingua.storia.t3 && risp === $lingua.storia.r2[1]){
      setTimeout(()=>{
      text= $lingua.storia.t5
      choice1=$lingua.storia.r4[0]
      choice2=''
    }, 1500)
    }else if(text === $lingua.storia.t5 && risp === $lingua.storia.r4[0]){
      setTimeout(()=>{
      text= $lingua.storia.t4
      choice1= $lingua.storia.r3[0]
      choice2= $lingua.storia.r3[1] 
    }, 1500)

    }else if(text === $lingua.storia.t4 && risp === $lingua.storia.r3[0]){
      setTimeout(()=>{
      text= $lingua.storia.t6
      choice1= $lingua.storia.r5[0]
      choice2= $lingua.storia.r5[1]
    }, 1500)
    }else if(text === $lingua.storia.t4 && risp === $lingua.storia.r3[1]){
      setTimeout(()=>{
      text= $lingua.storia.t7
      choice1= $lingua.storia.r6[0]
      choice2= $lingua.storia.r6[1]
    }, 1500)
    }else if(text === $lingua.storia.t6 && risp === $lingua.storia.r5[0]){
      setTimeout(()=>{
      text= $lingua.storia.t8
      choice1= $lingua.storia.r7
      choice2= ''
    }, 1500)
    }else if(text === $lingua.storia.t6 && risp === $lingua.storia.r5[1]){
      setTimeout(()=>{
      text = $lingua.storia.t9
      choice1= $lingua.storia.r8
      choice2=''
    }, 1500)
    }else if(text === $lingua.storia.t7 && risp === $lingua.storia.r6[0]){
      setTimeout(()=>{
      text= $lingua.storia.t8
      choice1= $lingua.storia.r7
      choice2= ''
    }, 1500)
    }else if(text === $lingua.storia.t7 && risp === $lingua.storia.r6[1]){
      setTimeout(()=>{
      text= $lingua.storia.t10
      choice1= $lingua.storia.r9
      choice2= ''
    }, 1500)
    }else if(text === $lingua.storia.t10 && risp === $lingua.storia.r9){
      setTimeout(()=>{
      text= $lingua.storia.t7
      choice1=$lingua.storia.r6[0]
      choice2=$lingua.storia.r6[1]
    }, 1500)
    }else if(text === $lingua.storia.t8 && risp === $lingua.storia.r7){
      setTimeout(()=>{
      text= $lingua.storia.t11
      choice1= $lingua.storia.r10
      choice2=''
    }, 1500)
    }else if(text === $lingua.storia.t9 && risp === $lingua.storia.r8){
      setTimeout(()=>{
      text= $lingua.storia.t12
      choice1= $lingua.storia.r11[0]
      choice2= $lingua.storia.r11[1]
    }, 1500)
    }else if(text === $lingua.storia.t11 && risp === $lingua.storia.r10){
      setTimeout(()=>{
      text= $lingua.storia.t13
      choice1= $lingua.storia.r12
      choice2= ''
    }, 1500)
    }else if(text === $lingua.storia.t12 && risp === $lingua.storia.r11[0]){
      setTimeout(()=>{
      text= $lingua.storia.t13
      choice1= $lingua.storia.r12
      choice2= ''
    }, 1500)
    }else if(text === $lingua.storia.t12 && risp === $lingua.storia.r11[1]){
      setTimeout(()=>{
      text= $lingua.storia.t13
      choice1= $lingua.storia.r12
      choice2= ''
    }, 1500)
    }else if(text === $lingua.storia.t13 && risp === $lingua.storia.r12){
      setTimeout(()=>{
      text= $lingua.storia.t14
      choice1= $lingua.storia.r13[0]
      choice2= $lingua.storia.r13[1]
    }, 1500)
    }else if(text === $lingua.storia.t14 && risp === $lingua.storia.r13[0]){
      setTimeout(()=>{
      text= $lingua.storia.t15
      choice1=''
      choice2=''
    }, 1500)
    }else if(text === $lingua.storia.t14 && risp === $lingua.storia.r13[1]){
      setTimeout(()=>{
      text= $lingua.storia.t15
      choice1=''
      choice2=''
    }, 1500)
    }
  }


  let audioElement;
  let soundcho = choices

  const playsound=()=>{
  audioElement = new Audio(soundcho);
  audioElement.play()
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
  <a href="/progetti" class="  font-bold mr-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {progetti ? "border-b-2 border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('progetti')}">{$lingua.storia.progetti}</a>
  </div>
</div>


<select on:change="{(event)=>TraduciPagina(event.target.value)}" class="w-[100px] absolute top-[200px] sm:top-[200px] md:top-[130px] bg-gradient-to-tr p-2 from-white to-neutral-300 border-2 border-neutral-300 rounded-2xl invert">
  <option value="ita">Italiano</option>
  <option value="eng">English</option>
  </select>

<div class="flex justify-center w-[100%] h-[680px] relative top-[15%]">
<div class="w-[400px] sm:w-[500px] md:w-[700px] lg:w-[1000px] h-[600px]  rounded-3xl relative top-[0%] bottom-[20%] flex justify-center ">
    <audio>
      <source src={soundcho} type="audio/mpeg"/>
    </audio>
    <img src={castello} alt="castle" class="w-[400px] sm:w-[500px] md:w-[900px] lg:w-[1400px] h-[100%] absolute bg-cover rounded-3xl shadow-inner" />
    <img src={logo} alt="logo" class="w-[260px] sm:w-[260px] md:w-[330px] lg:w-[330px] absolute top-[3%] " />
    <div class="absolute w-[300px] sm:w-[400px] md:w-[600px] lg:w-[900px] h-[50%] bg-gradient-to-br to-gray-900 from-black border-2 border-gray-900 rounded-3xl top-[20%] md:top-[25%] flex justify-center shadow-xl shadow-gray-950"><p class="tracking-tighter text-white text-[11px] sm:text-[13px] md:text-[14px] lg:text-base w-[80%] h-[80%] text-justify absolute top-[1%] font-mono ">{text}</p></div>
    
    <div class="flex justify-center w-[100%] relative">
    <div class="grid grid-cols-1 grid-rows-2 absolute bottom-[5%] h-[15%] w-[100%]  justify-items-center">
      <button value={choice1} on:click="{()=>GStory(choice1)}" on:click="{()=>playsound()}" class=" w-[300px] sm:w-[350px] md:w-[500px] rounded-md hover:bg-teal-950 hover:text-white hover:border-white hover:border-solid hover:border-2 bg-gradient-to-br to-gray-900 from-black  border-solid border-2 border-teal-500 text-teal-500 font-mono relative bottom-[50%] text-[12px] shadow-xl shadow-gray-900">{choice1}</button>
      <button value={choice2} on:click="{()=>GStory(choice2)}" on:click="{()=>playsound()}" class=" w-[300px] sm:w-[350px] md:w-[500px] rounded-md hover:bg-teal-950 hover:text-white hover:border-white hover:border-solid hover:border-2 bg-gradient-to-br to-gray-900 from-black  border-solid border-2 border-teal-500 text-teal-500 font-mono relative bottom-[20%] text-[12px] shadow-xl shadow-gray-900">{choice2}</button>
    </div>
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
