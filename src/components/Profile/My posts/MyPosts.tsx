import React from 'react';
import Post from "./Post/Post";
import { ProfilePageType} from "../../../redux/state";

export type MyPostsPropsType = {
    postsState: ProfilePageType
}

const MyPosts = (props:MyPostsPropsType) => {

    let postsElements=props.postsState.postsData.map(post=><Post  message={post.message} likesCount={post.likesCount}/>)
    return (
        <div>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
            </div>
            {postsElements}

        </div>

    );
};

export default MyPosts;