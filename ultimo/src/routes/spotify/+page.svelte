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


<div class="bg-black w-auto h-[700px] md:h-[2300px] lg:h-[1800px] rounded-3xl relative top-[100px] bottom-6 flex justify-center overflow-auto ">
  <div class="w-[100%] h-[10%] absolute top-[0%] flex bg-neutral-900 mb-[10%]">
   <p class="text-white font-bold font-sans text-lg left-[5%] top-[25%] absolute">Good evening</p>
   <img src={devices} alt="user" class="w-[8%] invert absolute right-[20%] top-[25%]"/>
   <img src={user} alt="user" class="w-[8%] invert absolute right-[5%] top-[25%]"/>
  </div>

  <div class="grid grid-cols-2 grid-rows-3 w-[100%] h-[30%] absolute top-[15%] gap-2">
    <div class="w-[90%] h-[90%] bg-neutral-900 rounded-md ml-4 flex items-center cursor-pointer hover:bg-neutral-800">
     <img src={hrt} alt="heart" class="w-[39.5%] bg-gradient-to-br from-purple-300 to-purple-800 p-[15px] rounded-s-md"/>
     <p class="text-xs font-semibold text-white absolute left-[24%]">Liked Songs</p>
    </div>
    <div class="w-[90%] h-[90%] bg-neutral-900 rounded-md mr-4 flex items-center cursor-pointer hover:bg-neutral-800 ">
     <img src={r4} alt="heart" class="w-[39.5%] rounded-s-md"/>
     <p class="text-xs font-semibold text-white absolute right-[5%] w-[25%] whitespace-nowrap overflow-hidden text-ellipsis">Metallica's Playlist</p>
    </div>
    <div class="w-[90%] h-[90%] bg-neutral-900 rounded-md ml-4 flex items-center cursor-pointer hover:bg-neutral-800 ">
    <img src={r6} alt="heart" class="w-[39.5%] rounded-s-md"/>
    <p class="text-xs font-semibold text-white absolute left-[24%] w-[23%] whitespace-nowrap overflow-hidden text-ellipsis">Eminem's Playlist</p>
    </div>
    <div class="w-[90%] h-[90%] bg-neutral-900 rounded-md mr-4 flex items-center cursor-pointer hover:bg-neutral-800">
    <img src={r8} alt="heart" class="w-[39.5%] rounded-s-md"/>
    <p class="text-xs font-semibold text-white absolute right-[5%] w-[25%] whitespace-nowrap overflow-hidden text-ellipsis">Nickelback's Playlist</p>
    </div>
    <div class="w-[90%] h-[90%] bg-neutral-900 rounded-md ml-4 flex items-center cursor-pointer hover:bg-neutral-800">
      <img src={r10} alt="heart" class="w-[39.5%] rounded-s-md"/>
      <p class="text-xs font-semibold text-white absolute left-[24%] w-[23%] whitespace-nowrap overflow-hidden text-ellipsis">Best of Nickelback</p>
    </div>
    <div class="w-[90%] h-[90%] bg-neutral-900 rounded-md mr-4 flex items-center cursor-pointer hover:bg-neutral-800">
      <img src={r3} alt="heart" class="w-[39.5%] rounded-s-md"/>
      <p class="text-xs font-semibold text-white absolute right-[5%] w-[25%] whitespace-nowrap overflow-hidden text-ellipsis">Laura Branigam's Playlist</p>
    </div>
  </div>


  <div class="grid grid-cols-1 grid-rows-3 absolute w-[100%] h-[200%]">
    <div class="grid grid-cols-1 grid-rows-2 w-[100%] h-[80%] top-[70%] relative  overflow-x-scroll">
    <p class="font-bold text-base text-white relative left-[5%] top-[5%]">Brani Preferiti</p>
    <div class="grid grid-cols-4 grid-rows-3 absolute w-[200%] h-[100%] top-[15%] left-[5%] right-[5%] rounded-lg gap-x-3">
      <img src={r1} alt="artist" class="w-[100%] rounded-lg"/>
      <img src={r7} alt="artist" class="w-[100%] rounded-lg"/>
      <img src={r5} alt="artist" class="w-[100%] rounded-lg"/>
      <img src={r9} alt="artist" class="w-[100%] rounded-lg"/>
      <p class="text-white relative top-[30%] left-[5%] text-xs h-[20%]">Born Villain</p>
      <p class="text-white relative top-[30%] left-[5%] text-xs h-[20%]">Because We Can</p>
      <p class="text-white relative top-[30%] left-[5%] text-xs h-[20%]">Into The Matrix</p>
      <p class="text-white relative top-[30%] left-[5%] text-xs h-[20%]">Bad</p>
      <p class="text-neutral-700 relative top-[0%] left-[5%] text-xs h-[20%]">Marilyn Manson</p>
      <p class="text-neutral-700 relative top-[0%] left-[5%] text-xs h-[20%]">Bon Jovi</p>
      <p class="text-neutral-700 relative top-[0%] left-[5%] text-xs h-[20%]">Aurora</p>
      <p class="text-neutral-700 relative top-[0%] left-[5%] text-xs h-[20%]">Michael Jackson</p>
    </div>
  </div>
  <div class="grid grid-cols-1 grid-rows-2 w-[100%] h-[40%] top-[50%] relative  overflow-x-scroll">
    <p class="font-bold text-base text-white relative left-[5%] top-[5%]">Brani Preferiti</p>
    <div class="grid grid-cols-4 grid-rows-3 absolute w-[200%] h-[80%] top-[15%] left-[5%] right-[5%] rounded-lg gap-x-3">
      <img src={r1} alt="artist" class="w-[100%] rounded-lg"/>
      <img src={r7} alt="artist" class="w-[100%] rounded-lg"/>
      <img src={r5} alt="artist" class="w-[100%] rounded-lg"/>
      <img src={r9} alt="artist" class="w-[100%] rounded-lg"/>
      <p class="text-white relative top-[120%] left-[5%] text-xs h-[20%]">Born Villain</p>
      <p class="text-white relative top-[120%] left-[5%] text-xs h-[20%]">Because We Can</p>
      <p class="text-white relative top-[120%] left-[5%] text-xs h-[20%]">Into The Matrix</p>
      <p class="text-white relative top-[120%] left-[5%] text-xs h-[20%]">Bad</p>
      <p class="text-neutral-700 relative top-[40%] left-[5%] text-xs h-[20%]">Marilyn Manson</p>
      <p class="text-neutral-700 relative top-[40%] left-[5%] text-xs h-[20%]">Bon Jovi</p>
      <p class="text-neutral-700 relative top-[40%] left-[5%] text-xs h-[20%]">Aurora</p>
      <p class="text-neutral-700 relative top-[40%] left-[5%] text-xs h-[20%]">Michael Jackson</p>
    </div>
  </div>
  <div class="grid grid-cols-1 grid-rows-2 w-[100%] h-[40%] top-[-10%] relative  overflow-x-scroll">
    <p class="font-bold text-base text-white relative left-[5%] top-[5%]">Brani Preferiti</p>
    <div class="grid grid-cols-4 grid-rows-3 absolute w-[200%] h-[80%] top-[15%] left-[5%] right-[5%] rounded-lg gap-x-3">
      <img src={r1} alt="artist" class="w-[100%] rounded-lg"/>
      <img src={r7} alt="artist" class="w-[100%] rounded-lg"/>
      <img src={r5} alt="artist" class="w-[100%] rounded-lg"/>
      <img src={r9} alt="artist" class="w-[100%] rounded-lg"/>
      <p class="text-white relative top-[120%] left-[5%] text-xs h-[20%]">Born Villain</p>
      <p class="text-white relative top-[120%] left-[5%] text-xs h-[20%]">Because We Can</p>
      <p class="text-white relative top-[120%] left-[5%] text-xs h-[20%]">Into The Matrix</p>
      <p class="text-white relative top-[120%] left-[5%] text-xs h-[20%]">Bad</p>
      <p class="text-neutral-700 relative top-[40%] left-[5%] text-xs h-[20%]">Marilyn Manson</p>
      <p class="text-neutral-700 relative top-[40%] left-[5%] text-xs h-[20%]">Bon Jovi</p>
      <p class="text-neutral-700 relative top-[40%] left-[5%] text-xs h-[20%]">Aurora</p>
      <p class="text-neutral-700 relative top-[40%] left-[5%] text-xs h-[20%]">Michael Jackson</p>
    </div>
  </div>


  </div>



    <div class="fixed bg-neutral-900 w-[85.5%] h-[10%] bottom-0 flex justify-between">
      <div class="grid grid-cols-3 grid-rows-2 bg-white h-[10%]">

      </div>
    </div>
    
    
  
</div>