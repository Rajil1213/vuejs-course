Vue.createApp({
	// states managed by vue
	data() {
		return {
			goals: [],
			enteredValue: "",
		}
	},
	// methods to read/mutate state
	methods: {
		addGoal() {
			this.goals.push(this.enteredValue);
			this.enteredValue = "";
		}
	}
}).mount("#app");
