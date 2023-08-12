<template>
    <div class="tech-container">
        <div v-if="!collapsed">
            <div class="tech-body">
                <span class="tech-info-container">
                    <div class="tech-header-row" :style="techStyle">
                        <div class="tech-header">{{tech.name}}</div>
                    </div>
                    <div class="tech-body-row">
                        <div class="tech-body-rules-row" :class="{ vertScroll : ruleOverflow }" ref="rulesText">{{tech.rules}}</div>
                        <div class="mobile-tech-costs" ref="mobileTechs">
                            <APCost class="ap-cost" :apCost="tech.apCost"/>
                            <STCost class= "st-cost" :stCost="tech.stCost"/>
                        </div>
                        <div v-if="displayFlavorText" class="tech-body-flavor-row" ref="flavorText" :style="flavorTextStyle">{{tech.flavor}}</div>
                    </div>
                    <div class="tech-footer-row" :style="techStyle">
                        <span class="tech-tags" v-for="(tag, index) in tech.tags" :key="tag + index">
                            <span class="tag">{{tag}}</span>
                            <span v-if="index !== (tech.tags.length - 1)" class="pipe-separator">|</span>
                        </span>
                        <span class="tech-level">{{tech.techTree}} | Tier {{tech.tier}}</span>
                    </div>
                </span>
                <span class="tech-info-image-separator"></span>
                <span class="tech-image-container" :style="backgroundImageStyle">
                    <div class="image-spacer"/>
                    <div class="tech-cost-row">
                        <APCost class="ap-cost" :apCost="tech.apCost"/>
                        <STCost class= "st-cost" :stCost="tech.stCost"/>
                    </div>
                </span>
            </div>
            <div class="tech-button-row">
                <span class="tech-button" :style="techStyle" v-on:click="executeTechnique">Execute</span>
                <span class="tech-button" v-on:click="collapseCard">Collapse</span>
            </div>
        </div>
        <div v-if="collapsed" class="collapsed-container">
            <div class="collapsed-detail-container" :style="techStyle" v-on:click="collapseCard">
                <span class="collapsed-header">{{tech.name}}</span>
                <span class="collapsed-tech-costs">
                    <APCost class="ap-cost" :apCost="tech.apCost"/>
                    <STCost class= "st-cost" :stCost="tech.stCost"/>
                </span>
                <span class="collapsed-tag">Click for Details</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import APCost from './APCost';
import STCost from './STCost';

export default {
  name: 'Technique',
  components: {
      APCost,
      STCost
  },
  props: {
      tech: Object,
      collapsed: Boolean
  },
  data: () => ({
      expanded: true,
      rulesTextHeight: 0,
      techBodyHeight: 122 //Needs to change for mobile view
  }),
  mounted(){
      if(this.$refs.rulesText){
        this.rulesSizeObserver = new ResizeObserver(this.onResize).observe(this.$refs.rulesText); 
        this.updateRulesTextHeight();     
      }
  },
  computed : {
    ...mapGetters([
    ]),
    backgroundImage(){
        return require("../assets/techImages/" + this.tech.image);
    },
    techStyle() {
        let style = {};
        style.backgroundColor = this.tech.color;
        return style;
    },
    backgroundImageStyle(){
        return {backgroundImage: "url(" + this.backgroundImage + ")"};
    },
    flavorTextHeight(){
        return (this.techBodyHeight - this.rulesTextHeight);
    },
    flavorTextStyle(){
        return {maxHeight: this.flavorTextHeight.toString() + "px"};
    },
    displayFlavorText(){
        return (this.rulesTextHeight <= 90);
    },
    ruleOverflow(){
        return (this.rulesTextHeight >= this.techBodyHeight);
    }
  },
  methods: {
      collapseCard(){
          this.$emit("collapseToggle");
      },
      executeTechnique(){
          window.alert(this.tech.name + " executed!");
      },
      updateRulesTextHeight(){
        if(this.$refs.rulesText){
            this.rulesTextHeight = this.$refs.rulesText.scrollHeight;
            this.techBodyHeight = 122 - this.$refs.mobileTechs.scrollHeight;
        }
      },
      onResize(){
          this.updateRulesTextHeight();
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tech-body{
        height: 180px;
        border-radius: 8px;
        background-color: white;
        box-shadow: 3px 3px 6px rgb(0,0,0,0.75);
    }
    .tech-info-container{
        width: calc(100% - 120px);
        float: left;
    }
    .tech-header-row{
        height: 38px;
        border-top-left-radius: 5px;
    }
    .tech-header{
        padding: 12px 10px 0px 10px;
        color: white;
        font-size: 18px;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-weight:bolder;
        text-align: left;
    }
    .tech-body-row{
        height: 122px;
        color: #555555;
        position: relative;
    }
    .tech-body-rules-row{
        max-height: 122px;
        font-size: 14px;
        text-align: left;
        padding: 7px 10px;
        overflow-x: hidden;
        overflow-y: hidden;
    }
    .tech-body-flavor-row{
        font-size: 10px;
        font-style: italic;
        text-align: left;
        padding: 0px 10px 5px 10px;
        position: absolute;
        bottom: 0px;
        overflow-x: hidden;
        overflow-y: hidden;
    }
    .tech-footer-row{
        height: 20px;
        color: white;
        font-size: 10px;
        line-height: 20px;
        padding: 0px 10px;
        border-bottom-left-radius: 5px;
        overflow: hidden;
    }
    .tech-tags{
        float: left;
    }
    .tech-level {
        float: right;
        overflow: none;
    }
    .tech-info-image-separator{
        height: 180px;
        width: 8px;
        background: rgb(214,170,97);
        background: linear-gradient(180deg, rgba(214,170,97,1) 0%, rgba(169,97,46,1) 100%);
        float: left;
    }
    .tech-image-container{
        height: 180px;
        width: 112px;
        float: right;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .image-spacer{
        width: 112px;
        height: 151px;
    }
    .ap-cost{
        margin: 0px 1px 10px 6px;
        float: left;
    }
    .st-cost{
        margin: 0px 6px 10px 1px;
        float: right;
    }
    .pipe-separator{
        margin: 0px 4px 0px 4px;
    }
    .tech-button-row{
        height: 30px;
    }
    .tech-button{
        color: white;
        background-color: #444444;
        font-size: 10px;
        height: 18px;
        padding: 3px 13px 3px 13px;
        margin: 7px 0px 7px 6px;
        border-radius: 15px;
        float: right;
        line-height: 12px;
        cursor: pointer;
        box-shadow: 2px 2px 4px rgb(0,0,0,0.75);
    }
    .collapsed-container{
        height: 40px;
    }
    .collapsed-detail-container{
        height: 40px;
        border-radius: 20px;
        box-shadow: 3px 3px 6px rgb(0,0,0,0.75);
        cursor: pointer;
        overflow: hidden;
    }
    .collapsed-header{
        line-height: 40px;
        color: white;
        font-size: 18px;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-weight:bolder;
        float: left;
        padding: 0px 10px 0px 20px;
    }
    .collapsed-tag{
        color: white;
        line-height: 40px;
        font-size: 10px;
        float: right;
    }
    .collapsed-tech-costs{
        float: right;
        margin: 11px 5px;
    }
    .vertScroll{
        overflow-y: scroll;

        /*Firefox Scrollbar style*/
        scrollbar-width: thin;
    }

    /*Chrome, Edge, Safari Scrollbar*/
    .vertScroll::-webkit-scrollbar {
        width: 6px;
    }
    .vertScroll::-webkit-scrollbar-track {
        background-color: #EEEEEE;
    }
    .vertScroll::-webkit-scrollbar-thumb {
        background-color: #CCCCCC;
        margin-right: 1px;
    }
    .vertScroll::-webkit-scrollbar-thumb:hover {
        background-color: #AAAAAA;
        margin-right: 1px;
    }

    .mobile-tech-costs{
        float: right;
        margin: 0px 5px;
        padding: 0px;
        vertical-align: bottom;
        position: absolute;
        right: -5px;
        bottom: -5px;
        display: none;
    }

    @media(max-width: 380px){
        .tech-info-image-separator{
            display: none;
        }
        .tech-info-container{
            width: calc(100% - 112px);
        }
    }

    @media(max-width: 372px){
        .tech-info-image-separator, .tech-image-container, .tech-body-flavor-row{
            display: none;
        }
        .tech-info-container{
            width: 100%;
        }
        .tech-header-row{
            border-top-right-radius: 5px;
        }
        .tech-footer-row{
            border-bottom-right-radius: 5px;
        }
        .tech-body-rules-row{
            max-height: 90px;
        }
        .mobile-tech-costs{
            display:inline;
        }
    }
</style>