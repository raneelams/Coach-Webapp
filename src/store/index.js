import { createStore } from "vuex";

import coachesModule from "./moduels/coaches/index";
import requestsModule from './moduels/requests/index'

const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: requestsModule
    },
    state() {
        return {
          userId: 'c3'
        };
      },
      getters: {
        userId(state) {
          return state.userId;
        }
      }
});

export default store;