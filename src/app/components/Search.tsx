'use client'
import { useContext, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { GithubProfileContext } from '../context/GithubProfileContext';

export function Search() {

    const [inputSearch, setInputSearch] = useState('')
    const { getGithubProfile } = useContext( GithubProfileContext )

    const getProfileData = async () => {
        await getGithubProfile(inputSearch)
    }

    return (
        <div 
            className='w-5/12 min-w-[800px] h-16 bg-[#1F2A48] rounded-xl pr-3 flex justify-between items-center flex-row gap-3
            max-[800px]:min-w-[650px] max-[650px]:min-w-[350px] max-[400px]:min-w-[300px]' 
            id='search-container'
        >

            <div className='w-2/3 flex justify-center flex-row gap-5 pl-3 max-[400px]:gap-3'>
                <FaSearch className='text-8xl text-[#0175F7] flex justify-center max-[400px]:text-6xl' />
                
                <input 
                    autoComplete='off'
                    type="text" 
                    onChange={e => setInputSearch( e.target.value )}
                    name="search"
                    className="w-screen font-mono bg-transparent outline-none max-sm:text-sm max-[400px]:text-[11px]"
                    placeholder="Search Github username..."
                />
            </div>

            <button 
                className='bg-[#0175F7] rounded-2xl h-12 w-28 font-mono max-sm:h-10 max-[400px]:h-8 max-[400px]:text-[12px] disabled:opacity-50 disabled:cursor-not-allowed'
                onClick={ () => getProfileData() }
                disabled={ inputSearch.length === 0 }
            >Search</button>
        </div>
    )

}