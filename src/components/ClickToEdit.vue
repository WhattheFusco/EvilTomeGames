<template>
  <div>
    <input type="text"
           v-if="edit"
           :value="valueLocal"
           @blur="handleEdit"
           @keyup.enter="$event.target.blur()"
           v-focus=""
           class="input"
           :style="inputStyle"
    />
    <span v-else @click="edit = true;">
      {{valueLocal}}
    </span>
  </div>
</template>

<script>
  export default {

  props: ['value', 'inputStyle'],
  emits: ['setValue'],
  data () {
    return {
      edit: false,
      valueLocal: this.value
    }
  },

  watch: {
    value: function() {
      this.valueLocal = this.value;
    }
  },

  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  },
  methods: {
    handleEdit(e){
      if(!isNaN(e.target.value)){
        this.valueLocal = e.target.value;
        this.edit = false;
        this.$emit('setValue', this.valueLocal);
      } else {
        this.edit = false;
      }
    }
  }

}
</script>
<style scoped>
    .input{
      display: inline-block;
    }

</style>