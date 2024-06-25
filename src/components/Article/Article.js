import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {articles} from "../../assets/articles";


function Article(props) {
    const { title } = useParams();
    const article = articles.find(article => article.title === title)
    const navigate = useNavigate()

    if (!article) {
        return <div>Article not found</div>;
    }


    return (
        <div>
            <h1 className="text-3xl mt-10 mb-20 font-bold">{article.subtitle}</h1>
            {article.paragraphs.map(p => (
                <>
                    <p className="text-xl">{p}</p>
                    <br />
                </>
            ))}
            <button onClick={() => navigate(-1)} className=" mb-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Orqaga
            </button>
        </div>
    );
}

export default Article;