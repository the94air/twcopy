<template>
    <div class="text-center lg:text-left">
        <p class="cursor-pointer text-gray-700" :class="'text-' + className" v-clipboard:copy="fontSize" v-clipboard:success="onCopy"
           v-clipboard:error="onError">See you on the other side Ray</p>
        <span class="text-xs font-mono bg-white rounded leading-tight border border-gray-400 cursor-pointer"
              :class="[copied ? 'copied' : '', error ? 'error' : '']" v-text="fontSize" v-clipboard:copy="fontSize"
              v-clipboard:success="onCopy" v-clipboard:error="onError"></span>
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
            fontSize: String,
            className: String,
        },
        methods: {
            onCopy() {
                let self = this;
                this.copied = true;
                setTimeout(function () {
                    self.copied = false;
                }, 150);
            },
            onError() {
                let self = this;
                this.error = true;
                setTimeout(function () {
                    self.error = false;
                }, 150);
            }
        }
    }
</script>

<style lang="scss" scoped>
    article {
        @apply block rounded cursor-pointer mb-10;
        transition: box-shadow ease 150ms;
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