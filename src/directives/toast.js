import Vue from 'vue';

Vue.directive('toast', {
  // eslint-disable-next-line no-unused-vars
  bind(el, binding, _vnode) {
    // eslint-disable-next-line no-param-reassign
    el.event = (event) => {
      if (el === event.target || el.contains(event.target)) {
        Vue.toast(binding.expression.replace(/"/g, ''), { className: ['toast-box'], verticalPosition: 'bottom', duration: 3000 });
      }
    };
    document.body.addEventListener('click', el.event);
  },
  unbind(el) {
    document.body.removeEventListener('click', el.event);
  },
});

