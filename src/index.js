import VueVideoTalk from "./components/VueVideoTalk.vue";
// 注册组件
VueVideoTalk.install = (Vue) => Vue.component(VueVideoTalk.name, VueVideoTalk);
export default VueVideoTalk;
