<template>
    <div>
       <h1>Olá! Seja bem-vindo(a)!!</h1>
        <p> Meu nome é {{nome}} e trabalho como {{profissao}}.</p>  
        <!-- Os componentes do Vue só podem ter um elemento router -->
        <!-- Por isso colocamos em uma div -->
    </div>  
</template>

<script>
export default{
   name: 'PrimeiroComponente',

   //configurações de componentes
   data(){
       return{
           nome: "Nathalia",
           profissao: "Programadora"
       }
   }
}
</script>