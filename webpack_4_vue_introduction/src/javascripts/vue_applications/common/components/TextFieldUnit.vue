<template>
  <section>
    <h1>TextFieldUnit</h1>
    <button @click="increment">count: {{ count }}</button>
    <TextField />
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

import TextField from '@/javascripts/vue_applications/common/components/TextField';
export default {
  name: 'TextFieldUnit',
  components: {
    TextField,
  },
  computed: {
    ...mapState('textFieldUnit', [
      'count',
    ]),
  },
  methods: {
    ...mapMutations('textFieldUnit', [
      'setState'
    ]),
    increment() {
      this.setState({
        key: 'count',
        value: this.count + 1,
      });
    },
  }
}
</script>
