Vue.createApp({
    data() {
        return {
            number: 0,
            text: "",
        }
    },

    computed: {
        result() {
            if (this.number < 37) {
                return "Not there yet";
            }

            if (this.number > 37) {
                return "Too much!";
            }

            return `Magic number ${this.number}`;
        }
    },

    watch: {
        result() {
            console.log("Resetting number");
            const that = this;
            setTimeout(() => {
                that.number = 0;
            }, 5000);
        }
    },

    methods: {
        add(value) {
            this.number += value;
        }
    }
}).mount("#assignment");