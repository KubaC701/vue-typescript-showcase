<template>
  <ul>
    <li v-for="footballer in footballers" :key="footballer.name">{{ footballer.club.name }}</li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { printFootballerData } from './helpers/footballer';
import { useStore } from './store';
import { ActionTypes } from './store/index.types';

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore();
    store.dispatch(ActionTypes.FETCH_FOOTBALLERS);

    const footballers = computed(() => store.state.footballers);

    const footballer = footballers.value[0];
    printFootballerData(footballer);

    store.dispatch(ActionTypes.CHANGE_POSITION, { footballer, position: 'goalkeeper' });

    return {
      footballers,
    };
  },
});
</script>
