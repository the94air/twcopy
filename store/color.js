export const state = () => ({
  lastColor: null
})

export const mutations = {
  addColor(state, lastColor) {
    state.lastColor = lastColor;
  }
}
