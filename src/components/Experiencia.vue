<template>
    <div>
        <b-button @click="obtenerExperiencias()" variant="primary"  class="btnExperiencias">Ver mi experiencia</b-button>
        <b-card
            v-for="experiencia in experiencias" :key="experiencia.id"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">   
            <b-card-img :src="experiencia.url" class="imgExperiencia"></b-card-img>
            <b-card-title>
                {{experiencia.title}}
            </b-card-title>
            <b-card-text>
                {{experiencia.date}}
            </b-card-text>
            <b-card-text>
                {{experiencia.msg}}
            </b-card-text>
            <b-card-text>
                {{experiencia.txt}}
            </b-card-text>
            <b-card-text v-if="experiencia.title === 'Coderhouse'">
                <label for="">¿Te gustaría leer comentarios al respecto?</label>
                <b-button type="submit" variant="primary" class="btnLogin" @click="send()"><router-link to='/Coments' class="linksMenu">Leer</router-link></b-button>
                <label for="">¿O preferís que hablemos al respecto?</label>
                <b-button type="submit" variant="primary" class="btnLogin" @click="send()">Saber más</b-button>
            </b-card-text>
            <b-card-text v-else-if="experiencia.title === 'Fachari SAC'">
                <label for="">¿Te gustaría que hablemos sobre esto?</label>
                <b-button type="submit" variant="primary" class="btnLogin" @click="send()">Saber más</b-button>
            </b-card-text>
            <b-card-text v-else-if="experiencia.title === 'Clínica Cormillot (Productos Cormillot S.A.)'">
                <label for="">¿Te gustaría que hablemos de esta experiencia?</label>
                <b-button type="submit" variant="primary" class="btnLogin" @click="send()">Saber más</b-button>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
import axios from "axios";

    export default {
        name: 'Experiencia',
        data() {
            return {
                experiencias: []
            }
        }, 
        methods: {
            send() {
                this.$emit("LlevarCarrito")
                console.log('entra')
            },
            obtenerExperiencias () {
                axios.get('https://mocki.io/v1/df516e66-5d83-4a4b-9541-464f162c0865')
                    .then(data => {
                        this.experiencias = data.data
                    })
        },

    }
}
</script>

<style >
    .imgExperiencia {
        width: 90%;
        height: 40vh;
        object-fit: contain;
    }
    .btnExperiencias, .btnLogin {
        width: 50%;
        margin: 1rem 0 1rem 25%;
    }
    .linksMenu {
        color: white;
        text-decoration: none;
    }
</style>

