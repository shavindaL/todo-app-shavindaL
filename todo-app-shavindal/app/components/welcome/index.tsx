'use client'
import './welcome.css'
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

const Welcome: React.FC = () => {
    const [isClosed, setIsClosed] = useState(false);
    const headingText: string = "Welcome back, John Doe";
    const subHeadingText: string = "The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.";
    return (
        isClosed ? null : <div className="welcome" style={{ backgroundImage: "url('/assets/Vector.svg')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right', backgroundPositionX: '90%' }}>
            <div className="welcome-text">
                <h1 className="h3 w-max">{headingText}</h1>
                <p className="flex">
                    {subHeadingText}

                </p>
                <Link href={"/"}>
                    <p className='w-max'>Look here for more information</p>
                </Link>
            </div>
            <div className=''>
                <button onClick={() => setIsClosed(true)} >
                    <Image src={"/assets/Close.svg"} alt={"close button"} width={24} height={24} />
                </button>
            </div>

        </div>
    )
};

export default Welcome;

// div style={{ width: '50px', height:'24px' }}>
// flex justify-end