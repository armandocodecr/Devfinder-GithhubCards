'use client'
import { FC, useState, useEffect } from 'react';
import { GithubProfileContext } from './GithubProfileContext'
import { IGithubUserData } from '../interfaces';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GithubProfileProvider: FC<Props> = ({ children }) => {

    const [githubProfile, setGithubProfile] = useState<IGithubUserData>()

    const getGithubProfile = async ( username: string ) => {
        try {
            const data: IGithubUserData = await fetch(`https://api.github.com/users/${username}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GITHUB_PROFILE}`
                }
            }).then(res => res.json())
            if(data.message) data.error = true
            setGithubProfile(data)

        } catch (error) {
            console.log(error)
        }
    }

    return (
       < GithubProfileContext.Provider value={{
            githubProfile,
            getGithubProfile
      }}>
          { children }
        </ GithubProfileContext.Provider>
    )
}