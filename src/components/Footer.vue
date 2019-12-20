<template>
  <footer>
    <div class="container mx-auto">
      <div class="text-center py-20">
        <p class="mb-4">&copy; twcopy {{ date }}</p>
        <a target="_blank" href="https://twitter.com/abdalla__arbab" class="text-sm no-underline uppercase font-bold text-blue-500 hover:text-blue-600 focus:text-blue-600">Twitter</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1024px !important;
}
</style>