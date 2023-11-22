<script>
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
 teletrasport: ['Teletrasporto', 'trasporto', 'Teleport', 'teleport'],
 telescopi: ['Telesscopio', 'telescopio', 'Telescope', 'telescope'],
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
const cerca=(event)=>{
 if(event.key === 'Enter'){
ricerca = event.target.value
tag()
}
}
const tag = () => {
 if(ricerca === tags.blaste[0] || tags.blaste[1]){
showblaster = false
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
if(ricerca === tags.ki[0] || tags.ki[1] || tags.ki[2] || tags.ki[3]){
showblaster = true
showkit = false
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
if(ricerca === tags.compute[0] || tags.compute[1]){
showblaster = true
showkit = true
showcomputer = false
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
if(ricerca === tags.cp[0] || tags.cp[1]){
showblaster = true
showkit = true
showcomputer = true
showcpu = false
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
if(ricerca === tags.dn[0] || tags.dn[1]){
showblaster = true
showkit = true
showcomputer = true
showcpu = true
showdna = false
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
if(ricerca === tags.energi[0] || tags.energi[1] || tags.energi[2] || tags.energi[3] ){
showblaster = true
showkit = true
showcomputer = true
showcpu = true
showdna = true
showenergia = false
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
if(ricerca === tags.aut[0] || tags.aut[1] || tags.aut[2] || tags.aut[3]){
showblaster = true
showkit = true
showcomputer = true
showcpu = true
showdna = true
showenergia = true
showauto = false
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
if(ricerca === tags.ologram[0] || tags.ologram[1] || tags.ologram[0] || tags.ologram[1] ){
showblaster = true
showkit = true
showcomputer = true
showcpu = true
showdna = true
showenergia = true
showauto = true
showologramma = false
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
if(ricerca === tags.jetpac[0] || tags.jetpac[1]){
showblaster = true
showkit = true
showcomputer = true
showcpu = true
showdna = true
showenergia = true
showauto = true
showologramma = true
showjetpack = false
showram = true
showrobot = true
showrazzo = true
shownave = true
showteleta = true
showtele = true
showtitanio = true
showbatteria = true
}
if(ricerca === tags.ra[0] || tags.ra[1] || tags.ra[2] || tags.ra[3] ){
showblaster = true
showkit = true
showcomputer = true
showcpu = true
showdna = true
showenergia = true
showauto = true
showologramma = true
showjetpack = true
showram = false
showrobot = true
showrazzo = true
shownave = true
showteleta = true
showtele = true
showtitanio = true
showbatteria = true
}
if(ricerca === tags.robo[0] || tags.robo[1]){
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
showrobot = false
showrazzo = true
shownave = true
showteleta = true
showtele = true
showtitanio = true
showbatteria = true
}
if(ricerca === tags.razz[0] || tags.razz[1] ||  tags.razz[2] || tags.razz[3]){
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
showrazzo = false
shownave = true
showteleta = true
showtele = true
showtitanio = true
showbatteria = true
}
if(ricerca === tags.nav[0] || tags.nav[1] ||  tags.nav[2] || tags.nav[3]){
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
shownave = false
showteleta = true
showtele = true
showtitanio = true
showbatteria = true
}
if(ricerca === tags.teletrasport[0] || tags.teletrasport[1] || tags.teletrasport[2] || tags.teletrasport[3] ){
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
showteleta = false
showtele = true
showtitanio = true
showbatteria = true
}
if(ricerca === tags.telescopi[0] || tags.telescopi[1] || tags.telescopi[2] || tags.telescopi[3]){
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
showtele = false
showtitanio = true
showbatteria = true
}
if(ricerca === tags.titani[0] || tags.titani[1]|| tags.titani[2] || tags.titani[3]){
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
showtitanio = false
showbatteria = true
}
if(ricerca === tags.batteri[0] || tags.batteri[1] || tags.batteri[2] || tags.batteri[3]  ){
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
showbatteria = false
}
};





/*
  
const tags = [
  { key: 'atomo', values: ['atomo', 'Atomo', 'Atom', 'atom'] },
  { key: 'bracci', values: ['Braccio', 'braccio', 'Bionic', 'bionic'] },
  { key: 'bitcoi', values: ['Bitcoin', 'bitcoin'] },
  { key: 'blaste', values: ['Blaster', 'blaster'] },
  { key: 'ki', values: ['Kit', 'kit', 'Chemical', 'chemical'] },
  { key: 'compute', values: ['Computer', 'computer', 'Pc', 'pc'] },
  { key: 'cp', values: ['Cpu', 'cpu'] },
  { key: 'dn', values: ['Dna', 'dna'] },
  { key: 'energi', values: ['Energia', 'energia', 'Energy', 'energy'] },
  { key: 'aut', values: ['Auto', 'auto', 'flying', 'Flying'] },
  { key: 'ologram', values: ['Ologramma', 'ologramma', 'Hologram', 'hologram'] },
  { key: 'jetpac', values: ['Jetpack', 'jetpack'] },
  { key: 'ra', values: ['Ram', 'ram'] },
  { key: 'robo', values: ['Robot', 'robot'] },
  { key: 'razz', values: ['Razzo', 'razzo', 'rocket', 'Rocket'] },
  { key: 'nav', values: ['Nave', 'nave', 'Spaceship', 'spaceship'] },
  { key: 'teletrasport', values: ['Teletrasporto', 'trasporto', 'Teleport', 'teleport'] },
  { key: 'telescopi', values: ['Telesscopio', 'telescopio', 'Telescope', 'telescope'] },
  { key: 'titani', values: ['Titanio', 'titanio', 'titanium', 'Titanium'] },
  { key: 'batteri', values: ['Batteria', 'batteria', 'Battery', 'battery'] },
];

let ricerca = ''
let trovato = true
let nascondialtri = false

const cerca=(event)=>{
  if(event.key === 'Enter'){
ricerca = event.target.value
tag()
}
}

const tag = (index) => {
  if(ricerca === 'blaster'){
  trovato = true;
  nascondialtri = false;
  }

  else if (tags[index].values[index] !== ricerca) {
    trovato = true;
    nascondialtri = false 
  } 
};
*/

</script>



