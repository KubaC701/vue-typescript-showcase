<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import { useStore } from './store';
import { ActionTypes } from './store/index.types';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  setup() {
    const store = useStore();
    store.dispatch(ActionTypes.FETCH_FOOTBALLERS)
  }
});
</script>

<style>

</style>
