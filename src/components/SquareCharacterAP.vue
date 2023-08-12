<template>
    <div class="status-bar-container">
        <div class="status-bar">
            <div class="color-fill" :style="fillStyle"/>
            <div class="info-display">
                <span class="label-display">
                    {{label}}
                </span>
                <span class="ap-dots">
                    <span class="ap-dot" v-on:click="setAP(1)" :class="currentAP > 0 ? 'ap-filled' : ''"/>
                    <span class="ap-dot" v-on:click="setAP(2)" :class="currentAP > 1 ? 'ap-filled' : ''"/>
                    <span class="ap-dot" v-on:click="setAP(3)" :class="currentAP > 2 ? 'ap-filled' : ''"/>
                    <span class="ap-dot" v-on:click="setAP(4)" :class="currentAP > 3 ? 'ap-filled' : ''"/>
                    <span class="ap-dot" v-on:click="setAP(5)" :class="currentAP > 4 ? 'ap-filled' : ''"/>
                </span>
                <span class="icon-holder"> <BIconX class="icon-x" v-on:click="setAP(0)"/> </span>
            </div>
        </div>
    </div>
</template>

<script>
import { BIconX } from 'bootstrap-vue';

export default {
  name: 'CharacterAP',
  components: {
      BIconX
  },
  props: {
    currentAP: Number,
    label: String,
    color: String
  },
  computed : {
    fillStyle() {
        let percent = Math.floor((this.currentAP/5)*100);
        let style = {
            width: percent.toString() + "%",
            backgroundColor: this.color,
        }
        return style;
    },
  },
  methods: {
      setAP(val){
          let newValue = ["CURRENT", val];
          this.$emit('valueEdit', newValue);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .status-bar{
        width: 100%;
        background-color: rgba(0,0,0,0.6);
        height: 28px;
    }
    .color-fill{
        width: 50%;
        background-color: red;
        position: absolute;
        height: 28px;
    }
    .info-display{
        font-size: 16px;
        line-height: 28px;
        color: #fff;
        position: relative;
    }
    .label-display{
        float: left;
        left: 10px;
        bottom: 1px;
        position: relative;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 18px;
    }
    
    .ap-dot{
        height: 8px;
        width: 8px;
        margin: 6px 3px 3px 3px;
        border-color: white;
        border-style: solid;
        border-width: 1px;
        border-radius: 100%;
        display: inline-block;
        position: relative;
        bottom: 2px;
    }

    .ap-dot:hover{
        height: 12px;
        width: 12px;
        margin: 6px 2px 2px 2px;
        bottom: 1px;
    }
    .icon-holder{
        float: right;
        position: relative;
        right: 9px;
        top: 4px;
    }

    .icon-x{
        display: inline-block;
        position: relative;
        bottom: 4px;
        right: 1px;
        font-size: 12px;
        line-height: 28px;
    }

    .icon-x:hover{
        font-size: 14px;
        right: 0px;
    }

    .ap-filled{
        background-color: white;
    }

    .ap-dots{
        height: 28px;
        position: relative;
        float:right;
        right: 10px;
        top: 4px;
        cursor: pointer;
    }

    .ap-counter{
        line-height: 28px;
        height: 28px;
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