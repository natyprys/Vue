<template>
    <h1>Meu nome é: {{ nome }} </h1>
</template>

<script>
export default {
    name: 'LifeCycle',
 //nivel de hierarquia    
 // created sobreescreve data e mounted sobreescreve created

data(){
    return{
        nome: 'Ainda não sei'
    }
},

//depois da criação do componente oq eu vou fazer passo no created
created(){
    //Mudar o nome depois de 1s
    setTimeout(() =>{
        this.nome = 'Assunção' 
    }, 1000);    
},

mounted(){
    setTimeout(() =>{
        this.nome = 'Lins'   
    }, 2000);          
}  

}
</script>
