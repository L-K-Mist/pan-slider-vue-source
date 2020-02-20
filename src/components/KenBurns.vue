<template>
  <div ref="imageContainer" class="imageContainer">
    <img
      id="theImage"
      ref="imageToAnimate"
      width="112%"
      height="112%"
      :src="image.imageSrc"
      :style="animationStyle"
    />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object
    }
  },
  data() {
    return {
      animationStyle: "animation: 10s both 1s kenburns "
    };
  },
  computed: {},
  methods: {
    animationOn() {
      this.animationStyle = "animation: kenburns  20s";
      console.log(
        "TCL: animationOn -> this.animationStyle",
        this.animationStyle
      );
    }
  }
};
</script>

<style lang="scss"></style>
