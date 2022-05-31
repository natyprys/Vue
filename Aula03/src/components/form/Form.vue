<template>
    <div>
       <h2>Meu Formulário</h2>
    <form action="" @submit="enviarFormulario">
        <div>
            <InputText /> 
       </div>
       <div>
            <InputText /> 
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
    methods:{
        enviarFormulario(){
             console.log("Formulário Enviado!");
        }
    }
}
</script>