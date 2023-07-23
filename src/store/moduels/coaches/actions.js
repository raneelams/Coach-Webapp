  export default {
    async registerCoach(context, data) {
      const userId = context.rootGetters.userId; //getting user id from index.js in store
      const coachData = {
        firstName: data.first,
        lastName: data.last,
        description: data.desc,
        hourlyRate: data.rate,
        areas: data.areas
      };
  
      const response = await fetch(`https://vue-http-demo-a064c-default-rtdb.firebaseio.com//coaches/${userId}.json`, {
        method: 'PUT',
        body: JSON.stringify(coachData)
      });
  
      // const responseData = await response.json();
  
      if (!response.ok) {  //okay is the built in property to get th boolean value of response.
        // error ...
      }
  
      context.commit('registerCoach', {
        ...coachData,
        id: userId
      }); //commiting this mutation with the transfrom coach data.
    }
  };