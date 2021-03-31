Vue.component('hijo',{
    template: `
    <div class="py-5 bg-success">
    <h4>componente hijo: {{numero}}</h4>
    <h4>Nombre {{nombre}}</h4>
    </div>
    `,
    props:['numero'],
    data(){
        return{
            nombre: 'Yasser'
        }
    },
    mounted(){
        this.$emit('nombreHijo',this.nombre);
    }
})