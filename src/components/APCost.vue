<template>
    <div class="ap-cost-container">
        <span class="ap-dot" :class="apCost > 0 ? 'ap-filled' : ''"/>
        <span class="ap-dot" :class="apCost > 1 ? 'ap-filled' : ''"/>
        <span class="ap-dot" :class="apCost > 2 ? 'ap-filled' : ''"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'APCost',
  components: {
  },
  props: {
      apCost: Number
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
    .ap-cost-container{
        background-color: #be6f29;
        border-color: #894d20;
        color: white;
        width: 48px;
        height: 19px;
        border-radius: 10px;
        border-style: solid;
        border-width: 1.5px;
        box-shadow: 3px 3px 6px rgb(0,0,0,0.75);
    }

    .ap-dot{
        height: 8px;
        width: 8px;
        margin: 1px 2px 3px 2px;
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

</style>