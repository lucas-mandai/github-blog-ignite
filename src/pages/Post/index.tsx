import { ArrowSquareOut, CalendarBlank, CaretLeft, ChatCircle, GithubLogo } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import ReactMarkdown from "react-markdown";

interface IIssueDatailed {
    title: string;
    body: string;
    created_at: string;
    html_url: string;
    comments: number;
    user: {
        login: string;
    }
}

export function Post() {
    const [issueDetailed, setIssueDetailed] = useState(
        {} as IIssueDatailed
    )

    const navigate = useNavigate()

    function goBack() {
        navigate(-1);
    }
    const { id } = useParams()

    const getIssueDetailed = async () => {
        const response = await api.get(`/repos/lucas-mandai/github-blog-ignite/issues/${id}`)
        console.log(response.data)
        setIssueDetailed(response.data)
    }

    useEffect(() => {
        getIssueDetailed()
    }, [])

    return (
        <div className="container pb-20">
            <div className="flex flex-col w-full bg-base-profile p-8 mt-[-90px] mb-10  rounded-md gap-4">
                <div className="flex justify-between items-center uppercase">
                    <button 
                        onClick={goBack} 
                        className="flex items-center gap-1 text-blue" > 
                        <CaretLeft size={16} className='text-blue' /> Voltar 
                    </button>
                    <Link 
                        className="flex items-center gap-1 text-blue" 
                        to={issueDetailed.html_url}  
                        target="_blank"> Ver no github 
                        <ArrowSquareOut size={16} className='text-blue' />
                    </Link>
                </div>

                <h1>{issueDetailed.title}</h1>

                <div className='flex gap-8 items-center'>
                    <div className='flex gap-2'>
                        <GithubLogo size={24} className='text-base-label' weight="fill" />
                        <span>{issueDetailed.user?.login}</span>
                    </div>
                    <div className='flex gap-2'>
                        <CalendarBlank size={24} className='text-base-label' weight="fill" />
                        <span>{issueDetailed.created_at}</span>
                    </div>
                    <div className='flex gap-2'>
                        <ChatCircle size={24} className='text-base-label' weight="fill" />
                        <span>{issueDetailed.comments} comentários</span>
                    </div>
                </div>
            </div>

            <div className="px-16">
                <p>
                    <ReactMarkdown children={issueDetailed.body} />
                </p>
            </div>
        </div>
    )
}