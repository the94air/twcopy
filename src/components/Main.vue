<template>
  <main>
    <div class="py-24">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl mb-6">Colors</h2>
        <Colors class="mb-20 last:mb-0" v-for="(color, key, index) in config.colors" :key="'color-' + index" :title="key" :color="color" />
      </div>
    </div>
    <div class="bg-gray-100 py-24">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl mb-6">Shadows</h2>
        <Shadows class="mb-20 last:mb-0" :class="key == 'inner' ? 'bg-white p-2 md:p-4 pt-5 rounded-lg' : ''" v-for="(shadow, key, index) in config.boxShadow" :key="'shadow-' + index" :title="key" :shadow="shadow" />
      </div>
    </div>
    <div class="py-24">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl mb-6">Font size</h2>
        <font-sizes class="mb-20 last:mb-0" v-for="(fontSize, key, index) in config.fontSize" :key="'font-size-' + index" :title="key" :class-name="key" :fontSize="fontSize" />
      </div>
    </div>
  </main>
</template>

<script>
import config from '@/config';
import Colors from '@/components/Colors';
import Shadows from '@/components/Shadows';
import FontSizes from "@/components/FontSizes";

export default {
  data() {
    return {
      config: config
    }
  },
  components: {FontSizes, Colors, Shadows }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1024px !important;
}
</style>