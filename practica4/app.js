const app = new Vue({
    el: '#app',
    data: {
        titulo: 'gym con vue',
        tareas: [],
        NuevaTarea: ''
    },
    methods:{
        agregarTarea: function(){
            //console.log ('Nueva Tarea', this.NuevaTarea),
            this.tareas.push({
                nombre: this.NuevaTarea,
                estado: false
            })
            this.NuevaTarea = '';
            console.log(this.tareas);
        },
        editarTarea:function(index){
            //console.log('editar', index)
            this.tareas[index].estado = true;
        },
        eliminarTarea:function(index){
            //this.tareas[index].estado = false;
            this.tareas.splice(index,1)
        }
    }
})