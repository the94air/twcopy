<template>
  <div class="flex justify-between items-start w-full">
    <div class="w-full flex flex-col -mx-2">
      <div v-for="(fontSize, index) in fontSizes" :key="index" class="w-full px-2 mb-6">
        <FontSize :fontSizeName="index" :fontSize="fontSize" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fontSizes: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
