export const state = () => ({
  channelName: 'general'
})
  
  export  const mutations = {
    SwitchChannel(state, payload) {
      console.log("the payload: " + payload.channelName)
      state.channelName = payload.channelName
      
     
    }
  }
