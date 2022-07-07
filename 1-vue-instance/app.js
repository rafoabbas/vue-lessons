const app = Vue.createApp({
    data() {
        return {
            title : "Hello Vue.js",
            content : "This is a content",
            coordinates : {
                x : 0,
                y : 0
            }
        }
    },
    methods: {
        changeTitle(title){
            this.title = title;
        },
        updateCoordinates(event, box){
            this.coordinates = {
                x : event.x,
                y : event.y
            }
        }
    }
}).mount('#app')

