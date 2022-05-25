<template>
    <img :src="icone" :alt="descricao">
</template>

<script>
    export default{
        name: 'Picture',
        data(){
           return {
               icone: "/img/icone.png",
               descricao: "Nathalia Assunção"
               
           } 
        }
        
    }
</script>
