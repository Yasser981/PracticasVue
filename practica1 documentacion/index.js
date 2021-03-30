var app = new Vue({
    el: '#app',
    data: {
      message: 'Hola yasser!'
    }
  })

  var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Usted cargó esta página el ' + new Date().toLocaleString()
    }
  })

  var app3 = new Vue({
    el: '#app-3',
    data: {
      cosa: true
    }
  })

  var app4 = new Vue({
      el: '#app-4',
      data: {
          todos:[
            {textt: 'Aprender JavaScript'},
            {textt: 'Aprender vue'},
            {textt: 'Aprender React'},
            {textt: 'Aprender Algo'},
          ]
    }
  })

  var app5 = new Vue({
      el: '#app-5',
      data: {
          message: 'Yasser'
      },
      methods:{
          reverseMessage: function (){
              this.message = this.message.split('').reverse().join('')
          }
      }
  })

  var app6 = new Vue({
      el:'#app-6',
      data: {
          message: 'Hola VUe'
      }
  })

  Vue.component('todo-item',{
        // El componente todo-item ahora acepta una
        // "propiedad", que es como un atributo personalizado.
        // Esta propiedad es llamada todo.
      props: ['todo'],
      template: '<li>{{todo.text}}</li>'
  })

  var app7 = new Vue({
      el:'#app-7',
      data:{
          groceryList:[
            { id: 0, text: 'Vegetales' },
            { id: 1, text: 'Queso' },
            { id: 2, text: 'Cualquier otra cosa que se supone que los humanos coman' }
          ]
      }
  })

  var vm = new Vue({
    el: '#example',
    data:{
      message: 'Hola'
    },
    computed:{
      //propiedad computado
      //las propiedades computadas son almacenadas en chace
      reverseMessage: function(){
        return this.message.split('').reverse('').join('')
      }
    },
  })

  var vm = new Vue({
    el: '#demo',
    data: {
      primerNombre: 'Yasser',
      SegundoNombre: 'Oldemar',
      fullname: 'Yasser Oldemar'
    },
    whath:{
      primerNombre: function(val){
        this.fullname = val + ' ' + this.SegundoNombre
      },
      SegundoNombre: function(val){
        this.fullname = this.primerNombre + ' ' + val
      }
    }
  })

  var vm2 = new Vue({
    el: '#demo2',
    data: {
      primerNombre: 'Yasser',
      segundoNombre: 'Oldemar Espinoza Casco'
    },
    computed: {
      fullname: function(){
        return this.primerNombre + ' ' + this.segundoNombre
      }
    }
  })

  var vm3 = new Vue({
    el: '#cosa',
    data: {
      isActive: true,
      error: null
    },
    computed: {
      classObject: function () {
        return {
          active: this.isActive && !this.error,
          'text-danger': this.error && this.error.type === 'fatal'
        }
      }
    }
  })
    