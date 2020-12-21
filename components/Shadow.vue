<template>
  <div>
    <p class="block font-medium text-blueGray-500 text-xs mb-1">{{ shadowName }}</p>
    <div :style="{ boxShadow: shadow }" v-clipboard:copy="shadow" class="block w-full h-10 bg-white rounded cursor-pointer"></div>
  </div>
</template>

<script>
export default {
  props: {
    shadowName: {
      type: String,
      default: ""
    },
    shadow: {
      type: String,
      default: ""
    }
  }
}
</script>
