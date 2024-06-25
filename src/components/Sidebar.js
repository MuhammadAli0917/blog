import {useNavigate} from "react-router-dom";

export const Sidebar = () => {

    const navigate = useNavigate()

    return (
        <div className="w-[25%] h-full p-2 flex-col gap-2 hidden lg:flex">
            <div className="bg-[#121212] text-white gap-10 h-full rounded flex flex-col">
                <div onClick={() => navigate('/')} className="pl-8 mt-10 text-3xl cursor-pointer text-blue-500">
                    <p className="font-bold" >thetalaba's blog</p>
                </div>
                <div onClick={() => navigate('/blog')} className="pl-8 mt-10 text-2xl cursor-pointer hover:text-blue-500">
                    <p className="font-bold">Blog</p>
                </div>
                <div onClick={() => navigate('/about')} className="pl-8 text-2xl cursor-pointer hover:text-blue-500">
                    <p className="font-bold">Haqimda</p>
                </div>
            </div>
        </div>
    )
}