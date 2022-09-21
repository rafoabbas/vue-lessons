const app = Vue.createApp({
    data() {
        return {
            search: "",
            itemlist: [
                "elma", "armut", "kiraz", "cilek"
            ],
            // filteredList: []
        }
    },
    methods: {
        searchList() {
            // this.filteredList = this.itemlist.filter(i => i.includes(this.search))
        }
    },
    computed: {
        filteredList () {
            return this.itemlist.filter(i => i.includes(this.search))
        }
    },
    watch: {}
}).mount('#app')
