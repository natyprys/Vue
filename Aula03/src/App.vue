<template>
    <div>
        <PrimeiroComponente /> 
        <p>O dado de app é: {{ testando }}</p>
        <LifeCycle />
        <Pessoa />
    </div>
 
</template>

<script>
//import das componentes
import PrimeiroComponente from "./components/PrimeiroComponente.vue"
import LifeCycle from "./components/LifeCycles.vue"
import Pessoa from "./components/Pessoa.vue"

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
