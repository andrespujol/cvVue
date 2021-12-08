<template>
    <div>
    <b-card
        overlay
        img-src="https://picsum.photos/900/250/?image=3"
        img-alt="Card Image"
        text-variant="white"
        title="Comentarios"
        class="cardComents"
    >
        <b-card-text v-for="comentario in comentarios" :key="comentario.id">
            <p>{{random(comentario.comentario)}}</p>
        </b-card-text>
    </b-card>
    </div>

</template>

<script>
    import comentarios from '../assets/data/Coments.json'

    export default {
        name: 'Coments',
        Components: {

        },
        data(){
            return {
                comentarios
            }
        },
        methods: {
            random: function getRandomInt(comentario) {
            return Math.floor(Math.random() * comentario.length)
            },

        }
    }
</script>

<style >
    .cardComents {
        width: 90%;
        margin: 0 auto;
        height: 30vh;
    }
    .card-img {
        height: 30vh;
        object-fit: cover;

    }
    .cardComents p {
        font-size: 1rem;
    }
</style>