export const state = ()=>({
    username:''
})

export const actions = {
    nuxtServerInit ({ commit }, { req }) {
        console.log(req.session)
        if (req.session.user) {
          commit('set_username', req.session.user.username)
        }
    }
}

export const mutations = {
    set_username(state,username){
        state.username = username;
    }
}