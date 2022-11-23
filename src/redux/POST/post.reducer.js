// import postApi from "../../api/post";
import { GET_POST_SUCCESS } from "./post.types";

const INITIAL_STATE = []
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case GET_POST_SUCCESS:
            state = action.payload;
            return state;

        default: return state;
    }
}
export default reducer;