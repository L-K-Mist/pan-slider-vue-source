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

.main-wrapper {
  display: flex;
  width: 100vw;
  max-width: 1400px;
  height: 900px;
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
  top: 150px;
  font-size: 28pt;
  line-height: 28pt;
  z-index: 2;
}
#right {
  width: 66%;
  min-width: 800px;
  justify-self: end;
  object-fit: cover;
}

.typewrite {
  position: absolute;
  top: 200px;
  width: 80%;
  z-index: 2;
  color: #20314e;
}

.vue-typer .custom {
  color: #20314e;
  /* color: white */
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
/* On screens that are 768px or less, set the background color to blue */
@media screen and (max-width: 768px) {
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
    min-width: 200px;
  }
  .agile {
    height: 300px;
  }
  .slide {
    width: 100%;
    height: 500px;
  }
}
</style>
