const app = Vue.createApp({
    data() {
        return {
            fullName: null,
            message: 'Hello Vue!'
        }
    },
    methods: {
        updateValue(event) {
            this.fullName = event.target.value;
        }
    }
}).mount('#app')

