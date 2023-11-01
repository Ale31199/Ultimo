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


let openlibrary = false;

const openLib=()=>{
  openlibrary = !openlibrary
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


<div class="invisible md:visible grid grid-cols-1 grid-rows-2 bg-black w-[7%] h-[598px] rounded-xl absolute top-[25%] {openlibrary ? "md:w-[25%]": ""}">
  <div class="w-[100%] h-[50%] bg-neutral-900 rounded-xl flex justify-items-center items-center">
   <div class="grid grid-cols-1 grid-rows-4 w-[100%] h-[100%] justify-items-center items-center relative {openlibrary ? "md:grid-cols-2 md:grid-rows-2 md:w-[80%] h-[30%] gap-y-[100%]": ""}">
     <img src={home} alt="home" class="w-[40%] invert-[0.5] relative top-[10%] hover:invert cursor-pointer {openlibrary ? "md:w-[30%]": ""}"/>
     <p class="text-neutral-500 text-sm relative {openlibrary ? "text-xl left-[0%]": ""}">Home</p>
     <img src={src} alt="home" class="w-[40%] invert-[0.5] relative top-[10%] hover:invert cursor-pointer {openlibrary ? "md:w-[30%]": ""}"/>
     <p class="text-neutral-500 text-sm relative {openlibrary ? "text-xl left-[0%]": ""}">Search</p>
   </div>
  </div>
  <div class="w-[100%] h-[70%] absolute top-[30%] bg-neutral-900 rounded-xl">
    <button on:click={openLib} class="flex items-center" >
   <div class="grid grid-cols-1 grid-rows-2 justify-items-center items-center sticky bg-neutral-900 rounded-xl {openlibrary ? "md:grid-cols-2 grid-rows-1 md:w-[80%] md:h-[30%]": ""}">
   <img src={library} alt="home" class="w-[40%] invert-[0.5] relative top-[10%] hover:invert cursor-pointer {openlibrary ? "md:w-[35%]": ""}"/>
     <p class="text-neutral-500 text-sm relative {openlibrary ? "text-xl left-[0%]": ""}">Library</p>
   </div>
  </button>
   <div class="grid grid-cols-1 grid-rows-11 w-[100%] h-[100%] justify-items-center items-center overflow-y-auto">
     
   </div>
  </div>
</div>





<div class="bg-black w-auto md:w-[90%] md:left-[9%] h-[700px] md:h-[600px] lg:h-[1800px] rounded-3xl relative top-[100px] bottom-6 flex justify-center overflow-auto {openlibrary ? "md:w-[610px] md:left-[30%]": ""}">
  <div class="w-[100%] h-[10%] absolute top-[0%] flex bg-neutral-900 mb-[10%]">
   <p class="text-white font-bold font-sans text-lg left-[5%] top-[25%] absolute">Good evening</p>
   <img src={devices} alt="user" class="w-[8%] md:w-[5%] invert absolute right-[20%] md:right-[15%] md:cursor-not-allowed top-[25%] md:top-[20%]"/>
   <img src={user} alt="user" class="w-[8%] md:w-[4%] invert absolute right-[5%] md:cursor-not-allowed top-[25%]"/>
  </div>

  <div class="grid grid-cols-2 grid-rows-3 w-[100%] h-[30%] absolute top-[15%] gap-2">
    <div class="w-[90%] h-[90%] bg-neutral-900 rounded-md ml-4 md:left-[5%] md:relative flex items-center cursor-pointer hover:bg-neutral-700">
     <img src={hrt} alt="heart" class="w-[39.5%] md:w-[14%] bg-gradient-to-br from-purple-300 to-purple-800 p-[15px] rounded-s-md {openlibrary ? "md:w-[18%]": ""}"/>
     <p class="text-xs font-semibold text-white absolute left-[24%]">Liked Songs</p>
    </div>
    <div class="w-[90%] h-[90%] bg-neutral-900 rounded-md mr-4 flex items-center cursor-pointer hover:bg-neutral-700">
     <img src={r4} alt="heart" class="w-[39.5%] md:w-[14%] rounded-s-md  {openlibrary ? "md:w-[18%]": ""} "/>
     <p class="text-xs font-semibold text-white absolute right-[5%] w-[25%] md:right-[13.5%] whitespace-nowrap overflow-hidden text-ellipsis">Metallica's Playlist</p>
    </div>
    <div class="w-[90%] h-[90%] bg-neutral-900 rounded-md ml-4 md:left-[5%] md:relative flex items-center cursor-pointer hover:bg-neutral-700 ">
    <img src={r6} alt="heart" class="w-[39.5%] md:w-[14%] rounded-s-md {openlibrary ? "md:w-[18%]": ""}"/>
    <p class="text-xs font-semibold text-white absolute left-[24%] w-[23%] md:w-[50%] whitespace-nowrap overflow-hidden text-ellipsis">Eminem's Playlist</p>
    </div>
    <div class="w-[90%] h-[90%] bg-neutral-900 rounded-md mr-4 flex items-center cursor-pointer hover:bg-neutral-700 ">
    <img src={r8} alt="heart" class="w-[39.5%] md:w-[14%] rounded-s-md {openlibrary ? "md:w-[18%]": ""}"/>
    <p class="text-xs font-semibold text-white absolute right-[5%] w-[25%] md:right-[13.5%] whitespace-nowrap overflow-hidden text-ellipsis">Nickelback's Playlist</p>
    </div>
    <div class="w-[90%] h-[90%] bg-neutral-900 rounded-md ml-4 md:left-[5%] md:relative flex items-center cursor-pointer hover:bg-neutral-700 ">
      <img src={r10} alt="heart" class="w-[39.5%] md:w-[14%] rounded-s-md {openlibrary ? "md:w-[18%]": ""}"/>
      <p class="text-xs font-semibold text-white absolute left-[24%] w-[23%] md:w-[50%] whitespace-nowrap overflow-hidden text-ellipsis">Best of Nickelback</p>
    </div>
    <div class="w-[90%] h-[90%] bg-neutral-900 rounded-md mr-4 flex items-center cursor-pointer hover:bg-neutral-700 ">
      <img src={r3} alt="heart" class="w-[39.5%] md:w-[14%] rounded-s-md {openlibrary ? "md:w-[18%]": ""}"/>
      <p class="text-xs font-semibold text-white absolute right-[5%] w-[25%] md:right-[13.5%] whitespace-nowrap overflow-hidden text-ellipsis">Laura Branigam's Playlist</p>
    </div>
  </div>


  <div class="grid grid-cols-1 grid-rows-3 absolute w-[100%] h-[110%] md:h-[150%] top-[50%] {openlibrary ? "md:h-[100%]": ""} ">

    <div class="grid grid-cols-1 grid-rows-2 w-[100%] h-[80%] md:h-[80%] top-[0%] relative  overflow-x-scroll md:overflow-hidden {openlibrary ? "md:h-[60%]": ""} ">
    <p class="font-bold text-base text-white relative left-[5%] top-[5%]">Brani Preferiti</p>
    <div class="grid grid-cols-4 grid-rows-3 absolute w-[160%] md:w-[80%] h-[70%] top-[15%] left-[5%] right-[5%] rounded-lg gap-x-3  {openlibrary ? "md:h-[77%]": ""} ">
      <img src={r1} alt="artist" class="w-[100%] rounded-lg cursor-pointer hover:duration-1000 hover:ease-in-out hover:border-solid hover:border-green-400 hover:border-2"/>
      <img src={r7} alt="artist" class="w-[100%] rounded-lg cursor-pointer hover:duration-1000 hover:ease-in-out hover:border-solid hover:border-green-400 hover:border-2"/>
      <img src={r5} alt="artist" class="w-[100%] rounded-lg cursor-pointer hover:duration-1000 hover:ease-in-out hover:border-solid hover:border-green-400 hover:border-2"/>
      <img src={r9} alt="artist" class="w-[100%] rounded-lg cursor-pointer hover:duration-1000 hover:ease-in-out hover:border-solid hover:border-green-400 hover:border-2"/>
      <p class="text-white relative top-[170%] left-[5%] text-xs h-[20%]">Born Villain</p>
      <p class="text-white relative top-[170%] left-[5%] text-xs h-[20%]">Because We Can</p>
      <p class="text-white relative top-[170%] left-[5%] text-xs h-[20%]">Enter The Matrix</p>
      <p class="text-white relative top-[170%] left-[5%] text-xs h-[20%]">Bad</p>
      <p class="text-neutral-700 relative top-[100%] left-[5%] text-xs h-[20%]">Marilyn Manson</p>
      <p class="text-neutral-700 relative top-[100%] left-[5%] text-xs h-[20%]">Bon Jovi</p>
      <p class="text-neutral-700 relative top-[100%] left-[5%] text-xs h-[20%]">Aurora</p>
      <p class="text-neutral-700 relative top-[100%] left-[5%] text-xs h-[20%]">Michael Jackson</p>
    </div>
    </div>

    <div class="grid grid-cols-1 grid-rows-2 w-[100%] h-[80%] top-[-10%] relative  overflow-x-auto {openlibrary ? "md:h-[100%]": ""}">
      <p class="font-bold text-base text-white relative left-[5%] top-[5%]">Ultimi aggiunti</p>
      <div class="grid grid-cols-5 grid-rows-3 absolute w-[200%] md:w-[100%] h-[78%] top-[15%] left-[5%] right-[5%] rounded-lg gap-x-3 {openlibrary ? "md:h-[70%]": ""} ">
        <img src={r6} alt="artist" class="w-[100%] rounded-lg cursor-pointer hover:duration-1000 hover:ease-in-out hover:border-solid hover:border-green-400 hover:border-2"/>
        <img src={r8} alt="artist" class="w-[100%] rounded-lg cursor-pointer hover:duration-1000 hover:ease-in-out hover:border-solid hover:border-green-400 hover:border-2"/>
        <img src={star} alt="artist" class="w-[100%] rounded-lg cursor-pointer hover:duration-1000 hover:ease-in-out hover:border-solid hover:border-green-400 hover:border-2"/>
        <img src={r5} alt="artist" class="w-[100%] rounded-lg cursor-pointer hover:duration-1000 hover:ease-in-out hover:border-solid hover:border-green-400 hover:border-2"/>
        <img src={r4} alt="artist" class="w-[100%] rounded-lg cursor-pointer hover:duration-1000 hover:ease-in-out hover:border-solid hover:border-green-400 hover:border-2"/>
        <p class="text-white relative top-[160%] left-[5%] text-xs h-[20%]">All Eyes On Me</p>
        <p class="text-white relative top-[160%] left-[5%] text-xs h-[20%]">This Means War</p>
        <p class="text-white relative top-[160%] left-[5%] text-xs h-[30%] overflow-hidden whitespace-nowrap text-ellipsis md:overflow-hidden md:whitespace-nowrap md:text-ellipsis md:w-[80%] {openlibrary ? "md:h-[35%]": ""}  ">Starfield Official Soundtrack</p>
        <p class="text-white relative top-[160%] left-[5%] text-xs h-[20%]">Enter The Matrix</p>
        <p class="text-white relative top-[160%] left-[5%] text-xs h-[20%]">Master Of Puppets</p>
        <p class="text-neutral-700 relative top-[90%] left-[5%] text-xs h-[20%]">Eminem</p>
        <p class="text-neutral-700 relative top-[90%] left-[5%] text-xs h-[20%]">Nickelback</p>
        <p class="text-neutral-700 relative top-[90%] left-[5%] text-xs h-[30%] overflow-hidden whitespace-nowrap text-ellipsis ">Bethesda Games Studio</p>
        <p class="text-neutral-700 relative top-[90%] left-[5%] text-xs h-[20%]">Aurora</p>
        <p class="text-neutral-700 relative top-[90%] left-[5%] text-xs h-[20%]">Metallica</p>
      </div>
      </div>

      <div class="grid grid-cols-1 grid-rows-2 w-[100%] h-[70%] top-[-10%] relative  overflow-x-auto md:overflow-hidden {openlibrary ? "md:h-[100%]": ""} ">
        <p class="font-bold text-base text-white relative left-[5%] top-[5%]">Artisti Preferiti</p>
        <div class="grid grid-cols-4 grid-rows-2 absolute w-[160%] md:w-[80%] h-[70%] top-[15%] left-[5%] right-[5%] rounded-lg gap-x-3 justify-items-center {openlibrary ? "md:h-[55%]": ""} ">
          <img src={star} alt="artist" class="w-[100%] rounded-full cursor-pointer hover:duration-1000 hover:ease-in-out hover:border-solid hover:border-green-400 hover:border-2"/>
          <img src={r4} alt="artist" class="w-[100%] rounded-full cursor-pointer hover:duration-1000 hover:ease-in-out hover:border-solid hover:border-green-400 hover:border-2"/>
          <img src={r3} alt="artist" class="w-[100%] rounded-full cursor-pointer hover:duration-1000 hover:ease-in-out hover:border-solid hover:border-green-400 hover:border-2"/>
          <img src={r2} alt="artist" class="w-[100%] rounded-full cursor-pointer hover:duration-1000 hover:ease-in-out hover:border-solid hover:border-green-400 hover:border-2"/>
          <p class="text-white relative top-[110%] text-xs h-[30%] overflow-hidden whitespace-nowrap text-ellipsis ">Bethesda Games Studio</p>
          <p class="text-white relative top-[110%] text-xs h-[30%] overflow-hidden whitespace-nowrap text-ellipsis ">Metallica</p>
          <p class="text-white relative top-[110%] text-xs h-[30%] overflow-hidden whitespace-nowrap text-ellipsis ">Laura Branigan</p>
          <p class="text-white relative top-[110%] text-xs h-[30%] overflow-hidden whitespace-nowrap text-ellipsis ">Nickelback</p>
        </div>
        </div>
  </div>

    <div class="sticky bg-neutral-900 w-[100%] h-[10%] top-[90%] flex justify-between rounded-2xl md:invisible">
      <div class="grid grid-cols-3 grid-rows-2 h-[100%] justify-items-center top-[100%]">
       <img src={home} alt="home" class="w-[30%] invert-[0.5] relative top-[10%] hover:invert"/>
       <img src={src} alt="home" class="w-[30%] invert-[0.5] relative top-[10%] hover:invert"/>
       <img src={library} alt="home" class="w-[30%] invert-[0.5] relative top-[10%] hover:invert"/>
       <p class="text-neutral-500 text-sm">Home</p>
       <p class="text-neutral-500 text-sm">Search</p>
       <p class="text-neutral-500 text-sm">Library</p>
      </div>
    </div>
    
    



</div>