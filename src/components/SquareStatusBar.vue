<template>
    <div class="status-bar-container">
        <div class="status-bar">
            <div class="color-fill" :style="fillStyle"/>
            <div class="info-display">
                <span class="label-display">
                    {{label}}
                </span>
                <span class="number-display">
                    <!-- <span v-on:click="editValue('current')" class="value"> {{current}}</span> -->
                    <ClickToEdit :value="current" class="value" :inputStyle="clickToEditInputStyle" v-on:setValue="editValue($event, 'CURRENT')"/>
                    <span> &nbsp; / &nbsp; </span>
                    <ClickToEdit :value="max" class="value" :inputStyle="clickToEditInputStyle" v-on:setValue="editValue($event, 'MAX')"/>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import ClickToEdit from '../components/ClickToEdit.vue';

export default {
  name: 'StatusBar',
  components: {
    ClickToEdit
  },
  props: {
    current: Number,
    max: Number,
    label: String,
    color: String
  },
    data () {
    return {
      clickToEditInputStyle: {
        height: '28px',
        maxWidth: '80px'
      }
    }
  },
  computed : {
    fillStyle() {
        let percent = Math.floor((this.current/this.max)*100);
        if(percent > 100){
            percent = 100;
        }
        let style = {
            width: percent.toString() + "%",
            backgroundColor: this.color,
        }
        return style;
    },
  },
  methods : {
      editValue(e, target) {
          let newValue = [target, e];
          this.$emit('valueEdit', newValue);
      },
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
    .number-display{
        float: right;
        right: 10px;
        position: relative;
    }
    .value{
        cursor: pointer;
        display: inline-block;
    }

</style>