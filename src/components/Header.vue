<template>
  <header class="bg-gray-200">
    <div class="container mx-auto px-4">
      <div class="text-center py-24">
        <h1 class="text-3xl md:text-4xl lg:text-5xl mb-4">Tailwind Copy 🌪️</h1>
        <p class="text-gray-800 text-lg mb-3 mx-5">Easily copy Tailwindcss colors and shadows</p>
        <p class="text-gray-700 text-sm mb-8 mx-5">Useful when you're designing or when you're not using Tailwind for front-end</p>
        <a class="uppercase font-bold font-serif text-gray-800 no-underline rounded px-5 py-2" target="_blank" href="https://github.com/the94air/twcopy">Github</a>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  a {
    background-color: lighten(#1ab1ba, 10%);
    border: 2px solid darken(#1ab1ba, 10%);
    &:hover, &:focus {
      background-color: lighten(#1ab1ba, 6%);
      border: 2px solid darken(#1ab1ba, 20%);
      color: darken(#1ab1ba, 30%);
    }
  }
</style>