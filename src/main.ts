import { createApp } from "vue";
import App from "./App.vue";

import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { pinia } from "./store";

loadFonts();
const app = createApp(App);

app.use(vuetify);
app.use(pinia);
app.mount("#app");
