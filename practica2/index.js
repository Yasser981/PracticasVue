const app = new Vue({
    el: '#app',
    data:{
        titulo: 'VUE',
        frutas:[
            {text: 'mango', cantidad: 10},
            {text: 'manzana', cantidad: 0},
            {text: 'zanaoria', cantidad: 11}
        ],
        nuevafruta: '',
        total: 0
    },
    methods:{
        agregarFruta: function(){
           this.frutas.push({
                text: this.nuevafruta, cantidad: 0
           });
           this.nuevafruta = '';
        },
        otrometodo: function(){

        }
    },
    computed:{
        sumarfrutas: function(){
            this.total = 0;
            for (fruta of this.frutas){
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
        
    }
})