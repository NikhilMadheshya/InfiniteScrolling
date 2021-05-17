import React from 'react';
import styles from './Post.module.css';

function Post({post_no,post_title,post_body}) {
    return (
        <div className={styles.post}>
            <h2 className={styles.postTitle}>
                <span>{post_no}</span>{post_title}
            </h2>
            <p className={styles.postBody}>
              {post_body}
            </p>
        </div>
    )
}

export default Post
