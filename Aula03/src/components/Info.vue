<template>
    <div>
        <!-- para diretivas if e else a condição deve ser colocar no data -->
        <p v-if="esta_trabalhando" >Estou trabalhando no momento.</p>
        <!-- o if e o else devem estar juntos -->
        <p v-else> Estou em busca de novas oportunidades </p>
        <p>Utilizo as seguintes tecnologias:</p>
        <ul>
            <li>Java</li>
            <li>Angular</li>
            <li>Python</li>   
        </ul>
        <p v-show="mostrar_email">Mande uma  mensagem para: {{ email }} </p>
        <!-- mostra dependendo do mostrar-email -->
    </div>
</template>



<script>
export default{
    name:'Info',
    data(){
        return{
            esta_trabalhando: false,
            mostrar_email: false,
            email: 'nathalia.p.lins@gmail.com'
        }
    }
}
</script>