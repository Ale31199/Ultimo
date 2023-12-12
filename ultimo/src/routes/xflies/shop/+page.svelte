<script>
  import atom from '/src/routes/xflies/ximgshop/atom.png';
  import bionic from '/src/routes/xflies/ximgshop/bionic-hand.png';
  import bitcoin from '/src/routes/xflies/ximgshop/bitcoin.png';
  import blaster from '/src/routes/xflies/ximgshop/blaster.png';
  import chemistry from '/src/routes/xflies/ximgshop/chemistry.png';
  import computer from '/src/routes/xflies/ximgshop/computer.png';
  import cpu from '/src/routes/xflies/ximgshop/cpu.png';
  import dna from '/src/routes/xflies/ximgshop/dna.png';
  import energy from '/src/routes/xflies/ximgshop/energy.png';
  import flycar from '/src/routes/xflies/ximgshop/flying-car.png';
  import hologram from '/src/routes/xflies/ximgshop/hologram.png';
  import jetpack from '/src/routes/xflies/ximgshop/jetpack.png';
  import ram from '/src/routes/xflies/ximgshop/memory.png';
  import robot from '/src/routes/xflies/ximgshop/robot-assistant.png';
  import rocket from '/src/routes/xflies/ximgshop/rocket.png';
  import spaceship from '/src/routes/xflies/ximgshop/spaceship.png';
  import teleport from '/src/routes/xflies/ximgshop/teleport.png';
  import telescope from '/src/routes/xflies/ximgshop/telescope.png';
  import titanium from '/src/routes/xflies/ximgshop/titanium.png';
  import transformer from '/src/routes/xflies/ximgshop/transformer.png';
  import american from '/src/routes/xflies/ximg/american-express.png';
  import paypal from '/src/routes/xflies/ximg/paypal.png';
  import card from '/src/routes/xflies/ximg/card.png';
  import visa from '/src/routes/xflies/ximg/visa.png';
  import alien from '/src/routes/xflies/ximg/alien.png';
  import cart from  '/src/routes/xflies/ximg/shopping-cart.png';
  import trash from '/src/routes/xflies/ximg/trash.png';
  import cross from '/src/routes/xflies/ximg/cross.png';
  import src from '/src/routes/xflies/ximg/search.png';
  import info from '/src/routes/xflies/ximg/information.png';
  import reload from '/src/routes/xflies/ximg/reload.png';
  import {onMount} from 'svelte';
  import {abilitato} from '../store.js';
  import hc from '/src/routes/xflies/ximg/HomeCode.png'
  
  // @ts-ignore
   import ita from '/src/routes/xflies/xtesto.json';
    //import { redirect } from '@sveltejs/kit';
   //@ts-ignore
    import eng from '/src/routes/xflies/xtestoeng.json';


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
 
  
  
  let pianeta = atom;
  $: titolo = $lingua.shop.laatomo
  $: desc = $lingua.shop.atomo
  let grey = true
  let blue = false
  let red = false
  $: paga = $lingua.shop.laatomo
  
  
  
  const selezionaViaggioNext=()=>{
    if(pianeta === atom){
    pianeta = bionic
    titolo = $lingua.shop.labraccio;
    desc = $lingua.shop.braccio
    red = true
    blue = false
    grey = false
    paga = $lingua.shop.labraccio
    } else if (pianeta === bionic){
  pianeta = bitcoin
  titolo = $lingua.shop.labitcoin
  desc = $lingua.shop.bitcoin
    blue = true
    red= false
     grey = false
     paga = $lingua.shop.labitcoin
    } else if(pianeta === bitcoin){
      pianeta = atom
      titolo = $lingua.shop.laatomo
      desc = $lingua.shop.atomo
    grey = true
    red = false
    blue = false
    paga = $lingua.shop.laatomo
    }
  }
  
  const selezionaViaggioPrev=()=>{
    if(pianeta === bitcoin){
    pianeta = bionic
    titolo = $lingua.shop.labraccio;
    desc = $lingua.shop.braccio
    red = true
    blue = false
    grey = false
    paga = $lingua.shop.labraccio
    } else if (pianeta === atom){
  pianeta = bitcoin
  titolo = $lingua.shop.labitcoin
  desc = $lingua.shop.bitcoin
    blue = true
    red = false
    grey = false
    paga = $lingua.shop.labitcoin
    } else if(pianeta === bionic){
      pianeta = atom
      titolo = $lingua.shop.laatomo
      desc = $lingua.shop.atomo
    grey = true
    red = false
    blue = false
    paga = $lingua.shop.laatomo
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
        $lingua.homepage.aa,
        $lingua.homepage.bb,
        $lingua.homepage.cc,
        $lingua.homepage.dd,
        $lingua.homepage.ee,
        $lingua.homepage.ff,
        $lingua.homepage.gg,
        $lingua.homepage.hh,
        $lingua.homepage.ii,
        $lingua.homepage.jj,
        $lingua.homepage.kk,
        $lingua.homepage.ll,
        $lingua.homepage.mm,
        $lingua.homepage.nn];
  
          $: frasi = $lingua.homepage.nn
  
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
   let biglietti = false
   let xshop = true
  
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
    imgitem: atom,
  titoloitem: $lingua.shop.laatomo,  //0
  prezzoitem: $lingua.shop.patomo
   },
   {
  imgitem: bionic,
  titoloitem: $lingua.shop.labraccio, //1
  prezzoitem: $lingua.shop.pbraccio
   },
   {
    imgitem: bitcoin,
  titoloitem: $lingua.shop.labitcoin, //2
  prezzoitem: $lingua.shop.pbitcoin
   },
   {
  imgitem: blaster,
  titoloitem: $lingua.shop.lablaster, //3
  prezzoitem: $lingua.shop.pblaster
   },
   {
  imgitem: chemistry,
  titoloitem: $lingua.shop.lakit, //4
  prezzoitem: $lingua.shop.pkit
   },
   {
  imgitem: computer,
  titoloitem: $lingua.shop.lacomputer, //5
  prezzoitem: $lingua.shop.pcomputer
   },
   {
  imgitem: cpu,
  titoloitem: $lingua.shop.lacpu,  //6
  prezzoitem: $lingua.shop.pcpu
   },
   {
  imgitem: dna,
  titoloitem: $lingua.shop.ladna,  //7
  prezzoitem: $lingua.shop.pdna
   },
   {
  imgitem: energy,
  titoloitem: $lingua.shop.laenergia, //8
  prezzoitem: $lingua.shop.penergia
   },
   {
  imgitem: flycar,
  titoloitem: $lingua.shop.laauto, //9
  prezzoitem: $lingua.shop.pauto
   },
   {
  imgitem: hologram,
  titoloitem: $lingua.shop.laologramma, //10
  prezzoitem: $lingua.shop.pologramma
   },
   {
  imgitem: jetpack,
  titoloitem: $lingua.shop.lajetpack, //11
  prezzoitem: $lingua.shop.pjetpack
   },
   {
  imgitem: ram,
  titoloitem: $lingua.shop.laram, //12
  prezzoitem: $lingua.shop.pram
   },

   {
  imgitem: robot,
  titoloitem: $lingua.shop.larobot, //13
  prezzoitem: $lingua.shop.probot
   },
   {
  imgitem: rocket,
  titoloitem: $lingua.shop.larazzo, //14
  prezzoitem: $lingua.shop.prazzo
   },
   {
  imgitem: spaceship,
  titoloitem: $lingua.shop.lanave, //15
  prezzoitem: $lingua.shop.pnave
   },
   {
  imgitem: teleport,
  titoloitem: $lingua.shop.lateletrasporto, //16
  prezzoitem: $lingua.shop.pteletrasporto
   },
   {
  imgitem: telescope,
  titoloitem: $lingua.shop.latelescopio, //17
  prezzoitem: $lingua.shop.ptelescopio
   },
   {
  imgitem: titanium,
  titoloitem: $lingua.shop.latitanio, //18
  prezzoitem: $lingua.shop.ptitanio
   },
   {
  imgitem: transformer,
  titoloitem: $lingua.shop.labatteria, //19
  prezzoitem: $lingua.shop.pbatteria
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
      case 'atomo': 
       const artAtomo = articoli[0]
       carrello = [...carrello, artAtomo]
       prezzo = $lingua.shop.patomo
       calcolo = prezzo += count
       count = calcolo
       numart = numcount + 1
       numcount = numart
       attiva = $abilitato.atti = false
      break;
      case 'braccio': 
      const artBraccio = articoli[1]
       carrello = [...carrello, artBraccio]
       prezzo = $lingua.shop.pbraccio
       calcolo = prezzo += count
       count = calcolo
       numart = numcount + 1
       numcount = numart
       attiva1 = $abilitato.atti = false
      break;
      case 'bitcoin': 
      const artbitcoin = articoli[2]
       carrello = [...carrello, artbitcoin]
       prezzo = $lingua.shop.pbitcoin
       calcolo = prezzo += count
       count = calcolo
       numart = numcount + 1
       numcount = numart
       attiva2= $abilitato.atti = false
      break;
      case 'blaster': 
      const artblaster = articoli[3]
       carrello = [...carrello, artblaster]
       prezzo = $lingua.shop.pblaster
       calcolo = prezzo += count
       count = calcolo
       numart = numcount + 1
       numcount = numart
       attiva3 = $abilitato.atti = false
      break;
      case 'kit': 
      const artkit = articoli[4]
       carrello = [...carrello, artkit]
       prezzo = $lingua.shop.pkit
       calcolo = prezzo += count
       count = calcolo
       numart = numcount + 1
       numcount = numart
       attiva4 = $abilitato.atti = false
      break;
      case 'computer': 
      const artcomputer = articoli[5]
       carrello = [...carrello, artcomputer]
       prezzo = $lingua.shop.pcomputer
       calcolo = prezzo += count
       count = calcolo
       numart = numcount + 1
       numcount = numart
       attiva5 = $abilitato.atti = false
      break;
       case 'cpu': 
      const artcpu = articoli[6]
       carrello = [...carrello, artcpu]
       prezzo = $lingua.shop.pcpu
       calcolo = prezzo += count
       count = calcolo
       numart = numcount + 1
       numcount = numart
       attiva6 = $abilitato.atti = false
      break;
       case 'dna': 
      const artdna = articoli[7]
       carrello = [...carrello, artdna]
       prezzo = $lingua.shop.pdna
       calcolo = prezzo += count
       count = calcolo
       numart = numcount + 1
       numcount = numart
       attiva7= $abilitato.atti = false
       break;
      case 'energia': 
      const artenergia = articoli[8]
       carrello = [...carrello, artenergia]
       prezzo = $lingua.shop.penergia
       calcolo = prezzo += count
       count = calcolo
       numart = numcount + 1
       numcount = numart
       attiva8 = $abilitato.atti = false
      break;
      case 'auto': 
      const artauto = articoli[9]
       carrello = [...carrello, artauto]
       prezzo = $lingua.shop.pauto
       calcolo = prezzo += count
       count = calcolo
       numart = numcount + 1
       numcount = numart
       attiva9= $abilitato.atti = false
      break;
      case 'ologramma': 
      const artologramma = articoli[10]
       carrello = [...carrello, artologramma]
       prezzo = $lingua.shop.pologramma
       calcolo = prezzo += count
       count = calcolo
       numart = numcount + 1
       numcount = numart
       attiva10 = $abilitato.atti = false
      break;
      case 'jetpack': 
      const artjetpack = articoli[11]
       carrello = [...carrello, artjetpack]
       prezzo = $lingua.shop.pjetpack
       calcolo = prezzo += count
       count = calcolo
       numart = numcount + 1
       numcount = numart
       attiva11 = $abilitato.atti = false
      break;
      case 'ram': 
      const artram = articoli[12]
       carrello = [...carrello, artram]
       prezzo = $lingua.shop.pram
       calcolo = prezzo += count
       count = calcolo
       numart = numcount + 1
       numcount = numart
       attiva12 = $abilitato.atti = false
      break;
      case 'robot': 
      const artrobot = articoli[13]
       carrello = [...carrello, artrobot]
       prezzo = $lingua.shop.probot
       calcolo = prezzo += count
       count = calcolo
       numart = numcount + 1
       numcount = numart
       attiva13 = $abilitato.atti = false
      break;
      case 'razzo': 
      const artrazzo = articoli[14]
       carrello = [...carrello, artrazzo]
       prezzo = $lingua.shop.prazzo
       calcolo = prezzo += count
       count = calcolo
       numart = numcount + 1
       numcount = numart
       attiva14 = $abilitato.atti = false
      break;
      case 'nave': 
      const artnave = articoli[15]
       carrello = [...carrello, artnave]
       prezzo = $lingua.shop.pnave
       calcolo = prezzo += count
       count = calcolo
       numart = numcount + 1
       numcount = numart
       attiva15 = $abilitato.atti = false
      break;
      case 'teletrasporto': 
      const artteletrasporto = articoli[16]
       carrello = [...carrello, artteletrasporto]
       prezzo = $lingua.shop.pteletrasporto
       calcolo = prezzo += count
       count = calcolo
       numart = numcount + 1
       numcount = numart
       attiva16 = $abilitato.atti = false
      break;
      case 'telescopio': 
      const arttelescopio = articoli[17]
       carrello = [...carrello, arttelescopio]
       prezzo = $lingua.shop.ptelescopio
       calcolo = prezzo += count
       count = calcolo
       numart = numcount + 1
       numcount = numart
       attiva17 = $abilitato.atti = false
      break;
      case 'titanio': 
      const arttitanio = articoli[18]
       carrello = [...carrello, arttitanio]
       prezzo = $lingua.shop.ptitanio
       calcolo = prezzo += count
       count = calcolo
       numart = numcount + 1
       numcount = numart
       attiva18 = $abilitato.atti = false
      break;
      case 'batteria': 
      const artbatteria = articoli[19]
       carrello = [...carrello, artbatteria]
       prezzo = $lingua.shop.pbatteria
       calcolo = prezzo += count
       count = calcolo
       numart = numcount + 1
       numcount = numart
       attiva19 = $abilitato.atti = false
      break;
      default:
        break;
    }
    salvaCarrello()
   }
   
   
  
   const elimina=(articolo)=>{
  carrello = carrello.filter(item=> item !== articolo)
       numart = numcount - 1
       numcount = numart
       const ilprezzo = articolo.prezzoitem
       count = count - ilprezzo
       salvaCarrello()
  
       if (articolo.titoloitem === $lingua.shop.laatomo) {
          attiva = $abilitato.atti = true
      } if (articolo.titoloitem === $lingua.shop.labraccio) {
          attiva1 = $abilitato.atti = true
      }  if (articolo.titoloitem === $lingua.shop.labitcoin) {
          attiva2 = $abilitato.atti = true
      } if (articolo.titoloitem === $lingua.shop.lablaster) {
          attiva3 = $abilitato.atti = true
      }  if (articolo.titoloitem === $lingua.shop.lakit) {
          attiva4 = $abilitato.atti = true
      } if (articolo.titoloitem === $lingua.shop.lacomputer) {
          attiva5 = $abilitato.atti = true
      }  if (articolo.titoloitem === $lingua.shop.lacpu) {
          attiva6 = $abilitato.atti = true
      } if (articolo.titoloitem === $lingua.shop.ladna) {
          attiva7 = $abilitato.atti = true
      }  if (articolo.titoloitem === $lingua.shop.laenergia) {
          attiva8 = $abilitato.atti = true
      } if (articolo.titoloitem === $lingua.shop.laauto) {
          attiva9 = $abilitato.atti = true
      } if (articolo.titoloitem === $lingua.shop.laologramma) {
          attiva10 = $abilitato.atti = true
      } if (articolo.titoloitem === $lingua.shop.lajetpack) {
          attiva11 = $abilitato.atti = true
      } if (articolo.titoloitem === $lingua.shop.laram) {
          attiva12 = $abilitato.atti = true
      } if (articolo.titoloitem === $lingua.shop.larobot) {
          attiva13 = $abilitato.atti = true
      } if (articolo.titoloitem === $lingua.shop.larazzo) {
          attiva14 = $abilitato.atti = true
      } if (articolo.titoloitem === $lingua.shop.lanave) {
          attiva15 = $abilitato.atti = true
      } if (articolo.titoloitem === $lingua.shop.lateletrasporto) {
          attiva16 = $abilitato.atti = true
      } if (articolo.titoloitem === $lingua.shop.latelescopio) {
          attiva17 = $abilitato.atti = true
      } if (articolo.titoloitem === $lingua.shop.latitanio) {
          attiva18 = $abilitato.atti = true
      } if (articolo.titoloitem === $lingua.shop.labatteria) {
          attiva19 = $abilitato.atti = true
      }
   }
   
   $: attiva = $abilitato.atti = true
   $: attiva1 = $abilitato.atti = true
   $: attiva2 = $abilitato.atti = true
   $: attiva3 = $abilitato.atti = true
   $: attiva4 = $abilitato.atti = true
   $: attiva5 = $abilitato.atti = true
   $: attiva6= $abilitato.atti = true
   $: attiva7 = $abilitato.atti = true
   $: attiva8 = $abilitato.atti = true
   $: attiva9 = $abilitato.atti = true
   $: attiva10 = $abilitato.atti = true
   $: attiva11 = $abilitato.atti = true
   $: attiva12 = $abilitato.atti = true
   $: attiva13 = $abilitato.atti = true
   $: attiva14 = $abilitato.atti = true
   $: attiva15 = $abilitato.atti = true
   $: attiva16= $abilitato.atti = true
   $: attiva17 = $abilitato.atti = true
   $: attiva18 = $abilitato.atti = true
   $: attiva19 = $abilitato.atti = true
  
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
   let disattiva11 = true
   let disattiva12 = true
   let disattiva13 = true
   let disattiva14 = true
   let disattiva15 = true
   let disattiva16= true
   let disattiva17 = true
   let disattiva18 = true
   let disattiva19 = true
  
  
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
    salvaCarrello()
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
     attiva = $abilitato.atti = true
     attiva1 = $abilitato.atti = true
     attiva2 = $abilitato.atti = true
     attiva3 = $abilitato.atti = true
     attiva4 = $abilitato.atti = true
     attiva5 = $abilitato.atti = true
     attiva6= $abilitato.atti = true
     attiva7 = $abilitato.atti = true
     attiva8 = $abilitato.atti = true
     attiva9 = $abilitato.atti = true
     attiva10 = $abilitato.atti = true
     attiva11 = $abilitato.atti = true
      attiva12 = $abilitato.atti = true
      attiva13 = $abilitato.atti = true
      attiva14 = $abilitato.atti = true
      attiva15 = $abilitato.atti = true
      attiva16= $abilitato.atti = true
      attiva17 = $abilitato.atti = true
      attiva18 = $abilitato.atti = true
      attiva19 = $abilitato.atti = true
      localStorage.setItem('battiva', 'true')
      localStorage.setItem('battiva1', 'true')
      localStorage.setItem('battiva2', 'true')
      localStorage.setItem('battiva3', 'true')
      localStorage.setItem('battiva4', 'true')
      localStorage.setItem('battiva5', 'true')
      localStorage.setItem('battiva6', 'true')
      localStorage.setItem('battiva7', 'true')
      localStorage.setItem('battiva8', 'true')
      localStorage.setItem('battiva9', 'true')
      localStorage.setItem('battiva10', 'true')
     salvaCarrello()
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
        disattiva11 = false
        disattiva12 = false
        disattiva13 = false
        disattiva14 = false
        disattiva15 = false
        disattiva16= false
        disattiva17 = false
        disattiva18 = false
        disattiva19 = false
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
        disattiva11 = true
        disattiva12 = true
        disattiva13 = true
        disattiva14 = true
        disattiva15 = true
        disattiva16= true
        disattiva17 = true
        disattiva18 = true
        disattiva19 = true
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
  

  const tags = {
  blaste: ['Blaster', 'blaster'],
  ki: ['Kit', 'kit', 'Chemical', 'chemical'],
  compute: ['Computer', 'computer', 'Pc', 'pc'],
  cp: ['Cpu', 'cpu'],
  dn: ['Dna', 'dna'],
  energi: ['Energia', 'energia', 'Energy', 'energy'],
  aut: ['Auto', 'auto', 'flying', 'Flying'],
  ologram: ['Ologramma', 'ologramma', 'Hologram', 'hologram'],
  jetpac: ['Jetpack', 'jetpack'],
  ra: ['Ram', 'ram'],
  robo: ['Robot', 'robot'],
  razz: ['Razzo', 'razzo', 'rocket', 'Rocket'],
  nav: ['Nave', 'nave', 'Spaceship', 'spaceship'],
  teletrasport: ['Teletrasporto', 'teletrasporto', 'Teleport', 'teleport'],
  telescopi: ['Telescopio', 'telescopio', 'Telescope', 'telescope'],
  titani: ['Titanio', 'titanio', 'titanium', 'Titanium'],
  batteri: ['Batteria', 'batteria', 'Battery', 'battery'],
    };

 let ricerca = ''
 let showblaster = true
 let showkit = true
 let showcomputer = true
 let showcpu = true
 let showdna = true
 let showenergia = true
 let showauto = true
 let showologramma = true
 let showjetpack = true
 let showram = true
 let showrobot = true
 let showrazzo =true
 let shownave = true
 let showteleta = true
 let showtele = true
 let showtitanio = true
 let showbatteria = true
 let back = false
 let backgr = true
 const cerca=(event)=>{
  if(event.key === 'Enter'){
ricerca = event.target.value
tag()
}
}


const indietro=()=>{
    ricerca = ''
    backgr = true
    back = true
    showblaster = true
showkit = true
showcomputer = true
showcpu = true
showdna = true
showenergia = true
showauto = true
showologramma = true
showjetpack = true
showram = true
showrobot = true
showrazzo = true
shownave = true
showteleta = true
showtele = true
showtitanio = true
showbatteria = true
}

 const tag = () => {
  if(tags.blaste.includes(ricerca)){
    backgr = false
    ricerca = ''
showblaster = true
showkit = false
showcomputer = false
showcpu = false
showdna = false
showenergia = false
showauto = false
showologramma = false
showjetpack = false
showram = false
showrobot = false
showrazzo = false
shownave = false
showteleta = false
showtele = false
showtitanio = false
showbatteria = false
}
if(tags.ki.includes(ricerca)){
    backgr = false
    ricerca = ''
showblaster = false
showkit = true
showcomputer = false
showcpu = false
showdna = false
showenergia = false
showauto = false
showologramma = false
showjetpack = false
showram = false
showrobot = false
showrazzo = false
shownave = false
showteleta = false
showtele = false
showtitanio = false
showbatteria = false
}
if(tags.compute.includes(ricerca)){
    backgr = false
    ricerca = ''
showblaster = false
showkit = false
showcomputer = true
showcpu = false
showdna = false
showenergia = false
showauto = false
showologramma = false
showjetpack = false
showram = false
showrobot = false
showrazzo = false
shownave = false
showteleta = false
showtele = false
showtitanio = false
showbatteria = false
}
if(tags.cp.includes(ricerca)){
    backgr = false
    ricerca = ''
showblaster = false
showkit = false
showcomputer = false
showcpu = true
showdna = false
showenergia = false
showauto = false
showologramma = false
showjetpack = false
showram = false
showrobot = false
showrazzo = false
shownave = false
showteleta = false
showtele = false
showtitanio = false
showbatteria = false
}
if(tags.dn.includes(ricerca)){
    backgr = false
    ricerca = ''
showblaster = false
showkit = false
showcomputer = false
showcpu = false
showdna = true
showenergia = false
showauto = false
showologramma = false
showjetpack = false
showram = false
showrobot = false
showrazzo = false
shownave = false
showteleta = false
showtele = false
showtitanio = false
showbatteria = false
}
if(tags.energi.includes(ricerca)){
    backgr = false
    ricerca = ''
showblaster = false
showkit = false
showcomputer = false
showcpu = false
showdna = false
showenergia = true
showauto = false
showologramma = false
showjetpack = false
showram = false
showrobot = false
showrazzo = false
shownave = false
showteleta = false
showtele = false
showtitanio = false
showbatteria = false
}
if(tags.aut.includes(ricerca)){
    backgr = false
    ricerca = ''
showblaster = false
showkit = false
showcomputer = false
showcpu = false
showdna = false
showenergia = false
showauto = true
showologramma = false
showjetpack = false
showram = false
showrobot = false
showrazzo = false
shownave = false
showteleta = false
showtele = false
showtitanio = false
showbatteria = false
}
if(tags.ologram.includes(ricerca) ){
    backgr = false
    ricerca = ''
showblaster = false
showkit = false
showcomputer = false
showcpu = false
showdna = false
showenergia = false
showauto = false
showologramma = true
showjetpack = false
showram = false
showrobot = false
showrazzo = false
shownave = false
showteleta = false
showtele = false
showtitanio = false
showbatteria = false
}
if(tags.jetpac.includes(ricerca)){
    backgr = false
    ricerca = ''
showblaster = false
showkit = false
showcomputer = false
showcpu = false
showdna = false
showenergia = false
showauto = false
showologramma = false
showjetpack = true
showram = false
showrobot = false
showrazzo = false
shownave = false
showteleta = false
showtele = false
showtitanio = false
showbatteria = false
}
if(tags.ra.includes(ricerca) ){
    backgr = false
    ricerca = ''
showblaster = false
showkit = false
showcomputer = false
showcpu = false
showdna = false
showenergia = false
showauto = false
showologramma = false
showjetpack = false
showram = true
showrobot = false
showrazzo = false
shownave = false
showteleta = false
showtele = false
showtitanio = false
showbatteria = false
}
if(tags.robo.includes(ricerca)){
    backgr = false
    ricerca = ''
showblaster = false
showkit = false
showcomputer = false
showcpu = false
showdna = false
showenergia = false
showauto = false
showologramma = false
showjetpack = false
showram = false
showrobot = true
showrazzo = false
shownave = false
showteleta = false
showtele = false
showtitanio = false
showbatteria = false
}
if(tags.razz.includes(ricerca)){
    backgr = false
    ricerca = ''
showblaster = false
showkit = false
showcomputer = false
showcpu = false
showdna = false
showenergia = false
showauto = false
showologramma = false
showjetpack = false
showram = false
showrobot = false
showrazzo = true
shownave = false
showteleta = false
showtele = false
showtitanio = false
showbatteria = false
}
if(tags.nav.includes(ricerca)){
    backgr = false
    ricerca = ''
showblaster = false
showkit = false
showcomputer = false
showcpu = false
showdna = false
showenergia = false
showauto = false
showologramma = false
showjetpack = false
showram = false
showrobot = false
showrazzo = false
shownave = true
showteleta = false
showtele = false
showtitanio = false
showbatteria = false
}
if(tags.teletrasport.includes(ricerca)){
    backgr = false
    ricerca = ''
showblaster = false
showkit = false
showcomputer = false
showcpu = false
showdna = false
showenergia = false
showauto = false
showologramma = false
showjetpack = false
showram = false
showrobot = false
showrazzo = false
shownave = false
showteleta = true
showtele = false
showtitanio = false
showbatteria = false
}
if(tags.telescopi.includes(ricerca)){
    backgr = false
    ricerca = ''
showblaster = false
showkit = false
showcomputer = false
showcpu = false
showdna = false
showenergia = false
showauto = false
showologramma = false
showjetpack = false
showram = false
showrobot = false
showrazzo = false
shownave = false
showteleta = false
showtele = true
showtitanio = false
showbatteria = false
}
if(tags.titani.includes(ricerca)){
    backgr = false
    ricerca = ''
showblaster = false
showkit = false
showcomputer = false
showcpu = false
showdna = false
showenergia = false
showauto = false
showologramma = false
showjetpack = false
showram = false
showrobot = false
showrazzo = false
shownave = false
showteleta = false
showtele = false
showtitanio = true
showbatteria = false
}
if(tags.batteri.includes(ricerca) ){
    backgr = false
    ricerca = ''
showblaster = false
showkit = false
showcomputer = false
showcpu = false
showdna = false
showenergia = false
showauto = false
showologramma = false
showjetpack = false
showram = false
showrobot = false
showrazzo = false
shownave = false
showteleta = false
showtele = false
showtitanio = false
showbatteria = true
}
};

onMount(() => {
    if (typeof window !== 'undefined') {
      const salvaCar = localStorage.getItem('carrello');
      const salvaCount = localStorage.getItem('count');
      const salvanumCount = localStorage.getItem('numcount');
      const salvaAtt = localStorage.getItem('attiva')
      const salvaAtt1 = localStorage.getItem('attiva1')
      const salvaAtt2 = localStorage.getItem('attiva2')
      const salvaAtt3 = localStorage.getItem('attiva3')
      const salvaAtt4 = localStorage.getItem('attiva4')
      const salvaAtt5 = localStorage.getItem('attiva5')
      const salvaAtt6 = localStorage.getItem('attiva6')
      const salvaAtt7 = localStorage.getItem('attiva7')
      const salvaAtt8 = localStorage.getItem('attiva8')
      const salvaAtt9 = localStorage.getItem('attiva9')
      const salvaAtt10 = localStorage.getItem('attiva10')
      const salvaAtt11 = localStorage.getItem('attiva11')
      const salvaAtt12 = localStorage.getItem('attiva12')
      const salvaAtt13 = localStorage.getItem('attiva13')
      const salvaAtt14 = localStorage.getItem('attiva14')
      const salvaAtt15 = localStorage.getItem('attiva15')
      const salvaAtt16 = localStorage.getItem('attiva16')
      const salvaAtt17 = localStorage.getItem('attiva17')
      const salvaAtt18 = localStorage.getItem('attiva18')
      const salvaAtt19 = localStorage.getItem('attiva19')
      const battiva = localStorage.getItem('battiva')
      const battiva1 = localStorage.getItem('battiva1')
      const battiva2 = localStorage.getItem('battiva2')
      const battiva3 = localStorage.getItem('battiva3')
      const battiva4 = localStorage.getItem('battiva4')
      const battiva5 = localStorage.getItem('battiva5')
      const battiva6 = localStorage.getItem('battiva6')
      const battiva7 = localStorage.getItem('battiva7')
      const battiva8 = localStorage.getItem('battiva8')
      const battiva9 = localStorage.getItem('battiva9')
      const battiva10 = localStorage.getItem('battiva10')
      if (salvaCar) {
        carrello = JSON.parse(salvaCar);
      }
      if (salvaCount) {
        count = JSON.parse(salvaCount);
      }
      if (salvanumCount) {
        numcount = JSON.parse(salvanumCount);
      }
      if(salvaAtt){
        attiva = JSON.parse(salvaAtt)
      }
      if(salvaAtt1){
        attiva1 = JSON.parse(salvaAtt1)
      }
      if(salvaAtt2){
        attiva2 = JSON.parse(salvaAtt2)
      }
      if(salvaAtt3){
        attiva3 = JSON.parse(salvaAtt3)
      }
      if(salvaAtt4){
        attiva4 = JSON.parse(salvaAtt4)
      }
      if(salvaAtt5){
        attiva5 = JSON.parse(salvaAtt5)
      }
      if(salvaAtt6){
        attiva6 = JSON.parse(salvaAtt6)
      }
      if(salvaAtt7){
        attiva7 = JSON.parse(salvaAtt7)
      }
      if(salvaAtt8){
        attiva8 = JSON.parse(salvaAtt8)
      }
      if(salvaAtt9){
        attiva9 = JSON.parse(salvaAtt9)
      }
      if(salvaAtt10){
        attiva10 = JSON.parse(salvaAtt10)
      }
      if(salvaAtt11){
        attiva11 = JSON.parse(salvaAtt11)
      }
      if(salvaAtt12){
        attiva12 = JSON.parse(salvaAtt12)
      }
      if(salvaAtt13){
        attiva13 = JSON.parse(salvaAtt13)
      }
      if(salvaAtt14){
        attiva14 = JSON.parse(salvaAtt14)
      }
      if(salvaAtt15){
        attiva15 = JSON.parse(salvaAtt15)
      }
      if(salvaAtt16){
        attiva16 = JSON.parse(salvaAtt16)
      }
      if(salvaAtt17){
        attiva17 = JSON.parse(salvaAtt17)
      }
      if(salvaAtt18){
        attiva18 = JSON.parse(salvaAtt18)
      }
      if(salvaAtt19){
        attiva19 = JSON.parse(salvaAtt19)
      }
      
    }

  });

  const salvaCarrello = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('carrello', JSON.stringify(carrello));
      localStorage.setItem('count', JSON.stringify(count))
      localStorage.setItem('numcount', JSON.stringify(numcount))
      localStorage.setItem('attiva', JSON.stringify(attiva))
      localStorage.setItem('attiva1', JSON.stringify(attiva1))
      localStorage.setItem('attiva2', JSON.stringify(attiva2))
      localStorage.setItem('attiva3', JSON.stringify(attiva3))
      localStorage.setItem('attiva4', JSON.stringify(attiva4))
      localStorage.setItem('attiva5', JSON.stringify(attiva5))
      localStorage.setItem('attiva6', JSON.stringify(attiva6))
      localStorage.setItem('attiva7', JSON.stringify(attiva7))
      localStorage.setItem('attiva8', JSON.stringify(attiva8))
      localStorage.setItem('attiva9', JSON.stringify(attiva9))
      localStorage.setItem('attiva10', JSON.stringify(attiva10))
      localStorage.setItem('attiva11', JSON.stringify(attiva11))
      localStorage.setItem('attiva12', JSON.stringify(attiva12))
      localStorage.setItem('attiva13', JSON.stringify(attiva13))
      localStorage.setItem('attiva14', JSON.stringify(attiva14))
      localStorage.setItem('attiva15', JSON.stringify(attiva15))
      localStorage.setItem('attiva16', JSON.stringify(attiva16))
      localStorage.setItem('attiva17', JSON.stringify(attiva17))
      localStorage.setItem('attiva18', JSON.stringify(attiva18))
      localStorage.setItem('attiva19', JSON.stringify(attiva19))
    }
  };
  
  </script>
  
  <div>
    <div class="bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-800 flex-auto relative top-5 w-auto h-24 items-center border-b-2 white flex rounded-3xl ">
      <img src={hc} class="w-[250px] flex relative left-[65px] justify-center cursor-default" />
    </div>
    <div class="bg-gradient-to-tr from-black to-neutral-900 border-2 border-neutral-800 h-10 flex-auto flex flex-row items-center justify-between relative top-12 rounded-xl md:w-[50%] md:left-[45%] md:-top-12 "> 
    <a href="/" class=" font-bold ml-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {home ? "border-b-2 rounded-sm border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('home')}">Home</a>
    <a href="/skills" class="  font-bold cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {skills ? "border-b-2 border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('skills')}">Skills</a>
    <a href="/progetti" class="  font-bold mr-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {progetti ? "border-b-2 border-teal-500 text-teal-500":"text-white"}" on:click="{()=>selezionaPag('progetti')}">{$lingua.homepage.progetti}</a>
</div>
</div>

<select value="{salvaSele}" on:change="{(event)=>TraduciPagina(event.target.value)}" class="w-[100px] absolute top-[200px] sm:top-[200px] md:top-[130px] bg-gradient-to-tr p-2 from-white to-neutral-300 border-2 border-neutral-300 rounded-2xl invert">
  <option value="ita">Italiano</option>
  <option value="eng">English</option>
  </select>
  
  
  <div class="bg-black w-[100%]  {backgr ? "h-[5500px] sm:h-[6500px] md:h-[5500px] lg:h-[3000px]" : "h-[1000px]"} rounded-3xl relative top-36 flex justify-center ">
    <div class="w-[90%] h-[180px] flex flex-col">
      <div class="bg-gradient-to-br from-gray-950 to-teal-950 flex-auto relative top-5 w-[100%] h-[50px] lg:absolute lg:left-0 lg:top-0 md:absolute md:h-[160px] md:left-0 md:top-0 items-center teal-500 flex rounded-3xl ">
      <img src={alien} alt="alien" class="w-[80px] sm:w-[90px]  md:left-[4%] relative" />
      <div class="flex flex-col  md:left-[5%] relative">
      <h1  class="text-white text-4xl flex relative left-[0px] font-thin justify-center tracking-[10px] cursor-default">X-FLIES</h1>
       <p class="text-white text-sm italic">Your First Alien Space Travel</p>
      </div>
      </div>
    
      <div class="flex justify-center items-center absolute top-[0%] left-[35%] lg:top-[130px] lg:left-[35%] h-[40px] md:h-[40px] lg:h-[30px] md:top-[130px] md:left-[0%] md:rounded-tr-full lg:rounded-t-full bg-black p-3 rounded-xl w-[30%]">
        <p class="text-teal-500 font-bold" >{time.toLocaleTimeString()}</p>
      </div>
  
      
  
  
    
  
    
      <div class="bg-gradient-to-br from-gray-950 to-teal-950 md:bg-gradient-to-br md:from-black md:to-neutral-900 h-[10px] flex-auto flex flex-row items-center justify-between relative top-12 md:absolute  rounded-lg md:w-[50%] md:h-[50px] md:left-[45%] md:top-[55px] "> 
        <a href="/xflies" on:click="{()=>selezionaPagx('homex')}" class=" font-bold ml-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {homex ? "text-teal-500 border-b-2 border-teal-500": "text-white"}">Home</a>
        <a href="/xflies/biglietti" on:click="{()=>selezionaPagx('biglietti')}" class=" font-bold cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {biglietti ? "text-teal-500 border-b-2 border-teal-500": "text-white"}">{$lingua.homepage.biglietti}</a>
        <a href="/xflies/shop" on:click="{()=>selezionaPagx('xshop')}" class="  font-bold mr-6 cursor-pointer hover:text-teal-500 hover:border-b-2 hover:border-teal-500 {xshop ? "text-teal-500 border-b-2 border-teal-500": "text-white"}">X-Shop</a>
        </div>
    
  
        <div class="flex justify-center w-[100%] ">
        <div class="flex justify-center w-[100%] sfoca absolute top-[-20px] lg:top-[0px]">
      <input bind:value={ricerca} type="text" on:keyup="{(event)=>cerca(event)}" placeholder={$lingua.homepage.cerca} class="flex text-white pl-[20%] sm:pl-[8%] pr-[25%] sm:pr-[13%] justify-center items-center absolute top-[340px] sm:top-[380px] text-[12px] font-bold  md:rounded-xl   lg:rounded-xl lg:h-[45px] md:top-[260px] lg:top-[180px] md:w-[60%] outline-none  bg-neutral-800 p-3 rounded-xl w-[80%] sm:w-[60%]"/>
        <img src={src} alt="search" class="w-[25px] absolute invert-[0.5] left-[14%] sm:left-[22%] top-[348px] sm:top-[389px] md:top-[268px] lg:top-[189px]" />
        <img src={reload} alt="search" on:click="{()=>indietro()}" class="w-[20px] absolute invert-[0.5] spinna hover:spinna  right-[22%] sm:right-[28%] top-[350px] sm:top-[393px] md:top-[272px] lg:top-[193px] cursor-pointer" />
        <div class="group flex justify-center w-[100%]">
        <img src={info} alt="search" class="hover:visible w-[20px] absolute invert-[0.5] effetto right-[14%] sm:right-[22%] top-[350px] sm:top-[393px] md:top-[272px] lg:top-[193px] cursor-pointer" />
        <div class="invisible group-hover:visible rounded-lg absolute top-[310px] sm:top-[350px] text-[12px] lg:text-[15px] text-neutral-300 p-1 font-thin lg:h-[45px] md:top-[230px] lg:top-[180px] w-[80%] sm:w-[50%] md:w-[50%] justify-center items-center flex bg-neutral-900">{$lingua.homepage.info}  <img src={reload} alt="search" class="w-[15px] invert-[0.5] ml-1 mr-1" />  {$lingua.homepage.info2}</div>
        </div>
      </div>
      </div>


   
  
      <div class="flex w-[100%] justify-center">
      <div class="{grey ? "bg-gradient-to-r from-black to-green-950 border-green-950  border-2 transizione" : ""} {blue ? "bg-gradient-to-l from-black to-yellow-700 border-yellow-700 border-2 transizione " : ""} {red ? "bg-gradient-to-t from-black to-violet-950 border-violet-950 border-2 transizione " : ""} {backgr ? "grid": "hidden"} transizione grid-cols-1 grid-rows-4 justify-items-center absolute top-[390px] sm:top-[430px] md:top-[330px] lg:top-[240px] w-[300px] sm:w-[400px] md:w-[680px] h-[550px] sm:h-[590px] md:h-[600px] lg:h-[700px] lg:w-[80%] rounded-[80px]">
        <img src={pianeta} alt="hand" class="w-[40%] md:w-[25%] lg:w-[220px] relative top-[10%] sfoca2" />
        <p class="text-teal-500 text-3xl sm:top-[35%] md:top-[45%] md:text-[40px] lg:text-5xl lg:top-[50%] relative sfoca3">{titolo}</p>
        <p class="text-white text-justify text-[12px] sm:text-[12px] md:text-[15px] lg:text-[16px] 2xl:text-[22px] absolute w-[90%] top-[32%] sm:top-[41%] md:top-[47%] lg:top-[48%] sfoca4 sm:w-[80%]">{desc}</p>
        <div class="{grey ? "bg-neutral-500" : ""}{blue ? "bg-neutral-500" : ""}{red ? "bg-neutral-500" : ""} flex justify-center lg:w-[50%] flex-row w-[80%] h-[10%] items-center sfoca6 bg-neutral-500  transizione  rounded-3xl absolute top-[85%]">
          <button on:click="{()=>selezionaViaggioPrev()}" class="bg-neutral-900 text-teal-500 rounded-lg relative w-[40%] mr-5 text-xl cursor-pointer hover:border-2 hover:border-teal-50">&lt;</button>
          <button on:click="{()=>selezionaViaggioNext()}" class="bg-neutral-900 text-teal-500 rounded-lg relative w-[40%] ml-5 text-xl cursor-pointer hover:border-2 hover:border-teal-500 ">&gt;</button>
        </div>
        <button disabled={!attiva || !disattiva} on:click="{()=>aggiungiCarrello('atomo')}" class="{grey ? "visibile":"invisible"}  {attiva ? "shadow-2xl sfoca5 shadow-black absolute p-2 rounded-2xl top-[73%] flex w-[80%] lg:w-[50%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "shadow-2xl shadow-black text-white bg-teal-800 absolute p-2 rounded-2xl top-[73%] flex w-[80%] lg:w-[50%] justify-center cursor-not-allowed opacity-40"} {grey ? "bg-green-900 text-white font-semibold" : ""}{blue ? "bg-yellow-700 font-semibold text-white" : ""}{red ? "bg-violet-950 font-semibold text-white" : ""} ">{attiva ? `${$lingua.homepage.acquista} ${paga}`: `${$lingua.homepage.aggiunto}`}</button>
        <button disabled={!attiva1 || !disattiva1} on:click="{()=>aggiungiCarrello('braccio')}" class="{red ? "visibile":"invisible"} {attiva1 ? "shadow-2xl shadow-black absolute p-2 rounded-2xl top-[73%] flex w-[80%] lg:w-[50%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "shadow-2xl shadow-black text-white bg-teal-800 absolute p-2 rounded-2xl top-[73%] flex w-[80%] lg:w-[50%] justify-center cursor-not-allowed opacity-40"} {grey ? "bg-green-900 text-white font-semibold" : ""}{blue ? "bg-yellow-700 font-semibold text-white" : ""}{red ? "bg-violet-950 font-semibold text-white" : ""} ">{attiva1 ? `${$lingua.homepage.acquista} ${paga}`: `${$lingua.homepage.aggiunto}`}</button>
        <button disabled={!attiva2 || !disattiva2} on:click="{()=>aggiungiCarrello('bitcoin')}" class="{blue ? "visibile":"invisible"} {attiva2 ? "shadow-2xl shadow-black absolute p-2 rounded-2xl top-[73%] flex w-[80%] lg:w-[50%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "shadow-2xl shadow-black text-white bg-teal-800 absolute p-2 rounded-2xl top-[73%] flex w-[80%] lg:w-[50%] justify-center cursor-not-allowed opacity-40"} {grey ? "bg-green-900 text-white font-semibold" : ""}{blue ? "bg-yellow-700 font-semibold text-white" : ""}{red ? "bg-violet-950 font-semibold text-white" : ""} ">{attiva2 ? `${$lingua.homepage.acquista} ${paga}`: `${$lingua.homepage.aggiunto}`}</button>
      </div>


      <div class="{backgr ? "h-[13500px] sm:h-[16000px] md:h-[13500px] lg:h-[6500px] top-[1050px] sm:top-[18%] md:top-[20%] lg:top-[35%] lg:grid-cols-2 lg:grid-rows-9" : "h-[800px] top-[400px] sm:top-[440px] md:top-[340px] lg:top-[250px] lg:grid-cols-1 lg:grid-rows-1"} grid grid-cols-1 grid-rows-17  w-[100%] bg-black rounded-b-3xl absolute justify-items-center">
  
      <div class="sfoca7 {showblaster ? "grid": "hidden"} hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors cursor-default grid grid-cols-1 grid-rows-4 justify-items-center relative  {backgr ? "lg:left-[8%] lg:w-[80%]": "lg:w-[680px]"} w-[300px] sm:w-[400px] md:w-[680px] h-[650px] sm:h-[800px] md:h-[600px] lg:h-[680px]  bg-gradient-to-tr from-black to-neutral-900 rounded-[80px] border-2 border-neutral-900">
        <img src={blaster} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] lg:top-[10%]" />
        <p class="text-teal-500 text-4xl lg:text-5xl top-[-5%] sm:top-[10%] md:top-[40%] md:text-5xl lg:top-[-5%] relative ">{$lingua.shop.lablaster}</p>
        <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[33%] md:top-[45%]  sm:top-[36%] lg:top-[33%] w-[90%] sm:w-[80%]">{$lingua.shop.blaster}</p>
        <button disabled={!attiva3 || !disattiva3} on:click="{()=>aggiungiCarrello('blaster')}" class=" {attiva3 ? "absolute p-2 rounded-2xl top-[88%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[88%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva3 ? `${$lingua.homepage.acquista} ${$lingua.shop.lablaster}`: `${$lingua.homepage.aggiunto}`}</button>
      </div>
   
     
      <div class="sfoca7 {showkit ? "grid": "hidden"} hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center relative  w-[300px] sm:w-[400px] md:w-[680px] {backgr ? "lg:right-[8%] lg:w-[80%]": "lg:w-[680px]"} h-[650px] sm:h-[800px] md:h-[600px] lg:h-[680px]  bg-gradient-to-tr from-black to-neutral-900 rounded-[80px] border-2 border-neutral-900">
        <img src={chemistry} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] lg:top-[10%]" />
        <p class="text-teal-500 text-4xl lg:text-5xl top-[-5%] sm:top-[10%] md:top-[40%] md:text-5xl lg:top-[-5%] relative ">{$lingua.shop.lakit}</p>
        <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[33%]  md:top-[45%]  sm:top-[36%] lg:top-[33%] w-[90%] sm:w-[80%]">{$lingua.shop.kit}</p>
        <button disabled={!attiva4 || !disattiva4} on:click="{()=>aggiungiCarrello('kit')}" class=" {attiva4 ? "absolute p-2 rounded-2xl top-[88%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[88%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva4 ? `${$lingua.homepage.acquista} ${$lingua.shop.lakit}`: `${$lingua.homepage.aggiunto}`}</button>
      </div>
      
      
      <div class="sfoca7 {showcomputer ? "grid": "hidden"} hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center relative  {backgr ? "lg:left-[8%] lg:w-[80%]": "lg:w-[680px]"} w-[300px] sm:w-[400px] md:w-[680px] h-[650px] sm:h-[800px] md:h-[600px] lg:h-[680px]  bg-gradient-to-tr from-black to-neutral-900 rounded-[80px] border-2 border-neutral-900">
        <img src={computer} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] lg:top-[10%]" />
        <p class="text-teal-500 text-4xl  lg:text-5xl top-[-5%] sm:top-[10%] md:top-[40%] md:text-5xl lg:top-[-5%] relative ">{$lingua.shop.lacomputer}</p>
        <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[33%]  md:top-[45%]  sm:top-[36%] lg:top-[33%] w-[90%] sm:w-[80%]">{$lingua.shop.computer}</p>
        <button disabled={!attiva5 || !disattiva5} on:click="{()=>aggiungiCarrello('computer')}" class=" {attiva5 ? "absolute p-2 rounded-2xl top-[88%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[88%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva5 ? `${$lingua.homepage.acquista} ${$lingua.shop.lacomputer}`: `${$lingua.homepage.aggiunto}`}</button>
      </div>
  
      <div class="sfoca7 {showcpu ? "grid": "hidden"} hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center relative  w-[300px] sm:w-[400px] md:w-[680px] {backgr ? "lg:right-[8%] lg:w-[80%]": "lg:w-[680px]"} h-[650px] sm:h-[800px] md:h-[600px] lg:h-[680px]  bg-gradient-to-tr from-black to-neutral-900 rounded-[80px] border-2 border-neutral-900">
        <img src={cpu} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] lg:top-[10%]" />
        <p class="text-teal-500 text-4xl  lg:text-5xl top-[-5%] sm:top-[10%] md:top-[40%] md:text-5xl lg:top-[-5%] relative ">{$lingua.shop.lacpu}</p>
        <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[33%]  md:top-[45%]  sm:top-[36%] lg:top-[33%] w-[90%] sm:w-[80%]">{$lingua.shop.cpu}</p>
        <button disabled={!attiva6 || !disattiva6} on:click="{()=>aggiungiCarrello('cpu')}" class=" {attiva6 ? "absolute p-2 rounded-2xl top-[88%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[88%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva6 ? `${$lingua.homepage.acquista} ${$lingua.shop.lacpu}`: `${$lingua.homepage.aggiunto}`}</button>
      </div>
  
      <div class="sfoca7 {showdna ? "grid": "hidden"} hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center relative w-[300px] sm:w-[400px] md:w-[680px] {backgr ? "lg:left-[8%] lg:w-[80%]": "lg:w-[680px]"} h-[650px] sm:h-[800px] md:h-[600px] lg:h-[680px]  bg-gradient-to-tr from-black to-neutral-900 rounded-[80px] border-2 border-neutral-900">
        <img src={dna} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] lg:top-[10%]" />
        <p class="text-teal-500 text-4xl  lg:text-5xl top-[-5%] sm:top-[10%] md:top-[40%] md:text-5xl lg:top-[-5%] relative ">{$lingua.shop.ladna}</p>
        <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[33%]  md:top-[45%]  sm:top-[36%] lg:top-[33%] w-[90%] sm:w-[80%]">{$lingua.shop.dna}</p>
        <button disabled={!attiva7 || !disattiva7} on:click="{()=>aggiungiCarrello('dna')}" class=" {attiva7 ? "absolute p-2 rounded-2xl top-[88%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[88%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva7 ? `${$lingua.homepage.acquista} ${$lingua.shop.ladna}`: `${$lingua.homepage.aggiunto}`}</button>
      </div>
  
      <div class="sfoca7 {showenergia ? "grid": "hidden"} hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center relative   w-[300px] sm:w-[400px] md:w-[680px] {backgr ? "lg:right-[8%] lg:w-[80%]": "lg:w-[680px]"} h-[650px] sm:h-[800px] md:h-[600px] lg:h-[680px]  bg-gradient-to-tr from-black to-neutral-900 rounded-[80px] border-2 border-neutral-900">
        <img src={energy} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] lg:top-[10%]" />
        <p class="text-teal-500 text-4xl  lg:text-5xl top-[-5%] sm:top-[10%] md:top-[40%] md:text-5xl lg:top-[-5%] relative ">{$lingua.shop.laenergia}</p>
        <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[33%]  md:top-[45%]  sm:top-[36%] lg:top-[33%] w-[90%] sm:w-[80%]">{$lingua.shop.energia}</p>
        <button disabled={!attiva8 || !disattiva8} on:click="{()=>aggiungiCarrello('energia')}" class=" {attiva8 ? "absolute p-2 rounded-2xl top-[88%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[88%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva8 ? `${$lingua.homepage.acquista} ${$lingua.shop.laenergia}`: `${$lingua.homepage.aggiunto}`}</button>
      </div>
  
      <div class="sfoca7 {showauto ? "grid": "hidden"} hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center relative  w-[300px] sm:w-[400px] md:w-[680px] {backgr ? "lg:left-[8%] lg:w-[80%]": "lg:w-[680px]"} h-[650px] sm:h-[800px] md:h-[600px] lg:h-[680px]  bg-gradient-to-tr from-black to-neutral-900 rounded-[80px] border-2 border-neutral-900">
        <img src={flycar} alt="hand" class="w-[35%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] lg:top-[10%]" />
        <p class="text-teal-500 text-4xl  lg:text-5xl top-[-5%] sm:top-[10%] md:top-[40%] md:text-5xl lg:top-[-5%] relative ">{$lingua.shop.laauto}</p>
        <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[33%]  md:top-[45%]  sm:top-[36%] lg:top-[33%] w-[90%] sm:w-[80%]">{$lingua.shop.auto}</p>
        <button disabled={!attiva9 || !disattiva9} on:click="{()=>aggiungiCarrello('auto')}" class=" {attiva9 ? "absolute p-2 rounded-2xl top-[88%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[88%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva9 ? `${$lingua.homepage.acquista} ${$lingua.shop.laauto}`: `${$lingua.homepage.aggiunto}`}</button>
      </div>
  
      <div class="sfoca7 {showologramma ? "grid": "hidden"} hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center relative  w-[300px] sm:w-[400px] md:w-[680px] {backgr ? "lg:right-[8%] lg:w-[80%]": "lg:w-[680px]"} h-[650px] sm:h-[800px] md:h-[600px] lg:h-[680px]  bg-gradient-to-tr from-black to-neutral-900 rounded-[80px] border-2 border-neutral-900">
        <img src={hologram} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] lg:top-[10%]" />
        <p class="text-teal-500 text-4xl  lg:text-5xl top-[-5%] sm:top-[10%] md:top-[40%] md:text-5xl lg:top-[-5%] relative ">{$lingua.shop.laologramma}</p>
        <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[33%]  md:top-[45%]  sm:top-[36%] lg:top-[33%] w-[90%] sm:w-[80%]">{$lingua.shop.ologramma}</p>
        <button disabled={!attiva10 || !disattiva10} on:click="{()=>aggiungiCarrello('ologramma')}" class=" {attiva10 ? "absolute p-2 rounded-2xl top-[88%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[88%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva10 ? `${$lingua.homepage.acquista} ${$lingua.shop.laologramma}`: `${$lingua.homepage.aggiunto}`}</button>
      </div>

      <div class="sfoca7 {showjetpack ? "grid": "hidden"} hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors cursor-default grid grid-cols-1 grid-rows-4 justify-items-center relative {backgr ? "lg:left-[8%] lg:w-[80%]": "lg:w-[680px]"} w-[300px] sm:w-[400px] md:w-[680px] h-[650px] sm:h-[800px] md:h-[600px] lg:h-[680px]  bg-gradient-to-tr from-black to-neutral-900 rounded-[80px] border-2 border-neutral-900">
        <img src={jetpack} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] lg:top-[10%]" />
        <p class="text-teal-500 text-4xl lg:text-5xl top-[-5%] sm:top-[10%] md:top-[40%] md:text-5xl lg:top-[-5%] relative ">{$lingua.shop.lajetpack}</p>
        <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[33%] md:top-[45%]  sm:top-[36%] lg:top-[33%] w-[90%] sm:w-[80%]">{$lingua.shop.jetpack}</p>
        <button disabled={!attiva11 || !disattiva11} on:click="{()=>aggiungiCarrello('jetpack')}" class=" {attiva11 ? "absolute p-2 rounded-2xl top-[88%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[88%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva11 ? `${$lingua.homepage.acquista} ${$lingua.shop.lajetpack}`: `${$lingua.homepage.aggiunto}`}</button>
      </div>
  
      <div class="sfoca7 {showram ? "grid": "hidden"} hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center relative  w-[300px] sm:w-[400px] md:w-[680px] {backgr ? "lg:right-[8%] lg:w-[80%]": "lg:w-[680px]"} h-[650px] sm:h-[800px] md:h-[600px] lg:h-[680px]  bg-gradient-to-tr from-black to-neutral-900 rounded-[80px] border-2 border-neutral-900">
        <img src={ram} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] lg:top-[10%]" />
        <p class="text-teal-500 text-4xl lg:text-5xl top-[-5%] sm:top-[10%] md:top-[40%] md:text-5xl lg:top-[-5%] relative ">{$lingua.shop.laram}</p>
        <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[33%]  md:top-[45%]  sm:top-[36%] lg:top-[33%] w-[90%] sm:w-[80%]">{$lingua.shop.ram}</p>
        <button disabled={!attiva12 || !disattiva12} on:click="{()=>aggiungiCarrello('ram')}" class=" {attiva12 ? "absolute p-2 rounded-2xl top-[88%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[88%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva12 ? `${$lingua.homepage.acquista} ${$lingua.shop.laram}`: `${$lingua.homepage.aggiunto}`}</button>
      </div>
      
      <div class="sfoca7 {showrobot ? "grid": "hidden"} hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center relative  {backgr ? "lg:left-[8%] lg:w-[80%]": "lg:w-[680px]"} w-[300px] sm:w-[400px] md:w-[680px] h-[650px] sm:h-[800px] md:h-[600px] lg:h-[680px] bg-gradient-to-tr from-black to-neutral-900 rounded-[80px] border-2 border-neutral-900">
        <img src={robot} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] lg:top-[10%]" />
        <p class="text-teal-500 text-4xl  lg:text-5xl top-[-5%] sm:top-[10%] md:top-[40%] md:text-5xl lg:top-[-5%] relative ">{$lingua.shop.larobot}</p>
        <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[33%]  md:top-[45%]  sm:top-[36%] lg:top-[33%] w-[90%] sm:w-[80%]">{$lingua.shop.robot}</p>
        <button disabled={!attiva13 || !disattiva13} on:click="{()=>aggiungiCarrello('robot')}" class=" {attiva13 ? "absolute p-2 rounded-2xl top-[88%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[88%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva13 ? `${$lingua.homepage.acquista} ${$lingua.shop.larobot}`: `${$lingua.homepage.aggiunto}`}</button>
      </div>
  
      <div class="sfoca7 {showrazzo ? "grid": "hidden"} hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center relative  w-[300px] sm:w-[400px] md:w-[680px] {backgr ? "lg:right-[8%] lg:w-[80%]": "lg:w-[680px]"} h-[650px] sm:h-[800px] md:h-[600px] lg:h-[680px] bg-gradient-to-tr from-black to-neutral-900 rounded-[80px] border-2 border-neutral-900">
        <img src={rocket} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] lg:top-[10%]" />
        <p class="text-teal-500 text-4xl  lg:text-5xl top-[-5%] sm:top-[10%] md:top-[40%] md:text-5xl lg:top-[-5%] relative ">{$lingua.shop.larazzo}</p>
        <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[33%]  md:top-[45%]  sm:top-[36%] lg:top-[33%] w-[90%] sm:w-[80%]">{$lingua.shop.razzo}</p>
        <button disabled={!attiva14 || !disattiva14} on:click="{()=>aggiungiCarrello('razzo')}" class=" {attiva14 ? "absolute p-2 rounded-2xl top-[88%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[88%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva14 ? `${$lingua.homepage.acquista} ${$lingua.shop.larazzo}`: `${$lingua.homepage.aggiunto}`}</button>
      </div>
  
      <div class="sfoca7 {shownave ? "grid": "hidden"} hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center relative w-[300px] sm:w-[400px] md:w-[680px] {backgr ? "lg:left-[8%] lg:w-[80%]": "lg:w-[680px]"} h-[650px] sm:h-[800px] md:h-[600px] lg:h-[680px] bg-gradient-to-tr from-black to-neutral-900 rounded-[80px] border-2 border-neutral-900">
        <img src={spaceship} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] lg:top-[10%]" />
        <p class="text-teal-500 text-4xl  lg:text-5xl top-[-5%] sm:top-[10%] md:top-[40%] md:text-5xl lg:top-[-5%] relative ">{$lingua.shop.lanave}</p>
        <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[33%]  md:top-[45%]  sm:top-[36%] lg:top-[33%] w-[90%] sm:w-[80%]">{$lingua.shop.nave}</p>
        <button disabled={!attiva15 || !disattiva15} on:click="{()=>aggiungiCarrello('nave')}" class=" {attiva15 ? "absolute p-2 rounded-2xl top-[88%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[88%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva15 ? `${$lingua.homepage.acquista} ${$lingua.shop.lanave}`: `${$lingua.homepage.aggiunto}`}</button>
      </div>
  
      <div class="sfoca7 {showteleta ? "grid": "hidden"} hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center relative   w-[300px] sm:w-[400px] md:w-[680px] {backgr ? "lg:right-[8%] lg:w-[80%]": "lg:w-[680px]"} h-[650px] sm:h-[800px] md:h-[600px] lg:h-[680px] bg-gradient-to-tr from-black to-neutral-900 rounded-[80px] border-2 border-neutral-900">
        <img src={teleport} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] lg:top-[10%]" />
        <p class="text-teal-500 text-4xl  lg:text-5xl top-[-5%] sm:top-[10%] md:top-[40%] md:text-5xl lg:top-[-5%] relative ">{$lingua.shop.lateletrasporto}</p>
        <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[33%]  md:top-[45%]  sm:top-[36%] lg:top-[33%] w-[90%] sm:w-[80%]">{$lingua.shop.teletrasporto}</p>
        <button disabled={!attiva16 || !disattiva16} on:click="{()=>aggiungiCarrello('teletrasporto')}" class=" {attiva16 ? "absolute p-2 rounded-2xl top-[88%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[88%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva16 ? `${$lingua.homepage.acquista} ${$lingua.shop.lateletrasporto}`: `${$lingua.homepage.aggiunto}`}</button>
      </div>
  
      <div class="sfoca7 {showtele ? "grid": "hidden"} hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center relative  w-[300px] sm:w-[400px] md:w-[680px] {backgr ? "lg:left-[8%] lg:w-[80%]": "lg:w-[680px]"} h-[650px] sm:h-[800px] md:h-[600px] lg:h-[680px] bg-gradient-to-tr from-black to-neutral-900 rounded-[80px] border-2 border-neutral-900">
        <img src={telescope} alt="hand" class="w-[35%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] lg:top-[10%]" />
        <p class="text-teal-500 text-4xl  lg:text-5xl top-[-5%] sm:top-[10%] md:top-[40%] md:text-5xl lg:top-[-5%] relative ">{$lingua.shop.latelescopio}</p>
        <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[33%]  md:top-[45%]  sm:top-[36%] lg:top-[33%] w-[90%] sm:w-[80%]">{$lingua.shop.telescopio}</p>
        <button disabled={!attiva17 || !disattiva17} on:click="{()=>aggiungiCarrello('telescopio')}" class=" {attiva17 ? "absolute p-2 rounded-2xl top-[88%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[88%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva17 ? `${$lingua.homepage.acquista} ${$lingua.shop.latelescopio}`: `${$lingua.homepage.aggiunto}`}</button>
      </div>
  
      <div class="sfoca7 {showtitanio ? "grid": "hidden"} hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center relative  w-[300px] sm:w-[400px] md:w-[680px] {backgr ? "lg:right-[8%] lg:w-[80%]": "lg:w-[680px]"} h-[650px] sm:h-[800px] md:h-[600px] lg:h-[680px] bg-gradient-to-tr from-black to-neutral-900 rounded-[80px] border-2 border-neutral-900">
        <img src={titanium} alt="hand" class="w-[40%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] lg:top-[10%]" />
        <p class="text-teal-500 text-4xl  lg:text-5xl top-[-5%] sm:top-[10%] md:top-[40%] md:text-5xl lg:top-[-5%] relative ">{$lingua.shop.latitanio}</p>
        <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[33%]  md:top-[45%]  sm:top-[36%] lg:top-[33%] w-[90%] sm:w-[80%]">{$lingua.shop.titanio}</p>
        <button disabled={!attiva18 || !disattiva18} on:click="{()=>aggiungiCarrello('titanio')}" class=" {attiva18 ? "absolute p-2 rounded-2xl top-[88%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[88%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva18 ? `${$lingua.homepage.acquista} ${$lingua.shop.latitanio}`: `${$lingua.homepage.aggiunto}`}</button>
      </div>

      <div class="sfoca7 {showbatteria ? "grid": "hidden"} hover:bg-gradient-to-tr hover:from-black hover:to-gray-700 hover:duration-1000 hover:border-gray-700 hover:border-2 transition-colors  cursor-default grid grid-cols-1 grid-rows-4 justify-items-center relative  w-[300px] sm:w-[400px] md:w-[680px] {backgr ? "lg:left-[8%] lg:w-[80%]": "lg:w-[680px]"} h-[650px] sm:h-[800px] md:h-[600px] lg:h-[680px] bg-gradient-to-tr from-black to-neutral-900 rounded-[80px] border-2 border-neutral-900">
        <img src={transformer} alt="hand" class="w-[35%] md:w-[25%] lg:w-[120px] relative top-[10%] md:top-[10%] lg:top-[10%]" />
        <p class="text-teal-500 text-4xl  lg:text-5xl top-[-5%] sm:top-[10%] md:top-[40%] md:text-5xl lg:top-[-5%] relative ">{$lingua.shop.labatteria}</p>
        <p class="text-white text-justify text-[12px] sm:text-[15px] lg:text-[14px] 2xl:text-[17px] absolute top-[33%]  md:top-[45%]  sm:top-[36%] lg:top-[33%] w-[90%] sm:w-[80%]">{$lingua.shop.batteria}</p>
        <button disabled={!attiva19 || !disattiva19} on:click="{()=>aggiungiCarrello('batteria')}" class=" {attiva19 ? "absolute p-2 rounded-2xl top-[88%] transizione2 bg-neutral-400 text-black font-semibold flex w-[80%] justify-center hover:bg-neutral-950 hover:border-2 hover:border-teal-500 hover:text-teal-500 cursor-pointer": "absolute p-2 rounded-2xl top-[88%] transizione2 bg-teal-800 text-white font-semibold flex w-[80%] justify-center cursor-not-allowed opacity-40"} ">{attiva19 ? `${$lingua.homepage.acquista} ${$lingua.shop.labatteria}`: `${$lingua.homepage.aggiunto}`}</button>
      </div>
  
      </div>
      </div>
      
  
  
  
      <div class="flex justify-center w-[100%]">
      <div class=" {opencart ? "visible": "invisible"}  bg-gradient-to-tr from-black to-gray-600 border-2 border-gray-600 w-[350px] sm:w-[550px] h-[660px] sm:h-[760px] md:h-[760px] lg:h-[760px] md:right-[7%] fixed bottom-[0%] flex justify-center ombracar rounded-xl overflow-y-auto ">
  
          <div class="flex flex-row justify-center items-center absolute top-0 sm:top-0 w-[100%] h-[8%] rounded-b-xl">
          <p class="text-white font-bold text-xl  sm:text-3xl tracking-[3px] ">{$lingua.homepage.carrello} {numcount}</p>
          </div>
  
          <div class="grid grid-cols-1 grid-rows-11 w-[100%] h-[350px] sm:h-[450px] gap-y-[20px] bg-gradient-to-tr from-black to-neutral-950 border-b-2 border-gray-600 absolute top-[50px] sm:top-[60px] rounded-2xl overflow-y-auto overflow-x-hidden justify-items-center">
  
            {#each carrello as item (item.titoloitem)}
            <div class="flex items-center bg-gradient-to-tr from-black to-neutral-700 border-2 border-neutral-700 w-[94%] h-[90px] rounded-2xl relative top-[10%] justify-center text-center cursor-default">
            <img src={item.imgitem} alt="terra" class="w-[50px] md:w-[70px] absolute left-[5%] " />
            <p class="text-teal-500 text-xl md:text-3xl font-semibold absolute top-[20%] md:top-[10%] left-[23%] md:left-[23%] tracking-wide">{item.titoloitem}</p>
            <p class="text-teal-500 text-lg md:text-2xl font-semibold absolute top-[50%] left-[23%] md:left-[23%]">€{item.prezzoitem}</p>
            <select class="absolute right-[18%] w-[40px] rounded-sm outline-none" on:change="{()=>qt(event)}">
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

    .spinna {
  animation-name: gira;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes gira {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spinna:hover {
  animation-name: gira-hover;
}

@keyframes gira-hover {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.esci{
  animation: forwards ease-in 1s fuori;
}

@keyframes fuori {
  0%{filter:blur(5px)}
  100%{filter: blur(0px);}
}


    .most{
      visibility: hidden;
    }

    .most:hover{
      visibility: visible;
    }
    
    
  .sfoca{
  animation: forwards 1s sfoc;
  opacity: 0;
}
.sfoca2{
  animation: forwards 1s sfoc2;
  animation-delay: 1s;
  opacity: 0;
}
.sfoca3{
  animation: forwards 1s sfoc3;
  animation-delay: 2s;
  opacity: 0;
}
.sfoca4{
  animation: forwards 1s sfoc4;
  animation-delay: 3s;
  opacity: 0;
}
.sfoca5{
  animation: forwards 1s sfoc5;
  animation-delay: 4s;
  opacity: 0;
}
.sfoca6{
  animation: forwards 1s sfoc6;
  animation-delay: 5s;
  opacity: 0;
}
.sfoca7{
  animation: forwards 1s sfoc7;
}
.sfoca8{
  animation: forwards 1s sfoc8;
  animation-delay: 7s;
  opacity: 0;
}
.sfoca9{
  animation: forwards 1s sfoc9;
  animation-delay: 8s;
  opacity: 0;
}

@keyframes sfoc {
  0%{filter: blur(5px);}
  100%{filter: blur(0px); opacity: 1;}
}
@keyframes sfoc2 {
 0%{filter: blur(5px); rotate:0deg}
  100%{filter: blur(0px); opacity: 1; rotate:360deg}
}
@keyframes sfoc3 {
 0%{filter: blur(5px);}
  100%{filter: blur(0px); opacity: 1;}
}
@keyframes sfoc4 {
0%{filter: blur(5px);}
  100%{filter: blur(0px); opacity: 1;}
}
@keyframes sfoc5 {
 0%{filter: blur(5px);}
  100%{filter: blur(0px); opacity: 1;}
}
@keyframes sfoc6 {
 0%{filter: blur(5px);}
  100%{filter: blur(0px); opacity: 1;}
}
@keyframes sfoc7 {
 0%{filter: blur(10px);}
  100%{filter: blur(0px); opacity: 1;}
}
@keyframes sfoc8 {
 0%{filter: blur(5px);}
  100%{filter: blur(0px); opacity: 1;}
}
@keyframes sfoc9 {
 0%{filter: blur(5px);}
  100%{filter: blur(0px); opacity: 1;}
}

  </style>
  
  
  