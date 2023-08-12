<template>
    <div class="sidebar">
        <div class="stat-block-container">
            <div class="stat-block">
                <div class="char-status-container">
                    <SquareStatusBar class="char-status-bar" v-on:valueEdit="handleStatusChange($event, 'GUARD')" :current="character.stats.guard.current" :max="character.stats.guard.max" label="Guard" color="#367a54"/>
                </div>
                <div class="char-status-container">
                    <SquareStatusBar class="char-status-bar" v-on:valueEdit="handleStatusChange($event, 'STAMINA')" :current="character.stats.stamina.current" :max="character.stats.stamina.max" label="Stamina" color="#b44b25"/>
                </div>
                <div class="char-status-container">
                    <SquareCharacterAP class="char-status-bar" v-on:valueEdit="handleStatusChange($event, 'AP')" :currentAP="character.stats.ap.current" label="AP" color="#004659"/>
                </div>
                <div class="stat-line col-xs-12">
                    <StatCapsule class="stat-capsule"
                      v-on:valueEdit="handleStatUpdate($event, 'body')"
                      statName="Body"
                      :stats="character.stats.body"
                      color="#404040"
                    />
                </div>
                <div class="stat-line col-xs-12">
                    <StatCapsule class="stat-capsule"
                      v-on:valueEdit="handleStatUpdate($event, 'mind')"
                      statName="Mind"
                      :stats="character.stats.mind"
                      color="#404040"
                    />
                </div>
                <div class="stat-line col-xs-12">
                    <StatCapsule class="stat-capsule"
                      v-on:valueEdit="handleStatUpdate($event, 'spirit')"
                      statName="Spirit"
                      :stats="character.stats.spirit"
                      color="#404040"
                    />
                </div>
                <div class="stat-line col-xs-12">
                    <StatCapsule class="stat-capsule"
                      v-on:valueEdit="handleStatUpdate($event, 'grit')"
                      statName="Grit"
                      :stats="character.stats.grit"
                      color="#404040"
                    />
                </div>
                <div class="row">
                  <div class="button-line col-xs-12 col-sm-6 col-lg-3">
                      <button class="action-button" style="background-color: #367a54" @click="handleRoll($event, 'physicalDefense')">Physical Defense</button>
                  </div>
                  <div class="button-line col-xs-12 col-sm-6 col-lg-3">
                      <button class="action-button" style="background-color: #367a54" @click="handleRoll($event, 'specialDefense')">Special Defense</button>
                  </div>
                  <div class="button-line col-xs-12 col-sm-6 col-lg-3">
                    <button class="action-button" style="background-color: #b44b25" @click="handleRoll($event, 'physicalAttack')">Physical Attack</button>
                  </div>
                  <div class="button-line col-xs-12 col-sm-6 col-lg-3">
                    <button class="action-button" style="background-color: #b44b25" @click="handleRoll($event, 'specialAttack')">Special Attack</button>
                  </div>
                </div>
                <div class="row">
                  <div class="button-line col-xs-12 col-sm-6 col-lg-3">
                      <button class="action-button" @click="handleRoll($event, 'bodyWithstand')">Body Withstand</button>
                  </div>
                  <div class="button-line col-xs-12 col-sm-6 col-lg-3">
                      <button class="action-button" @click="handleRoll($event, 'mindWithstand')">Mind Withstand</button>
                  </div>
                  <div class="button-line col-xs-12 col-sm-6 col-lg-3">
                      <button class="action-button" @click="handleRoll($event, 'spiritWithstand')">Spirit Withstand</button>
                  </div>
                  <div class="button-line col-xs-12 col-sm-6 col-lg-3">
                      <button class="action-button" @click="handleRoll($event, 'gritWithstand')">Grit Withstand</button>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import SquareStatusBar from '../components/SquareStatusBar.vue';
import SquareCharacterAP from '../components/SquareCharacterAP.vue';
import StatCapsule from '../components/StatCapsule.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    SquareStatusBar,
    SquareCharacterAP,
    StatCapsule
  },
  name: 'StatusSidebar',
  computed : {
    ...mapGetters([
      'character'
    ])
  },
  methods: {
    handleStatusChange(e, stat){
      if(stat === "GUARD" && e[0] === "CURRENT"){ this.$store.commit('updateCurrentGuard', parseInt(e[1])); }
      if(stat === "GUARD" && e[0] === "MAX"){ this.$store.commit('updateMaxGuard', parseInt(e[1])); }
      if(stat === "STAMINA" && e[0] === "CURRENT"){ this.$store.commit('updateCurrentStamina', parseInt(e[1])); }
      if(stat === "STAMINA" && e[0] === "MAX"){ this.$store.commit('updateMaxStamina', parseInt(e[1])); }
      if(stat === "AP"){ this.$store.commit('updateCurrentAP', parseInt(e[1])); }
    },
    saveCharacterHandler(){
        this.$store.dispatch('saveCharacter');
    },
    handleStatUpdate(e, stat){
      var newStatValue = parseInt(e[1]);
      if(e[0] === "MAX"){
        this.$store.commit('updateStat', {'stat': stat, 'newStatValue': newStatValue, 'prop': 'MAX'});
        this.$store.commit('updateStat', {'stat': stat, 'newStatValue': newStatValue, 'prop': 'CURRENT'});
      } else if (e[0] === "MOD"){
        this.$store.commit('updateStat', {'stat': stat, 'newStatValue': newStatValue, 'prop': 'MOD'});
      }
    },
    handleRoll(e, rollType){
      var body, mind, spirit, grit, count, result, extra, extraDie, extraResult;
      var bodyMod = this.character.stats.body.mod;
      var mindMod = this.character.stats.mind.mod;
      var spiritMod = this.character.stats.spirit.mod;
      var gritMod = this.character.stats.grit.mod;
      switch(rollType) {
        case 'physicalDefense':
          body = this.roll(this.character.stats.body.current, 1);
          grit = this.roll(this.character.stats.grit.current, 1);
          result = body + grit + bodyMod + gritMod;
          window.alert(`Rolling Physical Defense\n    Body: 1d${this.character.stats.body.current} + ${bodyMod} = ${body + bodyMod}\n    Grit: 1d${this.character.stats.grit.current} + ${gritMod} = ${grit + gritMod}\nTotal: ${result}`);
          break;
        case 'specialDefense':
          mind = this.roll(this.character.stats.mind.current, 1);
          grit = this.roll(this.character.stats.grit.current, 1);
          result = mind + grit + mindMod + gritMod;
          window.alert(`Rolling Special Defense\n    Mind: 1d${this.character.stats.mind.current} + ${mindMod} = ${mind + mindMod}\n    Grit: 1d${this.character.stats.grit.current} + ${gritMod} = ${grit + gritMod}\nTotal: ${result}`);
          break;
        case 'physicalAttack':
          count = window.prompt("How many dice?");
          if(!isNaN(count)){
            result = this.roll(this.character.stats.body.current, count) + bodyMod;
            window.alert(`Rolling Physical Attack ${count}: ${count}d${this.character.stats.body.current} + ${bodyMod}\nResult: ${result}`);
          } else {
            window.alert("'" + count + "' is not an integer. Please enter an integer and try again.");
          }
          break;
        case 'specialAttack':
          count = window.prompt("How many dice?");
          if(!isNaN(count)){
            result = this.roll(this.character.stats.mind.current, count) + mindMod;
            window.alert(`Rolling Special Attack ${count}: ${count}d${this.character.stats.mind.current} + ${mindMod}\nResult: ${result}`);
          } else {
            window.alert("'" + count + "' is not an integer. Please enter an integer and try again.");
          }
          break;
        case 'bodyWithstand':
          extra = window.prompt("How many extra dice?\n(Each extra die costs 3 Stamina)");
          if(!isNaN(extra)){ //If player entered a number
            if(this.character.stats.stamina.current >= 3*extra){ //And if character has enough stamina
              if(this.character.stats.body.current > this.character.stats.spirit.current){ //Determine extra die size
                extraDie = this.character.stats.body.current;
              } else {
                extraDie = this.character.stats.spirit.current;
              }
              body = this.roll(this.character.stats.body.current, 1) + bodyMod;
              spirit = this.roll(this.character.stats.spirit.current, 1) + spiritMod;
              extraResult = this.roll(extraDie, extra);
              result = body + spirit + extraResult;
              this.$store.commit('updateCurrentStamina', this.character.stats.stamina.current - 3*extra);
              window.alert(`Rolling Body Withstand:\nBody: 1d${this.character.stats.body.current} + ${bodyMod} (${body})\nSpirit: 1d${this.character.stats.spirit.current}  + ${spiritMod} (${spirit})\nExtra: ${extra}d${extraDie} (${extraResult}).\nResult: ${result}`);
            }
            else {
              window.alert("Error: Not enough stamina.");
            }
          } else {
            window.alert("Error: '" + extra + "' is not an integer.");
          }
          break;
        case 'mindWithstand':
          extra = window.prompt("How many extra dice?\n(Each extra die costs 3 Stamina)");
          if(!isNaN(extra)){ //If player entered a number
            if(this.character.stats.stamina.current >= 3*extra){ //And if character has enough stamina
              if(this.character.stats.mind.current > this.character.stats.spirit.current){ //Determine extra die size
                extraDie = this.character.stats.mind.current;
              } else {
                extraDie = this.character.stats.spirit.current;
              }
              mind = this.roll(this.character.stats.mind.current, 1) + mindMod;
              spirit = this.roll(this.character.stats.spirit.current, 1) + spiritMod;
              extraResult = this.roll(extraDie, extra);
              result = mind + spirit + extraResult;
              this.$store.commit('updateCurrentStamina', this.character.stats.stamina.current - 3*extra);
              window.alert(`Rolling Mind Withstand:\nMind: 1d${this.character.stats.mind.current} + ${mindMod} (${mind})\nSpirit: 1d${this.character.stats.spirit.current}  + ${spiritMod} (${spirit})\nExtra: ${extra}d${extraDie} (${extraResult}).\nResult: ${result}`);
            }
            else {
              window.alert("Error: Not enough stamina.");
            }
          } else {
            window.alert("Error: '" + extra + "' is not an integer.");
          }
          break;
        case 'spiritWithstand':
          extra = window.prompt("How many extra dice?\n(Each extra die costs 3 Stamina)");
          if(!isNaN(extra)){ //If player entered a number
            if(this.character.stats.stamina.current >= 3*extra){ //And if character has enough stamina
              spirit = this.roll(this.character.stats.spirit.current, parseInt(extra) + 2) + spiritMod;
              this.$store.commit('updateCurrentStamina', this.character.stats.stamina.current - 3*extra);
              window.alert(`Rolling Spirit Withstand: ${(parseInt(extra) + 2)}d${this.character.stats.spirit.current} + ${spiritMod}.\nResult: ${spirit}`);
            }
            else {
              window.alert("Error: Not enough stamina.");
            }
          } else {
            window.alert("Error: '" + extra + "' is not an integer.");
          }
          break;
        case 'gritWithstand':
          extra = window.prompt("How many extra dice?\n(Each extra die costs 3 Stamina)");
          if(!isNaN(extra)){ //If player entered a number
            if(this.character.stats.stamina.current >= 3*extra){ //And if character has enough stamina
              if(this.character.stats.grit.current > this.character.stats.spirit.current){ //Determine extra die size
                extraDie = this.character.stats.grit.current;
              } else {
                extraDie = this.character.stats.spirit.current;
              }
              grit = this.roll(this.character.stats.grit.current, 1) + gritMod;
              spirit = this.roll(this.character.stats.spirit.current, 1) + spiritMod;
              extraResult = this.roll(extraDie, extra);
              result = grit + spirit + extraResult;
              this.$store.commit('updateCurrentStamina', this.character.stats.stamina.current - 3*extra);
              window.alert(`Rolling Grit Withstand:\nGrit: 1d${this.character.stats.grit.current} + ${gritMod} (${grit})\nSpirit: 1d${this.character.stats.spirit.current}  + ${spiritMod} (${spirit})\nExtra: ${extra}d${extraDie} (${extraResult}).\nResult: ${result}`);
            }
            else {
              window.alert("Error: Not enough stamina.");
            }
          } else {
            window.alert("Error: '" + extra + "' is not an integer.");
          }
          break;
      }
    },
    roll(die, count) {
      if(count === 1)
        return (Math.floor(Math.random()*die)) + 1;
      else
        var total = 0;
        for(var i = 0; i < count; i++){
          total += (Math.floor(Math.random()*die)) + 1;
        }
        return total;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar-container{
  background-image: url('../assets/background.jpg');
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  position: relative;
}
.sidebar{
  height:100%;
  width:100%;
  background-image: url('../assets/background.jpg');
  background-attachment: fixed;
  position: fixed !important;
  top: 0px;
  z-index: 1;
  box-shadow: 3px 3px 6px rgb(0,0,0,0.75);
}

.main-content{
  padding: 60px 20px 20px 270px;
}
.character-portrait-frame{
  margin-top:40px;
  margin-bottom: 18px;
  width: 250px;
  height: 250px;
  background-color: #000;
  overflow:hidden;
  box-shadow: 0px 3px 6px rgb(0,0,0,0.75);
}
.character-portrait{
  width: 250px;
}
.char-status-container{
  margin: auto;
  margin-top: 12px;
  width: 100%;
  position: relative;
  box-shadow: 0px 1px 2px rgb(0,0,0,0.75);
  height: 28px;
}
.char-ap-container{
  position: relative;
  margin: 0px 5px 12px 5px;
}
.stat-container{
  color: #fff;
  width: 250px;
  margin: auto;
  align-content: center;
}
.stat-line{
  width: 100%;
  margin: auto;
  margin-top: 12px;
}
.stat-capsule{
  box-shadow: 0px 1px 2px rgb(0,0,0,0.75);
}
.stat-block-container{
    width: 92%;
    margin: auto;
    margin-top: 20px;
}
.stat-block{
  box-shadow: 0px 5px 10px rgb(0,0,0,0.25);
  background: rgba(0,0,0,0.25);
  width: 100%;
  padding: 1px 10px 12px 10px;
  border-radius: 10px;
}
.row{
  --bs-gutter-x: 1rem;
}
.active-technique{
  margin-bottom: 10px;
}
.early-techs{
  margin-bottom: 15px;
}
.button-line{
  width: 100%;
  margin: auto;
  margin-top: 12px;
}
.action-button{
  border: none;
  color: white;
  background-color: #004659;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  width: 100%;
  box-shadow: 0px 1px 2px rgb(0,0,0,0.75);
}

@media(max-height: 620px){
  .character-portrait, .character-portrait-frame{
    display: none;
  }
  .stat-block-container{
    margin-top: 50px;
  }
}

@media(max-height: 359px){
  .stat-block-container{
    margin-top: 45px;
  }
  .char-ap-container,.char-status-container,.stat-line{
    margin-top: 6px;
  }
  .stat-block{
    padding-top:6px;
  }
}
</style>
