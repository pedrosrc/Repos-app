import { UserProps } from "@/components/Types/types"
import styles from './user.module.css'
export const Users = ({login, avatar_url, followers, following, location, name}: UserProps) => {
    return(
        <div className={styles.user}>
            <img src={avatar_url} alt="Foto de Perfil" />
            <h2>{name}</h2>
            <span>{login}</span>
            <p>{location}</p>
            <ul>
                <li>{followers} Seguidores</li>
                <li>{following} Seguindo</li>
            </ul>
        </div>
    )
}