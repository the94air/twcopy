<template>
  <div class="flex justify-between items-start w-full">
    <div class="hidden lg:block lg:w-1/5 mt-3">
    </div>
    <div class="w-full lg:w-4/5 flex flex-wrap lg:flex-nowrap -mx-2">
      <div v-for="(shadow, index) in shadows" :key="index" class="w-full px-2">
        <Shadow :shadowName="index" :shadow="shadow" class="w-full lg:w-auto" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shadows: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
