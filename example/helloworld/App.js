import { h } from '../../lib/guide-mini-vue.esm.js';

window.self = null;
export const App = {
  render() {
    // 控制台输出当前上下文的属性，便于查看
    window.self = this;
    return h(
      'div',
      {
        id: 'root',
        class: ['red', 'blue'],
      },
      // string
      //       `${this.msg} by ljs`
      // array
      [
        h('div', { class: 'red' }, `${this.msg} by ljs`),
        h('div', { class: 'blue' }, `${this.msg} by ljs`),
      ]
    );
  },
  setup() {
    return {
      msg: 'hello mini-vue3',
    };
  },
};
