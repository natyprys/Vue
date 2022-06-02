<template>
    <div>
        <p>Mas pode me chamar de: {{nome}}.</p>
        <Info  compEmail= "jeff.alves@gmail.com"/>
        <!-- <Info :hotmail="hotmail"/>    para chamar a props de forma dinamica-->
        <Form />
    </div>
</template>

<script>
import Info from "./Info.vue"
import Form from "./Form.vue"

export default {
    name: 'Pessoa',
    components:{
         Info,
         Form
    },

    data(){
       return{
           nome: 'Naty',
           hotmail: "natyzinha.priscila@hotmail.com"
           //para passar de forma dinamica posso só substituir os gmails em info por hotmail
       } 
    }    
}
</script>
