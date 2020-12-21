<template>
  <div>
    <p class="block font-medium text-blueGray-500 text-xs mb-1">{{ fontSizeName }}</p>
    <div v-clipboard:copy="fontSize" class="block w-full cursor-pointer">
      <p :style="{ fontSize: fontSize }">Almost before we knew it, we had left the ground.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fontSizeName: {
      type: String,
      default: ""
    },
    fontSize: {
      type: String,
      default: ""
    }
  }
}
</script>
