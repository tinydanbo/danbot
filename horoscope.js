if (!String.format) {
  String.format = function(format) {
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number] 
        : match
      ;
    });
  };
}

var king_seed = 986875;

function getRandomFromArray(seed, array) {
	var seeded = seed; // lol
	return array[seeded % array.length];
}

var phrases = [
	"* ahead",
	"be wary of *",
	"try *",
	"need *",
	"faith in * required",
	"do not trust *",
	"imminent *",
	"weakness: *",
	"mercy for *",
	"no mercy for *",
	"* is necessary",
	"forget about *",
	"if only you had a *",
	"time for *",
	"reeks of *",
	"it is all thanks to *",
	"the true enemy is *",
	"listen carefully",
	"delicious *",
	"*",
	"*?",
	"*!",
	"good luck!",
	"you'll do it!",
	"you can't take this",
	"a hunter is never alone",
	"time for *",
	""
];

var compounds = [
	"{0}",
	"{0}",
	"{0}...",
	"{0} therefore {1}",
	"{0} but 1}",
	"{0} and then {1}",
	"{0}, {1}",
	"{0}, but alas: {1}"
];

var adjectives = [
	"strange",
	"sweet",
	"suspicious",
	"evil",
	"beloved",
	"precious",
	"rare",
	"mundane",
	"poor-quality",
	"small",
	"large",
	"unknown",
	"amazing",
	"pathetic",
	"lost",
	"rotten"
];

var nouns = [
	"enemy",
	"big boy",
	"small fry",
	"creature",
	"cutie",
	"swamp creature",
	"fatty",
	"baby",
	"scholar",
	"man",
	"woman",
	"horse",
	"headgear",
	"garment",
	"small gent",
	"small lady",
	"skeleton",
	"beanpole",
	"wretch",
	"meat",
	"beef",
	"chicken",
	"concoction",
	"trap",
	"chest",
	"drink",
	"god",
	"demon",
	"liar",
	"great one",
	"mad one",
	"child",
	"egg",
	"text",
	"administrator",
	"soldier",
	"path",
	"shortcut",
	"dead end",
	"swamp",
	"safe zone",
	"danger zone",
	"tight spot",
	"area",
	"view",
	"hole",
	"feet",
	"tongue",
	"tail",
	"taste",
	"friend",
	"ally",
	"thrust",
	"strike",
	"hit",
	"chance",
	"hint",
	"secret",
	"happiness",
	"coward",
	"mood",
	"sorrow",
	"life",
	"death",
	"elation",
	"freak",
	"grief",
	"hope",
	"despair",
	"depression",
	"anxiety",
	"trance",
	"game",
	"event",
	"performance",
	"emotion",
	"vermin",
	"slayer",
	"human",
	"mimic",
	"tactics",
	"laughter",
	"tears",
	"universe"
];

var actions = [
	"commitment",
	"don't give up",
	"beating to a pulp",
	"stabbing in the back",
	"head shots",
	"jumping off",
	"special technique",
	"endless battle",
	"crying and whining",
	"reflection",
	"rushing",
	"going slowly",
	"improving the self",
	"ganging up",
	"thorough cleaning",
	"sleeping peacefully",
	"dodging",
	"rolling with the punches",
	"rolling",
	"holding with both hands",
	"dejection",
	"acceptance",
	"comradeship",
	"disassociation"
];

function generateFragment(seed) {
	var raritypercentage = (seed * 1025234) % 100;

	if (raritypercentage > 80) {
		return getRandomFromArray(seed, actions);
	} else if (raritypercentage > 50) {
		return getRandomFromArray(seed * 1345345, adjectives) + " " + getRandomFromArray(seed * 895865, nouns);
	} else {
		return getRandomFromArray(seed * 36756234, nouns);
	}
}

module.exports = {
	generate: function(seed) {
		// generate two phrases
		var phrase_1 = getRandomFromArray(seed * 56474, phrases);
		phrase_1 = phrase_1.replace("*", generateFragment(seed * 7846));
		var phrase_2 = getRandomFromArray(seed * 81293, phrases);
		phrase_2 = phrase_2.replace("*", generateFragment(seed * 234424));
		// get a compound
		var output = getRandomFromArray(seed * 235, compounds);
		// replace placeholders
		output = String.format(output, phrase_1, phrase_2);
		return output;
	}
}