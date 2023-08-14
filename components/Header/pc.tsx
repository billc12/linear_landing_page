import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ReactModal from 'react-modal';
import Link from 'next/link';
import Container from '../container';
import navigation from '../../data/navigation.json';
import clsx from 'clsx';
import SouthKoreaFlag from '../../images/flags/south-korea.svg';
import ChinaFlag from '../../images/flags/china.svg';
import GlobalFlag from '../../images/flags/global.svg';
import FrenchFlag from '../../images/flags/french.svg';
import Menu from '../../images/nav/menu.svg';
import LogoGroup from '../LogoGroup';
import CloseIcon from '../../images/icons/close.svg';
import ChevronDown from '../../images/icons/chevron-down.svg';

const PcHeader = ({}) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [languageIsOpen, setLanguageIsOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const router = useRouter();
    const urlLanguagePart = (router.asPath.split('/') ?? [])[1];
    const language = Object.keys(navigation).includes(urlLanguagePart)
        ? urlLanguagePart
        : 'en';

    const headerTranslations = navigation[language];
    const { items: menu } = headerTranslations || {};

    const getLang = lang => {
        switch (lang) {
            case 'cn':
                return { flag: ChinaFlag, label: '汉语' };
            case 'kr':
                return { flag: SouthKoreaFlag, label: '한국어' };
            case 'fr':
                return { flag: FrenchFlag, label: 'Français' };
            default:
                return { flag: GlobalFlag, label: 'English' };
        }
    };
    const { flag: Flag, label: langLabel } = getLang(language);

    const modalContentStyle = {
        maxWidth: '100vw',
        height: '100vh',
        background:
            'radial-gradient(72.90% 64.69% at 64.69% 50.00%, rgba(53, 85, 254, 0.50) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, rgba(26, 56, 248, 0.09) 0%, rgba(0, 0, 0, 0.00) 60.94%)',
        backgroundColor: '#000',
        zIndex: '999',
        padding: '20px',
        inset: '0'
    };

    return (
        <>
            <nav className="z-50 w-screen py-6 fixed top-0">
                <Container className="flex">
                    <Link href={language}>
                        <LogoGroup />
                    </Link>
                    <div className="ml-11 w-full flex items-center flex-row-reverse">
                        <ul className="flex justify-between items-center ">
                            <li className="">
                                <button
                                    type="button"
                                    className=""
                                    onClick={() => setMenuIsOpen(true)}
                                    title={langLabel}
                                >
                                    <Menu />
                                </button>
                            </li>
                        </ul>
                    </div>
                </Container>
            </nav>
            <ReactModal
                isOpen={menuIsOpen}
                shouldCloseOnOverlayClick
                onRequestClose={() => setMenuIsOpen(false)}
                closeTimeoutMS={500}
                preventScroll
                ariaHideApp={false}
                style={{
                    content: modalContentStyle
                }}
            >
                <div className="modalContainer">
                    <div className="modalContainer-close">
                        <CloseIcon
                            onClick={() => {
                                setMenuIsOpen(false);
                            }}
                        />
                    </div>

                    <div className="modalContainer-content">
                        <LogoGroup className="modalContainer-content-logo" />

                        <ul className="modalContainer-content-list list-unstyled ">
                            {menu?.map((item, index) => (
                                <li
                                    className={clsx(
                                        'modalContainer-content-list-item',
                                        item?.external
                                            ? 'listItemExternal'
                                            : 'listItem'
                                    )}
                                    key={item?.url + index}
                                >
                                    {item?.type === 'normal' ? (
                                        <Link
                                            href={item?.url}
                                            title={item?.label}
                                            onClick={() => setMenuIsOpen(false)}
                                            className="nav-item text-5xl"
                                        >
                                            {item?.label}
                                        </Link>
                                    ) : (
                                        <Link
                                            href={item?.url}
                                            title={item?.label}
                                            onClick={() => setMenuIsOpen(false)}
                                            className="nav-item text-xl"
                                        >
                                            {item?.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>

                        <div className="modalContainer-content-language mt-8">
                            <div
                                onClick={() => {
                                    setLanguageIsOpen(!languageIsOpen);
                                }}
                                className="modalContainer-content-language-button"
                            >
                                <div className="modalContainer-content-language-button-flag">
                                    <Flag></Flag>
                                </div>
                                <div className="modalContainer-content-language-button-langLabel">
                                    {langLabel}
                                </div>
                                <div className="modalContainer-content-language-button-chevronDown">
                                    <ChevronDown
                                        style={{
                                            transform: languageIsOpen
                                                ? null
                                                : 'rotate(-90deg)'
                                        }}
                                    ></ChevronDown>
                                </div>
                            </div>
                            {languageIsOpen && (
                                <div className="modalContainer-content-language-menu">
                                    {Object.keys(navigation)?.map(
                                        (lang, index) => {
                                            const currentLang = getLang(lang);
                                            const { flag: CountryFlag, label } =
                                                currentLang;

                                            return (
                                                <Link
                                                    key={index}
                                                    href={`/${
                                                        lang !== 'en'
                                                            ? lang
                                                            : ''
                                                    }`}
                                                    onClick={() => {
                                                        setOpenMenu(false);
                                                    }}
                                                    className="modalContainer-content-language-menu-item"
                                                >
                                                    <CountryFlag width={40} />
                                                    <span className="ml-5">
                                                        {label}
                                                    </span>
                                                </Link>
                                            );
                                        }
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </ReactModal>
        </>
    );
};

export default PcHeader;
