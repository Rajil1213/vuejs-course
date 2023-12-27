Vue.createApp({
    data() {
        return {
            outputs: ["", ""],
        }
    },
    methods: {
        showAlert() {
            alert("It's clicking!");
        },
        setOutput(event, outputNum) {
            if (outputNum === 1) {
                this.outputs[0] = event.target.value;
            } else {
                this.outputs[1] = event.target.value;
            }
        }
    }
}).mount("#assignment");