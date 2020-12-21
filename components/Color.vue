<template>
  <div>
    <p class="block font-medium text-blueGray-500 text-xs mb-1">{{ colorName }}</p>
    <p class="block font-medium text-xs uppercase mb-1">{{ color }}</p>
    <div :style="{ backgroundColor: color }" v-clipboard:copy="uppercaseColor" class="block w-full h-10 rounded cursor-pointer shadow-inner"></div>
  </div>
</template>

<script>
export default {
  props: {
    colorName: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    }
  },
  computed: {
    uppercaseColor() {
      return this.color.toUpperCase();
    }
  }
}
</script>
