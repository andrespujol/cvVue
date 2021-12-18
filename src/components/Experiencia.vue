<template>
    <div>
    <b-card
        v-for="experiencia in experiencias" :key="experiencia.id"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2">   
        <b-card-img :src="experiencia.url"></b-card-img>
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
            <b-button type="submit" variant="primary" class="btnLogin" @click="send()">Leer</b-button>
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
    export default {
        name: 'Experiencia',
        data: ()=> ({
            show:false,
            experiencias: [
                {
                    id: 1, 
                    url: "https://i.ibb.co/M7XBX1C/recruiter.png",
                    date: "11/2021 - 12/2021",
                    title: "Fachari SAC",
                    msg: "Detalle: ",
                    txt: "Proyecto freelance para una empresa extranjera. Lenguajes a utilizar: React, Firebase",
                    alt: "Logo Fachari"
                },               
                {
                    id: 2, 
                    url: "Tutor de Desarrollo web y javascript",
                    date: "05/2021 - Presente",
                    title: "Coderhouse",
                    msg: "Detalle: ",
                    txt: "Actualidad: Mis tareas son despejar dudas de los alumnos dentro y fuera de la clase en vivo, corregir sus trabajos dándoles feedback y realizar un seguimiento y acompañamiento. Brindar afterclass, que son clases de 1 hora de duración para ampliar temas vistos en clase.",
                    alt: "Logo Coderhouse"
                },               
                {
                    id: 3, 
                    url: "https://i.ibb.co/tMW6SC0/dev.png",
                    date: "01/08 - 11/2021",
                    title: "Clínica Cormillot (Productos Cormillot S.A.)",
                    msg: "Detalle: ",
                    txt: "Comencé como cadete, a los 6 meses me ascendieron a Data entry. Y Desde el 01/10/2011 hasta el último día me desempeñé como Analista Contable",
                    alt: "Logo Clínica Cormillot"
                }
            ],
        }), 
        methods: {
            send() {
                this.$emit("LlevarCarrito")
                console.log('entra')
            }
        }
    }
</script>

<style >
    .btnLogin {
        width: 30%;
        margin: 5%;
        margin-left: 35%;
    }
</style>