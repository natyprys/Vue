<template>
    <div>
        <Header :esta_logado="true"/>
        <PrimeiroComponente /> 
        <LifeCycle />
        <Pessoa />
    </div>  
</template>

<script>
//import das componentes
import Header from "./components/form/Header.vue"
import PrimeiroComponente from "./components/form/PrimeiroComponente.vue"
import LifeCycle from "./components/form/LifeCycle.vue"
import Pessoa from "./components/form/Pessoa.vue"

    export default {
    name: 'App',
    //chamamos as componentes que serão usados no app e passamos no template
    components: {
     Header,    
    PrimeiroComponente,
    LifeCycle,
    Pessoa  
},

    //dados que podem ser alterados
    data(){
        return{
            testando:"Teste Segunda Componente"
        }
    }
}
</script>


<style>
/* estilo de uso global - pode ser chamado em qualquer parte do codigo */
body{
    background-color: rgb(179, 160, 221);
    color: black;
}

/* para mudar a cor do link de acesso aos sites */
a{
    color: rgb(21, 0, 139);
}
</style>