
<script>
	
	let frasi = ['Alessio', 'Karol', 'Ciccio', 'Dio Cane']
	let word = frasi[0]
	const randomWords=()=>{
const random = setInterval(() => {
	const randomfrasi = Math.floor(Math.random() * frasi.length)
	const rand  = frasi[randomfrasi]
	word = rand
}, 1000);
return ()=> clearInterval(random)
	}
	randomWords()
</script>

<main>
	<h1>Hello {word}!</h1>


</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>