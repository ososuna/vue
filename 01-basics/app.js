const app = Vue.createApp({
/*     template: `
        <h1>Hello World</h1>
        <p>From app.js</p>
    ` */

    data() {
        return {
            message: 'Hello World',
            quote: 'I am Batman',
            author: 'Bruce Wayne'
        }
    },
    methods: {
        changeQuote() {
            this.quote = 'Hello World';
            this.capitalize();
        },
        capitalize() {
            this.author = this.author.toUpperCase();
        }
    }
});

app.mount('#myApp');
