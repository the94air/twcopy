<template>
    <div class="mb-8">
        <p class="mb-4 font-serif font-bold capitalize text-gray-600" v-if="title">{{ title }}</p>
        <div v-if="color === Object(color)">
            <div class="flex flex-wrap lg:justify-between">
                <div class="w-1/3 md:w-1/6 lg:w-1/12 mb-4" v-for="(childColor, index) in color" :key="index">
                    <Color :color="childColor" />
                </div>
            </div>
        </div>
        <div v-else>
            <div class="flex flex-wrap lg:justify-between">
                <div class="w-1/3 md:w-1/6 lg:w-1/12 mb-4">
                    <Color :color="color" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Color from '@/components/Color';

export default {
    props: {
        color: {
            value: String | Object,
        },
        title: {
            type: String,
            default: null
        }
    },
    components: { Color }
}
</script>
