Vue.createApp({
    data() {
        return {
            cards: [
                { id: 1, text: "I'm hungry", message: "I am hungry", image: "path/to/image.jpg" },
                { id: 2, text: "I'm thirsty", message: "I am thirsty", image: "path/to/image.jpg" },
                // Add more cards here
            ]
        };
    },
    methods: {
        alert(message) {
            window.alert(message);
        }
    }
}).mount('#app');
