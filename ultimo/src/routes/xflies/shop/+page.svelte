<script>
  import terra from '/src/routes/xflies/ximg/earth.png';
  import luna from '/src/routes/xflies/ximg/full-moon.png';
  import marte from '/src/routes/xflies/ximg/mars.png';
  import giove from '/src/routes/xflies/ximg/jupiter.png';
  import venere from '/src/routes/xflies/ximg/venus.png';
  import nettuno from '/src/routes/xflies/ximg/neptune.png';
  import plutone from '/src/routes/xflies/ximg/pluto.png';
  import saturno from '/src/routes/xflies/ximg/saturn.png';
  import mercurio from '/src/routes/xflies/ximg/mercury.png';
  import urano from '/src/routes/xflies/ximg/uranus.png';
  import sistema from '/src/routes/xflies/ximg/solar-system.png';
  import chat from '/src/routes/xflies/ximg/chat.png';
  import american from '/src/routes/xflies/ximg/american-express.png';
  import paypal from '/src/routes/xflies/ximg/paypal.png';
  import card from '/src/routes/xflies/ximg/card.png';
  import visa from '/src/routes/xflies/ximg/visa.png';
  import alien from '/src/routes/xflies/ximg/alien.png';
  import cart from  '/src/routes/xflies/ximg/shopping-cart.png';
  
  
  // @ts-ignore
  import ita from '/src/routes/xflies/xtesto.json';
  
  
  let pianeta = luna;
  let titolo = 'Viaggio sulla Luna!'
  let desc = ita.biglietti.luna
  let grey = true
  let blue = false
  let red = false
  let paga = 'Luna'
  
  
  
  const selezionaViaggioNext=()=>{
    if(pianeta === luna){
    pianeta = marte
    titolo = 'Viaggio su Marte';
    desc = ita.biglietti.marte
    red = true
    blue = false
    grey = false
    paga = 'Marte'
    } else if (pianeta === marte){
  pianeta = sistema
  titolo = 'Viaggi Interspaziali'
  desc = ita.biglietti.sistema
    blue = true
    red= false
     grey = false
     paga = 'Interspazio'
    } else if(pianeta === sistema){
      pianeta = luna
      titolo = 'Viaggio sulla Luna'
      desc = ita.biglietti.luna
    grey = true
    red = false
    blue = false
    paga = 'Luna'
    }
  }
  
  const selezionaViaggioPrev=()=>{
    if(pianeta === sistema){
    pianeta = marte
    titolo = 'Viaggio su Marte';
    desc = ita.biglietti.marte
    red = true
    blue = false
    grey = false
    paga = 'Marte'
    } else if (pianeta === luna){
  pianeta = sistema
  titolo = 'Viaggi Interspaziali'
  desc = ita.biglietti.sistema
    blue = true
    red = false
    grey = false
    paga = 'Interspazio'
    } else if(pianeta === marte){
      pianeta = luna
      titolo = 'Viaggio sulla Luna'
      desc = ita.biglietti.luna
    grey = true
    red = false
    blue = false
    paga = 'Luna'
    }
  }
  
  let time = new Date()
  
  const tempo =()=>{
    const newtime= setInterval(() => {
      time = new Date()
    }, 1000);
    return ()=> clearInterval(newtime)
  }
   tempo()
  
   const rand = [
          "Il volo per Marte è in partenza tra 2 ore e 38 minuti",
          "I nostri voli sono super veloci, prenota ora e scopri nuovi mondi!",
          "I nostri voli più ricercati sono Marte, Luna e Viaggi Interspaziali.",
          "Il volo per Terra è in partenza tra 30 minuti",
          "Il volo per Luna è in partenza tra 47 minuti",
          "Il volo per Venere è in partenza tra 3 ore e 30 minuti",
          "Il volo per Giove è in partenza tra 7 ore e 30 minuti",
          "Il volo per Nettuno è in partenza tra 1 ora e 19 minuti",
          "Il volo per Plutone è in partenza tra 4 ore e 43 minuti",
          "Il volo per Mercurio è in partenza tra 1 ora e 55 minuti",
          "Il volo per Saturno è in partenza tra 2 ore e 30 minuti",
          "Il volo per Urano è in partenza tra 9 ore e 2 minuti",
          "Il volo per Viaggi Interspaziali è in partenza tra 10 minuti",
          "Scopri il nostro shop su Xshop! Acquista oggetti provenienti dallo spazio!"];
  
          let frasi = 'Il volo per Marte è in partenza tra 2 ore e 38 minuti'
  
          const scorrifrasi=()=>{
            const scorri = setInterval(()=>{
            const lefrasi = Math.floor(Math.random() * rand.length)
            const mostrafrasi = rand[lefrasi]
            frasi = mostrafrasi
  
            },5000)
            return ()=> clearInterval(scorri)
          }
  
          scorrifrasi()
  
  
          let opencart = true
  
          const apricarrello=()=>{
           opencart = !opencart
          } 
  
  
          let buypianeta = ''
          let buyprezzo = ''
          let buyimmagine;
          let buycarrello  = []
  
          const compra=()=>{
          
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
  
  
  <div class="bg-black w-[100%] h-[5500px] sm:h-[6500px] md:h-[5500px] lg:h-[3000px] rounded-3xl relative top-36 flex justify-center ">
    <div class="w-[90%] h-[5%] flex flex-col">
      <div class="bg-gradient-to-br from-gray-950 to-teal-950 flex-auto relative top-5 w-[100%] h-[30%] lg:absolute lg:h-[5%] lg:left-0 lg:top-0 md:absolute md:h-[3%] md:left-0 md:top-0 items-center teal-500 flex rounded-3xl ">
      <img src={alien} alt="alien" class="w-[30%] sm:w-[20%] md:w-[10%]  md:left-[4%] relative" />
      <div class="flex flex-col  md:left-[5%] relative">
      <h1  class="text-white text-4xl flex relative left-[0px] font-thin justify-center tracking-[10px] cursor-default">X-FLIES</h1>
       <p class="text-white text-sm italic">Your First Alien Space Travel</p>
      </div>
      </div>
    
      <div class="flex justify-center items-center absolute top-[0%] left-[35%] lg:top-[130px] lg:left-[35%]  lg:h-[1%] md:top-[130px] md:left-[0%] md:rounded-tr-full lg:rounded-t-full bg-black p-3 rounded-xl w-[30%]">
        <p class="text-teal-500 font-bold" >{time.toLocaleTimeString()}</p>
      </div>
  
      
  
  
    
  
    
      <div class="bg-gradient-to-br from-gray-950 to-teal-950 md:bg-gradient-to-br md:from-black md:to-neutral-900 h-[1%]  lg:h-[2%] lg:top-[1.5%] md:absolute md:h-[1.5%] md:top-[0.8%] flex-auto flex flex-row items-center justify-between lg:absolute relative top-12  rounded-lg md:w-[50%] md:left-[45%] "> 
      <a href="/xflies" class=" text-white font-bold ml-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500">Home</a>
      <a href="/xflies/biglietti" class=" text-white font-bold cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500">Biglietti</a>
      <a href="/xflies/shop" class=" text-white font-bold mr-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500">X-Shop</a>
      </div>
  
      <div class="flex justify-center items-center absolute top-[340px] sm:top-[400px] left-[10%] text-[12px] font-light  md:rounded-xl   lg:rounded-xl lg:h-[1.5%] md:top-[380px] lg:top-[180px] md:left-[25%] lg:left-[25%]  md:w-[50%]  bg-neutral-950 p-3 rounded-xl w-[80%]">
        <p class="text-teal-500 font-bold" >{frasi}</p>
      </div>
  
  
  
      <div class="flex w-[100%] justify-center">
      <div class="{grey ? "bg-gradient-to-tr from-black to-neutral-500 border-neutral-500  border-2 transizione" : ""} {blue ? "bg-gradient-to-tr from-black to-blue-950 border-blue-950 border-2 transizione " : ""} {red ? "bg-gradient-to-tr from-black to-red-950 border-red-950 border-2 transizione " : ""} transizione grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[8%]  w-[90%] sm:w-[70%] h-[10%] sm:h-[8%] lg:h-[23%] lg:w-[80%] rounded-3xl">
        <img src={pianeta} alt="hand" class="w-[40%] md:w-[25%] lg:w-[20%] relative top-[10%] animazione" />
        <p class="text-teal-500 text-3xl sm:top-[50%] lg:text-5xl lg:top-[50%] relative ">{titolo}</p>
        <p class="text-white text-justify text-[13px] lg:text-[22px] absolute w-[90%] top-[35%] sm:top-[49%] lg:top-[50%]  sm:w-[80%]">{desc}</p>
        <div class="{grey ? "bg-neutral-500" : ""}{blue ? "bg-neutral-500" : ""}{red ? "bg-neutral-500" : ""} flex justify-center lg:w-[50%] flex-row w-[80%] h-[10%] items-center bg-neutral-500  transizione  rounded-xl absolute top-[85%]">
          <button on:click="{()=>selezionaViaggioPrev()}" class="bg-neutral-900 text-teal-500 rounded-lg relative w-[40%] mr-5 text-xl cursor-pointer hover:border-2 hover:border-teal-50">&lt;</button>
          <button on:click="{()=>selezionaViaggioNext()}" class="bg-neutral-900 text-teal-500 rounded-lg relative w-[40%] ml-5 text-xl cursor-pointer hover:border-2 hover:border-teal-500 ">&gt;</button>
        </div>
  
        <button class="shadow-2xl shadow-black absolute p-2 rounded-2xl top-[73%] flex w-[80%] lg:w-[50%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer {grey ? "bg-neutral-400 text-black font-semibold transizione" : ""}{blue ? "bg-blue-900 font-semibold text-white transizione" : ""}{red ? "bg-red-950 font-semibold text-white transizione" : ""} ">Prenota {paga}</button>
      </div>
  
      <div class="hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors cursor-default grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[20%] sm:top-[18%] lg:top-[33%] lg:left-[8%] w-[90%] sm:w-[70%] h-[8%] sm:h-[8%] lg:h-[15%] lg:w-[40%] bg-gradient-to-tr from-black to-neutral-900 rounded-3xl">
        <img src={terra} alt="hand" class="w-[40%] md:w-[25%] lg:w-[20%] relative top-[10%] animazione md:top-[10%] lg:top-[10%]" />
        <p class="text-teal-500 text-5xl lg:text-5xl top-[25%] sm:top-[50%] md:top-[60%] md:text-5xl lg:top-[35%] relative ">Pagina Shop</p>
        <p class="text-white text-justify text-[13px] lg:text-[18px] absolute top-[50%] md:top-[60%]  sm:top-[49%] lg:top-[50%] w-[90%] sm:w-[80%]">{ita.biglietti.terra}</p>
        <button class="absolute p-2 rounded-2xl top-[85%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer ">Prenota {ita.biglietti.laterra}</button>
      </div>
  
      <div class="hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[30%] sm:top-[28%] w-[90%] sm:w-[70%] lg:top-[33%] lg:right-[8%] h-[8%] sm:h-[8%] lg:h-[15%] lg:w-[40%] bg-gradient-to-tr from-black to-neutral-900 rounded-3xl">
        <img src={giove} alt="hand" class="w-[40%] md:w-[25%] lg:w-[20%] relative top-[10%] animazione md:top-[10%] lg:top-[10%]" />
        <p class="text-teal-500 text-5xl lg:text-5xl top-[25%] sm:top-[50%] md:top-[60%] md:text-5xl lg:top-[35%] relative ">{ita.biglietti.lagiove}</p>
        <p class="text-white text-justify text-[13px] lg:text-[18px] absolute top-[50%] md:top-[60%]  sm:top-[49%] lg:top-[50%] w-[90%] sm:w-[80%]">{ita.biglietti.giove}</p>
        <button class="absolute p-2 rounded-2xl top-[85%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer ">Prenota {ita.biglietti.lagiove}</button>
      </div>
      
      <div class="hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[40%] sm:top-[38%] lg:top-[50%] lg:left-[8%] w-[90%] sm:w-[70%] h-[8%] sm:h-[8%] lg:h-[15%] lg:w-[40%] bg-gradient-to-tr from-black to-neutral-900 rounded-3xl">
        <img src={mercurio} alt="hand" class="w-[40%] md:w-[25%] lg:w-[20%] relative top-[10%] md:top-[10%] animazione lg:top-[10%]" />
        <p class="text-teal-500 text-5xl  lg:text-5xl top-[25%] sm:top-[50%] md:top-[60%] md:text-5xl lg:top-[35%] relative ">{ita.biglietti.lamercurio}</p>
        <p class="text-white text-justify text-[13px] lg:text-[18px] absolute top-[50%] md:top-[60%] sm:top-[49%] lg:top-[50%] w-[90%] sm:w-[80%]">{ita.biglietti.mercurio}</p>
        <button class="absolute p-2 rounded-2xl top-[85%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer ">Prenota {ita.biglietti.lamercurio}</button>
      </div>
  
      <div class="hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[50%] sm:top-[48%] w-[90%] sm:w-[70%] lg:top-[50%] lg:right-[8%] h-[8%] sm:h-[8%] lg:h-[15%] lg:w-[40%] bg-gradient-to-tr from-black to-neutral-900 rounded-3xl">
        <img src={nettuno} alt="hand" class="w-[40%] md:w-[25%] lg:w-[20%] relative top-[10%] md:top-[10%] animazione lg:top-[10%]" />
        <p class="text-teal-500 text-5xl  lg:text-5xl top-[25%] sm:top-[50%] md:top-[60%] md:text-5xl lg:top-[35%] relative ">{ita.biglietti.lanettuno}</p>
        <p class="text-white text-justify text-[13px] lg:text-[18px] absolute top-[50%] md:top-[60%]  sm:top-[49%] lg:top-[50%] w-[90%] sm:w-[80%]">{ita.biglietti.nettuno}</p>
        <button class="absolute p-2 rounded-2xl top-[85%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer ">Prenota {ita.biglietti.lanettuno}</button>
      </div>
  
      <div class="hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[60%] sm:top-[58%] w-[90%] sm:w-[70%] lg:top-[67%] lg:left-[8%] h-[8%] sm:h-[8%] lg:h-[15%] lg:w-[40%] bg-gradient-to-tr from-black to-neutral-900 rounded-3xl">
        <img src={plutone} alt="hand" class="w-[40%] md:w-[25%] lg:w-[20%] relative top-[10%] md:top-[10%] animazione lg:top-[10%]" />
        <p class="text-teal-500 text-5xl  lg:text-5xl top-[25%] sm:top-[50%] md:top-[60%] md:text-5xl lg:top-[35%] relative ">{ita.biglietti.laplutone}</p>
        <p class="text-white text-justify text-[13px] lg:text-[18px] absolute top-[50%] md:top-[60%]  sm:top-[49%] lg:top-[50%] w-[90%] sm:w-[80%]">{ita.biglietti.plutone}</p>
        <button class="absolute p-2 rounded-2xl top-[85%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer ">Prenota {ita.biglietti.laplutone}</button>
      </div>
  
      <div class="hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[70%] sm:top-[68%] w-[90%] sm:w-[70%] lg:top-[67%] lg:right-[8%] h-[8%] sm:h-[8%] lg:h-[15%] lg:w-[40%] bg-gradient-to-tr from-black to-neutral-900 rounded-3xl">
        <img src={saturno} alt="hand" class="w-[40%] md:w-[25%] lg:w-[20%] relative top-[10%] md:top-[10%] lg:top-[10%]" />
        <p class="text-teal-500 text-5xl  lg:text-5xl top-[25%] sm:top-[50%] md:top-[60%] md:text-5xl lg:top-[35%] relative ">{ita.biglietti.lasaturno}</p>
        <p class="text-white text-justify text-[13px] lg:text-[18px] absolute top-[50%] md:top-[60%] sm:top-[49%] lg:top-[50%] w-[90%] sm:w-[80%]">{ita.biglietti.saturno}</p>
        <button class="absolute p-2 rounded-2xl top-[85%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer ">Prenota {ita.biglietti.lasaturno}</button>
      </div>
  
      <div class="hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[80%] sm:top-[78%] w-[90%] sm:w-[70%] lg:top-[84%] lg:left-[8%] h-[8%] sm:h-[8%] lg:h-[15%] lg:w-[40%] bg-gradient-to-tr from-black to-neutral-900 rounded-3xl">
        <img src={urano} alt="hand" class="w-[35%] md:w-[25%] lg:w-[20%] relative top-[10%] md:top-[10%] lg:top-[10%]" />
        <p class="text-teal-500 text-5xl  lg:text-5xl top-[25%] sm:top-[50%] md:top-[60%] md:text-5xl lg:top-[35%] relative ">{ita.biglietti.laurano}</p>
        <p class="text-white text-justify text-[13px] lg:text-[18px] absolute top-[50%] md:top-[60%]  sm:top-[49%] lg:top-[50%] w-[90%] sm:w-[80%]">{ita.biglietti.urano}</p>
        <button class="absolute p-2 rounded-2xl top-[85%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer ">Prenota {ita.biglietti.laurano}</button>
      </div>
  
      <div class="hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[90%] sm:top-[88%] w-[90%] sm:w-[70%] lg:top-[84%] lg:right-[8%] h-[8%] sm:h-[8%] lg:h-[15%] lg:w-[40%] bg-gradient-to-tr from-black to-neutral-900 rounded-3xl">
        <img src={venere} alt="hand" class="w-[40%] md:w-[25%] lg:w-[20%] relative top-[10%] md:top-[10%] lg:top-[10%] animazione" />
        <p class="text-teal-500 text-5xl  lg:text-5xl top-[25%] sm:top-[50%] md:top-[60%] md:text-5xl lg:top-[35%] relative ">{ita.biglietti.lavenere}</p>
        <p class="text-white text-justify text-[13px] lg:text-[18px] absolute top-[50%] md:top-[60%]  sm:top-[49%] lg:top-[50%] w-[90%] sm:w-[80%]">{ita.biglietti.venere}</p>
        <button class="absolute p-2 rounded-2xl top-[85%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500  cursor-pointer ">Prenota {ita.biglietti.lavenere}</button>
      </div>
  
      </div>
  
  
      <div class=" {opencart ? "invisible": "visible"}  bg-black w-[80%] h-[800px] sm:h-[6500px] md:h-[5500px] lg:h-[3000px]  fixed bottom-[0%] left-[10%] flex justify-center overflow-y-auto ">
  
          <div class="flex flex-row justify-center items-center absolute top-0 sm:top-2 bg-teal-950 w-[100%] h-[8%] rounded-b-xl">
          <p class="text-white font-bold text-3xl tracking-[3px] ">CARRELLO</p>
          </div>
  
  
          <div class="flex items-center bg-gradient-to-tr from-black to-gray-700 border-2 border-gray-700 w-[100%] h-[15%] rounded-2xl absolute top-[10%] justify-center text-center">
            <img src={terra} alt="terra" class="w-[25%] animazione absolute left-[5%] top-[20%]" />
            <p class="text-teal-500 text-3xl font-semibold absolute top-[20%] left-[34%] tracking-widest">{ita.biglietti.laterra}</p>
            <p class="text-teal-500 text-2xl font-semibold absolute top-[50%] left-[34%]">{ita.biglietti.pterra}</p>
          </div>
  
      </div>
  
  
      <button on:click="{apricarrello}"  class="fixed w-[18%] sm:w-[15%] md:w-[10%] lg:w-[5%] bg-black border-teal-500 border-2 shadow-lg shadow-teal-950 p-5 rounded-full bottom-[5%] right-[10%] cursor-pointer hover:bg-teal-950 transizione2">
        <img src={cart} alt="cart" class="invert w-[100%]"/>
      </button>
  
      <div class="{opencart ? "invisible" : "visible transizione2"} fixed w-[50%] sm:w-[30%] bg-black border-green-500 border-2 shadow-lg shadow-green-950 p-5 rounded-full bottom-[5%] left-[10%] cursor-pointer hover:bg-green-950 ">
        <p class="invert w-[100%] text-lg font-bold">Paga Tutto</p>
      </div>
  
      
  
  
  
  
  
  
  
    </div>
  </div>
  
  <style>
    .animazione{
      animation: 60s infinite linear gira;
    }
    @keyframes gira{
      from{rotate: 0deg;}
      to{rotate: 360deg;}
    }
  
    .transizione{
      transition: 2s;
    }
  
    .transizione2{
      transition: 0.3s; 
    }
  
    
  </style>
  
  
  