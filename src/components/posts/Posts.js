import styles from './Posts.module.css';
import Post from './post/Post'

function Posts({posts}) {
   
    return (
        <div className={styles.postContainer}>
            <h1 className={styles.postTitle}>User Posts</h1>
            {
                posts.map((post,ind)=>(
                    <Post 
                     key={ind+1}
                     post_no={ind+1}
                     post_title={post.title}
                     post_body={post.body}
                    />
                ))
            }
        </div>
    )
}

export default Posts
