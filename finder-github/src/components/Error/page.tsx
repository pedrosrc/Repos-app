import styles from './error.module.css'
import { FaRegSadTear } from "react-icons/fa";
export const Error = () =>{
    return(
        <section className={styles.error}>
            <h2>Ops... <FaRegSadTear color='#purple'/></h2>
            <p>O usuário digitado não foi encontrado.</p>
            <p>Tente novamente com um usuário valido!</p>
        </section>
    )
}