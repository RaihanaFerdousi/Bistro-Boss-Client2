import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subTitle}) => {
    return (
        <Parallax
            bgImage={img}
            bgImageAlt="the menu"
            strength={200}
        >
            <div className="hero h-[600px]">
                <div className="hero-overlay bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 w-[90%] md:w-[70%] h-[40%] md:h-[60%]"></div>
                </div>
                <div className="hero-content text-center text-neutral-content relative">
                    <div className="max-w-md">
                        <h1 className="mb-3 text-white text-5xl font-bold uppercase cinzel">{title}</h1>
                        <p className="cinzel text-white">{subTitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;