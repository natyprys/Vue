const MyNameApp ={
    data(){
        return {
            name: "Nathália Assunção ",
            age: 25
        }
    }   
}

Vue.createApp(MyNameApp).mount("#app");
    //mount - para mostar onde queremos colocar o App, em qual elemento.
    //usamos o app utilizado no index
