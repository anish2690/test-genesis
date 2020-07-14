<template>
  <div id="app">
    <div id="nav">
      <RemoteView :fetch="fetch" />
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { RemoteView } from '@fmfe/genesis-remote';

export default {
  name: 'Home',
  components: {
    RemoteView,
  },
  methods: {
    async fetch() {
      const res = await axios.get('../vue-genesis-template/dist/ssr-genesis/client/app.json');
      if (res.status === 200) {
        return res.data;
      }
      return null;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
