import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
// modules
import textFieldUnit from '@/javascripts/vue_applications/common/modules/textFieldUnit.js'
import textField from '@/javascripts/vue_applications/common/modules/textField.js'
// components
import TextField from '@/javascripts/vue_applications/common/components/TextField.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('TextField.vue', () => {
  let store;

  beforeEach(() => {
    // 本来のthis.$storeに入るものと同様のオブジェクト構造を作成します。
    store = new Vuex.Store({
      state: {},
      getters: {},
      mutations: {},
      actions: {},
      modules: {
        textFieldUnit,
      },
    });
  });

  it('mutationsの動作確認', () => {
    const state = store.state.textFieldUnit.textField;
    const key = 'value';

    textFieldUnit.mutations.setState(state, {
      key,
      value: 'editedValue',
    });

    expect(state[key]).toBe('editedValue');
  });

  it('テキストフィールドのinputがイベント発火したとき', () => {
    const wrapper = shallowMount(TextField, { store, localVue });
    const input = wrapper.find('input');
    const syncedText = wrapper.find('.test-synced-text');

    // 初期値の検証
    expect(input.element.value).toBe('defaultValue');
    expect(syncedText.text()).toBe('value: defaultValue');

    // イベント発火
    input.element.value = 'editedValue';
    input.trigger('input');

    // 変更後の値の検証
    expect(input.element.value).toBe('editedValue');
    expect(syncedText.text()).toBe('value: editedValue');
  });
});
