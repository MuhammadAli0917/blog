import {articles} from "../../assets/articles";
import {useNavigate} from "react-router-dom";

function Blog(props) {

    const navigate = useNavigate()


    return (
        <div>
            <h1 className="text-3xl font-bold mt-6 text-blue-500">Blog</h1>
            <div className="mt-20 flex flex-col gap-8">
                {articles.map(article => (
                    <h1 onClick={() => navigate(`/blog/${article.title}`)} key={article.title} className="hover:text-yellow-400 cursor-pointer text-2xl">{article.subtitle}</h1>
                ))}
            </div>

        </div>
    );
}

export default Blog;