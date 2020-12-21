<template>
  <div>
    <p class="block font-medium text-blueGray-500 text-xs mb-1">
      {{ colorName }}
    </p>
    <p
      class="block font-medium text-xs uppercase transition-colors duration-75 ease-linear mb-1"
      :class="[copied ? 'copied' : '', error ? 'error' : '']"
    >
      {{ color }}
    </p>
    <div
      :style="{ backgroundColor: color }"
      v-clipboard:copy="uppercaseColor"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"
      class="block w-full h-10 rounded cursor-pointer shadow-inner"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copied: false,
      error: false
    }
  },
  props: {
    colorName: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
  },
  computed: {
    uppercaseColor() {
      return this.color.toUpperCase();
    },
  },
  methods: {
    onCopy() {
      let self = this;
      this.copied = true;
      setTimeout(function () {
        self.copied = false;
      }, 250);
    },
    onError() {
      let self = this;
      this.error = true;
      setTimeout(function () {
        self.error = false;
      }, 250);
    },
  },
};
</script>

<style lang="scss" scoped>
p.copied {
  @apply text-green-700;
}
p.error {
  @apply text-red-700;
}
</style>
