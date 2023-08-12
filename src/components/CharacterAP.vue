<template>
    <div class="character-ap-container">
        <div class="ap-display">
            <div class="ap-dot-holder">
                <span class="ap-dots">
                    <span class="ap-dot" :class="currentAP > 0 ? 'ap-filled' : ''"/>
                    <span class="ap-dot" :class="currentAP > 1 ? 'ap-filled' : ''"/>
                    <span class="ap-dot" :class="currentAP > 2 ? 'ap-filled' : ''"/>
                    <span class="ap-dot" :class="currentAP > 3 ? 'ap-filled' : ''"/>
                    <span class="ap-dot" :class="currentAP > 4 ? 'ap-filled' : ''"/>
                </span>
                <span class="ap-counter">{{currentAP}}&nbsp;/&nbsp;5</span>
            </div>
        </div>
        <div class="my-turn-button" v-on:click="myTurnClick"> My Turn </div>
        <div class="character-ap-label">
            Action Points
        </div>
    </div>
        
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'CharacterAP',
  components: {
  },
  props: {
      currentAP: Number
  },
  computed : {
    ...mapGetters([
    ]),
  },
  methods: {
      myTurnClick(){
          window.alert("My Turn!");
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .ap-display{
        background-color: #be6f29;
        border-color: #894d20;
        color: white;
        width: 65%;
        height: 21px;
        border-radius: 12px;
        border-style: solid;
        border-width: 1.5px;
        float: left;
        box-shadow: 0px 2px 6px rgb(0,0,0,0.75);
    }

    .ap-dot{
        height: 8px;
        width: 8px;
        margin: 8px 4px 3px 4px;
        border-color: white;
        border-style: solid;
        border-width: 1px;
        border-radius: 100%;
        display: inline-block;
        position: relative;
        bottom: 2px;
    }

    .ap-filled{
        background-color: white;
    }

    .ap-dot-holder{
        height: 21px;
    }

    .ap-dots{
        height: 21px;
        position: relative;
        float:left;
        left: 4px;
    }

    .ap-counter{
        line-height: 21px;
        height: 21px;
        font-size:16px;
        position: relative;
        float: right;
        right: 7px;
    }

    .character-ap-label{
        font-weight: bold;
        color: #fff;
    }

    .my-turn-button{
        background-color: #be6f29;
        border-color: #894d20;
        color: white;
        width: 30%;
        height: 21px;
        border-radius: 12px;
        border-style: solid;
        border-width: 1.5px;
        float: right;
        font-size: 13px;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        cursor: pointer;
        box-shadow: 0px 2px 6px rgb(0,0,0,0.75);
    }

</style>