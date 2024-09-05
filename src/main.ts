import { createApp } from "vue";
import App from "./App.vue";
import "./assets/app.scss";
import { setupScrollBarWidthCSSVariable } from "./lib/scrollBarWidth";

setupScrollBarWidthCSSVariable();
createApp(App).mount("#app");
