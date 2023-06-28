import { createContext } from 'react';
import { IGithubUserData } from '../interfaces';

interface Error{
     ok: boolean
}

interface ContextProps {
     githubProfile: IGithubUserData | undefined;
     getGithubProfile: (username: string) => void;
}

export const GithubProfileContext = createContext({} as ContextProps)