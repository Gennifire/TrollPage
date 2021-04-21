const quotes = [
	{ 
		"quote" : "They're eating her, and then they're gonna eat me... oh my goooooood", 
		"source" : "Teen about to be eaten- Trolls 2" 
	},
	{
		"quote" : "Trolls simply detest the very sight of dwarves (uncooked).", 
		"source" : "J.R.R. Tolkien -The Hobbit, or There and Back Again"
	},
	{
		"quote" : "Anyone can speak Troll. All you have to do is point and grunt.", 
		"source" : "J.K. Rowling - Harry Potter and the Goblet of Fire "
	},
	{
		"quote" : "Fairy tales are for children. Trolls are animals. Predators. They eat, shit and mate. Eat anything they can.", 
		"source" : "Hans, trolljegeren - TrollHunter"
	},
	{
		"quote" : "Trolls are primitive, true, but they are counted among sapient creatures. They can speak our tongue, though not very colorfully.", 
		"source" : "Journal entry - The Witcher"
	},
	{
		"quote" : "Don't you understand? In the troll world, darkness always triumphs over light? ", 
		"source" : "Stanley - Troll in Cenral Park"
	},
	{
		"quote" : "Dont feed the Trolls!", 
		"source" : "Public Saftey Warning!"
	},
	{
		"quote" : "If you’re attacked by a troll, the best way å overleve (to survive) is to keep talking! Trolls are not too clever.", 
		"source" : "Askeladden - who had an eating contest with the troll"
	}
]

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `“${random.quote}.”`;
  source.innerText = random.source;
}

randomQuote();

document.querySelector("button").addEventListener('click', randomQuote)