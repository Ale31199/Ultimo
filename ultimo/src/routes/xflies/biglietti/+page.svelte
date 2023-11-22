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
import cross from '/src/routes/xflies/ximg/cross.png';


// @ts-ignore
import ita from '/src/routes/xflies/xtesto.json';
	//import { redirect } from '@sveltejs/kit';
//@ts-ignore
  import eng from '/src/routes/xflies/xtestoeng.json';

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

let pianeta = luna;
$: titolo = $lingua.homepage.via1
$: desc = $lingua.biglietti.luna
let grey = true
let blue = false
let red = false
$: paga = $lingua.biglietti.laluna



const selezionaViaggioNext=()=>{
  if(pianeta === luna){
  pianeta = marte
  titolo = $lingua.homepage.via2;
  desc = $lingua.biglietti.marte
  red = true
  blue = false
  grey = false
  paga = $lingua.biglietti.lamarte
  } else if (pianeta === marte){
pianeta = sistema
titolo = $lingua.homepage.via3
desc = $lingua.biglietti.sistema
  blue = true
  red= false
   grey = false
   paga = $lingua.biglietti.lasistema
  } else if(pianeta === sistema){
    pianeta = luna
    titolo = $lingua.homepage.via1
    desc = $lingua.biglietti.luna
  grey = true
  red = false
  blue = false
  paga = $lingua.biglietti.laluna
  }
}

const selezionaViaggioPrev=()=>{
  if(pianeta === sistema){
  pianeta = marte
  titolo = $lingua.homepage.via2;
  desc = $lingua.biglietti.marte
  red = true
  blue = false
  grey = false
  paga = $lingua.biglietti.lamarte
  } else if (pianeta === luna){
pianeta = sistema
titolo = $lingua.homepage.via3
desc = $lingua.biglietti.sistema
  blue = true
  red = false
  grey = false
  paga = $lingua.biglietti.lasistema
  } else if(pianeta === marte){
    pianeta = luna
    titolo = $lingua.homepage.via1
    desc = $lingua.biglietti.luna
  grey = true
  red = false
  blue = false
  paga = $lingua.biglietti.laluna
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

 $: rand = [
        $lingua.homepage.a,
        $lingua.homepage.b,
        $lingua.homepage.c,
        $lingua.homepage.e,
        $lingua.homepage.f,
        $lingua.homepage.g,
        $lingua.homepage.h,
        $lingua.homepage.i,
        $lingua.homepage.j,
        $lingua.homepage.k,
        $lingua.homepage.l,
        $lingua.homepage.m,
        $lingua.homepage.n,
        $lingua.homepage.o];

        $: frasi = $lingua.homepage.a

        const scorrifrasi=()=>{
          const scorri = setInterval(()=>{
          const lefrasi = Math.floor(Math.random() * rand.length)
          const mostrafrasi = rand[lefrasi]
          frasi = mostrafrasi

          },5000)
          return ()=> clearInterval(scorri)
        }

        scorrifrasi()


        let opencart = false

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
 $: titoloitem = 'Nessun Articolo'
 $: prezzoitem = ''

 $: articoli = [{
  imgitem: terra,
titoloitem: $lingua.biglietti.laterra,  //0
prezzoitem: $lingua.biglietti.pterra
 },
 {
imgitem: marte,
titoloitem: $lingua.biglietti.lamarte, //1
prezzoitem: $lingua.biglietti.pmarte
 },
 {
  imgitem: giove,
titoloitem: $lingua.biglietti.lagiove, //2
prezzoitem: $lingua.biglietti.pgiove
 },
 {
imgitem: nettuno,
titoloitem: $lingua.biglietti.lanettuno, //3
prezzoitem: $lingua.biglietti.pnettuno
 },
 {
imgitem: saturno,
titoloitem: $lingua.biglietti.lasaturno, //4
prezzoitem: $lingua.biglietti.psaturno
 },
 {
imgitem: venere,
titoloitem: $lingua.biglietti.lavenere, //5
prezzoitem: $lingua.biglietti.pvenere
 },
 {
imgitem: plutone,
titoloitem: $lingua.biglietti.laplutone,  //6
prezzoitem: $lingua.biglietti.pplutone
 },
 {
imgitem: mercurio,
titoloitem: $lingua.biglietti.lamercurio,  //7
prezzoitem: $lingua.biglietti.pmercurio
 },
 {
imgitem: urano,
titoloitem: $lingua.biglietti.laurano, //8
prezzoitem: $lingua.biglietti.purano
 },
 {
imgitem: luna,
titoloitem: $lingua.biglietti.laluna, //9
prezzoitem: $lingua.biglietti.pluna
 },
 {
imgitem: sistema,
titoloitem: $lingua.biglietti.lasistema, //10
prezzoitem: $lingua.biglietti.psistema
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
     prezzo = $lingua.biglietti.pterra
     calcolo = prezzo += count
     count = calcolo
     numart = numcount + 1
     numcount = numart
     attiva = false
    break;
    case 'giove': 
    const artGiove = articoli[2]
     carrello = [...carrello, artGiove]
     prezzo = $lingua.biglietti.pgiove
     calcolo = prezzo += count
     count = calcolo
     numart = numcount + 1
     numcount = numart
     attiva1 = false
    break;
    case 'mercurio': 
    const artmercurio = articoli[7]
     carrello = [...carrello, artmercurio]
     prezzo = $lingua.biglietti.pmercurio
     calcolo = prezzo += count
     count = calcolo
     numart = numcount + 1
     numcount = numart
     attiva2= false
    break;
    case 'nettuno': 
    const artnettuno = articoli[3]
     carrello = [...carrello, artnettuno]
     prezzo = $lingua.biglietti.pnettuno
     calcolo = prezzo += count
     count = calcolo
     numart = numcount + 1
     numcount = numart
     attiva3 = false
    break;
    case 'plutone': 
    const artplutone = articoli[6]
     carrello = [...carrello, artplutone]
     prezzo = $lingua.biglietti.pplutone
     calcolo = prezzo += count
     count = calcolo
     numart = numcount + 1
     numcount = numart
     attiva4 = false
    break;
    case 'saturno': 
    const artsaturno = articoli[4]
     carrello = [...carrello, artsaturno]
     prezzo = $lingua.biglietti.psaturno
     calcolo = prezzo += count
     count = calcolo
     numart = numcount + 1
     numcount = numart
     attiva5 = false
    break;
     case 'urano': 
    const arturano = articoli[8]
     carrello = [...carrello, arturano]
     prezzo = $lingua.biglietti.purano
     calcolo = prezzo += count
     count = calcolo
     numart = numcount + 1
     numcount = numart
     attiva6 = false
    break;
     case 'venere': 
    const artvenere = articoli[5]
     carrello = [...carrello, artvenere]
     prezzo = $lingua.biglietti.pvenere
     calcolo = prezzo += count
     count = calcolo
     numart = numcount + 1
     numcount = numart
     attiva7= false
     break;
    case 'luna': 
    const artluna = articoli[9]
     carrello = [...carrello, artluna]
     prezzo = $lingua.biglietti.pluna
     calcolo = prezzo += count
     count = calcolo
     numart = numcount + 1
     numcount = numart
     attiva8 = false
    break;
    case 'marte': 
    const artmarte = articoli[1]
     carrello = [...carrello, artmarte]
     prezzo = $lingua.biglietti.pmarte
     calcolo = prezzo += count
     count = calcolo
     numart = numcount + 1
     numcount = numart
     attiva9= false
    break;
    case 'sistema': 
    const artsistema = articoli[10]
     carrello = [...carrello, artsistema]
     prezzo = $lingua.biglietti.psistema
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

     if (articolo.titoloitem === $lingua.biglietti.laterra) {
        attiva = true;
    } if (articolo.titoloitem === $lingua.biglietti.lagiove) {
        attiva1 = true;
    }  if (articolo.titoloitem === $lingua.biglietti.lamercurio) {
        attiva2 = true;
    } if (articolo.titoloitem === $lingua.biglietti.lanettuno) {
        attiva3 = true;
    }  if (articolo.titoloitem === $lingua.biglietti.laplutone) {
        attiva4 = true;
    } if (articolo.titoloitem === $lingua.biglietti.lasaturno) {
        attiva5 = true;
    }  if (articolo.titoloitem === $lingua.biglietti.laurano) {
        attiva6 = true;
    } if (articolo.titoloitem === $lingua.biglietti.lavenere) {
        attiva7 = true;
    }  if (articolo.titoloitem === $lingua.biglietti.laluna) {
        attiva8 = true;
    } if (articolo.titoloitem === $lingua.biglietti.lamarte) {
        attiva9 = true;
    } if (articolo.titoloitem === $lingua.biglietti.lasistema) {
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

 let disattiva = true
 let disattiva1 = true
 let disattiva2 = true
 let disattiva3 = true
 let disattiva4 = true
 let disattiva5 = true
 let disattiva6= true
 let disattiva7 = true
 let disattiva8 = true
 let disattiva9 = true
 let disattiva10 = true


 let email = ''
 let nome = ''
 let cognome = ''
 let oblemail = 'Email'
 $: oblnome = $lingua.homepage.nome
 $: oblcognome = $lingua.homepage.cognome
 $: compra = $lingua.homepage.acquista
 $: riselezionapagamento = $lingua.homepage.pagamento
 let conferma = false
 let grazie = false
 $: completato = $lingua.homepage.grazie
 $: dati = $lingua.homepage.grmes
 let randomnumber= '1234567890'
 let id = Math.floor(Math.random() * randomnumber.length)

 const confermaAcq=()=>{
  if(visacard === false && paypalcard === false && mastercard === false && americancard === false){
    riselezionapagamento = $lingua.homepage.effettua
    setTimeout(()=>{
    riselezionapagamento = $lingua.homepage.pagamento
   }, 5000)
  }else if(carrello.length === 0){

  }else{
    carrello = []
    conferma = true
    compra = $lingua.homepage.acquista
  }
  if(email === '' || nome === '' || cognome === ''){
    oblemail = 'Email'
    oblnome = $lingua.homepage.nome
    oblcognome = $lingua.homepage.cognome
  } else if (email !== '' || nome !== '' || cognome !== ''){
    grazie = true
   setTimeout(()=>{
    grazie = false
   }, 15000)
   email = ''
   nome = ''
   cognome = ''
   conferma = false
   numcount = 0
   count = 0
   compra = $lingua.homepage.acquista
   visacard = false
   paypalcard = false
   mastercard = false
   americancard = false
   attiva = true
   attiva1 = true
   attiva2 = true
   attiva3 = true
   attiva4 = true
   attiva5 = true
   attiva6= true
   attiva7 = true
   attiva8 = true
   attiva9 = true
   attiva10 = true
  
  }


  if (conferma === true){
    disattiva = false
      disattiva1 = false
      disattiva2 = false
      disattiva3 = false
      disattiva4 = false
      disattiva5 = false
      disattiva6= false
      disattiva7 = false
      disattiva8 = false
      disattiva9 = false
      disattiva10 = false
  } else {
    disattiva = true
      disattiva1 = true
      disattiva2 = true
      disattiva3 = true
      disattiva4 = true
      disattiva5 = true
      disattiva6= true
      disattiva7 = true
      disattiva8 = true
      disattiva9 = true
      disattiva10 = true
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


const qt=(event)=>{
  const selezionaqt = parseInt(event.target.value)
   count = prezzo * selezionaqt
   
}


</script>

<div>
  <div class="bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-800 flex-auto relative top-5 w-auto h-24 items-center border-b-2 white flex rounded-3xl ">
  <h1  class="text-white text-4xl font-bold flex relative left-[68px] justify-center cursor-default">HomeCode </h1>
  </div>
  <div class="bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-800 h-10 flex-auto flex flex-row items-center justify-between relative top-12 rounded-xl md:w-[50%] md:left-[45%] md:-top-12 "> 
  <a href="/" class=" font-bold ml-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {home ? "border-b-2 rounded-sm border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('home')}">Home</a>
  <a href="/skills" class="  font-bold cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {skills ? "border-b-2 border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('skills')}">Skills</a>
  <a href="/progetti" class=" font-bold mr-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {progetti ? "border-b-2 border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('progetti')}">{$lingua.homepage.progetti}</a>
</div>
</div>

<select on:change="{(event)=>TraduciPagina(event.target.value)}" class="w-[100px] absolute top-[30%] sm:top-[20%] md:top-[13%] bg-gradient-to-tr p-2 from-white to-neutral-300 border-2 border-neutral-300 rounded-2xl invert">
<option value="ita">Italiano</option>
<option value="eng">English</option>
</select>

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

    


  

  
    <div class="bg-gradient-to-br from-gray-950 to-teal-950 md:bg-gradient-to-br md:from-black md:to-neutral-900 h-[10px] flex-auto flex flex-row items-center justify-between relative top-12 md:absolute  rounded-lg md:w-[50%] md:h-[50px] md:left-[45%] md:top-[55px] "> 
      <a href="/xflies" on:click="{()=>selezionaPagx('homex')}" class=" font-bold ml-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {homex ? "text-teal-500 border-b-2 border-teal-500": "text-white"}">Home</a>
      <a href="/xflies/biglietti" on:click="{()=>selezionaPagx('biglietti')}" class=" font-bold cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {biglietti ? "text-teal-500 border-b-2 border-teal-500": "text-white"}">{$lingua.homepage.biglietti}</a>
      <a href="/xflies/shop" on:click="{()=>selezionaPagx('xshop')}" class="  font-bold mr-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {xshop ? "text-teal-500 border-b-2 border-teal-500": "text-white"}">X-Shop</a>
      </div>
  

      <div class="flex justify-center w-[100%]">
    <div class="flex justify-center items-center absolute top-[340px] sm:top-[400px] text-[12px] font-light  md:rounded-xl   lg:rounded-xl lg:h-[1.5%] md:top-[260px] lg:top-[180px] md:w-[70%]  bg-neutral-950 p-3 rounded-xl w-[80%]">
      <p class="text-teal-500 font-bold" >{frasi}</p>
       </div>
      </div>

    <div class="flex w-[100%] justify-center">
    <div class="{grey ? "bg-gradient-to-tr from-black to-neutral-500 border-neutral-500  border-2 transizione" : ""} {blue ? "bg-gradient-to-tr from-black to-blue-950 border-blue-950 border-2 transizione " : ""} {red ? "bg-gradient-to-tr from-black to-red-950 border-red-950 border-2 transizione " : ""} transizione grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[8%] md:top-[330px] lg:top-[240px] w-[300px] sm:w-[400px] md:w-[680px] h-[10%] sm:h-[8%] md:h-[10%] lg:h-[23%] lg:w-[80%] rounded-[80px]">
      <img src={pianeta} alt="hand" class="w-[40%] md:w-[25%] lg:w-[220px] relative top-[10%] animazione" />
      <p class="text-teal-500 text-3xl sm:top-[50%] md:top-[45%] md:text-[40px] lg:text-5xl lg:top-[50%] relative ">{titolo}</p>
      <p class="text-white text-justify text-[13px] sm:text-[12px] md:text-[15px] lg:text-[16px] 2xl:text-[22px] absolute w-[90%] top-[35%] sm:top-[46%] md:top-[48%] lg:top-[50%]  sm:w-[80%]">{desc}</p>
      <div class="{grey ? "bg-neutral-500" : ""}{blue ? "bg-neutral-500" : ""}{red ? "bg-neutral-500" : ""} flex justify-center lg:w-[50%] flex-row w-[80%] h-[10%] items-center bg-neutral-500  transizione  rounded-3xl absolute top-[85%]">
        <button on:click="{()=>selezionaViaggioPrev()}" class="bg-neutral-900 text-teal-500 rounded-lg relative w-[40%] mr-5 text-xl cursor-pointer hover:border-2 hover:border-teal-50">&lt;</button>
        <button on:click="{()=>selezionaViaggioNext()}" class="bg-neutral-900 text-teal-500 rounded-lg relative w-[40%] ml-5 text-xl cursor-pointer hover:border-2 hover:border-teal-500 ">&gt;</button>
      </div>

      <button disabled={!attiva8 || !disattiva8} on:click="{()=>aggiungiCarrello('luna')}" class="{grey ? "visibile":"invisible"}  {attiva8 ? "shadow-2xl shadow-black absolute p-2 rounded-2xl top-[73%] flex w-[80%] lg:w-[50%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "shadow-2xl shadow-black text-white bg-teal-800 absolute p-2 rounded-2xl top-[73%] flex w-[80%] lg:w-[50%] justify-center cursor-not-allowed opacity-40"} {grey ? "bg-neutral-400 text-black font-semibold" : ""}{blue ? "bg-blue-900 font-semibold text-white" : ""}{red ? "bg-red-950 font-semibold text-white" : ""} ">{attiva8 ? `${$lingua.homepage.prenota} ${paga}`: `${$lingua.homepage.aggiunto}`}</button>
       
      <button disabled={!attiva9 || !disattiva9} on:click="{()=>aggiungiCarrello('marte')}" class="{red ? "visibile":"invisible"} {attiva9 ? "shadow-2xl shadow-black absolute p-2 rounded-2xl top-[73%] flex w-[80%] lg:w-[50%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "shadow-2xl shadow-black text-white bg-teal-800 absolute p-2 rounded-2xl top-[73%] flex w-[80%] lg:w-[50%] justify-center cursor-not-allowed opacity-40"} {grey ? "bg-neutral-400 text-black font-semibold" : ""}{blue ? "bg-blue-900 font-semibold text-white" : ""}{red ? "bg-red-950 font-semibold text-white" : ""} ">{attiva9 ? `${$lingua.homepage.prenota} ${paga}`: `${$lingua.homepage.aggiunto}`}</button>
    
      <button disabled={!attiva10 || !disattiva10} on:click="{()=>aggiungiCarrello('sistema')}" class="{blue ? "visibile":"invisible"} {attiva10 ? "shadow-2xl shadow-black absolute p-2 rounded-2xl top-[73%] flex w-[80%] lg:w-[50%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "shadow-2xl shadow-black text-white bg-teal-800 absolute p-2 rounded-2xl top-[73%] flex w-[80%] lg:w-[50%] justify-center cursor-not-allowed opacity-40"} {grey ? "bg-neutral-400 text-black font-semibold" : ""}{blue ? "bg-blue-900 font-semibold text-white" : ""}{red ? "bg-red-950 font-semibold text-white" : ""} ">{attiva10 ? `${$lingua.homepage.prenota} ${paga}`: `${$lingua.homepage.aggiunto}`}</button>
    
    </div>

    <div class="hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors cursor-default grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[20%] sm:top-[18%] lg:top-[33%] lg:left-[8%] w-[300px] sm:w-[400px] md:w-[680px] h-[8%] sm:h-[8%] lg:h-[15%] lg:w-[40%] bg-gradient-to-tr from-black to-neutral-900 rounded-[80px] border-2 border-neutral-900">
      <img src={terra} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] animazione md:top-[10%] lg:top-[10%]" />
      <p class="text-teal-500 text-5xl lg:text-5xl top-[25%] sm:top-[50%] md:top-[80%] md:text-5xl lg:top-[35%] relative ">{$lingua.biglietti.laterra}</p>
      <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[50%] md:top-[60%]  sm:top-[49%] lg:top-[50%] w-[90%] sm:w-[80%]">{$lingua.biglietti.terra}</p>
      <button disabled={!attiva || !disattiva} on:click="{()=>aggiungiCarrello('terra')}" class=" {attiva ? "absolute p-2 rounded-2xl top-[85%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[85%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva ? `${$lingua.homepage.prenota} ${$lingua.biglietti.laterra}`: `${$lingua.homepage.aggiunto}`}</button>
    </div>

    <div class="hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[30%] sm:top-[28%] w-[300px] sm:w-[400px] md:w-[680px] lg:top-[33%] lg:right-[8%] h-[8%] sm:h-[8%] lg:h-[15%] lg:w-[40%] bg-gradient-to-tr from-black to-neutral-900 rounded-[80px] border-2 border-neutral-900">
      <img src={giove} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] animazione md:top-[10%] lg:top-[10%]" />
      <p class="text-teal-500 text-5xl lg:text-5xl top-[25%] sm:top-[50%] md:top-[80%] md:text-5xl lg:top-[35%] relative ">{$lingua.biglietti.lagiove}</p>
      <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[50%] md:top-[60%]  sm:top-[49%] lg:top-[50%] w-[90%] sm:w-[80%]">{$lingua.biglietti.giove}</p>
      <button disabled={!attiva1 || !disattiva1} on:click="{()=>aggiungiCarrello('giove')}" class=" {attiva1 ? "absolute p-2 rounded-2xl top-[85%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[85%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva1 ? `${$lingua.homepage.prenota} ${$lingua.biglietti.lagiove}`: `${$lingua.homepage.aggiunto}`}</button>
    </div>
    
    <div class="hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[40%] sm:top-[38%] lg:top-[50%] lg:left-[8%] w-[300px] sm:w-[400px] md:w-[680px] h-[8%] sm:h-[8%] lg:h-[15%] lg:w-[40%] bg-gradient-to-tr from-black to-neutral-900 rounded-[80px] border-2 border-neutral-900">
      <img src={mercurio} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] animazione lg:top-[10%]" />
      <p class="text-teal-500 text-5xl  lg:text-5xl top-[25%] sm:top-[50%] md:top-[80%] md:text-5xl lg:top-[35%] relative ">{$lingua.biglietti.lamercurio}</p>
      <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[50%] md:top-[60%] sm:top-[49%] lg:top-[50%] w-[90%] sm:w-[80%]">{$lingua.biglietti.mercurio}</p>
      <button disabled={!attiva2 || !disattiva2} on:click="{()=>aggiungiCarrello('mercurio')}" class=" {attiva2 ? "absolute p-2 rounded-2xl top-[85%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[85%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva2 ? `${$lingua.homepage.prenota} ${$lingua.biglietti.lamercurio}`: `${$lingua.homepage.aggiunto}`}</button>
    </div>

    <div class="hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[50%] sm:top-[48%] w-[300px] sm:w-[400px] md:w-[680px] lg:top-[50%] lg:right-[8%] h-[8%] sm:h-[8%] lg:h-[15%] lg:w-[40%] bg-gradient-to-tr from-black to-neutral-900 rounded-[80px] border-2 border-neutral-900">
      <img src={nettuno} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] animazione lg:top-[10%]" />
      <p class="text-teal-500 text-5xl  lg:text-5xl top-[25%] sm:top-[50%] md:top-[80%] md:text-5xl lg:top-[35%] relative ">{$lingua.biglietti.lanettuno}</p>
      <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[50%] md:top-[60%]  sm:top-[49%] lg:top-[50%] w-[90%] sm:w-[80%]">{$lingua.biglietti.nettuno}</p>
      <button disabled={!attiva3 || !disattiva3} on:click="{()=>aggiungiCarrello('nettuno')}" class=" {attiva3 ? "absolute p-2 rounded-2xl top-[85%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[85%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva3 ? `${$lingua.homepage.prenota} ${$lingua.biglietti.lanettuno}`: `${$lingua.homepage.aggiunto}`}</button>
    </div>

    <div class="hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[60%] sm:top-[58%] w-[300px] sm:w-[400px] md:w-[680px] lg:top-[67%] lg:left-[8%] h-[8%] sm:h-[8%] lg:h-[15%] lg:w-[40%] bg-gradient-to-tr from-black to-neutral-900 rounded-[80px] border-2 border-neutral-900">
      <img src={plutone} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] animazione lg:top-[10%]" />
      <p class="text-teal-500 text-5xl  lg:text-5xl top-[25%] sm:top-[50%] md:top-[80%] md:text-5xl lg:top-[35%] relative ">{$lingua.biglietti.laplutone}</p>
      <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[50%] md:top-[60%]  sm:top-[49%] lg:top-[50%] w-[90%] sm:w-[80%]">{$lingua.biglietti.plutone}</p>
      <button disabled={!attiva4 || !disattiva4} on:click="{()=>aggiungiCarrello('plutone')}" class=" {attiva4 ? "absolute p-2 rounded-2xl top-[85%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[85%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva4 ? `${$lingua.homepage.prenota} ${$lingua.biglietti.laplutone}`: `${$lingua.homepage.aggiunto}`}</button>
    </div>

    <div class="hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[70%] sm:top-[68%] w-[300px] sm:w-[400px] md:w-[680px] lg:top-[67%] lg:right-[8%] h-[8%] sm:h-[8%] lg:h-[15%] lg:w-[40%] bg-gradient-to-tr from-black to-neutral-900 rounded-[80px] border-2 border-neutral-900">
      <img src={saturno} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] lg:top-[10%]" />
      <p class="text-teal-500 text-5xl  lg:text-5xl top-[25%] sm:top-[50%] md:top-[80%] md:text-5xl lg:top-[35%] relative ">{$lingua.biglietti.lasaturno}</p>
      <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[50%] md:top-[60%] sm:top-[49%] lg:top-[50%] w-[90%] sm:w-[80%]">{$lingua.biglietti.saturno}</p>
      <button disabled={!attiva5 || !disattiva5} on:click="{()=>aggiungiCarrello('saturno')}" class=" {attiva5 ? "absolute p-2 rounded-2xl top-[85%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[85%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva5 ? `${$lingua.homepage.prenota} ${$lingua.biglietti.lasaturno}`: `${$lingua.homepage.aggiunto}`}</button>
    </div>

    <div class="hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[80%] sm:top-[78%] w-[300px] sm:w-[400px] md:w-[680px] lg:top-[84%] lg:left-[8%] h-[8%] sm:h-[8%] lg:h-[15%] lg:w-[40%] bg-gradient-to-tr from-black to-neutral-900 rounded-[80px] border-2 border-neutral-900">
      <img src={urano} alt="hand" class="w-[35%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] lg:top-[10%]" />
      <p class="text-teal-500 text-5xl  lg:text-5xl top-[25%] sm:top-[50%] md:top-[80%] md:text-5xl lg:top-[35%] relative ">{$lingua.biglietti.laurano}</p>
      <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[50%] md:top-[60%]  sm:top-[49%] lg:top-[50%] w-[90%] sm:w-[80%]">{$lingua.biglietti.urano}</p>
      <button disabled={!attiva6 || !disattiva6} on:click="{()=>aggiungiCarrello('urano')}" class=" {attiva6 ? "absolute p-2 rounded-2xl top-[85%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[85%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva6 ? `${$lingua.homepage.prenota} ${$lingua.biglietti.laurano}`: `${$lingua.homepage.aggiunto}`}</button>
    </div>

    <div class="hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center absolute top-[90%] sm:top-[88%] w-[300px] sm:w-[400px] md:w-[680px] lg:top-[84%] lg:right-[8%] h-[8%] sm:h-[8%] lg:h-[15%] lg:w-[40%] bg-gradient-to-tr from-black to-neutral-900 rounded-[80px] border-2 border-neutral-900">
      <img src={venere} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] lg:top-[10%] animazione" />
      <p class="text-teal-500 text-5xl  lg:text-5xl top-[25%] sm:top-[50%] md:top-[80%] md:text-5xl lg:top-[35%] relative ">{$lingua.biglietti.lavenere}</p>
      <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[50%] md:top-[60%]  sm:top-[49%] lg:top-[50%] w-[90%] sm:w-[80%]">{$lingua.biglietti.venere}</p>
      <button disabled={!attiva7 || !disattiva7} on:click="{()=>aggiungiCarrello('venere')}" class=" {attiva7 ? "absolute p-2 rounded-2xl top-[85%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[85%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva7 ? `${$lingua.homepage.prenota} ${$lingua.biglietti.lavenere}`: `${$lingua.homepage.aggiunto}`}</button>
    </div>

    </div>



    <div class="flex justify-center w-[100%]">
    <div class=" {opencart ? "visible": "invisible"}  bg-gradient-to-tr from-black to-gray-600 border-2 border-gray-600 w-[350px] sm:w-[550px] h-[660px] sm:h-[760px] md:h-[760px] lg:h-[760px] md:right-[7%] fixed bottom-[0%] flex justify-center ombracar rounded-xl overflow-y-auto ">

        <div class="flex flex-row justify-center items-center absolute top-0 sm:top-0 w-[100%] h-[8%] rounded-b-xl">
        <p class="text-white font-bold text-xl  sm:text-3xl tracking-[3px] ">{$lingua.homepage.carrello}{numcount}</p>
        </div>

        <div class="grid grid-cols-1 grid-rows-11 w-[100%] h-[350px] sm:h-[450px] gap-y-[20px] bg-gradient-to-tr from-black to-neutral-950 border-b-2 border-gray-600 absolute top-[50px] sm:top-[60px] rounded-2xl overflow-y-auto overflow-x-hidden justify-items-center">


          {#each carrello as item (item.titoloitem)}
          <div class="flex items-center bg-gradient-to-tr from-black to-neutral-700 border-2 border-neutral-700 w-[90%] h-[90px] rounded-2xl relative top-[10%] justify-center text-center cursor-default">
          <img src={item.imgitem} alt="terra" class="w-[50px] md:w-[70px] animazione absolute left-[5%] " />
          <p class="text-teal-500 text-xl md:text-3xl font-semibold absolute top-[20%] md:top-[10%] left-[26%] md:left-[32%] tracking-wide">{item.titoloitem}</p>
          <p class="text-teal-500 text-lg md:text-2xl font-semibold absolute top-[50%] left-[26%] md:left-[32%]">€{item.prezzoitem}</p>
          <select class="absolute right-[20%] w-[50px] rounded-sm outline-none" on:change="{()=>qt(event)}">
            <option value=1 >1</option>
            <option value=2 >2</option>
            <option value=3 >3</option>
            <option value=4 >4</option>
            <option value=5 >5</option>
          </select>
          <img src={trash} alt='trash' on:click="{()=>elimina(item)}" class="invert bg-cyan-500 rounded-full absolute right-[5%] border-2 border-cyan-800 md:p-2 p-1 w-[30px] md:w-[40px] cursor-pointer" />
          </div>
        {/each}

        <div class="{conferma ? "visible": "invisible"} {opencart ? "visible": "invisible"} flex items-center bg-gradient-to-tr from-black to-neutral-700 border-2 border-neutral-700 w-[90%] h-[290px] sm:h-[350px] rounded-2xl absolute top-[10%] justify-center text-center cursor-default">
          <p class="text-teal-500 text-xl md:text-3xl font-semibold absolute top-[2%] md:top-[2%] tracking-wide">{$lingua.homepage.dati}</p>
          <p class="text-white font-bold mr-2 absolute top-[15%]">{oblemail}</p>
          <input bind:value={email} type="email" on:input="{Email}" class="w-[60%] sm:w-[50%] rounded-md outline-none p-1 text-base absolute top-[25%]" maxlength="50" placeholder="Email..." />
          <p class="text-white font-bold mr-2 absolute top-[45%]">{oblnome}</p>
          <input bind:value={nome} type="text" on:input="{Nome}" class="w-[60%] sm:w-[50%] rounded-md outline-none p-1 text-base absolute top-[55%]" maxlength="20" placeholder="Nome..." />
          <p class="text-white font-bold mr-2 absolute top-[75%]">{oblcognome}</p>
          <input bind:value={cognome} type="text" on:input="{Cognome}" class="w-[60%] sm:w-[50%] rounded-md outline-none p-1 text-base absolute top-[85%]" maxlength="20" placeholder="Cognome..." />
          </div>

        <div class="{grazie ? "visible": "invisible"} {opencart ? "visible": "invisible"} flex items-center bg-gradient-to-tr from-black to-neutral-700 border-2 border-neutral-700 w-[90%] h-[290px] sm:h-[350px] rounded-2xl absolute top-[10%] justify-center text-justify cursor-default">
          <p class="text-teal-500 text-xl md:text-3xl font-semibold absolute top-[10%] md:top-[10%] tracking-wide">{completato}</p>
          <p class="text-teal-500 text-sm md:text-xl font-semibold absolute top-[30%] w-[80%]">{dati}</p>
          </div>

      </div>

      <div on:click="{()=>confermaAcq()}" class="{opencart ? "visible transizione2" : "invisible"} flex justify-center text-center w-[180px] h-[50px] sm:w-[260px] sm:h-[70px] absolute items-center bg-black border-green-500 border-2 shadow-lg shadow-green-950 p-5 rounded-full bottom-[40px] left-[10%] cursor-pointer hover:bg-green-950 ">
        <p class="invert w-[100%] sm:text-base md:text-xl text-sm font-bold">{compra} €{count} </p>
      </div>

      <button on:click="{apricarrello}"  class="{opencart  ? "right-[30px] sm:right-[10%] md:right-[10%] 2xl:right-[10%] absolute": "invisible"}  w-[50px] sm:w-[60px] bg-black border-red-500 border-2 shadow-lg shadow-red-950 p-1 sm:p-1 rounded-full  bottom-[6%] sm:bottom-[6%]  cursor-pointer hover:bg-red-950">
        <img src={cross} alt="cart" class="invert w-[100%]"/>
      </button>

      <div class="flex justify-center w-[100%] h-[100px] bottom-[130px] absolute">
        <p class="text-white font-bold text-sm sm:text-lg">{riselezionapagamento}</p>
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
      
      <img src={cart} alt="cart" class="invert w-[100%]"/>
      <div class="flex justify-center w-[100%]">
        <p class="text-black font-bold p-1 rounded-full bg-teal-500 absolute top-[-15px] left-[25px] sm:left-[30px]">{numcount}</p>
        </div>
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


