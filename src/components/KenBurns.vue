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

<style>
.imageContainer {
  background-color: #333;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform: scaleY(0.9);
  /* border: 2px #333 solid; */
}
.imageContainer img {
  /* transform: translateY(-1%); */
}
@keyframes kenburns {
  0% {
    opacity: 0.6;
  }
  35% {
    opacity: 1;
  }
  /* 75% {
    transform: scale3d(1.2, 1.2, 1.2);
    animation-timing-function: ease-in;
    opacity: 1;
  } */
  100% {
    transform: scale3d(1.4, 1.4, 1.4) translate3d(10%, 6%, 0);
    animation-timing-function: ease-in;
    opacity: 1;
  }
}

/* #imageContainer img.animate {
  animation: kenburns 20s infinite;
} */

/* #theImage.animation {
  animation: kenburns 5s forwards;
} */
</style>
