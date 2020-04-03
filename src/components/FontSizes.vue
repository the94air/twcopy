<template>
    <div class="mb-8">
        <p class="mb-4 font-serif font-bold capitalize text-gray-600" v-if="title">{{ title }}</p>
        <div class="flex flex-wrap justify-center md:justify-start">
            <div class="md:w-1/6 lg:w-full lg:ml-2 mb-4">
                <font-size :font-size="fontSize" :class-name="className"/>
            </div>
        </div>
    </div>
</template>

<script>

    import FontSize from "@/components/FontSize";
export default {
    props: {
        fontSize: {
            type: String,
        },
        className: {
            type: String,
        },
        title: {
            type: String,
            default: null
        }
    },
    components: { FontSize }
}
</script>
