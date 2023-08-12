<template>
    <div class="st-cost-container">
        <span class="st-text">{{stCost}}</span>
        <span class="spirit-icon"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'STCost',
  components: {
  },
  props: {
      stCost: Number
  },
  computed : {
    ...mapGetters([
    ]),
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .st-cost-container{
        background-color: #be6f29;
        border-color: #894d20;
        color: white;
        width: 48px;
        height: 19px;
        border-radius: 10px;
        border-style: solid;
        border-width: 1.5px;
        box-shadow: 3px 3px 6px rgb(0,0,0,0.75);
        font-size: 14px;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        display: inline-block;
    }
    .st-text{
        position: relative;
        bottom: 2px;
    }
    .spirit-icon{
        margin-left: 1px;
        width: 14px;
        height: 14px;
        background-image: url('../assets/spirit.jpg');
        display: inline-block;
        position: relative;
        bottom: 1.5px;
    }
</style>