<template>
  <div class="main-wrapper">
    <div id="left">
      <div class="static-header">Simple access to</div>

      <vue-typer
        class="typewrite"
        :text="message"
        :repeat="0"
        :shuffle="false"
        :pre-type-delay="70"
        :type-delay="80"
        :pre-erase-delay="3367"
        :erase-delay="94"
        erase-style="backspace"
        :erase-on-complete="false"
        caret-animation="phase"
      ></vue-typer>
    </div>
    <div id="right">
      <agile
        ref="carousel"
        :autoplay="true"
        :autoplaySpeed="8000"
        :speed="2000"
        :rtl="true"
        :dots="false"
        timing="ease-in-out"
        @beforeChange="beforeChange"
        @afterChange="afterChange"
      >
        <div class="slide">
          <ken-burns
            v-if="currentSlide === 0 || nextSlide === 0"
            :image="slides[0]"
          ></ken-burns>
        </div>
        <div class="slide">
          <ken-burns
            v-if="currentSlide === 1 || nextSlide === 1"
            :image="slides[1]"
          ></ken-burns>
        </div>
        <div class="slide">
          <ken-burns
            v-if="currentSlide === 2 || nextSlide === 2"
            :image="slides[2]"
          ></ken-burns>
        </div>
        <template slot="nextButton">next</template>
        <template slot="prevButton">prev</template>
      </agile>
    </div>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";
import { VueTyper } from "vue-typer";
import KenBurns from "../components/KenBurns";
export default {
  data() {
    return {
      currentSlide: 0,
      nextSlide: 0,
      typeIt: null,
      message: "",
      countWord: 0
    };
  },
  props: {
    slides: {
      type: Array,
      default: () => [
        {
          caption: "global private \nequity",
          imageSrc:
            "https://s3-eu-west-1.amazonaws.com/staging-wp-pip/pip/app/uploads/2020/02/17183537/slider_global_pe_%402x.jpg"
        },
        {
          caption: "long-term \noutperformance",
          imageSrc:
            "https://s3-eu-west-1.amazonaws.com/staging-wp-pip/pip/app/uploads/2020/02/18180140/slider_outperformance_%402x-1.jpg"
        },
        {
          caption: "hand-picked \ncompanies",
          imageSrc:
            "https://s3-eu-west-1.amazonaws.com/staging-wp-pip/pip/app/uploads/2020/02/17183538/slider_hand_picked_%402x.jpg"
        }
      ]
    }
  },
  mounted() {
    this.$emit("breakPoint", this.$refs.carousel.getCurrentBreakpoint());
  },
  methods: {
    beforeChange(event) {
      // console.log("TCL: beforeChange -> event", event);
      this.currentSlide = event.currentSlide;
      this.nextSlide = event.nextSlide;
      // let message = this.slides[this.nextSlide].caption;
      // console.log("TCL: beforeChange -> message", message);

      // console.log("TCL: beforeChange -> this.typeIt", this.typeIt);
    },
    afterChange(event) {
      // console.log("TCL: afterChange -> event", event);
      this.message = this.slides[event.currentSlide].caption + " ";

      // .delete()
    }
  },
  components: {
    agile: VueAgile,
    KenBurns,
    VueTyper
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("https://fonts.googleapis.com/css?family=Catamaran:400,600,700|Roboto:400,500,700&display=swap");
@import "../assets/global.scss";
</style>
