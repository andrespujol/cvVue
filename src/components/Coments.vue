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
            <p v-if="random(1,comentarios.length) === comentario.id">{{`${comentario.comentario}`}}</p>
            
        </b-card-text>
    </b-card>
    </div>

</template>

<script>
    import comentarios from '../assets/data/coments.json'

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
            random: function getRandomId(min, max) {
                let idRandom = Math.round(Math.random(min,max) * comentarios.length)
                return idRandom
            },
        }
    }
</script>

<style >
    .cardComents {
        width: 90%;
        margin: 0 auto;
        height: 25vh;
        text-align: center;
    }
    .card-img {
        height: 25vh;
        object-fit: cover;
    }

    .cardComents p {
        font-size: 1rem;

    }
</style>