export const state = () => ({
    channelName: '123'
  })
  
  export const mutations = {
    switchChannel(state, { name} ) {
      state.state.channelName = name
    }
  }