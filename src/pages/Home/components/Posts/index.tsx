import { useEffect, useState } from "react"
import { dateFormatter } from "../../../../utils/formatter";
import { api } from "../../../../lib/axios";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const userName = "lucas-mandai";
const repoName = "github-blog-ignite";


interface issuesData {
    title: string;
    created_at: string;
    body: string;
    number: number;
}

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>;

export function Posts() {

    const [issuesData, setIssuesData] = useState<issuesData[]>([])

    const { register, handleSubmit } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema),
    })

    const getGithubIssues = async (query: string = "") => {
        const response = await api.get(`/search/issues?q=${query}%20repo:${userName}/${repoName}`)
        setIssuesData(response.data.items)
    }

    useEffect(() => {
        getGithubIssues();
    }, [])

    async function filterIssues(data: SearchFormInput){
        await getGithubIssues(data.query)
    }

    return (
        <>
            <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                    <h3 className="text-base-subtitle font-bold">Publicações</h3>
                    <small>6 publicações</small>
                </div>
                <form onSubmit={handleSubmit(filterIssues)}>
                    <input
                        className="w-full"
                        type="text"
                        placeholder="Buscar conteúdo"
                        {...register('query')}
                    />
                </form>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
                {issuesData.map((item) => (
                    <Link key={item.number} className="bg-base-post rounded-md p-8 h-[260px]" to={`/post/${item.number}`}>
                        <div className="flex justify-between mb-4 gap-2">
                            <h2 className="text-base-title font-bold">{item.title}</h2>
                            <small className="text-nowrap">{dateFormatter.format(new Date(item.created_at))}</small>
                        </div>
                        <p className="line-clamp-4">{item.body}
                        </p>
                    </Link>
                ))}
            </div>
        </>
    )
}