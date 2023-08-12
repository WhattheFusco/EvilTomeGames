<template>
    <div class="status-bar-container">
        <div class="status-bar">
            <div class="color-fill" :style="fillStyle"/>
            <div class="number-display">
                {{current}}&nbsp;/&nbsp;{{max}}
            </div>
        </div>
        <div class="status-label">
            {{label}}
        </div>
    </div>
</template>

<script>

export default {
  name: 'StatusBar',
  components: {
  },
  props: {
    current: Number,
    max: Number,
    label: String,
    color: String
  },
  computed : {
    fillStyle() {
        let percent = Math.floor((this.current/this.max)*100);
        let displayColor = this.color;
        let rightRadius = 12;
        if (percent > 99) { percent = 99; }
        if (percent < 6 && percent > 0) { percent = 6; }
        rightRadius = Math.floor((percent - 15)/5);
        if(rightRadius > 12) { rightRadius = 12; }
        if(rightRadius < 0) { rightRadius = 0; }
        let style = {
            width: percent.toString() + "%",
            backgroundColor: displayColor,
            borderTopRightRadius: rightRadius + "px",
            borderBottomRightRadius: rightRadius + "px"
        }
        return style;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .status-bar{
        width: 100%;
        border-radius: 15px;
        background-color: rgba(0,0,0,0.6);
    }
    .status-bar:after{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -110%);
        width: 100%;
        height: 21px;
        border-radius: 15px;
        border-color: white;
        border-style: solid;
        border-width: 1px;
    }
    .color-fill{
        width: 50%;
        background-color: red;
        position: absolute;
        height: 21px;
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
    }
    .number-display{
        font-size: 16px;
        line-height: 21px;
        color: #fff;
        position: relative;
    }
    .status-label{
        font-weight: bold;
        color: #fff;
    }


</style>