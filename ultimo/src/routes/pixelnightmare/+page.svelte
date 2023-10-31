<script>
  import logo from '/src/routes/pixelnightmare/logo2.png';
  import choices from '/src/routes/pixelnightmare/choicesound.mp3';
  import castello from '/src/routes/pixelnightmare/castello.jpg';

  import sto from '/src/routes/pixelnightmare/story.json';


      /////////////////////////////////////////////////////////////////////
      let text = sto.storia.t0
      let choice1 = sto.storia.r0[0]
      let choice2 = sto.storia.r0[1]

      const GStory=(risp)=>{
    if(text === sto.storia.t0 && risp === sto.storia.r0[0]){
      setTimeout(()=>{
      text = sto.storia.t1
      choice1 = sto.storia.r1
      choice2 = ''
    },1500)
    } else if(text === sto.storia.t1 && risp === sto.storia.r1){
      setTimeout(()=>{
      text = sto.storia.t3
      choice1= sto.storia.r2[0]
      choice2=sto.storia.r2[1]
    }, 1500)
    } else if(text === sto.storia.t0 && risp === sto.storia.r0[1]){
      setTimeout(()=>{
      text= sto.storia.t2
      choice1=''
      choice2=''
    }, 1500)
    }else if(text === sto.storia.t3 && risp === sto.storia.r2[0]){
      setTimeout(()=>{
      text=sto.storia.t4
      choice1=sto.storia.r3[0]
      choice2=sto.storia.r3[1]
    }, 1500)
    }else if(text === sto.storia.t3 && risp === sto.storia.r2[1]){
      setTimeout(()=>{
      text= sto.storia.t5
      choice1=sto.storia.r4[0]
      choice2=''
    }, 1500)
    }else if(text === sto.storia.t5 && risp === sto.storia.r4[0]){
      setTimeout(()=>{
      text= sto.storia.t4
      choice1= sto.storia.r3[0]
      choice2= sto.storia.r3[1] 
    }, 1500)

    }else if(text === sto.storia.t4 && risp === sto.storia.r3[0]){
      setTimeout(()=>{
      text= sto.storia.t6
      choice1= sto.storia.r5[0]
      choice2= sto.storia.r5[1]
    }, 1500)
    }else if(text === sto.storia.t4 && risp === sto.storia.r3[1]){
      setTimeout(()=>{
      text= sto.storia.t7
      choice1= sto.storia.r6[0]
      choice2= sto.storia.r6[1]
    }, 1500)
    }else if(text === sto.storia.t6 && risp === sto.storia.r5[0]){
      setTimeout(()=>{
      text= sto.storia.t8
      choice1= sto.storia.r7
      choice2= ''
    }, 1500)
    }else if(text === sto.storia.t6 && risp === sto.storia.r5[1]){
      setTimeout(()=>{
      text = sto.storia.t9
      choice1= sto.storia.r8
      choice2=''
    }, 1500)
    }else if(text === sto.storia.t7 && risp === sto.storia.r6[0]){
      setTimeout(()=>{
      text= sto.storia.t8
      choice1= sto.storia.r7
      choice2= ''
    }, 1500)
    }else if(text === sto.storia.t7 && risp === sto.storia.r6[1]){
      setTimeout(()=>{
      text= sto.storia.t10
      choice1= sto.storia.r9
      choice2= ''
    }, 1500)
    }else if(text === sto.storia.t10 && risp === sto.storia.r9){
      setTimeout(()=>{
      text= sto.storia.t7
      choice1=sto.storia.r6[0]
      choice2=sto.storia.r6[1]
    }, 1500)
    }else if(text === sto.storia.t8 && risp === sto.storia.r7){
      setTimeout(()=>{
      text= sto.storia.t11
      choice1= sto.storia.r10
      choice2=''
    }, 1500)
    }else if(text === sto.storia.t9 && risp === sto.storia.r8){
      setTimeout(()=>{
      text= sto.storia.t12
      choice1= sto.storia.r11[0]
      choice2= sto.storia.r11[1]
    }, 1500)
    }else if(text === sto.storia.t11 && risp === sto.storia.r10){
      setTimeout(()=>{
      text= sto.storia.t13
      choice1= sto.storia.r12
      choice2= ''
    }, 1500)
    }else if(text === sto.storia.t12 && risp === sto.storia.r11[0]){
      setTimeout(()=>{
      text= sto.storia.t13
      choice1= sto.storia.r12
      choice2= ''
    }, 1500)
    }else if(text === sto.storia.t12 && risp === sto.storia.r11[1]){
      setTimeout(()=>{
      text= sto.storia.t13
      choice1= sto.storia.r12
      choice2= ''
    }, 1500)
    }else if(text === sto.storia.t13 && risp === sto.storia.r12){
      setTimeout(()=>{
      text= sto.storia.t14
      choice1= sto.storia.r13[0]
      choice2= sto.storia.r13[1]
    }, 1500)
    }else if(text === sto.storia.t14 && risp === sto.storia.r13[0]){
      setTimeout(()=>{
      text= sto.storia.t15
      choice1=''
      choice2=''
    }, 1500)
    }else if(text === sto.storia.t14 && risp === sto.storia.r13[1]){
      setTimeout(()=>{
      text= sto.storia.t15
      choice1=''
      choice2=''
    }, 1500)
    }
  }

  let playy = false
  const thesound = choices;

  const playsound=()=>{
    if (playy){
    thesound.play()
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


<div class="w-[100%] h-[60%] md:h-[60%] lg:h-[80%] rounded-3xl relative top-36 flex justify-center ">
    <audio id='audio' bind:this={thesound}></audio>
    <img src={castello} alt="castle" class="w-[100%] md:w-[80%] lg:w-[50%] h-[100%] absolute bg-cover rounded-3xl shadow-inner" />
    <img src={logo} alt="logo" class="w-[70%] md:w-[30%] lg:w-[20%] absolute top-[3%] " />
    <div class="absolute w-[90%] md:w-[70%] lg:w-[40%] h-[50%] bg-gradient-to-br to-neutral-800 from-black rounded-3xl top-[20%] md:top-[25%] flex justify-center"><p class="tracking-tighter text-white text-xs md:text-base lg:text-base w-[80%] h-[80%] text-justify absolute top-[1%] font-mono">{text}</p></div>
    <div class="grid grid-cols-1 grid-rows-2 absolute left-[9.5%] bottom-[5%] h-[15%] w-[90%] md:w-[60%] lg:w-[40%] justify-items-center">
      <button value={choice1} on:click="{()=>GStory(choice1)}" on:click="{()=>playsound()}" class="w-[100%] md:w-[100%] lg:w-[70%] h-[100%] rounded-md hover:bg-teal-950 hover:text-white hover:border-white hover:border-solid hover:border-2 bg-neutral-900 border-solid border-2 border-teal-500 text-teal-500 font-mono relative bottom-[50%] text-sm">{choice1}</button>
      <button value={choice2} on:click="{()=>GStory(choice2)}" on:click="{()=>playsound()}" class="w-[100%] md:w-[100%] lg:w-[70%] h-[100%] rounded-md hover:bg-teal-950 hover:text-white hover:border-white hover:border-solid hover:border-2 bg-neutral-900 border-solid border-2 border-teal-500 text-teal-500 font-mono relative bottom-[20%] text-sm">{choice2}</button>
    </div>
</div>


