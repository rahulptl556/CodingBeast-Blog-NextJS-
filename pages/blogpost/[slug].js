import React from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'
import Image from 'next/image';

const slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    return <div className={styles.main}>
        <h3 className={styles.title}>Learn JavaScript in 2023 </h3>
        <Image src="/JS-Img.png" width={400} height={300} className={styles.JSImg}></Image>
        <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vitae, accusamus quia voluptatem saepe dolore animi eos eius, alias dolorem magni aliquam labore harum sapiente mollitia libero, qui tenetur. Cumque voluptas officia maiores dolorum numquam eos accusantium necessitatibus doloremque temporibus architecto est maxime quos consequatur at, neque minima ipsam, vitae error eius officiis, quam quae sequi corporis? Dicta distinctio facere id assumenda illo quod cupiditate ducimus, voluptate quisquam cum architecto, laudantium quaerat quidem earum aliquam quia tenetur molestias. Porro ad est ab tempore nulla fugiat adipisci voluptate officia voluptatibus. Voluptas maiores molestias dolores nihil! Id, quasi dolorum? Aut, possimus! Aliquid praesentium saepe dignissimos eveniet distinctio rerum doloribus, magni sed tenetur nam recusandae qui nihil obcaecati ipsam, porro, ut blanditiis deleniti! Molestiae eos eius corrupti possimus ipsum. Dolor, saepe dicta atque voluptatum, tempora minima dolore iusto deleniti, maxime in ipsum fugiat aperiam adipisci non corporis nam! Magnam iure non accusantium similique earum eum, voluptatibus quidem incidunt quod nesciunt quaerat quasi inventore autem nemo. Iusto modi repudiandae, dolores sit natus laborum nesciunt voluptas aliquid alias sint perspiciatis est ad iste, ut repellat magnam quam placeat architecto numquam. Rerum, esse. Unde veritatis molestias, cupiditate ipsa quisquam aut sit consequatur. Expedita amet nulla dolores.</p>
    </div>;
};
 
export default slug;
