<template>
    <ul>
        <li><a href="#"> Home</a></li>
        <li><a href="#"> Projetos</a></li>
        <li><a href="#"> Contato</a></li>
    </ul>

</template>

<script>
export default{
    name: 'Header'
}
</script>


<style scoped>
/* estilo personalizado, só para esse arquivo */

ul{
    list-style: none;
    display: flex;
    background: #fefefe;
    width: 14%;
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