Vue.createApp({
    data() {
        return {
            tasks: [],
            show: true,
            enteredTask: "",
        };
    },

    methods: {
       toggleShow() {
           this.show = !this.show;
       },

       addTask() {
          this.tasks.push(this.enteredTask);
       },
    },
}).mount("#assignment");