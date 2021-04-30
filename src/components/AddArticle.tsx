import React, { useState } from 'react';

type Props = {
    saveArticle: (article: IArticle | any) => void
}

export const AddArticle : React.FC<Props> = ({ saveArticle }) => {
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');

    const addNewArticle = (e: React.FormEvent) => {
        e.preventDefault();

        saveArticle({
            title,
            body
        });

        setTitle('');
        setBody('');
    }

    return (
        <form onSubmit={addNewArticle} className="add-article">
            <input id="title" placeholder="Title" onChange={(e => setTitle(e.target.value))} value={title} className="add-article-field"/>
            <textarea id="body" placeholder="Description" onChange={e => setBody(e.target.value)} value={body} className="add-article-field"/>
            <button disabled={!title && !body}>Add article</button>
        </form>
    )
}