<template>
  <div>
    <p
      class="block font-medium text-blueGray-500 text-xs transition-colors duration-75 ease-linear mb-1"
      :class="[copied ? 'copied' : '', error ? 'error' : '']"
    >
      {{ fontSizeName }}
    </p>
    <div
      v-clipboard:copy="fontSize"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"
      class="block w-full cursor-pointer"
    >
      <p :style="{ fontSize: fontSize }">
        Almost before we knew it, we had left the ground.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copied: false,
      error: false,
    };
  },
  props: {
    fontSizeName: {
      type: String,
      default: "",
    },
    fontSize: {
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
