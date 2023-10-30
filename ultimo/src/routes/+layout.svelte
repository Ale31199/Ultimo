<script>
  import "../tailwind.css";
</script>

<slot />


<nav class="flex flex-col justify-center">
<div class="bg-black flex-auto relative -top-56 h-24 items-center border-b-2 white flex">
<h1  class="text-white text-4xl font-bold inline-flex relative left-2 justify-center cursor-default">HomeCode<h1 class="animate-pulse text-white">|</h1></h1>
</div>

<div class="bg-zinc-700 h-10 flex-auto flex flex-row items-center justify-between relative -top-48 rounded-lg"> 
  <h3 class=" text-white font-bold ml-6 cursor-pointer hover:text-orange-400 hover:border-b-2 hover:border-orange-400">Home</h3>
  <h3 class=" text-white font-bold cursor-pointer hover:text-orange-400 hover:border-b-2 hover:border-orange-400">Skills</h3>
  <h3 class=" text-white font-bold mr-6 cursor-pointer hover:text-orange-400 hover:border-b-2 hover:border-orange-400">Progetti</h3>
  </div>

</nav>
