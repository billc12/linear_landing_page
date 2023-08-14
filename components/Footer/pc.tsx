import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import Link from 'next/link';
import ReactModal from 'react-modal';
import footerNavigation from '../../data/footer.json';
import LogoGroup from '../LogoGroup';
import EmailIcon from '../../images/icons/email.svg';
import GlobalFlag from '../../images/flags/global.svg';
import SouthKoreaFlag from '../../images/flags/south-korea.svg';
import RussiaFlag from '../../images/flags/russia.svg';
import VietnamFlag from '../../images/flags/vietnam.svg';
import TurkeyFlag from '../../images/flags/turkey.svg';
import navigation from '../../data/navigation.json';
import Image from 'next/image';
import { CookieContext } from '../layout';
import { isMobile } from 'react-device-detect';

const PcFooter = () => {
    const [showTelegramDialog, setShowTelegramDialog] = useState(false);
    const { handleResetCookieConsent }: any = useContext(CookieContext);

    const router = useRouter();
    const urlLanguagePart = (router.asPath?.split('/') ?? [])[1];
    const language = Object.keys(navigation).includes(urlLanguagePart)
        ? urlLanguagePart
        : 'en';
    const footerTranslations =
        language && footerNavigation[language]
            ? footerNavigation[language]
            : footerNavigation.en;

    const {
        items: menus,
        newsletter,
        telegramDialog,
        copyright
    } = footerTranslations || {};

    return (
        <footer className="flex flex-col items-center text-white h-10">
            <section data-aos="fade-up" className="container pt-28 pb-16">
                <div className="search relative">
                    <Image
                        className="search-bg absolute top-0 right-0"
                        src={require('../../images/home/footer.png')}
                        alt=""
                    />
                    <div className="search-content">
                        <div className="search-content-tittle">
                            {newsletter.title}
                        </div>
                        <div className="search-content-subtitle">
                            {newsletter.subtitle}
                        </div>
                        <form
                            className="flex search-content-form"
                            action="https://finance.us7.list-manage.com/subscribe/post?u=32fc7c972574ff3b667d37599&amp;id=2fd9a15e72"
                            method="post"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="search-content-form-input">
                                <EmailIcon className="search-content-form-input-icon" />
                                <input
                                    id="newsletter-email"
                                    name="EMAIL"
                                    placeholder={newsletter?.placeholder}
                                    className="font-email"
                                ></input>
                            </div>
                            <div className="search-content-form-button">
                                <button className="">
                                    <span className="btn-label">
                                        {newsletter?.buttonLabel}
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section className="container grid grid-cols-4">
                {menus.map((menu, index) => (
                    <div key={menu?.label + index} className="">
                        <span className="text-transparent-gray text-base text font-normal leading-6">
                            {menu.label}
                        </span>
                        <ul className="">
                            {menu.items.map((item, index) => {
                                if (item?.url === 'open-telegram-dialog') {
                                    return (
                                        <li
                                            className="text-base text font-normal leading-6 mt-2"
                                            key={item?.url + index}
                                        >
                                            <button
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setShowTelegramDialog(true);
                                                }}
                                                className=""
                                                title={item?.label}
                                            >
                                                {item?.label}
                                            </button>
                                        </li>
                                    );
                                }

                                if (item?.url === 'change-cookie-settings') {
                                    return (
                                        <li
                                            className="text-base text font-normal leading-6 mt-2"
                                            key={item?.url + index}
                                        >
                                            <button
                                                onClick={e => {
                                                    e.preventDefault();
                                                    handleResetCookieConsent();
                                                }}
                                                color="white"
                                                className="btn btn-link p-0"
                                                title={item?.label}
                                            >
                                                {item?.label}
                                            </button>
                                        </li>
                                    );
                                }

                                return (
                                    <li
                                        className="text-base text font-normal leading-6 mt-2"
                                        key={item?.url + index}
                                    >
                                        <Link
                                            href={item?.url}
                                            target={
                                                item?.newWindow
                                                    ? '_blank'
                                                    : null
                                            }
                                            rel={
                                                item?.newWindow
                                                    ? 'noreferrer'
                                                    : null
                                            }
                                            title={item?.label}
                                        >
                                            {item?.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </section>
            <section className="container">
                <div className="foot">
                    <LogoGroup variant="foot-logo" />
                    <div
                        color="font-normal"
                        className="foot-text mt-2 text-transparent-gray"
                    >
                        © {new Date().getFullYear()} {copyright}
                    </div>
                </div>
            </section>

            <ReactModal
                isOpen={showTelegramDialog}
                shouldCloseOnOverlayClick
                onRequestClose={() => setShowTelegramDialog(false)}
                closeTimeoutMS={200}
                preventScroll
            >
                <div
                    onClick={() => setShowTelegramDialog(false)}
                    className="absolute right-4 top-4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                        width={14}
                        height={14}
                    >
                        <path
                            fill="#99999A"
                            fillRule="evenodd"
                            d="M13 1c.2.2.2.4 0 .6v.1L7.7 7l5.3 5.3a.5.5 0 01-.6.8h-.1L7 7.6 1.7 13a.5.5 0 01-.8-.6v-.1L6.4 7 1 1.7a.5.5 0 01.6-.8h.1L7 6.4 12.3 1c.2-.2.5-.2.7 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="text-black">
                    <span className="">Join our Telegram community!</span>
                    <div className="">
                        <GlobalFlag
                            width={48}
                            height={32}
                            className="shadow rounded"
                        />
                        <div>
                            <span className="">{telegramDialog?.global}</span>
                            <Link
                                href="https://t.me/LinearExchangeCommunity"
                                className="d-flex align-items-center"
                                target="_blank"
                            >
                                <span>{telegramDialog?.joinNow}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 8"
                                    width="6"
                                    height="8"
                                    className=""
                                >
                                    <path
                                        fill="#BABABA"
                                        fillRule="evenodd"
                                        d="M1.4.1a.5.5 0 00-.7.7L4.5 4 .7 7.1c-.2.2-.3.5-.1.7.2.2.5.3.7.1l4.2-3.6c.2-.2.2-.5 0-.7L1.4 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <div className="">
                                <SouthKoreaFlag
                                    width={48}
                                    height={32}
                                    className=""
                                />
                                <div>
                                    <span>{telegramDialog?.southKorea}</span>
                                    <Link
                                        href="https://t.me/LinearFinance_Korea"
                                        className=""
                                        target="_blank"
                                    >
                                        <span>{telegramDialog?.joinNow}</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 6 8"
                                            width="6"
                                            height="8"
                                            className=""
                                        >
                                            <path
                                                fill="#BABABA"
                                                fillRule="evenodd"
                                                d="M1.4.1a.5.5 0 00-.7.7L4.5 4 .7 7.1c-.2.2-.3.5-.1.7.2.2.5.3.7.1l4.2-3.6c.2-.2.2-.5 0-.7L1.4 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="">
                                <TurkeyFlag
                                    width={48}
                                    height={32}
                                    className=""
                                />
                                <div>
                                    <span>{telegramDialog?.turkey}</span>
                                    <Link
                                        href="https://t.me/linearfinanceturkey"
                                        className=""
                                        target="_blank"
                                    >
                                        <span>{telegramDialog?.joinNow}</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 6 8"
                                            width="6"
                                            height="8"
                                            className=""
                                        >
                                            <path
                                                fill="#BABABA"
                                                fillRule="evenodd"
                                                d="M1.4.1a.5.5 0 00-.7.7L4.5 4 .7 7.1c-.2.2-.3.5-.1.7.2.2.5.3.7.1l4.2-3.6c.2-.2.2-.5 0-.7L1.4 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <VietnamFlag
                                    width={48}
                                    height={32}
                                    className=""
                                />
                                <div>
                                    <span>{telegramDialog?.vietnam}</span>
                                    <Link
                                        href="https://t.me/linearfinancevietnam"
                                        className="d-flex align-items-center"
                                        target="_blank"
                                    >
                                        <span>{telegramDialog?.joinNow}</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 6 8"
                                            width="6"
                                            height="8"
                                            className=""
                                        >
                                            <path
                                                fill="#BABABA"
                                                fillRule="evenodd"
                                                d="M1.4.1a.5.5 0 00-.7.7L4.5 4 .7 7.1c-.2.2-.3.5-.1.7.2.2.5.3.7.1l4.2-3.6c.2-.2.2-.5 0-.7L1.4 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="">
                                <RussiaFlag
                                    width={48}
                                    height={32}
                                    className=""
                                />
                                <div>
                                    <span>{telegramDialog?.russia}</span>
                                    <Link
                                        href="https://t.me/linearfinancerussia"
                                        className=""
                                        target="_blank"
                                    >
                                        <span>{telegramDialog?.joinNow}</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 6 8"
                                            width="6"
                                            height="8"
                                            className=""
                                        >
                                            <path
                                                fill="#BABABA"
                                                fillRule="evenodd"
                                                d="M1.4.1a.5.5 0 00-.7.7L4.5 4 .7 7.1c-.2.2-.3.5-.1.7.2.2.5.3.7.1l4.2-3.6c.2-.2.2-.5 0-.7L1.4 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ReactModal>
        </footer>
    );
};

export default PcFooter;
