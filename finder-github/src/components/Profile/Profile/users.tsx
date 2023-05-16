import { UserProps } from "@/components/Types/types"
import {AiOutlineUser} from 'react-icons/ai'
import {GrLocation} from 'react-icons/gr'
import styles from './user.module.css'
export const Users = ({login, avatar_url, followers, following, location, name}: UserProps) => {
    return(
        <div className={styles.user}>
            <img src={avatar_url} alt="Foto de Perfil" />
            <h2>{name}</h2>
            <span><AiOutlineUser/>{login}</span>
            <p> <GrLocation/> {location}</p>
            <ul>
                <li>{followers} Seguidores</li>
                <li>{following} Seguindo</li>
            </ul>
            <button>Mostrar repos</button>
        </div>
    )
}