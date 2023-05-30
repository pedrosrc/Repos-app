'use client'

import {useState} from 'react'
import { UserProps } from "@/components/Types/types"
import {AiOutlineUser} from 'react-icons/ai'
import {GrLocation} from 'react-icons/gr'
import styles from './user.module.css'

export const Users = ({login, avatar_url, followers, following, location, name}: UserProps) => {
    
    const [dataRepos, setDataRepos] = useState<any[]>([])
    const [nameButton, setNameButton] = useState<string>('Mostrar repósitorios')
    
    const handleRepos:any = async () => {
        setNameButton('Atualizar')
        const loginUser = login;
        const resp = await fetch(`https://api.github.com/users/${loginUser}/repos`, {
                next: {
                    revalidate: 60
                }
            })
        const repos = await resp.json();
        setDataRepos(repos);
        console.log(dataRepos);
    }

    return(
        <div className={styles.user}>
            <img src={avatar_url} alt="Foto de Perfil" />
            <h2>{name}</h2>
            <span><AiOutlineUser/>{login}</span>
            <p> <GrLocation color='#fff'/> {location}</p>
            <ul>
                <li>{followers} Seguidores</li>
                <li>{following} Seguindo</li>
            </ul>
            <button onClick={()=> handleRepos()}>{nameButton}</button>
            {dataRepos.map((repo, index)=>{
                return(
                    <div key={index} className={styles.section_repos}>
                        <h2>{repo.name}</h2>
                        <span>{repo.description}</span>
                        <p>{repo.language}</p>
                        <a target='_blank' href={repo.html_url}>Acessar Repósitorio</a>
                    </div>
                )
            })}
        </div>
    )
}