<template>
    <div class="stat-capsule" :style="fillStyle">
        <div class="stat-name">{{statName}}</div>
        <div class="stat-value">
            <span>d</span>
            <ClickToEdit :value="stats.max" class="value" :inputStyle="clickToEditInputStyle" v-on:setValue="editValue($event, 'MAX')"/>
            <span>+</span>
            <ClickToEdit :value="stats.mod" class="value" :inputStyle="clickToEditInputStyle" v-on:setValue="editValue($event, 'MOD')"/>
        </div>
    </div>
</template>

<script>
import ClickToEdit from '../components/ClickToEdit.vue';

export default {
  name: 'StatCapsule',
  components: {
    ClickToEdit
  },
  props: {
    statName: String,
    current: Number,
    stats: Object,
    color: String
  },
  computed : {
    fillStyle() {
        let style = {
            backgroundColor: this.color,
        }
        return style;
    },
  },
  data() {
    return {
        clickToEditInputStyle: {
            height: '28px',
            maxWidth: '80px'
            }
    }
  },
  methods: {
    editValue(e, target) {
        let newValue = [target, e];
        this.$emit('valueEdit', newValue);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .stat-capsule{
        background-color: #be6f29;
        color: white;
        height: 28px;
        /* border-radius: 20px;
        border-style: solid;
        border-width: 2px; */
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 18px;
        padding: 0px 10px;
    }
    .stat-name{
        float: left;
        position: relative;
    }
    .stat-value{
        float: right;
        position: relative;
    }
    .value{
        cursor: pointer;
        display: inline-block;
    }

</style>