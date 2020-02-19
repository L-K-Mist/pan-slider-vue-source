import Vue from "vue";
// import App from "./App.vue";
import vueCustomElement from "vue-custom-element";
import MySlider from "./components/MySlider.vue";

Vue.use(vueCustomElement);

// Configure Vue to ignore the element name when defined outside of Vue.
Vue.config.ignoredElements = ["pan-slider"];

// Register your component
Vue.customElement("pan-slider", MySlider, {
  // Additional Options: https://github.com/karol-f/vue-custom-element#options
});

Vue.config.productionTip = false;
