import "./assets/style.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import AOS from "aos";
import "aos/dist/aos.css";

import "@/utils/lenis";

import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import "primeicons/primeicons.css";
import { definePreset } from "@primeuix/themes";

import InputText from "primevue/inputtext";
import IftaLabel from "primevue/iftalabel";
import Password from "primevue/password";
import Button from "primevue/button";
import Message from "primevue/message";
import { Form } from "@primevue/forms";
import Avatar from "primevue/avatar";
import ProgressSpinner from "primevue/progressspinner";
import Select from "primevue/select";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Dialog from "primevue/dialog";
import Textarea from "primevue/textarea";
import Rating from "primevue/rating";
import Drawer from "primevue/drawer";
import LoadingPage from "./layouts/LoadingPage.vue";
import ScrollTop from "primevue/scrolltop";

import Vue3Marquee from "vue3-marquee";

const app = createApp(App);

const EAEPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "#00703a",
      100: "#00703a",
      200: "#00703a",
      300: "#00703a",
      400: "#00703a",
      500: "#00703a",
      600: "#00703a",
      700: "#00703a",
      800: "#00703a",
      900: "#00703a",
      950: "#00703a",
    },
    secondary: {
      50: "#edb604",
      100: "#edb604",
      200: "#edb604",
      300: "#edb604",
      400: "#edb604",
      500: "#edb604",
      600: "#edb604",
      700: "#edb604",
      800: "#edb604",
      900: "#edb604",
      950: "#edb604",
    },
  },
});

app.use(PrimeVue, {
  theme: {
    preset: EAEPreset,
    options: {
      darkModeSelector: ".fake-dark-mode",
    },
  },
});

app.use(ToastService);

app.component("InputText", InputText);
app.component("IftaLabel", IftaLabel);
app.component("Password", Password);
app.component("Button", Button);
app.component("Form", Form);
app.component("Message", Message);
app.component("Avatar", Avatar);
app.component("ProgressSpinner", ProgressSpinner);
app.component("Select", Select);
app.component("Toast", Toast);
app.component("Dialog", Dialog);
app.component("Image", Image);
app.component("Textarea", Textarea);
app.component("Rating", Rating);
app.component("Drawer", Drawer);
app.component("ScrollTop", ScrollTop);

app.component("LoadingPage", LoadingPage);

app.component("Vue3Marquee", Vue3Marquee);

app.use(Vue3Marquee);

AOS.init();

app.use(router);

app.mount("#app");
