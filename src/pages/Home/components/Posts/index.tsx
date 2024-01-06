export function Posts() {
    return (
        <>
            <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                    <h3 className="text-base-subtitle font-bold">Publicações</h3>
                    <small>6 publicações</small>
                </div>
                <div>
                    <input className="w-full" type="text" placeholder="Buscar conteúdo" />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="bg-base-post rounded-md p-8 h-[260px]">
                    <div className="flex justify-between mb-4">
                        <h2 className="text-base-title font-bold">JavaScript data types and data structures</h2>
                        <small className="text-nowrap">Há 1 dia</small>
                    </div>
                    <p className="line-clamp-4">Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                    </p>
                </div>
                <div className="bg-base-post rounded-md p-8 h-[260px]">
                    <div className="flex justify-between mb-4">
                        <h2 className="text-base-title font-bold">JavaScript data types and data structures</h2>
                        <small className="text-nowrap">Há 1 dia</small>
                    </div>
                    <p className="line-clamp-4">Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                    </p>
                </div>

            </div>
        </>
    )
}