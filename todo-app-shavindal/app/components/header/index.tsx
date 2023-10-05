import "./header.css";
import Image from "next/image";

const Header: React.FC = () => {
    return (
        <div className="header">
            <p className="pl-12 h4 h-max">Dashboard</p>
            <div className="w-max pr-12 flex">
                <button className="pr-6">
                    <Image src={"/assets/Notifications.svg"} alt={""} width={17} height={20} />
                </button>
                <button>
                    <Image src={"/assets/Profile.svg"} alt={""} width={40} height={40} />
                </button>
                <button>
                    <Image src={"/assets/Chevron-down.svg"} alt={""} width={40} height={40} />
                </button>
            </div>
        </div>
    );
};

export default Header;
