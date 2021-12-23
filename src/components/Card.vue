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

            <b-button href="#" variant="primary" v-if="user.id ===1" v-b-modal.modal-center>{{ user.msg }}</b-button>
            <b-button href="#" variant="primary" v-else><router-link to='/Login' class="linkCard">{{ user.msg }}</router-link></b-button>
        </b-card>
        <div>
            <b-modal 
                :header-bg-variant="headerBgVariant"
                :header-text-variant="headerTextVariant"
                id="modal-center" 
                centered title="CV de Andrés Pujol">
                <p class="my-4" >Este es un CV interactivo. En él, vas a poder ver mis experiencias laborales, mi historial académico de una forma distinta a la habitual.</p>
            </b-modal>
        </div>
    </div>
</template>

<script>


    export default {
        name: 'Card',
        data: ()=> ({
            show:false,
            headerBgVariant: 'dark',
            headerTextVariant: 'light',
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
.linkCard {
    color: white;
    text-decoration: none;
}
</style>