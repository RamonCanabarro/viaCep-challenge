import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueTheMask from "vue-the-mask";

const app = createApp(App);
const defaultDocumentTitle = "CEPs";
router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} — ${defaultDocumentTitle}`;
  } else {
    document.title = defaultDocumentTitle;
  }
});
app.use(router);
app.use(VueTheMask);
app.mount("#app");
