export default {
    requests(state, _, _2, rootGetters) { //state, getters, rootState, rootGetters - default request parameters
        const coachId = rootGetters.userId; //userId is the getter name in store/index.js
        return state.requests.filter(req => req.coachId === coachId);
    },
    hasRequests(_, getters){
        return getters.requests && getters.requests.length > 0;
    }
}