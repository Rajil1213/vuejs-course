Vue.createApp({
    data() {
        return {
            name: "Rajil Bajracharya",
            age: 26,
            favNumber: Math.floor(Math.random() * 5),
            imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
    },
    methods: {
        setNewName(e) {
            console.log(e);
            this.name = e.target.value;
        }
    }
}).mount("#assignment");