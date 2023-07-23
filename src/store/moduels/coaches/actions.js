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
        ...coachData, //using the spread operators calling all data in coaches
        id: userId
      }); //commiting this mutation with the transfrom coach data.
    },
    async loadCoaches(context) {
      const response = await fetch(`https://vue-http-demo-a064c-default-rtdb.firebaseio.com/coaches.json`);
      const responseData = await response.json();

      if (!response.ok) {
        /// error...
      }

      const coaches = [];  //helper coaches array

      for(const key in responseData) {
        const coach = {
          id:key,
          firstName: responseData[key].firstName,
          lastName: responseData[key].lastName,
          description: responseData[key].description,
          hourlyRate: responseData[key].hourlyRate,
          areas: responseData[key].areas
        };
        coaches.push(coach);
      }
      context.commit('setCoaches', coaches)
    }
  };