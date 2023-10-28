<script>
	let result = '';

	let pc = ['Rock', 'Paper', 'Scissors'];

	const rock = 'Rock'
	const paper = 'Paper';
	const scissors= 'Scissors';
	
	const RocK=()=>{
		let pick = RandonPick()
		if (pick === 'Rock'){
			result = `You picked ${rock}, pc picked ${rock} it's a tie.`
		} else if (pick === 'Paper'){
			result = `You picked ${rock}, pc picked ${paper}, you lose.`
		} else if (pick === 'Scissors'){
			result = `You picked ${rock}, pc picked ${scissors}, you win.`
		}
	}

	const PapeR=()=>{
		let pick = RandonPick()
		if (pick === 'Paper'){
			result = `You picked ${paper}, pc picked ${paper} it's a tie.`
		} else if (pick === 'Rock'){
			result = `You picked ${paper}, pc picked ${rock}, you win.`
		} else if (pick === 'Scissors'){
			result = `You picked ${paper}, pc picked ${scissors}, you lose.`
		}
	}

	const SciS=()=>{
		let pick = RandonPick()
		if (pick === 'scissors'){
			result = `You picked ${scissors}, pc picked ${scissors} it's a tie.`
		} else if (pick === 'Paper'){
			result = `You picked ${scissors}, pc picked ${paper}, you win.`
		} else if (pick === 'Rock'){
			result = `You picked ${scissors}, pc picked ${rock}, you lose.`
		}
	}

	const RandonPick=()=>{
		const random = Math.floor(Math.random()* pc.length)
		return pc[random]
	}

	
</script>

<h1>Rock Paper Scissors</h1>

<button  on:click={RocK}>{rock}</button>
<button  on:click={PapeR}>{paper}</button>
<button  on:click={SciS}>{scissors}</button>

<p>{result}</p>