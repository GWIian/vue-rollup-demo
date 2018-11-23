import Vue from "vue"
import App from "./src/App.vue"

new Vue({
    render(h) {
        return h(App)
    }
}).$mount("#app")