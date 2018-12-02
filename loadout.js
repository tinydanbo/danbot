var stringHash = require("string-hash");

var king_seed = 986875;

function getRandomFromArray(seed, array) {
	var seeded = seed; // lol
	return array[seeded % array.length];
}

function rarity(seed, object) {
	var raritypercentage = seed % 100;

	if (raritypercentage > 90) {
		return ":small_orange_diamond: **" + getRandomFromArray(seed, object.super_rare) + "**";
	} else if (raritypercentage > 60) {
		return ":small_blue_diamond: " + getRandomFromArray(seed, object.rare);
	} else {
		return ":white_small_square: " + getRandomFromArray(seed, object.common);
	}
}

var classes = [
	"Rocket Knight",
	"Gun Mage",
	"Royal Hunter",
	"Dancer",
	"Housemaid",
	"Thaumaturge",
	"Wretch",
	"Surgeon",
	"Mech Pilot",
	"Stellar Guardian",
	"Silent Assassin",
	"Trans-Dimensional Wanderer",
	"Sentinel",
	"Revenant",
	"\"Flower Girl\"",
	"Shrine Maiden",
	"Raider",
	"Gunsmith",
	"Pharmacist",
	"Monk",
	"Samurai",
	"Abyss Knight",
	"Duellist",
	"Oracle",
	"Sociopath",
	"Barbarian",
	"Meat Merchant",
	"Slime Scholar",
	"Mad One",
	"Thread Cutter"
];

var weapons_v2 = {
	super_rare: [
		{
			name: "Mk.V Anti-Personnel 40mm Rocket Launcher",
			mods: [

			]
		},
		{
			name: "Mk.V Anti-Personnel 40mm Rocket Launcher",
			mods: [

			]
		}
	],
	rare: [

	],
	common: [

	],
	mundane: [
		{
			name: "Stainless Steel Chef's Knife (8 inch)",
			mods: [
				"Dual Wield",
				"Ergonomic Grip",
				"Tactical Engravings",
				"Electric Rig (Car Battery, 12V)",
				"Single-Bevel Edge"
			]
		},
		{
			name: "Baseball Bat, Hickory",
			mods: [
				"Taped Grip",
				"Embedded Nails",
				"\"G.C.\" Engraving"
			]
		},
		{
			name: "Baseball Bat, Hickory",
			mods: [
				"Taped Grip",
				"Embedded Nails",
				"\"G.C.\" Engraving"
			]
		},
	]
}

var items_v2 = {
	super_rare: [
		{
			name: "",
			desc: ""
		}
	]
}

var weapons = {
	super_rare: [
		"Mk.V Anti-Personnel 40mm Rocket Launcher",
		"\"Perforator\" Rotary Nail Gun",
		"40kW Arena-Class Lightning Gun",
		"Milkor MGL Rotary Grenade Launcher",
		"20mm Man-Portable Railgun",
		"The Mother-Freakin' Blue Revolver From *\"Fortnite\"*",
		"OCP Auto-9"
	],
	rare: [
		"FIM-92 Stinger Man-Portable Air-Defense System",
		"Heckler & Koch PSG-1 Sniper Rifle",
		"VSK-94 Carbine",
		"SerLea Submachine Gun",
		"Stoner 63 Light Machine Gun",
		"ICA Silverballer Pistol",
		"M26 Fragmentation Grenade (x2)",
		"ASP Pistol",
		"Remington 870 Pump-Action Shotgun",
		"AK-47 Assault Rifle",
		"Heckler & Koch MP5 Submachine Gun",
		"Riot Shield",
		"Winchester Model 1887 Lever-Action Shotgun",
		"M112 C-4 Demolition Charge (x2)",
		"MAC-10 Machine Pistol",
		"Taser X26C Stun Gun",
		"SIG Sauer P226 Pistol",
		"Intratec TEC-9 Machine Pistol",
		"Glock 22 Gen4 Pistol",
		"Mosin-Nagant M1891 Bolt-Action Rifle",
		"Double-Barrel Shotgun, 12ga",
		"Break-Action Shotgun, Single Barrel, 10ga"
	],
	common: [
		"Cold Steel Pro Balance Throwing Knife (x3)",
		"English Longbow",
		"Husqvarna 236-14\" Chain Saw",
		"D-Cell Batteries (Box of 10)",
		"Bosch Cordless Drill",
		"Retractable Baton",
		"Cold Steel GI Tanto Tactical Knife",
		"Cold Steel Counter Point Folding Knife",
		"Kitchen Knife, 25.5cm",
		"Cast-Iron Frying Pan",
		"Caltrops",
		"Fire Axe (Factory New)",
	]
}

var items = {
	super_rare: [
		"MiB Standard-Issue Neuralyzer",
		"Bag of Holding",
		"Jetpack",
		"Ring of Favor and Protection"
	],
	rare: [
		"Lenovo X1 Carbon (6th Gen)",
		"Lethal Poison Vial",
		"ICA Explosive Phone",
		"Fake Death Pill",
		"Weyland-Yutani Motion Detector",
		"Night Vision Goggles",
		"iPhone 5S",
		"Roomba, Remote-Controlled",
		"MYLEK 10L Xpresso Digital Catering Urn - Suitable For Tea, Hot Drinks & Mulled Wine",
		"BOSCH GSH 27 VC Hydraulic Breaker / Jackhammer",
		"Emetic Poison Vial",
		"22-Piece Lockpicking Set, Leather Case",
		"Nokia 3310",
		"12-Piece Toolkit",
		"Unlabeled Bottle of Pills",
		"Field Medkit",
		"Lovingly-Packed Lunch",
		"Box of Fireworks",
		"Ring of "
	],
	common: [
		"Maglite ML300L 3D LED Flashlight",
		"Folding Chair",
		"Coin (x5)",
		"Altoids, Peppermint 50g",
		"Rider-Waite Tarot Deck",
		"Insect Repellant Spray",
		"Lucky Strike Cigarettes (20, Softpack)",
		"Painkillers (Ibuprofen, 12pc)"
	]
}

var perks = [
	"Terrifying Presence",
	"Indomitable",
	"Simple Minded",
	"Good Natured",
	"Trap Expert",
	"Item Boy",
	"Nice Body",
	"Virtuous",
	"Expert Marksman",
	"Heavyweight",
	"Expert Blogger",
	"Exquisite Cooking",
	"Recluse",
	"Diplomatic",
	"Unbreakable",
	"Browbeater",
	"Will to Survive",
	"Delusional",
	"Stealthy",
	"Acidic Blood",
	"Honor-Bound",
	"Born to Suffer",
	"Lots of Blood",
	"Perverted",
	"Kinship with Nature",
	"Wild Wasteland",
	"Deadeye",
	"Transcendental",
	"Berry Finder",
	"Nut Finder",
	"Transhuman",
	"Excellent Thrower",
	"Burden Carrier",
	"Racing Mind",
	"Cold-Blooded",
	"Item Fanatic",
	"Idiot Savant",
	"Kleptomaniac",
	"Blind",
	"Master of Disguise",
	"Histrionic",
	"Strong Skeleton",
	"Kinship with Beast",
	"Masochistic",
	"Larger Explosions",
	"Big Hitbox",
	"Lead Belly",
	"Sticky Fingers",
	"Hacker",
	"Criminal Record",
	"Mold Resistance"
];

module.exports = {
	generate: function(name, seed) {
		var level = stringHash(name + seed + king_seed) % 60;
		var user_class = getRandomFromArray(stringHash(name + seed + king_seed + 1), classes);
		var weapon_1_string = rarity(stringHash(name + seed + king_seed + 2345), weapons);
		var weapon_2_string = rarity(stringHash(name + seed + king_seed + 5789), weapons);
		var item_string = rarity(stringHash(name + seed + king_seed + 75675), items);
		var perk_1_string = ":small_blue_diamond: " + getRandomFromArray(stringHash(name + seed + king_seed + 456), perks);
		var perk_2_string = ":small_blue_diamond: " + getRandomFromArray(stringHash(name + seed + king_seed + 234), perks);
		var perk_3_string = ":small_blue_diamond: " + getRandomFromArray(stringHash(name + seed + king_seed + 867), perks);
		return "**" + name + ", Lv." + level + " " + user_class + "**\n\n" +
		"__Weapons__\n" + weapon_1_string + "\n" + weapon_2_string + "\n\n" +
		"__Item__\n" + item_string + "\n\n" +
		"__Perks__\n" + perk_1_string + "\n" + perk_2_string + "\n" + perk_3_string;
	}
}