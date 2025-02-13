import { combineReducers } from "redux";

import appReducer from "./applications";
import statisticsReducer from "./statistics";

// Only one reducer can update the store
// So if you split up your reducers based
// on the task or type of data they work on,
// you'll have to combine them to one reducer.
// That's what we are doing here.

const rootReducer = combineReducers({
  app: appReducer,
  statistics: statisticsReducer
});

export default rootReducer;