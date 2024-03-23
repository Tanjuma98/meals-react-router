import { FaFacebook, FaLinkedin, FaGithub, FaInstagram  } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-black p-16 text-white mt-16 text-center">
            <h3 className="font-semibold text-3xl">Meals React Router</h3>
            <div className="flex justify-center mt-6 text-2xl gap-8">
                <p><FaFacebook></FaFacebook></p>
                <p><FaLinkedin></FaLinkedin></p>
                <p><FaGithub></FaGithub></p>
                <p><FaInstagram></FaInstagram></p>
            </div>
        </div>
    );
};

export default Footer;