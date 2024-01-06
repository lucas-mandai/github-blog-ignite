import { ArrowSquareOut, CalendarBlank, CaretLeft, ChatCircle, GithubLogo } from "@phosphor-icons/react";

export function Post() {
    return (
        <div className="container pb-20">
            <div className="flex flex-col w-full bg-base-profile p-8 mt-[-90px] mb-10  rounded-md gap-4">
                <div className="flex justify-between items-center uppercase">
                    <a className="flex items-center gap-1" href=""> <CaretLeft size={16} className='text-blue' /> Voltar </a>
                    <a className="flex items-center gap-1" href="">Ver no github <ArrowSquareOut size={16} className='text-blue' /></a>
                </div>

                <h1>JavaScript data types and data structures</h1>

                <div className='flex gap-8 items-center'>
                    <div className='flex gap-2'>
                        <GithubLogo size={24} className='text-base-label' weight="fill" />
                        <span>cameronwill</span>
                    </div>
                    <div className='flex gap-2'>
                        <CalendarBlank  size={24} className='text-base-label' weight="fill" />
                        <span>Há 1 dia</span>
                    </div>
                    <div className='flex gap-2'>
                        <ChatCircle  size={24} className='text-base-label' weight="fill" />
                        <span>5 comentários</span>
                    </div>
                </div>
            </div>

            <div className="px-16">
                <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                </p>                                          
            </div>
        </div>
    )
}