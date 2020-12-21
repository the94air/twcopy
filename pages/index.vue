<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap -mx-4 xl:-mx-8">
      <aside class="hidden lg:block w-full lg:w-1/4 px-4 xl:px-8">
        <div class="sticky top-0 h-auto">
          <div class="flex flex-col justify-between h-screen pt-24">
            <div>
              <div class="mb-6">
                <h1 class="mb-6 text-4xl">Tailwind Copy</h1>
                <p class="font-semibold text-lg mb-3">Easily copy Tailwindcss colors and shadows</p>
                <p class="text-sm text-gray-700 mb-4">Useful for doing design or front-end work.</p>
                <div>
                  <button class="inline-block text-sm text-white font-semibold focus:outline-none leading-tight rounded-full select-none align-middle whitespace-no-wrap px-4 py-2 mr-2 cursor-pointer" :class="version === 1 ? 'bg-teal-500 hover:bg-teal-600 hover:bg-opacity-75 focus:bg-teal-600 focus:bg-opacity-75' : 'bg-blueGray-300 hover:bg-blueGray-400 hover:bg-opacity-50 focus:bg-blueGray-400 focus:bg-opacity-50 text-gray-600'" @click="version = 1">v1</button>
                  <button class="inline-block text-sm text-white font-semibold focus:outline-none leading-tight rounded-full select-none align-middle whitespace-no-wrap px-4 py-2 cursor-pointer" :class="version === 2 ? 'bg-teal-500 hover:bg-teal-600 hover:bg-opacity-75 focus:bg-teal-600 focus:bg-opacity-75' : 'bg-blueGray-300 hover:bg-blueGray-400 hover:bg-opacity-50 focus:bg-blueGray-400 focus:bg-opacity-50 text-gray-600'" @click="version = 2">v2</button>
                </div>
              </div>
              <div class="mb-6">
                <p class="uppercase text-xs font-semibold mb-3">Menu</p>
                <ul>
                  <li><a href="#colors" class="leading-7" v-smooth-scroll>Colors</a></li>
                  <li><a href="#shadows" class="leading-7" v-smooth-scroll>Shadows</a></li>
                  <li><a href="#font-sizes" class="leading-7" v-smooth-scroll>Font sizes</a></li>
                </ul>
              </div>
              <div class="mb-6">
                <p class="uppercase text-xs font-semibold mb-3">Useful links</p>
                <ul>
                  <li>
                    <a target="_blank" class="leading-7" href="https://javisperez.github.io/tailwindcolorshades/">Tailwind color shades</a>
                  </li>
                  <li>
                    <a target="_blank" class="leading-7" href="http://scg.ar-ch.org/">Sass color generator</a>
                  </li>
                </ul>
              </div>
            </div>
            <footer class="mb-24">
              <div class="flex items-center mb-3">
                <a target="_blank" href="https://github.com/the94air/twcopy" class="inline-block align-middle text-black hover:text-black focus:text-black mr-2" tabindex="-1">
                  <span class="block">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-darkreader-inline-fill=""
                      style="--darkreader-inline-fill: none"
                    >
                      <path
                        d="M7.49936 0.850006C3.82767 0.850006 0.849976 3.8273 0.849976 7.50023C0.849976 10.4379 2.75523 12.9306 5.39775 13.8104C5.73047 13.8712 5.85171 13.6658 5.85171 13.4895C5.85171 13.3315 5.846 12.9135 5.84273 12.3587C3.99301 12.7604 3.60273 11.4671 3.60273 11.4671C3.30022 10.6988 2.86423 10.4942 2.86423 10.4942C2.26044 10.0819 2.90995 10.0901 2.90995 10.0901C3.57742 10.137 3.9285 10.7755 3.9285 10.7755C4.52167 11.7916 5.48512 11.4981 5.86396 11.3279C5.92438 10.8984 6.09625 10.6053 6.28608 10.4391C4.80948 10.2709 3.25695 9.70063 3.25695 7.15241C3.25695 6.42615 3.51618 5.83298 3.94157 5.368C3.87299 5.1998 3.64478 4.52375 4.00689 3.60807C4.00689 3.60807 4.56494 3.42926 5.83538 4.28941C6.36568 4.14204 6.93477 4.06856 7.50018 4.0657C8.06518 4.06856 8.63386 4.14204 9.16498 4.28941C10.4346 3.42926 10.9918 3.60807 10.9918 3.60807C11.3548 4.52375 11.1266 5.1998 11.0584 5.368C11.4846 5.83298 11.7418 6.42615 11.7418 7.15241C11.7418 9.70716 10.1868 10.2693 8.70571 10.4338C8.94412 10.6392 9.15681 11.045 9.15681 11.6655C9.15681 12.5542 9.14865 13.2715 9.14865 13.4895C9.14865 13.6675 9.26867 13.8745 9.60588 13.8095C12.2464 12.9282 14.15 10.4375 14.15 7.50023C14.15 3.8273 11.1723 0.850006 7.49936 0.850006Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        data-darkreader-inline-fill=""
                        style="--darkreader-inline-fill: currentColor"
                      ></path>
                    </svg>
                  </span>
                </a>
                <a target="_blank" href="https://github.com/the94air/twcopy" class="inline-block text-black hover:text-black focus:text-black warp">
                  <span class="text-sm">Project on GitHub</span>
                </a>
              </div>
              <div>
                <p class="text-sm">&copy; {{ date }} Abdalla Arbab</p>
              </div>
            </footer>
          </div>
        </div>
      </aside>
      <main class="w-full lg:w-3/4 mt-40 px-4 xl:px-8">
        <div class="mt-1">
          <div class="mb-12">
            <h2 class="text-3xl mb-8" id="colors">Colors</h2>
            <div class="flex flex-wrap">
              <Palette v-for="(colorGroup, index) in getConfigs.colors" :key="index + 'color'" :groupName="index" :groupColors="colorGroup" />
            </div>
          </div>
          <div class="mb-12">
            <h2 class="text-3xl mb-8" id="shadows">Shadows</h2>
            <div class="bg-blueGray-50 pt-3 pb-4 pr-3 pl-3 lg:pl-0 rounded">
              <Shadows :shadows="getConfigs.boxShadow" />
            </div>
          </div>
          <div class="mb-12">
            <h2 class="text-3xl mb-8" id="font-sizes">Font size</h2>
            <div>
              <FontSizes :fontSizes="getConfigs.fontSize" />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import configs from '@/assets/json/configs.json';

export default {
  data() {
    return {
      version: 2,
      configs
    }
  },
  computed: {
    getConfigs() {
      return this.version === 1 ? this.configs.v1 : this.configs.v2;
    },
    date() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
h2::before {
  display: block;
  content: " ";
  margin-top: -50px;
  height: 50px;
  visibility: hidden;
  pointer-events: none;
}
</style>
