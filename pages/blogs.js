import React from "react";
import Link from "next/link";
import styles from '../styles/Blogs.module.css'


function Blogs(){
    return(
        <div className={styles.main}>
            
            <div className={styles.blogs}>

                <h2 className={styles.blogTitle}>Latest Blogs</h2> 
                        {/* **  */}
                <div className={styles.blog}>
                <Link href={'/blogpost/learn-javascript'} >
                <h3>How to learn JavaScript in 2023</h3>
                </Link>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, corporis?</p>

                <button className={styles.button}>Read More</button>        
                </div>
                        {/* **  */}
                <div className={styles.blog}>
                <h3>How to learn JavaScript in 2023</h3>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, corporis?</p>

                <button className={styles.button}>Read More</button>        
                </div>
                        {/* **  */}
                <div className={styles.blog}>
                <h3>How to learn JavaScript in 2023</h3>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, corporis?</p>

                <button className={styles.button}>Read More</button>        
                </div>

            </div>

        </div>
    )
}

export default Blogs;