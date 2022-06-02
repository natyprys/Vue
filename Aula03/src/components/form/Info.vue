<template>
    <div>
        <p> {{compEmail}} - {{email}}</p>
        <!-- para diretivas if e else a condição deve ser colocar no data -->
        <p v-if="esta_trabalhando" >Estou trabalhando no momento.</p>
        <!-- o if e o else devem estar juntos -->
        <p v-else> Estou em busca de novas oportunidades!</p>
        <p>Utilizo as seguintes tecnologias para back-end:</p>
        <ul>
            <!-- O for deve ser colocado no elemento que se repetirá -->
            <li v-bind:key="index" v-for="(technology, index) in backend_tecnologies">{{technology}}</li>
        </ul>
        <p>Utilizo as seguintes tecnologias para front-end:</p>
        <ul>
            <li v-for="technology in frontend_technologies" :key="technology.id">{{technology.language}}</li>
        </ul>
        <div> 
            <button @click="showEmail">{{textoBotao}}</button>
            <!-- o clicar nesse botão vou executar o showEmail -->
        </div>
        <p v-show="mostrar_email">Mande uma  mensagem para: {{ email }} </p>
        <!-- mostra dependendo do mostrar-email -->
        <p> Para acessar meu portifoólio <a v-bind:href="meu_link" target="_blank"> basta clicar aqui.</a></p>
        <!-- diretiva do vue para acessar o site v-bind -->
        <!-- target="_blank" - para mudar de aba e abrir a pagina -->
        <Picture />
    </div>
</template>

<script>
import Picture from './Picture.vue'

export default{
    name:'Info',
    components:{
        Picture
    },
    props:{
        //receve de Pessoa
        compEmail: String
    },
    data(){
        return{
            esta_trabalhando: false,
            mostrar_email: false,
            email: 'nathalia.p.lins@gmail.com',
            meu_link: 'https://github.com/natyprys',
            textoBotao: 'Mostrar e-mail',
            //notação de arrey []
            backend_tecnologies: ['Java', 'Python' , 'JavaScript'],
            //notação para objeto {}
            frontend_technologies: [
                {id:1, language: 'HTML'}, 
                {id:2, language: 'CSS'},
                {id:3, language: 'Vue'}, 
                {id:4, language: 'Angular'}]
        }
    },
    methods:{
        showEmail(){
            this.mostrar_email = !this.mostrar_email;
            //para mudar a condição do v-show
            if(!this.mostrar_email){
                this.textoBotao = 'Mostrar e-mail'              
            } else{
                this.textoBotao = 'Esconder e-mail'
            }
        }
    }
}
</script>