<template>
  <footer>
    <div class="container mx-auto">
      <div class="text-center py-20">
        <p class="mb-4">&copy; <a target="_blank" class="text-sm no-underline text-blue-500 hover:text-blue-600 focus:text-blue-600" href="https://twitter.com/abdalla__arbab">Abdalla Arbab</a> {{ date }}</p>
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