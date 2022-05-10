<template>
    <h1>Meu nome é: {{ nome }} </h1>
</template>

<script>
export default {
    name: 'LifeCycle',
 //nivel de hierarquia    
 // created sobreescreve data e mouted sobreescreve created
data(){
    return{
        nome: 'Ainda não sei'
    }
},

created(){
    //Mudar o nome depois de 1s
    setTimeout(() =>{
        this.nome = 'Assunção' 
    }, 1000);    
},

mouted(){
    setTimeout(() => {
        this.nome = 'Lins'   
    }, 3000);          
}  
}
</script>
