import { combineReducers } from "redux";
import postReducer from "./POST/post.reducer";
const rootReducer = combineReducers({
    posts: postReducer,
})
export default rootReducer;