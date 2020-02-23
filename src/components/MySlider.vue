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
        :autoplay="false"
        :speed="sliderConfig.speed"
        :rtl="true"
        :dots="false"
        :navButtons="false"
        :pauseOnHover="true"
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
      </agile>
      <m-fab
        @mouseover="
          pauseAutoplay = true;
          autoPlay();
        "
        @mouseleave="
          pauseAutoplay = false;
          autoPlay();
        "
        baseline
        @click="$refs.carousel.goToNext()"
        ><img slot="icon" class="next-svg" :src="nextIcon" alt=""
      /></m-fab>
    </div>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";
import { VueTyper } from "vue-typer";

import KenBurns from "../components/KenBurns";
import nextIcon from "../assets/step-forward.svg";
export default {
  data() {
    return {
      currentSlide: 0,
      nextSlide: 0,
      typeIt: null,
      message: "",
      countWord: 0,
      nextIcon,
      nextButtonHover: false,
      pauseAutoplay: false
    };
  },
  watch: {},
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
    },
    sliderConfig: {
      type: Object,
      default: () => ({
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 2000
      })
    }
  },
  mounted() {
    this.$emit("breakPoint", this.$refs.carousel.getCurrentBreakpoint());
    // Create own autoplay so that I can pause on button hover
    this.autoPlay();
  },
  methods: {
    async autoPlay() {
      if (this.pauseAutoplay) return;
      var wait = ms => new Promise(r => setTimeout(r, ms)); // Creates a non-blocking wait function.
      await wait(this.sliderConfig.autoplaySpeed);
      this.$refs.carousel.goToNext();
      this.autoPlay();
    },
    beforeChange(event) {
      // console.log("TCL: beforeChange -> event", event);
      this.currentSlide = event.currentSlide;
      this.nextSlide = event.nextSlide;
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
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Catamaran:400,600,700|Roboto:400,500,700&display=swap");
// @import "material-components-vue/dist/icon-button/styles.scss";
@import url("https://unpkg.com/material-components-vue/dist/fab/fab.min.css");

.mdc-fab {
  position: absolute;
  top: 480px;
  transform: translateX(-50%);
  background-color: var(--mdc-theme-secondary, #287bbe);
  height: 100px;
  width: 100px;
  z-index: 24;
}

.mdc-fab .mdc-fab__icon {
  width: 60%;
  height: 60%;
  font-size: 24px;
}

.mdc-fab.mdc-ripple-upgraded {
  --mdc-ripple-fg-opacity: 0.2;
}

.mdc-fab:after,
.mdc-fab:before {
  background-color: var(--mdc-theme-on-secondary, #fff);
  opacity: 0;
}
.main-wrapper {
  display: flex;
  width: 100vw;
  max-width: 1400px;
  height: 900px;
  justify-content: space-between;
}

#left {
  width: 28%;
  font-family: Catamaran, sans-serif;
  font-weight: bold;
  font-size: 80pt;
  line-height: 84pt;
  color: #20314e;
}

#left .static-header {
  position: absolute;
  top: 150px;
  font-size: 28pt;
  line-height: 28pt;
  z-index: 2;
}
#right {
  width: 66%;
  min-width: 800px;
  // justify-self: end;
  // object-fit: cover;
}

.typewrite {
  position: absolute;
  top: 200px;
  width: 80%;
  z-index: 2;
  color: #20314e;
}

.vue-typer .custom.char {
  color: #20314e;
}

span.nowrap {
  white-space: nowrap;
}

.agile {
  height: 700px;
}

.slide {
  display: flex;
  align-items: center;
  color: #fff;
  height: 700px;

  justify-content: center;
}

/* From lib author  */
.agile__actions {
  margin-top: 20px;
}

.agile__nav-button {
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 24px;
  transition-duration: 0.3s;
}

.agile__nav-button:hover {
  color: #888;
}

.agile__dot {
  margin: 0 10px;
}

.agile__dot button {
  background-color: #eee;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 10px;
}

.agile__dot--current button,
.agile__dot:hover button {
  background-color: #888;
}

/* TODO definitely need a 650 and under setting for landscape cell-phones */

@media screen and (max-width: 928px) {
  .typewrite {
    font-size: 64pt;
    line-height: 70pt;
  }
}

@media screen and (max-width: 768px) {
  .mdc-fab {
    top: 447px;
    right: -10px;
    height: 70px;
    width: 70px;
  }

  .typewrite {
    color: white;
    font-size: 28pt;
    line-height: 32pt;
  }
  /* without the extra specificity the text doesn't turn white at small screens */
  .vue-typer .custom.char {
    color: white;
  }

  #left .static-header {
    top: 50px;
    font-size: 18pt;
    line-height: 18pt;
    margin-left: 15px;
    color: white;
  }
  .typewrite {
    margin-left: 15px;
    top: 100px;
  }
  #left {
    width: 0;
  }
  #right {
    width: 100%;
    // min-width: 200px;
  }
  .agile {
    height: 300px;
  }
  .slide {
    width: 100%;
    height: 500px;
  }
}

@media screen and (max-width: 350px) {
  .typewrite {
    color: white;
    font-size: 22pt;
    line-height: 26pt;
  }
}
</style>
