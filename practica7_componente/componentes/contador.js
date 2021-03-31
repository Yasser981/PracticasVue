 Vue.component('contador',{
     template:`
     <div>
     <h3>{{numero}}</h3>
     <button @click="numero++">sumar</button>
     </div>
     `,
     data(){
         return{
             numero: 0
         }
     }
 })