import React from 'react';
import s from './Profile.module.css'
import MyPosts, {MyPostsPropsType} from "./My posts/MyPosts";

const Profile:React.FC<MyPostsPropsType> = (props) => {

    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://physics.uconn.edu/wp-content/uploads/sites/2234/2018/10/cmz_3color_full_image-1200x400.jpg' alt='picture' />
            </div>
            <div>
                ava+description
            </div>
            <MyPosts postsState={props.postsState}/>
        </div>
    );
};

export default Profile;