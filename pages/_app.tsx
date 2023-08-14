import { AppProps } from 'next/app';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../styles/index.css';
import '../styles/main.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init();
    });
    return <Component {...pageProps} />;
}
