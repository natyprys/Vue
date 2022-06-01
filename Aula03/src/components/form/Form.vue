<template>
    <div>
       <h2>Meu Formulário</h2>
    <form action="" @submit="enviarFormulario($event)">
        <div>
            <input type="test" v-model="name">
            <!-- v-model = dados q serão refletidos no formulario -->
       </div>
       <div>
           <input type="test" v-model="email">
       </div>
       <div>
            <Submit />  
       </div>       
    </form>  
    </div>     
</template>

<script>
import InputText from "./InputText.vue"
import Submit from "./Submit.vue"

export default {
    name: 'Form',
    components: {
        InputText,
        Submit
    },
    data(){
        return{
        name: "",
        email: ""
        }
    },
    methods:{
        //para previnir que o formulário seja enviado
        enviarFormulario(e){
            e.preventDefault();

            const name = this.name;
            const email = this.email;

            console.log("Formulário Enviado!");
            console.log("O nome é: " + name);
            console.log("O email é: " + email);

            //inserir banco de dado
        }
    }
}
</script>