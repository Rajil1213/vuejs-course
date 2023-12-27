Vue.createApp({
    data() {
        return {
            show: true,
            className: "",
            bgColor: "white",
        }
    },

    methods: {
        toggleShow() {
            this.show = !this.show;
        },
    }
}).mount("#assignment");