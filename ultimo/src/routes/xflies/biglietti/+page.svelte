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
import trash from '/src/routes/xflies/ximg/trash.png';


// @ts-ignore
import ita from '/src/routes/xflies/xtesto.json';
	import { redirect } from '@sveltejs/kit';


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

  
 let homex= false
 let biglietti = true
 let xshop = false

  // @ts-ignore
  const selezionaPagx=(paginax)=>{
    switch (paginax) {
      case 'homex':
        home = true
        skills =false
        progetti=false
        break;

        case 'biglietti':
          skills = true
          home = false
          progetti = false
          break;

          case 'xshop':
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

  let visacard = false
  let paypalcard = false
  let mastercard = false
  let americancard = false

  const selezionacard=(carta)=>{
    switch(carta){
      case 'visa':
        visacard = true
        paypalcard = false
        americancard = false
        mastercard = false
        break;
        case 'paypal':
        visacard = false
        paypalcard = true
        americancard = false
        mastercard = false
        break;
          case 'american':
        visacard = false
        paypalcard = false
        americancard = true
        mastercard = false
        break;
        case 'card':
        visacard = false
        paypalcard = false
        americancard = false
        mastercard = true
        break;

        default:
          break;
    }
  }


 let imgitem;
 let titoloitem = 'Nessun Articolo'
 let prezzoitem = ''

 const articoli = [{
  imgitem: terra,
titoloitem: ita.biglietti.laterra,  //0
prezzoitem: ita.biglietti.pterra
 },
 {
imgitem: marte,
titoloitem: ita.biglietti.lamarte, //1
prezzoitem: ita.biglietti.pmarte
 },
 {
  imgitem: giove,
titoloitem: ita.biglietti.lagiove, //2
prezzoitem: ita.biglietti.pgiove
 },
 {
imgitem: nettuno,
titoloitem: ita.biglietti.lanettuno, //3
prezzoitem: ita.biglietti.pnettuno
 },
 {
imgitem: saturno,
titoloitem: ita.biglietti.lasaturno, //4
prezzoitem: ita.biglietti.psaturno
 },
 {
imgitem: venere,
titoloitem: ita.biglietti.lavenere, //5
prezzoitem: ita.biglietti.pvenere
 },
 {
imgitem: plutone,
titoloitem: ita.biglietti.laplutone,  //6
prezzoitem: ita.biglietti.pplutone
 },
 {
imgitem: mercurio,
titoloitem: ita.biglietti.lamercurio,  //7
prezzoitem: ita.biglietti.pmercurio
 },
 {
imgitem: urano,
titoloitem: ita.biglietti.laurano, //8
prezzoitem: ita.biglietti.purano
 },
 {
imgitem: luna,
titoloitem: ita.biglietti.laluna, //9
prezzoitem: ita.biglietti.pluna
 },
 {
imgitem: sistema,
titoloitem: ita.biglietti.lasistema, //10
prezzoitem: ita.biglietti.psistema
 },
]

let calcolo;
let count = 0
let prezzo;
let numart;
let numcount = 0

 let carrello = []

 const aggiungiCarrello=(articolo)=>{
  switch(articolo){
    case 'terra': 
     const artTerra = articoli[0]
     carrello = [...carrello, artTerra]
     prezzo = ita.biglietti.pterra
     calcolo = prezzo += count
     count = calcolo
     numart = numcount + 1
     numcount = numart
     attiva = false
    break;
    case 'giove': 
    const artGiove = articoli[2]
     carrello = [...carrello, artGiove]
     prezzo = ita.biglietti.pgiove
     calcolo = prezzo += count
     count = calcolo
     numart = numcount + 1
     numcount = numart
     attiva1 = false
    break;
    case 'mercurio': 
    const artmercurio = articoli[7]
     carrello = [...carrello, artmercurio]
     prezzo = ita.biglietti.pmercurio
     calcolo = prezzo += count
     count = calcolo
     numart = numcount + 1
     numcount = numart
     attiva2= false
    break;
    case 'nettuno': 
    const artnettuno = articoli[3]
     carrello = [...carrello, artnettuno]
     prezzo = ita.biglietti.pnettuno
     calcolo = prezzo += count
     count = calcolo
     numart = numcount + 1
     numcount = numart
     attiva3 = false
    break;
    case 'plutone': 
    const artplutone = articoli[6]
     carrello = [...carrello, artplutone]
     prezzo = ita.biglietti.pplutone
     calcolo = prezzo += count
     count = calcolo
     numart = numcount + 1
     numcount = numart
     attiva4 = false
    break;
    case 'saturno': 
    const artsaturno = articoli[4]
     carrello = [...carrello, artsaturno]
     prezzo = ita.biglietti.psaturno
     calcolo = prezzo += count
     count = calcolo
     numart = numcount + 1
     numcount = numart
     attiva5 = false
    break;
     case 'urano': 
    const arturano = articoli[8]
     carrello = [...carrello, arturano]
     prezzo = ita.biglietti.purano
     calcolo = prezzo += count
     count = calcolo
     numart = numcount + 1
     numcount = numart
     attiva6 = false
    break;
     case 'venere': 
    const artvenere = articoli[5]
     carrello = [...carrello, artvenere]
     prezzo = ita.biglietti.pvenere
     calcolo = prezzo += count
     count = calcolo
     numart = numcount + 1
     numcount = numart
     attiva7= false
     break;
    case 'luna': 
    const artluna = articoli[9]
     carrello = [...carrello, artluna]
     prezzo = ita.biglietti.pluna
     calcolo = prezzo += count
     count = calcolo
     numart = numcount + 1
     numcount = numart
     attiva8 = false
    break;
    case 'marte': 
    const artmarte = articoli[1]
     carrello = [...carrello, artmarte]
     prezzo = ita.biglietti.pmarte
     calcolo = prezzo += count
     count = calcolo
     numart = numcount + 1
     numcount = numart
     attiva9= false
    break;
    case 'sistema': 
    const artsistema = articoli[10]
     carrello = [...carrello, artsistema]
     prezzo = ita.biglietti.psistema
     calcolo = prezzo += count
     count = calcolo
     numart = numcount + 1
     numcount = numart
     attiva10 = false
    break;
    default:
      break;
  }
 }
 
 

 const elimina=(articolo)=>{
carrello = carrello.filter(item=> item !== articolo)
     numart = numcount - 1
     numcount = numart
     const ilprezzo = articolo.prezzoitem
     count = count - ilprezzo

     if (articolo.titoloitem === ita.biglietti.laterra) {
        attiva = true;
    } if (articolo.titoloitem === ita.biglietti.lagiove) {
        attiva1 = true;
    }  if (articolo.titoloitem === ita.biglietti.lamercurio) {
        attiva2 = true;
    } if (articolo.titoloitem === ita.biglietti.lanettuno) {
        attiva3 = true;
    }  if (articolo.titoloitem === ita.biglietti.laplutone) {
        attiva4 = true;
    } if (articolo.titoloitem === ita.biglietti.lasaturno) {
        attiva5 = true;
    }  if (articolo.titoloitem === ita.biglietti.laurano) {
        attiva6 = true;
    } if (articolo.titoloitem === ita.biglietti.lavenere) {
        attiva7 = true;
    }  if (articolo.titoloitem === ita.biglietti.laluna) {
        attiva8 = true;
    } if (articolo.titoloitem === ita.biglietti.lamarte) {
        attiva9 = true;
    } if (articolo.titoloitem === ita.biglietti.lasistema) {
        attiva10 = true;
    }
 }
 
 let attiva = true
 let attiva1 = true
 let attiva2 = true
 let attiva3 = true
 let attiva4 = true
 let attiva5 = true
 let attiva6= true
 let attiva7 = true
 let attiva8 = true
 let attiva9 = true
 let attiva10 = true



 let email = ''
 let nome = ''
 let cognome = ''
 let oblemail = 'Email*'
 let oblnome = 'Nome*'
 let oblcognome = 'Cognome*'
 let compra = 'Acquista'
 let riselezionapagamento = 'Seleziona tipo di pagamento:'
 let conferma = false
 let grazie = false
 let completato = `Grazie ${nome} per il tuo acquisto!`
 let dati = `Riceverai a breve una mail all'indirizzo: ${email}, contenente i biglietti/articoli acquistati! Ci auguriamo che possano essere di tuo gradimento. In caso di problemi o bisogno di assistenza, non esitare a contattarci alla nostra email: xfliesassistance@gmail.com`
 let randomnumber= '1234567890'
 let id = Math.floor(Math.random() * randomnumber.length)

 const confermaAcq=()=>{
  if(carrello && (visacard === false && paypalcard === false && mastercard === false && americancard === false)){
    riselezionapagamento = 'Per effettuare il pagamento seleziona una carta'
    setTimeout(()=>{
    riselezionapagamento = 'Seleziona tipo di pagamento:'
   }, 5000)
  }else{
    carrello = []
    conferma = true
    compra = 'Conferma Acquisto'
  }
  if(email === '' || nome === '' || cognome === ''){
    oblemail = 'Email*'
  setTimeout(()=>{
    oblemail = 'Email (Campo obbligatorio)'
  }, 5000)
  
  oblnome = 'Nome*'
  setTimeout(()=>{
    oblnome = 'Nome (Campo obbligatorio)'
  }, 5000)
  
  oblcognome = 'Cognome*'
  setTimeout(()=>{
    oblcognome = 'Cognome (Campo obbligatorio)'
  }, 5000)
  
  } else{
   grazie = true
   numcount = 0
   count = 0
   compra = 'Acquista'
   visacard = false
   paypalcard = false
   mastercard = false
   americancard = false
  }
}

const Email=(event)=>{
  email = event.target.value
}
const Nome=(event)=>{
  nome = event.target.value
}
const Cognome=(event)=>{
  cognome = event.target.value
}


</script>

<div>
  <div class="bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-800 flex-auto relative top-5 w-auto h-24 items-center border-b-2 white flex rounded-3xl ">
  <h1  class="text-white text-4xl font-bold flex relative left-[68px] justify-center cursor-default">HomeCode<h1 class="effetto text-white">|</h1></h1>
  </div>
  <div class="bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-800 h-10 flex-auto flex flex-row items-center justify-between relative top-12 rounded-xl md:w-[50%] md:left-[45%] md:-top-12 "> 
  <a href="/" class=" font-bold ml-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {home ? "border-b-2 rounded-sm border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('home')}">Home</a>
  <a href="/skills" class="  font-bold cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {skills ? "border-b-2 border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('skills')}">Skills</a>
  <a href="/progetti" class="  font-bold mr-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {progetti ? "border-b-2 border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('progetti')}">Progetti</a>
  </div>
</div>


<div class="bg-black w-[100%] h-[5500px] sm:h-[6500px] md:h-[5500px] lg:h-[3000px] rounded-3xl relative top-36 flex justify-center ">
  <div class="w-[90%] h-[180px] flex flex-col">
    <div class="bg-gradient-to-br from-gray-950 to-teal-950 flex-auto relative top-5 w-[100%] h-[50px] lg:absolute lg:left-0 lg:top-0 md:absolute md:h-[160px] md:left-0 md:top-0 items-center teal-500 flex rounded-3xl ">
    <img src={alien} alt="alien" class="w-[80px] sm:w-[90px]  md:left-[4%] relative" />
    <div class="flex flex-col  md:left-[5%] relative">
    <h1  class="text-white text-4xl flex relative left-[0px] font-thin justify-center tracking-[10px] cursor-default">X-FLIES</h1>
     <p class="text-white text-sm italic">Your First Alien Space Travel</p>
    </div>
    </div>
  
    <div class="flex justify-center items-center absolute top-[0%] left-[35%] lg:top-[130px] lg:left-[35%] h-[40px] md:h-[40px] lg:h-[1%] md:top-[130px] md:left-[0%] md:rounded-tr-full lg:rounded-t-full bg-black p-3 rounded-xl w-[30%]">
      <p class="text-teal-500 font-bold" >{time.toLocaleTimeString()}</p>
    </div>

    


  

  
    <div class="bg-gradient-to-br from-gray-950 to-teal-950 md:bg-gradient-to-br md:from-black md:to-neutral-900 h-[10px] flex-auto flex flex-row items-center justify-between relative top-12 md:absolute  rounded-lg md:w-[50%] md:h-[50px] md:left-[45%] md:top-[1%] "> 
      <a href="/xflies" on:click="{()=>selezionaPagx('homex')}" class=" font-bold ml-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {homex ? "text-teal-500 border-b-2 border-teal-500": "text-white"}">Home</a>
      <a href="/xflies/biglietti" on:click="{()=>selezionaPagx('biglietti')}" class=" font-bold cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {biglietti ? "text-teal-500 border-b-2 border-teal-500": "text-white"}">Biglietti</a>
      <a href="/xflies/shop" on:click="{()=>selezionaPagx('xshop')}" class="  font-bold mr-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {xshop ? "text-teal-500 border-b-2 border-teal-500": "text-white"}">X-Shop</a>
      </div>
  

      <div class="flex justify-center w-[100%]">
    <div class="flex justify-center items-center absolute top-[340px] sm:top-[400px] text-[12px] font-light  md:rounded-xl   lg:rounded-xl lg:h-[1.5%] md:top-[260px] lg:top-[180px] md:w-[70%]  bg-neutral-950 p-3 rounded-xl w-[80%]">
      <p class="text-teal-500 font-bold" >{frasi}</p>
       </div>
      </div>

    <div class="flex w-[100%] justify-center">
    <div class="{grey ? "bg-gradient-to-tr from-black to-neutral-500 border-neutral-500  border-2 transizione" : ""} {blue ? "bg-gradient-to-tr from-black to-blue-950 border-blue-950 border-2 transizione " : ""} {red ? "bg-gradient-to-tr from-black to-red-950 border-red-950 border-2 transizione " : ""} transizione grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[8%] md:top-[330px] lg:top-[240px] w-[300px] sm:w-[400px] md:w-[680px] h-[10%] sm:h-[8%] md:h-[10%] lg:h-[23%] lg:w-[80%] rounded-3xl">
      <img src={pianeta} alt="hand" class="w-[40%] md:w-[25%] lg:w-[220px] relative top-[10%] animazione" />
      <p class="text-teal-500 text-3xl sm:top-[50%] md:top-[45%] md:text-[40px] lg:text-5xl lg:top-[50%] relative ">{titolo}</p>
      <p class="text-white text-justify text-[13px] sm:text-[12px] md:text-[15px] lg:text-[16px] 2xl:text-[22px] absolute w-[90%] top-[35%] sm:top-[46%] md:top-[48%] lg:top-[50%]  sm:w-[80%]">{desc}</p>
      <div class="{grey ? "bg-neutral-500" : ""}{blue ? "bg-neutral-500" : ""}{red ? "bg-neutral-500" : ""} flex justify-center lg:w-[50%] flex-row w-[80%] h-[10%] items-center bg-neutral-500  transizione  rounded-xl absolute top-[85%]">
        <button on:click="{()=>selezionaViaggioPrev()}" class="bg-neutral-900 text-teal-500 rounded-lg relative w-[40%] mr-5 text-xl cursor-pointer hover:border-2 hover:border-teal-50">&lt;</button>
        <button on:click="{()=>selezionaViaggioNext()}" class="bg-neutral-900 text-teal-500 rounded-lg relative w-[40%] ml-5 text-xl cursor-pointer hover:border-2 hover:border-teal-500 ">&gt;</button>
      </div>

      <button disabled={!attiva8} on:click="{()=>aggiungiCarrello('luna')}" class="{grey ? "visibile":"invisible"}  {attiva8 ? "shadow-2xl shadow-black absolute p-2 rounded-2xl top-[73%] flex w-[80%] lg:w-[50%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "shadow-2xl shadow-black text-white bg-teal-800 absolute p-2 rounded-2xl top-[73%] flex w-[80%] lg:w-[50%] justify-center cursor-not-allowed opacity-40"} {grey ? "bg-neutral-400 text-black font-semibold" : ""}{blue ? "bg-blue-900 font-semibold text-white" : ""}{red ? "bg-red-950 font-semibold text-white" : ""} ">{attiva8 ? `Prenota ${paga}`: "Articolo aggiunto al carrello"}</button>
       
      <button disabled={!attiva9} on:click="{()=>aggiungiCarrello('marte')}" class="{red ? "visibile":"invisible"} {attiva9 ? "shadow-2xl shadow-black absolute p-2 rounded-2xl top-[73%] flex w-[80%] lg:w-[50%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "shadow-2xl shadow-black text-white bg-teal-800 absolute p-2 rounded-2xl top-[73%] flex w-[80%] lg:w-[50%] justify-center cursor-not-allowed opacity-40"} {grey ? "bg-neutral-400 text-black font-semibold" : ""}{blue ? "bg-blue-900 font-semibold text-white" : ""}{red ? "bg-red-950 font-semibold text-white" : ""} ">{attiva9 ? `Prenota ${paga}`: "Articolo aggiunto al carrello"}</button>
    
      <button disabled={!attiva10} on:click="{()=>aggiungiCarrello('sistema')}" class="{blue ? "visibile":"invisible"} {attiva10 ? "shadow-2xl shadow-black absolute p-2 rounded-2xl top-[73%] flex w-[80%] lg:w-[50%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "shadow-2xl shadow-black text-white bg-teal-800 absolute p-2 rounded-2xl top-[73%] flex w-[80%] lg:w-[50%] justify-center cursor-not-allowed opacity-40"} {grey ? "bg-neutral-400 text-black font-semibold" : ""}{blue ? "bg-blue-900 font-semibold text-white" : ""}{red ? "bg-red-950 font-semibold text-white" : ""} ">{attiva10 ? `Prenota ${paga}`: "Articolo aggiunto al carrello"}</button>
    
    </div>

    <div class="hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors cursor-default grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[20%] sm:top-[18%] lg:top-[33%] lg:left-[8%] w-[300px] sm:w-[400px] md:w-[680px] h-[8%] sm:h-[8%] lg:h-[15%] lg:w-[40%] bg-gradient-to-tr from-black to-neutral-900 rounded-3xl border-2 border-neutral-900">
      <img src={terra} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] animazione md:top-[10%] lg:top-[10%]" />
      <p class="text-teal-500 text-5xl lg:text-5xl top-[25%] sm:top-[50%] md:top-[80%] md:text-5xl lg:top-[35%] relative ">{ita.biglietti.laterra}</p>
      <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[50%] md:top-[60%]  sm:top-[49%] lg:top-[50%] w-[90%] sm:w-[80%]">{ita.biglietti.terra}</p>
      <button disabled={!attiva} on:click="{()=>aggiungiCarrello('terra')}" class=" {attiva ? "absolute p-2 rounded-2xl top-[85%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[85%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva ? `Prenota ${ita.biglietti.laterra}`: "Articolo aggiunto al carrello"}</button>
    </div>

    <div class="hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[30%] sm:top-[28%] w-[300px] sm:w-[400px] md:w-[680px] lg:top-[33%] lg:right-[8%] h-[8%] sm:h-[8%] lg:h-[15%] lg:w-[40%] bg-gradient-to-tr from-black to-neutral-900 rounded-3xl border-2 border-neutral-900">
      <img src={giove} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] animazione md:top-[10%] lg:top-[10%]" />
      <p class="text-teal-500 text-5xl lg:text-5xl top-[25%] sm:top-[50%] md:top-[80%] md:text-5xl lg:top-[35%] relative ">{ita.biglietti.lagiove}</p>
      <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[50%] md:top-[60%]  sm:top-[49%] lg:top-[50%] w-[90%] sm:w-[80%]">{ita.biglietti.giove}</p>
      <button disabled={!attiva1} on:click="{()=>aggiungiCarrello('giove')}" class=" {attiva1 ? "absolute p-2 rounded-2xl top-[85%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[85%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva1 ? `Prenota ${ita.biglietti.lagiove}`: "Articolo aggiunto al carrello"}</button>
    </div>
    
    <div class="hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[40%] sm:top-[38%] lg:top-[50%] lg:left-[8%] w-[300px] sm:w-[400px] md:w-[680px] h-[8%] sm:h-[8%] lg:h-[15%] lg:w-[40%] bg-gradient-to-tr from-black to-neutral-900 rounded-3xl border-2 border-neutral-900">
      <img src={mercurio} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] animazione lg:top-[10%]" />
      <p class="text-teal-500 text-5xl  lg:text-5xl top-[25%] sm:top-[50%] md:top-[80%] md:text-5xl lg:top-[35%] relative ">{ita.biglietti.lamercurio}</p>
      <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[50%] md:top-[60%] sm:top-[49%] lg:top-[50%] w-[90%] sm:w-[80%]">{ita.biglietti.mercurio}</p>
      <button disabled={!attiva2} on:click="{()=>aggiungiCarrello('mercurio')}" class=" {attiva2 ? "absolute p-2 rounded-2xl top-[85%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[85%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva2 ? `Prenota ${ita.biglietti.lamercurio}`: "Articolo aggiunto al carrello"}</button>
    </div>

    <div class="hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[50%] sm:top-[48%] w-[300px] sm:w-[400px] md:w-[680px] lg:top-[50%] lg:right-[8%] h-[8%] sm:h-[8%] lg:h-[15%] lg:w-[40%] bg-gradient-to-tr from-black to-neutral-900 rounded-3xl border-2 border-neutral-900">
      <img src={nettuno} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] animazione lg:top-[10%]" />
      <p class="text-teal-500 text-5xl  lg:text-5xl top-[25%] sm:top-[50%] md:top-[80%] md:text-5xl lg:top-[35%] relative ">{ita.biglietti.lanettuno}</p>
      <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[50%] md:top-[60%]  sm:top-[49%] lg:top-[50%] w-[90%] sm:w-[80%]">{ita.biglietti.nettuno}</p>
      <button disabled={!attiva3} on:click="{()=>aggiungiCarrello('nettuno')}" class=" {attiva3 ? "absolute p-2 rounded-2xl top-[85%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[85%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva3 ? `Prenota ${ita.biglietti.lanettuno}`: "Articolo aggiunto al carrello"}</button>
    </div>

    <div class="hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[60%] sm:top-[58%] w-[300px] sm:w-[400px] md:w-[680px] lg:top-[67%] lg:left-[8%] h-[8%] sm:h-[8%] lg:h-[15%] lg:w-[40%] bg-gradient-to-tr from-black to-neutral-900 rounded-3xl border-2 border-neutral-900">
      <img src={plutone} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] animazione lg:top-[10%]" />
      <p class="text-teal-500 text-5xl  lg:text-5xl top-[25%] sm:top-[50%] md:top-[80%] md:text-5xl lg:top-[35%] relative ">{ita.biglietti.laplutone}</p>
      <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[50%] md:top-[60%]  sm:top-[49%] lg:top-[50%] w-[90%] sm:w-[80%]">{ita.biglietti.plutone}</p>
      <button disabled={!attiva4} on:click="{()=>aggiungiCarrello('plutone')}" class=" {attiva4 ? "absolute p-2 rounded-2xl top-[85%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[85%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva4 ? `Prenota ${ita.biglietti.laplutone}`: "Articolo aggiunto al carrello"}</button>
    </div>

    <div class="hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[70%] sm:top-[68%] w-[300px] sm:w-[400px] md:w-[680px] lg:top-[67%] lg:right-[8%] h-[8%] sm:h-[8%] lg:h-[15%] lg:w-[40%] bg-gradient-to-tr from-black to-neutral-900 rounded-3xl border-2 border-neutral-900">
      <img src={saturno} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] lg:top-[10%]" />
      <p class="text-teal-500 text-5xl  lg:text-5xl top-[25%] sm:top-[50%] md:top-[80%] md:text-5xl lg:top-[35%] relative ">{ita.biglietti.lasaturno}</p>
      <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[50%] md:top-[60%] sm:top-[49%] lg:top-[50%] w-[90%] sm:w-[80%]">{ita.biglietti.saturno}</p>
      <button disabled={!attiva5} on:click="{()=>aggiungiCarrello('saturno')}" class=" {attiva5 ? "absolute p-2 rounded-2xl top-[85%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[85%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva5 ? `Prenota ${ita.biglietti.lasaturno}`: "Articolo aggiunto al carrello"}</button>
    </div>

    <div class="hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[80%] sm:top-[78%] w-[300px] sm:w-[400px] md:w-[680px] lg:top-[84%] lg:left-[8%] h-[8%] sm:h-[8%] lg:h-[15%] lg:w-[40%] bg-gradient-to-tr from-black to-neutral-900 rounded-3xl border-2 border-neutral-900">
      <img src={urano} alt="hand" class="w-[35%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] lg:top-[10%]" />
      <p class="text-teal-500 text-5xl  lg:text-5xl top-[25%] sm:top-[50%] md:top-[80%] md:text-5xl lg:top-[35%] relative ">{ita.biglietti.laurano}</p>
      <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[50%] md:top-[60%]  sm:top-[49%] lg:top-[50%] w-[90%] sm:w-[80%]">{ita.biglietti.urano}</p>
      <button disabled={!attiva6} on:click="{()=>aggiungiCarrello('urano')}" class=" {attiva6 ? "absolute p-2 rounded-2xl top-[85%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[85%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva6 ? `Prenota ${ita.biglietti.laurano}`: "Articolo aggiunto al carrello"}</button>
    </div>

    <div class="hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[90%] sm:top-[88%] w-[300px] sm:w-[400px] md:w-[680px] lg:top-[84%] lg:right-[8%] h-[8%] sm:h-[8%] lg:h-[15%] lg:w-[40%] bg-gradient-to-tr from-black to-neutral-900 rounded-3xl border-2 border-neutral-900">
      <img src={venere} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] lg:top-[10%] animazione" />
      <p class="text-teal-500 text-5xl  lg:text-5xl top-[25%] sm:top-[50%] md:top-[80%] md:text-5xl lg:top-[35%] relative ">{ita.biglietti.lavenere}</p>
      <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[50%] md:top-[60%]  sm:top-[49%] lg:top-[50%] w-[90%] sm:w-[80%]">{ita.biglietti.venere}</p>
      <button disabled={!attiva7} on:click="{()=>aggiungiCarrello('venere')}" class=" {attiva7 ? "absolute p-2 rounded-2xl top-[85%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[85%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva7 ? `Prenota ${ita.biglietti.lavenere}`: "Articolo aggiunto al carrello"}</button>
    </div>

    </div>



    <div class="flex justify-center w-[100%]">
    <div class=" {opencart ? "visible": "invisible"}  bg-gradient-to-tr from-black to-gray-600 border-2 border-gray-600 w-[350px] sm:w-[550px] h-[660px] sm:h-[760px] md:h-[760px] lg:h-[760px] md:right-[7%] fixed bottom-[0%] flex justify-center ombracar rounded-xl overflow-y-auto ">

        <div class="flex flex-row justify-center items-center absolute top-0 sm:top-2 w-[100%] h-[8%] rounded-b-xl">
        <p class="text-white font-bold text-3xl tracking-[3px] ">CARRELLO - {numcount}</p>
        </div>

        <div class="grid grid-cols-1 grid-rows-11 w-[100%] h-[350px] sm:h-[450px] gap-y-[20px] bg-gradient-to-tr from-black to-neutral-950 border-b-2 border-gray-600 absolute top-[50px] sm:top-[60px] rounded-2xl overflow-y-auto overflow-x-hidden justify-items-center">

          <div class="{conferma ? "visible": "invisible"} {opencart ? "visible": "invisible"} flex items-center bg-gradient-to-tr from-black to-neutral-700 border-2 border-neutral-700 w-[90%] h-[290px] sm:h-[370px] rounded-2xl absolute top-[10%] justify-center text-center cursor-default">
            <p class="text-teal-500 text-xl md:text-3xl font-semibold absolute top-[2%] md:top-[2%] tracking-wide">Inserisci i tuoi dati:</p>
            <p class="text-white font-bold mr-2 absolute top-[15%]">{oblemail}</p>
            <input bind:value={email} type="email" on:input="{Email}" class="w-[60%] sm:w-[50%] rounded-md outline-none p-1 text-base absolute top-[25%]" maxlength="50" placeholder="Email..." />
            <p class="text-white font-bold mr-2 absolute top-[45%]">{oblnome}</p>
            <input bind:value={nome} type="text" on:input="{Nome}" class="w-[60%] sm:w-[50%] rounded-md outline-none p-1 text-base absolute top-[55%]" maxlength="20" placeholder="Nome..." />
            <p class="text-white font-bold mr-2 absolute top-[75%]">{oblcognome}</p>
            <input bind:value={cognome} type="text" on:input="{Cognome}" class="w-[60%] sm:w-[50%] rounded-md outline-none p-1 text-base absolute top-[85%]" maxlength="20" placeholder="Cognome..." />
            </div>

          <div class="{grazie ? "visible": "invisible"} {opencart ? "visible": "invisible"} flex items-center bg-gradient-to-tr from-black to-neutral-700 border-2 border-neutral-700 w-[90%] h-[290px] sm:h-[370px] rounded-2xl absolute top-[10%] justify-center text-center cursor-default">
            <img src={alien} alt="terra" class="w-[70px] md:w-[100px] absolute left-[5%] " />
            <p class="text-teal-500 text-xl md:text-3xl font-semibold absolute top-[20%] md:top-[10%] left-[28%] md:left-[34%] tracking-wide">{completato}</p>
            <p class="text-teal-500 text-base md:text-xl font-semibold absolute top-[50%] left-[28%] md:left-[30%]">{dati}</p>
            </div>

          {#each carrello as item (item.titoloitem)}
          <div class="flex items-center bg-gradient-to-tr from-black to-neutral-700 border-2 border-neutral-700 w-[90%] h-[90px] rounded-2xl relative top-[10%] justify-center text-center cursor-default">
          <img src={item.imgitem} alt="terra" class="w-[50px] md:w-[70px] animazione absolute left-[5%] " />
          <p class="text-teal-500 text-xl md:text-3xl font-semibold absolute top-[20%] md:top-[10%] left-[28%] md:left-[34%] tracking-wide">{item.titoloitem}</p>
          <p class="text-teal-500 text-lg md:text-2xl font-semibold absolute top-[50%] left-[28%] md:left-[34%]">€{item.prezzoitem}</p>
          <img src={trash} alt='trash' on:click="{()=>elimina(item)}" class="invert bg-cyan-500 rounded-full absolute right-[5%] border-2 border-cyan-800 md:p-2 p-1 w-[30px] md:w-[40px] cursor-pointer" />
          </div>
        {/each}
      </div>

      <div on:click="{()=>confermaAcq()}" class="{opencart ? "visible transizione2" : "invisible"} flex justify-center text-center w-[180px] h-[50px] sm:w-[260px] sm:h-[70px] absolute items-center bg-black border-green-500 border-2 shadow-lg shadow-green-950 p-5 rounded-full bottom-[40px] left-[10%] cursor-pointer hover:bg-green-950 ">
        <p class="invert w-[100%] sm:text-base md:text-xl text-sm font-bold">{compra} €{count} </p>
      </div>

      <button on:click="{apricarrello}"  class="{opencart  ? "right-[30px] sm:right-[10%] md:right-[10%] 2xl:right-[10%] absolute": "invisible"}  w-[70px] sm:w-[80px] bg-black border-teal-500 border-2 shadow-lg shadow-teal-950 p-5 rounded-full bottom-[5%]  cursor-pointer hover:bg-teal-950">
        <img src={cart} alt="cart" class="invert w-[100%]"/>
      </button>

      <div class="flex justify-center w-[100%] h-[100px] bottom-[130px] absolute">
        <p class="text-white font-bold text-lg">{riselezionapagamento}</p>
        <div class="flex justify-around w-[90%] h-[60px] absolute top-[30%] bg-black rounded-xl border-2 border-gray-800 items-center">
          <img src={visa} alt="visa" on:click="{()=>selezionacard('visa')}" class="{visacard ? "border-b-4 border-teal-500":"border-none"} w-[15%] h-[80%] sm:h-[100%] sm:w-[13%] cursor-pointer " />
          <img src={paypal} alt="visa" on:click="{()=>selezionacard('paypal')}" class="{paypalcard ? "border-b-4 border-teal-500 mt-3 pb-1":"border-none"} w-[15%] h-[70%] sm:h-[80%] sm:w-[10%] pb-1 mt-3 cursor-pointer " />
          <img src={american} alt="visa" on:click="{()=>selezionacard('american')}" class="{americancard ? "border-b-4 border-teal-500":"border-none"} w-[15%] h-[80%] sm:h-[100%] sm:w-[13%] cursor-pointer " />
          <img src={card} alt="visa" on:click="{()=>selezionacard('card')}" class="{mastercard ? "border-b-4 border-teal-500":"border-none"} w-[15%] h-[80%] sm:h-[100%] sm:w-[13%] cursor-pointer " />
        </div>
      </div>

    </div>
  </div>


    <button on:click="{apricarrello}"  class="{opencart  ? "invisible": "right-[10%] sm:right-[5%] md:right-[5%] 2xl:right-[6%] fixed"}  w-[70px] sm:w-[80px] bg-black border-teal-500 border-2 shadow-lg shadow-teal-950 p-5 rounded-full bottom-[5%]  cursor-pointer hover:bg-teal-950 ">
      <div class="flex justify-center w-[100%]">
        <p class="text-black font-bold p-1 rounded-full bg-teal-500 ">{numcount}</p>
        </div>
      <img src={cart} alt="cart" class="invert w-[100%]"/>
      
    </button>

   
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


  .ombracar{
    box-shadow: black 0px 0px 0px 10px;
  }
  
</style>


