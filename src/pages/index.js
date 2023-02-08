import Image from 'next/image';

import Hero from '@/components/Hero/Hero';

import heroImage from './../../public/images/hero/massage.png'

const Home = () => (
    <div className=''>
        <h1>
            Home page page
        </h1>
        <div className='hero'>
            <div className='container'>
                <Image
                    src={heroImage}
                    alt='Home page'
                    placeholde='blur'
                />

            </div>

        </div>
        <h2>
            Blog posts
        </h2>
        <Hero/>
        <ul>
            <li>post</li>
        </ul>
    </div>
);

export default Home;