import { GET_POST, GET_POST_DETAIL } from "./post.types"; //type action
export const getPost = () => {
    return { type: GET_POST }
};
export const getPostDetail = (payload) => {
    return { type: GET_POST_DETAIL, payload }
};