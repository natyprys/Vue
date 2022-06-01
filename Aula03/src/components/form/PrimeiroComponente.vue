<template>
    <div>
       <h1>Olá! Seja bem-vindo(a)!!</h1>
       <Reutilizacao />
        <p> Meu nome é {{nome}} e trabalho como {{profissao}}.</p>  
        <!-- Os componentes do Vue só podem ter um elemento router -->
        <!-- Por isso colocamos em uma div -->
        <MultiplosEventos />
        <Reutilizacao />
    </div>  
</template>

<script>
import MultiplosEventos from './MultiplosEventos.vue'
import Reutilizacao from './Reutilizacao.vue';
export default{
    name: "PrimeiroComponente",
    //configurações de componentes
    components: {
    MultiplosEventos,
    Reutilizacao
    },
    data() {
        return {
            nome: "Nathalia",
            profissao: "Programadora"
        };
    },
    components: { MultiplosEventos, Reutilizacao }
}
</script>