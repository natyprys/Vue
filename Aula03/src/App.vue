<template>
    <div>
        <PrimeiroComponente /> 
        <LifeCycle />
        <Pessoa />
    </div>  
</template>

<script>
//import das componentes
import PrimeiroComponente from "./components/form/PrimeiroComponente.vue"
import LifeCycle from "./components/form/LifeCycle.vue"
import Pessoa from "./components/form/Pessoa.vue"

    export default {
    name: 'App',
    //chamamos as componentes que serão usados no app e passamos no template
    components: {
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
body{
    background-color: plum;
    color: black;
}

/* para mudar a cor do link de acesso aos sites */
a{
    color: darkmagenta;
}


</style>