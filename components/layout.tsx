import React, { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
// import CookieConsent from './CookieConsent';
// import { useCookie } from 'react-use';

export const CookieContext = React.createContext({});

type Props = {
    preview?: boolean;
    children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
    const handleResetCookieConsent = () => {};

    return (
        <CookieContext.Provider
            value={{
                handleResetCookieConsent
            }}
        >
            {/* <Meta /> */}
            <Header />
            <div className="min-h-screen">
                {/* <Alert preview={preview} /> */}
                <main>{children}</main>
            </div>
            <Footer />
            {/*
            <CookieConsent
                title="{cookieConsent?.title}"
                text="{cookieConsent?.text}"
                allow="{cookieConsent?.buttons?.allow}"
                deny="{cookieConsent?.buttons?.deny}"
            /> */}
        </CookieContext.Provider>
    );
};

export default Layout;
