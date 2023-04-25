import React from "react";
import Image from "next/image";
import styles from '../styles/About.module.css'


function About(){
    return(
        <div className={styles.main}>

                <h2 className={styles.title}>About Coding Beast</h2> 
                      
                <Image src="/aboutImg.jpg"width={250} height={320} className={styles.aboutImg}></Image>

                <div className={styles.aboutme}>
                Hello, coding enthusiasts! I'm the Coding Beast, a full-stack developer with a passion for creating innovative web applications. With years of hands-on experience in front-end and back-end technologies, I've honed my skills in HTML, CSS, JavaScript, Python, Ruby, and various web frameworks. My journey as a developer started with tinkering around with simple websites and evolved into complex web applications.
                <br /><br />
                As a problem solver at heart, I thrive in a collaborative environment, working with cross-functional teams, brainstorming ideas, and finding innovative solutions to complex problems. I'm also passionate about staying up-to-date with the latest industry trends and constantly learning new technologies.
                <br /><br />
                When I'm not coding, you can find me exploring the great outdoors, experimenting with new recipes in my kitchen, or indulging in my passion for photography. I believe in maintaining a healthy work-life balance and always make time for hobbies that fuel my creativity and keep me motivated.
                <br /><br />
                I'm excited to share my knowledge and experiences with you through my Medium blog. Join me as we embark on this coding adventure together and unleash the beast within!
                </div>
        </div>
    )
}

export default About;