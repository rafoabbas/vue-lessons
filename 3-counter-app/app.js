const app = Vue.createApp({
    data() {
        return {
            count  : 0,
            count2 : 0,
        }
    },
    methods: {

        // inc() {
        //     this.count ++;
        // },
        // dec() {
        //     this.count --;
        // },
    },

    //computed icinde calisan nesneler degisken gibi calisan method kimi calisan neslelerdir
    // getCountResult2, getCountResult funksiyalarin methods icinde yazsaydiq count ve count2 her
    // deyisdiyinde iki methodun ikiside calisacaqdi
    computed: {
        getCountResult2() {
            console.log("getCountResult2");
            return this.count2 > 5 ? 'Boyuk' : 'Kicik';
        },
        getCountResult() {
            console.log("getCountResult");
            return this.count > 5 ? 'Boyuk' : 'Kicik';
        },
    }
}).mount('#app')

