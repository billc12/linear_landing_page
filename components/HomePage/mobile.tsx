import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ReactModal from 'react-modal';
import Link from 'next/link';
import Container from '../../components/container';
import HomeBanner from '../../components/HomeBanner';
import navigation from '../../data/navigation.json';
import clsx from 'clsx';
import Image from 'next/image';
import RrrowRight from '../../images/icons/arrow-right.svg';
import TabSection from '../TabSection/index';

const getSectionItem = lang => {
    switch (lang) {
        case 'cn':
            return [
                {
                    describe: 'Allow the community to propose and drive changes'
                },
                {
                    describe:
                        'Enable the community to influence and shape the future'
                },
                {
                    describe:
                        'Ensure the healthiness and long term growth of the protocol'
                }
            ];
        case 'kr':
            return [
                {
                    describe: 'Allow the community to propose and drive changes'
                },
                {
                    describe:
                        'Enable the community to influence and shape the future'
                },
                {
                    describe:
                        'Ensure the healthiness and long term growth of the protocol'
                }
            ];
        case 'fr':
            return [
                {
                    describe: 'Allow the community to propose and drive changes'
                },
                {
                    describe:
                        'Enable the community to influence and shape the future'
                },
                {
                    describe:
                        'Ensure the healthiness and long term growth of the protocol'
                }
            ];
        default:
            return [
                {
                    describe: 'Allow the community to propose and drive changes'
                },
                {
                    describe:
                        'Enable the community to influence and shape the future'
                },
                {
                    describe:
                        'Ensure the healthiness and long term growth of the protocol'
                }
            ];
    }
};

const PcHomePage = ({
    banner,
    sections,
    sectionsExtra1,
    sectionsExtra2,
    sectionsTab,
    partners
}) => {
    const router = useRouter();
    const urlLanguagePart = (router.asPath?.split('/') ?? [])[1];
    const language = Object.keys(navigation).includes(urlLanguagePart)
        ? urlLanguagePart
        : 'en';

    return (
        <Container>
            <HomeBanner
                heading={banner?.heading}
                subtitle={banner?.subtitle}
                buttons={banner?.buttons}
                underline={banner?.underline}
            />
            {(sections ?? []).map((section, idx) => (
                <section
                    key={section?.title + idx}
                    id={`section-${idx + 1}`}
                    className="secondary-banner py-64"
                >
                    <div className="grid grid-cols-1">
                        <div
                            className={clsx(
                                idx % 2 === 0 ? 'order-last' : '',
                                'pl-5'
                            )}
                        >
                            <div className="text-primary text-5xl font-extralight">
                                {section?.dateTittle}
                            </div>
                            <div className="text-5xl font-extralight">
                                {section?.title}
                            </div>
                            <div className="mt-6 font-base text-transparent-gray tracking-widest max-w-md">
                                {section?.text}
                            </div>
                            {section?.dateTittle === '02/03' && (
                                <div>
                                    {getSectionItem(language).map(
                                        (item, index) => {
                                            return (
                                                <div
                                                    style={{
                                                        marginTop: '44px'
                                                    }}
                                                    className="flex items-center"
                                                    key={item?.describe + index}
                                                >
                                                    <div
                                                        style={{
                                                            position:
                                                                'relative',
                                                            width: '72px',
                                                            height: '72px',
                                                            marginRight: '36px'
                                                        }}
                                                    >
                                                        <Image
                                                            alt=""
                                                            src={require(`../../images/home/group${
                                                                index + 1
                                                            }.png`)}
                                                            style={{
                                                                position:
                                                                    'absolute',
                                                                top: '50%',
                                                                left: '50%',
                                                                transform:
                                                                    'translate(-50%, -50%)'
                                                            }}
                                                        />
                                                        <Image
                                                            alt=""
                                                            src={require(`../../images/home/rectangle${
                                                                index + 1
                                                            }.png`)}
                                                            style={{
                                                                position:
                                                                    'absolute',
                                                                top: '50%',
                                                                left: '50%',
                                                                transform:
                                                                    'translate(-50%, -50%)'
                                                            }}
                                                        />
                                                    </div>
                                                    <span className="tracking-widest font-extralight text-white max-w-xs ">
                                                        {item?.describe}
                                                    </span>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            )}
                            <div className="mt-11">
                                {(section?.buttons ?? []).map(
                                    (button, index) => {
                                        return (
                                            <Link
                                                key={button?.to + index}
                                                href={button?.to}
                                                title={button?.title}
                                                className={clsx(
                                                    'btn',
                                                    'btn-type2'
                                                )}
                                                target={
                                                    button?.newWindow
                                                        ? '_blank'
                                                        : null
                                                }
                                                rel={
                                                    button?.newWindow
                                                        ? 'noreferrer'
                                                        : null
                                                }
                                            >
                                                <div className="btn-label">
                                                    {button?.label}
                                                    <RrrowRight className="ml-3 inline" />
                                                </div>
                                            </Link>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                        <div>
                            {/* <div  data-aos="fade-up">
                          <PreviewCompatibleImage imageInfo={{ image: section?.visual, alt: section?.title }} />
                        </div> */}
                            <div
                                style={{
                                    maxWidth: '466px',
                                    margin: '0 auto'
                                }}
                            >
                                {/* <Image
                                    alt=""
                                    src={require(`../../images/visuals/home-section-logo${idx + 1}.png`)}
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                /> */}
                            </div>
                        </div>
                    </div>
                </section>
            ))}
            {sectionsExtra1.map((item, index) => {
                return (
                    <div
                        key={item.tittle1 + index}
                        className="relative"
                        style={{
                            height: '812px'
                        }}
                    >
                        <div
                            style={{
                                marginTop: '176px'
                            }}
                        >
                            <div className="flex items-center flex-col px-5">
                                <div>
                                    <div className=" text-4xl font-thin tracking-widest">
                                        {item.tittle1}
                                    </div>
                                    <div className="flex justify-center mt-20">
                                        {(item?.buttons ?? []).map(
                                            (button, index) => {
                                                return (
                                                    <Link
                                                        key={button?.to + index}
                                                        href={button?.to}
                                                        title={button?.title}
                                                        className={clsx(
                                                            'btn',
                                                            'btn-type2'
                                                        )}
                                                        target={
                                                            button?.newWindow
                                                                ? '_blank'
                                                                : null
                                                        }
                                                        rel={
                                                            button?.newWindow
                                                                ? 'noreferrer'
                                                                : null
                                                        }
                                                    >
                                                        <span className="btn-label">
                                                            {button?.label}
                                                            <RrrowRight className="ml-3 inline" />
                                                        </span>
                                                    </Link>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>

                                <div className="text-end text-4xl font-thin  tracking-widest  mt-20 max-w-xl">
                                    <div>{item.tittle2}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}

            <TabSection sectionsTab={sectionsTab}></TabSection>

            <div className="mSectionsExtra2 flex flex-col items-center">
                <div className="mSectionsExtra2-tittle text-center">
                    <div className="text-4xl ">{sectionsExtra2.tittle}</div>
                </div>
                <div className="mSectionsExtra2-btn">
                    {(sectionsExtra2?.buttons ?? []).map((button, index) => {
                        return (
                            <Link
                                key={button?.to + index}
                                href={button?.to}
                                title={button?.title}
                                className={clsx('btn', 'btn-type2')}
                                target={button?.newWindow ? '_blank' : null}
                                rel={button?.newWindow ? 'noreferrer' : null}
                            >
                                <span className="btn-label">
                                    {button?.label}
                                    <RrrowRight className="ml-3 inline" />
                                </span>
                            </Link>
                        );
                    })}
                </div>
                <div className="mSectionsExtra2-content flex flex-col  items-center">
                    {(sectionsExtra2?.items ?? []).map((item, index) => {
                        return (
                            <div
                                key={item.headTittle + index}
                                data-aos="zoom-in-up"
                                data-aos-anchor-placement="bottom-bottom"
                                data-aos-easing="ease-in-out"
                                className={clsx(
                                    `mSectionsExtra2-content-card`,
                                    `mSectionsExtra2-content-card-${index + 1}`,
                                    'mt-8'
                                )}
                            >
                                <div className="mSectionsExtra2-content-card-headTittle text-7xl">
                                    <div>{item.headTittle}</div>
                                </div>
                                <div className="mSectionsExtra2-content-card-tittle text-xl">
                                    <div>{item.tittle}</div>
                                </div>
                                <div className="mSectionsExtra2-content-card-introduction leading-5 text-xs text-center">
                                    <div>{item.introduction}</div>
                                </div>
                                <div
                                    className={clsx(
                                        'mSectionsExtra2-content-card-bgs',
                                        `mSectionsExtra2-content-card-bgs-${
                                            index + 1
                                        }`
                                    )}
                                >
                                    {(item?.bgs ?? []).map((bg, index) => {
                                        return (
                                            <Image
                                                key={index}
                                                src={require(`../../images/visuals/car-bg-${
                                                    index + 1
                                                }.png`)}
                                                alt=""
                                            ></Image>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mPartners">
                <div className=" text-5xl text-center">{partners?.title}</div>
                <div className="grid grid-cols-2  mb-40">
                    <div data-aos="fade-down" className="mPartners-row">
                        {(partners?.logos.slice(0, 5) ?? [])?.map(
                            (logo, index) => (
                                <img
                                    key={index}
                                    src={logo?.image}
                                    alt={logo?.title}
                                    style={{}}
                                    className="mPartners-row-item  mt-16"
                                />
                            )
                        )}
                        <div />
                    </div>
                    <div data-aos="fade-up" className="mPartners-row">
                        {(partners?.logos.slice(5, 10) ?? [])?.map(
                            (logo, index) => (
                                <img
                                    key={index}
                                    src={logo?.image}
                                    alt={logo?.title}
                                    style={{}}
                                    className="mPartners-row-item  mt-16"
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default PcHomePage;
