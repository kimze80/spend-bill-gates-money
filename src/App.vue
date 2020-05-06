<template>
  <div id="app">
    <TopBar />
    <Home />
    <Footer />
  </div>
</template>

<script>
import Home from './pages/Home.vue';
import TopBar from './components/TopBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Home,
    TopBar,
    Footer,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: #f1f2f6;
  color: #fff;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 16px 'Roboto', sans-serif;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}

button {
  cursor: pointer;
}
</style>
