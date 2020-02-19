<template>
  <div>
    <ken-burns :image="slides[0]"></ken-burns>
    <!-- <agile autoplay>
      <div class="slide" v-for="image in slides">
        <h3>slide 1</h3>
      </div>
    </agile> -->
  </div>
</template>

<script>
// import { VueAgile } from "vue-agile";
import KenBurns from "../components/KenBurns";
export default {
  data() {
    return {};
  },
  props: {
    slides: {
      type: Array,
      default: () => [
        {
          caption: "global private equity",
          imageSrc:
            "https://s3-eu-west-1.amazonaws.com/staging-wp-pip/pip/app/uploads/2020/02/17183537/slider_global_pe_%402x.jpg"
        },
        {
          caption: "long-term outperformance",
          imageSrc:
            "https://s3-eu-west-1.amazonaws.com/staging-wp-pip/pip/app/uploads/2020/02/18180140/slider_outperformance_%402x-1.jpg"
        },
        {
          caption: "hand-picked companies",
          imageSrc:
            "https://s3-eu-west-1.amazonaws.com/staging-wp-pip/pip/app/uploads/2020/02/17183538/slider_hand_picked_%402x.jpg"
        }
      ]
    }
  },
  mounted() {},
  methods: {},
  components: {
    // agile: VueAgile,
    KenBurns
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
