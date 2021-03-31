<template>
  <div id="app" class="container">
    <cabezera></cabezera>
    <lista></lista>
  </div>
</template>

<script>

import Cabezera from './components/Cabezera.vue'
import Lista from './components/Lista.vue'
export default {
  name: 'App',
  components: {
    Cabezera,
    Lista
  }
}
</script>
