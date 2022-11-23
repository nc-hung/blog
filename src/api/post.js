import axiosClient from "./axiosClient";

const postApi = {
    getPosts() {
        const urlGetPosts = "/posts";
        return axiosClient.get(urlGetPosts);
    },
    getPostsDetail(id) {
        const urlGetPostsDetail = `/posts/${id}`;
        return axiosClient.get(urlGetPostsDetail);
    },
    getComments() {
        const urlGetComments = "/comments";
        return axiosClient.get(urlGetComments);
    },
    getusers() {
        const urlGetUsers = "/users";
        return axiosClient.get(urlGetUsers);
    }
}
export default postApi;