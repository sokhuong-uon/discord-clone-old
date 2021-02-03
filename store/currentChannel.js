export const state = () => ({
    channelName: '123'
  })
  
  export const mutations = {
    SwitchChannel(state,  name) {
      state.channelName = name
    }
  }