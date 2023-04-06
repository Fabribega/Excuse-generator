const generateNewExcuseButton = document.querySelector('#generate-new-excuse')
const newExcuse = document.querySelector('#new-excuse')

const randomItemFromArray = (target) => {
	const randomItem = Math.floor(Math.random() * target.length)
	return target[randomItem]
}

const excuses = {
	intros: [
		`Sorry I can't come,`,
		'Please forgive my absence,',
		'This is going to sound crazy but',
		`You ain't gonna believe this:`,
		`I can't go because`,
		'I know you are going to hate me but',
	],
	scapegoats: [
		'my nephew',
		'the ghost of Hitler',
		'the Pope',
		'my ex',
		'Darth Vader',
		'a sad clown',
		'my Tinder date',
		'my grandma',
		'my llama',
		'a zebra',
	],
	delays: [
		'just shit the bed',
		'died in front of me',
		`won't stop telling me knock knock jokes`,
		'is having a nervous breakdown',
		'gave me syphilis',
		'poured lemonade in my gas tank',
		'stabbed me',
		'found my bag of human teeth',
	]
}

const generateNewExcuse = () => {
	const intro = randomItemFromArray(excuses.intros)
	const scapegoat = randomItemFromArray(excuses.scapegoats)
	const delay = randomItemFromArray(excuses.delays)
	const excuse = `${intro} ${scapegoat} ${delay}`
	newExcuse.innerText = excuse
}

generateNewExcuseButton.addEventListener('click', generateNewExcuse)
