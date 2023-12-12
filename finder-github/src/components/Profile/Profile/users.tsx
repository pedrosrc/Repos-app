'use client'

import { useState, useTransition, useEffect } from 'react'
import { UserProps } from "@/components/Types/types"
import { AiOutlineUser } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'
import { BallTriangle } from 'react-loader-spinner'
import styles from './profile.module.css'

export const Users = ({ login, avatar_url, followers, following, location, name }: UserProps) => {

    const [dataRepos, setDataRepos] = useState<any[]>([])
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        async function handleRepos() {
            startTransition(async () => {
                const loginUser = login;
                const response = await fetch(`https://api.github.com/users/${loginUser}/repos`, {
                    next: {
                        revalidate: 60
                    }
                })
                const repos = await response.json();
                setDataRepos(repos);
            })
        }
        handleRepos();
    }, [])


    return (
        <section className={styles.user}>
            <div className={styles.informationProfile}>
                <img src={avatar_url} alt="Foto de Perfil" />
                <h2>{name}</h2>
                <span><AiOutlineUser />{login}</span>
                <p> <GrLocation color='#fff' /> {location}</p>
                <ul>
                    <li>{followers} Seguidores</li>
                    <li>{following} Seguindo</li>
                </ul>
            </div>


            {isPending ? (<div className={styles.section_loading}><BallTriangle color="purple" /></div>)
                : (<div className={styles.section_repos}> {dataRepos.map((repo, index) => {
                    return (
                        <div key={index} className={styles.repository}>
                            <div className={styles.repositoryInformation}>
                                <h2>{repo.name}</h2>
                                <p>{repo.language}</p>
                            </div>
                            <div className={styles.repositoryAcess}>
                                <a target='_blank' href={repo.html_url}>Acessar Repósitorio</a>
                            </div>
                        </div>
                    )
                })} </div>)}

        </section>
    )
}