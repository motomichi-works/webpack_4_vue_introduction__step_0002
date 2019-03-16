<template>
  <div id="app">
    <TextFieldUnit/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TextFieldUnit from '@/javascripts/vue_applications/common/components/TextFieldUnit'
export default {
  name: 'app',
  components: {
    TextFieldUnit,
  },
}
</script>
