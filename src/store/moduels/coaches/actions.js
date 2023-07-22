export default {
    registerCoach(context, data) {
      const coachData = {
        id: context.rootGetters.userId, //getting user id from index.js in store
        firstName: data.first,
        lastName: data.last,
        description: data.desc,
        hourlyRate: data.rate,
        areas: data.areas
      };
  
      context.commit('registerCoach', coachData); //commiting this mutation with the transfrom coach data.
    }
  };