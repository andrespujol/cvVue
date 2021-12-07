<template>
    <div>
    <b-card
    v-for="user in users" :key="user.id"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2">   
        <b-card-img :src="user.url"></b-card-img>
        <b-card-title>
        {{user.title}}
        </b-card-title>
        <b-button href="#" variant="primary">{{ user.msg }}</b-button>
    </b-card>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        data: ()=> ({
            show:false,
            users: [
                {
                    id: 1, 
                    url: "https://i.ibb.co/M7XBX1C/recruiter.png",
                    title: "¿eres un/a recruiter?",
                    msg: "Sí, de qué se trata esto?",
                    txt: "Este es un CV interactivo. Vas a poder moverte por las diferentes secciones para buscar la info que necesites.",
                    alt: "Imagen recruiter"
                },                {
                    id: 2, 
                    url: "https://i.ibb.co/tMW6SC0/dev.png",
                    title: "Soy Andrés",
                    msg: "Vine a probar algunas cosas",
                    txt: "",
                    alt: "Imagen developer"
                }
            ]
        }),
        props: {
            title: {
                type: String,
                default: "¿eres un/a recruiter?"
            },
            msg: {
                type: String,
                default: "Sí, de qué se trata esto?"
            },
            txt: {
                type: String,
                default: "Este es un CV interactivo. Vas a poder moverte por las diferentes secciones para buscar la info que necesites."
            },
        }
    }
</script>

<style  scoped>
.card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>