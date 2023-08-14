import React, { useEffect } from 'react';
import Alert from './alert';
import Footer from './Footer';
import Header from './Header';
import Meta from './meta';

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
        </CookieContext.Provider>
    );
};

export default Layout;
