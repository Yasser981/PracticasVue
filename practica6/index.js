const app = new Vue({
     el: '#app',
     data:{
         saludo: 'soy siclo de vida de vue'
     },
     beforeCreate(){
         //al momento de crear la instancias
         console.log('beforeCreate');
     },
     created(){
         /*Al crar los metodos, observadores y eventos, para aún no accde al dom
         aun no se puede acceder a 'el'*/
         console.log('create');
     },
     beforeMount(){
         //se ejecuta antes de inserta el dom
         console.log('beforeMount');
     },
     mounted(){
         //Se ejecuta al insertar el Dom
         console.log('mounted');
     },
     beforeUpdate(){
         //Al detectar un cambio
         console.log('beforeUpdate');
     },
     updated(){
         //Al realizar los Cambios
         console.log('update');
     },
     beforeDestroy(){
         //Antes de destruir la instancia
         console.log('beforeDestroy');
     },
     destroyed(){
         //Se destruyen toda la instancia
         console.log('destroyed');
     },
     methods:{
        destruir:function(){
            this.$destroy();
        }
     }
})