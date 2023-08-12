import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        character: {
            name: "Ed",
            stats:{
                body: {
                    current: 4,
                    max: 4,
                    mod: 0
                },
                mind: {
                    current: 4,
                    max: 4,
                    mod: 0
                },
                spirit: {
                    current: 4,
                    max: 4,
                    mod: 0
                },
                grit: {
                    current: 4,
                    max: 4,
                    mod: 0
                },
                guard: {
                    current: 40,
                    max: 40
                },
                stamina: {
                    current: 20,
                    max: 20
                },
                ap: {
                    current: 5,
                    max: 5
                }
            },
            knownTechniques: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            portraitArt: "",
            heroTags:[{
                tagName: "Pickpocket",
                tagCurrent: 8,
                tagMax: 8,
                color: '#68287f'
            },
            {
                tagName: "Crab Wrangler",
                tagCurrent: 4,
                tagMax: 4,
                color: '#68287f'
            }]
        },
        techniques: [{
            id: 0,
            name: "Concussive Burst",
            rules: "Attack 4.",
            flavor: "An incredible noise rings out as your shot erupts on its target.",
            tier: 1,
            apCost: 2,
            stCost: 5,
            color: "#b44b25",
            tags: ["Action", "Special (Blast)", "Range Burst 12/1"],
            techTree: "Personal Artillery",
            image: 'PersonalArtillery.jpg'
        },
        {
            id: 1,
            name: "Explosive Leap",
            rules: "If you are in the air, jump to an unoccupied space within 4 spaces. Otherwise, take 2d8 damage and jump to an unoccupied space within 6 spaces.",
            flavor: "With startling confidence you aim your weapon just below your own feet, rocketing yourself majestically through the air.",
            tier: 1,
            apCost: 1,
            stCost: 3,
            color: "#004659",
            tags: ["Action", "Special (Blast)", "Self"],
            techTree: "Personal Artillery",
            image: 'PersonalArtillery.jpg',
        },
        {
            id: 2,
            name: "Impact Cannon",
            rules: "Attack 6.",
            flavor: "A concentrated blast of energy erupts from the end of your weapon, scarring your enemies & the earth alike.",
            tier: 1,
            apCost: 2,
            stCost: 5,
            color: "#b44b25",
            tags: ["Action", "Special (Blast)", "Line 12"],
            techTree: "Personal Artillery",
            image: 'PersonalArtillery.jpg',
        },
        {
            id: 3,
            name: "Repelling Blast",
            rules: "Attack 4. The target must Body Resist 10 or be pushed 2 spaces away from you.",
            flavor: "A quick shot to the shoulder forces your target to reel backwards in shock",
            tier: 1,
            apCost: 2,
            stCost: 3,
            color: "#b44b25",
            tags: ["Action", "Special (Blast)", "Range 12"],
            techTree: "Personal Artillery",
            image: 'PersonalArtillery.jpg',
        },
        {
            id: 4,
            name: "Indirect Fire",
            rules: "Guard 2. The targeting range of your Range, Ranged Burst, Line, and Wide Line techniques is doubled.",
            flavor: "A sharp eye is useful, but a firm grasp of physics will get you further.",
            tier: 1,
            apCost: 1,
            stCost: 0,
            color: "#68287f",
            tags: ["Stance"],
            techTree: "Personal Artillery",
            image: 'PersonalArtillery.jpg',
        },
        {
            id: 5,
            name: "Airburst Bombardment",
            rules: "Choose three target areas. Attack 4 each character in those areas. (A character in more than one target area is only attacked once).",
            flavor: "Twelve birds with one stone.",
            tier: 1,
            apCost: 2,
            stCost: 8,
            color: "#b44b25",
            tags: ["Action", "Special (Blast)", "Range Burst 12/2"],
            techTree: "Personal Artillery",
            image: 'PersonalArtillery.jpg',
        },
        {
            id: 6,
            name: "Howitzer",
            rules: "Attack 7.",
            flavor: "When the opportunity presents itself, always choose the bigger explosion.",
            tier: 1,
            apCost: 5,
            stCost: 8,
            color: "#b44b25",
            tags: ["Action", "Special (Blast)", "Range Burst 12/2"],
            techTree: "Personal Artillery",
            image: 'PersonalArtillery.jpg',
        },
        {
            id: 7,
            name: "Precision Targeting",
            rules: "Guard 1. When activating one of your Range, Ranged Burst, Line, or Wide Line techniques, you can spend additional stamina to exclude a number of characters equal to the stamina spent from this technique's effect.",
            flavor: "Never let a friend get in the way of a firing solution.",
            tier: 1,
            apCost: 2,
            stCost: 0,
            color: "#68287f",
            tags: ["Stance"],
            techTree: "Personal Artillery",
            image: 'PersonalArtillery.jpg',
        },
        {
            id: 8,
            name: "Boiling Sky Barrage",
            rules: "Attack 6 four times.",
            flavor: "",
            tier: 1,
            apCost: 3,
            stCost: 12,
            color: "#b44b25",
            tags: ["Action", "Special (Blast)", "Range 12"],
            techTree: "Personal Artillery",
            image: 'PersonalArtillery.jpg',
        }]
    },

    getters: {
        techniques: (state) => {
            return state.techniques;
        },
        character: (state) => {
            return state.character;
        }
    },

    mutations: {
        updateCurrentGuard (state, newCurrentGuard) {
            state.character.stats.guard.current = newCurrentGuard;
        },
        updateMaxGuard (state, newMaxGuard) {
            state.character.stats.guard.max = newMaxGuard;
        },
        updateCurrentStamina (state, newCurrentStamina) {
            state.character.stats.stamina.current = newCurrentStamina;
        },
        updateMaxStamina (state, newMaxStamina) {
            state.character.stats.stamina.max = newMaxStamina;
        },
        updateCurrentAP (state, newCurrentAP) {
            state.character.stats.ap.current = newCurrentAP;
        },
        updateStat (state, change) {
            var charStats = state.character.stats;
            var charStat = charStats[change.stat];
            if(change.prop === 'MAX'){
                charStat.max = change.newStatValue;
            } else if (change.prop === 'CURRENT') {
                charStat.current = change.newStatValue;
            } else if (change.prop === 'MOD') {
                charStat.mod = change.newStatValue;
            }
        }
    },

    actions: {
        saveCharacter (){
            const data = JSON.stringify(this.state.character);
            const blob = new Blob([data], {type: 'text/plan'});
            const e = document.createEvent('MouseEvents');
            let a = document.createElement('a');
            a.download = this.state.character.name + ".json";
            a.href = window.URL.createObjectURL(blob);
            a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
            e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
        }
    }
});