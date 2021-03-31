<template>
    <div>
        <ul class="list-group">
            <li v-for="(item, index) of frutas" :key="item.id" @click="aumentar(index)"
            class="list-group-item d-flex justify-content-between align-items-center">
               {{index}}-{{item.nombre}}
                <span class="badge bg-primary rounded-pill">{{item.cantidad}}</span>
            </li>
            <button class="btn btn-danger btn-block" @click="reiniciar">Reiniciar</button>
        </ul>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
    name: 'Lista',
    computed:{
        ...mapState(['frutas']),
        
    },
    methods: {
        ...mapMutations(['aumentar','reiniciar'])
    },
}
</script>