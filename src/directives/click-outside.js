import Vue from 'vue';

Vue.directive('click-outside', {
  bind(el, binding, vnode) {
    // eslint-disable-next-line no-param-reassign
    el.event = (event) => {
      // here I check that click was outside the el and his childrens
      if (!(el === event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.event);
  },
  unbind(el) {
    document.body.removeEventListener('click', el.event);
  },
});
