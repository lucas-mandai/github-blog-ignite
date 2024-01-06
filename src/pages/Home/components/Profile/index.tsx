import { ArrowSquareOut, Buildings, GithubLogo, Users } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import axios from "axios";

interface UserData {
    name: string;
    bio: string;
    login: string;
    followers: number;
    avatar_url: string;
}

export function Profile() {

    const [userData, setUserData] = useState<UserData>({
        name: "",
        bio: "",
        login: "",
        followers: 0,
        avatar_url: "",
    })

    useEffect(() => {
        const fetchGithubUser = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/lucas-mandai')
                setUserData(response.data)
            } catch (error) {
                // console.error('Erro ao obter dados do usuário:', error.message)
            }
        }

        fetchGithubUser();
    }, [])

    return (
        <div className="flex justify-between gap-8 bg-base-post w-full rounded-md p-8 mt-[-90px] mb-10">
            <img className='h-[148px] rounded-md' src={userData.avatar_url} alt="" />
            <div className='flex flex-col gap-4'>
                <div className='flex justify-between'>
                    <h1 className='font-bold'>{userData.name}</h1>
                    <a className='flex gap-1' href="">Github <ArrowSquareOut size={20} className='text-blue' /></a>
                </div>

                <p>{userData.bio}</p>

                <div className='flex gap-8 items-center'>
                    <div className='flex gap-2'>
                        <GithubLogo size={24} className='text-base-label' weight="fill" />
                        <span>{userData.login}</span>
                    </div>
                    <div className='flex gap-2'>
                        <Buildings size={24} className='text-base-label' weight="fill" />
                        <span>Company</span>
                    </div>
                    <div className='flex gap-2'>
                        <Users size={24} className='text-base-label' weight="fill" />
                        <span>{userData.followers} seguidores</span>
                    </div>
                </div>
            </div>
        </div>
    )
}