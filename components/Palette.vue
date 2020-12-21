<template>
  <div class="flex justify-between items-start w-full mb-6">
    <div class="w-full lg:w-1/5 mt-3">
      <h3 class="text-base font-medium">{{ getGroupName }}</h3>
    </div>
    <div class="w-full lg:w-4/5 flex -mx-2">
      <div v-for="(color, index) in groupColors" :key="index" class="w-full px-2">
        <Color :colorName="index" :color="color" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    groupName: {
      type: String,
      default: ""
    },
    groupColors: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    getGroupName() {
      return this.groupName.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
    },
  }
}
</script>
