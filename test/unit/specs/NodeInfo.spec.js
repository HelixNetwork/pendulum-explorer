import Vue from 'vue';
import NodeInfo from '@/components/NodeInfo';

describe('NodeInfo.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(NodeInfo);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.node-info legend').textContent)
      .to.equal('NODE INFO');
  });
});
