const MyNameApp ={
    data(){
        return {
            name: "",
            age: 25, 
            input_name: ""
        }
    },
    
    //funções da aplicação
    methods:{
        submitForm(e){
            e.preventDefault();
            //não deixa o formulário ser enviado para o servidor
            
            //console.log("Caiu aqui")
            console.log(this.input_name);
            this.name = this.input_name;
        }
    }    
}

Vue.createApp(MyNameApp).mount("#app");