import React, { FormEvent, useState } from 'react'

type Props = {
    saveArticle: (article: IArticle | any) => void
}

const AddArticle: React.FC<Props> = ({saveArticle}) => {
    const [article, setArticle] = useState<IArticle | {}>();

    const handleArticleData = (e : FormEvent<HTMLInputElement>) => {
        setArticle({
            ...article,
            [e.currentTarget.id] : e.currentTarget.value,
        })
    }

    const addArticle = (e: FormEvent) => {
        e.preventDefault();
        saveArticle(article)
    }

    return (
        <>
            <form onSubmit={addArticle} className="Add-article" >
                <input type="text" id="title" placeholder="Title" onChange={handleArticleData}  />
                <input type="text" id="body" placeholder="Discription" onChange={handleArticleData} />

                <button disabled={article === undefined ? true : false } >Add Article</button>
            </form>
        </>
    )
}

export default AddArticle
