import {Route, Routes} from "react-router-dom";
import {Home} from "./Home/Home";
import Blog from "./Blog/Blog";
import About from "./About/About";
import Article from "./Article/Article";

export const Main = () => {
    return (
            <div className="m-2 w-[100%] px-6 pt-4 pt-10 rounded bg-[#121212] text-white overflow-auto lg:ml-0">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog/:title" element={<Article />} />
                </Routes>
            </div>
        )
}