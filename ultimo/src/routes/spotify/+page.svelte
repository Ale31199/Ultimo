<script>
import home from './im/home.png';
import src from './im/search.png';
import devices from './im/devices.png';
import friends from './im/friends.png';
import library from './im/library.png';
import medium from './im/medium-volume.png';
import mic from './im/microphone.png';
import library2 from './im/music-album.png';
import mute from './im/mute.png';
import pausee from './im/pause.png';
import play from './im/play-button-arrowhead.png';
import prev from './im/previous.png';
import queue from './im/queue.png';
import repeat from './im/repeat.png';
import shuffle from './im/shuffle.png'; 
import music from './im/music.png';
import star from './im/star2 - Copy.jpg';
import r1 from './im/R2.jpg';
import r2 from './im/R3.jpg';
import r3 from './im/R4.jpg';
import r4 from './im/R5.jpg';
import r5 from './im/R6 .jpg';
import r6 from './im/R7 .jpg';
import r7 from './im/R8.jpg';
import r8 from './im/R9 .jpg';
import r9 from './im/R10.jpg';
import r10 from './im/R11 .jpg';
import hrt from './im/heart.png';
import user from './im/user.png';
import starfield from './songs/starfield.mp3';
import villain from './songs/bornvillain.mp3';
import burn from './songs/burninto.mp3';
import selfcontrol from './songs/selfcontrol.mp3';
import masterpuppets from './songs/masterpuppets.mp3';
import entermatrix from './songs/entermatrix.mp3';
import alleyes from './songs/alleyes.mp3';
import becausebonjovi from './songs/becausebonjovi.mp3';
import thismeanswar from './songs/thismeanswar.mp3';
import bad from './songs/bad.mp3';
import someday from './songs/someday.mp3';
	//import { rollupVersion } from 'vite';


let openlibrary = false;
const openLib=()=>{
  openlibrary = !openlibrary
}

let openlibra = false;
const openLibra=()=>{
  openlibra = !openlibra
}

let audio = starfield;
let audiovillain = villain;
let audioburn = burn;
let audiocontrol = selfcontrol;
let audiomaster = masterpuppets;
let audiomatrix = entermatrix;
let audiobon = becausebonjovi
let audiowar = thismeanswar;
let audioeyes = alleyes;
let audiobad = bad;
let audiosome = someday;




let artist = music;
let song = '';
let name = '';
let url;
let brano = null;
let stato = false;
let plause = play
let mutato = false
let muta = medium

let durata= 0
let secondi = Math.floor(durata % 60)
let minuti  = Math.floor(durata / 60)
let riproduzione = 0
let min = Math.floor(riproduzione / 60)
let sec = Math.floor(riproduzione % 60)


const musica = (canzone) => {
  if (stato) {
    brano.pause();
    stato = false;
    plause = play 
  }else {
    switch (canzone) {
      case 'starfield':
        artist = star;
        song = 'Starfield Official...';
        name = 'Bethesda Games St...';
        url = links[0];
        plause = pausee
        break;

      case 'born':
        artist = r1;
        song = 'Born Villain';
        name = 'Marilyn Manson';
        url = links[1];
        plause = pausee
        break;

      case 'master':
        artist = r4;
        song = 'Master of Puppets';
        name = 'Metallica';
        url = links[4];
        plause = pausee
        break;

        case 'burn' :
        artist= r2,
        song= "Burn Into The Ground",
        name= "Nickelback",
        url= links[2]
        plause = pausee
        break

        case 'self' :
        artist=r3,
        song= "Self Control",
        name= "Laura Branigan",
        url= links[3]
        plause = pausee
        break

        case 'matrix' :
        artist=r5,
        song= "Enter The Matrix",
        name= "Aurora",
        url= links[5]
        plause = pausee
        break

        case 'bon' :
        artist= r7,
        song= "Because We Can",
        name= "Bon Jovi",
        url= links[6]
        plause = pausee
        break

        case 'war' :
        artist=r8,
        song= "This Means War",
        name= "Nickelback",
        url= links[7] 
        plause = pausee
        break

        case 'eyes' :
        artist= r6,
        song= "All Eyes On Me",
        name= "Eminem",
        url= links[8]
        plause = pausee
        break

        case 'bad' :
        artist= r9,
        song= "Bad",
        name= "Michael Jackson",
        url= links[9]
        plause = pausee
        break

        case 'someday' :
        artist= r10,
        song= "Someday",
        name= "Nickelback",
        url= links[10]
        plause = pausee
        break

      default:
        break;
    }


      if (url){
      brano = new Audio(url);
      plause = pausee
      brano.currentTime = 0
      brano.addEventListener('canplay', ()=>{
        brano.play();
        stato = true
        durata = brano.duration
        secondi = Math.floor(durata % 60)
        minuti = Math.floor(durata / 60)
        })
      
      brano.addEventListener('timeupdate', ()=>{
      riproduzione = brano.currentTime
      min = Math.floor(riproduzione / 60)
      sec = Math.floor(riproduzione % 60)
      let progressobarra = (riproduzione / durata) * 100
      player.style.width = `${progressobarra}%`
      })

      brano.addEventListener('ended', ()=>{
        min = 0
        sec = 0
        minuti = 0 
        secondi = 0
        plause = play
        stato = false
        player.style.width = '0'
      })
    }
  }
};

let autopla = false;

const autoplay = () => {
  if (autopla) {
    autopla = false;
  } else {
    autopla = true;
    brano.addEventListener('ended', () => {
      brano = new Audio(url);
      brano.addEventListener('canplay', () => {
        brano.play();
        plause = pausee;
        durata = brano.duration;
        secondi = Math.floor(durata % 60);
        minuti = Math.floor(durata / 60);
      });

      brano.addEventListener('timeupdate', () => {
        riproduzione = brano.currentTime;
        min = Math.floor(riproduzione / 60);
        sec = Math.floor(riproduzione % 60);
        let progressobarra = (riproduzione / durata) * 100;
        player.style.width = `${progressobarra}%`;
      });

      brano.addEventListener('ended', ()=>{
        min = 0
        sec = 0
        minuti = 0 
        secondi = 0
        plause = play
        stato = false
        player.style.width = '0'
      })
    });
  }
};


const mettipausa=()=>{
  if (stato){
    riproduzione= brano.currentTime
    brano.pause()
    stato = false
    plause = play
  } else{
    riproduzione= brano.currentTime
    brano.play()
    stato = true
    plause = pausee
  }
}


const mutasong=()=>{
  if (mutato && brano.muted){
      muta = medium
      brano.muted = false
      }else{
      muta = mute
      brano.muted = true
    }
    mutato = !mutato
}


const links = [
audio = starfield,
audiovillain = villain,
audioburn = burn,
audiocontrol = selfcontrol,
audiomaster = masterpuppets,
audiomatrix = entermatrix,
audiobon = becausebonjovi,
audiowar = thismeanswar,
audioeyes = alleyes,
audiobad = bad,
audiosome = someday
]



let homee= false
 let skills = false
 let progetti = true

  // @ts-ignore
  const selezionaPag=(pagina)=>{
    switch (pagina) {
      case 'home':
        homee = true
        skills =false
        progetti=false
        break;

        case 'skills':
          skills = true
          homee = false
          progetti = false
          break;

          case 'progetti':
            progetti = true
            homee = false
            skills= false
            break;
    
      default: homee= false;
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
  <a href="/" class=" font-bold ml-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {homee ? "border-b-2 rounded-sm border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('home')}">Home</a>
  <a href="/skills" class="  font-bold cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {skills ? "border-b-2 border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('skills')}">Skills</a>
  <a href="/progetti" class="  font-bold mr-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {progetti ? "border-b-2 border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('progetti')}">Progetti</a>
  </div>
</div>



<div class="flex justify-center w-[100%] h-[800px] xl:h-[1000px]">

  <div class="flex justify-center items-center transform sm:scale-[120%] xl:scale-[140%] absolute xl:top-[20%] top-[35%] sm:top-[25%] md:top-[15%]">

    <div class="invisible md:visible grid grid-cols-1 grid-rows-2 bg-gradient-to-tr from-black to-neutral-950 border-2 border-neutral-950 w-[7%] h-[570px] rounded-xl absolute top-[10%] md:left-[-290px] lg:left-[-375px] {openlibrary ? "md:w-[200px] lg:w-[200px]": "lg:w-[80px] md:w-[70px]"}">
      <div class="w-[100%] h-[50%] bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-900 rounded-xl flex justify-items-center items-center {openlibrary ? "md:h-[30%]": ""} ">
      <div class="grid grid-cols-1 grid-rows-4 w-[100%] h-[100%] justify-items-center items-center relative {openlibrary ? "md:grid-cols-2 md:grid-rows-2 md:w-[60%] h-[30%] gap-y-[150%]": ""}">
        <img src={home} alt="home" class="w-[40%] lg:w-[25%] invert-[0.5] relative top-[10%] hover:invert cursor-pointer {openlibrary ? "md:w-[30%]": ""}"/>
        <p class="text-neutral-500 text-sm relative cursor-default {openlibrary ? "text-xl left-[0%]": ""}">Home</p>
        <img src={src} alt="home" class="w-[40%] lg:w-[25%] invert-[0.5] relative top-[10%] hover:invert cursor-pointer {openlibrary ? "md:w-[30%]": ""}"/>
        <p class="text-neutral-500 text-sm relative cursor-default {openlibrary ? "text-xl left-[0%]": ""}">Search</p>
      </div>
      </div>
  
      <div class="w-[100%] absolute bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-900 rounded-xl {openlibrary ? "overflow-y-auto top-[19.5%] h-[460px] ": "overflow-y-auto top-[33%] h-[380px]"} overflow-x-hidden">
      <button class="flex items-center sticky bottom-[90%]" >
      <div on:click="{()=>openLib()}" class="grid grid-cols-1 grid-rows-2 justify-items-center items-center sticky top-[90%] {openlibrary ? "md:grid-cols-2 grid-rows-1 md:w-[60%] md:h-[30%] md:bg-transparent": "bg-neutral-900 rounded-lg shadow-sm shadow-black"}">
      <img src={library} alt="home" class="w-[40%] lg:w-[25%] invert-[0.5] relative top-[10%] hover:invert cursor-pointer {openlibrary ? "md:w-[35%]": ""}"/>
      <p class="text-neutral-500 text-sm relative {openlibrary ? "text-xl left-[10%]": ""}">Library</p>
      </div>
      </button>
  
      <div class="grid grid-cols-1 absolute grid-rows-11 w-[100%] top-[15%] gap-y-3 justify-items-center items-center  ">
      <div class=" w-[95%] bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-900 rounded-xl cursor-pointer hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700 " on:click="{()=>musica('born')}">
      <img src={r1} alt="star" class=" {openlibrary ? "md:w-[35%]": ""} w-[100%] rounded-lg cursor-pointer  hover:border-green-400 hover:border-2 "/>
      <div class="{openlibrary ? "visible": "invisible"} flex flex-col justify-start absolute top-[3%] left-[40%] w-[100%]">
      <p class="text-white font-semibold text-[10px] relative ">Born Villain</p>
      <p class="text-neutral-700 text-[10px] relative ">Marilyn Manson</p>
      </div>
      </div>

      <div class=" w-[95%] bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-900 rounded-xl cursor-pointer hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700" on:click="{()=>musica('bad')}">
      <img src={r9} alt="star"   class=" {openlibrary ? "md:w-[35%]": ""} w-[100%] rounded-lg cursor-pointer  hover:border-green-400 hover:border-2"/>
      <div class="{openlibrary ? "visible": "invisible"} flex flex-col justify-start absolute top-[18%] left-[40%] w-[100%]">
      <p class="text-white font-semibold text-[10px]">Bad</p>
      <p class="text-neutral-700 text-[10px] relative ">Michael Jackson</p>
      </div>
      </div>

      <div class=" w-[95%] bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-900 rounded-xl cursor-pointer hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700 " on:click="{()=>musica('matrix')}">
      <img src={r5} alt="star"  class=" {openlibrary ? "md:w-[35%]": ""} w-[100%] rounded-lg cursor-pointer  hover:border-green-400 hover:border-2"/>
      <div class="{openlibrary ? "visible": "invisible"} flex flex-col justify-start absolute top-[33%] left-[40%] w-[100%]">
      <p class="text-white font-semibold text-[10px]">Enter The Matrix</p>
      <p class="text-neutral-700 text-[10px] relative ">Aurora</p>
      </div>
      </div>

      <div class=" w-[95%] bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-900 rounded-xl cursor-pointer hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700 " on:click="{()=>musica('self')}">
      <img src={r3} alt="star"  class="{openlibrary ? "md:w-[35%]": ""} w-[100%] rounded-lg cursor-pointer  hover:border-green-400 hover:border-2"/>
      <div class="{openlibrary ? "visible": "invisible"} flex flex-col justify-start absolute top-[47%] left-[40%] w-[100%]">
      <p class="text-white font-semibold text-[10px]">Self Control</p>
      <p class="text-neutral-700 text-[10px] relative ">Laura Branigan</p>
      </div>
      </div>

      <div class=" w-[95%] bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-900 rounded-xl cursor-pointer hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700"  on:click="{()=>musica('someday')}">
      <img src={r10} alt="star"  class="{openlibrary ? "md:w-[35%]": ""} w-[100%] rounded-lg cursor-pointer hover:border-green-400 hover:border-2"/>
      <div class="{openlibrary ? "visible": "invisible"} flex flex-col justify-start absolute top-[61.5%] left-[40%] w-[100%]">
      <p class="text-white font-semibold text-[10px]">Someday</p>
      <p class="text-neutral-700 text-[10px] relative ">Nickelback</p>
      </div>
      </div>

      <div class=" w-[95%] bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-900 rounded-xl cursor-pointer hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700"  on:click="{()=>musica('burn')}">
      <img src={r2} alt="star"   class="{openlibrary ? "md:w-[35%]": ""} w-[100%] rounded-lg cursor-pointer hover:border-green-400 hover:border-2"/>
      <div class="{openlibrary ? "visible": "invisible"} flex flex-col justify-start absolute top-[76%] left-[40%] w-[100%]">
      <p class="text-white font-semibold text-[10px]">Burn Into The Ground</p>
      <p class="text-neutral-700 text-[10px] relative ">Nickelback</p>
      </div>
      </div>

      <div class=" w-[95%] bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-900 rounded-xl cursor-pointer hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700"  on:click="{()=>musica('war')}">
      <img src={r8} alt="star"  class="{openlibrary ? "md:w-[35%]": ""} w-[100%] rounded-lg cursor-pointer hover:border-green-400 hover:border-2"/>
      <div class="{openlibrary ? "visible": "invisible"} flex flex-col  justify-start absolute top-[91%] left-[40%] w-[100%]">
      <p class="text-white font-semibold text-[10px]">This Means War</p>
      <p class="text-neutral-700 text-[10px] relative ">Nickelback</p>
      </div>
      </div>
      </div>
    </div>
  </div>

 <div class="flex bg-gradient-to-tr from-black to-neutral-900 w-[330px] sm:w-[500px] h-[600px] md:h-[570px] border-2 border-neutral-900 rounded-2xl absolute top-[15%] sm:top-[20%]  md:top-[10%]  md:right-[-290px] lg:right-[-380px] {openlibrary ? "md:w-[360px] lg:w-[550px]": "md:w-[500px] lg:w-[670px]"}">
 <div class="flex w-[100%] h-[80px] items-center bg-gradientto-tr from-black to-neutral-900 rounded-2xl absolute border-b-2 shadow-md shadow-black border-neutral-900 top-[0%]">
  <p class="absolute left-[5%] text-white font-bold text-[20px] ">Good Morning</p>
  <img src={user} alt="src" class="w-[20px] absolute right-[5%] invert cursor-not-allowed"/>
 <img src={friends} alt="src" class="w-[25px] absolute right-[20%] invert cursor-not-allowed"/>
 </div>

 <div class="flex flex-col absolute top-[15%] md:top-[17%] w-[100%] h-[420px] md:h-[460px]  bg-transparent rounded-2xl border-2 border-neutral-900 md:border-0 overflow-auto overflow-x-hidden barra barra2">
  <div class="flex absolute w-[100%] h-[500px] sm:h-[250px] {openlibrary ? "md:h-[500px] lg:h-[250px]": "md:h-[250px] lg:h-[250px]"}">
    <div class="grid grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 w-[100%] justify-items-center items-center {openlibrary ? "md:grid-cols-1 md:grid-rows-6 lg:grid-cols-2 lg:grid-rows-3": "md:grid-cols-2 md:grid-rows-3 lg:grid-cols-2 lg:grid-rows-3 "}">
      <div class="flex relative w-[270px] sm:w-[200px] h-[60px] top-[10px] {openlibrary ? "md:w-[270px] lg:w-[250px]": "md:w-[200px] lg:w-[300px]"} bg-gradient-to-tr from-black to-neutral-800 border-2 border-neutral-800 rounded-xl items-center cursor-not-allowed hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700">
        <img  src={hrt} alt="star" class="w-[50px] h-[50px] p-3 bg-gradient-to-tr from-yellow-950 to-yellow-500 invert rounded-2xl left-[5px] relative"/>
        <p class="text-white font-semibold absolute left-[70px] text-[13px] ">Lista Brani Preferiti</p>
      </div>
      <div on:click="{()=>musica('starfield')}" class="flex relative w-[270px] sm:w-[200px] h-[60px] top-[10px] {openlibrary ? "md:w-[270px] lg:w-[250px]": "md:w-[200px] lg:w-[300px]"}  bg-gradient-to-tr from-black to-neutral-800 border-2 border-neutral-800 rounded-xl cursor-pointer items-center hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700">
        <img  src={star} alt="star" class="w-[50px] h-[50px] bg-gradient-to-tr from-yellow-950 to-yellow-500 rounded-2xl left-[5px] relative"/>
        <p class="text-white font-semibold absolute left-[70px] text-[13px]">Starfield's Playlist</p>
      </div>
      <div on:click="{()=>musica('born')}" class="flex relative w-[270px] sm:w-[200px] h-[60px] top-[10px] {openlibrary ? "md:w-[270px] lg:w-[250px]": "md:w-[200px] lg:w-[300px]"}  bg-gradient-to-tr from-black to-neutral-800 border-2 border-neutral-800 rounded-xl cursor-pointer items-center hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700">
        <img  src={r1} alt="star" class="w-[50px] h-[50px] bg-gradient-to-tr from-yellow-950 to-yellow-500 rounded-2xl left-[5px] relative"/>
        <p class="text-white font-semibold absolute left-[70px] text-[13px]">Marilyn Manson's Playlist</p>
      </div>
      <div on:click="{()=>musica('burn')}" class="flex relative w-[270px] sm:w-[200px] h-[60px]  top-[10px] {openlibrary ? "md:w-[270px] lg:w-[250px]": "md:w-[200px] lg:w-[300px]"} bg-gradient-to-tr from-black to-neutral-800 border-2 border-neutral-800 rounded-xl cursor-pointer items-center hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700">
        <img  src={r2} alt="star" class="w-[50px] h-[50px] bg-gradient-to-tr from-yellow-950 to-yellow-500 rounded-2xl left-[5px] relative"/>
        <p class="text-white font-semibold absolute left-[70px] text-[13px]">Nickelback's Playlist</p>
      </div>
      <div on:click="{()=>musica('self')}" class="flex relative w-[270px] sm:w-[200px] h-[60px] top-[10px] {openlibrary ? "md:w-[270px] lg:w-[250px]": "md:w-[200px] lg:w-[300px]"}  bg-gradient-to-tr from-black to-neutral-800 border-2 border-neutral-800 rounded-xl cursor-pointer items-center hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700">
        <img  src={r3} alt="star" class="w-[50px] h-[50px] bg-gradient-to-tr from-yellow-950 to-yellow-500 rounded-2xl left-[5px] relative"/>
        <p class="text-white font-semibold absolute left-[70px] text-[13px]">Laura Branigan's Playlist</p>
      </div>
      <div on:click="{()=>musica('master')}" class="flex relative w-[270px] sm:w-[200px] h-[60px] top-[10px] {openlibrary ? "md:w-[270px] lg:w-[250px]": "md:w-[200px] lg:w-[300px]"}  bg-gradient-to-tr from-black to-neutral-800 border-2 border-neutral-800 rounded-xl cursor-pointer items-center hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700">
        <img  src={r4} alt="star" class="w-[50px] h-[50px] bg-gradient-to-tr from-yellow-950 to-yellow-500 rounded-2xl left-[5px] relative"/>
        <p class="text-white font-semibold absolute left-[70px] text-[13px]">Metallica's Playlist</p>
      </div>
    </div>
  </div>

  <div class="flex justify-center flex-row w-[100%] h-[800px] absolute top-[550px] sm:top-[300px] {openlibrary ? "md:top-[450px] lg:top-[300px] md:tranfosrm md:scale-[80%] lg:scale-[100%]": "md:top-[300px] lg:top-[300px]  md:transform md:scale-[100%]"} ">
    <p class="absolute top-[0px] left-[15px] w-[100%] font-bold text-xl text-white">Brani Preferiti</p>
    <div class="flex flex-col items-center absolute top-[40px] justify-center w-[100%] h-[200px] overflow-auto">
      <div class="w-[100%] h-[200px]  grid grid-cols-4 grid-rows-1 justify-items-center items-center">
        <div on:click="{()=>musica('starfield')}" class="cursor-pointer flex flex-col w-[150px] h-[180px] bg-gradient-to-tr from-black to-neutral-800 border-2 border-neutral-800 hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700 justify-center justify-items-center left-[50px] sm:left-[30px] {openlibrary ? "md:left-[40px] lg:left-[15px]": "md:left-[30px] lg:left-[2px]"} rounded-xl p-1 relative ">
        <img src={star} alt="star" class="w-[150px] h-[130px] rounded-2xl"/>
        <div class="relative top-[5px] left-[10px]">
          <p class="text-white font-semibold text-[11px]">Starfield Soundtrack</p>
          <p class="text-neutral-500 font-medium text-[10px]">Bethesda Games Studio</p>
        </div>
        </div>
        <div on:click="{()=>musica('born')}" class=" cursor-pointer flex flex-col w-[150px] h-[180px] bg-gradient-to-tr from-black to-neutral-800 border-2 border-neutral-800 hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700 justify-center justify-items-center left-[140px] sm:left-[70px] {openlibrary ? "md:left-[120px] lg:left-[45px]": "md:left-[70px] lg:left-[2px]"}  rounded-xl p-1 relative ">
          <img src={r1} alt="star" class="w-[150px] h-[130px] rounded-2xl"/>
          <div class="relative top-[5px] left-[10px]">
            <p class="text-white font-semibold text-[11px]">Born Villain</p>
            <p class="text-neutral-500 font-medium text-[10px]">Marilyn Manson</p>
          </div>
          </div>
          <div on:click="{()=>musica('burn')}" class=" cursor-pointer flex flex-col w-[150px] h-[180px] bg-gradient-to-tr from-black to-neutral-800 border-2 border-neutral-800 hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700 justify-center justify-items-center left-[230px] sm:left-[109px] {openlibrary ? "md:left-[200px] lg:left-[75px]": "md:left-[109px] lg:left-[2px]"}  rounded-xl p-1 relative ">
            <img src={r2} alt="star" class="w-[150px] h-[130px] rounded-2xl"/>
            <div class="relative top-[5px] left-[10px]">
              <p class="text-white font-semibold text-[11px]">Burn Into The Ground</p>
              <p class="text-neutral-500 font-medium text-[10px]">Nickelback</p>
            </div>
            </div>
            <div on:click="{()=>musica('self')}" class="cursor-pointer flex flex-col w-[150px] h-[180px] bg-gradient-to-tr from-black to-neutral-800 border-2 border-neutral-800 hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700 justify-center justify-items-center left-[320px] sm:left-[150px] {openlibrary ? "md:left-[280px] lg:left-[103px]": "md:left-[150px] lg:left-[2px]"} rounded-xl p-1 relative ">
              <img src={r3} alt="star" class="w-[150px] h-[130px] rounded-2xl"/>
              <div class="relative top-[5px] left-[10px]">
                <p class="text-white font-semibold text-[11px]">Self Control</p>
                <p class="text-neutral-500 font-medium text-[10px]">Laura Branigan</p>
              </div>
              </div>
      </div>
    </div>

    <p class="absolute top-[280px] left-[15px] font-bold text-xl w-[100%] text-white">Aggiunti di recente</p>
    <div class="flex flex-col items-center absolute top-[320px] justify-center w-[100%] h-[200px] overflow-auto">
      <div class="w-[100%] h-[200px]  grid grid-cols-5 grid-rows-1 justify-items-center items-center">
        <div on:click="{()=>musica('master')}" class="cursor-pointer flex flex-col w-[150px] h-[180px] bg-gradient-to-tr from-black to-neutral-800 border-2 border-neutral-800 hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700 justify-center justify-items-center left-[58px] sm:left-[42px] {openlibrary ? "md:left-[50px] lg:left-[27px]": "md:left-[42px] lg:left-[18px]"} rounded-xl p-1 relative ">
        <img src={r4} alt="star" class="w-[150px] h-[130px] rounded-2xl"/>
        <div class="relative top-[5px] left-[10px]">
          <p class="text-white font-semibold text-[11px]">Master of Puppets</p>
          <p class="text-neutral-500 font-medium text-[10px]">Metallica</p>
        </div>
        </div>
        <div on:click="{()=>musica('matrix')}" class="cursor-pointer flex flex-col w-[150px] h-[180px] bg-gradient-to-tr from-black to-neutral-800 border-2 border-neutral-800 hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700 justify-center justify-items-center left-[165px] sm:left-[106px] {openlibrary ? "md:left-[146px] lg:left-[83px]": "md:left-[106px] lg:left-[50px]"} rounded-xl p-1 relative ">
          <img src={r5} alt="star" class="w-[150px] h-[130px] rounded-2xl"/>
          <div class="relative top-[5px] left-[10px]">
            <p class="text-white font-semibold text-[11px]">Enter The Matrix</p>
            <p class="text-neutral-500 font-medium text-[10px]">Aurora</p>
          </div>
          </div>
          <div on:click="{()=>musica('eyes')}" class="cursor-pointer flex flex-col w-[150px] h-[180px] bg-gradient-to-tr from-black to-neutral-800 border-2 border-neutral-800 hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700 justify-center justify-items-center left-[272px] sm:left-[170px] {openlibrary ? "md:left-[243px] lg:left-[138px]": "md:left-[170px] lg:left-[82px]"} rounded-xl p-1 relative ">
            <img src={r6} alt="star" class="w-[150px] h-[130px] rounded-2xl"/>
            <div class="relative top-[5px] left-[10px]">
              <p class="text-white font-semibold text-[11px]">All Eyes On Me</p>
              <p class="text-neutral-500 font-medium text-[10px]">Eminem</p>
            </div>
            </div>
            <div on:click="{()=>musica('bon')}" class="cursor-pointer flex flex-col w-[150px] h-[180px] bg-gradient-to-tr from-black to-neutral-800 border-2 border-neutral-800 hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700 justify-center justify-items-center left-[380px] sm:left-[235px] {openlibrary ? "md:left-[341px] lg:left-[194px]": "md:left-[235px] lg:left-[115px]"} rounded-xl p-1 relative ">
              <img src={r7} alt="star" class="w-[150px] h-[130px] rounded-2xl"/>
              <div class="relative top-[5px] left-[10px]">
                <p class="text-white font-semibold text-[11px]">Because We Can</p>
                <p class="text-neutral-500 font-medium text-[10px]">Bon Jovi</p>
              </div>
              </div>
              <div on:click="{()=>musica('bad')}" class="cursor-pointer flex flex-col w-[150px] h-[180px] bg-gradient-to-tr from-black to-neutral-800 border-2 border-neutral-800 hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700 justify-center justify-items-center left-[490px] sm:left-[300px] {openlibrary ? "md:left-[440px] lg:left-[250px]": "md:left-[300px] lg:left-[147px]"} rounded-xl p-1 relative ">
              <img src={r9} alt="star" class="w-[150px] h-[130px] rounded-2xl"/>
              <div class="relative top-[5px] left-[10px]">
                <p class="text-white font-semibold text-[11px]">Bad</p>
                <p class="text-neutral-500 font-medium text-[10px]">Michael Jackson</p>
              </div>
              </div>
      </div>
    </div>

     <p class="absolute top-[560px] left-[15px] font-bold text-xl w-[100%] text-white">Artisti Seguiti</p>
    <div class="flex flex-col items-center absolute top-[600px] justify-center w-[100%] h-[200px] overflow-auto">
      <div class="w-[100%] h-[200px] grid grid-cols-4 grid-rows-1 justify-items-center items-center">
        <div on:click="{()=>musica('war')}" class="cursor-pointer flex flex-col w-[150px] h-[180px] bg-gradient-to-tr from-black to-neutral-800 border-2 border-neutral-800 hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700 justify-center justify-items-center left-[50px] sm:left-[30px] {openlibrary ? "md:left-[40px] lg:left-[15px]": "md:left-[30px] lg:left-[2px]"}  rounded-xl p-1 relative ">
        <img src={r8} alt="star" class="w-[150px] h-[130px] rounded-full p-1"/>
        <div class="relative top-[5px] flex w-[100%] justify-center">
          <p class="text-white font-semibold text-[11px]">Nickelback</p>
        </div>
        </div>
        <div on:click="{()=>musica('bad')}" class="cursor-pointer flex flex-col w-[150px] h-[180px] bg-gradient-to-tr from-black to-neutral-800 border-2 border-neutral-800 hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700 justify-center justify-items-center left-[140px] sm:left-[70px] {openlibrary ? "md:left-[120px] lg:left-[45px]": "md:left-[70px] lg:left-[2px]"} rounded-xl p-1 relative ">
          <img src={r9} alt="star" class="w-[150px] h-[130px] rounded-full p-1"/>
          <div class="relative top-[5px] flex w-[100%] justify-center">
            <p class="text-white font-semibold text-[11px]">Micheal Jackson</p>
          </div>
          </div>
          <div on:click="{()=>musica('eyes')}" class="cursor-pointer flex flex-col w-[150px] h-[180px] bg-gradient-to-tr from-black to-neutral-800 border-2 border-neutral-800 hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700 justify-center justify-items-center left-[230px] sm:left-[109px] {openlibrary ? "md:left-[200px] lg:left-[75px]": "md:left-[109px] lg:left-[2px]"} rounded-xl p-1 relative ">
            <img src={r6} alt="star" class="w-[150px] h-[130px] p-1 rounded-full"/>
            <div class="relative top-[5px] flex w-[100%] justify-center">
              <p class="text-white font-semibold text-[11px]">Eminem</p>
            </div>
            </div>
            <div on:click="{()=>musica('born')}" class="cursor-pointer flex flex-col w-[150px] h-[180px] bg-gradient-to-tr from-black to-neutral-800 border-2 border-neutral-800 hover:bg-gradient-to-tr hover:from-black hover:to-neutral-700 hover:border-2 hover:border-neutral-700 justify-center justify-items-center left-[320px] sm:left-[150px] {openlibrary ? "md:left-[280px] lg:left-[103px]": "md:left-[150px] lg:left-[2px]"} rounded-xl p-1 relative ">
              <img src={r1} alt="star" class="w-[150px] h-[130px] p-1 rounded-full"/>
              <div class="relative top-[5px] flex w-[100%] justify-center">
                <p class="text-white font-semibold text-[11px]">Marilyn Manson</p>
              </div>
              </div>
      </div>
    </div>
  </div>
 </div>


    <div class="visible md:invisible flex justify-between w-[100%] h-[80px] items-center bg-gradient-to-tr from-black to-neutral-900 rounded-2xl sticky border-t-2 border-neutral-900 top-[100%]">
      <div class="grid grid-cols-3 grid-rows-1 w-[100%] justify-items-center items-center absolute top-[15%]">
        <div class="flex justify-center ">
          <img src={home} alt="src" class="w-[30px] absolute invert-[0.5] cursor-not-allowed hover:invert "/>
          <p class="text-neutral-500 font-semibold relative top-[30px]">Home</p>
        </div>
        <div class="flex justify-center" >
          <img src={src} alt="src" class="w-[25px] absolute invert-[0.5] cursor-not-allowed hover:invert"/>
          <p class="text-neutral-500 font-semibold relative top-[30px] ">Search</p>
        </div>
        <div class="flex justify-center">
          <img src={library} alt="src" class="w-[25px] absolute invert-[0.5] cursor-not-allowed hover:invert"/>
          <p class="text-neutral-500 font-semibold relative top-[30px] ">Library</p>
        </div>
        
      </div>
    </div>
    </div>

 </div>



  <div class="flex w-[95%] md:w-[700px] lg:w-[900px] xl:scale-[115%] xl:bottom-[-15%] h-[10%] absolute bottom-[1%]  rounded-2xl invisible md:visible border-2 border-neutral-900 bg-gradient-to-tr from-black to-neutral-900">
    <div class="w-[30%] h-[60%] rounded-lg absolute top-[20%] left-[0%]  flex flex-row  items-center cursor-default" >
      <img src={artist} alt="artist" class="w-[30%] md:w-[80px] lg:w-[80px] rounded-xl border-green-400 border-2"/>
      <div class="absolute left-[45%] lg:left-[35%]">
      <p class="text-base text-white overflow-hidden text-ellipsis whitespace-nowrap">{song}</p>
      <p class="text-sm text-neutral-700  overflow-hidden text-ellipsis whitespace-nowrap">{name}</p>
      </div>
    </div>

    <div class="flex flex-row justify-between items-center w-[40%] absolute top-[30%] lg:top-[20%] left-[40%] lg:left-[35%]">
      <img src={shuffle} alt="shuffle" class="invert-[0.5] w-[5%] cursor-pointer"/>
      <img src={prev} alt="prev" class="invert w-[4%] cursor-pointer"/>
      <img src={plause} on:click="{mettipausa}" alt="play" class="invert w-[5%]  cursor-pointer"/>
      <img src={prev} alt="prev" class="invert w-[4%] rotate-180  cursor-pointer"/>
      <img src={repeat} alt="repeat" on:click="{()=>autoplay()}" class="{autopla ? "invert": "invert-[0.5]"}  w-[5%]  cursor-pointer"/>
    </div>
    <div class="flex flex-row justify-between items-center w-[40%] h-[5%] absolute top-[60%] left-[40%] lg:left-[35%] rounded-lg">
      <p class="text-neutral-700 mr-4 text-xs">{min}:{sec}</p>
      <div class="w-[100%] bg-neutral-800 h-[100%] rounded-lg">
        <div id="player" class=" bg-white h-[100%] rounded-lg">.</div>
      </div>
      <p class="text-neutral-700 ml-4 text-xs">{minuti}:{secondi}</p>
  </div>

  <div class="flex flex-row justify-between items-center w-[10%] absolute top-[30%] lg:top-[20%] right-[5%]">
    <img on:click="{mutasong}" src={muta} alt="shuffle" class="invert w-[20%]  cursor-pointer"/>
    <img src={queue} alt="prev" class="invert w-[20%]  cursor-not-allowed"/>
    <img src={mic} alt="play" class="invert w-[20%]  cursor-not-allowed"/>
    <img src={library2} alt="prev" class="invert w-[20%]  cursor-not-allowed"/>
  </div>

  <div class="flex flex-row justify-between items-center w-[10%] h-[5%] absolute top-[60%] right-[5%] rounded-lg">
    <div class="w-[100%] bg-neutral-800 h-[100%] rounded-lg">
      <div class="{mutato ? "w-[0%]": "w-[73%]"} bg-white h-[100%] rounded-lg">.</div>
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
  .barra::-webkit-scrollbar-track{
      background-color: transparent;
    }
    .barra2::-webkit-scrollbar-thumb{
      background-color: rgb(53, 53, 53);
      border-radius: 30px;
    }


    #player{
      width: 0%;
      transition: 0.2s;
    }
  
</style>