import styles from './About.module.css'
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div className={styles.sobre}>
        <h2 >
            Sobre o Mini <span> Blog</span>
        </h2>

        <p>Este projeto consiste em um blog, com o Front-end feito em React e o Back-end em FireBase</p>

        <Link to={'/post/create'} className={styles.btn}>
            Criar Post
        </Link>
        

    </div>
  )
}

export default About;