'use client'
import { useContext, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { GithubProfileContext } from '../context/GithubProfileContext';

export function Search() {

    const [inputSearch, setInputSearch] = useState('armandocodecr')
    const { getGithubProfile } = useContext( GithubProfileContext )

    const getProfileData = async () => {
        await getGithubProfile(inputSearch)
    }

    return (
        <div 
            className='w-5/12 min-w-[700px] h-16 bg-[#1F2A48] rounded-xl pr-3 flex justify-between items-center flex-row gap-3
            max-[650px]:min-w-[350px]' 
            id='search-container'
        >

            <div className='w-2/3 flex justify-center flex-row gap-5 pl-3'>
                <FaSearch className='text-8xl text-[#0175F7] flex justify-center' />
                
                <input 
                    autoComplete='off'
                    type="text" 
                    onChange={e => setInputSearch( e.target.value )}
                    name="search"
                    className="w-screen font-mono bg-transparent outline-none max-sm:text-sm"
                    placeholder="Search Github username..."
                />
            </div>

            <button 
                className='bg-[#0175F7] rounded-2xl h-12 w-28 font-mono max-sm:h-10'
                onClick={ () => getProfileData() }
            >Search</button>
        </div>
    )

}