<template>
    <div>
        <PrimeiroComponente /> 
        <!-- <primeiro-componente> -->
        <p>O dado de app é: {{ testando }}</p>
    </div>
 
</template>

<script>
import PrimeiroComponente from "./components/PrimeiroComponente.vue"

    export default {
    name: 'App',
    components: {
        PrimeiroComponente
    },

    //dados que podem ser alterados
    data(){
        return{
            testando:"Teste Segunda Componente"
        }
    }
}
</script>
