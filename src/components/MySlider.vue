<template>
  <div class="main-wrapper">
    <div id="left">
      <div class="static-header">Simple access to</div>
      <div id="typewrite"></div>
    </div>
    <div id="right">
      <agile
        ref="carousel"
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
        <template slot="prevButton">prev</template>
        <template slot="nextButton">next</template>
      </agile>
    </div>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";
import TypeIt from "typeit";
import KenBurns from "../components/KenBurns";
export default {
  data() {
    return {
      currentSlide: 0,
      nextSlide: 0,
      typeIt: null,
      message: ""
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
    this.typeIt = new TypeIt("#typewrite", {
      cursor: true,
      speed: 100
      // loop: true
    });
    // this.typeIt
    //   .type("long-term outperformance")
    //   .pause(2000)
    //   .delete()
    //   .type("hand-picked companies")
    //   .pause(2000)
    //   .delete()
    //   .type("global private equity")
    //   .pause(2000)
    //   .delete()
    //   .go();
  },
  methods: {
    beforeChange(event) {
      // console.log("TCL: beforeChange -> event", event);
      this.currentSlide = event.currentSlide;
      this.nextSlide = event.nextSlide;
      // let message = this.slides[this.nextSlide].caption;
      // console.log("TCL: beforeChange -> message", message);
      this.typeIt
        .pause(1000)
        .delete()
        .go()
        .reset();

      console.log("TCL: beforeChange -> this.typeIt", this.typeIt);
    },
    afterChange(event) {
      console.log("TCL: afterChange -> event", event);
      let message = this.slides[event.currentSlide].caption;

      this.typeIt
        .type(message)
        .go()
        .reset();

      // .delete()
    }
  },
  components: {
    agile: VueAgile,
    KenBurns
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("https://fonts.googleapis.com/css?family=Catamaran:400,600,700|Roboto:400,500,700&display=swap");

.main-wrapper {
  display: flex;
  width: 100vw;
  max-width: 1500px;
  background: #ddf4f5;
  justify-content: space-between;
}

#left {
  width: 30%;
  font-family: Catamaran, sans-serif;
  font-weight: bold;
  font-size: 80pt;
  line-height: 84pt;
  color: #20314e;
}

#left .static-header {
  position: absolute;
  top: 50px;
  font-size: 28pt;
  line-height: 28pt;
}

#typewrite {
  position: absolute;
  top: 100px;
  width: 55%;
  z-index: 2;
}

#right {
  width: 66%;
  justify-self: end;
}

#right *div {
  padding: 0;
  margin: 0;
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

.slide {
  align-items: center;
  color: #fff;
  display: flex;
  height: 100%;
  justify-content: center;
}
</style>
