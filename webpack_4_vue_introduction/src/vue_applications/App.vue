<template>
  <div id="app">
    <TextFieldUnit/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TextFieldUnit from './components/TextFieldUnit'
export default {
  name: 'app',
  components: {
    TextFieldUnit,
  },
}
</script>
