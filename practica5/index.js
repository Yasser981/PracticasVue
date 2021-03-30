const app = new Vue({
    el: '#app',
    data: {
        mensaje: 'Hola soy vue'
    },
    computed:{
        invertir:function(){
            return this.mensaje.split('').reverse().join('');
        }
    }
})