<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

export default {
  name: 'app',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style lang="scss" src="./sass/app.scss">