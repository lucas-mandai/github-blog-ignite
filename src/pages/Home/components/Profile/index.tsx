import { ArrowSquareOut, Buildings, GithubLogo, Users } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { Link } from "react-router-dom";

interface UserData {
    name: string;
    bio: string;
    login: string;
    followers: number;
    avatar_url: string;
}

export function Profile() {

    const [userData, setUserData] = useState<UserData>(
        {} as UserData
    )

    const getGithubUser = async () => {
        try {
            const response = await api.get('/users/lucas-mandai')
            setUserData(response.data);
            console.log(response.data)
        } finally { 
            //
        }
    }

    useEffect(() => {
        getGithubUser();
    }, [])

    return (
        <div className="flex justify-between gap-8 bg-base-post w-full rounded-md p-8 mt-[-90px] mb-10">
            <img className='h-[148px] rounded-md' src={userData.avatar_url} alt="" />
            <div className='flex flex-col gap-4'>
                <div className='flex justify-between'>
                    <h1 className='font-bold'>{userData.name}</h1>
                    <Link 
                        className='flex gap-1 text-blue' 
                        to="">Github <ArrowSquareOut size={20} className='text-blue' />
                    </Link>
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