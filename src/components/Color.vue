<template>
    <div class="text-center">
        <article :style="`background-color: ${color}`" class="h-16 w-16 mx-auto" v-clipboard:copy="color" v-clipboard:success="onCopy" v-clipboard:error="onError"></article>
        <span class="text-xs font-mono bg-white rounded leading-tight border border-gray-400 cursor-pointer" :class="[copied ? 'copied' : '', error ? 'error' : '']" v-text="color" v-clipboard:copy="color" v-clipboard:success="onCopy" v-clipboard:error="onError"></span>
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
        color: String,
    },
    methods: {
        onCopy() {
            let self = this;
            this.copied = true;
            setTimeout(function() {
                self.copied = false;
            }, 150);
        },
        onError() {
            let self = this;
            this.error = true;
            setTimeout(function() {
                self.error = false;
            }, 150);
        }
    }
}
</script>

<style lang="scss" scoped>
article {
    @apply block shadow-inner rounded cursor-pointer mb-1;
    transition: box-shadow ease 150ms;
    &:hover, &:focus {
        box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    }
}
span {
    padding: .2rem .2rem .05rem .2rem;
    transition: all ease 150ms;
}
span.copied {
    @apply bg-green-200 text-green-700 border-green-500 font-bold;
}
span.error {
    @apply bg-red-200 text-red-700 border-red-500 font-bold;
}
</style>