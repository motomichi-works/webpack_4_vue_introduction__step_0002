import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
// modules
import textFieldUnit from '@/javascripts/vue_applications/common/modules/textFieldUnit.js'
// components
import TextFieldUnit from '@/javascripts/vue_applications/common/components/TextFieldUnit.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('TextFieldUnit.vue', () => {
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
    })
  })

  it('mutationsの動作確認', () => {
    const state = store.state.textFieldUnit;
    const key = 'count';

    textFieldUnit.mutations.setState(state, {
      key,
      value: state[key] + 1,
    });

    expect(state[key]).toBe(1);
  });

  it('ボタンのclickイベントが発火したとき', () => {
    const wrapper = shallowMount(TextFieldUnit, { store, localVue })
    const button = wrapper.find('button')

    // 初期値の検証
    expect(button.text()).toBe('count: 0')

    // イベント発火
    button.trigger('click')

    // 変更後の値の検証
    expect(button.text()).toBe('count: 1')
  });
})
