export default {
    coaches(state) {
        return state.coaches;
    },
    hasCoaches(state) {
        return state.coaches && state.coaches.length > 0;
    },
    isCoach(_, getters, _2, rootGetters) { //_, _2 denotes like the arguments are taking in methods but not using as of now.
        const coaches = getters.coaches;
        const userId = rootGetters.userId;
        return coaches.some(coach => coach.id === userId); //some is a bulitin method which returns true if somecoach fulfills criteria
      }
};
