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
    }

});

app.mount('#myApp');
