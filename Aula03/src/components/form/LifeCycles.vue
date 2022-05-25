<template>
    <h2>Meu nome completo é: {{ nome }} </h2>
</template>

<script>
export default {
    name: 'LifeCycle',
 //nivel de hierarquia    
 // created sobreescreve data e mounted sobreescreve created

data(){
    return{
        nome: 'Nathália Priscila'
    }
},

//depois da criação do componente oq eu vou fazer passo no created
created(){
    //Mudar o nome depois de 1s
    setTimeout(() =>{
        this.nome = 'Lins' 
    }, 1000);    
    this.lifeCycle()
},

mounted(){
    setTimeout(() =>{
        this.nome = 'Nathalia Priscila Lins de Assunção'   
    }, 2000);          
},
methods:{
    lifeCycle(){
        console,log("executando")
    }
}  

}
</script>