/*
WARNING: I ([]^[]) AM PROBABLY LIABLE FOR ANY DISTRESS OR RAGE READING THIS PRODUCES. I AM SORRY
OK REDOING THIS COMMENTING BECAUSE I LOST IT AGAIN
CREATORS:
- Echo Shard System (hey das the co-creator(hiii dats me :3)), ClocktowerCollective (hey das me)
 Credits:
 - ES for ideas, playtesting, status effect icons, and also making the undithered gif for entropy
 - Lustre for making the dithered version of the fractal gif
 - Sola for making the monochrome eye for Entropy's action as well as the ditherd soul hotpocket gif
 - Narra, Kuvi, and Adri and Fyrox from the Novae for judging my code
 - Narra and Adri from the Novae system for helping with the loader as well.
 - Fyrox from the Novae system for helping me ([]^[]) fix a move
 - Narra for immobile_actor, the fishing minigame part as well.
 - Adenator for the code for making the status pool because i was probably not gonna figure that out at all, also for helping me ([]^[]) fix the loader with the resources
 - And also with showing me ([]^[]) how to format the description for the recent update, pointing out enegrgy, and overall helping with fixing the code.
 - Mewo for helping with StupidHorrible text, and for making that humor's personality (thx so much mewo u tha goat :3)
 - Luna from the sunset system for the updated battery image!
 - Narra for completely re-writing fairylight
 PLAYTESTERS:
I - THE FACTORY, CARNAGE, FOOLFRIEND, ADRI, hi vekoa :3  (LOOK THE LOWERCASE IS IMPORTANT FOR THEIR NAME), MOTH_GELI
 SECTIONS:
 1. Dialogue changing
 2. CSS
 3. Functions
 4. Humors
 5. Augments
 6. Combat Modifiers
 7. Status Effects
 8. Combat Actions
 9. Personality
 10. Combat Actors
 11. Items
 12. Fishing
 13. Merchant Code

 TO DO:
+ work on meat and SiIva
		+ SiIva humor ideas so far
		+ primary: rip
		+ secondary: mashup
		+ utility: Snow Halation
		+ utility augment (use 7 SiIvas): The MF Like Button
		+ action does a random move that is strong, but requires a buildup of energy to do so
		- MEAT (hunger)
		- SUGAR (sanity)
		- METAL (land) (semi finished at this moment :3)
		- PLASTIC (boundary)
+ OFF humors could possibly be based off of the bosses, also add in three sumon pieces (alpha, omega, epsilon)
+ Possibly make the zodiac cards be used in peace, could make them summon allies.
	+ Aries
	+ Taurus
	+ Gemini
	+ Cancer
	+ Leo
	+ Virgo
	+ Libra
	+ Scorpio
	+ Sagittarius
	+ Capricorn
	+ Aquarius
	+ Pisces
*/

//Dialogue changing
if( page.path == '/local/ozo/' || page.path == '/local/beneath/embassy') {
	if(!env.dialogues["dreammod"].humors.responses[0].replies.includes("entropy")) {
		env.dialogues["dreammod"].humors.responses[0].replies.push({
			"name":"entropy",
			"destination":"loop",
			"exec": Function('change("e3a2_newcomp","entropy")'),
			"hideRead":true
		})
	}
	if(!env.dialogues["dreammod"].humors.responses[0].replies.includes("surge")) {
		env.dialogues["dreammod"].humors.responses[0].replies.push({
			"name":"surge",
			"destination":"loop",
			"exec": Function('change("e3a2_newcomp","surge")'),
			"hideRead":true
		})
	}
	if(!env.dialogues["dreammod"].humors.responses[0].replies.includes("stupidhorrible")) {
		env.dialogues["dreammod"].humors.responses[0].replies.push({
			"name":"stupidhorrible",
			"destination":"loop",
			"exec": Function('change("e3a2_newcomp","stupidhorrible")'),
			"hideRead":true
		})
		}
	if(!env.dialogues["dreammod"].humors.responses[0].replies.includes("smog")) {
		env.dialogues["dreammod"].humors.responses[0].replies.push({
			"name":"smog",
			"destination":"loop",
			"exec": Function('change("e3a2_newcomp","smog")'),
			"hideRead":true
		})
		}
	if(!env.dialogues["dreammod"].humors.responses[0].replies.includes("steel")) {
		env.dialogues["dreammod"].humors.responses[0].replies.push({
			"name":"steel",
			"destination":"loop",
			"exec": Function('change("e3a2_newcomp","steel")'),
			"hideRead":true
		})
		}
	if(!env.dialogues["dreammod"].humors.responses[0].replies.includes("life")) {
		env.dialogues["dreammod"].humors.responses[0].replies.push({
			"name":"life",
			"destination":"loop",
			"exec": Function('change("e3a2_newcomp","life")'),
			"hideRead":true
		})
		}
	if(!env.dialogues["dreammod"].humors.responses[0].replies.includes("kivcria")) {
		env.dialogues["dreammod"].humors.responses[0].replies.push({
			"name":"kivcria",
			"destination":"loop",
			"exec": Function('change("e3a2_newcomp","kivcria")'),
			"hideRead":true
		})
		}
	if(!env.dialogues["dreammod"].sfer.responses[0].replies.includes("mod tester's delight (999)")) {
		env.dialogues["dreammod"].sfer.responses[0].replies.push({
			"name":"mod tester's delight (999)",
			"destination":"loop",
			"exec": Function('change("e3a2_sfer",999)'),
			"hideRead":true
		})
	}
}

if(page.party){
	switch(check("e3a2_newcomp")) {
		case "too many":
			if (typeof page.flags.components == undefined){
                page.flags.components = {
                    ichor: 30,
                    claws: 30,
                    light: 30,
                    bone: 30,
                    eyes: 30
                }
            }
			page.flags.components.entropy = 30
			page.flags.components.surging = 30
			page.flags.components.stupidhorrible = 30 
			page.flags.components.smog = 30
			page.flags.components.steel = 30
			page.flags.components.life = 30
			page.flags.components.graceful = 30
			page.flags.components.kivcria = 30
			
			page.party[0].components["primary"] = "claws"
			page.party[0].components["secondary"] = "claws"
			page.party[0].components["utility"] = "eyes"

			page.party[1].components["primary"] = "light"
			page.party[1].components["secondary"] = "eyes"
			page.party[1].components["utility"] = "bone"

			page.party[2].components["primary"] = "eyes"
			page.party[2].components["secondary"] = "ichor"
			page.party[2].components["utility"] = "light"
				break

		case "abundant":
			if (typeof page.flags.components == undefined) {
				page.flags.components = {
					ichor: 3,
					claws: 3,
					light: 3,
					bone: 3,
					eyes: 3
				}
			}
			page.flags.components.entropy = 3
			page.flags.components.surging = 3
			page.flags.components.stupidhorrible = 3
			page.flags.components.smog = 3
			page.flags.components.steel = 3
			page.flags.components.life = 3
			page.flags.components.graceful = 3
			page.flags.components.kivcria = 3
			
			page.party[0].components["primary"] = "claws"
			page.party[0].components["secondary"] = "claws"
			page.party[0].components["utility"] = "eyes"

			page.party[1].components["primary"] = "light"
			page.party[1].components["secondary"] = "eyes"
			page.party[1].components["utility"] = "bone"

			page.party[2].components["primary"] = "eyes"
			page.party[2].components["secondary"] = "ichor"
			page.party[2].components["utility"] = "light"
				break

		case "entropy":
			page.flags.components = { entropy: 12 }

			page.party.forEach(member=>{
				member.components["primary"] = "entropy"
				member.components["secondary"] = "entropy"
				member.components["utility"] = "entropy"
			})
			break

        case "surge":
            page.flags.components = { surging: 12}

            page.party.forEach(member=>{
                member.components["primary"] = "surging"
                member.components["secondary"] = "surging"
                member.components["utility"] = "surging"
           })
		   break
		
		case "stupidhorrible":
			page.flags.components = {stupidhorrible: 12}

			page.party.forEach(member=>{
				member.components["primary"]="stupidhorrible"
				member.components["secondary"]="stupidhorrible"
				member.components["utility"]="stupidhorrible"
			})
			break

		case "smog":
			page.flags.components ={smog:12}

			page.party.forEach(member=>{
				member.components["primary"]="smog"
				member.components["secondary"]="smog"
				member.components["utility"]="smog"
			})
			break
		case "steel":
			page.flags.components = {steel :12}

			page.party.forEach(member=>{
				member.components["primary"]="steel"
				member.components["secondary"]="steel"
				member.components["utility"]="steel"
			})
			break
		case "life":
			page.flags.components = {life: 12}

			page.party.forEach(member=>{
				member.components["primary"]="life"
				member.components["secondary"]="life"
				member.components["utility"]="life"
			})
			break
		case "graceful":
			page.flags.components = {graceful: 12}

			page.party.forEach(member=>{
				member.components["primary"]="graceful"
				member.components["secondary"]="graceful"
				member.components["utility"]="graceful"
			})
		break
		case "kivcria":
			page.flags.components = { kivcria: 12 }

			page.party.forEach(member=>{
				member.components["primary"] = "kivcria"
				member.components["secondary"] = "kivcria"
				member.components["utility"] = "kivcria"
			})
		break
	}
}
if (page.path == '/local/beneath/embassy/') {
	//CSS
	content.insertAdjacentHTML('beforeend', `<style>
	/* for making player cards not overflow offscreen */
	#ally-team .actor {
    	background-color: var(--dark-color);
    	margin-top: 50px;
	}

	#ally-team {
    	bottom: 5vh;
    	flex-wrap: wrap;
    	z-index: 29;
	}

	#crittaresult, #crittaresult * {
    	transition: transform 2s ease-in-out, opacity 2s ease-in-out;
    	text-align: center;
		z-index: 30;
	}


	/* humor styling */
	[component="entropy"] {
    	--background: url(https://glass-memoirs.github.io/Chaos-beta/Images/Humors/EntropyLarge.gif);
    	--organelle-background: url(https://glass-memoirs.github.io/Chaos-beta/Images/Humors/EntropyHumor.gif);    
    	--background-small:  url(https://glass-memoirs.github.io/Chaos-beta/Images/Humors/EntropySmall.gif);
    	--background-size: auto;
    	--background-position: center;
    	--background-color: var(--dark-color);
    	--accent-color: var(--bright-color);
    	--font-color: var(--neutral-color);
	}
	[component="surging"] {
    	--background: url(https://glass-memoirs.github.io/Chaos-beta/Images/Humors/SurgingHumorLarge.gif);
    	--organelle-background: url(https://glass-memoirs.github.io/Chaos-beta/Images/Humors/SurgingHumorSmall.gif);
    	--background-small: url(https://glass-memoirs.github.io/Chaos-beta/Images/Humors/SurgingHumorSmall.gif);
    	--background-size: auto;
    	--background-position: center;
    	--background-color: var(--dark-color);
    	--accent-color: var(--friend-color);
    	--font-color: var(--fundfriend-color);
	}
	[component="stupidhorrible"] {
    	--background: url(https://glass-memoirs.github.io/Chaos-beta/Images/Humors/BabyPearLarge.gif);
    	--organelle-background: url(https://glass-memoirs.github.io/Chaos-beta/Images/Humors/BabyPearLarge.gif);
    	--background-small: url(https://glass-memoirs.github.io/Chaos-beta/Images/Humors/BabyPearSmall.gif);
    	--background-size: auto;
    	--background-position: center;
    	--background-color: var(--dark-color);
    	--accent-color: var(--friend-color);
    	--font-color: var(--neutral-color);
	}
	[component="smog"] {
    	--background: url(https://glass-memoirs.github.io/Chaos-beta/Images/Humors/SmokeHumorIcon.gif);
    	--organelle-background: url(https://glass-memoirs.github.io/Chaos-beta/Images/Humors/SmokeHumorMedium.gif);
    	--background-small: url(https://glass-memoirs.github.io/Chaos-beta/Images/Humors/SmokeHumorMedium.gif);
    	--background-size: auto;
    	--background-position: center;
    	--background-color: var(--dark-color);
    	--accent-color: #90e404;
    	--font-color: #90e404;
	}
	[component="steel"] {
    	--background: url(https://glass-memoirs.github.io/Chaos-beta/Images/Humors/OFFmetalHumor.gif);
    	--organelle-background: url(https://glass-memoirs.github.io/Chaos-beta/Images/Humors/OFFmetalHumorMeium.gif);
    	--background-small: url(https://glass-memoirs.github.io/Chaos-beta/Images/Humors/OFFmetalHumorMedium.gif);
    	--background-size: auto;
    	--background-position: center;
    	--background-color: var(--dark-color);
    	--accent-color: #d004a4;
    	--font-color: #d004a4;
	}
	[component="life"] {
		--background: url(https://glass-memoirs.github.io/Chaos-beta/Images/Humors/lifeHumorSmall.gif);
		--organelle-background: url(https://glass-memoirs.github.io/Chaos-beta/Images/Humors/lifeHumorSmall.gif);
    	--background-small: url(https://glass-memoirs.github.io/Chaos-beta/Images/Humors/lifeHumorSmall.gif);
    	--background-size: auto;
    	--background-position: center;
    	--background-color: var(--dark-color);
    	--accent-color: var(--neutral-color);
    	--font-color: var(--fundfriend-color);
	}
	[component="graceful"] {
		--background: url(https://glass-memoirs.github.io/Chaos-beta/Images/Humors/GracefulHumor.gif);
		--organelle-background: url(https://glass-memoirs.github.io/Chaos-beta/Images/Humors/GracefulHumor.gif);
    	--background-small: url(https://glass-memoirs.github.io/Chaos-beta/Images/Humors/GracefulHumor.gif);
    	--background-size: auto;
    	--background-position: center;
    	--background-color: var(--dark-color);
    	--accent-color: var(--neutral-color);
    	--font-color: var(--fundfriend-color);
	}
	[component="kivcria"] {
		--background: url(https://glass-memoirs.github.io/Chaos-beta/Images/Humors/KivcriaHumor.gif);
		--organelle-background: url(https://glass-memoirs.github.io/Chaos-beta/Images/Humors/KivcriaHumor.gif);
    	--background-small: url(https://glass-memoirs.github.io/Chaos-beta/Images/Humors/KivcriaHumor.gif);
    	--background-size: auto;
    	--background-position: center;
    	--background-color: var(--dark-color);
    	--accent-color: var(--bastard-color);
    	--font-color: var(--bastard-color);
	}
	</style>`);

//FUNCTIONS
function midCombatAllyAdd(actorSpecifier, side = "right") {
    if(!env.rpg.active) return false;
    
    let actor = initializeActor(actorSpecifier, {team: env.rpg.allyTeam, enemyTeam: env.rpg.enemyTeam, uniqify: true, side})
    
    if(env.rpg.settings.actorPreprocess) env.rpg.settings.actorPreprocess(actor)
    if(actor.base?.events?.onInitialize) actor.base.events.onInitialize(actor)
    if(actor.alterations || env.rpg.settings.teamAlterations?.enemy || env.rpg.settings.teamAlterations?.all ) actor.actions = getAlteredActorActions({member: actor, actor: actor})

    initializeActorUI({actor, team: env.rpg.allyTeam, side, animateIn: false})

    //update the turnorder
    env.rpg.turnOrder = []
    env.rpg.teams.forEach((team, i) => {
        env.rpg.turnOrder = env.rpg.turnOrder.concat(team.members);
    })
    
    //update current actor accordingly
    if(side == "left") {
        env.rpg.currentActorIndex = env.rpg.turnOrder.findIndex((a) => a == env.rpg.currentActor)
    }

    updateStats()
    return actor
}

function TempIconChoice() {
	let Icons = ["https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif", "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/testinghumor.png"]
	let IconChoice = Icons.sample()
	return IconChoice
}

function randomInt(min, max) { // min and max included <---- thank you, random stackoverflow user
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//HUMORS
env.COMBAT_COMPONENTS.entropy = {
     name: "Entropy",
     slug: "entropy",
     description: "'repetition and chaos'",
     help: "'move';'balance';'repeat'",

     primary: { //damage scales by positive effects on user
          alterations: [["primary", "momentum"]],     

          stats: {
               maxhp: 4
          },
     },

     secondary: { //Removes status effects from both you and the enemy
          alterations: [["secondary", "level_statuses"]],
          stats: {
               maxhp: 4
          }
     },

     utility: { //randomly strike enemies with attack, has chance to keep going
          alterations: [["evade", "wild_frenzy"]],
          stats: {
               maxhp: 4
          }
     },
     combatModifiers: ["entropy_eternal", "entropy_eyes", "entropy_clock", "entropy_heat"]
}

env.COMBAT_COMPONENTS.surging = {
     name: "Surge",
     slug: "surging",
     description: "'a show of maddening speeds';'frenzied by velzie's eye';'pick up the pace';'let us finish the play!'",
     help: "'charge';'awaken';'overcharge'",

     primary: {
          alterations: [["primary", "tormenting_delight"]],
          stats: {
               maxhp: 2
          }
     },
     secondary: {
          alterations: [["secondary", "back_to_stage"]],
          stats: {
               maxhp: 2
          }
     },
     utility: {
          alterations: [["evade", "velnits_lament"]], //surging surge lmao. like yeah thats what it does - note::velnits lamet use to be called surging surge
          stats: {
               maxhp: 2
          }
     },
     combatModifiers: ["surging_set","surging_pace","surging_second"]
}

env.COMBAT_COMPONENTS.stupidhorrible = {
	name: "StupidHorrible",
    slug: "stupidhorrible",
	description: "'idk man velzie just inspired me to make some madness';'and so i listened';'and now were here';'thanks velzie'",
    help: "'why would you do this';'bad decision making';'anything else would be better'",

    primary: {
        alterations: [["primary", "pin_pull"]],
        stats: {
            maxhp: 0
        }
    },
    secondary: {
        alterations: [["secondary", "brrrttrttt"]],
        stats: {
            maxhp: 0
        }
    },
    utility: {
        alterations: [["evade", "puncture_bomb"]], 
        stats: {
            maxhp: 0
        }
    },
    combatModifiers: ["stupidhorrible_bad", "btgothwar", "byothwar", "stupidhorrible_hard"]
}

env.COMBAT_COMPONENTS.smog = {
	name: "Smog",
	slug: "smog",
	description: "'As timely as the breaths taken';'As enraged as one could be'",
	help: "'Time';'Breathe';'Chatter'",

	primary: {
		alterations: [["primary", "smog_minute"]],
		stats: {
			maxhp: 3
		}
	},
	secondary: {
		alterations: [["secondary", "smog_haze"]],
		stats: {
			maxhp: 3
		}
	},
	utility: {
		alterations: [["evade", "smog_chatter"]],
		stats: {
			maxhp: 3
		}
	},
	combatModifiers: ["smog_cut", "smog_deep", "maddening_apathy"]
}

env.COMBAT_COMPONENTS.steel = {
	name: "Steel",
	slug: "steel",
	description: "'oddly harminous';'feels shrouded'",
	help: "'Tune';'Discipline';'Fortify'",
	primary: {
		alterations: [["primary", "steel_harmony"]/*,["ADD_WINDUP", "cresendo"]*/],
		stats: {
			maxhp: 3
		}
	},
	secondary: {
		alterations: [["secondary", "steel_scold"]],
		stats: {
			maxhp: 3
		}
	},
	utility: {
		alterations: [["evade","steel_stand"]]
	},
	combatModifiers: ["maddening_ignorance", "steel_false", "steel_sharp"]
}

/*
env.COMBAT_COMPONENTS.silicon = {
     name: "Silicon",
     slug: "silicon",
     description: "shhhh",
     help: "not here yet",

     primary: {
          alterations: [["primary"]],
          stats: {
               maxhp: 3
          }
     },
     secondary: {
          alterations: [["secondary"]],
          stats: {
               maxhp: 3
          }
     },
     utility: {
          alterations: [["evade"]],
          stats: {
               maxhp: 3
          }
     }
}
*/

/*
env.COMBAT_COMPONENTS.meat = {
     name: "Meat",
     slug: "meat",
     description: "shhhh",
     help: "not here yet",

     primary: {
          alterations: [["primary"]],
          stats: {
               maxhp: 3
          }
     },
     secondary: {
          alterations: [["secondary"]],
          stats: {
               maxhp: 3
          }
     },
     utility: {
          alterations: [["evade"]],
          stats: {
               maxhp: 3
          }
     }
}
*/

/*
env.COMBAT_COMPONENTS.sugar = {
     name: "Sugar",
     slug: "sugar",
     description: "shhhh",
     help: "not here yet",

     primary: {
          alterations: [["primary"]],
          stats: {
               maxhp: 3
          }
     },
     secondary: {
          alterations: [["secondary"]],
          stats: {
               maxhp: 3
          }
     },
     utility: {
          alterations: [["evade"]],
          stats: {
               maxhp: 3
          }
     }
}
*/

env.COMBAT_COMPONENTS.life = {
	name: "Life",
	slug: "life",
	description: "'New findings in unexpected places';'Worlds of life never seen';'Growth and spread'",
	help: "'growth';'trapped';'avoiding fate'",
	primary: {
		alterations: [["primary","life_seeding"]],
		stats: {
			maxhp: 2
		}
	},
	secondary: {
		alterations: [["secondary","life_ensnare"]],
		stats: {
			maxhp: 2
		}
	},
	utility: {
		alterations: [["evade","life_veilkstrider"]],
		stats: {
			maxhp: 2
		}
	},
	combatModifiers: ["life_healing", "life_transfer", "life_shared"]
}

env.COMBAT_COMPONENTS.graceful = {
	name: "Graceful",
	slug: "graceful",
	description: "'Cousinly religion taken to an extreme';'like the most maddened worshippers of velzie'",
	help: "",
	primary: {
		alterations: [["primary","graceful_taint"]],
		stats: {
			maxhp: 3
		}
	},
	secondary: {
		alterations: [["secondary","graceful_beacon"]],
		stats: {
			maxhp: 3
		}
	},
	utility: {
		alterations: [["evade","graceful_heed"]],
		stats: {
			maxhp: 3
		}
	},
	combatModifiers: ["graceful_safezone"]
}

env.COMBAT_COMPONENTS.kivcria = {
     name: "Kivcria",
     slug: "kivcria",
     description: "'Protection and safety';'well-meaning but paranoid'",
     help: "'sheer force';'devastation';'clearing sweeps'",

     primary: {
          alterations: [["primary","kivcria_claw"]], //rending claw
          stats: {
               maxhp: 5
          }
     },
     secondary: {
          alterations: [["secondary","kivcria_lure"]], //rotten lure
          stats: {
               maxhp: 5
          }
     },
     utility: {
          alterations: [["evade","kivcria_cyurtil"]], //same
          stats: {
               maxhp: 7
          }
     },
     combatModifiers: ["kivcria_wall", "kivcria_festering", "kivcria_tendril"] //wall-rot, rotten wounds, tendrils decay
}
//END OF HUMORS
//AUGMENTS
/*
+ Yknow, you dont really need to look at these, they all do the same layout and are generally hard to break.
+ that being said, mayber you might need to see these for move names?
*/
//ENTROPY
/*
[]^[]< my fucking god why did i not give them entropy_
*/
env.ACTOR_AUGMENTS.generic.third_law = {
	slug: "third_law",
	name: "3rd Law",
	image: "/img/sprites/combat/augs/cripple.gif",
	description: "'barrel into foes with great energy';'half beneficial effects for power'",
	alterations: [["momentum", "player_law"]],
	component: ["primary", "entropy"],
	cost: 2
}

env.ACTOR_AUGMENTS.generic.rig_field = {
	slug: "rig_field",
	name: "Rig Field",
	image: "/img/sprites/combat/augs/barrier.gif",
	description: "'rig the fight in your favour';'steal beneficial statuses from the foe'",
	alterations: [["level_statuses", "player_rig"]],
	component: ["secondary", "entropy"],
	cost: 2
}

env.ACTOR_AUGMENTS.generic.exp_overload = {
     slug: "exp_overload",
     name: "Exponential Overload",
     image: "/img/sprites/combat/augs/cripple.gif",
     description: "'focus movement into quick planned strikes';'improves striking'",
     alterations: [["wild_frenzy", "player_overload"]],
     component: ["utility", "entropy"],
     cost: 2
}
//SURGING
env.ACTOR_AUGMENTS.generic.showmanship = {
	slug: "showmanship",
	name: "Showmanship",
	image: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Surge/twotime.gif",
	description: "'SEE HOW THEY FALL!';'THEY THOUGHT THEY WERE LAUGHING DOWN AT US';'ONLY FOR US TO SWEEP THEIR KNEES!'",
	alterations: [["tormenting_delight", "player_show"]],
	component: ["primary", "surging"],
	cost: 2
}

env.ACTOR_AUGMENTS.generic.method_acting = {
	slug: "method_acting",
	name: "Method Acting",
	image: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Surge/twotime.gif",
	description: "'STARVED THIN AND CHITTIN SCATTERED';'YOU MUST CONTINUE!';'VELZIE DEMANDS! VELZIE COMMANDS!'",
	alterations: [["back_to_stage", "player_act"]],
	component: ["secondary", "surging"],
	cost: 2
}

env.ACTOR_AUGMENTS.generic.sacrificial_act = {
	slug: "sacrificial_act",
	name: "Sacrifical Act",
	image: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Surge/twotime.gif",
	description: "'LET THE SHOW GO FORTH! AGAIN!';'LET VELZIE VEIW OUR CRUDE IMMITATIONS';'FOR THAT WILL ONLY INSPIRE US MORE!'",
	alterations: [["velnits_lament", "player_sacri"]],
	component: ["utility", "surging"],
	cost: 2
}
//stupidhorrible
env.ACTOR_AUGMENTS.generic.stupidhorrible_kabluey = {
	slug: "stupidhorrible_kabluey",
	name: "KaBLLLUEYYYYYY!!!",
	image: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Stupidhorrible/demoflower.gif",
	description: "'oh boy the tf2 youtube channel just uploaded!'",
	alterations: [["pin_pull", "stupidhorrible_kaber"],
				["ADD", "stupidhorrible_claymore"],
				["ADD", "stupidhorrible_charge"],
				["ADD_WINDUP", "stupidhorrible_taunt"],
				["ADD_WINDUP", "stupidhorrible_blood"]],
	component: ["primary", "stupidhorrible"],
	cost: 3
}

env.ACTOR_AUGMENTS.generic.stupidhorrible_colonthree ={ 
	slug: "stupidhorrible_colonthree",
	name: "Realistic :3",
	image: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Stupidhorrible/colonthree.gif",
	description: "'Oh boy waht a nice GUN','i love GUN'",
	alterations: [["brrrttrttt", "stupidhorrible_colonthree"]],
	component: ["secondary", "stupidhorrible"],
	cost: 2
}

env.ACTOR_AUGMENTS.generic.stupidhorrible_buncture ={
	slug: "stupidhorrible_buncture",
	name: "Buncture Beam",
	image: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Stupidhorrible/huehuehue.gif",
	description: "'You may have gotten this far';'but its time for you to witness just a fraction of my power!'",
	alterations: [["puncture_bomb", "stupidhorrible_buncture"]],
	component: ["utility", "stupidhorrible"],
	cost: 2
}
//smog
env.ACTOR_AUGMENTS.generic.smog_hour = {
	slug: "smog_hour",
	name: "Winking Hand",
	image: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Smoke/SmokeHour.gif",
	description: "'drag their time out';'make them lose track'",
	alterations: [["smog_minute","smog_hour"]],
	component: ["primary","smog"],
	cost: 2
}

env.ACTOR_AUGMENTS.generic.smog_cloud = {
	slug: "smog_cloud",
	name: "Cloud",
	image: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Smoke/SmokeCloud.gif",
	description: "'create a veil';'avoid their worthless gaze'",
	alterations: [["smog_haze", "smog_cloud"]],
	component: ["secondary", "smog"],
	cost: 3
}

env.ACTOR_AUGMENTS.generic.smog_shout = {
	slug: "smog_shout",
	name: "Shout",
	image: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Smoke/SmokeShout.gif",
	description: "'Channel your voice';'show them your indifference'",
	alterations: [["smog_chatter", "smog_shout"]],
	component: ["utility", "smog"],
	cost: 2
}
//steel
env.ACTOR_AUGMENTS.generic.steel_scale = {
	slug: "steel_scale",
	name: "Scale",
	image: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Metal/MetalSymphony.gif",
	description: "'The instrument is tuned';'The music shall flow'",
	alterations: [["steel_harmony","steel_strong_harmony"]],
	component: ["primary", "steel"],
	cost: 2
}

env.ACTOR_AUGMENTS.generic.steel_punish = {
	slug: "steel_punish",
	name: "Punishment",
	image: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Metal/MetalHighNote.gif",
	description: "'They wont listen to your demands';'make them listen'",
	alterations: [["steel_scold", "steel_punish"]],
	component: ["secondary", "steel"],
	cost: 2
}

env.ACTOR_AUGMENTS.generic.steel_songbird = {
	slug: "steel_songbird",
	name: "Songbird",
	image: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Metal/MetalForte.gif",
	description: "'songbird, oh songbird, what is your song?';'I would love to hear it as you're the one who knows'",
	alterations: [["steel_stand", "steel_songbird"]],
	component: ["utility","steel"],
	cost: 2
}

env.ACTOR_AUGMENTS.generic.steel_angel = {
	slug: "steel_angel",
	name: "Guarding Angel",
	image: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Metal/MetalBurningWings.gif",
	description: "'The burnt angel's purpose unfolds';'A shield for all';'IMPORTANT: requires songbird to be active first'",
	alterations: [["steel_songbird","steel_angel"]],
	component: ["utility","steel"],
	//showIf: "editingMember.augments|steel_songbird",
	cost: 2
}
//life
env.ACTOR_AUGMENTS.generic.life_tuvazu = { //im smokiung that pack from tuvazu, seeing colors that science cant see. im on that ekivik shit, seeing a ton of fucking shapes (in the voice of they forgot i'm him guy)
	slug: "life_tuvazu",
	name: "Tuvazu imports",
	image: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Life/lifeTuvazu.gif",
	description: "'imported corrucystic sprouts directly from tuvazu';'melt away foes minds'",
	alterations: [["life_seeding","life_tuvazu"]],
	component: ["primary", "life"],
	cost: 2
}

env.ACTOR_AUGMENTS.generic.life_entomb = {
	slug: "life_entomb",
	name: "Entomb",
	image: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	description: "'teach the roots how to overtake';'let them rip into the shell'",
	alterations: [["life_ensnare","life_entomb"]],
	component: ["secondary", "life"],
	cost: 2
}

env.ACTOR_AUGMENTS.generic.life_intimidating = {
	slug: "life_intimidating",
	name: "Intimidating Stance",
	image: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	description: "'Modify your stance';'tower over your foes'",
	alterations: [["life_veilkstrider", "life_intimidating"]],
	component: ["utility", "life"],
	cost: 2
}
//kivkria
env.ACTOR_AUGMENTS.generic.kivcria_fairylight = {
	slug: "kivcria_fairylight",
	name: "Fairylight",
	image: "/img/sprites/combat/augs/cripple.gif",
	description: "'barrel into foes with great energy';'half beneficial effects for power'",
	alterations: [["kivcria_claw", "kivcria_fairylight"]],
	component: ["primary", "kivcria"],
	cost: 3
}

env.ACTOR_AUGMENTS.generic.kivcria_sporeburst = { //sporeburst
	slug: "kivcria_sporeburst",
	name: "Sporeburst",
	image: "/img/sprites/combat/augs/barrier.gif",
	description: "'Use stored secri-containing bulbs to seed enviroment','rot through friend and foe allike'",
	alterations: [["kivcria_lure", "kivcria_sporeburst"]],
	component: ["secondary", "kivcria"],
	cost: 2
}

env.ACTOR_AUGMENTS.generic.kivcria_cavernclear = { //tzuvtil
    slug: "kivcria_cavernclear",
    name: "Cavern-clear",
    image: "/img/sprites/combat/augs/cripple.gif",
    description: "'Experimental dull-pulse augmented sprayer';'used in an attempt to reclaim parts of Tuvazu from extreme parasite infection';'did not work'",
    alterations: [["kivcria_cyurtil", "kivcria_cavernclear"]],
    component: ["utility", "kivcria"],
    cost: 2
}

//END OF AUGMENTS

//COMBAT MODIFIERS
//entropy
env.MODIFIERS.entropy_eternal = {
	name: "Eternal Decay",
	getHelp: ()=> { return env.STATUS_EFFECTS.entropy_eternal.help },
	alterations: {
		all: [ ["STATUS", "entropy_eternal"] ]
	}
}

env.MODIFIERS.entropy_eyes = {
	name: "Shattered Eyes",
	getHelp: ()=> { return env.STATUS_EFFECTS.entropy_eyes.help },
	alterations: {
		all: [ ["STATUS", "entropy_eyes"] ]
	}
}

env.MODIFIERS.entropy_clock = {
	name: "Broken Clock",
	getHelp: ()=> {return env.STATUS_EFFECTS.entropy_clock.help},
	alterations: {
		all: [["STATUS", "entropy_clock"]]
	}
}

env.MODIFIERS.entropy_heat ={
	name: "Heat Death",
	getHelp: ()=> {return env.STATUS_EFFECTS.entropy_heat.help},
	alterations: {
		all: [["STATUS", "entropy_heat"]]
	}
}

//surging
env.MODIFIERS.surging_two = {
	name: "Two Time",
	getHelp: ()=> {return env.STATUS_EFFECTS.surging_two.help},
	alterations:{
		all: [["STATUS", "surging_two"]]
	}
}

env.MODIFIERS.surging_set = {
	name: "Temporary Setback",
	getHelp: ()=> {return env.STATUS_EFFECTS.surging_set.help},
	alterations:{
		all: [["STATUS", "surging_set"]]
	}
}

env.MODIFIERS.surging_pace = {
	name: "Double The Pace",
	getHelp: ()=> {return env.STATUS_EFFECTS.surging_pace.help},
	alterations:{
		all: [["STATUS", "surging_pace"]]
	}
}

env.MODIFIERS.surging_second = {
	name: "Second Act",
	getHelp: ()=> {return env.STATUS_EFFECTS.surging_second.help},
	alterations:{
		all: [["STATUS", "surging_second"]]
	}
}

//stupidhorrible
env.MODIFIERS.stupidhorrible_bad = {
	name: "GHATSHRGSGH BAD",
	getHelp: ()=> {return env.STATUS_EFFECTS.stupidhorrible_bad.help},
	alterations: {
		all: [["STATUS", "stupidhorrible_bad"]]
	}
}

env.MODIFIERS.btgothwar = {
	name: "BASH THAT GUY OVER THE HEAD WITH A ROCK",
	getHelp: ()=> {return env.STATUS_EFFECTS.btgothwar.help},
	alterations: {
		all: [["STATUS", "btgothwar"]]
	}
}

env.MODIFIERS.byothwar ={
	name: "BASH YOURSELF OVER THE HEAD WITH A ROCK",
	getHelp: ()=> {return env.STATUS_EFFECTS.byothwar.help},
	alterations: {
		all: [["STATUS", "byothwar"]]
	}
}

env.MODIFIERS.stupidhorrible_hard ={
	name: "Hard Mode",
	getHelp: ()=> {return env.STATUS_EFFECTS.stupidhorrible_hard.help},
	alterations: {
		all: [["STATUS", "stupidhorrible_hard"]]
	}
}

//smog
env.MODIFIERS.smog_cut = {
	name: "Cut Lungs",
	getHelp: ()=> {return env.STATUS_EFFECTS.smog_cut.help},
	alterations: {
		all: [["STATUS", "smog_cut"]]
	}
}

env.MODIFIERS.smog_deep ={
	name: "Deep Breath",
	getHelp: ()=> {return env.STATUS_EFFECTS.smog_deep.help},
	alterations: {
		all: [["STATUS", "smog_deep"]]
	}
}

env.MODIFIERS.maddening_apathy = {
	name: "Maddening Apathy",
	getHelp: ()=> {return env.STATUS_EFFECTS.maddening_apathy.help},
	alterations: {
		all: [["STATUS", "maddening_apathy"]]
	}
}

//steel
env.MODIFIERS.steel_false = {
	name: "False-skin",
	getHelp: ()=> {return env.STATUS_EFFECTS.steel_false.help},
	alterations: {
		all: [["STATUS", "steel_false"]]
	}
}

env.MODIFIERS.steel_sharp = {
	name: "Sharp Steps",
	getHelp: () => {return env.STATUS_EFFECTS.steel_sharp.help},
	alterations: {
		all: [["STATUS", "steel_sharp"]]
	}
}

env.MODIFIERS.maddening_ignorance = {
	name: "Maddening Ignorance",
	getHelp: ()=> {return env.STATUS_EFFECTS.maddening_ignorance.help},
	alterations: {
		all: [["STATUS", "maddening_ignorance"]]
	}
}

//life
env.MODIFIERS.life_healing = {
	name: "Healing Grounds",
	getHelp:()=> {return env.STATUS_EFFECTS.life_healing.help},
	alterations: {
		all: [["STATUS", "life_healing"]]
	}
}

env.MODIFIERS.life_transfer = {
	name: "Transfered Lifeforce",
	getHelp: ()=> {return env.STATUS_EFFECTS.life_transfer.help},
	alterations: {
		all: [["STATUS", "life_transfer"]]
	}
}

/*env.MODIFIERS.life_social = {
	name: "Social Parasite",
	getHelp: ()=> {return env.STATUS_EFFECTS.life_social.help},
	alterations: {
		all: [["STATUS", "life_social"]]
	}
}*/
//graceful
env.MODIFIERS.graceful_safezone = {
	name: "Graceful Safezone",
	getHelp: ()=> {return env.STATUS_EFFECTS.graceful_safezone.help},
	alterations: {
		all: [["STATUS", "graceful_safezone"],["ADD","parry"]]
	}
}
//kivcria
env.MODIFIERS.kivcria_wall = {
	name: "Wall Rot",
	getHelp: ()=> {return env.STATUS_EFFECTS.kivcria_wall.help},
	alterations: {
		all: [["STATUS", "kivcria_wall"]]
	}
}
env.MODIFIERS.kivcria_festering = {
	name: "Rotting Wound",
	getHelp: ()=> {return env.STATUS_EFFECTS.kivcria_festering.help},
	alterations: {
		all: [["STATUS", "kivcria_festering"]]
	}
}

env.MODIFIERS.kivcria_tendril = {
	name: "Tendril Decay",
	getHelp: ()=> {return env.STATUS_EFFECTS.kivcria_tendril.help},
	alterations: {
		all: [["STATUS", "kivcria_tendril"]]
	}
}
//END OF MODIFIERS

//STATUS EFFECTS
/*
+ Yeah these needed doccumenting
*/
//FFUCKING BASE GAME MODIFICATIONS
env.STATUS_EFFECTS.rot.events = {
	
	onTurn: function() {
		let percentage = Math.min(this.status.duration, 90) * 0.01
		let amt = Math.max(Math.floor(percentage * this.status.affecting.hp), 1 + (hasStatus(this.status.affecting, "global_escalation") ? env.crittaMap.getModQty("global_escalation") || 0 : 0))
		if(hasStatus(this.status.affecting, "kivcria_exposure")) {
			amt = amt / 2
		}
		console.log(percentage, "rotting for", amt)
		reactDialogue(this.status.affecting, 'puncture');
		combatHit(this.status.affecting, {amt, autohit: true, redirectable: false, runEvents: false});
		play('status', 0.75, 0.5);
	},
},
//entropy
env.STATUS_EFFECTS.entropy_eternal = {//THIS WAS THE HARDEST
	slug: "entropy_eternal",
	name: "Eternal Decay",
	passive: "modifier",
	beneficial: false,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Entropy/EternalDecay.gif",
	impulse: {type: "common", component: "entropy"},
	events: {
        
		onTurn: function() {
               /*
               Thank you adenator for making this code way before me!
               However, i think im gonna take a stab at making it doccumented.
               */
			target = this.status.affecting
			let statusPool = [] //List of valid status effects
			for (let i in env.STATUS_EFFECTS) { //takes the entire list of status effects (including modded)
				let statusData = env.STATUS_EFFECTS[i] //gives status to something comparable
				let usable = true //assuming that we can use it
				if(statusData.infinite) {usable = false} //in this case, moving infinite things could break something (glaring at windup)
				if(statusData.passive) {usable = false} //in this case, we dont really wanna shuffle passives.
				if(i.includes("global_")) {usable = false} //Globals are escalation and some fish modifiers.
				if(i == "misalign_weaken" || i == "misalign_stun" || i == "realign" || i == "realign_stun") {usable = false} //AbsurdFrame specific statuses
				if(i == "imperfect_reset") {usable = false} //Firmament looping status. you already know
				if(i == "redirection") {usable = false} //honestly i dont know if im unable to move redirection around. it has an origin so just exclude it already
				if(i == "entropy_eternal") {usable = false} //yeah so, Passive: true and Passive: "modifier" dont equal the exact same thing
				if(i == "unnatural_carapace") {usable = false}
				if(i == "channeling_flat"|| i == "coiling_flat"|| i == "rocket_bearer") {usable = false}
//                  console.log(i, usable)
				if(usable) statusPool.push(i) //if that shit usable? add it to the list
			}
	        let validEffects = [] //list for who the modifier is affecting on the current turn
	        target.statusEffects.forEach((status, i) => { //get their status list!
//                  console.log(status)
				if((!status.infinite || !status.passive) && (statusPool.includes(status.slug))) { //ignore passive, infinite, or anything not in the pool
                	validEffects.push(status.slug) //if upper part goes "yeah", put it in the list
                }
            })
//	          console.log(validEffects)
            if(validEffects.length) validEffects.forEach((Replace) => { //if the list is not nothing, we run a little thing for each effect.
                let selectedStatus = statusPool[Math.floor(Math.random()*statusPool.length)] //grab random status from the statusPool (we can set the max to be its length, and remove partial values)
//              console.log(selectedStatus)
                let chance = 0.2 //dont want it to be always
//                  console.log(Replace)
                if(Math.random() < chance) { //if the random hits that 20%?
                	sendFloater({ //let them know whats going on!
                        target: this.status.affecting,
                        type: "arbitrary",
                        arbitraryString: "DECAYED!",
                        isGood: false
                    })
					readoutAdd({
						message: `${target.name}'s ${Replace.name} gets decayed to ${selectedStatus.name}! (<span definition="${processHelp(this.status, {caps: true})}">${this.status.name}</span>)`, 
						name: "sourceless", 
						type: "sourceless combat minordetail",
						show: false,
						sfx: false
					})
		            if (hasStatus(target, Replace)) { //if the status didnt die or if it doesnt get rolled twice (i dunno if thats possible)
                    //slap it onto another person
		    	    	addStatus({target: target, origin: false, status: selectedStatus, length: Math.floor(hasStatus(target, Replace)), noReact: true})
                    //and then remove it from you!
			            removeStatus(target, Replace)
		            }     
                }
            })
        }
     },
     help: `most status effects have a 20% chance to become any other effects`
},

env.STATUS_EFFECTS.entropy_eyes = {
	slug: "entropy_eyes",
	name: "Shattered Eyes",
	passive: "modifier",
	beneficial: false,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Entropy/ShatteredEyes.gif",
	events: {
		onTurn: function(){
			target = this.status.affecting
			let statusPool = []
			for (let i in env.STATUS_EFFECTS) {
				let statusData = env.STATUS_EFFECTS[i]
				let usable = true
				if(statusData.infinite) {usable = false}
				if(statusData.passive) {usable = false}
				if(i.includes("global_")) {usable = false}
				if(i == "misalign_weaken" || i == "misalign_stun" || i == "realign" || i == "realign_stun") {usable = false}
				if(i == "imperfect_reset") {usable = false}
				if(i == "redirection") {usable = false}
				if(i == "entropy_eternal") {usable = false}
				if(i == "channeling_flat"|| i == "coiling_flat"|| i == "rocket_bearer") {usable=false}
				//console.log(i, usable)
				if(usable) statusPool.push(i)
			}
			let AllTargets = []
			env.rpg.enemyTeam.members.forEach((target) => {
				if (target => target.state != "dead" && target.state != "lastStand") {
					AllTargets.push(target)
				}
			})
			env.rpg.allyTeam.members.forEach((target)=> {
				if (target => target.state != "dead" && target.state != "lastStand") {
					AllTargets.push(target)
				}
			})
			let TakableEffects = []
			target.statusEffects.forEach((Deciding) => {
				if((!Deciding.infinite || !Deciding.passive) && (statusPool.includes(Deciding.slug))) {
					TakableEffects.push(Deciding.slug)
				}
			})
			if(TakableEffects.length) for (let i = 0; i <= Math.floor(Math.random()*TakableEffects.length); i++) {
				let Chance = 0.4
				if (Math.random() < Chance) {
					let TakingStat = TakableEffects.sample()
					let SendingTo = AllTargets.sample({noRepeat: true})
					sendFloater({
						target: this.status.affecting,
						type: "arbitrary",
						arbitraryString: "REFRACTED!",
						isGood: false
					})
					readoutAdd({
						message: `${target.name}'s ${TakingStat.name} gets refracted onto ${SendingTo.name}! (<span definition="${processHelp(this.status, {caps: true})}">${this.status.name}</span>)`, 
						name: "sourceless", 
						type: "sourceless combat minordetail",
						show: false,
						sfx: false
					})
					if (hasStatus(target, TakingStat)) {
						addStatus({target: SendingTo, status: TakingStat, length: Math.floor(hasStatus(target, TakingStat))})
						removeStatus(target, TakingStat)
					}
				}
			}
		}
	},
	help: `Effects have a 40% chance of being moved to another actor`
},

env.STATUS_EFFECTS.entropy_clock = {
	slug: "entropy_clock",
	name: "Broken Clock",
	passive: true,
	beneficial: false,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Entropy/BrokenClock.gif",
	events: {
		onTurn: function() {
			target = this.status.affecting
			let statusPool = []
			for (let i in env.STATUS_EFFECTS) {
				let statusData = env.STATUS_EFFECTS[i]
				let usable = true
				if(statusData.infinite) {usable = false}
				if(statusData.passive) {usable = false}
				if(i.includes("global_")) {usable = false}
				if(i == "misalign_weaken" || i == "misalign_stun" || i == "realign" || i == "realign_stun") {usable = false}
				if(i == "imperfect_reset") {usable = false}
				if(i == "redirection") {usable = false}
				if(i == "entropy_eternal") {usable = false}
				if(i == "channeling_flat"|| i == "coiling_flat"|| i == "rocket_bearer") {usable=false}
				//console.log(i, usable)
				if(usable) statusPool.push(i)
			}
			target.statusEffects.forEach((Deciding) => {
				let ChangeValue = randomInt(-2, 2)
				if((!Deciding.infinite || !Deciding.passive) && (statusPool.includes(Deciding.slug))) {
					if(Math.floor(hasStatus(target, Deciding.slug)) + ChangeValue < 0 ) {
						removeStatus(target, Deciding)
					} else {
						addStatus({target: target, status: Deciding.slug, length: ChangeValue})
					}
				}
			})
			reactDialogue(this.status.affecting, 'rot');
			play('status', 0.75, 0.5);
		},
	},
	help: "Each turn status effects can either increase or decreases from a range of -2 to 2 turns"
},

env.STATUS_EFFECTS.entropy_heat = {
	slug: "entropy_heat",
	name: "Heat Death",
	passive: true,
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Entropy/HeatDeath.gif",
	events: {
		onBeforeAction: function(context) {
			if(!context.settings.action.type.includes("target")) return;
			let Chance = 0.23
			// alter action maybe
			if(Math.random() < Chance) {
				context.settings.action = env.ACTIONS["entropy_burnout"]
				let subject = context.settings.user
				sendFloater({
					target: subject,
					type: "arbitrary",
					arbitraryString: "SPARKING",
					isGood: false,
					size: 2,
				})
			}
		},
	},
	help: 'Attacks have a 23% chance to become Burnout'
},

env.STATUS_EFFECTS.entropy_reaction = {
	slug: "entropy_reaction",
	name: "ACTION::REACT",
	passive: true,
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Entropy/eyew.gif",
	impulse: {type: "action", component: "entropy"},
	events: {
		onCrit: function({subject, target}) {
			let modifierPool = []
			for (let i in env.STATUS_EFFECTS) {
				let statusData = env.STATUS_EFFECTS[i]
				let usable = false
				if(statusData.passive) {usable = true}
				if(statusData.infinite || (statusData.slug != "windup")) {usable = true}
				if(i.includes("global_")||i.includes("malware_")||i.includes("fish_")) {usable = false}
				if(i == "misalign_weaken" || i == "misalign_stun" || i == "realign" || i == "realign_stun") {usable = false}
				if(i == "imperfect_reset") {usable = false}
				if(i == "redirection" || i == "ethereal" || i == "immobile" || i == "conjoined" || i == "permanent_hp") {usable = false}
				console.log(i, usable)
				if(usable) modifierPool.push(i)
			}
			console.log(modifierPool)
			let targetModifiers = []
			for (let i in subject.statusEffects) {
				let status = subject.statusEffects[i]
				console.log(status)
				if((status.infinite || status.passive || !i.includes("global_")) && (modifierPool.includes(status.slug))) {
					targetModifiers.push(status.slug)
				}
			}
			console.log(targetModifiers)
			if (targetModifiers.length) for(let i = 0; i<1; i++) {
				let Chance = 0.2
				if (Math.random() < Chance) {
					sendFloater({
						target: subject,
						type: "arbitrary",
						arbitraryString: "DRAINED!",
						isGood: false
					})
					let KillModif = targetModifiers.sample()
					removeStatus(subject, KillModif, {forceRemoveStatus: true})
				}
			}
		}
	},
	help: '20% chance to remove random status or impulse'
},

env.STATUS_EFFECTS.exp_over = { //This was what spurred this entire idea. The interaction between Bazruka and Wild Surge was interesting
	slug: "exp_over",
	name: "Exponential Overload",
	beneficial: true,
	infinite: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Entropy/Overclocked.gif",
	events: {
		onTurn: function() { 
			reactDialogue(this.status.affecting, 'surge') 
			delete this.status.justGotSurge
		},
		onAction: function({user, action, target, beingUsedAsync}) {
			if(this.status.justGotSurge || beingUsedAsync || ["incoherent_", "steer", "floor", "windup", "intrusive"].some(slugpart => action.slug.includes(slugpart)) ||
				 !action.type.includes("target") ||(!action.beneficial && target.team.name == "ally") ||(action.beneficial && target.team.name == "enemy")) return;
			setTimeout(()=>{
				sendFloater({
					target: user,
					type: "arbitrary",
					arbitraryString: "EXPONENTIAL SURGE!",
					size: 1.5,
				})
				readoutAdd({
					message: `${user.name} enters a deeply focused flurry! (<span definition="${processHelp(this.status, {caps: true})}">${this.status.name}</span>)`, 
					name: "sourceless", 
					type: "sourceless combat minordetail", 
					show: false,
					sfx: false
				})
				env.GENERIC_ACTIONS.teamWave({
					team: target.team,
					exec: (actor, i) => {
						if(actor == target) return; // we skip the original target
						env.GENERIC_ACTIONS.teamWave({
							team: target.team,
							exec: (actor, i) => {
								if(actor == target) return; // we skip the original target
								useAction(user, action, actor, {triggerActionUseEvent: false, beingUsedAsync: true, reason: "exponential overload"})
							}
						})
					}
				})
			}, 500)
			removeStatus(this.status.affecting, "exp_over")
			addStatus({target:user, status: 'stun', length: 2, noReact: true})
			addStatus({target:user, status: 'vulnerable', length: 3, noReact: true})
		},
		onCreated: function({statusObj}) {
			if(statusObj.slug == this.status.slug) this.status.justGotSurge = true
		},
	},
	help: "on next active targeted action, gain 2T:STUN and 3T:VULNERABLE, and use across the entire target team\nif beneficial, action used on all allies\nif offensive, action used on all foes"
},

env.STATUS_EFFECTS.burnout = {
	slug: "burnout",
	name: "Burnout",
	beneficial: false,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Entropy/Hhhotpocket.gif",
	events:{
		onCrit: function({subject, attack, originalEventTarget}) {
			removeStatus(this.status.affecting, 'burnout',{runEvents: false})
			sendFloater({
				target: this.status.affecting,
				type: "arbitrary",
				arbitraryString: "DOUSED!",
				size: 1,
			})
			readoutAdd({
				message: `${this.status.affecting.name} puts out the flame on their energy`, 
				name: "sourceless", 
				type: "sourceless combat minordetail",
				show: false,
				sfx: false
			})
		},
		onTurn: function({target}) {
			if (Math.floor(hasStatus(this.status.affecting, "burnout")) <= 2){
				addStatus({target: this.status.affecting, status: "hotpocket", length: 2})
			}
		},
	},
	help: 'Once status runs out, Explode.'
},

env.STATUS_EFFECTS.hotpocket = {
	slug: "hotpocket",
	name: "Imminent Death",
	beneficial: false,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Entropy/BSTRDIZEDHOTPOCKET.gif",
	events: {
		onTurn: function() {
			combatHit(this.status.affecting, {amt: 1000, autohit: true, redirectable: false})
		}
	},
	help: "Explode!"
},

env.STATUS_EFFECTS.entropy_call = {
	slug: "entropy_call",
	name: "Fragmented Call",
	passive: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Entropy/FragmentedCall.gif",
	impulse: {type: "common", component: "entropy"},
	grantsActions: ["entropy_call"],
	help: "Allows shell to call forth new targets"
},

env.STATUS_EFFECTS.entropy_invert = {
	slug: "entropy_invert",
	name: "Corrupted Signal",
	passive: true,
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Entropy/CorruptedSignal.gif",
	impulse: {type: "common", component: "entropy"},
	grantsActions: ["special_inversion"],
	help: "A corrupted memory of the call, maybe its still useful?"
},

//surging
env.STATUS_EFFECTS.surging_two = {
	slug: "surging_two",
	name: "Two Time",
	beneficial: true,
	passive: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Surge/twotime.gif",
	impulse: {type: "common",component: "surging"},
	events: {
		onCreated: function({statusObj}) {
			if(statusObj.slug == this.status.slug){
				addStatus({target: this.status.affecting, status: "surge", noReact: true, length: 1})
			}
		}
	},
	help: "gives surge on fight start."
},

env.STATUS_EFFECTS.surging_set = {
	slug: "surging_set",
	name: "Temporary Setback",
	passive: "modifier",
	beneficial: false,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Surge/twotime.gif",
	events:{
		onRemoveStatus: function({removingStatusName}) {
			if(removingStatusName == "regen") {
				addStatus({target: this.status.affecting, origin: false, status: "stun", length: 2})
			}
		},
	},
	help: "gain 2T:STUN when REGEN is removed"
},

env.STATUS_EFFECTS.surging_pace = {
	slug: "surging_pace",
	name: "Double The Pace",
	passive: true,
	beneficial: false,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Surge/twotime.gif",
	events: {
		onTurn: function() {
			addStatus({target: this.status.affecting, status: "surge", noReact: true, length: 1})
		}
	},
	help: "Gain SURGE each turn"
},

env.STATUS_EFFECTS.surging_story = {
	slug: "surging_story",
	name: "My Story Now",
	passive: true,
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Surge/MyStory.gif",
	impulse: {type: "common", component: "surging"},
	events:{
		onAction: function({action}) {
			let actionSlug = action.slug
			let user = this.status.affecting
			if (user.actions.length> 2) {
				let utility = env.ACTIONS[user.actions[2]]
				if(!actionSlug == utility.slug) return;
				addStatus({target: user, status: "surge", length: 1})
			}
		}
	},
	help: "when using UTILITY ACTION gain SURGE"
},

env.STATUS_EFFECTS.surging_improvised = {
	slug: "surging_improvised",
	name: "ACTION:: IMPROVISED SCRIPTWRITING",
	passive: true,
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Entropy/eyew.gif",
	inUse: false,
	impulse: {type: "action", component: "surging"},
	events: {
		onTurn: function() {
			env.STATUS_EFFECTS.surging_improvised.inUse = false //tell the game it hasn't been used yet
		},
		GLOBAL_onRemoveStatus: function({subject, origin, beneficial,removingStatusName}){
			if(removingStatusName = "surge") {
				if(env.STATUS_EFFECTS.surging_improvised.inUse) return
				else env.STATUS_EFFECTS.surging_improvised.inUse = true
				let user = this.status.affecting
				if(beneficial || user.team.members.includes(subject) || user.state == "dead" || !user.actions[2] || hasStatus(user, "fear")) return;
				let utility = env.ACTIONS[user.actions[2]]

				setTimeout(()=>{
                    sendFloater({
                        target: user,
                        type: "arbitrary",
                        specialClass: "action",
                        arbitraryString: `IMPROVISED SCRIPWRITING::${utility.name}`,
                        size: 1.5,
                    })

                    readoutAdd({
                        message: `${user.name} improvizes alongside!`, 
                        name: "sourceless", 
                        type: "sourceless combat minordetail", 
                        show: false,
                        sfx: false
                    })
                    
                    useAction(user, utility, subject, {triggerActionUseEvent: false, beingUsedAsync: true, reason: "Improvised Scripwriting"})
                }, 500)
			}
		}
	},
	help: "When actor utilizes a surge, the shell this is on uses its utility"
},

env.STATUS_EFFECTS.surging_second = {
	slug: "surging_second",
	name: "Second Act",
	passive: "modifier",
	beneficial: false,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Surge/twotime.gif",
	events: {
		GLOBAL_onDeath: function({attack}) {
            let hitpow = Math.floor(attack / 2)
            if(hitpow > 0) {
                let validTargets = env.rpg.turnOrder.filter(actor => (actor != this.status.affecting) && (actor.state != "dead"))
                setTimeout(()=>{
                    play("chomp")
                    let target = validTargets.sample()

                    combatHit(target, {amt: hitpow, autohit: true, redirectable: false, runEvents: false});

                    sendFloater({
                        target,
                        type: "arbitrary",
                        arbitraryString: "Second Act!",
                    })
                    
                    readoutAdd({
                        message: `${target.name} is hit by the second act for ${hitpow} HP! (<span definition="${processHelp(this.status, {caps: true})}">${this.status.name}</span>)`, 
                        name: "sourceless", 
                        type: "sourceless combat minordetail", 
                        show: false,
                        sfx: false
                    })
                }, env.ADVANCE_RATE * 0.2)
            }
        },
	},
	help: "'on actor death, give half damage to random actor'"
},

env.STATUS_EFFECTS.fated_surging = {
	slug: "fated_surging",
	name: "FATED::SURGE",
	passive: true,
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Surge/FatedSurging.gif",
	impulse: {
		type: "fated",
		component: "surging",
	},
	events: {
		onCreated: function({statusObj}) {
			if(statusObj.slug != this.status.slug) return;
			
			this.status.power = 0
			if(this.status.affecting?.member?.components) for (const [slotName, slotContents] of Object.entries(this.status.affecting.member.components)) {
				if(slotContents == "surging") this.status.power++
			}

			if(this.status.affecting?.member?.augments) for (const augmentSlug of this.status.affecting.member.augments) {
				let augment = env.ACTOR_AUGMENTS.generic[augmentSlug]
				if(augment?.component) if(augment.component[1] == "surging") this.status.power += 2
			}
		},
		
		onTurn: function(target) {
			if (Math.random() < (0.15+(0.15*this.status.power))) {
				if (Math.floor(hasStatus(target, "stun"))) {
				removeStatus(target, "stun")
				}
			}
			if (Math.random() < (0.09+(0.09*this.status.power))) {
				addStatus(target, "wild_surge")
			}
		}
	},
	help: "'per humor of SURGE on this shell: 15% chance to remove stun, 9% chance to add wild surge'"
},
//stupidhorrible
env.STATUS_EFFECTS.stupidhorrible_bad = {
	slug: "stupidhorrible_bad",
	name: "GHATSHRGSGH BAD",
	passive: true,
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Stupidhorrible/cakedupvolcano.gif",
	impulse: {type: "common", component: "stupidhorrible"},
	events: {
		onAddStatus: function({statusObj}) {
        	if(!statusObj.infinite && statusObj.slug == "destabilized"){
            	statusObj.duration = 1;
            	statusObj.infinite = true;
        	}
        },
	},
	help: "'Destabilized becomes infinite'"
},

env.STATUS_EFFECTS.btgothwar ={
	slug: "btgothwar",
	name: "BTGOTHWAR",
	passive: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Stupidhorrible/dwaynerock.gif",
	impulse: {type: "common", component: "stupidhorrible"},
	grantsActions:["btgothwar"],
	help: "'grants one action.';'The action to BEAT THAT GUY OVER THE HEAD WITH A ROCK'"
},

env.STATUS_EFFECTS.byothwar = {
	slug: "byothwar",
	name: "Cain Instinct",
	passive: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Stupidhorrible/dwaynerock.gif",
	grantsActions: ["btgothwar"],
	AbleInstinctFollowed: false,
	events: {
		onTurn: function() {
			env.STATUS_EFFECTS.byothwar.AbleInstinctFollowed = false
		},
		onBeforeAction: function(context) {
			if (context.action.type.includes("target") && !context.action.beneficial) {
				if (context.settings.target != this.status.affecting) {
					OriginalTarget = context.settings.target
				}
				if (env.STATUS_EFFECTS.byothwar.AbleInstinctFollowed) {
					context.settings.target = OriginalTarget
					env.STATUS_EFFECTS.byothwar.AbleInstinctFollowed = false
				} else {
					if (Math.random() < 0.3) {
						context.settings.target = this.status.affecting
						env.STATUS_EFFECTS.byothwar.AbleInstinctFollowed = true
					}
				}
			}
		}
	},
	help: "'gives BTGOTHWAR and has a 30% chance to direct target attacks onto the user each attack'"
},

env.STATUS_EFFECTS.stupidhorrible_hard = {
	slug: "stupidhorrible_hard",
	name: "Hard Mode",
	passive: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Stupidhorrible/hardmode.gif",
	impulse: {type: "common", component: "stupidhorrible"},
	events: {
		onBeforeAction: function(context) {
			
			if(Math.random() < 0.35 && !context.settings.action.itemAction) {
				let ActionSwap = ["evade", "skitter", "malfunction", "attack", "shell", "cower", "btgothwar"]
				let ChosenAction = ActionSwap.sample()
				context.settings.action = env.ACTIONS[ChosenAction]
				let subject = context.settings.user

				sendFloater({
					target: subject,
					type: "arbitrary",
					arbitraryString: "SCRAMBLED!",
					beneficial: false,
					size: 2,
				})

				readoutAdd({
					message: `${subject.name}'s action gets scrambled to ${ChosenAction}! (<span definition="${processHelp(this.status, {caps: true})}">${this.status.name}</span>)`, 
					name: "sourceless", 
					type: "sourceless combat minordetail",
					show: false,
					sfx: false
				})
			}
		}
	},
	help: "'all actions have a 35% chance of becoming one of a random seven less powerful actions'"
},

env.STATUS_EFFECTS.stupidhorrible_death = {
	slug: "stupidhorrible_death",
	name: "ACTION::SWAWS",
	passive: true,
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Stupidhorrible/death_sentence.gif",
	impulse: {type: "action", component: "stupidhorrible"},
	events: {
		/*GLOBAL_onDeath: function({originalEventTarget}) {
			let subject = originalEventTarget
            let user = this.status.affecting
			if (user.team.name == subject.team.name) {
				let primary = env.ACTIONS[user.actions[0]]
				let utility = env.ACTIONS[user.actions[2]]
				let targetTeam
				switch(user.team.name) {
					case "ally": targetTeam = env.rpg.enemyTeam; break;
					case "enemy": targetTeam = env.rpg.allyTeam; break;
				}

				env.GENERIC_ACTIONS.teamWave({
					team: targetTeam,
					exec: (actor, i) => {
						if(actor == target) return; // we skip the original target
						useAction(user, primary, actor, {triggerActionUseEvent: false, beingUsedAsync: true, reason: "death sentence"})
					}
				})
				if (!utility.type.includes("special")) return;
				useAction(user, utility, subject, {triggerActionUseEvent: false, beingUsedAsync: true, reason: "death sentence"})
			}
		}*/
		onEvade: function({subject, target, attack, originalEventTarget}) {
			let user = this.status.affecting
			if(
				!user.enemyTeam.members.includes(subject) || 
				subject.state == "dead" ||
				user.state == "dead" ||
				target == !user ||
				hasStatus(user, "fear")
			) return;

			let stolenAction = actionSettings.action.slug //stole this from narra. because there was no way id figure this shit out
			newAction = env.ACTIONS[stolenAction]
			if(this.status.affecting.team.name == "ally" && this.status.affecting.actions.includes(stolenAction)) return // ally action piling safeguard
			else this.status.affecting.actions.push(stolenAction) // we let enemies collect multiple of the same action for the funny

			let primary = env.ACTIONS[user.actions[0]]

			setTimeout(()=>{
				useAction(this.status.affecting, primary, subject, {triggerActionUseEvent: false, beingUsedAsync: true, reason: "retaliation"})
            
				sendFloater({
					target: this.status.affecting,
					type: "arbitrary",
					specialClass: "action",
					arbitraryString: `REMIX::${primary.name.toUpperCase()}`,
					size: 1.5,
				})

				readoutAdd({
					message: `${user.name} mirrors ${subject.name}'s voice! (<span definition="${processHelp(this.status, {caps: true})}">${this.status.name}</span>)`, 
					name: "sourceless", 
					type: "sourceless combat minordetail", 
					show: false,
					sfx: false
				})
			}, env.ADVANCE_RATE * 0.2)
		},
		GLOBAL_onAction: function({target, user, hit, reason, action, beingUsedAsync, originalEventTarget}) {
			if(
				hit != "crit" ||
				this.status.affecting.state == "dead" || 
				target == !this.status.affecting || 
				originalEventTarget == this.status.affecting ||
				this.status.affecting.enemyTeam.members.includes(target) || 
				this.status.affecting.team.members.includes(user) || 
				target.state == "dead" ||
				this.status.turnUsage ||
				!this.status.affecting.actions[1] ||
				hasStatus(target, "fear")
			) return;

			let stolenAction = actionSettings.action.slug
                newAction = env.ACTIONS[stolenAction]
				if(this.status.affecting.team.name == "ally" && this.status.affecting.actions.includes(stolenAction)) return // ally action piling safeguard
				else this.status.affecting.actions.push(stolenAction) // we let enemies collect multiple of the same action for the funny


			this.status.turnUsage = true
			let secondary = env.ACTIONS[this.status.affecting.actions[0]]

			setTimeout(()=>{
				useAction(this.status.affecting, secondary, secondary.beneficial ? target : user, {triggerActionUseEvent: false, beingUsedAsync: true, reason: "support"})

				sendFloater({
					target: this.status.affecting,
					type: "arbitrary",
					specialClass: "action",
					arbitraryString: `REMIX::${primarry.name.toUpperCase()}`,
					size: 1.5,
				})
                
				readoutAdd({
					message: `${this.status.affecting.name} mirrors ${user.name}'s voice! (<span definition="${processHelp(this.status, {caps: true})}">${this.status.name}</span>)`, 
					name: "sourceless", 
					type: "sourceless combat minordetail",
					show: false,
					sfx: false
				})
			}, env.ADVANCE_RATE * 0.5)
		}
	},
	help: "on evade or recieving a crit, steal the attack and retaliate with primary"
},

env.STATUS_EFFECTS.fated_stupidhorrible = {
	slug: "fated_stupidhorrible",
	name: "FATED::STUPIDHORRIBLE",
	passive: true,
	beneficial: true,
	outgoingCrit: 0,
	outgoingMult: 0,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Stupidhorrible/FatedStupidhorrible.gif",
	impulse: {
		type: "fated",
		component: "stupidhorrible",
	},
	events: {
		onCreated: function({statusObj}) {
			if(statusObj.slug != this.status.slug) return;
			
			this.status.power = 0
			if(this.status.affecting?.member?.components) for (const [slotName, slotContents] of Object.entries(this.status.affecting.member.components)) {
				if(slotContents == "stupidhorrible") this.status.power++
			}

			if(this.status.affecting?.member?.augments) for (const augmentSlug of this.status.affecting.member.augments) {
				let augment = env.ACTOR_AUGMENTS.generic[augmentSlug]
				if(augment?.component) if(augment.component[1] == "stupidhorrible") this.status.power += 2
			}
			this.status.outgoingCrit = -0.2 * this.status.power
			this.status.outgoingMult = Math.floor(0.2*this.status.power)
		},
	},
	help: "Per humor of stupidhorrible on this shell: reduce crit chance, but increase power'"
},
//smog
env.STATUS_EFFECTS.smog_scream = {
	slug: "smog_scream",
	name: "Scream",
	passive: true,
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Smoke/SmokeShout.gif",
	impulse: {type: "common", component: "smog"},
	help: "Boosts shout, lets you call for a threatening voice"
},

env.STATUS_EFFECTS.smog_patch = {
	slug: "smog_patch",
	name: "Patchwork Lungs",
	passive: true,
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Smoke/SmokePatch.gif",
	impulse: {type: "common", component: "smog"},
	events: {
		onRemoveStatus: function({removingStatusName}) {
			if (removingStatusName == "puncture") {
				addStatus({target: this.status.affecting, status: "focused", length: 2})
			}
		}
	},
	help: "when PUNCTURE removed, gain FOCUSED"
},

env.STATUS_EFFECTS.smog_deep = {
	slug: "smog_deep",
	name: "Deep Breath",
	passive: true,
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Smoke/SmogDeep.gif",
	impulse: {type: "common", component: "smog"},
	loopCount: 100,
	events: {
		onTurn: function() {
			env.STATUS_EFFECTS.smog_deep.loopCount = 100
		},
		onAddStatus: function({statusObj}) {
			if (env.STATUS_EFFECTS.smogDeep > 0) {
				if (!statusObj.passive && statusObj.beneficial && statusObj.slug != "focused") {
					addStatus({target: this.status.affecting, status: "focused", length: 2})
					env.STATUS_EFFECTS.smog_deep.loopCount = env.STATUS_EFFECTS.smog_deep.loopCount - 1
				}
			}
		}
	},
	help: "When gaining a beneficial effect, gain 2T:FOCUSED"
},

env.STATUS_EFFECTS.smog_cut = {
	slug: "smog_cut",
	name: "Cut Lungs",
	passive: true,
	beneficial: false,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Smoke/SmokeCut.gif",
	events: {
		onRemoveStatus: function({removingStatusName}) {
			if (removingStatusName == "focused") {
				addStatus({target: this.status.affecting, status: "puncture", length: 2})
			}
		}
	},
	help: "When FOCUSED removed, gain 2T:PUNCTURE"
},

env.STATUS_EFFECTS.maddening_apathy = {
	slug: "maddening_apathy",
	name: "Maddening Apathy",
	passive: true,
	beneficial: false,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Smoke/SmokeApathy.gif",
	events: {
		onBeforeAction: function(context) {
			if (context.action.type.includes("target") && context.action.beneficial){
				context.settings.target = context.user
			}
		},
		onTurn: function() {
			let summonFoe = ["critta_spawner_bee","critta_spawner_bee","critta_spawner_bee","dull_container"]
			if (this.status.affecting.team.name == "ally") {
				if (Math.random() < 0.175) {
					if (Math.random() < 0.5) {
						if (Math.random() < 0.03) {
							midCombatActorAdd(env.rpg.enemyTeam, summonFoe.sample(), 'left')
						}
						midCombatActorAdd(env.rpg.enemyTeam, summonFoe.sample(), 'left')
					} else {
						if (Math.random() < 0.03) {
							midCombatActorAdd(env.rpg.enemyTeam, summonFoe.sample(), 'right')
						}
						midCombatActorAdd(env.rpg.enemyTeam, summonFoe.sample(), 'right')
					}
				}
			}
		}
	},
	help: "Each Ally turn: 17.5% chance to summon enemy, All positive target actions will be rerouted to the user."
},

env.STATUS_EFFECTS.rainy_day = {
	slug: "rainy_day",
	name: "Rainy Day",
	passive: true,
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Smoke/SmokeRainy.gif",
	grantsActions: ["directional_rain"],
	impulse: {type: "common", component: "smog"},
	help: "'Grants move DIRECTIONAL RAIN'"
},

env.STATUS_EFFECTS.clouded_lungs = {
	slug: "clouded_lungs",
	name: "Clouded Lungs",
	passive: false,
	beneficial: false,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Smoke/SmokeCloudy.gif",
	events: {
		onBeforeAction: function(context) {
			let pow = hasStatus(this.status.affecting,"clouded_lungs")
			if (Math.random() < (0.2 + (pow *0.02))) {
				context.settings.action = env.ACTIONS["cough"]
			}
		}
	},
	help: "'actions have a chance to become COUGH, the chance scales with the ammount applied'"
},

env.STATUS_EFFECTS.ashen_hands = {
	slug: "ashen_hands",
	name: "ACTION::ASHEN HANDS",
	passive: true,
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	inUse: false,
	impulse: {type: "action", component: "smog"},
	events:{
		onTurn: function() {
			env.STATUS_EFFECTS.ashen_hands.inUse = false
		},
		onCrit: function({subject,origin,attack, beneficial}) {
			if (env.STATUS_EFFECTS.ashen_hands.inUse) return
			else env.STATUS_EFFECTS.ashen_hands.inUse = true
			let pow = hasStatus(this.status.affecting, "regen")
			let user = this.status.affecting
			if(beneficial || user.team.members.includes(subject) || user.state == "dead" || !user.actions[2] || hasStatus(user, "fear")) return;
			let action = env.ACTIONS[user.actions[2]]
			setTimeout(()=>{
				sendFloater({
					target: user,
					type: "arbitrary",
					specialClass: "action",
					arbitraryString: `ASHEN HANDS::${action.name}`,
					size: 1.5,
				})

				readoutAdd({
					message: `${user.name} Swings with burning hands!`, 
					name: "sourceless", 
					type: "sourceless combat minordetail", 
					show: false,
					sfx: false
				})
				for (let i = 1; i <= pow; i++) {
					useAction(user, action, subject, {triggerActionUseEvent: false, beingUsedAsync: true, reason: "ashen Hands"})
				}
			}, 250)
		}
	},
	help: "'On Crit, use SECONDARY on the target the same amount of turns the shell has regen'"
},

env.STATUS_EFFECTS.fated_smog = {
	slug: "fated_smog",
	name: "FATED::SMOG",
	passive: true,
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Smoke/smogEye.gif",
	impulse: {type: "fated", component: "smog"},
	events: {
		onCreated: function({statusObj}) {
			if(statusObj.slug != this.status.slug) return;
			
			this.status.power = 0
			if(this.status.affecting?.member?.components) for (const [slotName, slotContents] of Object.entries(this.status.affecting.member.components)) {
				if(slotContents == "smog") this.status.power++
			}

			if(this.status.affecting?.member?.augments) for (const augmentSlug of this.status.affecting.member.augments) {
				let augment = env.ACTOR_AUGMENTS.generic[augmentSlug]
				if(augment?.component) if(augment.component[1] == "smog") this.status.power += 2
			}
		},
		onTurn: function() {
			if (Math.random() < (0.09 + (0.09 * this.status.power))) {
				addStatus({target: this.status.affecting, status: "regen", length: 2})
			}
		}
	},
	help: "'per humor of SMOG on this shell: 9% chance to gain 2T:regen'"
},
//steel
env.STATUS_EFFECTS.muted = {
	slug: "muted",
	name: "Muted",
	beneficial: false,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	events: {
		onBeforeAction: function(context) {
			if (Math.random() < 0.23) {
				advanceTurn()
			}
		} 
	},
	help: "'using an action has a 23% chance to do nothing'"
},

env.STATUS_EFFECTS.burning_wings = {
	slug: "burning_wings",
	name: "Burning Wings",
	passive: true,
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Metal/MetalBurningWings.gif",
	help: "Convert FOCUSED to EVASION",
	impulse: {type: "common", component: "steel"},
	events: {
		onBeforeAddStatus: function(context) {
			if(context.status == "focused") context.status = "evasion"
		},
	}
},

env.STATUS_EFFECTS.forte = {
	slug: "forte",
	name: "Forte",
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Metal/MetalForte.gif",
	help: "'repeat next action for the amount of Forte';'i know its supposed to be louder and thus whatever the speedup symbol is but fuck it'", //[]^[] < reading this what the fuck was i on
	events: {
		onTurn: function() { //this only fires once its the shells turn again, so maybe no errors here?
			reactDialogue(this.status.affecting, 'surge') 
			delete this.status.justGotSurge
		},
		onAction: function({user, action, target, beingUsedAsync}) { //somehow something is missing from this part to stop it when summoned
			if(this.status.justGotSurge || beingUsedAsync || ["incoherent_", "steer", "floor", "windup", "intrusive"].some(slugpart => action.slug.includes(slugpart)) ||
				!action.type.includes("target") ||(!action.beneficial && target.team.name == "ally") ||(action.beneficial && target.team.name == "enemy")) return;
			let LoopCount = Math.floor(hasStatus(this.status.affecting, "forte"))
			removeStatus(this.status.affecting, "forte")
			if (action.slug != "steel_strong_harmony") {
				for (i = 0; i < LoopCount; i++) {
					setTimeout(()=>{
						sendFloater({
							target: user,
							type: "arbitrary",
							arbitraryString: "FORTE",
							size: 1.5,
						})
						readoutAdd({
							message: `${user.name} goes again! (<span definition="${processHelp(this.status, {caps: true})}">${this.status.name}</span>)`, 
							name: "sourceless", 
							type: "sourceless combat minordetail", 
							show: false,
							sfx: false
						})
						useAction(user, action, target, {triggerActionUseEvent: false, beingUsedAsync: true, reason: "forte"})
					}, 500)
				}
			} else {
				addStatus({target: this.status.affecting, status: "forte", lenght: (LoopCount-8)})
				for (i = 0; i < 8; i++) {
					setTimeout(()=>{
						sendFloater({
							target: user,
							type: "arbitrary",
							arbitraryString: "FORTE",
							size: 1.5,
						})
						readoutAdd({
							message: `${user.name} goes again! (<span definition="${processHelp(this.status, {caps: true})}">${this.status.name}</span>)`, 
							name: "sourceless", 
							type: "sourceless combat minordetail", 
							show: false,
							sfx: false
						})
						useAction(user, action, target, {triggerActionUseEvent: false, beingUsedAsync: true, reason: "forte"})
					}, 500)
				}
			}
		},
		onCreated: function({statusObj}) { //this fires when forte is added so there shouldnt be errors here
                if(statusObj.slug == this.status.slug) this.status.justGotSurge = true
		},
	}
},

env.STATUS_EFFECTS.high_note = {
	slug: "high_note",
	name: "High Note",
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Metal/MetalHighNote.gif",
	outgoingCrit: 0,
	incomingCrit: 0,
	events: {
		onAction: function() {
			outgoingCrit = 2
			incomingCrit = 2
		}
	},
	help: "200% incoming and outgoing crits"
},

env.STATUS_EFFECTS.tuned = {
	slug: "tuned",
	name: "Tuned",
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Metal/MetalTuned.gif",
	events: {
		onTurn: function() {
			let modifierPool = []
			for (let i in env.STATUS_EFFECTS) {
				let statusData = env.STATUS_EFFECTS[i]
				let usable = true
				if(statusData.passive) {usable = false}
				if(statusData.infinite || (statusData.slug == "windup")) {usable = false}
				if(statusData.slug.includes("global_")||statusData.slug.includes("malware_")||statusData.slug.includes("fish_")) {usable = false}
				if(statusData.slug == "misalign_weaken" || statusData.slug == "misalign_stun" || statusData.slug == "realign" || statusData.slug == "realign_stun") {usable = false}
				if(statusData.slug == "imperfect_reset") {usable = false}
				if(statusData.slug == "unnatural_carapace") {usable = false}
				if(statusData.slug == "redirection" || statusData.slug == "ethereal" || statusData.slug == "immobile" || statusData.slug == "conjoined" || statusData.slug == "permanent_hp") {usable = false}
				if(!statusData.beneficial) {usable = false}
				if(statusData.slug == 'tuned') {usable = false}
				if(statusData.slug == "undefined") {usable = false}
				console.log(statusData, usable)
				if(usable) modifierPool.push(statusData.slug)
			}
			let AddedStat = modifierPool.sample()
			addStatus({target: this.status.affecting, status: AddedStat, length: 3})
		},
	},
	help: "Add a random beneficial status each turn this effect is present"
},

env.STATUS_EFFECTS.vibrato = {
	slug: "vibrato",
	name: "Vibrato",
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Metal/MetalBurningWings.gif",
	events: {
		onTurn: function () {
			this.status.affecting.bp = this.status.affecting.bp + 2
		}
	},
	help: "gives actor +2BP each turn"
},

env.STATUS_EFFECTS.discipline = {
	slug: "discipline",
	name: "Discipline",
	beneficial: false,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	help: "'Lose 1hp when using primary or secondary'",
	oppoite: "rebel",
	events: {
		onAction: function({user, action}) {
			if (user.actions.indexOf(action.slug) < 2) {
				combatHit(user, {amt: 1, autohit: true, redirectable: false})
			}
		}
	},
},

env.STATUS_EFFECTS.steel_true = {
	slug: "steel_true",
	name: "True Skin",
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	help: "'Regen with BP is doubled'",
	passive: true,
	impulse: {type: "common", component: "steel" },
	events: {
		onTurn: function () {
			if (this.status.affecting.bp > 0 && hasStatus(this.status.affecting, "regen")) {
				combatHit(this.status.affecting, {amt: -1, beneficial: true, type: "hp"});
			}
		}
	}
},

env.STATUS_EFFECTS.steel_care = {
	slug: "steel_care",
	name: "Careful Steps",
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	help: "'Actor cannot be punctured when they have evasion'",
	passive: true,
	impulse: {type: "common", component: "steel"},
	events: {
		onBeforeAddStatus: function(context) {
			if (hasStatus(this.status.affecting, "evasion") && context.status == "puncture") {
				context.noAdd = true
			}
		}
	}
},

env.STATUS_EFFECTS.steel_false = {
	slug: "steel_false",
	name: "Flase-skin",
	beneficial: false,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	help: "'Actor cannot gain regen without BP'",
	passive: true,
	events: {
		onBeforeAddStatus: function(context) {
			if(this.status.affecting.bp == 0 && context.status == "regen") {
				context.noAdd = true
			}
		}
	}
},

env.STATUS_EFFECTS.steel_sharp = {
	slug: "steel_sharp",
	name: "Sharp Steps",
	beneficial: false,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	help: "'Actor has a chance to be punctured while they have evasion'",
	passive: true,
	events: {
		onTurn: function() {
			if (hasStatus(this.status.affecting, "evasion")){
				if (Math.random < 0.2) {
					addStatus({target: this.status.affecting, status: "puncture", length: 3})
				}
			}
		}
	}
},

env.STATUS_EFFECTS.maddening_ignorance = {
	slug: "maddening_ignorance",
	name: "Maddening Ignoarnce",
	beneficial: false,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	help: "Focus is unable to be applied. Effects have a chance to disappear.",
	passive: true,
	events: {
		onBeforeAddStatus: function(context) {
			if (context.status == "focused") {
				context.noAdd = true
			}
		},
		onTurn: function() {
			target = this.status.affecting
			let statusPool = []
			for (let i in env.STATUS_EFFECTS) {
				let statusData = env.STATUS_EFFECTS[i]
				let usable = true
				if(statusData.infinite) {usable = false}
				if(statusData.passive) {usable = false}
				if(i.includes("global_")) {usable = false}
				if(i == "misalign_weaken" || i == "misalign_stun" || i == "realign" || i == "realign_stun") {usable = false}
				if(i == "imperfect_reset") {usable = false}
				if(i == "redirection") {usable = false}
				if(i == "entropy_eternal") {usable = false}
				if(i == "channeling_flat"|| i == "coiling_flat"|| i == "rocket_bearer") {usable=false}
				//console.log(i, usable)
				if(usable) statusPool.push(i)
			}

			let AffectedEffects = []
			target.statusEffects.forEach((status, i) => {
				if((!status.infinite || !status.passive) && (statusPool.includes(status.slug))) {
					AffectedEffects.push(status.slug)
				}
			})

			let RemovalTarg = AffectedEffects.sample()
			if (Math.random < 0.30) {
				removeStatus(this.status.affecting, RemovalTarg)
			}
		}
	}
},

env.STATUS_EFFECTS.rebel = { //might change this up a bit later, feels a bit weak tbh
	slug: "rebel",
	name: "Rebel",
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	help: "'Gives actor FOCUSED'",
	opposite: "discipline",
	events: {
		onTurn: function() {
			addStatus(this.status.affecting, "focused")
		}
	}
},

env.STATUS_EFFECTS.sunny_day = {
	slug: "sunny_day",
	name: "Sunny Day",
	beneficial: true,
	infinite: true,
	passive: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	impulse: {type: "common", component: "steel"},
	help: "Grants move SHINY REFLECTION",
	grantsActions: ["shiny_reflection"]
},

env.STATUS_EFFECTS.glow = {
	slug: "glow",
	name: "Glow",
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	help: "+10% evasion, +15% outgoing mult, +3 outgoing Crit",
	incomingToHit: -0.1,
	outgoingMult: 0.15,
	outgoingCrit: 3,
},
//per steel: -10% incoming damage, +100% outgoing with empowered or carapace
env.STATUS_EFFECTS.fated_steel = {
	slug: "fated_steel",
	name: "FATED::STEEL",
	passive: true,
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	impulse: {type: "fated", component: "steel"},
	outgoingMult: 0,
	events: {
		onCreated: function({statusObj}) {
			if(statusObj.slug != this.status.slug) return;
			
			this.status.power = 0
			if(this.status.affecting?.member?.components) for (const [slotName, slotContents] of Object.entries(this.status.affecting.member.components)) {
				if(slotContents == "steel") this.status.power++
			}

			if(this.status.affecting?.member?.augments) for (const augmentSlug of this.status.affecting.member.augments) {
				let augment = env.ACTOR_AUGMENTS.generic[augmentSlug]
				if(augment?.component) if(augment.component[1] == "steel") this.status.power += 2
			}
			this.status.incomingMult = this.status.power * -0.1
		},
		onAddStatus: function ({statusObj}) {
			if(statusObj.slug == "empowered" || statusObj.slug == "carapace") {
				this.status.outgoingMult = 1
			}
		},
		onTurn: function() {
			if (!(hasStatus(this.status.affecting, "empowered") || hasStatus(this.status.affecting, "carapace"))) {
				this.status.outgoingMult = 0
			}
		}
	},
	help: "per humor of STEEL on this shell: -10% incoming damage, +100% outgoing with empowered or carapace"
},

//life
env.STATUS_EFFECTS.life_healing = {
	slug: "life_healing",
	name: "Healing Grounds",
	beneficial: true,
	passive: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Life/lifeTuvazu.gif",
	help: "Makes Regen permanent, and gives Bash",
	events: {
		onAddStatus: function({statusObj}) {
        	if(!statusObj.infinite && statusObj.slug == "regen"){
            	statusObj.duration = 1;
            	statusObj.infinite = true;
        	}
        },
	}
},

env.STATUS_EFFECTS.life_transfer = {
	slug: "life_transfer",
	name: "Transfered Lifeforce",
	beneficial: false,
	passive: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Life/lifeTransfer.gif",
	help: "when ally dies, revive random actor",
	inUse: false,
	events: {
		GLOBAL_onDeath: function({originalEventTarget}) {
			if (env.STATUS_EFFECTS.life_transfer.inUse) return;
			let subject = originalEventTarget
			let user = this.status.affecting

			if(user.state == "dead" ||
				user == subject || 
				user.team.name == "enemy" || 
				subject.state != "dead"
			) return;

			let DeadTargets = []
			env.rpg.enemyTeam.members.forEach((target) => {
				if (target => target.state == "dead" && target.state != "lastStand") {
					DeadTargets.push(target)
				}
			})
			let LivingTargets = []
			env.rpg.enemyTeam.members.forEach((target)=> {
				if (target => target.state != "dead" && target.state != "lastStand") {
					LivingTargets.push(target)
				}
			})

			let RandomRev = DeadTargets.sample()
			let RandomRever = LivingTargets.sample()
			RandomRev.state = "living"
			env.STATUS_EFFECTS.life_transfer.inUse = true
			setTimeout(()=>{
				RandomRev.hp = 0.1 // hack to avoid extra updatestats
				useAction(RandomRever, env.ACTIONS.rez, RandomRev, {triggerActionUseEvent: false, beingUsedAsync: true, reason: "ally died lol"})

				setTimeout(()=>{
					if(RandomRev.hp != 0) combatRevive(RandomRev)
				}, 310)
			
				sendFloater({
					target: subject,
					type: "arbitrary",
					specialClass: "action",
					arbitraryString: "TRANSFERED LIFEFORCE",
					size: 1.5,
				})
                
				readoutAdd({
					message: `${RandomRever.name} rebuilds ${RandomRev.name}! (<span definition="${processHelp(this.status, {caps: true})}">${this.status.name}</span>)`, 
					name: "sourceless", 
					type: "sourceless combat minordetail", 
					show: false,
					sfx: false
				})
			}, env.ADVANCE_RATE * 0.2)
		}
	}
},

env.STATUS_EFFECTS.life_shared = {
	slug: "life_shared",
	name: "Shared Prey",
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	help: "on actor down, all actors gain wild surge",
	events: {
		GLOBAL_onDeath: function({originalEventTarget}) {
			if(
				this.status.affecting.state == "dead"
			) return;
			let subject = originalEventTarget
            sendFloater({
				target: subject,
				type: "arbitrary",
				specialClass: "action",
				arbitraryString: "CONSUMPTION",
				size: 1.5,
			})

			addStatus({target: this.status.affecting, origin: false, status: "wild_surge", length: 3})                
		}
		/*GLOBAL_onDeath: ({originalEventTarget}) => {
			let subject = originalEventTarget
			let user = this.status.affecting

			if(
				user.state == "dead" ||
				user == subject ||  
				subject.state != "dead"
			) return;

			setTimeout(()=>{

				addStatus(this.status.affecting, "wild_surge")
            
				sendFloater({
					target: subject,
					type: "arbitrary",
					specialClass: "action",
					arbitraryString: "CONSUMPTION",
					size: 1.5,
				})
			}, env.ADVANCE_RATE * 0.2)	
		}*/
	}
},

env.STATUS_EFFECTS.life_predatorBless = {
	slug: "life_predatorBless",
	name: "Predator's Blessing",
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	infinite: true,
	passive: true,
	impulse: {type: "common", component: "life"},
	events: {
		GLOBAL_onDeath: function({originalEventTarget}) {
                if(
                    this.status.affecting.state == "dead" ||
                    this.status.affecting.team.name == originalEventTarget.team.name
                ) return;
                    
                sendFloater({
                    target: this.status.affecting,
                    type: "arbitrary",
                    arbitraryString: "FINISHER!",
                })
                                
                readoutAdd({
                    message: `${this.status.affecting.name} is boosted! (<span definition="${processHelp(this.status, {caps: true})}">${this.status.name}</span>)`, 
                    name: "sourceless", 
                    type: "sourceless combat minordetail", 
                    show: false,
                    sfx: false
                })

                addStatus({target: this.status.affecting, origin: false, status: "wild_surge", length: 3})                
            }
	},
	help: "on Foe down, gain wild surge"
},

env.STATUS_EFFECTS.deft = {
	slug: "deft",
	name: "Deft",
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	infinite: true,
	help: "-50% IN:HIT & IN:CRIT;REMOVED BY FOE CRIT",
	incomingToHit: -0.5,
	incomingCrit: -0.5,
	outgoingCrit: 0.5,
	removes: ["vulnerable"],
	opposite: "vulnerable",
	events: {
		GLOBAL_onCrit: function({subject, attack, originalEventTarget}) {
			if(originalEventTarget.team.name == this.status.affecting.team.name) return;
			removeStatus(this.status.affecting, 'fear')
		}
	}
},

env.STATUS_EFFECTS.life_herb = {
	slug: "life_herb",
	name: "Herbal Aid",
	beneficial: true,
	passive: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Life/lifeTransfer.gif",
	help: "'Grants the action FIELD REPAIRS'",
	grantsActions: ["life_repairs"],
	impulse: {type: "common", component: "life"}
},

env.STATUS_EFFECTS.vicious_senses = {
	slug: "vicious_senses",
	name: "Vicious Senses",
	beneficial: true,
	infinite: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Life/lifeBramble.gif",
	opposite: "dulled_senses", //YPOOO HOLY SHIT ITS THE DULL
	help: "outgoing damage increased by 50%, removed when focused is removed",
	outgoingMult: 0.5,
	events: {
		GLOBAL_onRemoveStatus: function({subject, origin, beneficial,removingStatusName}) {
			if(subject == this.status.affecting && removingStatusName == "focused") {
				removeStatus(this.status.affecting, "vicious_senses")
			}
		}
	}
},

env.STATUS_EFFECTS.dulled_senses = {
	slug: "dulled_senses",
	name: "Dulled Senses",
	beneficial: true,
	infinite: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	opposite: "vicious_senses",
	help: "outgoing damage is decreased by 50%, removed when fear is removed",
	outgoingMult: -0.5,
	events: {
		GLOBAL_onRemoveStatus: function({subject, origin, beneficial,removingStatusName}) {
			if(subject == this.status.affecting && removingStatusName == "fear") {
				removeStatus(this.status.affecting, "dulled_senses")
			}
		}
	}
},

env.STATUS_EFFECTS.life_amalgamate = {
	slug: "life_amalgamate",
	name: "Amalgamate",
	beneficial: false,
	infinite: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Life/lifeParasite.gif",
	help: "apply PUNCTURE equal to twice the turns of ROT",
	events: {
		onTurn: function() {
			if(hasStatus(this.status.affecting, "rot")) {
				addStatus({target: this.status.affecting, status: "puncture", length: 2*Math.floor(hasStatus(this.status.affecting, "rot"))})
			}
		},
		GLOBAL_onRemoveStatus: function({subject, origin, beneficial,removingStatusName}) {
			if(subject == this.status.affecting && removingStatusName == "rot") {
				removeStatus(this.status.affecting, "life_amalgamate")
			}
		}
	}
},

env.STATUS_EFFECTS.shattering_carapace = {
	slug: "shattering_carapace",
	name: "Shattering Carapace",
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	help: "Half all incoming damage and healing, attackers gain +2T WEAKENED and -2HP",
	incomingMult: -0.5,
	events: {
		onStruck: function({subject, beneficial}) {
			if(!beneficial) {
				addStatus({target: subject, status: "weakened", length: 2})
				combatHit(subject, {amt: 1, autohit: true, redirectable: false})
			}
		}
	}
},

env.STATUS_EFFECTS.predation = {
	slug: "predation",
	name: "Predation",
	beneficial: true,
	infinite: true,
	passive: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Life/lifeMirrorSmall.gif",
	impulse: {type: "common", component: "life"},
	help: "when focus is put on this shell, apply VICIOUS SENSES",
	events: {
		GLOBAL_onAddStatus: function({target, statusObj, originalEventTarget}) {
			if (statusObj.slug == "focused" && target == this.status.affecting) {
				addStatus({target: this.status.affecting, status: "vicious_senses"})
			}
		}
	}
},

env.STATUS_EFFECTS.life_resourceful = {
	slug: "life_resourceful",
	name: "ACTION::RESOURCEFUL",
	beneficial: true,
	infinite: true,
	passive: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	impulse: {type: "action", component: "life"},
	help: "when foe dies, use utility and primary",
	events: {
		GLOBAL_onDeath: function({originalEventTarget}) {
			let subject = originalEventTarget
			let user = this.status.affecting

			if(
				user.state == "dead" ||
				user == subject || 
				user.team.name == subject.team.name || 
				subject.state != "dead"
			) return;
			
			let primaryHit = env.ACTIONS[user.actions[0]]
			let utilityHit = env.ACTIONS[user.actions[2]]
			let foeTarget = subject.enemyTeam.members.sample()
			while (foeTarget == "dead") {
				foeTarget = subject.enemyTeam.members.sample()
			}

			setTimeout(()=>{
				useAction(user, primaryHit, foeTarget, {triggerActionUseEvent: false, beingUsedAsync: true, reason: "life"})
				useAction(user, utilityHit, user, {triggerActionUseEvent: false, beingUsedAsync: true, reason: "life", force: true})
            
				sendFloater({
					target: subject,
					type: "arbitrary",
					specialClass: "action",
					arbitraryString: "RESOURCEFUL",
					size: 1.5,
				})
                
				readoutAdd({
					message: `${user.name} takes advantage of ${subject.name}'s death! (<span definition="${processHelp(this.status, {caps: true})}">${this.status.name}</span>)`, 
					name: "sourceless", 
					type: "sourceless combat minordetail", 
					show: false,
					sfx: false
				})
			}, env.ADVANCE_RATE * 0.2)
		}
	}
},
// per humor of LIFE: +2 bp per bp, +2 hp per hp
env.STATUS_EFFECTS.fated_life = {
	slug: "fated_life",
	name: "FATED::LIFE",
	beneficial: true,
	infinite: true,
	passive: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	impulse: {type: "fated", component: "life"},
	help: "When healing: per humor of LIFE on this shell add +2 bp per bp and +2 hp per hp",
	events: {
		onCreated: function({statusObj}) {
			if(statusObj.slug != this.status.slug) return;
			
			this.status.power = 0
			if(this.status.affecting?.member?.components) for (const [slotName, slotContents] of Object.entries(this.status.affecting.member.components)) {
				if(slotContents == "life") this.status.power++
			}

			if(this.status.affecting?.member?.augments) for (const augmentSlug of this.status.affecting.member.augments) {
				let augment = env.ACTOR_AUGMENTS.generic[augmentSlug]
				if(augment?.component) if(augment.component[1] == "life") this.status.power += 2
			}
			this.status.boostpower = this.status.power * -2
		},
		GLOBAL_onBeforeCombatHit: function(context) {
			if(!this.status.power || context.amt > 0 || !this.status.affecting.team.members.includes(context.origin)) return;
			if(context.amt < 0 && context.type == 'hp') {
				context.type = 'hp'
				context.amt = context.amt + this.status.boostpower
			} else {
				context.type = "barrier"
				context.amt = context.amt + this.status.boostpower
			}
			setTimeout(()=>{                
				sendFloater({
					target: this.status.affecting,
					type: "arbitrary",
					specialClass: "fate",
					arbitraryString: "FATE::LIFE",
				})

				/*readoutAdd({
					message: `${originalEventTarget.name} gains a barrier! (<span definition="${processHelp(this.status, {caps: true})}">${this.status.affecting.name}'s ${this.status.name}</span>)`, 
					name: "sourceless", 
					type: "sourceless combat minordetail", 
					show: false,
					sfx: false
				})*/
			}, env.ADVANCE_RATE * 0.2)
		},
		/*GLOBAL_onCombatHit: function({subject, origin, attack, beneficial, originalEventTarget}) {
                if(
                    !this.status.power || 
                    !beneficial || 
                    !this.status.affecting.team.members.includes(originalEventTarget) || 
                    originalEventTarget.state == "dead" ||
                    attack >= 0
                ) return;

                combatHit(originalEventTarget, {amt: this.status.boostpower, beneficial: true, type: "barrier", origin: this.status.affecting, runEvents: false});
                                
                setTimeout(()=>{                
                    sendFloater({
                        target: this.status.affecting,
                        type: "arbitrary",
                        specialClass: "fate",
                        arbitraryString: "FATE::ICHOR",
                    })

                    readoutAdd({
                        message: `${originalEventTarget.name} gains a barrier! (<span definition="${processHelp(this.status, {caps: true})}">${this.status.affecting.name}'s ${this.status.name}</span>)`, 
                        name: "sourceless", 
                        type: "sourceless combat minordetail", 
                        show: false,
                        sfx: false
                    })
                }, env.ADVANCE_RATE * 0.2)
		}*/
	}
},
//graceful
env.STATUS_EFFECTS.parry = {
	slug: "parry",
	name: "Parry",
	beneficial: true,
	infinite: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Graceful/GracefulParry.gif",
	help: "redirect incoming hit back to the attacker, nullifies incoming flat damage",
	events: {
		GLOBAL_onAction: function({user, action, target, originalEventTarget}) { 
			if(action.beneficial || target != this.status.affecting || !action.type.includes("target")) return;
			if (target == this.status.affecting) {
				useAction(target, action, user, {triggerActionUseEvent: false, beingUsedAsync: true, reason: "get parried fucko"})
			}
		},
		GLOBAL_onTurn: function() { //"glass you didnt need to make an entire thing to remove all parries at the same time for a given team" the nefarious beast:
			if (this.status.lastTeam == "undefined") {
				this.status.lastTeam = "ally"
			} else {
				this.status.lastTeam = this.status.currentTeam
			}
			if (env.rpg.currentActor.team == env.rpg.allyTeam) {
				this.status.currentTeam = "ally"
			} else {
				this.status.currentTeam = "enemy"
			}
			if (this.status.lastTeam != this.status.currentTeam) {
				if (this.status.lastTeam == "ally") {
					env.rpg.enemyTeam.members.forEach((actor, i) =>{
						if (hasStatus(actor, "parry")) {
							removeStatus(actor, "parry")
						}
					})
				} else if (this.status.lastTeam == "enemy") {
					env.rpg.allyTeam.members.forEach((actor, i) =>{
						if (hasStatus(actor, "parry")) {
							removeStatus(actor, "parry")
						}
					})
				}
			}
		}
	}
},

env.STATUS_EFFECTS.deflective_stance = {
	slug: "deflective_stance",
	name: "Deflective Stance",
	beneficial: true,
	infinite: true,
	passive: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Graceful/GracefulParry.gif",
	grantsActions: ["parry"],
	help: "gives move PARRY, nullifies all incoming damage while PARRY is active",
	impulse: {type: "common", component: "graceful"},
	events: { //god this code prolly is bad, unfortunately i think it has to be like this to make the checks work
		onAddStatus: function({statusObj}) {
			if(statusObj.slug == "parry") {
				this.status.incomingFlat = -9999999999999999999
			} else {
				this.status.incomingFlat = 0
			}
		},
		GLOABAL_onTurn: function() {
			if (hasStatus(this.status.affecting, "parry")) {
				this.status.incomingFlat = -9999999999999999999
			} else {
				this.status.incomingFlat = 0
			}
		}
	}
},

env.STATUS_EFFECTS.graceful_safezone = {
	slug: "graceful_safezone",
	name: "Safezone",
	beneficial: true,
	infinite: true,
	passive: "modifier",
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	help: "Grant all actors PARRY", //im so not sorry about this, if you get your shit wrecked by a parry i will laugh.
	events: { //god this code prolly is bad, unfortunately i think it has to be like this to make the checks work
		onAddStatus: function({statusObj}) {
			if(statusObj.slug == "parry") {
				this.status.incomingFlat = -9999999999999999999
			} else {
				this.status.incomingFlat = 0
			}
		},
		GLOABAL_onTurn: function() {
			if (hasStatus(this.status.affecting, "parry")) {
				this.status.incomingFlat = -9999999999999999999
			} else {
				this.status.incomingFlat = 0
			}
		}
	}
},
//kivcria
env.STATUS_EFFECTS.spraying = {
	slug: "spraying",
	name: "Spraying",
	beneficial: true,
	infinite: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	outgoingMult: 0,
	incomingMult: 0,
	events: {
		onAddStatus: function({statusObj}) {
			if(statusObj.slug == "spraying") {
				this.status.incomingMult = 0.5
				this.status.outgoingMult = 0.5
			} else {
				this.status.incomingMult = 0
				this.status.outgoingMult = 0
			}
		},
		GLOBAL_onTurn: function() {
			if (hasStatus(this.status.affecting, "spraying")) {
				this.status.incomingMult = 0.5
				this.status.outgoingMult = 0.5
			} else {
				this.status.incomingMult = 0
				this.status.outgoingMult = 0
			}
		},
		GLOBAL_onAction: function({user, action, target, originalEventTarget}) {
			if(user == this.status.affecting){
				removeStatus(user, "spraying")
			}
		}
	},
	help: "+50% incoming/outgoing damage, lost when another action is used"
},

env.STATUS_EFFECTS.consequence_spread = {
	slug: "consequence_spread",
	name: "Consequence Spread",
	beneficial: false,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	events: {
		onStruck: function({subject, beneficial}) {
			if(!beneficial) {
				this.status.affecting.team.members.forEach((member, i) => {
					if(member.state == "living") {
						addStatus({target: member, status: "rot", length: 1})
					}
				})
				/*if (this.status.affecting.team == "enemy") {
					env.rpg.enemyTeam.members.forEach((actor, i) =>{
						addStatus({target: member, status: "rot", length: 1})
					})
				} else if (this.status.affecting.team == "ally") {
					env.rpg.allyTeam.members.forEach((actor, i) =>{
						addStatus({target: member, status: "rot", length: 1})
					})
				}*/
			}
		}
	},
	help: "When affected actor struck, give 1T:ROT to actor's team"
},
//outgoing damage is incresed per dull blessing
env.STATUS_EFFECTS.kivcria_dull ={
	slug: "kivcria_dull",
	name: "dull blessing",
	beneficial: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	outgoingMult: 0,
	events: {
		GLOBAL_onBeforeCombatHit: function(context) {
			if(context.origin == this.status.affecting) {
				let punctureCount = hasStatus(context.originalEventTarget, "kivcria_dull")

				if(context.amt > 0 && punctureCount && !context.beneficial) {
					this.status.outgoingMult = 0.2 * punctureCount
				} else {
					this.status.outgoingMult = 0
				}
			}

			updateStats({actor: this.status.affecting})
		},
	},
	help: "outgoing damage is increased per turn of dull blessing present"
},
//Impulses
//Rot-spread - all attacks apply rot equal to user's turns of rot
env.STATUS_EFFECTS.kivcria_rot = {
	slug: "kivcria_rot",
	name: "Rot-spread",
	beneficial: true,
	infinite: true,
	passive: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	impulse: {type: "common", component: "kivcria"},
	help: "When attacking foe, apply ROT equal to the amount of ROT on this actor",
	events: {
            onHit: function({subject, origin, attack, beneficial}) {
			if(beneficial || origin.team.members.includes(subject) || origin.state == "dead" || subject.state == "dead" || hasStatus(origin, "rot") == 0 ) return;
			addStatus({target: subject, origin, status: "rot", length: hasStatus(origin, "rot")}); 

			setTimeout(()=>{
				play("stab", 0.5, 0.5)
                    
				sendFloater({
					target: this.status.affecting,
					type: "arbitrary",
					arbitraryString: "SPREAD!",
				})
                                    
				readoutAdd({
					message: `${this.status.affecting.name}'s strike leaves spores! (<span definition="${processHelp(this.status, {caps: true})}">${this.status.name}</span>)`, 
					name: "sourceless", 
					type: "sourceless combat minordetail",
					show: false,
					sfx: false
				})
			}, env.ADVANCE_RATE * 0.2)
		}
	},
},
//Rotten wounds - 10% outgoing damage per Trot
env.STATUS_EFFECTS.kivcria_wounds = {
	slug: "kivcria_wounds",
	name: "Rotten Wounds",
	beneficial: true,
	infinite: true,
	passive: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	impulse: {type: "common", component: "kivcria"},
	help: "10% outgoing damage per turn of ROT on this actor",
	outgoingMult: 0,
	events: {
		GLOBAL_onBeforeCombatHit: function(context) {
			if(context.origin == this.status.affecting) {
				let punctureCount = hasStatus(context.originalEventTarget, "rot")

				if(context.amt > 0 && punctureCount && !context.beneficial) {
					this.status.outgoingMult = 0.2 * punctureCount
				} else {
					this.status.outgoingMult = 0
				}
			}

			updateStats({actor: this.status.affecting})
		},
	},
}
//Exposure's blessing - half the effects of rot
env.STATUS_EFFECTS.kivcria_exposure = {
	slug: "kivcria_exposure",
	name: "Exposure's Blessing",
	beneficial: true,
	infinite: true,
	passive: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	impulse: {type: "common", component: "kivcria"},
	help: "halve the effects of ROT"
}
//Action::clean and clear
//On foe evade or recive crit, use utility and gain +2bp
env.STATUS_EFFECTS.kivcria_clean = {
	slug: "kivcria_clean",
	name: "ACTION::CLEAN AND CLEAR",
	beneficial: true,
	infinite: true,
	passive: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	impulse: {type: "action", component: "kivcria"},
	help: "on foe evade or when this shell is crit, use utility and gain +2BP",
	events: {
		GLOBAL_onBeforeAction: function({user, reason, beingUsedAsync, action}) { 
			if(user != this.status.affecting && (user.team.name == this.status.affecting.team.name) && !reason && !beingUsedAsync) {
				this.status.turnUsage = false 
			}
		},
		GLOBAL_onAction: function({target, user, hit, reason, action, beingUsedAsync, originalEventTarget}) {
			if(
				hit != "crit" ||
				this.status.affecting.state == "dead" || 
				user == this.status.affecting || 
				originalEventTarget == this.status.affecting ||
				!this.status.affecting.enemyTeam.members.includes(user) || 
				!this.status.affecting.team.members.includes(target) || 
				target.state == "dead" ||
				this.status.turnUsage ||
				!this.status.affecting.actions[2] ||
				hasStatus(user, "fear") ||
				target != this.status.affecting
			) return;

			this.status.turnUsage = true
			let utility = env.ACTIONS[this.status.affecting.actions[2]]

			setTimeout(()=>{
				useAction(this.status.affecting, utility, utility.beneficial ? user : target, {triggerActionUseEvent: false, beingUsedAsync: true, reason: "CleanAndClear"})
				combatHit(this.status.affecting, {amt: 2, beneficial: true, type: "barrier", origin: this.status.affecting, runEvents: false});
				sendFloater({
					target: this.status.affecting,
					type: "arbitrary",
					specialClass: "action",
					arbitraryString: `CLEAN AND CLEAR::${utility.name.toUpperCase()}`,
					size: 1.5,
				})
                
				/*readoutAdd({
					message: `${this.status.affecting.name} provides support alongside ${user.name}'s attack on ${target.name}! (<span definition="${processHelp(this.status, {caps: true})}">${this.status.name}</span>)`, 
					name: "sourceless", 
					type: "sourceless combat minordetail",
					show: false,
					sfx: false
				})*/
			}, env.ADVANCE_RATE * 0.5)
		},
		GLOBAL_onEvade: function({subject, target, attack, originalEventTarget}) {
			let user = this.status.affecting
			if(
				user.enemyTeam.members.includes(subject) || 
				subject.state == "dead" ||
				user.state == "dead" ||
				target == user ||
				hasStatus(user, "fear") ||
				!this.status.affecting.actions[2]
			) return;

			let utility = env.ACTIONS[user.actions[2]]
			
			setTimeout(()=>{
				useAction(this.status.affecting, utility, utility.beneficial ? subject : target, {triggerActionUseEvent: false, beingUsedAsync: true, reason: "CleanAndClear"})
				combatHit(this.status.affecting, {amt: 2, beneficial: true, type: "barrier", origin: this.status.affecting, runEvents: false});

				sendFloater({
					target: this.status.affecting,
					type: "arbitrary",
					specialClass: "action",
					arbitraryString: `CLEAN AND CLEAR::${utility.name.toUpperCase()}`,
					size: 1.5,
				})

				/*readoutAdd({
					message: `${user.name} retaliates against ${subject.name} as they miss! (<span definition="${processHelp(this.status, {caps: true})}">${this.status.name}</span>)`, 
					name: "sourceless", 
					type: "sourceless combat minordetail", 
					show: false,
					sfx: false
				})*/
			}, env.ADVANCE_RATE * 0.2)
		}
	}
}

//Fated::Kivcria
//Per hunor of kivcri
//+1T rot when reciving/applying rot
//+5% damage per Trot

//Stage modifiers 
//Wall-rot - all actions have a 20% chance to become rotten jab (-1hp, +3T rot) [70% hit chance, no crit]
//me when i wipe the Yucky Finger on you
env.STATUS_EFFECTS.kivcria_wall = {
	slug: "kivcria_wall",
	name: "Wall Rot",
	beneficial: false,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	passive: true,
	infinite: true,
	events: {
		onBeforeAction: function(context) {
			if (Math.random() < (0.2)) {
				context.settings.action = env.ACTIONS["kivcria_jab"]
			}
		}
	},
	help: "All actions have a 20% chance to become ROTTEN JAB"
}
//Rotten wounds - 100% outgoing and 20% incoming damage per Trot, random chance to turn status effects into rot
env.STATUS_EFFECTS.kivcria_festering = {
	slug: "kivcria_festering",
	name: "Rotten Wounds",
	beneficial: true,
	passive: true,
	infinite: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	outgoingMult: 0,
	incomingMult: 0,
	help: "100% outgoing damage and 20% incoming damage increase per turn of ROT, 12.5% chance to turn applied status effects into ROT",
	impulse: {type: "common", component: "kivcria"},
	events: {
		GLOBAL_onBeforeCombatHit: function(context) {
			if(context.origin == this.status.affecting) {
				let rotCount = hasStatus(context.originalEventTarget, "rot")

				if(context.amt > 0 && rotCount && !context.beneficial) {
					this.status.outgoingMult = 1 * rotCount
					this.status.incomingMult = 0.2 * rotCount
				} else {
					this.status.outgoingMult = 0
					this.status.incomingMult = 0
				}
			}

			updateStats({actor: this.status.affecting})
		},
		onBeforeAddStatus: function(context) {
			if (Math.random() < 0.125) {
				context.status = "rot"
			}
		},
	}
}
//Tendril's decay - on actor death, summon enemy rot-bearer (10hp, ethereal, only action is decayed fenzy (-1hp, on crit repeat, 80% hit chance, 100% crit rate))
//Stealing from narra for this. sorgy but also nah you already did it
env.STATUS_EFFECTS.kivcria_tendril = {
	slug: "kivcria_tendril",
	slug: "Tendril's decay",
	beneficial: true,
	infinite: true,
	passive: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif",
	help: "on death, summon rot-bearer\nif dead actor is an ally, summon as ally\nif dead actor is a foe, summon as foe",
	impulse: {type: "common", component: "kivcria"},
	events: {
		onDeath: function() {
			let user = this.status.affecting
			if(user.initialStatusEffects && user.initialStatusEffects.includes("ethereal")) return;
			else if(user.slug.includes("rot")) return;
			else if(user.team.members.includes("critta_jester")) return;
			else if(user.team.members.includes("critta_spawner")) return;
			else if(user.team.name == "enemy") {
				if(this.status.lastSide) {
					midCombatEnemyAdd('rot_bearer_for', 'left') 
					play('stab', 0.5)
					this.status.lastSide = 0
				} else {
					midCombatEnemyAdd('rot_bearer_foe', 'right')
					play('stab', 0.5)
					this.status.lastSide = 1
				}
			} else {
				if(this.status.lastSide) {
					midCombatAllyAdd('rot_bearer_ally', 'left')
					play('stab', 0.5)
					this.status.lastSide = 0
				} else {
					midCombatAllyAdd('rot_bearer_ally', 'right')
					play('stab', 0.5)
					this.status.lastSide = 1
				}
			}
				
			sendFloater({
				target: user,
				type: "arbitrary",
				arbitraryString: "ROTTING!",
				size: 1.5,
			})
			
			readoutAdd({
				message: `an infested thoughtform is drawn in by the commotion! (<span definition="${processHelp(this.status, {caps: true})}">${this.status.name}</span>)`, 
				name: "sourceless", 
				type: "sourceless combat minordetail", 
				show: false,
				sfx: false
			})

			setTimeout(()=>{
				removeStatus(this.status.affecting, 'kivcria_tendril', {forceRemoveStatus: true})
			}, env.ADVANCE_RATE * 0.2)
		},
	},
}
//misc
//https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Placeholder.gif <- placeholder sprite that we can usewhen no images are made for a thing yet
env.STATUS_EFFECTS.minor_concussion = {
	slug: "minor_concussion",
	name: "Minor Concussion",
	beneficial: false,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Stupidhorrible/concussion.gif",
	events: {
		onBeforeAction: function(context) {		
			if(!context.settings.action.type.includes("target")) return;
                
                // alter target maybe
			if(Math.random() < 0.3) {
				//select from whole turnorder
				let subject = context.user
				let oldTarget = context.settings.target
				let newTarget = env.rpg.turnOrder.filter(actor=>actor.state != "dead" && actor.state != "lastStand" && actor.slug != oldTarget.slug)
				if(newTarget.length) {
					newTarget = newTarget.sample()
				} else return;

				console.log("old target was", context.settings.target, "new target is", newTarget)

				context.settings.target = newTarget
			}
		}
	},
	help: "'enemies have a chance to hit the wrong person'"
},

env.STATUS_EFFECTS.tetration_shock = { //This was what spurred this entire idea. The interaction between Bazruka and Wild Surge was interesting
	slug: "tetration_shock",
	name: "Ferocious Shock",
	beneficial: true,
	infinite: true,
	icon: "https://glass-memoirs.github.io/Chaos-beta/Images/Icons/Entropy/Overclocked.gif",
	events: {
		onTurn: function() { 
			reactDialogue(this.status.affecting, 'surge') 
			delete this.status.justGotSurge
		},
		onAction: function({user, action, target, beingUsedAsync}) {
			if(this.status.justGotSurge || beingUsedAsync || ["incoherent_", "steer", "floor", "windup", "intrusive"].some(slugpart => action.slug.includes(slugpart)) ||
				 !action.type.includes("target") ||(!action.beneficial && target.team.name == "ally") ||(action.beneficial && target.team.name == "enemy")) return;
			setTimeout(()=>{
				sendFloater({
					target: user,
					type: "arbitrary",
					arbitraryString: "Tetrated Shock",
					size: 1.5,
				})
				readoutAdd({
					message: `This just isnt fair to the enemies (<span definition="${processHelp(this.status, {caps: true})}">${this.status.name}</span>)`, 
					name: "sourceless", 
					type: "sourceless combat minordetail", 
					show: false,
					sfx: false
				})
				env.GENERIC_ACTIONS.teamWave({
					team: target.team,
					exec: (actor, i) => {
						if(actor == target) return;
						env.GENERIC_ACTIONS.teamWave({
							team: target.team,
							exec: (actor, i) => {
								if(actor == target) return; // we skip the original target
								env.GENERIC_ACTIONS.teamWave({
									team: target.team,
									exec: (actor, i) => {
										if(actor == target) return; // we skip the original target
										useAction(user, action, actor, {triggerActionUseEvent: false, beingUsedAsync: true, reason: "exponential overload"})
									}
								})
							}
						})
					}
				})
			}, 500)
			removeStatus(this.status.affecting, "tetration_shock")
			addStatus({target:user, status: 'stun', length: 4, noReact: true})
			addStatus({target:user, status: 'vulnerable', length: 5, noReact: true})
		},
		onCreated: function({statusObj}) {
			if(statusObj.slug == this.status.slug) this.status.justGotSurge = true
		},
	},
	help: "on next active targeted action, gain 4T:STUN and 5T:VULNERABLE, and use across the entire target team\nif beneficial, action used on all allies\nif offensive, action used on all foes"
}
//END OF STATUS EFFECTS

//COMBAT ACTIONS
//ENTROPY
env.ACTIONS.momentum = { //couldnt figure out how to make this thing actually multiply damage by the amount of stat effects so i made it loop
	slug: "momentum",
	name: "Momentum",
	type: 'target',
	//desc: "'redirect beneficial effects into power';'removes them once the hit connects'",
	anim: "basic-attack",
	verb: "sprint at",
	//help: "'100% -2HP + (XT:REGEN/FOCUS)\nSELF::-REGEN/FOCUS'",
	details: {
		flavor: "'redirect beneficial effects into power';'removes them once the hit connects'",
		onUse: "'repeat for every T:[STATUS::regen] and T:[STATUS::focused]';'lose all [STATUS::regen] and [STATUS::focused]'",
		onHit: "'[STAT::amt]'",
		onCrit: "'[STATUS::stun]'",
	},
	usage: {
		act: "%USER CHANNELS ENERGY INTO A SPRINT",
		crit: "%TARGET GETS KNOCKED OVER",
		hit: "%TARGET GETS SLAMMED INTO",
		miss: "%TARGET SIDESTEPS"
	},
	stats: {
		accuracy: 1,
		crit: 0.1,
		amt: 2,
		status: {
			regen: {name: "regen", showReference:true},
			focused: {name: "focused", showReference:true},
			stun: {name:"stun", length: 1},
		},
	},
	exec: function(user, target) {
		let action = this
		//console.log(hasStatus(user, 'focused'))
		//The looping part
		for (let i = 1; i <= (Math.floor(hasStatus(user, 'focused')) + (Math.floor(hasStatus(user, 'hyperfocus_flat'))) + Math.floor(hasStatus(user, 'regen')))+1; i++) {
			env.GENERIC_ACTIONS.singleTarget({
				action,
				user,
				target: target,
				critExec: ({target}) => {
					addStatus({target: target, status: 'stun', length: 1})
				}
			})
		}
		if(hasStatus(user, 'focused')) removeStatus(user, "focused")
		if(hasStatus(user, 'hyperfocus_flat')) removeStatus(user, "hyperfocus_flat")
		if(hasStatus(user, 'focused')) removeStatus(user, "regen")
	}
},

env.ACTIONS.player_law = { //Funky little move, had to change it up just like momentum.
	slug: "player_law",
	name: "3rd Law",
	type: 'target',
	//desc: "'barrel towards foes';'chance to stun and apply vulnerable'",
	anim: "basic-attack",
	verb: "Barrel towards",
	//help: "'100% -2HP * (XT:REGEN+FOCUS) 15%C +2T STUN +3T VULNERABLE\nSELF:: #T/2 REGEN/FOCUS/EVASION'",
	details :{
		flavor: "'barrel towards foes';'chance to stun and apply vulnerable'",
		onUse: "'Repeat for every T:[STATUS::regen], T:[STATUS::focused], and T:[STATUS::evasion]';'Half all [STATUS::regen], [STATUS::focused], and [STATUS::evasion]'",
		onHit: "'[STAT::amt]'",
		onCrit: "'[STATUS::stun] and [STATUS::vulnerable]'"
	},
	usage: {
		act: "%USER CHANNELS ENERGY INTO A SPRINT",
		crit: "%TARGET GETS KNOCKED OVER",
		hit: "%TARGET GETS SLAMMED INTO",
		miss: "%TARGET SIDESTEPS"
	},
	stats: {
		accuracy: 1,
		crit: 0.15,
		amt: 2,
		status: {
			regen:{name: "regen", showReference: true},
			focused:{name: "focused", showReference: true},
			vulnerable:{name: "vulnerable", length: 2},
			evasion:{name: "evasion", showReference:true},
			stun:{name: "stun", length:1},
		},
	},
	exec: function(user, target) {
		let action = this
		for (let i = 1; i <= (Math.floor(hasStatus(user, 'focused')) + Math.floor(hasStatus(user, 'hyperfocus_flat')) + Math.floor(hasStatus(user, 'regen')) + Math.floor(hasStatus(user, 'evasion'))) + Math.floor(hasStatus(user, 'evasion_mega')); i++) {
			env.GENERIC_ACTIONS.singleTarget({
				action: action, user,
				target: target,
				critExec: ({target}) => {
					addStatus({target: target, status: 'stun', length: 1})
					addStatus({target: target, status: 'vulnerable', length: 2})
				}
			})
		}
		if (hasStatus(user, 'focused')) {
			let half = 0 - Math.floor(hasStatus(user, 'focused') / 2)
			addStatus({target: user, status: "focused", length: half, noReact: true})
		}
		if (hasStatus(user, 'hyperfocus_flat')) {
			let half = 0 - Math.floor(hasStatus(user, 'hyperfocus_flat') / 2)
			addStatus({target: user, status: "hyperfocus_flat", length: half, noReact: true})
		}
		if (hasStatus(user, 'regen')) {
			let half = 0 - Math.floor(hasStatus(user, "regen") / 2)
			addStatus({target: user, status: "regen", length: half, noReact: true})
		}
		if (hasStatus(user, 'evasion')) {
			let half = 0 - Math.floor(hasStatus(user, 'evasion') / 2)
			addStatus({target: user, status: "evasion", length: half, noReact: true})
		}
		if (hasStatus(user, 'evasion_mega')) {
			let half = 0 - Math.floor(hasStatus(user, 'evasion_mega')/2)
			addStatus({target: user, status: "evasion_mega", length: half, noReact: true})
		}
	}
},

env.ACTIONS.level_statuses ={ //this would not deal damage for me at all so i made it deal no damage, also turns out windup doesnt break anything if its removed!
	slug: "level_statuses",
	name: "Level",
	type: 'target',
	//desc: "'collapse beyond both yourself and the foe';'remove all statuses'",
	anim: "basic-attack",
	//help: "80% REMOVE MOST STATUS EFFECTS, 15%C REMOVE WINDUP",
	details: {
		flavor: "'collapse beyond both yourself and the foe';'remove all statuses'",
		onUse: "'80% chance to remove most statuses excluding impulses and modifiers'",
		onCrit: "'15% chance to remove [STATUS::windup]'"
	},
	usage: {
		act: "%USER REACHES OUT",
		crit: "%USER AND %TARGET FEEL SOMETHING GET TORN AWAY",
		hit: "%TARGET GETS CLAWED",
		miss: "%TARGET SWATS %USER AWAY"
	},
	stats: {
		accuracy: 0.8,
		crit: 0.15,
		amt: 0,
		status: {
			windup: {name: "windup", showReference: true}
		},
	},
	exec: function(user, target) {
		let statusPool = []
		for (let i in env.STATUS_EFFECTS) {
			let statusData = env.STATUS_EFFECTS[i]
			let usable = true
			if(statusData.infinite && (statusData.slug != "windup")) {usable = false}
			if(statusData.passive) {usable = false}
			if(i.includes("global_")) {usable = false}
			if(i == "misalign_weaken" || i == "misalign_stun" || i == "realign" || i == "realign_stun") {usable = false}
			if(i == "imperfect_reset") {usable = false}
			if(i == "redirection") {usable = false}
			if(i == "entropy_eternal") {usable = false}
			//console.log(i, usable)
			if(usable) statusPool.push(i)
		}
		let targetEffects = []
		target.statusEffects.forEach((status, i) => {
			//console.log(status)
			if((!status.infinite || !status.passive) && (statusPool.includes(status.slug))) {
				targetEffects.push(status.slug)
			}
		})
		let userEffects = []
		user.statusEffects.forEach((status, i) => {
			//console.log(status)
			if((!status.infinite || !status.passive) && (statusPool.includes(status.slug) && (status.slug != "windup"))) {
				userEffects.push(status.slug)
			}
		})
		targetEffects.forEach((status) => {
			if(status != "windup") removeStatus(target, status)
		})
		userEffects.forEach((status) => {
			removeStatus(user, status)
		})
		env.GENERIC_ACTIONS.singleTarget({
			action:this,
			user,
			target,
			critExec: ()=> { //DOnt believe its lies this works jsut fine
				if (targetEffects.includes("windup")) {
					sendFloater({
						target: user,
						type: "arbitrary",
						arbitraryString: "LMAO",
						size: 1.5,
					})
					readoutAdd({
						message: `${target.name} forgot what it was doing.`, 
						name: "sourceless", 
						type: "sourceless combat minordetail", 
						show: false,
						sfx: false
					})
					removeStatus(target, "windup")
				}
			}
		})
	}
},

env.ACTIONS.player_rig = {
	slug: "player_rig",
	name: "Rig Field",
	type: "target",
	//desc: "'use foe resources to remove negative statuses';'chance of doubling status duration'",
	anim: "basic-attack",
	verb: "rig",
	//help: "'FOES:: 80%  -POSITIVE STATUS, 10%C 2*T NEGATIVE STATUS\nUSER:: 80% -NEGATIVE STATUS, 10%C 2*T POSITIVE STATUS'",
	details :{
		flavor: "'use foe resources to remove negative statuses';'chance of doubling status duration'",
		onUse: "'FOES: 80% chance to remove all positive statuses';'USER: 80% chance to remove all negative statuses'",
		onCrit: "'FOES: 10% to double all negative statuses';'USER: 10% chance to double all positives'",
	},
	usage: {
		act: "%USER SHUFFLES THE POWER",
		crit: "%TARGET FEELS DREAD",
		hit: "%TARGET LOOSES THEIR ENERGY",
		miss: "%USER GOT DISTRACTED"
	},
	stats :{
		accuracy: 0.8,
		crit: 0.1,
		amt: 0,
	},
	exec: function(user,target) {
		let statusPool = []
		for (let i in env.STATUS_EFFECTS) {
			let statusData = env.STATUS_EFFECTS[i]
			let usable = true
			if(statusData.infinite && (statusData.slug != "windup")) {usable = false}
			if(statusData.passive) {usable = false}
			if(i.includes("global_")) {usable = false}
			if(i == "misalign_weaken" || i == "misalign_stun" || i == "realign" || i == "realign_stun") {usable = false}
			if(i == "imperfect_reset") {usable = false}
			if(i == "redirection") {usable = false}
			if(i == "entropy_eternal") {usable = false}
			//console.log(i, usable)
			if(usable) statusPool.push(i)
		}
		let targetEffects = []
		target.statusEffects.forEach((status, i) => {
			//console.log(status)
			if((!status.infinite || !status.passive) && (statusPool.includes(status.slug))) {
				targetEffects.push(status)
			}
		})
		let userEffects = []
		user.statusEffects.forEach((status, i) => {
			//console.log(status)
			if((!status.infinite || !status.passive) && (statusPool.includes(status.slug) && (status.slug != "windup"))) {
				userEffects.push(status)
			}
		})
		targetEffects.forEach((status) => {
			if(status.beneficial) removeStatus(target, status.slug)
		})
		userEffects.forEach((status) => {
			if (!status.beneficial) removeStatus(user, status.slug)
		})
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			critExec: (status) => {
				if(!status.beneficial) addStatus({target:target, status: status.slug, length: Math.floor(hasStatus(target, status.slug))})
				if(status == "windup") {
					sendFloater({
						target: target,
						type: "arbitrary",
						arbitraryString: "LMAO",
						size: 1.5,
					})
					readoutAdd({
						message: `${target.name} forgot what it was doing.`, 
						name: "sourceless", 
						type: "sourceless combat minordetail", 
						show: false,
						sfx: false
					})
					removeStatus(target, status)
				}
			}
		})
		userEffects.forEach((status) => {
			if (status.beneficial) addStatus({target: user, status: status.slug, length: Math.floor(hasStatus(user, status.slug))})
		})
	}
},

env.ACTIONS.wild_frenzy = { //yknow this was what i thought would be the hardest thing to make
	slug: "wild_frenzy",
	name: "Frenzied Flail",
	type: 'target',
	//desc: "'flail around';'a chance to keep hitting'",
	anim: "basic-attack",
	verb: "flail at",
	//help: "100% -2HP, 15%C USE THIS ACTION AGAIN ON RANDOM TARGET",
	details: {
		flavor: "'flail around';'a chance to keep hitting'",
		onHit: "'[STAT::amt]'",
		onCrit: "'15% chance to hit again'",
	},
	usage: {
		act: "%USER BEGINS TO FLAIL",
		crit: "%USER KEEPS FLAILING",
		hit: "%TARGET GETS WHACKED",
		miss: "%TARGET EVADES"
	},
	stats:{
		accuracy: 1,
		crit: 0.15,
		amt: 2,
	},
	exec: function(user, target) { //stole a bit of frenzy's code,
		let action = this
		let targetTeam
		switch(user.team.name) {
			case "ally": targetTeam = env.rpg.enemyTeam; break;
			case "enemy": targetTeam = env.rpg.allyTeam; break;
		}
		let validTargets = targetTeam.members.filter(member => member.state != "dead" && member.state != "lastStand")
		if(validTargets.length) for (let i = 0; i < 1; i++) {
			if (validTargets) {
				let target = validTargets.sample()
					setTimeout(()=>{
						env.GENERIC_ACTIONS.singleTarget({
							action,
							user,
							target,
							hitSfx: { name: 'shot2' },
							critSfx: { name: 'shot6' },
							critExec: ({target})=> {
								if(target.hp > 0 && target.state != "lastStand") {
									env.setTimeout(()=>{
										useAction(user, this, target, {beingUsedAsync: true, reason: "wild_frenzy"})
									}, 200)
								}
							}
						})
					}, 200)
			}
		}
	}
},

env.ACTIONS.player_overload = { //THis will let you traumatize the firmament 
	slug: 'player_overload',
	name: 'Exponential Surge',
	type: 'self+autohit+support',
	//desc: "'focus flailing into a long barrage';'next attack is used across entire team';'long period of focus tires shell out and stuns'",
	anim: "",
	verb: "overload",
	//help: "+1T:FOCUSED +EXPONENTIAL SURGE",
	details: {
		flavor: "'focus flailing into a long barrage';'next attack is used across entire team';'long period of focus tires shell out and stuns'",
		onUse: "'[STATUS::exp_over]'",
	},
	usage: {
		act: "%USER HONES IN"
	},
	stats:{
		status: {
			exp_over: {name: "exp_over", showReference: true}
		},
	},
	beneficial: true,
	disableIf: (actor)=>{ if(hasStatus(actor, "fear")) return "PROHIBITED BY FEAR" },
	exec: function(user, target) {
		play("talkchoir7", 1.5)
		addStatus({target: user, status: "exp_over", length: 1, noReact:true})
		addStatus({target: user, status: "focused", length: 1, noReact:true});
		return 'nothing'
	},
	avoidChaining: true
},

env.ACTIONS.entropy_burnout = {
	slug: "entropy_burnout",
	name: "Burnout",
	type: 'target',
	//desc: "'Set off their end'",
	anim: "basic-attack",
	//help: "AUTOHIT, +5T BURNOUT ON TARGET",
	autohit: true,
	details: {
		flavor: "'Set off their end'",
		onUse: "AUTOHIT, [STATUS::burnout]"
	},
	usage: {
		act: "%USER IGNITES THE ENERGY OF %TARGET",
		hit: "%TARGET STARTS TO BURN UP",
	},
	stats: {
		crit: 0,
		amt: 2,
		status: {
			burnout: {name: "burnout", length: 5}
		}
	},
	exec: function(user, target) {
		return env.GENERIC_ACTIONS.singleTarget({
			action: this, 
			user, 
			target,
			hitSfx: {
				name: 'chomp',
				rate: 0.7
			},
			genExec: ()=> {
				addStatus({target, origin: user, status: "burnout", length:5});
			}
		})
	}
},

env.ACTIONS.entropy_call = {
	slug: "entropy_call",
	name: "Send Signal",
	type: "autohit",
	details: {
		flavor: "'Call out with a strained and distorted voice';'summon more casualties'",
		onUse: "'Summon more foes that cannot attack'",
	},
	usage: {
		act: "%USER CALLS OUT",
	},
	exec: function() {
		let rand = Math.random()
		play('talkfairy', 0.5);
		if (rand > 0.5) {
			midCombatActorAdd(env.rpg.enemyTeam, 'immobile_actor', 'left')
			//addStatus({target:env.rpg.enemyTeam[0], status: "immobile", length: 1})
		} else {
			midCombatActorAdd(env.rpg.enemyTeam, 'immobile_actor', 'right')
			//addStatus({target: env.rpg.enemyTeam[(env.rpg.enemyTeam.length)-1], status: "immobile", length: 1 })
		}
	}
},
//SURGING
env.ACTIONS.tormenting_delight = {
	slug: "tormenting_delight",
	name: "Tormenting delight",
	type: 'target',
	//desc: "'Oh how crude!';'laugh at us more';'it only inspires us to keep hitting while you are on your last legs!'",
	anim: "basic-attack",
	verb: "Torment",
	//help: "100% -3HP 25% +1T STUN, +SURGE USER/n20%C -6HP +2T STUN, 25% +1T STUN, +2T FOCUSED +SURGE USER",
	details: {
		flavor: "'Oh how crude!';'laugh at us more';'it only inspires us to keep hitting while you are on your last legs!'",
		onHit: "'[STAT::amt]';'25% 1T:[STATUS::stun]';'USER 32.3% [STATUS::surge]'",
		onCrit: "'2T:[STATUS::stun]';'USER 32.3% 2T:[STATUS::focused]+[STATUS::surge]'",
	},
	usage: {
		act: "%USER READIES A SWING",
		hit: "%TARGET IS STRUCK",
		crit: "%TARGET IS STUNNED",
	},
	stats: {
		accuracy: 1.0,
		crit: 0.222,
		amt: 3,
		status: {
			stun: {name: "stun", showReference: true},
			surge: {name: "surge", showReference: true},
			focused: {name: "focused", showReference: true},
		},
	},
	exec: function(user, target) {
		let includeFocus = false
		return env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			hitSfx: {
				name: 'chomp',
				rate: 0.7
			},
			critExec: ({target}) =>{
				addStatus({target: target, status: "stun", length: 2})
				includeFocus = true
			},
			genExec: ({user,target})=> {
				if (Math.random() < 0.323) {
					addStatus({target: user,status: "surge", length: 1})
					addStatus({target: target, status: "stun", length: 1})
					if (includeFocus) {addStatus({target: user, status: "focused", length: 1})}
				}
			}
		})
	}
},

env.ACTIONS.back_to_stage = {
	slug: "back_to_stage",
	name: "Back to stage",
	type: 'support+target+self',
	//desc: "'oh not just yet!';'you cannot be unable to dance now!';'far too important for you to leave so early!'",
	verb: "Call back",
	//help: "IF STUN: +1-3T [ROT/DESTABILIZED/VULNERABLE/PUNCTURE]\nIF NO STUN: +2/3T EVASION",
	beneficial: true,
	details: {
		flavor: "'oh not just yet!';'you cannot be unable to dance now!';'far too important for you to leave so early!'",
		onHit: "'[STAT::amt]';'If [STATUS::stun] then +1-3T:[STATUS::rot]/[STATUS::destabilized]/[STATUS::vulnerable]/[STATUS::puncture]';'if no [STATUS::stun] then 1T:[STATUS::evasion]'",
		onCrit: "'if [STATUS::stun] then +2-3T:[STATUS::rot]/[STATUS::destabilized]/[STATUS::vulnerable]/[STATUS::puncture]';'if no [STATUS::stun] then 3T:[STATUS::evasion]'",
	},
	usage: {
		act: "%USER FORCES %TARGET TO KEEP ACTING",
		hit: "%TAREGET IS SICKLY BACK ON THEIR FEET",
		crit: "%TARGET IS BACK ON THEIR FEET"
	},
	stats: {
		accuracy: 1,
		crit: 0.3,
		amt: 2,
		status:{
			stun: {name: "stun", length:1},
			rot: {name: "rot", showReference: true},
			destabilized: {name: "destabilized", showReference: true},
			vulnerable: {name: "vulnerable", showReference: true},
			puncture: {name: "puncture", showReference: true},
			evasion: {name: "evasion", showReference: true},
		}
	},
	exec: function(user, target) {
		let consequenceChoices =["rot", "destabilized", "vulnerable", "puncture"]
		let pickedConsequence = consequenceChoices.sample()

		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			hitSfx: {
				name: 'chomp',
				rate: 0.7
			},
			critExec: ({target}) =>{
				if (hasStatus(target, "stun")) {
					if (pickedConsequence == "rot") {
						consequenceLength = 1
					} else {
						consequenceLength = 2
					}
					addStatus({target:target, status: pickedConsequence, length: consequenceLength})
					removeStatus(target, "stun")
				} else {
					addStatus({target: target,status: "evasion",legnth: 3})
				}
			},
			hitExec: ({target}) =>{
				if (hasStatus(target, "stun")) {
					if (pickedConsequence == "rot") {
						consequenceLength = 2
					} else {
						consequenceLength = 3
					}
					addStatus({target: target, status: pickedConsequence, length: consequenceLength})
					removeStatus(target, "stun")
				} else {
					addStatus({target: target,status: "evasion",legnth: 3})
				}
			}
		})
		/*if (hasStatus(target, "stun")) {
			env.GENERIC_ACTIONS.singleTarget({
				action,
				user,
				target,
				hitSfx: {
					name: 'chomp',
					rate: 0.7
				},
				critExec: ({target}) =>{
					if (pickedConsequence == "rot") {
						consequenceLength = 1
					} else {
						consequenceLength = 2
					}
					combatHit(target, {amt: 1, autohit: true, redirectable: false})
					addStatus({target:target, status: pickedConsequence, length: consequenceLength})
				},
				hitExec: ({target}) =>{
					if (pickedConsequence == "rot") {
						consequenceLength = 2
					} else {
						consequenceLength = 3
					}
					combatHit(target, {amt: 2, autohit: true, redirectable: false})
					addStatus({target: target, status: pickedConsequence, length: consequenceLength})
				},
      			genExec: ({target}) => {
					removeStatus(target, "stun")
				}
			})
		} else {
			env.GENERIC_ACTIONS.singleTarget({
				action,
				user,
				target,
				hitSfx: {
					name: 'chomp',
					rate: 0.7
				},
				critExec: ({target}) => {
					addStatus({target: target,status: "evasion",legnth: 3})
				},
				hitExec: ({target})=>{
					addStatus(target, "evasion")
				}
			})
		} */		
	}
},

env.ACTIONS.velnits_lament = {
	slug: "velnits_lament",
	name: "velnit's lament",
	type: 'support+target+self+autohit',
	//desc: "'O, so my act come to an end';'a well earned break from this play!';'for you however';'must pick up the pace!'",
	verb: "lament",
	//help: "IF TEAMMATE: -SURGE +WILD SURGE\nIF SELF: -SURGE +WILDSURGE +1T STUN +2T VULNERABLE",
	details: {
		flavor: "'O, so my act come to an end';'a well earned break from this play!';'for you however';'must pick up the pace!'",
		onHit: "'TEAMMATE: -[STATUS::surge] +[STATUS::wild_surge]';'SELF: -[STATUS::surge] +[STATUS::stun] +[STATUS::vulnerable] +[STATUS::wild_surge]'",
	},
	usage: {
		act: "%USER SACRIFICES A BIT OF THEIRSELF",
		hit: "%TARGET IS SLIGHTLY EMPOWERED"
	},
	stats: {
		crit: 0.2,
		amt: 2,
		status: {
			surge: {name: "surge", showReference: true},
			wild_surge: {name: "wild_surge", showReference:true},
			stun: {name: "stun", length: 1},
			vulnerable: {name: "vulnerable", length: 2},
		},
	},
	exec: function(user, target) {
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			hitSfx: {
				name: "bingbong",
				rate: 1,
			},
			genExec: ({target, user}) => {
				if (hasStatus(target, "surge")) {
					removeStatus(target, "surge")
					addStatus({target: target, status:"wild_surge", length: 1})
					if (target == user) {
						addStatus({target:user,status: "vulnerable", length: 2})
						addStatus({target: user,status: "stun", length: 1})
					}
				}
			}
		})
	}
},

env.ACTIONS.player_show = {
	slug: "player_show",
	name: "SHOWMANSHIP",
	type: 'target',
	//desc: "'SEE HOW THEY FALL!';'THEY THOUGHT THEY WERE LAUGHING DOWN AT US';'ONLY FOR US TO SWEEP THEIR KNEES!'",
	verb: "Heckle",
	//help: "aaaaaaaa",
	details: {
		flavor: "'SEE HOW THEY FALL!';'THEY THOUGHT THEY WERE LAUGHING DOWN AT US';'ONLY FOR US TO SWEEP THEIR KNEES!'",
		onHit: "'90% Target 3: [STAT::amt] 50% [STATUS::vulnerable]'",
		onCrit: "'20% Teamwide: [STAT::amt] 10% [STATUS::stun] 75% [STATUS::vulnerable]'"
	},
	usage: {
		act: "%USER PUTS ON A SHOW",
		hit: "%TARGET IS KNOCKED OFF BALANCE",
		crit: "%TARGET AND THEIR TEAM ARE STUNNED",
		miss: "%USER MESSES UP AN ACT"
	},
	stats: {
		accuracy: 0.9,
		crit: 0.2,
		amt: 1,
		status:{
			vulnerable: {name: "vulnerable", length: 2},
			stun: {name: "stun", length: 1},
		},
	},
	exec: function(user, target) {
		let action = this
		let targetTeam
		switch(user.team.name) {
			case "ally": targetTeam = env.rpg.enemyTeam; break;
			case "enemy": targetTeam = env.rpg.allyTeam; break;
		}
		let validTargets = targetTeam.members.filter(member => member.state != "dead" && member.state != "lastStand")
		if(validTargets.length) for (let i = 1; i <=3; i++) {
			if (validTargets) {
				let target = validTargets.sample()
				setTimeout(()=>{
					env.GENERIC_ACTIONS.singleTarget({
						action,
						user,
						target,
						hitSfx: { name: 'shot2' },
						critSfx: { name: 'shot6' },
						hitExec: ({target}) => {
							if (Math.random() < 0.5) {
								addStatus(target, "vulnerable")
							}
							//useAction(user, action, actor, {triggerActionUseEvent: false, beingUsedAsync: true, reason: "Showmanship"})
						},
						critExec: ({target}) => {
							if (i<2) {
								env.GENERIC_ACTIONS.teamWave({
									team: target.team,	
									exec: (actor, i) => {
										if(actor == target) return; // we skip the original target
										if (Math.random() < 0.1) {
											addStatus(target, "stun")
										}
										if (Math.random() < 0.75) {
											addStatus({target: target,status: "vulnerable",length: 2})
										}
										//useAction(user, action, actor, {triggerActionUseEvent: false, beingUsedAsync: true, reason: "Showmanship"})
									}
								})
							}
						}
					})
				}, 500)
			}
		}
	}
},

env.ACTIONS.player_act = {
	slug: "player_act",
	name: "BREAKS END",
	type: 'support+autohit+target+self',
	//desc: "'STARVED THIN AND CHITTIN SCATTERED';'YOU MUST CONTINUE!';'VELZIE DEMANDS! VELZIE COMMANDS!'",
	verb: "Work on",
	//help: "aaaaaaaaaa",
	details: {
		flavor: "'STARVED THIN AND CHITTIN SCATTERED';'YOU MUST CONTINUE!';'VELZIE DEMANDS! VELZIE COMMANDS!'",
		onHit: "'[STAT::amt], -[STATUS::stun] add [STATUS::surge] and [STATUS::destabilized],[STATUS::vulnerable],[STATUS::puncture],or [STATUS::rot]';'else [STATUS::evasion]'",
		onCrit: "'-[STATUS::stun], add [STATUS::surge] and 3T:[STATUS::destabilized]'"
	},
	stats: {
		accuracy: 1,
		crit:0.25,
		amt:2,
		status: {
			stun: {name: "stun", showreference: true},
			surge: {name: "surge", showReference: true},
			destabilized: {name: "destabilized", showReference: true},
			vulnerable: {name: "vulnerable", showReference: true},
			puncture: {name: "puncture", showReference: true},
			rot: {name: "rot", showReference: true},
			evasion: {name: "evasion", showreference: true},
		},
	},
	exec: function(user,target) {
		let consequenceChoices =["rot", "destabilized", "vulnerable", "puncture"]
		let pickedConsequence = consequenceChoices.sample()
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			hitSfx: {
				name: 'stab',
				rate: 0.7
			},
			critExec: ({target}) =>{
				if (hasStatus(target, "stun")) {
					pickedConsequence = "destabilized"
					addStatus({target: target, status: "surge", length: 1})
				} else {
					addStatus({target: target,status: "evasion",legnth: 1})
				}
			},
			hitExec: ({target}) =>{
				if (hasStatus(target, "stun")) {
					if (pickedConsequence == "rot") {
						consequenceLength = 2
					} else {
						consequenceLength = 3
					}
					addStatus({target: target, status: pickedConsequence, length: consequenceLength})
				} else {
					addStatus({target: target, status: "evasion", length: 2})
				}
			}
		})
		if (hasStatus(target, "stun")) {
			removeStatus(target, "stun")
		}
		/*if (hasStatus(target, "stun")) {
			env.GENERIC_ACTIONS.singleTarget({
				action,
				user,
				target,
				hitSfx: {
					name: 'chomp',
					rate: 0.7
				},
				critExec: ({target}) =>{
					if (pickedConsequence == "rot") {
						consequenceLength = 1
					} else {
						consequenceLength = 2
					}
					combatHit(target, {amt: 1, autohit: true, redirectable: false})
					addStatus({target:target, status: pickedConsequence, length: consequenceLength})
				},
				hitExec: ({target}) =>{
					if (pickedConsequence == "rot") {
						consequenceLength = 2
					} else {
						consequenceLength = 3
					}
					combatHit(target, {amt: 2, autohit: true, redirectable: false})
					addStatus({target: target, status: pickedConsequence, length: consequenceLength})
				},
				genExec: ({target}) => {
					removeStatus(target, "stun")
				}
			})
			} else {
				env.GENERIC_ACTIONS.singleTarget({
					action,
					user,
					target,
					hitSfx: {
						name: 'chomp',
						rate: 0.7
					},
					critExec: ({target}) => {
						addStatus({target: target,status: "evasion",legnth: 3})
					},
				hitExec: ({target})=>{
					addStatus(target, "evasion")
				}
			})
		}*/
	}
},

env.ACTIONS.player_sacri = {
	slug: "player_sacri",
	name: "Sacrifical Act",
	type: 'autohit+target',
	//desc: "'LET THE SHOW GO FORTH! AGAIN!';'LET VELZIE VIEW OUR CRUDE IMMITATIONS';'FOR THAT WILL ONLY INSPIRE US MORE!'",
	//help: "IF TARGET HAS SURGE, -SURGE +WILDSURGE +1T EMPOWERED +2T FOCUSED/nIF ON SELF:-4HP,+2T FEAR, +1T STUN, +1T VULNERABLE +1T WILD",
	verb: "Empower",
	details: {
		flavor: "'LET THE SHOW GO FORTH! AGAIN!';'LET VELZIE VIEW OUR CRUDE IMMITATIONS';'FOR THAT WILL ONLY INSPIRE US MORE!'",
		onUse: "'if target has [STATUS::surge], remove [SATUS::surge] and add [STATUS::wild_surge]';'if target is self: -4HP, +2T:[STATUS::fear], [STATUS::stun], [STATUS::vulnerable], [STATUS::wild_surge]'"
	},
	stats: {
		accuracy: 1,
		crit: 0.5,
		amt: 3,
		status: {
			surge: { name: "surge", showReference: true},
			wild_surge: {name: "wild_surge", showReference: true},
			stun: {name: "stun", length: 1},
			vulnerable: {name: "vulnerable", length: 1},
			fear: {name: "fear", length: 2}
		},
	},
	exec: function(user,target){
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			hitSfx: {
				name: 'stab',
				rate: 3
			},
			genExec: ({target}) => {
				if (target == user) {
					combatHit(user, {amt:4, autohit: true, redirectable:false})
					if (hasStatus(user,"surge")) {
						addStatus({target: user, status: "wild_surge", length: 1})
						addStatus({target: user, status:"fear", length:2})
						addStatus({target: user, status: "stun", length: 1})
						addStatus({target: user, status: "vulnerable", length: 1})
					}
				} else {
					combatHit(user, {amt:4, autohit:true, redirectable:false})
					if (hasStatus(target,"surge")) {
						addStatus({target: target, status: "wild_surge", length: 1})
						addStatus({target: target, status: "empowered", length: 2})
						addStatus({target: target, status: "focused", length: 3})
					}
				}
			}
		})
		if (hasStatus(target, "surge")) {
			removeStatus(user,"surge")
		}
		/*if (target == user) {
			env.GENERIC_ACTIONS.singleTarget({
				action,
				user,
				target,
				hitSfx: {
					name: 'chomp',
					rate: 3
				},
				genExec: ({user}) => {
					combatHit(user, {amt:4, autohit: true, redirectable:false})
					if (hasStatus(user,"surge")) {
						removeStatus(user,"surge")
					}
					addStatus(user,"wild_surge")
					addStatus({target: user, status:"fear", length:2})
					addStatus(user, "stun")
					addStatus(user, "vulnerable")
				}
			})
		} else {
			env.GENERIC_ACTIONS.singleTarget({
				action,
				user,
				target,
				hitSfx: {
					name: 'chomp',
					rate: 0.7
				},
				genExec: ({target}) => {
					combatHit(user, {amt:4, autohit:true, redirectable:false})
					if (hasStatus(target,"surge")) {
						removeStatus(target,"surge")
						addStatus(target,"wild_surge")
					}
					addStatus({target: target, status: "empowered", length: 2})
					addStatus({target: target, status: "focused", length: 3})
				}
			})
		}*/
	}
},
//stupidhorrible
env.ACTIONS.pin_pull = {
	slug: "pin_pull",
	name: "Pin Pull",
	type: "autohit+target",
	verb: "ask",
	details: {
		flavor: "'Hey mind holding thsi for a second?';'yeah sure'",
		onUse: "'[STAT::amt] to user and target'"
	},
	usage: {
		act: "%USER HANDS %TARGET A COOKING BOMB",
		hit: "BOTH %USER AND %TARGET GET EXPLODED",
	},
	stats: {
		amt: 5,
	},
	exec: function(user, target){
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			hitSfx: {
				name: "hit",
				rate: 2.5,
			},
			genExec:({user}) => {
				combatHit(user,{amt: 5, autohit: true, redirectable:false})
			}
		})
	}
},

env.ACTIONS.brrrttrttt = {
	slug: "brrrttrttt",
	name: "Brrrttrttt",
	type: "autohit",
	details: {
		flavor: "Hehe the cousins combined one of their arms with dull technology';'now we have a mixed arms weapon!'",
		onUse: "'Hit 12 random actors'",
		onHit: "'[STAT::amt]'"
	},
	usage: {
		act: "%USER OPENS FIRE",
		hit: "%TARGET GETS HIT",
		crit: "%TARGET IS PIERCED",
		miss: "%TARGET DUCKS BEIND COVER"
	},
	stats: {
		accuracy: 1,
		crit: 0.2,
		amt: 1,
	},
	exec: function(user,target) {
		let action = this
		let AllTargets = []
			env.rpg.enemyTeam.members.forEach((target) => {
				if (target => target.state != "dead" && target.state != "lastStand") {
					AllTargets.push(target)
				}
			})
			env.rpg.allyTeam.members.forEach((target)=> {
				if (target => target.state != "dead" && target.state != "lastStand") {
					AllTargets.push(target)
				}
			})
		if(AllTargets.length) for (let i = 1; i <=12; i++) {
			if (AllTargets) {
				let target = AllTargets.sample()
				setTimeout(()=>{
					env.GENERIC_ACTIONS.singleTarget({
						action,
						user,
						target,
						hitSfx: { name: 'shot2' },
						critSfx: { name: 'shot6' }
					})
				}, 200)
			}
		}
	}
},

env.ACTIONS.puncture_bomb = {
	slug:"puncture_bomb",
	name: "Puncture Bomb",
	type: "autohit",
	details: {
		flavor: "'This is just like that one time i was an effigy!';'family guy cutaway gag here'",
		onUse: "'+5T:[STATUS::puncture] to everyone'",
		onHit: "'[STAT::amt]'",
	},
	usage: {
		act: "%USER throws bombs everywhere"
	},
	stats: {
		amt: 1,
		crit: 0,
		status: {
			puncture: {name: "puncture", showReference: true},
		},
	},
	exec: function(user,target) {
		let action = this
		let AllTargets = []
		env.rpg.enemyTeam.members.forEach((target) => {
			if (target => target.state != "dead" && target.state != "lastStand") {
				AllTargets.push(target)
			}
		})
		env.rpg.allyTeam.members.forEach((target)=> {
			if (target => target.state != "dead" && target.state != "lastStand") {
				AllTargets.push(target)
			}
		})
		AllTargets.forEach((target)=> {
			setTimeout(()=>{
				env.GENERIC_ACTIONS.singleTarget({
					action,
					user,
					target,
					hitSfx: { name: 'hit' },
					critSfx: { name: 'shot5' },
					genExec: ({target}) => {
						addStatus({target: target, status: "puncture", length: 5})
					}
				})
			}, 500)
		})
	}
},

env.ACTIONS.stupidhorrible_kaber = {
	slug: "stupidhorrible_kaber",
	name: "Kaber",
	type: "target",
	details: {
		flavor: "'What makes me a good Demoman?';'If I were a bad Demoman,';'I wouldn't be sittin' here, discussin' it with you now would I?'",
		onHit: "'[STAT::amt] to taget and user'",
	},
	usage: {
		act: "%USER runs at %TARGET with a bomb",
		hit: "%TARGET and %USER explode",
		crit: "%TARGET and %USER are blown to pieces"
	},
	stats: {
		amt: 5,
	},
	exec: function(user,target) {
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			hitSfx: {
				name: "shot4"
			},
			hitExec: ({user}) => {
				combatHit(user,{amt: 5, autohit: true, redirectable:false})
			}
		})
	}
},

env.ACTIONS.stupidhorrible_claymore = {
	slug: "stupidhorrible_claymore",
	name: "Claymore",
	type: "target",
	details: {
		flavor: "'Lets do it!';'Not one of yas gonna survive this!'",
		onHit: "'[STAT::amt]'",
		onCrit: "'USER+TARGET: [STATUS::puncture]'",
	},
	usage: {
		act: "%USER aims their gun",
		hit: "%TARGET is shot",
		crit: "%TARGET is pierced by the bullet",
		miss: "%USER's aim was way off"
	},
	stats:{
		amt: 3,
		accuracy: 0.8,
		crit: 0.15,
		status:{
			puncture: {name: "puncture", length:5}
		}
	},
	exec: function(user,target) {
		env.GENERIC_ACTIONS.singleTarget({
			action:this,
			user,
			target,
			hitSfx: { name: "shot4"},
			critSfx: { name: "shot4" },
			critExec: ({user}) => {
				addStatus({target: user, status: "puncture", length: 5})
				addStatus({target: target, status: "puncture", length: 5})
			}
		})
	}
},

env.ACTIONS.stupidhorrible_charge = {
	slug: "stupidhorrible_charge",
	name: "Charge",
	type: "autohit",
	details: {
		flavor: "'One crossed wire, one wayward pinch of potassium chlorate, one errant twitch... and kablooie!'",
		onUse: "'[STATUS::windup] [STATUS::focused]'",
	},
	usage: {
		act: "%USER prepares a bomb"
	},
	stats: {
		status: {
			windup: {
				name: 'windup',
				length: 1
			},
			focused: {
				name: 'focused',
				length: 2
			},
		},
	},
	exec: function(user) {
		addStatus({target: user, status: "windup", length: 1})
		addStatus({target: user, status: "focused", length: 2})
	}
},

env.ACTIONS.stupidhorrible_taunt = {
	slug: "stupidhorrible_taunt",
	name: "Taunt Kill",
	type: "laugh at",
	details: {
		flavor: "'So Tall you fine dandies so proud, so cocksure!';'Prancin aboot with your heads full of eyeballs!';'Come and get me I say!'",
		onUse: "'-[STATUS::windup]'",
		onHit: "'[STAT::amt], [STATUS::focused]'",
		onCrit: "'[STATUS::empowered]'",
	},
	usage: {
		act: "%USER laughs at %TARGET",
		hit: "%TARGET collapses",
		crit: "%TARGET explodes"
	},
	stats:{
		amt: 6,
		crit: 0.1,
		status: {
			windup: {name: "windup", showReference: true},
			empowered: {name: "empowered", length: 5},
			focused: {name: "focused", length: 4}
		},
	},
	exec: function(user,target) {
		removeStatus(user, "windup")
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			hitExec: ({user}) => {
				addStatus({target: user, status: "focused", length: 4})
			},
			critexec: ({user}) => {
				addStatus({target: user, status: "empowered", length: 5})
			},
		})
	}
},

env.ACTIONS.stupidhorrible_blood = {
	slug: "stupidhorrible_blood",
	name: "Bloodshed",
	type: 'target',
	details: {
		flavor: "'Ill be waiting on ya with a whiff of the ol brimstone.';'Im a grim bloody fable... with an unhappy bloody end!';'Oh, theyre going to have to glue you back together... in hell!'",
		onHit: "'[STAT::amt] [STATUS::windup]'",
		onCrit: "'[STATUS::focused] [STATUS::empowered]'",
	},
	usage: {
		act: "%USER runs at %TARGET with a sword?",
		hit: "%TARGET is slashed",
		crit: "%TARGET is heavily wounded",
		miss: "%USER trips on a rock"
	},
	stats: {
		amt: 6,
		crit: 0.15,
		status: {
			windup: {name: "windup", showReference: true},
			empowered: {name: "empowered", length: 2},
			focused: {name: "focused", length: 2},
		},
	},
	exec: function(user,target) {
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			hitExec: ({target}) => {
				addStatus({target: user, status: "windup", length: 1})
			},
			critexec: ({target}) => {
				addStatus({target: user, status: "empowered", length: 2})
				addStatus({target: user, status: "focused", length: 2})
			},
		})
	}
},

env.ACTIONS.stupidhorrible_colonthree = { //somehow githubs pushing broke.
	slug: "stupidhorrible_colonthree",
	name: "Realistic MP5",
	verb: "target",
	type: "autohit",
	details: {
		flavor: "Oh boy waht a nice GUN';'i love GUNs'",
		onUse: "'75% to target 30 random actors'",
		onHit: "'[STAT::amt]'",
		onCrit: "'[STATUS::empowered]'"
	},
	usage: {
		act: "%USER lets a rain of bullets fly"
	},
	stats: {
		accuracy: 0.75,
		crit: 0.09,
		amt: 1,
		status: {
			empowered: {name: "empowered", showReference: true}
		}
	},
	exec: function(user) {
		let action = this
		let AllTargets = []
			env.rpg.enemyTeam.members.forEach((target) => {
				if (target => target.state != "dead" && target.state != "lastStand") {
					AllTargets.push(target)
				}
			})
			env.rpg.allyTeam.members.forEach((target)=> {
				if (target => target.state != "dead" && target.state != "lastStand") {
					AllTargets.push(target)
				}
			})
		if(AllTargets.length) for(let i=0; i<30; i++){
			if (AllTargets) {
				let target = AllTargets.sample()
				setTimeout(()=>{
					env.GENERIC_ACTIONS.singleTarget({
						action,
						user,
						target,
						hitSfx: { name: 'shot2' },
						critSfx: { name: 'shot6' },
						critExec: ({user}) => {
							addStatus({target: user, status: "empowered", length: 1})
						},
					})
				}, 500)
			}
		}
	}
},

env.ACTIONS.stupidhorrible_buncture ={
	slug: "stupidhorrible_buncture",
	name: "Buncture Beam",
	verb: "blast",
	type: "special",
	autohit: true,
	details: {
		flavor: "'You may have gotten this far';'but its time for you to witness just a fraction of my power!'",
		onUse: "'[STATUS::puncture] to everyone';'[STATUS::rot] to allies'"
	},
	usage: {
		act: "%USER unleashes their BUNCTURE BEAM"
	},
	stats: {
		status:{
			puncture: {name: "puncture", length: 20},
			rot: {name: "rot", length: 5},
		}
	},
	exec: function(user,target) {
		let AllTargets = []
		env.rpg.enemyTeam.members.forEach((target) => {
			if (target => target.state != "dead" && target.state != "lastStand") {
				AllTargets.push(target)
			}
		})
		env.rpg.allyTeam.members.forEach((target)=> {
			if (target => target.state != "dead" && target.state != "lastStand") {
				AllTargets.push(target)
			}
		})
		if (AllTargets.length) {
			for (let i = 0; i < AllTargets.length; i++) {
				let target = AllTargets[i]
				env.GENERIC_ACTIONS.singleTarget({
					action: this,
					user,
					target,
					genExec: ()=> {
						if(!env.rpg.enemyTeam.members.includes(target)){
							addStatus({target: target, status: "rot", length: 5})
						}
						addStatus({target: target, status: "puncture", length: 20})
					}
				})
			}
		}
	}
},

env.ACTIONS.btgothwar = {
	slug: "btgothwar",
	name: "btgothwar",
	type: "target",
	verb: "use a rock to beat the head of",
	details: {
		flavor: "'do it';'fucking do it';'unleash the cain instinct'",
		onHit: "'[STAT::amt]'",
		onCrit: "'[STATUS::stun]'"
	},
	usage: {
		act: "%USER READIES THE ROCK",
		crit: "%TARGET GETS FUCKING BLUDGEONED",
		hit: "%TARGET GETS BONKED",
		miss: "%USER FUCKING FUMBLES AND FALLS BACKWARDS"
	},
	stats: {
		accuracy: 0.7,
		crit: 0.6,
		amt: 2,
		status: {
			stun: {name: "stun", showReference: true},
		},
	},
	exec: function(user,target) {
		let chancerolled = Math.random()
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			critExec: ({target}) => {
				addStatus({target: target, status: "stun", length: 1})
				if (chancerolled < 0.3) {
					addStatus({target: target,status: "minor_concussion", length: 3})
				}
			}
		})
	}
},
//smog
env.ACTIONS.smog_minute = {
	slug: "smog_minute",
	name: "Blinking Hand",
	type: "target",
	verb: "time",
	minute: 1,
	details: {
		flavor: "'A mediocre impact';'but still a timely one'",
		onHit: "'[STAT::amt]'",
	},
	usage: {
		act: "%USER TAKES A SWING",
		hit: "%TARGET IS HIT IN TIME",
		crit: "%TARGET IS STRUCK ON THE MINUTE",
		miss: "%USER misses the mark"
	},
	stats: {
		accuracy: 0.8,
		crit: 0.2,
		amt: 2
	},
	exec: function(user,target) {
		if (["elsen","Elsen","ELsen","ELSEN"].includes(target.name)) {
			addStatus({target: user, status: "regen", length: 2})
			console.log("Elsen was struck lmao")
		}
		amt = this.status.amt 
		env.GENERIC_ACTIONS.singleTarget({
			action:this,
			user,
			target,
			hitExec: ({target}) => {
				if (this.minute = 4) {
					amt = this.stats.amt + 4
					this.minute = 1
				} else {
					this.minute = this.minute + 1
				}
			}
		})
	}
},

env.ACTIONS.smog_hour = {
	slug: "smog_hour",
	name: "Winking Hand",
	type: "target",
	verb: "time",
	minute: 1,
	hour: 1,
	meridian: 1,
	second: 1,
	details: {
		flavor: "'Much stronger';'has a chance to stun now'",
		onHit: "'[STAT::amt]'",
		onCrit: "'[STATUS::stun]'",
	},
	usage: {
		act: "%USER TAKES A SWING",
		hit: "%TARGET GETS HIT ON THE HOUR",
		crit: "%TARGET GET STRUCK AS THE BELL RINGS",
		miss: "%TARGET is distracted by the bell"
	},
	stats: {
		accuracy: 0.15,
		crit: 0.15,
		amt: 4,
		status: {
			stun: {name: "stun", showReference: true},
		}
	},
	exec: function(user,target) {
		if (["elsen","Elsen","ELsen","ELSEN"].includes(target.name)) {
			addStatus({target: user, status: "regen", length: 3})
			console.log("Elsen was struck lmao")
		}
		amt = this.stats.amt
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			critStatus: this.stats.status.stun,
			hitExec: ({target}) => {
				if (target.name.includes("Elsen")) {
					addStatus({target: user, status: "regen", length: 1})
				}
				if (this.second = 3) {
					this.second = 1
					addStatus(user, "focused")
				} else {
					this.second = this.second + 1
				}
				if (this.minute = 4) {
					this.minute = 1
					amt = this.stats.amt + 4
				} else {
					this.minute = this.minute + 1
				}
				if (this.hour = 6) {
					this.hour = 1
					addStatus({target: user, status: "empowered", length: 2})
				} else {
					this.hour = this.hour + 1
				}
				if (this.meridian = 12) {
					this.meridian = 1
					addStatus(user, "surge")
				} else {
					this.meridian = this.meridian + 1
				}
			},
			critExec: ({target}) => {
				if (target.name.includes("Elsen")) {
					addStatus({target: user, status: "regen", length: 2})
				}
			}
		})
	}
},

env.ACTIONS.smog_haze = {
	slug: "smog_haze",
	name: "Haze",
	type: "support+target+self+autohit",
	verb: "shroud",
	details: {
		flavor: "'Surround an ally with smog';'Heal them and make them harder to hit'",
		onHit: "'2T:[STATUS::regen] 2T:[STATUS::evasion]'",
		onCrit: "'4T:[STATUS::regen] 5T:[STATUS::evasion]'",
	},
	usage: {
		act: "%USER SHROUDS %TARGET",
		hit: "%TARGET IS SHADOWED",
		crit: "%TARGET IS HIDDEN IN THE SMOG"
	},
	stats: {
		accuracy: 1,
		crit: 0.15,
		amt: 0,
		status: {
			regen: {name: "regen", showReference: true},
			evasion: {name: "evasion", showReference: true},
		},
	},
	exec: function(user,target) {
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			hitExec: ({target}) => {
				addStatus({target: target, status: "regen", length: 2})
				addStatus({target: target, status: "evasion", length: 2})
			},
			critExec: ({target}) => {
				addStatus({target: target, status: "regen", length: 2})
				addStatus({target: target, status: "evasion", length: 3})
			}
		})
	}
},

env.ACTIONS.smog_cloud = {
	slug: "smog_cloud",
	name: "Cloud",
	type: "autohit+support",
	details: {
		flavor: "'Shroud the entire team in smog';'harder to be hit if you cannot be seen'",
		onUse: "'[STATUS::regen] [STATUS::evasion] to team'"
	},
	usage: {
		act: "%USER OBSCURES THEIR TEAM"
	},
	stats: {
		status: {
			regen: {name: "regen", length: 4},
			evasion: {name: "evasion", length: 5},
		}
	},
	exec: function(user, target) {
		play("talkchoir7", 2)

		env.GENERIC_ACTIONS.teamWave({
			team: user.team,
			exec: (actor, i)=>{
				addStatus({target: actor, origin: user, status: "regen", origin: user, length: 4})
				addStatus({target: actor, origin: user, status: "evasion", origin: user, length: 5})
				play('mend', 0.5);
			}
		})
	}
},

env.ACTIONS.smog_chatter = {
	slug: "smog_chatter",
	name: "Chatter",
	type: "autohit",
	details: {
		flavor: "'Call a voice';'a weak voice but a voice none the less'",
		onUse: "'Call a speech bubble'",
	},
	usage: {
		act: "%USER MOLDS THEIR VOICE SOFTLY",
	},
	exec: function() {
		let rand = Math.random()
		play('talkfairy', 0.5);
		if (rand > 0.5) {
			midCombatAllyAdd("speech_bubble_weak", "left")
		} else {
			midCombatAllyAdd("speech_bubble_weak", "right")
		}
	}
},

env.ACTIONS.smog_shout ={
	slug: "smog_shout",
	name: "Shout",
	type: "autohit",
	details: {
		flavor: "'Call a voice';'a Strong voice but a voice none the less'",
		onUse: "'Call a much more violent speech bubble'",
	},
	usage: {
		act: "%USER SHAPES THEIR VOICE SHARPLY"
	},
	exec: function(user) {
		let rand = Math.random()
		play('okidoia1', 0.5);
		if (rand > 0.5) {
			if (hasStatus(user,"smog_scream")) {
				midCombatAllyAdd("threat_bubble", "left")
			} else {
				midCombatAllyAdd("speech_bubble_strong", "left")
			}
		} else {
			if (hasStatus(user,"smog_scream")) {
				midCombatAllyAdd("threat_bubble", "right")
			} else {
				midCombatAllyAdd("speech_bubble_strong", "right")
			}
		}
	}
},

env.ACTIONS.directional_rain = {
	slug: "directional_rain",
	name: "Directional Rain",
	type: "target",
	verb: "rain on",
	description: {
		flavor: "'A dreary day';'You could catch a cold'",
		onHit: "'+3-4T:[STATUS::clouded_lungs]';'[STAT::amt]'",
		onCrit: "'+6-8T:[STATUS::clouded_lungs]'"
	},
	usage :{
		act: "%USER CALLS FOR RAIN",
		hit: "%TARGET IS CAUGHT IN THE STORM",
		crit: "%TARGET GETS THE CHILLS",
		miss: "%TARGET AVOIDS THE RAIN",
	},
	stats: {
		accuracy: 0.7,
		crit: 0.1,
		amt: 1,
		status: {
			clouded_lungs: {name: "clouded_lungs", showReference: true},
		},
	},
	exec: function(user,target) {
		let durationVal = [3,4]
		play('destabilize', 0.75, 0.5);
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			hitExec: ({target})=> {
				addStatus({target: target, status: "clouded_lungs", length: durationVal.sample()})
			},
			critExec: ({target}) => {
				addStatus({target: target, status: "clouded_lungs", length: durationVal.sample()})
			}
		})
	}
},

env.ACTIONS.cough = {
	slug: "cough",
	name: "Cough",
	type: "self+autohit",
	description: {
		flavor: "'you just cough. thats it.'",
		onUse: "'REMOVE 1-3T:[STATUS::clouded_lungs]'"
	},
	usage: {
		act: "%USER coughs weakly"
	},
	stats: {
		status: {
			clouded_lungs: {name: "clouded_lungs", showReference: true},
		},
	},
	exec: function(user) {
		if (hasStatus(user, "clouded_lungs")) {
			let removeLength = [-1,-2,-3]
			addStatus({target: user, status: "clouded_lungs", length: removeLength.sample()})
		}
	}
},

env.ACTIONS.harsh_noise = {
	slug: "harsh_noise",
	name: "Hars Noise",
	type: "target",
	details: {
		flavor: "'Emit a painful sound','has a chance to silence foes'",
		onHit: "'[STAT::amt]'",
		onCrit: "'[STATUS::muted]'",
	},
	usage: {
		act: "%USER emits a painful noise",
		hit: "%TARGET's head hurts",
		crit: "%TARGET's thoughts are derailed",
		miss: "%USER's voice cuts out"
	},
	stats: {
		accuracy: 0.82,
		crit: 0.125,
		amt: 2,
		status: {
			muted: {name: "muted", length: 3},
		},
	},
	exec: function(user,target) {
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			critExec: ({target}) => {
				addStatus({target: target, status: "muted", length: 3})
			}
		})
	}
},

env.ACTIONS.mockery = {
	slug: "mockery",
	name: "Mockery",
	type: "autohit+target",
	dtails: {
		flavor: "taunt your foes",
		onUse: "'USER [STATUS::focused] [STATUS::vulnerable]';'FOE [STATUS::destabilized] [STATUS::critical_flaw]'"
	},
	usage: {
		act: "%USER taunts %TARGET"
	},
	stats: {
		status: {
			destabilized : {name: "destabilized", length: 3},
			critical_flaw : {name: "critical_flaw", length: 1},
			vulnerable: {name: "vulnerable", length: 2},
			focused: {name: "focused", length: 3},
		}
	},
	exec: function(user,target) {
		addStatus({target: target, status: "destabilized", length: 3})
		addStatus({target: target, status: "critical_flaw", length: 1})
		addStatus({target: user, status: "vulnerable", length: 2})
		addStatus({target: user, status: "focused", length: 3})
	}
},
//steel
env.ACTIONS.steel_scold = { //remember to make this give the status effect that causes damage on action and removes one turn from the action (check tick type i think)
	slug: "steel_scold",
	name: "Scold",
	type: "target",
	details: {
		flavor: "'Scold target';'instill fear into them'",
		onHit: "'[STAT::amt]'",
		onCrit: "'[STATUS::discipline]"
	},
	usage: {
		act: "%USER scolds %TARGET",
		hit: "%TARGET is nervous",
		crit: "%TARGET is fearful",
		miss: "%TARGET ignores %USER"
	},
	stats: {
		accuracy: 0.9,
		crit: 0.8,
		amt: 2,
		status :{
			discipline: {name: "discipline", length: 2},
			fear: {name: "fear", length: 2},
		},
	},
	exec: function(user,target) {
		env.GENERIC_ACTIONS.singleTarget({
			action:this,
			user,
			target,
			critExec: () => {
				addStatus({target: target, status: "discipline", length: 2})
				addStatus({target: target, status: "fear", length: 2})
			}
		})
	}
},

env.ACTIONS.steel_punish = {
	slug: "steel_punish",
	name: "Punsihment",
	type: "target",
	details: {
		flavor: "'Punish them for their ignorance';'Make them weak with fear'",
		onHit: "[STAT::amt]",
		onCrit: "[STATUS::discipline] [STATUS::weakened]"
	},
	usage: {
		act: "%USER claws at %TARGET",
		hit: "%TARGET is lightly scratched",
		crit: "%TARGET is slashed",
		miss: "%USER misses their swing"
	},
	stats: {
		amt: 1,
		crit: 0.2,
		accuracy: 0.82,
		status: {
			discipline: {name: "discipline", length: 3},
			weakened: {name: "weakened", length: 2},
		}
	},
	exec: function(user,target) {
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			critExec: () => {
				addStatus({target: target, status: "discipline", length: 3})
				addStatus({target: target, status: "weakened", length: 2})
			}
		})
	}
},

env.ACTIONS.steel_stand = { //This should be a defensive buff, most likely using carapce or smthn.
	slug: "steel_stand",
	name: "stand",
	type: "self+autohit+support",
	details: {
		flavor: "'Hold your ground';'Protect your subjects'",
		onUse: "'Gain [STATUS::carapace]'"
	},
	usage: {
		act: "%USER readies theirself"
	},
	stats: {
		status: {
			carapace: {name: "carapace",length: 2},
		}
	},
	exec: function(user) {
		play('mend', 0.5);
		combatHit(user, {amt: 1, autohit: true, redirectable: false})
		addStatus({target: user, status: "carapace", length : 2})
	},

	disableIf: (actor)=>{ if(hasStatus(actor,"fear")) return "PROHIBITED BY FEAR" },
	avoidChaining: true
},

env.ACTIONS.steel_songbird = {
	slug: "steel_songbird",
	name: "Songbird",
	type: "self+autohit+support",
	autohit: true,
	details: {
		flavor: "'songbird, oh songbird, what truly is wrong?';'do they not give you the destruction of those who oppose?'",
		onUse: "ALLIES: -2HP USER: [STATUS::carapace] [STATUS::empowered] per Ally"
	},
	usage: {
		act: "%USER siphons from their allies"
	},
	stats: {
		amt: 0,
		crit: 0,
		accuracy: 1,
		status: {
			carapace: {name: "carapace", length: 2},
			empowered: {name: "empowered", length: 2}
		}
	},
	disableIf: (actor)=>{ if(hasStatus(actor,"fear")) return "PROHIBITED BY FEAR" },
	exec: function(user, target) {
		play("talkchoir7", 2)

		env.GENERIC_ACTIONS.teamWave({
			team: user.team,
			exec: (actor, i)=>{
				if (actor != user) {
					combatHit(actor, {amt: 1, autohit: true, redirectable: false})
					addStatus({target: user, status: "carapace", length: 2})
					addStatus({target: user, status: "empowered", length: 2})
				} else {
					if(["Japhet", "Valérie", "Valerie"].includes(user.name)) {
						addStatus({target: user, status: "carapace", length: 2})
						if (["Valérie"].includes(user.name)) {
							addStatus({target: user, status: "regen", length: 2})
						}
					}
				}
			}
		})
	}
},

env.ACTIONS.steel_angel = {
	slug: "steel_angel",
	name: "Guarding Angel",
	type: "self+support+autohit",
	autohit: true,
	details: {
		flavor: "'sacrifice a part of yourself to protect others'",
		onUse: "ALLIES [STATUS::carapace], USER -2HP"
	},
	usage: {
		act: "%USER sacrifices a bit of thierself"
	},
	stats: {
		status: {
			carapace: {name: "carapace", length: 2}
		}
	},
	exec: function(user, target) {
		play("talkchoir7", 3)
		
		env.GENERIC_ACTIONS.teamWave({
			team: user.team,
			exec: (actor, i)=> {
				if (actor != user) {
					addStatus({target: actor, status: "carapace", length: 2})
				} else {
					combatHit(actor, {amt: 2, autohit: true, redirectable: false})
				}
			}
		})
	}
},

env.ACTIONS.alto = { //poor section, it should be a move that maybe passively gives BP instead of HP?
	slug: "alto",
	name: "Alto",
	type: "target",
	details: {
		flavor: "'does anyone read these?'",
		onHit: "'[STATUS::vibrato]'"
	},
	stats: {
		accuracy: 0.7,
		crit: 0.34,
		hit: 2,
		status: {
			vibrato: {
				name: "vibrato",
				length: 3
			}
		}
	},
	exec: function (user, target) {
		sendFloater({ //let them know whats going on!
			target: user,
			type: "arbitrary",
			arbitraryString: "ALTO!",
			isGood: true
		})
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			hitExec: ({user}) => {
				addStatus({target: user, status: "vibrato", length: 3})
			}
		})
	}
},

env.ACTIONS.strong_alto = {
	slug: "strong_alto",
	name: "Alto",
	type: "target",
	details: {
		flavor: "yeah no one prolly reads these. dont antishells use the humor itself?",
		onHit: "[STATUS::vibrato]"
	},
	stats: {
		accuracy: 0.7,
		crit: 0.42,
		amt: 3,
		status: {
			vibrato: {name: "vibrato", length: 5}
		}
	},
	exec: function (user, target) {
		sendFloater({ //let them know whats going on!
			target: user,
			type: "arbitrary",
			arbitraryString: "ALTO!",
			isGood: true
		})
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			hitExec: ({user}) => {
				addStatus({target: user, status: "vibrato", length: 5})
			}
		})
	}
},

env.ACTIONS.soprano = {
	slug: "soprano",
	name: "Soprano",
	type: "target",
	details: {
		flavor: "'Attack in a string of 12 notes';'end off on a High Note'",
		onHit: "'12*[STAT::amt], [STATUS::high_note]'"
	},
	stats: {
		accuracy: 0.7,
		crit: 0.12,
		amt: 2,
		status: {
			high_note: {name: "high_note", length: 5},
		},
	},
	exec: function(user,target) {
		sendFloater({ //let them know whats going on!
			target: user,
			type: "arbitrary",
			arbitraryString: "SOPRANO!",
			isGood: true
		})
		for (let i = 0; i <12; i++) {
			env.GENERIC_ACTIONS.singleTarget({
				action: this,
				user,
				target
			})
		}
		addStatus({target: user, status: "high_note", length: 5})
	}
},

env.ACTIONS.strong_soprano = {
	slug: "strong_soprano",
	name: "Soprano",
	type: "target",
	details: {
		flavor: "'Attack in a string of 12 notes';'end off in a [STATUS::high_note]'",
		onHit: "'12*[STAT::amt], [STATUS::high_note]'"
	},
	stats: {
		accuracy: 0.8,
		crit: 0.19,
		amt: 2,
		status: {
			high_note: {name: "high_note", length: 7}
		}
	},
	exec: function(user,target) {
		sendFloater({ //let them know whats going on!
			target: user,
			type: "arbitrary",
			arbitraryString: "SOPRANO!",
			isGood: true
		})
		for (let i = 0; i <12; i++) {
			env.GENERIC_ACTIONS.singleTarget({
				action: this,
				user,
				target
			})
		}
		addStatus({target: user, status: "high_note", length: 5})
	}
},

env.ACTIONS.tenor = {
	slug: "tenor",
	name: "Tenor",
	type: "autohit",
	details: {
		flavor: "'Wind up your voice for a burst';'show em whos boss'",
		onUse: "'[STAT::amt]';[STATUS::forte]'",
	},
	stats: {
		amt: 2,
		status: {
			forte: {name: "forte", length: 5},
		},
	},
	exec: function(user,target) {
		sendFloater({ //let them know whats going on!
			target: user,
			type: "arbitrary",
			arbitraryString: "TENOR!",
			isGood: true
		})
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			hitExec: ({user}) => {
				//addStatus({target: user, status: "windup", length: 1})
				addStatus({target: user, status: "forte", length: 5})
			}
		})
	},
},

env.ACTIONS.strong_tenor = {
	slug: "strong_tenor",
	name: "Tenor",
	type: "autohit",
	details: {
		flavor: "'Wind up your voice for a burst';'show em whos boss'",
		onUse: "'[STAT::amt]';'[STATUS::forte]'",
	},
	stats: {
		amt: 3,
		status: {
			forte: {name: "forte", length: 9},
		},
	},
	exec: function(user,target) {
		sendFloater({ //let them know whats going on!
			target: user,
			type: "arbitrary",
			arbitraryString: "TENOR!",
			isGood: true
		})
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			hitExec: ({user}) => {
				addStatus({target: user, status: "forte", length: 9})
			}
		})
	},
},

env.ACTIONS.head_voice = {
	slug: "head_voice",
	name: "Head Voice",
	type: "autohit",
	details: {
		flavor: "'i was gonna make a joke about opposite of bad chest feels dont touch your feet together but it doesnt work.'",
		onUse: "apply [STATUS::tuned]"
	},
	stats: {
		status: {
			tuned: {name: "tuned", length:5},
		},
	},
	exec: function(user,target) {
		sendFloater({ //let them know whats going on!
			target: user,
			type: "arbitrary",
			arbitraryString: "HEAD VOICE!",
			isGood: true
		})
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			hitExec: ({user}) => {
				addStatus({target: user, status: "tuned", length: 5})
			}
		})
	}
},

env.ACTIONS.strong_head_voice = {
	slug: "strong_head_voice",
	name: "Head Voice",
	type: "autohit",
	details: {
		flavor: "'i was gonna make a joke about opposite of bad chest feels dont touch your feet together but it doesnt work.'",
		onUse: "apply [STATUS::tuned]"
	},
	stats: {
		status: {
			tuned: {name: "tuned", length:5},
		},
	},
	exec: function(user,target) {
		sendFloater({ //let them know whats going on!
			target: user,
			type: "arbitrary",
			arbitraryString: "HEAD VOICE!",
			isGood: true
		})
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			hitExec: ({user}) => {
				addStatus({target: user, status: "tuned", length: 7})
			}
		})
	}
},

env.ACTIONS.steel_harmony = {
	slug: "steel_harmony",
	name: "Harmony",
	type: "target",
	verb: "harmonize at",
	details: {
		flavor: "'tune your weapon';'use one of the 4 ranges to harm';'chance of a unique status for each'",
		onUse: "'Randomize Action betwee: ALTO, SOPRANO, TENOR, HEAD-VOICE'"
	},
	usage: {
		act: "%USER sings a little tune"
	},
	stats: {
		accuracy: 1,
		crit: 0,
		amt: 0,
	},
	exec: function(user,target) {
		setTimeout(()=>{
			let AttackList = ["alto","soprano", "tenor", "head_voice"] //add alto back later
			let ChosenAttack = AttackList.sample()
			useAction(user, env.ACTIONS[ChosenAttack], target, {beingUsedAsync: false, reason: "harmony"})
		},
		env.ADVANCE_RATE * 0.5)
	}
},

env.ACTIONS.steel_strong_harmony = {
	slug: "steel_strong_harmony",
	name: "Scale",
	type: "target",
	verb: "harmonize at",
	details: {
		flavor: "'Strike the notes';'the ranges ring out longer yet stronger'",
		onUse: "'Randomize Action between: ALTO, SOPRANO, TENOR, HEAD-VOICE'"
	},
	usage: {
		act: "%USER sings a loud tune"
	},
	stats: {
		accuracy: 1,
		crit: 0,
		amt: 0,
	},
	exec: function(user,target) {
		setTimeout(()=>{
			let AttackList = ["strong_alto","strong_soprano", "strong_tenor", "strong_head_voice"] //add alto back later
			let ChosenAttack = AttackList.sample()
			useAction(user, env.ACTIONS[ChosenAttack], target, {beingUsedAsync: false, reason: "Scale"})
		},
		env.ADVANCE_RATE * 0.5)
	}
},

env.ACTIONS.shiny_reflection = {
	slug: "shiny_reflection",
	name: "Shiny Reflection",
	type: "target",
	details: {
		flavor: "'a bright day';'it feels freeing'",
		onUse: "[STATUS::glow]",
		onHit: "[STAT::amt]"
	},
	usage: {
		act: "%USER reflects light at %TARGET",
		hit: "%TARGET covers their eyes",
		crit: "%TARGET is blinded",
		miss: "the light makes a funny pattern on the wall"
	},
	stats: {
		amt: 2,
		crit: 0.2,
		accuracy: 0.8,
		status: {
			glow: {name: "glow", length: 5}
		}
	},
	exec: function(user,target) {
		addStatus({target: user, status: "glow", length: 5})
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target
		})
	}
},
//life
env.ACTIONS.life_seeding = {
	slug: "life_seeding",
	name: "Seeding",
	type: "target",
	details: {
		flavor: "'release potent parasites unto foe';'disorientate and disillusion'",
		onHit: "[STAT::amt] [STATUS::madness] [STATUS::fear]",
		onCrit: "ALL [STAT::amt] [STATUS::fear]",
	},
	usage: {
		act: "%USER throws strange seeds at %TARGET",
		hit: "%TARGET is swarmed by bugs",
		crit: "%TARGET and their team are swarmed",
		miss: "the seeds fall on the ground"
	},
	stats: {
		accuracy: 0.75,
		crit: 0.25,
		amt: 2,
		status: {
			madness: {name: "madness", showReference: true},
			fear: {name: "fear", length: 4}
		}
	},
	exec: function(user, target) {
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			hitExec: ()=>{
				addStatus({target: target, status: "fear", length: 4})
				addStatus({target: target, status: "madness", length: 1})
			},
			critExec: ()=> env.GENERIC_ACTIONS.teamWave({
				team: user.enemyTeam,
				exec: (actor, i) => {
					addStatus({target: actor, status: "fear", length: 4})
				}
			})
		})
	}
},

env.ACTIONS.life_ensnare = {
	slug: "life_ensnare",
	name: "Ensnare",
	type: "target",
	details: {
		flavor: "'trap foes within vines';'leave target open to devistating follow-up attacks'",
		onHit: "[STAT::amt] [STATUS::vulnerable]",
		onCrit: "[STATUS::vulnerable] [STATUS::stun]"
	},
	usage: {
		act: "%USER calls vines from the ground",
		hit: "%TARGET is bound lightly",
		crit: "%TARGET is tightly bound",
		miss: "the vines wither before they can reach"
	},
	stats: {
		accuracy: 0.9,
		crit: 0.25,
		amt: 2,
		status: {
			vulnerable: {name: "vulnerable", length: 3},
			stun: {name: "stun", length: 2}
		}
	},
	exec: function(user,target) {
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			hitExec: ()=> {
				addStatus({target: target, status: "vulnerable", length: 3})
			},
			critExec: ()=> {
				addStatus({target: target, status: "vulnerable", length: 3})
				addStatus({target: target, status: "stun", length: 2})
			}
		})
	}
},

env.ACTIONS.life_veilkstrider = {
	slug: "life_veilkstrider",
	name: "Veilkstrider",
	verb: "modify",
	type: "self+support+autohit",
	details: {
		flavor: "'modify body with spindly limbs reminiscent of young veilk';'enables passive evasion'",
		onUse: "[STATUS::deft]"
	},
	usage: {
		act: "%USER modifies their body"
	},
	stats:{
		status: {
			deft: {name: "deft", showReference: true}
		}
	},
	exec: function(user) {
		addStatus({target: user, status: "deft", length:1})
	}
},

env.ACTIONS.bash = {
	slug: "bash",
	name: "Bash",
	type: "target",
	details: {
		flavor: "'Bash your foes, Does not deal much damage'",
		onHit: "[STAT::amt]"
	},
	usage: {
		act: "%USER swings at %TARGET's head",
		hit: "%TARGET is bashed"
	},
	stats: {
		accuracy: 0.9,
		crit: 0,
		amt: 2
	},
	exec: function(user, target){
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
		})
	}
},

env.ACTIONS.life_repairs = {
	slug: "life_repairs",
	name: "Field Repairs",
	verb: "repair",
	type: "support+autohit+target+self",
	autohit: true,
	details: {
		flavor: "'Make quick repairs to an ally''",
		onUse: "[STATUS::regen] to target"
	},
	usage: {
		act: "%USER patches up %TARGET fast"
	},
	stats: {
		amt: 0,
		crit: 0,
		status: {
			regen: {name: "regen", length: 4}
		}
	},
	exec: function(user,target) {
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			hitStatus: {
				name: "regen",
				length: 4
			}
		})
	}
},

env.ACTIONS.life_tuvazu = {
	slug: "life_tuvazu",
	name: "Tuvazu Imports",
	verb: "seed",
	type: "target", //look this is done just to not run an autohit thing ok.
	details: {
		flavor: "'new plants that rot out anything';'make your foes rot'",
		onHit: "ALL FOES: [STATS::amt], 60%[STATUS::fear], 10% chance for [STATUS::rot], [STATUS::life_amalgamate]",
	},
	usage: {
		act: "%USER call forth native tuvazu plants",
		hit: "the plants root into %TARGET and their team"
	},
	stats: {
		amt: 1,
		status: {
			rot: {name: "rot", length: 2},
			fear: {name: "fear", length: 2},
			life_amalgamate: {name: "life_amalgamate", length: 2}
		}
	},
	exec: function(user,target) {
		env.GENERIC_ACTIONS.teamWave({
			team: user.enemyTeam,
			exec: (actor, i) => {
				if (Math.random() < 0.6) {
					addStatus({target: actor, status: "fear", length: 2})
				}
				if (Math.random() < 0.1) {
					addStatus({target: actor, status: "rot", length: 2})
					addStatus({target: actor, status: "life_amalgamate", length: 2})
				}
			}
		})
	}
},

env.ACTIONS.life_entomb = {
	slug: "life_entomb",
	name: "Entomb",
	type: "target",
	details: {
		flavor: "'strengthened vines to withold foes';'tear into them with the roots';'IMPORTANT: theres no crit'",
		onhit: "[STATS::amt], [STATUS::million_teeth], FOE+USER: [STATS:amtBP]"
	},
	usage: {
		act: "%USER calls forth stronger vines",
		hit: "the thorns brrow into %TARGET",
		miss: "the vines rot"
	},
	stats: {
		amt: 4,
		amtBP: 2,
		crit: 0,
		accuracy: 0.6,
		status: {
			million_teeth: {name: "million_teeth", length: 1}
		}
	},
	exec: function(user, target) {
		env.GENERIC_ACTIONS.singleTarget ({
			action: this,
			user,
			target,
			hitExec: ({user,target}) => {
				addStatus({target: target, status: "million_teeth", length: 1})
				target.bp = target.bp + 4
				user.bp = user.bp + 2
			}
		})
	}
},

env.ACTIONS.life_intimidating = {
	slug: "life_intimidating",
	name: "Intimidating Stance",
	type: "support+self+autohit",
	autohit: true,
	details: {
		flavor: "'modify to greatly increase size';'block incoming attacks and weaken blows of attackers'",
		onUse: "ALLIES: [STATUS::redirection], SELF: [STATUS::shattering_carapace]"
	},
	usage: {
		act: "%USER's body gets bigger"
	},
	stats: {
		status: {
			redirection: {name: "redirection", length: 2},
			shattering_carapace: {name: "shattering_carapace", length: 2},
		}
	},
	exec: function(user, target, beingUsedAsync) {

		addStatus({target: user, status: "shattering_carapace", length: 2, noReact: true})

		env.GENERIC_ACTIONS.teamWave({
			team: user.team,
			exec: (actor, i) => {
				if(actor.slug == user.slug) return
				addStatus({target: actor, origin: user, status: "redirection", length: 2}) 
				play('guard', 2, 0.75)
			},
			advanceAfterExec: true, beingUsedAsync, user,
		})
	}
},
//graceful
env.ACTIONS.parry = {
	slug: "parry",
	name: "Parry",
	type: "support+autohit+self",
	autohit: true,
	details: {
		flavor: "Hit the attack back",
		onUse: "[STATUS::parry]",
	},
	usage: {
		act: "%USER prepares theirself"
	},
	stats: {
		status: {
			parry: {name: "parry", showReference: true}
		}
	},
	exec: function(user) {
		addStatus({target: user, status: "parry", length: 1})
	}
},

env.ACTIONS.graceful_taint = {
	slug: "graceful_taint",
	name: "Taint",
	type: "target",
	details: {
		flavor: "led astray by the smell of flowers and a false promise...",
		onHit: "[STAT::amt] [STATUS::fear]"
	},
	usage: {
		act: "%USER lures %TARGET with a flowery scent",
		hit: "%TARGET follows along",
		crit: "%TARGET falls for the lie",
		miss: "%TARGET stays back"	
	},
	stats: {
		amt: 2,
		crit: 0.23,
		accuracy: 0.9,
		status: {
			fear: {name: "fear", length: 2}
		}
	},
	exec: function(user,target) {
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			hitStatus: {
				name: "fear",
				length: 2,
			}
		})
	}
},

env.ACTIONS.graceful_beacon = {
	slug: "graceful_beacon",
	name: "Beacon",
	type: "target",
	details: {
		flavor: "Shine bright my little star, Shine bright with His light and love",
		onUse: "x1~3 [STAT::amt]",
		onCrit: "x1~3 [STATUS::regen] or [STATUS::carapace]"
	},
	usage: {
		act: "%USER radiates light",
		hit: "%TARGET is blinded",
		crit: "%USER is blessed",
		miss: "the light fades"
	},
	stats: {
		amt: 1,
		crit: 0.43,
		accuracy: 0.7,
		status: {
			regen: {name: "regen", length: 3},
			carapace: {name: "carapace", length: 3}
		}
	},
	exec: function(user,target) {
		for (let i = 0; i < 3; i++) {
			env.GENERIC_ACTIONS.singleTarget({
				action: this,
				user,
				target,
				critExec: () => {
					if (Math.random() < 0.5) {
						addStatus({target: user, status: "regen", length: 3})
					} else {
						addStatus({target: user, status: "carapace",length: 3})
					}
				}
			})
		}
	}
},

env.ACTIONS.graceful_heed = {
	slug: "graceful_heed",
	name: "Heed",
	type: "support+self+autohit+target",
	autohit: true,
	details: {
		flavor: "Please... look away... I don't want you to look at me",
		onUse: "ALLIES: [STATUS::redirection] [STATUS::regen]"
	},
	usage: {
		act: "%USER cowers from view, the foes look at them"
	},
	stats: {
		amt: 0,
		crit: 0,
		accuracy: 1,
		status: {
			redirection: {name: "redirection", length: 2},
			regen: {name: "regen", length: 2}
		}
	},
	exec: function(user, target, beingUsedAsync) {
            
		env.GENERIC_ACTIONS.teamWave({
			team: user.team,
			exec: (actor, i) => {
				addStatus({target: user, status: "regen", length: 2, noReact: true}); 
				if(actor.slug == user.slug) return
				addStatus({target: actor, origin: user, status: "redirection", length: 2}); 
				play('guard', 2, 0.75);
			},
			advanceAfterExec: true, beingUsedAsync, user,
		})
	}
},
//kivcria
env.ACTIONS.kivcria_claw = { //rending claw, forgive me if this shit is ass- i have no experience coding with js frowny face emoji -:3
	slug: "kivcria_claw",
	name: "Rending Claw",
	type: 'target',
	anim: "basic-attack",
	details: {
		flavor: "'Claw fitted with dull nodes for splitting flesh';'used to eviscerate flesh and bone of any remaining infected'",
		onHit: "[STAT::amt] [STATUS::stun]",
        onCrit: "[STATUS::destabilized]",
        conditional: "<em>VS DESTABLIZED::</em>'additional [STAT::amt]' <em>MISS::<em>'hit user'"
	},
	usage: {
		act: "%USER READIES TO STRIKE %TARGET",
		hit: "%TARGET IS WOUNDED",
        crit: "%TARGET IN RENT APART",
        miss: "%USER MISSES THEIR STRIKE",
	},
	stats: {
        accuracy: 0.4,
		crit: 0.2,
		amt: 3,
		status: {
			stun: {name: "stun", length: 1},
            destabilized: {name: "destabilized", length: 2}
		}
	},
	exec: function(user, target) { //note to CC: okay action stuff here needs to be changed to actually be the attack, probably just borrow the miss stuff from HH and the extra damage from combatactions' miltza_attack
		amt = this.stats.amt
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			hitSfx: {
				name: 'stab', //keep this the same
				rate: 1.5 //this too
			},
			critStatus: this.stats.status.stun,
			hitExec: ({target}) => {
				if(hasStatus(target, "destabilized")) {
					amt = this.stats.amt + 3
				}
				if (Math.random() < 0.32) {
					addStatus({target: target, status: "destabilized", length: 2})
				}
			},
			critExec: ({target}) => {
				if (Math.random() < 0.32) {
					addStatus({target: target, status: "stun", length: 1})
				}
			},
			missExec: ({target}) => {
				if(user.hp > 0 && user.state != "lastStand" && hasStatus(target, "destabilized")) {
					env.setTimeout(()=>{
						useAction(user, this, user, {beingUsedAsync: true, reason: "wild claw miss"})
					}, 400)
				}
			}
		})
	}
},

env.ACTIONS.kivcria_lure = { //wee lure time. CC made the status effect for it, aka consequence_spread
	slug: "kivcria_lure",
	name: "Lure",
	type: 'target',
	anim: "basic-attack",
	usage: {
		act: "%USER REACHES AT %TARGET",
		hit: "%TARGET'S BODY IS INFESTED",
		miss: "%USER'S BAIT EXPIRES"
	},
	details: {
		flavor: "'bait targets to split face and reveal teeth'open opportunity to farthing infection';'a common practice of cavern-cleaners'",
		onUse: "'[STATUS::rot] ON SELF",
		onHit: "'[STAT::amt] [STATUS::consequence_spread]'",
	},
	stats: {
		autohit: true,
		amt: 1,
		status: {
			consequence_spread: {
				name: 'consequence_spread',
				length: 2,
			},
			rot : {
				name: 'rot', length: 2
			}
		}
	},   
	exec: function(user, target) {
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			hitSfx: {
				name: 'chomp',
				rate: 0.75
			},
			hitExec: ({target}) => {
				addStatus({target: target, status: this.stats.status.consequence_spread.name, length: this.stats.status.consequence_spread.length})
				addStatus({target: user, status: this.stats.status.rot.name, length: this.stats.status.rot.length})
			}//pray i removed the right shit hands praying emoji -:3
		})
	}
},

env.ACTIONS.kivcria_cyurtil = {
	slug: "kivcria_cyurtil",
	name: "Cyurtil",
	type: 'special',
	anim: "",
	details: {
		flavor: "'focused dull-projector used in clearing of infected areas';'mishandling often results in major harm'",
		onUse: "'[STATUS::spraying]';'HIT all foes'",
		onHit: "'[STATS::amt]';'chance to inflict several of the following';'[STATUS::destabilized]';'[STATUS::puncture]';'[STATUS::fear]';'[STATUS::vulnerable]'",
		onCrit: "'target foe 3 additional times'",
	},
	usage: {  //pray this actually works once and not per-target and spams the screen -:3
		act: "%USER READIES THE CYURTIL",
		hit: "%TARGET'S LIMBS ARE SHEERED AWAY",
		crit: "NOTHING REMAINS OF %TARGET",
		miss: "%USER'S AIM WAIVERS"
	},
	stats: {
    	accuracy: 0.3,
    	crit: 0.2,
		amt: 3,
		status: {
			spraying: {
				name: 'spraying',
				length: 2
			},
			destabilized: {
				name: 'destabilized',
				length: 2
			},
			puncture: {
				name: 'puncture',
				length: 3
			},
			fear: {
				name: 'fear',
				length: 2
			},
			vulnerable: {
				name: 'vulnerable',
				length: 2
			},
		},
	},
	exec: function(user, target, beingUsedAsync) {
			play("dull", 0.5)
            addStatus({target: user, status: "spraying", length: 2});

            env.GENERIC_ACTIONS.teamWave({
                team: user.enemyTeam,
                exec: (actor, i)=>{
                    let rand = Math.random() //okay non crit here. now to figure out how to make it hit multiple times. update: i do not know how to do that. sorry forwny face emoji -:3
                    if(rand < 0.25) {
                        play("dull", 0.5)
                        addStatus({target: actor, origin: user, status: "destabilized", length: 2});
                       
                    } else if(rand < 0.25) {
						play("dull", 0.5)

                        addStatus({target: actor, origin: user, status: "puncture", length: 3});

                    } else if(rand < 0.25) {
                        play("dull", 0.5)
                        addStatus({target: actor, origin: user, status: "fear", length: 2});

                    } else {
                        play("dull", 0.5)
                        addStatus({target: actor, origin: user, status: "fear", length: 2});
                    }
                },
            advanceAfterExec: true, beingUsedAsync, user,
			endCallback: ()=>{console.log('just called advance')}
		})
	}
},

env.ACTIONS.kivcria_fairylight = {
	slug: "kivcria_fairylight",
	name: "Fairylight",
	type: 'target',
	anim: "",
	verb: "cut",
	usage: {
		act: "%USER CUTS INTO %TARGET",
	},
	details: { // i also made the details stuff clearer and fixed some stylistic errors
		flavor: "'device used in the cutting of stone and alloy';'mounted fairy-vissage blade that sends scraps flying';'effective at both targeted and broad attacks'",
		onUse: "'HIT target 8 times'",
		onHit: "'[STAT::amt] [STATUS::puncture]'",
		onCrit: "'additional ';'HIT all foes for additional [STAT::amt] [STATUS::puncture] [STATUS::destabilized]';'additional hits trigger on-hit effects';'additional hits have 40% ACC and 70% CRT'"
	},
	stats: {
		accuracy: 0.3,
		crit: 0.3,
		amt: 1,
		status: {
			puncture: {
				name: "puncture",
				length: 1
			},
			destabilized: {
				name: "destabilized",
				length: 1
			}
		}
	},
	exec: function(user, target, beingUsedAsync) {
		let animElement = user.sprite || user.box
		let initialRate = env.bgm.rate()

		//animElement.classList.add('aiming')
		//if(!env.rpg.classList.contains("standoff")) ratween(env.bgm, initialRate + 0.5)
		//play('click1')

		let anim = env.COMBAT_ANIMS.shoot

		if(target) for (let i = 0; i < 8; i++) {
			let baseDelay = ((env.ADVANCE_RATE * 0.2) * i)
			let animDelay = baseDelay + anim.duration; // you can probably just remove the combat anim stuff if it wouldn't fit with the attack :P it would require a bit of re-tooling on your part but it is an option

			setTimeout(()=>anim.exec(this, user, target), baseDelay)
			setTimeout(()=>{
				env.GENERIC_ACTIONS.singleTarget({
					action: this, 
					user, 
					target,
					hitSfx: { name: "chomp", rate: 3 },
					hitStatus: this.stats.status.puncture,
					critExec: ({target})=> {
						addStatus({target: target, origin: user, status: "puncture", length: 1});
						addStatus({target: target, origin: user, status: "destabilized", length: 1});
						env.GENERIC_ACTIONS.teamWave({ // if this doesn't work, slap a return before it and see if that works
							team: user.enemyTeam,
							exec: (actor, i)=>{
								combatHit(actor, {amt: 1, crit: 0.7, accuracy: 0.4, origin: user});
								addStatus({target: actor, origin: user, status: "puncture", length: 1});
								addStatus({target: actor, origin: user, status: "destabilized", length: 1});
								play("shot", 1.25) // change this if you so desire
							}
						})
					}
				})

				animElement.classList.add('scramble')
				setTimeout(()=>animElement.classList.remove('scramble'), 100)
			}, animDelay)
		}

		setTimeout(()=>{
			//animElement.classList.remove('aiming')                
			if(!beingUsedAsync) advanceTurn(user)
			//if(!env.rpg.classList.contains("standoff")) ratween(env.bgm, env.bgm.intendedRate)
		}, (env.ADVANCE_RATE * 0.2) * 9)
	}
},

//Kivcria Secondary augment: Sporeburst
//use secri-containing bulbs to seed environment, rot through friend and foe alike
//on foes: 5t rot, +amalgamate (add puncture for amount of rot. check with embassy if it should be an after turn or additive thing)
//on allies: 3t rot
//type is special
env.ACTIONS.kivcria_sporeburst = {
	slug: "kivcria_sporeburst",
	name: "Sporeburst",
	type: "special",
	anim: "",
	usage: {
		act: "%USER THROWS BULBS EVERYWHERE"
	},
	details: {
		flavor: "'use secri-containing bulbs to seed environment';'rot through friend and foe alike'",
		onUse: "'[STATUS::rot]';'Hit everyone'",
		conditional: `<em>ON FOE::</em>'[STATUS::amalgamate]`
	},
	stats: {
		status: {
			rot: {name: "rot", length: 5},
			amalgamate: {name: "life_amalgamate", showReference: true}
		}
	},
	autohit: true,
	exec: (user, target, beingUsedAsync) => {
		env.GENERIC_ACTIONS.teamwave({
			team: user.enemyTeam,
			exec: (actor, i) => {
				addStatus({target: actor, origin: user, status: "fear", length: 5})
				addStatus({target: actor, origin: user, status: "life_amalgamate", length: 1})
			}
		})
		env.GENERIC_ACTIONS.teamwave({
			team: user.allyTeam,
			exec: (actor, i) => {
				addStatus({target: actor, origin: user, status: "rot", length: 3})
			}
		})
	}
},
//Kivcria Utility augment: Cavern Clear
//Experimentl dull-pulse augmented sprayer. used in an attempt to reclaim parts of tuvazu from extreme parasite infection, it did not work
//tzuvil
//on Foes: -1hp, 50% per to remove up to an aditional 3. on crit 25% per 5 (-1hp and 2t destabilized)
//on self: +2 dull cleansing (more outgoing damage per dull cleansing)
//80 hit 20 crit
env.ACTIONS.kivcria_cavernclear = {
	slug: "kivcria_cavernclear",
	name: "Cavern Clear",
	type: "special",
	anim: "",
	usage: {
		act: "%USER SPRAYS DULL BEAMS"
	},
	details: {
		flavor: "'Experimentl dull-pulse augmented sprayer';'used in an attempt to reclaim parts of tuvazu from extreme parasite infection';'it did not work'",
		onUse: "'[STATUS::dull_cleansing]';'HIT all foes'",
		onHit: "'[STAT::amt]';'50% per additional [STAT::amt] up to 3'",
		onCrit: "'25% per [STAT::amt] and [STATUS::destabilized]",
	},
	stats: {
		amt: 1,
		accuracy: 0.8,
		crit: 0.2,
		status: {
			destabilized: {name: "destabilized", length: 2},
			dull_cleansing: {name: "kivcria_dull", length: 2}
		}
	},
	exec: (user,target) => {
		addStatus({target: user, status: "kivcria_dull", length: 2})

		env.GENERIC_ACTIONS.teamwave({
			team: user.enemyTeam,
			exec: (actor, i) => {
				env.GENERIC_ACTIONS.singleTarget({
					action: this,
					user,
					target: actor,
					hitExec: ({target}) => {
						if (Math.random() < 0.5) {
							for (let i = 1; randomInt(1, 3); i++){
								combatHit(target, {amt: 1, acc: 1, crit: 0, origin: user})
							}
						}
					},
					critExec: ({target}) => {
						if (Math.random() < 0.25) {
							for (let i = 1; randomInt(1, 5); i++){
								combatHit(target, {amt: 1, acc: 1, crit: 0, origin: user})
								addStatus({target: target, origin: user, status: "destabilized", length: 2})
							}
						}
					}
				})
			}
		})
	}
},

env.ACTIONS.kivcria_jab = {
	slug: "kivcria_jab",
	name: "Rotten Jab",
	type: "target",
	anim: "",
	verb: "Jab",
	usage: {
		act: "%USER JABS %TARGET"
	},
	details: {
		flavor: "yucky fingerrrrrrrrrrr"
	},
	stats: {
		amt: 1,
		accuracy: 0.7,
		crit: 0,
		status: {
			rot: {name: "rot", length: 3}
		}
	},
	exec: (user, target) => {
		env.GENERIC_ACTIONS.singleTarget({
			action: this,
			user,
			target,
			hitSfx: { name: "status", rate: 3 },
			hitStatus: this.stats.status.rot
		})
	}
},

//decayed fenzy (-1hp, on crit repeat, 80% hit chance, 100% crit rate)
env.ACTIONS.kivcria_frenzy = {
	slug: "kivcria_frenzy",
	name: "Decayed Frenzy",
	type: "target",
	anim: "",
	verb: "claw",
	usage: {
		act: "%USER CLAWS AT %TARGET",
		hit: "%TARGET IS HURT, THEIR WOUNDS FESTER",
		crit: "IT HAS FOUND ITS TARGET, IT WANTS INSIDE"
	},
	details: {
		flavor: "'actor swipes their rotting claws at a target.';'it wants to spread.'",
		onHit: "'[STATUS::ROT], [STAT::amt]'",
		onCrit: "'use this action again'"
	},
	stats: {
		amt: 1,
		accuracy: 0.8,
		crit: 0.25,
		status: {
			rot: {name: "rot", length: 3}
		}
	},
	exec: function(user, target, beingUsedAsync, {actionMessageIndex} = {}) {
		let action = this
		return env.GENERIC_ACTIONS.singleTarget({
			action, 
			user, 
			target,
			hitSfx: {
				name: 'stab',
				rate: 1
			},
			critSfx: {
				name: 'stab',
				rate: 1.75
			},

			hitExec: ({target}) => {
				addStatus({target, status: "rot", length: 3});
			},

			critExec: ({target})=> {
				if(target.hp > 0 && target.state != "lastStand") {
					env.setTimeout(()=>{
						useAction(user, this, target, {beingUsedAsync: true, reason: "decaying frenzy", actionMessageIndex})
					}, 400)
				}
			}
		})
	}
},

env.ACTIONS.kivcria_viral = {
	slug: "kivcria_viral",
	name: "Virality Increase",
	type: "target+self+enemyrandom",
	usage: {
		act: "%USER(?) EMITS SPORES FROM THEIR BODY",
		hit: "THE SPORES SEEP INTO %TARGET",
		crit: "THE SPORES WRITHE INSIDE %TARGET",
		miss: "THE SPORES CLING TO %USER"
	},
	details: {
		flavor: "'it writhes inside, pupetteering the shell",
		onHit: "'[STATUS::destabilized], [STATUS::rot] on foes, [STATUS::rot] -1T on allies'",
		onCrit: "'additional [STATUS::destabilized]'",
		conditional: "MISS INFESTS THE USER WITH [STATUS::rot]"
	},
	stats: {
		range: 3,
		accuracy: 0.8,
		crit: 0.1,
		status: {
			destabilized: {
				name: 'destabilized',
				length: 3
			},
			rot: {
				name: 'rot',
				length: 3
			},
		}
	},
        
	ignoresBlocks: true,
	ignoresLOS: true,
	aoe: { 
		size: 1, 
		canHit: (actor) => { return true } 
	},
	exec: function(user, target) {
		return env.GENERIC_ACTIONS.singleTarget({
			action: this, 
			user, 
			target,
			hitSfx: { name: 'destabilize' },
			critSfx: { name: 'destabilize' },
			critStatus: this.stats.status.destabilized,
			hitStatus: this.stats.status.destabilized,
			beneficial: user.team.name == target.team.name, // per @brightcousinkuvi, bypasses redirection only if used intra-team
			hitExec: ({target}) => {
				if(target.team.name != user.team.name) {
					addStatus({target, status: this.stats.status.vulnerable.name, length: this.stats.status.rot.length})
				} else {
					addStatus({target, status: this.stats.status.evasion.name, length: this.stats.status.rot.length - 1})
				}
			},
			missExec: ({user}) => {
				addStatus({user, status: this.stats.status.rot.name, length: this.stats.status.rot.length})
			}
		})
	},
},

//misc
env.ACTIONS.energizer = {
	slug: "energizer",
	name: "Energizer",
	type: "support+autohit+target+self",
	itemAction: true,
	details: {
		flavor: "'It still seems to have power';'Why did a bright cousin throw it down there?'",
		onUse: "'Grant random level of surge'",
	},
	stats: {
		amt: 0,
	},
	exec: function(user, target) {
		env.GENERIC_ACTIONS.singleTarget({
			action:this,
			user,
			target,
			genExec: ({target}) => {
					addStatus({target: target, status: "surge", length: 1})
				if (Math.random() < 0.75) {
					addStatus({target: target, status: "wild_surge", length:1 })
				}
				if (Math.random() < 0.4) {
					addStatus({target: target, status: "exp_overload", length: 1})
				}
				if (Math.random() < 0.1) {
					addStatus({target: target, status: "tetration_shock", length: 1})
				}
			}
		})
	}
}

//END OF ACTIONS

//Personality

env.COMBAT_ACTORS.generic.reactionPersonalities.entropy = {
	evade: ["..."],
    crit: [ "get bent", "time ever winds, but yours shall be cut short"],
    crit_buff: [ "the clock will decay", "need more time?", "don't collapse now"],
    miss: ["stay still", "why must you move?", "fucker"],
    dead: ["..."],
    puncture: ["There still is time!", "oiuch"],
    regen: ["I... I live more?"],
    destabilized: ["everything's blurry"],
    stun: ["NONONONONONONO"],
	laugh: ["hehehehe", "ahaha!", "heehee!", "ehehehe!"],
    sacrifice: ["fuck this"],
    receive_hit: ["Ã…ÃÂ£"],
    receive_crit: [" µ|ðy€Cæá CHü!!","fuck"," µ|ðy€Cæá CHü!!"," µ|ðy€Cæá CHü!!"," µ|ðy€Cæá CHü!!"," µ|ðy€Cæá CHü!!"," µ|ðy€Cæá CHü!!"," µ|ðy€Cæá CHü!!"],
    receive_puncture: ["oh, some energy", "wanna see me ruin this?"],
    receive_buff: ["more energy?", "the end is delayed for now?"],
    receive_destabilized: ["¶Ê ´ ç] Ÿ§Ú"],
    receive_rez: ["i feel sick"],
    receive_carapace: ["this wont help", ""],
    receive_repairs: ["oh, more time"],
    receive_fear: ["i see the end...","where am i??"],
    receive_redirection: ["i'll make sure they dont kill you", "you will be hurt, and they will pay"],
},

env.COMBAT_ACTORS.generic.reactionPersonalities.surging = {
	evade: ["AGAIN!","COME ON TRY HARDER!!!","WHEEEEEEE"],
    crit: [ "AHAHAHAHA!!!", "BLEED FOR VELZIE!!!!","DID THAT HURTTTTT?"],
    crit_buff: [ "GO GO GOOOOO", "HURRY UP!!! VELZIE WATCHES!!", "VELZIE'S BLESSINGSSS"],
    miss: ["AHA PART OF THE ACT!!!", "IT SAID IT IN THE SCRIPT!!", "BLAME VELZIE!!!"],
    dead: ["I SHALL BE BACK!!!!"],
    puncture: ["OUHHH VELZIEEEE WATCH THIS", "AAHAHA MY INSIDES ARE ON DISPLAY!!!"],
    regen: ["NOOOOOOUUUHOUHGHHHH","STOPPPP STOP!!!!!","BUT VELZIE!!!!!"],
    destabilized: ["MY PlAYyyyYY!!","WoUUNd MEEEeEeEE!!!","IM vELZIesS SPeCiaL aCTOrrr"],
    stun: ["LET ME SHOWWWW OFFF!!!","IM FAIILINGGG!!!","LEEET ME GOOOOOOOOOO"],
    laugh: ["KEHEHHAHHEHAEEEE", "AKEJKEHEKKEKEJ", "SCREAMMHEHHEHEHEHE!!!!", "AHHEEEEE LIKE VELZIEEE!!!"],
    sacrifice: ["WITNESS MEEEE VELZIEE!!! LAUGH!!!!!"],
    receive_hit: ["YES YES JUST LIKE THAT!!!","WOUND WOUND WOUND!!!!","SHOW OFF!!!","FAVOUR MEEE!!!"],
    receive_crit: ["GET OUT GO AWAY OFF MY STAGE!!!!","BURN UNDER VELZIES GAZE","NO NO THIS IS MY STAGE!!! MY ACT!!!"],
    receive_puncture: ["YESSSSS BEHOLD MEEE", "SPLAY MY CORE!!!","NOTHING BUT SLUDGE!!!!!"],
    receive_buff: ["LET ME BLEED!!!", "STOPPPP BURDENING MEE!!!", "VELZIE CAN PROVIDE!!!!","LEEE T T   ME  D  DIE EE."],
    receive_destabilized: ["I CaN sEeEeeEEE HomE hEheHEHElEEp","MyYYY AAaCTTT!!!! ITT wAaATCHheSS!!"],
    receive_rez: ["I TOLD YOU SOOOOO HEHAHAH!!!"],
    receive_carapace: ["LEAVE ME BEEE!!!", "I HHOPE YOU BLEEDD","DDD IE."],
    receive_repairs: ["LISTTEN LISTENNN STO OOP.","EN D    Y  OUR  AC T."],
    receive_fear: ["S TT OP HOME   IS GG GONE.","LLET ME AC T   IN P EEACE."," CCE ACE E"],
    receive_redirection: ["AA IM FOR TT HEM BETTE R.", "G GG OD GOOD."],
},

env.COMBAT_ACTORS.generic.reactionPersonalities.stupidhorrible = {
	evade: ["nice try buddy","womp womp"],
    crit: [ "im so sigma! ... i meant that ironically okay ?", "yeah idiots do it me style lets go gng.", "ITS ALL ABOUT THE FUCKING GAME BAYBEE!!!"],
	crit_buff: [ "are you like. good", "walk it off like a wheelchair user. okay?", "lock in lock in."],
	miss: ["erm. oospies.", "thats my bad gng", "no its js a delayed maneuver. trust."],
	dead: ["theyre making me fight in the Bone War."],
	puncture: ["can some1 get it 2gether & help me.", "no dw ignore the blood im good."],
	regen: ["Oogh Yeah That's The Fent."],
	destabilized: ["a","e","i","o","u","uhhhmmm... y...?"],
	stun: ["is it just me or am i moving so fast i cant move.","this is jst bs man. lemme out of this prison. i am a totally law abbiding citizen my  man. yr locking me up 4 this shit? ill call my lawer. saul goodman. jelous asshat."],
	laugh: ["> kekekeke", "roflmao lol", "teehee owo", "im js a sillay thang."],
	sacrifice: ["um. this is awkjward."],
	receive_hit: ["my bones."],
	receive_crit: ["my organs."],
	receive_puncture: ["this shit aint nothin 2 me man.", "ygs cld NOT survive that. 42n8ly, yours Truly,"],
	receive_buff: ["omg thank you my baby gorilla", "ohhh ily my sigma bbg", "my baba grill yr so kind 2 me."],
	receive_destabilized: ["i think yr All beneath me but i js dont talk abt it. 4 yr sakes,"],
	receive_rez: ["were goodie gng lemme js lock in rq."],
	receive_carapace: ["im not a little bug alr im fine.", "since you INSIST."],
	receive_repairs: ["this is js like the convenience store: convenient!"],
	receive_fear: ["gordon ramsay voice fuck me thats frightening. bloody hell."],
	receive_redirection: ["what the fuck are you smoking.", "oh so yr like cooked. okay (not) nice knowing you.","CAN YOU LOCK THE FUCK IN????????"],
},
env.COMBAT_ACTORS.generic.reactionPersonalities.steel = {
	evade: ["GRRRRAH","KNOCK IT OUT YOU ROOKIE.","YOU'RE GONNA PAY FOR THAT..."],
    crit: ["GET BACK TO WORK"],
	crit_buff: ["End this already","Ill get this over with","Good for nothing..."],
	miss: ["You're just lucky...","shut UP ABOUT IT!"],
	dead: ["..."],
	puncture: ["eugh...","ill make YOU BLEED"],
	regen: ["Took you long enough.","useful as a specter..."],
	destabilized: ["this is not home..."],
	stun: ["WHEN I GET TO YOU ITS ALL OVER!"],
	laugh: ["HAHAHAHAHA","GAHHAHAAAAHAHAA"],
	sacrifice: ["you must expect ME to do all the work..."],
	receive_hit: ["Pathetic."],
	receive_crit: ["IM GOING TO END YOUR LIKES, FOOL"],
	receive_puncture: ["ill leave you BEGGING FOR MY MERCY"],
	receive_buff: ["Took you long enough...","should have done it SOONER..."],
	receive_destabilized: ["i... see... YOU..."],
	receive_rez: ["ALL OF YOU WILL BE OUT LONGER THAN ME!"],
	receive_carapace: ["yeah yeah, now GET BACK TO WORK", "hurry up..."],
	receive_repairs: ["fianlly useful for something..."],
	receive_fear: ["I-IM NOT AFRAID OF YOU!"],
	receive_redirection: ["pshh...","get in the way already.", "Trying to get out of work with your heroics?"],
},

env.COMBAT_ACTORS.generic.reactionPersonalities.smog = {
	evade: ["Try it again and you will die.","what part of 'im going to kill you' do you not understand?"],
    crit: ["Youre not even worth this"],
	crit_buff: ["Meet your end you sick specter."],
	miss: ["Next time youre dead."],
	dead: ["No..."],
	puncture: ["My body..."],
	regen: ["Ah, Thank you!", "I dont need your help."],
	destabilized: ["What?"],
	stun: ["Why can I move?"],
	laugh: ["HAHAHAHAHA"],
	sacrifice: ["Do my job in my stead"],
	receive_hit: ["Pathetic."],
	receive_crit: ["You insane specter..."],
	receive_puncture: ["You coward"],
	receive_buff: ["As timely as ever!","Useless"],
	receive_destabilized: ["Ill tear that smile off of your face"],
	receive_rez: ["Finally something done right."],
	receive_carapace: ["We shall end these specters together!", "Do your job."],
	receive_repairs: ["Thank you friend!"],
	receive_fear: ["Why you-"],
	receive_redirection: ["Good.","Maybe I wont have to see you alive.", "Stay out of my way."],
},

env.COMBAT_ACTORS.generic.reactionPersonalities.life = {
	evade: ["not as quick as you thought, hmm?","please refrain from doing that again.","please do not."],
    crit: ["sorry about that!!","ouch…","sorry sorry sorry-"],
	crit_buff: ["try not to hurt them too much-!","dont hurts them badly!","careful with that!"],
	miss: ["y-your welcome!!","cant we just be friends-?"],
	dead: ["o-oh…"],
	puncture: ["ah-","ill have to patch this up…"],
	regen: ["here you are!","try not to get hurt next time-!"],
	destabilized: ["w… why can’t we be friends…?","im trying to help-!!"],
	stun: ["whoops… sorry-!","please stop hurting eachother-!!"],
	laugh: ["tehehehee!!","mehehee!!"],
	sacrifice: ["ill try to heal you all, if I must-!"],
	receive_hit: ["owwie!!!","please don’t!!!"],
	receive_crit: ["youch-!!!","yikes-!!!","can’t we just be friends-??"],
	receive_puncture: ["owwie…","am I… bleeding?","I’ll have to patch this up asap-!"],
	receive_buff: ["i will use this wisely!","thank you friend!!!"],
	receive_destabilized: ["do… do I have to..?","stop it… I just want friends…"],
	receive_rez: ["thank you friends!!!"],
	receive_carapace: ["oh!! For me?", "thank you so much!!"],
	receive_repairs: ["mmm… feels safe-!"],
	receive_fear: ["e-eek-!","w-why are you so… big…?","i- I didn’t do anything!!!"],
	receive_redirection: ["r-really…?","t… thank you so much...", "you are really doing this…?","I will make sure you are all healthy for this!"],
},

env.COMBAT_ACTORS.generic.reactionPersonalities.Graceful= {
	evade: ["ah…","no… not you…","no…"],
    crit: ["let the silence consume you, taint...","your punishment is nigh…","for His glory…"],
	crit_buff: ["end this taint, for Him...","leave nothing…","careful that you do not waste it…"],
	miss: ["delayed…","it is all in His hands…"],
	dead: ["let His glory shine on…"],
	puncture: ["…pitiful…","let me show you His glory…"],
	regen: ["His blessing…","His glory…","to you…"],
	destabilized: ["see His light…","His glory shall guide you…"],
	stun: ["shhh… He is guiding me","this will not go unforgiven…"],
	laugh: ["…", "…","…","…I can hear His voice"],
	sacrifice: ["it is His blessing he wishes for me to bestow upon you…"],
	receive_hit: ["disregard yourself, taint…","i will not let your taint slip into my gift from Him…"],
	receive_crit: ["He will punish you for this","you will pay for that…","your words shall not make me falter…"],
	receive_puncture: ["nothing His light cannot fix…","His light shall fix this…"],
	receive_buff: ["like His blessing to me…","His light shall shine upon you too…"],
	receive_destabilized: ["He is…?","is… is that…?","He…? it cannot be…?"],
	receive_rez: ["like a blessing from Him…"],
	receive_carapace: ["He protects me, just as you do…", "like a gift from Him…"],
	receive_repairs: ["He shall rebuilt your faith in him…"],
	receive_fear: ["h…He will not falter…","i… i will not falter from His blessing","f-foul taint…"],
	receive_redirection: ["He seems to have different plans for us, it seems…"],
}
//END OF PERSONALITIES

//10. Combat Actors

env.COMBAT_ACTORS.immobile_actor = {
	name: "immobile critta",
	maxhp: 15,
	hp: 15,
	actions: ["nothing"],
	initialStatusEffects: [["immobile", 1], ["ethereal", 1]],
	graphic: `
		<div class="sprite-wrapper golemsprite dullzika" id="%SLUG-sprite-wrapper">
			<img src="/img/sprites/combat/foes/turboglazika.gif" id="%SLUG-golemsprite-base" class="sprite golemsprite-base">
			
			<div class="sprite golemsprite-head">
				<img src="/img/sprites/combat/foes/turboglazika-hat.gif" id="%SLUG-golemsprite-head">
			</div>
			<img src="/img/sprites/combat/foes/turboglazika-eyes.gif" id="%SLUG-golemsprite-neck" class="sprite golemsprite-neck">
			<img src="/img/sprites/combat/foes/turboglazika-body.gif" id="%SLUG-golemsprite-body" class="sprite golemsprite-body">

			<div class="target" entity="dullzika"></div>
		</div>
		`,
	reactions: {} //SILENT CREATURE
}

env.COMBAT_ACTORS.speech_bubble_weak = {
	name: "Speech Bubble",
	maxhp: 12,
	hp: 12,
	actions: ["attack","evade"],
	portrait: `<img class="portrait" src="https://glass-memoirs.github.io/Chaos-beta/Images/Actors/Smile.gif">`,
	portraitUrl: 'https://glass-memoirs.github.io/Chaos-beta/Images/Actors/Smile.gif',
	graphic: `
		<div class="sprite-wrapper dulltainer" id="%SLUG-sprite-wrapper">
			<img class="sprite" src="https://glass-memoirs.github.io/Chaos-beta/Images/Actors/Smile.gif" id="%SLUG-sprite">
			<div class="target" entity="Speech Bubble"></div>
		</div>
		`,
	reactions: {
		evade: ["笑"],
    	crit: [ "笑"],
		crit_buff: [ "笑"],
		miss: ["笑"],
		dead: ["笑"],
		puncture: ["笑"],
		regen: ["笑"],
		destabilized: ["笑"],
		stun: ["笑"],
		laugh: ["笑"],
		sacrifice: ["笑"],
		receive_hit: ["笑"],
		receive_crit: ["笑"],
		receive_puncture: ["笑"],
		receive_buff: ["笑"],
		receive_destabilized: ["笑"],
		receive_rez: ["笑"],
		receive_carapace: ["笑"],
		receive_repairs: ["笑"],
		receive_fear: ["笑"],
		receive_redirection: ["笑"],
	}
}

env.COMBAT_ACTORS.speech_bubble_strong = {
	name: "Speech Bubble",
	maxhp: 20,
	hp: 20,
	actions: ["harsh_noise","evade"],
	portrait: `<img class="portrait" src="https://glass-memoirs.github.io/Chaos-beta/Images/Actors/Smile.gif">`,
	portraitUrl: 'https://glass-memoirs.github.io/Chaos-beta/Images/Actors/Smile.gif',
	graphic: `
		<div class="sprite-wrapper dulltainer" id="%SLUG-sprite-wrapper">
			<img class="sprite" src="https://glass-memoirs.github.io/Chaos-beta/Images/Actors/Smile.gif" id="%SLUG-sprite">
			<div class="target" entity="Speech Bubble"></div>
		</div>
		`,
	reactions: {
		evade: ["笑"],
    	crit: [ "笑"],
		crit_buff: [ "笑"],
		miss: ["笑"],
		dead: ["笑"],
		puncture: ["笑"],
		regen: ["笑"],
		destabilized: ["笑"],
		stun: ["笑"],
		laugh: ["笑"],
		sacrifice: ["笑"],
		receive_hit: ["笑"],
		receive_crit: ["笑"],
		receive_puncture: ["笑"],
		receive_buff: ["笑"],
		receive_destabilized: ["笑"],
		receive_rez: ["笑"],
		receive_carapace: ["笑"],
		receive_repairs: ["笑"],
		receive_fear: ["笑"],
		receive_redirection: ["笑"],
	}
}

env.COMBAT_ACTORS.threat_bubble = {
	name: "Speech Bubble",
	maxhp: 25,
	hp: 25,
	actions: ["harsh_noise","mockery"],
	portrait: `<img class="portrait" src="https://glass-memoirs.github.io/Chaos-beta/Images/Actors/Smile.gif">`,
	portraitUrl: 'https://glass-memoirs.github.io/Chaos-beta/Images/Actors/Smile.gif',
	graphic: `
		<div class="sprite-wrapper dulltainer" id="%SLUG-sprite-wrapper">
			<img class="sprite" src="https://glass-memoirs.github.io/Chaos-beta/Images/Actors/Smile.gif" id="%SLUG-sprite">
			<div class="target" entity="Speech Bubble"></div>
		</div>
		`,
	reactions: {
		evade: ["笑"],
    	crit: [ "笑"],
		crit_buff: [ "笑"],
		miss: ["笑"],
		dead: ["笑"],
		puncture: ["笑"],
		regen: ["笑"],
		destabilized: ["笑"],
		stun: ["笑"],
		laugh: ["笑"],
		sacrifice: ["笑"],
		receive_hit: ["笑"],
		receive_crit: ["笑"],
		receive_puncture: ["笑"],
		receive_buff: ["笑"],
		receive_destabilized: ["笑"],
		receive_rez: ["笑"],
		receive_carapace: ["笑"],
		receive_repairs: ["笑"],
		receive_fear: ["笑"],
		receive_redirection: ["笑"],
	}
}
// putting in the incoherence took so long tbh
env.COMBAT_ACTORS.rot_bearer_foe = {
	name: "rot-bearer",
	maxhp: 10,
	hp: 10,
	actions: ["kivcria_frenzy", "kivcria_viral"],
	initialStatusEffects: [["ethereal", 1]],
	graphics: `
		<div class="sprite-wrapper archival-golem golemsprite" id="%SLUG-sprite-wrapper">
			<div class="sprite-overflow spritestack">
				<img src="https://glass-memoirs.github.io/Chaos-beta/Images/Actors/Freak1body.png" id="%SLUG-golemsprite-base" class="sprite golemsprite-base">
                    
				<div class="sprite golemsprite-head">
					<img src="https://glass-memoirs.github.io/Chaos-beta/Images/Actors/Freak1head.png" id="%SLUG-golemsprite-head">
					<img src="https://glass-memoirs.github.io/Chaos-beta/Images/Actors/Freak1face.png" id="%SLUG-golemsprite-face">
				</div>
				<img src="https://glass-memoirs.github.io/Chaos-beta/Images/Actors/Freak1body.png" id="%SLUG-golemsprite-body" class="sprite golemsprite-body">
				<img src="https://glass-memoirs.github.io/Chaos-beta/Images/Actors/Freak1arm.png" id="%SLUG-golemsprite-arms" class="sprite golemsprite-arms">
			</div>

			<div class="target" entity="rot-bearer"></div>
		</div>
	`,
	reactions: {
		evade: ["no  no  n.o   n o  ~ Õ|”|ô Vî + Si s w®i ±± í n g  6 t Ý urt s", "m®ÙÔ/*IŸÓ®", "‰æÐV„®QT”f", "Q¿á~¢0åÊÆº", "å&Ÿfam¬£„C", "éËÝŸé¾¼¬aÙ"],
		crit: ["”|„ & orr y", "B¾E*0µS +  I NS¡ D Ë. #3|", "”|„ & orr y", "ûàt¼½àMÚ¯-", "ûàt¼½àMÚ¯-", "dMKšF0ðÔúÅ", "dMKšF0ðÔúÅ", "-Ý£QŠÎ¶ûy\\", "-Ý£QŠÎ¶ûy\\", "ïÓ¾~ÂB4b00", "ïÓ¾~ÂB4b00", "uÙ‰úFËÐå¶t", "uÙ‰úFËÐå¶t", "U¿¯÷¤mMÜðÕ", "ü¶z©ÓÎÙ®áQ", "M¼ffiÕ4Üj®", "YÓ~+jÜU6æÛ", "&º‰TYSá5Lß"],
		crit_buff: ["Ô eCt   i.t  ” o ÷  sp®Êa|d f.u r t hed ."],
		miss: ["i.Ú.|is| .Šeny.e|l®s s  ±.hÆ  šh in|9  ß „Šide o f  me  «~Š nn ot .s ee", "ÛbKxLÆÎ”yx", "ÊMððÓíQj#4", "°žõÙÕLæ¡Yp", "°\\Iõj”¿å°š", "dbŠíß~5Iíú"],
		dead: ["s o   b eg.i n s6 |t y  ©t e ¬ œi &lÆ.-.ï fe", "”ÉÓŸ„Ÿyý½º", "ìúpÂáÛ¶¯*„", "TïÔTçu4xÆÕ", "Vô”öSý¡¿¼w", "Éu«Ta¾õÝ¯4"],
		puncture: ["i m   š|o.rry .i m  s|or r ÿ ¿p    i Õ  ”.i¬1   s p re a9  Ænd|  i t  „.il l  é Ê  m y. |f|4Óu l|Cü", "ÓFwôƒÓÔì~z", "é5ú£ÜÎ#ŠiÄ", "#tºj”üI½çm", "fðœààÆ#¾°Ÿ", "¼ÚýdîéÚ6Cá"],
		regen: ["it  ¡ð  |i n féc t ed - ||9 o „Ó+  tMa.¼e  ìt   Ÿ i+   s|d e Î s  onlÐ|to.. s pš ead   \\ Ë š e1fÛ", "úûÆåŸ¾Qæšµ", "µT6I¢6íå°ž", "a°©ÚƒLC£Ý+", "ÊB®mCB4¶¡+", "œ¶Kà¡ßp©ŸÎ"],
		destabilized: ["î t #r.ît he s  ì.wsidæ|„Ÿ   ski n®lï t . wÅ n t|s  ° ì+", "ì¿©Ý¾lFŠç¤", "ÎÐæÛ6û¤±~û", "VîŸYU„Éua¢", "ÕÅLüŠ¶tÊpƒ", "ã¢#u±¶~¯Ô÷"],
		stun: ["pa.r t  mÝ .&®9y öà n d ér î w  Kit.oÚ|÷ o f   m e  p 1ËÔa.s Ÿ. i  ”e e d  ì+  i  ¡ e e ð  |ì t", "œV#ÉÊ¬ý”~Ú", "xmì½aImIBã", "š6µ¡º¯ð-iS", "46wÜƒyKw¡í", "ôŠ„öéTšÜúŠ"],
		laugh: ["5*”úwõKËŠÊ", "åµÆÄtjx¬¡ú", "aŠœb¡Ê4ÛåT", "Ÿÿtöº±j¡&ç", "¡Iîf÷aìi¯ü"],
		sacrifice: ["huh"],
		recieve_hit: ["rip|.ì+¼® ut .öf   mf      #Årde.r ne|x t ti ÷ÅÊ Â ga in", "õÜÎï#TßÅœŸ", "a°LúdiéæQV", "ãT±-¼„Q*¾T", "öbíBÅ&á«åÆ", "”½Õtáàã+œ£"],
		recieve_crit: ["tear  i ÷  ou+ o.ƒ  m£  ¡  .b Æ gKi  be9 .Vi   ¼e.gì|.i îƒ eg..î| be g", "áÎ÷¬ß÷ý±0ã", "ÿ½\\ËdVÄaÔš", "ƒKÕL¶ÄúÄ4º", "S°ÅLà0©6÷d", "m¶úUpÐi6œã"],
		receive_puncture: ["œ l éed .Ît .o ut á÷o.f  |š.e. i .¤x G  ïð±6 -G‰ ì.  9 E& ..I  .té G", "½©éÉÚbœ¼¶Ë", "ÄB¬xyçæåjÂ", "wå~Ôbw¼0jp", "aÙ‰LCxdCIÂ", "0š„œæåp”5¤"],
		receive_buff: ["i tLÚusÚr.9& me| ±Mr| y.oûF  b l es.s|5ngs", "~FüËI££Ééß", "#½w+¯a«6Km", "õ#d¾6ºmžŠÊ", "µß-Y£„žzÄ4", "ÕiU£Ðmì½õï"],
		receive_destabilized: ["i±Ô wš iLThe.sT in 2 i9e", "Š¿ÎYÿ&¼0yC", "yåšFVßm6ý6", "5°Fu©°uÕÙV", "+Cu¼°6®ôå¾", "©f+µ&¯wiÿý"],
		recieve_rez: ["fuckers brought me back wrong", "dude what the fuck"],
		receive_carapace: ["s+ e - d 6 æt we e”   ±l÷s h  Ä nð .ìt     b a rr|ed fro m |w oa-d Ù¾ÿ .g ¬ æat +h a nks|", "ãõü¢«ï¯S£ã", "¶B\\õSpÔÉÉð", "ßµÚ¶tÊ0áÿî", "ôŸ¬ûIdjz¿b", "œôj¿à„fÔ„”"],
		receive_repairs: ["„ ©u n|ds  |fi.¼žd  . . .?   i±| ¯s  ¡  sti ll i.„&\\de", "öæfl°Ô±îy~", "MöÐ”CïbÅ&~", "ðœµ¡æp°fßž", "BÕi£úaßzLÿ", "µ#*5Ô0Û£áY"],
		receive_fear: ["IT   Iœ S4 .TA¾ IN& O «|Væ®.   ¬K.I  L1  MÉ   P ã  L EA £&E-", "î5ý¼Td‰ÅK‰", "içÆüÕÆº½5‰", "ižš°éiŠŸÜÓ", "M¢mûÆ¿*Vx”", "¾«úÂwíõºaQ"],
		receive_redirection: ["wh y  ¶r o tec t .me Â.. .?", "Æ«Åº÷aìàÚš", "ÉQï*Îö#Mûº", "YétËÎý°+UÆ", "Æ6tm+Ëyßõb", "zç¢ÜÚð6bÙÙ"]
	}
}

env.COMBAT_ACTORS.rot_bearer_ally = {
	name: "rot-bearer",
	maxhp: 10,
	hp: 10,
	actions: ["kivcria_frenzy", "kivcria_viral"],
	initialStatusEffects: [["ethereal", 1]],
	portrait: `<img class="portrait" src="https://glass-memoirs.github.io/Chaos-beta/Images/Actors/rot-bearer-icon.gif">`,
	portraitUrl: 'https://glass-memoirs.github.io/Chaos-beta/Images/Actors/rot-bearer-icon.gif',
	reactions: {
		evade: ["no  no  n.o   n o  ~ Õ|”|ô Vî + Si s w®i ±± í n g  6 t Ý urt s", "m®ÙÔ/*IŸÓ®", "‰æÐV„®QT”f", "Q¿á~¢0åÊÆº", "å&Ÿfam¬£„C", "éËÝŸé¾¼¬aÙ"],
		crit: ["”|„ & orr y", "B¾E*0µS +  I NS¡ D Ë. #3|", "”|„ & orr y", "ûàt¼½àMÚ¯-", "ûàt¼½àMÚ¯-", "dMKšF0ðÔúÅ", "dMKšF0ðÔúÅ", "-Ý£QŠÎ¶ûy\\", "-Ý£QŠÎ¶ûy\\", "ïÓ¾~ÂB4b00", "ïÓ¾~ÂB4b00", "uÙ‰úFËÐå¶t", "uÙ‰úFËÐå¶t", "U¿¯÷¤mMÜðÕ", "ü¶z©ÓÎÙ®áQ", "M¼ffiÕ4Üj®", "YÓ~+jÜU6æÛ", "&º‰TYSá5Lß"],
		crit_buff: ["Ô eCt   i.t  ” o ÷  sp®Êa|d f.u r t hed ."],
		miss: ["i.Ú.|is| .Šeny.e|l®s s  ±.hÆ  šh in|9  ß „Šide o f  me  «~Š nn ot .s ee", "ÛbKxLÆÎ”yx", "ÊMððÓíQj#4", "°žõÙÕLæ¡Yp", "°\\Iõj”¿å°š", "dbŠíß~5Iíú"],
		dead: ["s o   b eg.i n s6 |t y  ©t e ¬ œi &lÆ.-.ï fe", "”ÉÓŸ„Ÿyý½º", "ìúpÂáÛ¶¯*„", "TïÔTçu4xÆÕ", "Vô”öSý¡¿¼w", "Éu«Ta¾õÝ¯4"],
		puncture: ["i m   š|o.rry .i m  s|or r ÿ ¿p    i Õ  ”.i¬1   s p re a9  Ænd|  i t  „.il l  é Ê  m y. |f|4Óu l|Cü", "ÓFwôƒÓÔì~z", "é5ú£ÜÎ#ŠiÄ", "#tºj”üI½çm", "fðœààÆ#¾°Ÿ", "¼ÚýdîéÚ6Cá"],
		regen: ["it  ¡ð  |i n féc t ed - ||9 o „Ó+  tMa.¼e  ìt   Ÿ i+   s|d e Î s  onlÐ|to.. s pš ead   \\ Ë š e1fÛ", "úûÆåŸ¾Qæšµ", "µT6I¢6íå°ž", "a°©ÚƒLC£Ý+", "ÊB®mCB4¶¡+", "œ¶Kà¡ßp©ŸÎ"],
		destabilized: ["î t #r.ît he s  ì.wsidæ|„Ÿ   ski n®lï t . wÅ n t|s  ° ì+", "ì¿©Ý¾lFŠç¤", "ÎÐæÛ6û¤±~û", "VîŸYU„Éua¢", "ÕÅLüŠ¶tÊpƒ", "ã¢#u±¶~¯Ô÷"],
		stun: ["pa.r t  mÝ .&®9y öà n d ér î w  Kit.oÚ|÷ o f   m e  p 1ËÔa.s Ÿ. i  ”e e d  ì+  i  ¡ e e ð  |ì t", "œV#ÉÊ¬ý”~Ú", "xmì½aImIBã", "š6µ¡º¯ð-iS", "46wÜƒyKw¡í", "ôŠ„öéTšÜúŠ"],
		laugh: ["5*”úwõKËŠÊ", "åµÆÄtjx¬¡ú", "aŠœb¡Ê4ÛåT", "Ÿÿtöº±j¡&ç", "¡Iîf÷aìi¯ü"],
		sacrifice: ["huh"],
		recieve_hit: ["rip|.ì+¼® ut .öf   mf      #Årde.r ne|x t ti ÷ÅÊ Â ga in", "õÜÎï#TßÅœŸ", "a°LúdiéæQV", "ãT±-¼„Q*¾T", "öbíBÅ&á«åÆ", "”½Õtáàã+œ£"],
		recieve_crit: ["tear  i ÷  ou+ o.ƒ  m£  ¡  .b Æ gKi  be9 .Vi   ¼e.gì|.i îƒ eg..î| be g", "áÎ÷¬ß÷ý±0ã", "ÿ½\\ËdVÄaÔš", "ƒKÕL¶ÄúÄ4º", "S°ÅLà0©6÷d", "m¶úUpÐi6œã"],
		receive_puncture: ["œ l éed .Ît .o ut á÷o.f  |š.e. i .¤x G  ïð±6 -G‰ ì.  9 E& ..I  .té G", "½©éÉÚbœ¼¶Ë", "ÄB¬xyçæåjÂ", "wå~Ôbw¼0jp", "aÙ‰LCxdCIÂ", "0š„œæåp”5¤"],
		receive_buff: ["i tLÚusÚr.9& me| ±Mr| y.oûF  b l es.s|5ngs", "~FüËI££Ééß", "#½w+¯a«6Km", "õ#d¾6ºmžŠÊ", "µß-Y£„žzÄ4", "ÕiU£Ðmì½õï"],
		receive_destabilized: ["i±Ô wš iLThe.sT in 2 i9e", "Š¿ÎYÿ&¼0yC", "yåšFVßm6ý6", "5°Fu©°uÕÙV", "+Cu¼°6®ôå¾", "©f+µ&¯wiÿý"],
		recieve_rez: ["fuckers brought me back wrong", "dude what the fuck"],
		receive_carapace: ["s+ e - d 6 æt we e”   ±l÷s h  Ä nð .ìt     b a rr|ed fro m |w oa-d Ù¾ÿ .g ¬ æat +h a nks|", "ãõü¢«ï¯S£ã", "¶B\\õSpÔÉÉð", "ßµÚ¶tÊ0áÿî", "ôŸ¬ûIdjz¿b", "œôj¿à„fÔ„”"],
		receive_repairs: ["„ ©u n|ds  |fi.¼žd  . . .?   i±| ¯s  ¡  sti ll i.„&\\de", "öæfl°Ô±îy~", "MöÐ”CïbÅ&~", "ðœµ¡æp°fßž", "BÕi£úaßzLÿ", "µ#*5Ô0Û£áY"],
		receive_fear: ["IT   Iœ S4 .TA¾ IN& O «|Væ®.   ¬K.I  L1  MÉ   P ã  L EA £&E-", "î5ý¼Td‰ÅK‰", "içÆüÕÆº½5‰", "ižš°éiŠŸÜÓ", "M¢mûÆ¿*Vx”", "¾«úÂwíõºaQ"],
		receive_redirection: ["wh y  ¶r o tec t .me Â.. .?", "Æ«Åº÷aìàÚš", "ÉQï*Îö#Mûº", "YétËÎý°+UÆ", "Æ6tm+Ëyßõb", "zç¢ÜÚð6bÙÙ"]
	}
}

/*env.COMBAT_ACTORS.bstrdcoin = {
	name: "Coin",
	maxhp: 1,
	hp: 1,
	actions: ["nothing"],
	initialStatusEffects: [["immobile", 1]],
	graphic: `
		<div class="sprite-wrapper dulltainer" id="%SLUG-sprite-wrapper">
			<img class="sprite" src="" id="%SLUG-sprite">
			<div class="target" entity="Coin"></div>
		</div>
		`,
	reactions: {} //SILENT CREATURE
}*/
//END OF ACTORS

//Items
env.ITEM_LIST.odd_battery = {
	slug: "odd_battery",
	name: "Odd Battery",
	imgClass: "fish",
	image: "https://glass-memoirs.github.io/Chaos-beta/Images/Items/odd_battery.gif",
	group: "support",
	description: `'Grants a random level of surge';'a cousinly container';'why was it in the depths?'`,
	combatAction: env.ACTIONS.energizer,
	max: 10,
	batches: 2
}

//Fishing minigame
FishingMinigame.fishies.odd_battery = {
	item: "odd_battery",
	stats: {
		"--fishspeed-x": [3, 6], //change these to whatever you see fit
		"--fishspeed-y": [2, 4],
		"--fishspeed-rot": [1, 2],

		jumpRate: 1.5,
		jumpMod: 3,
		pullMod: 1,
		adjustMod: 1.1,
	}
}
//END OF ITEMS
//Merchant code
for (const componentName of ["entropy"]) { // this probably isn't a function but i don't know where else to put it
     const component = env.COMBAT_COMPONENTS[componentName]
     let commerceObject = ({
          type: "humor",
          name: `${component.name.replace("Humor of ", "")}`,
          subject: component,
          value: 1,
 
          showSellIf: ()=> env.e3a2.mTotals[componentName].available > 0,
          sellExec: ()=>{
               addItem("sfer_cube")
               page.flags.components[componentName]--
               env.e3a2.mTotals = CrittaMenu.getTotals()
               env.commerceNotice = `exchanged ${component.name} for 1 ${env.ITEM_LIST['sfer_cube'].name}`
          },
     })
     env.e3a2.merchant.sellResponses.replies.push({
          name: `${commerceObject.name}::${commerceObject.value}S`,
          destination: "sell",
          hideRead: true,
          showIf: commerceObject.showSellIf,
          class: `commerce-${commerceObject.type}`,
          definition: `NOTE::'exchange for ${commerceObject.value} ${env.ITEM_LIST['sfer_cube'].name}'`,
          exec: ()=> {commerceObject.sellExec(); env.e3a2.mTotals = CrittaMenu.getTotals(); env.e3a2.updateExchangeScreen()}
     })
     env.e3a2.merchant.commerce.push(commerceObject)
}
for (const componentName of ["surging"]) {
     const component = env.COMBAT_COMPONENTS[componentName]
     let commerceObject = ({
          type: "humor",
          name: `${component.name.replace("Humor of ", "")}`,
          subject: component,
          value: 1,
 
          showSellIf: ()=> env.e3a2.mTotals[componentName].available > 0,
          sellExec: ()=>{
               addItem("sfer_cube")
               page.flags.components[componentName]--
               env.e3a2.mTotals = CrittaMenu.getTotals()
               env.commerceNotice = `exchanged ${component.name} for 1 ${env.ITEM_LIST['sfer_cube'].name}`
          },
     })
     env.e3a2.merchant.sellResponses.replies.push({
          name: `${commerceObject.name}::${commerceObject.value}S`,
          destination: "sell",
          hideRead: true,
          showIf: commerceObject.showSellIf,
          class: `commerce-${commerceObject.type}`,
          definition: `NOTE::'exchange for ${commerceObject.value} ${env.ITEM_LIST['sfer_cube'].name}'`,
          exec: ()=> {commerceObject.sellExec(); env.e3a2.mTotals = CrittaMenu.getTotals(); env.e3a2.updateExchangeScreen()}
     })
     env.e3a2.merchant.commerce.push(commerceObject)
}
for (const componentName of ["stupidhorrible"]) {
	const component = env.COMBAT_COMPONENTS[componentName]
	let commerceObject = ({
		 type: "humor",
		 name: `${component.name.replace("Humor of ", "")}`,
		 subject: component,
		 value: 1,

		 showSellIf: ()=> env.e3a2.mTotals[componentName].available > 0,
		 sellExec: ()=>{
			  addItem("sfer_cube")
			  page.flags.components[componentName]--
			  env.e3a2.mTotals = CrittaMenu.getTotals()
			  env.commerceNotice = `exchanged ${component.name} for 1 ${env.ITEM_LIST['sfer_cube'].name}`
		 },
	})
	env.e3a2.merchant.sellResponses.replies.push({
		 name: `${commerceObject.name}::${commerceObject.value}S`,
		 destination: "sell",
		 hideRead: true,
		 showIf: commerceObject.showSellIf,
		 class: `commerce-${commerceObject.type}`,
		 definition: `NOTE::'exchange for ${commerceObject.value} ${env.ITEM_LIST['sfer_cube'].name}'`,
		 exec: ()=> {commerceObject.sellExec(); env.e3a2.mTotals = CrittaMenu.getTotals(); env.e3a2.updateExchangeScreen()}
	})
	env.e3a2.merchant.commerce.push(commerceObject)
}
for (const componentName of ["smog"]) {
	const component = env.COMBAT_COMPONENTS[componentName]
	let commerceObject = ({
		 type: "humor",
		 name: `${component.name.replace("Humor of ", "")}`,
		 subject: component,
		 value: 1,

		 showSellIf: ()=> env.e3a2.mTotals[componentName].available > 0,
		 sellExec: ()=>{
			  addItem("sfer_cube")
			  page.flags.components[componentName]--
			  env.e3a2.mTotals = CrittaMenu.getTotals()
			  env.commerceNotice = `exchanged ${component.name} for 1 ${env.ITEM_LIST['sfer_cube'].name}`
		 },
	})
	env.e3a2.merchant.sellResponses.replies.push({
		 name: `${commerceObject.name}::${commerceObject.value}S`,
		 destination: "sell",
		 hideRead: true,
		 showIf: commerceObject.showSellIf,
		 class: `commerce-${commerceObject.type}`,
		 definition: `NOTE::'exchange for ${commerceObject.value} ${env.ITEM_LIST['sfer_cube'].name}'`,
		 exec: ()=> {commerceObject.sellExec(); env.e3a2.mTotals = CrittaMenu.getTotals(); env.e3a2.updateExchangeScreen()}
	})
	env.e3a2.merchant.commerce.push(commerceObject)
}
for (const componentName of ["steel"]) {
	const component = env.COMBAT_COMPONENTS[componentName]
	let commerceObject = ({
		 type: "humor",
		 name: `${component.name.replace("Humor of ", "")}`,
		 subject: component,
		 value: 1,

		 showSellIf: ()=> env.e3a2.mTotals[componentName].available > 0,
		 sellExec: ()=>{
			  addItem("sfer_cube")
			  page.flags.components[componentName]--
			  env.e3a2.mTotals = CrittaMenu.getTotals()
			  env.commerceNotice = `exchanged ${component.name} for 1 ${env.ITEM_LIST['sfer_cube'].name}`
		 },
	})
	env.e3a2.merchant.sellResponses.replies.push({
		 name: `${commerceObject.name}::${commerceObject.value}S`,
		 destination: "sell",
		 hideRead: true,
		 showIf: commerceObject.showSellIf,
		 class: `commerce-${commerceObject.type}`,
		 definition: `NOTE::'exchange for ${commerceObject.value} ${env.ITEM_LIST['sfer_cube'].name}'`,
		 exec: ()=> {commerceObject.sellExec(); env.e3a2.mTotals = CrittaMenu.getTotals(); env.e3a2.updateExchangeScreen()}
	})
	env.e3a2.merchant.commerce.push(commerceObject)
}
for (const componentName of ["life"]) {
	const component = env.COMBAT_COMPONENTS[componentName]
	let commerceObject = ({
		 type: "humor",
		 name: `${component.name.replace("Humor of ", "")}`,
		 subject: component,
		 value: 1,

		 showSellIf: ()=> env.e3a2.mTotals[componentName].available > 0,
		 sellExec: ()=>{
			  addItem("sfer_cube")
			  page.flags.components[componentName]--
			  env.e3a2.mTotals = CrittaMenu.getTotals()
			  env.commerceNotice = `exchanged ${component.name} for 1 ${env.ITEM_LIST['sfer_cube'].name}`
		 },
	})
	env.e3a2.merchant.sellResponses.replies.push({
		 name: `${commerceObject.name}::${commerceObject.value}S`,
		 destination: "sell",
		 hideRead: true,
		 showIf: commerceObject.showSellIf,
		 class: `commerce-${commerceObject.type}`,
		 definition: `NOTE::'exchange for ${commerceObject.value} ${env.ITEM_LIST['sfer_cube'].name}'`,
		 exec: ()=> {commerceObject.sellExec(); env.e3a2.mTotals = CrittaMenu.getTotals(); env.e3a2.updateExchangeScreen()}
	})
	env.e3a2.merchant.commerce.push(commerceObject)
}
for (const componentName of ["graceful"]) {
	const component = env.COMBAT_COMPONENTS[componentName]
	let commerceObject = ({
		 type: "humor",
		 name: `${component.name.replace("Humor of ", "")}`,
		 subject: component,
		 value: 1,

		 showSellIf: ()=> env.e3a2.mTotals[componentName].available > 0,
		 sellExec: ()=>{
			  addItem("sfer_cube")
			  page.flags.components[componentName]--
			  env.e3a2.mTotals = CrittaMenu.getTotals()
			  env.commerceNotice = `exchanged ${component.name} for 1 ${env.ITEM_LIST['sfer_cube'].name}`
		 },
	})
	env.e3a2.merchant.sellResponses.replies.push({
		 name: `${commerceObject.name}::${commerceObject.value}S`,
		 destination: "sell",
		 hideRead: true,
		 showIf: commerceObject.showSellIf,
		 class: `commerce-${commerceObject.type}`,
		 definition: `NOTE::'exchange for ${commerceObject.value} ${env.ITEM_LIST['sfer_cube'].name}'`,
		 exec: ()=> {commerceObject.sellExec(); env.e3a2.mTotals = CrittaMenu.getTotals(); env.e3a2.updateExchangeScreen()}
	})
	env.e3a2.merchant.commerce.push(commerceObject)
}
for (const componentName of ["kivcria"]) {
	const component = env.COMBAT_COMPONENTS[componentName]
	let commerceObject = ({
		 type: "humor",
		 name: `${component.name.replace("Humor of ", "")}`,
		 subject: component,
		 value: 1,

		 showSellIf: ()=> env.e3a2.mTotals[componentName].available > 0,
		 sellExec: ()=>{
			  addItem("sfer_cube")
			  page.flags.components[componentName]--
			  env.e3a2.mTotals = CrittaMenu.getTotals()
			  env.commerceNotice = `exchanged ${component.name} for 1 ${env.ITEM_LIST['sfer_cube'].name}`
		 },
	})
	env.e3a2.merchant.sellResponses.replies.push({
		 name: `${commerceObject.name}::${commerceObject.value}S`,
		 destination: "sell",
		 hideRead: true,
		 showIf: commerceObject.showSellIf,
		 class: `commerce-${commerceObject.type}`,
		 definition: `NOTE::'exchange for ${commerceObject.value} ${env.ITEM_LIST['sfer_cube'].name}'`,
		 exec: ()=> {commerceObject.sellExec(); env.e3a2.mTotals = CrittaMenu.getTotals(); env.e3a2.updateExchangeScreen()}
	})
	env.e3a2.merchant.commerce.push(commerceObject)
}
}
console.log("LOADED::CHAOS+ 'go forth and kill bestie'")
//Hi yeah if you scrolled all the way down here nice lmao. I (:3) am also here!