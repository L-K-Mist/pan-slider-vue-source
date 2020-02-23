import Vue from "vue";
// import App from "./App.vue";
import vueCustomElement from "vue-custom-element";
import MySlider from "./components/MySlider.vue";
import Fab from "material-components-vue/dist/fab";
import Icon from "material-components-vue/dist/icon";

Vue.use(vueCustomElement);
Vue.use(Fab);
Vue.use(Icon);

// Configure Vue to ignore the element name when defined outside of Vue.
Vue.config.ignoredElements = ["pan-slider"];

// Register your component
Vue.customElement("pan-slider", MySlider, {
  // Additional Options: https://github.com/karol-f/vue-custom-element#options
});

Vue.config.productionTip = false;
