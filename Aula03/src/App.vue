<template>
    <div>
        <PrimeiroComponente /> 
        <!-- <primeiro-componente> -->
        <p>O dado de app é: {{ testando }}</p>
        <LifeCycle />
    </div>
 
</template>

<script>
import PrimeiroComponente from "./components/PrimeiroComponente.vue"
import LifeCycle from "./components/LifeCycles.vue"

    export default {
    name: 'App',
    components: {
        PrimeiroComponente,
        LifeCycle
    },

    //dados que podem ser alterados
    data(){
        return{
            testando:"Teste Segunda Componente"
        }
    }
}
</script>
