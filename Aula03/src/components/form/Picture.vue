<template>
    <img :src="icone" :alt="descricao">
    <MudarImagem @mudar-imagem="trocarImagem"/>
</template>

<script>
import MudarImagem from './MudarImagem.vue';
export default{
    name: 'Picture',
    components:{
         MudarImagem
    },
    data(){
        return {
            icone: "/img/icone.png",
             descricao: "Nathalia Assunção"          
        } 
    },
    methods:{
        trocarImagem(){
            this.icone = "/img/lua.png"
        }
    }
        
    }
</script>
