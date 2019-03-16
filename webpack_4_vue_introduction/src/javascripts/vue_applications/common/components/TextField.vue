<template>
  <section>
    <label>TextField: </label>
    <input
      :value="value"
      type="text"
      @input="onInput"
    >
    <div class="test-synced-text">
      value: {{ value }}
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'TextField',
  computed: {
    ...mapState('textFieldUnit/textField', [
      'value',
    ]),
  },
  methods: {
    ...mapMutations('textFieldUnit/textField', [
      'setState',
    ]),
    onInput(e) {
      this.setState({
        key: 'value',
        value: e.target.value,
      });
    },
  },
}
</script>
