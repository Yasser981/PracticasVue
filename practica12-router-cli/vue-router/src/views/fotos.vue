<template>
    <div class="fotos">
        <h1>Galeria :1</h1>
        <router-link :to="{name:'fotos', params: {id: item}}"
        v-for="(item, index) of fotosArreglo" :key="index">
            <button>Foto {{item}}</button>
        </router-link>
        <Foto/>

        <button @click="home">Home</button>
        <button @click="anterior">anterior</button>
        <button @click="siguiente">siguiente</button>
    </div>  
</template>

<script>
import Foto from "@/components/Fotografia.vue";
export default {
    name: 'fotos',
    components:{
       Foto  
    },
    data(){
        return{
            fotosArreglo:[1,2,3,4,5]
        }
    },
    methods: {
        home: function(){
            this.$router.push('/')
        },
        anterior: function(){
            this.$router.go(-1)
        },
        siguiente: function(){
            this.$router.go(1)
        }
    },
}
</script>