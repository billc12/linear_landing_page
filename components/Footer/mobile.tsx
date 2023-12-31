import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
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

const MFooter = () => {
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
        <footer className="relative flex flex-col items-center text-white h-10">
            <section data-aos="fade-up" className="container px-5">
                <div className="searchMoble relative">
                    <Image
                        className="searchMoble-bg absolute top-0 right-0"
                        src={require('../../images/home/footer.png')}
                        alt=""
                        width={273}
                    />
                    <div className="searchMoble-content">
                        <div className="searchMoble-content-tittle">
                            {newsletter.title}
                        </div>
                        <div className="searchMoble-content-subtitle">
                            {newsletter.subtitle}
                        </div>
                        <form
                            className="flex searchMoble-content-form"
                            action="https://finance.us7.list-manage.com/subscribe/post?u=32fc7c972574ff3b667d37599&amp;id=2fd9a15e72"
                            method="post"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="searchMoble-content-form-input">
                                <EmailIcon className="searchMoble-content-form-input-icon" />
                                <input
                                    id="newsletter-email"
                                    name="EMAIL"
                                    placeholder={newsletter?.placeholder}
                                    className="font-email"
                                ></input>
                            </div>
                            <div className="searchMoble-content-form-button">
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
            <section className="container grid grid-cols-1 px-5 mt-36">
                {menus.map((menu, index) => (
                    <div key={menu?.label + index} className="mt-8">
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
            <section className="container mt-8">
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
                    className="absolute right-6 top-6  cursor-pointer"
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
                    <span className="text-xl mt-8 mb-10 block">
                        Join our Telegram community!
                    </span>
                    <div className="flex justify-center items-center">
                        <GlobalFlag
                            width={48}
                            height={32}
                            className="shadow rounded mr-4"
                        />
                        <div className="flex flex-col">
                            <span className="text-base">
                                {telegramDialog?.global}
                            </span>
                            <Link
                                href="https://t.me/LinearExchangeCommunity"
                                className="flex justify-center items-center"
                                target="_blank"
                            >
                                <span className="text-sm text-primary linkLine">
                                    {telegramDialog?.joinNow}
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 8"
                                    width="6"
                                    height="8"
                                    className="ml-1"
                                    style={{
                                        marginTop: '2px'
                                    }}
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
                    <div className="grid grid-cols-2 mt-8 mb-6 gap-x-4 gap-y-8">
                        <div className="flex justify-center items-center">
                            <SouthKoreaFlag
                                width={48}
                                height={32}
                                className="shadow rounded mr-4"
                            />
                            <div className="flex flex-col">
                                <span className="text-base">
                                    {telegramDialog?.southKorea}
                                </span>
                                <Link
                                    href="https://t.me/LinearFinance_Korea"
                                    className="flex justify-center items-center"
                                    target="_blank"
                                >
                                    <span className="text-sm text-primary linkLine">
                                        {telegramDialog?.joinNow}
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 6 8"
                                        width="6"
                                        height="8"
                                        className="ml-1"
                                        style={{
                                            marginTop: '2px'
                                        }}
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
                        <div className="flex justify-center items-center">
                            <TurkeyFlag
                                width={48}
                                height={32}
                                className="shadow rounded mr-4"
                            />
                            <div className="flex flex-col">
                                <span className="text-base">
                                    {telegramDialog?.turkey}
                                </span>
                                <Link
                                    href="https://t.me/linearfinanceturkey"
                                    className="flex justify-center items-center"
                                    target="_blank"
                                >
                                    <span className="text-sm text-primary linkLine">
                                        {telegramDialog?.joinNow}
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 6 8"
                                        width="6"
                                        height="8"
                                        className="ml-1"
                                        style={{
                                            marginTop: '2px'
                                        }}
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
                        <div className="flex justify-center items-center">
                            <VietnamFlag
                                width={48}
                                height={32}
                                className="shadow rounded mr-4"
                            />
                            <div className="flex flex-col">
                                <span className="text-base">
                                    {telegramDialog?.vietnam}
                                </span>
                                <Link
                                    href="https://t.me/linearfinancevietnam"
                                    className="flex justify-center items-center"
                                    target="_blank"
                                >
                                    <span className="text-sm text-primary linkLine">
                                        {telegramDialog?.joinNow}
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 6 8"
                                        width="6"
                                        height="8"
                                        className="ml-1"
                                        style={{
                                            marginTop: '2px'
                                        }}
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
                        <div className="flex justify-center items-center">
                            <RussiaFlag
                                width={48}
                                height={32}
                                className="shadow rounded mr-4"
                            />
                            <div className="flex flex-col">
                                <span className="text-base">
                                    {telegramDialog?.russia}
                                </span>
                                <Link
                                    href="https://t.me/linearfinancerussia"
                                    className="flex justify-center items-center"
                                    target="_blank"
                                >
                                    <span className="text-sm text-primary linkLine">
                                        {telegramDialog?.joinNow}
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 6 8"
                                        width="6"
                                        height="8"
                                        className="ml-1"
                                        style={{
                                            marginTop: '2px'
                                        }}
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
            </ReactModal>
        </footer>
    );
};

export default MFooter;
