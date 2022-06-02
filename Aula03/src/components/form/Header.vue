<template>
    <ul>
        <li><a href="#"> Home</a></li>
        <li><a href="#"> Projetos</a></li>
        <li><a href="#"> Contato</a></li>
        <li v-if="esta_logado">
        <a href="#"> Meu Perfil</a>
        </li>
    </ul>

</template>

<script>
export default{
    name: 'Header',
    props:["esta_logado"]
}
</script>


<style scoped>
/* estilo personalizado, só para esse arquivo */

ul{
    list-style: none;
    display: flex;
    background: #fefefe;
    width: 20%;
}

li{
    margin-right: 10px;
}

a{
    color: rgb(223, 108, 186);
    text-decoration: none;
    transition: .5s;
}

a:hover{
    color: rgb(87, 1, 87);
}

</style>