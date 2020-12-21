<template>
  <div>
    <p
      class="block font-medium text-blueGray-500 text-xs transition-colors duration-75 ease-linear mb-1"
      :class="[copied ? 'copied' : '', error ? 'error' : '']"
    >
      {{ shadowName }}
    </p>
    <div
      :style="{ boxShadow: shadow }"
      v-clipboard:copy="shadow"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"
      class="block w-full h-10 bg-white rounded cursor-pointer"
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
    shadowName: {
      type: String,
      default: "",
    },
    shadow: {
      type: String,
      default: "",
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
  @apply text-green-600;
}
p.error {
  @apply text-red-600;
}
</style>
