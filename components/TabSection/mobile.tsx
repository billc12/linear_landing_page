import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Vector1 from '../../images/icons/vector1.svg';
import Vector2 from '../../images/icons/vector2.svg';
import RrrowRight from '../../images/icons/arrow-right.svg';
import clsx from 'clsx';
import TabLogo1 from '../../images/tabLogo/tab-logo1.svg';
import TabLogo2 from '../../images/tabLogo/tab-logo2.svg';
import TabLogo3 from '../../images/tabLogo/tab-logo3.svg';
import TabLogo4 from '../../images/tabLogo/tab-logo4.svg';
import TabLogo5 from '../../images/tabLogo/tab-logo5.svg';
import Link from 'next/link';
import Image from 'next/image';

const TabLogoHandle = index => {
    switch (index) {
        case 1:
            return <TabLogo1 />;
        case 2:
            return <TabLogo2 />;
        case 3:
            return <TabLogo3 />;
        case 4:
            return <TabLogo4 />;
        case 5:
            return <TabLogo5 />;
    }
};

const PcTabSection = ({ sectionsTab }) => {
    const [tabState, setTabState] = useState(0);

    return (
        <div
            className={clsx(
                'container',
                'sectionTabContainer',
                `sectionTabContainer-${tabState}`
            )}
        >
            <div className="mSectionsTab">
                <span className="mSectionsTab-tittle text-black text-4xl text-center">
                    {sectionsTab?.tittle}
                </span>

                <div className="mSectionsTab-tab">
                    {sectionsTab?.items.map((item, index) => {
                        return (
                            <span
                                key={item.tab + index}
                                onClick={setTabState.bind(this, index)}
                                className={clsx(
                                    'mSectionsTab-tab-item',
                                    `mSectionsTab-tab-item${
                                        index === tabState ? '-active' : ''
                                    }`,
                                    'text-gray'
                                )}
                            >
                                {item.tab}
                                {index === tabState ? (
                                    <Vector1 className="mSectionsTab-tab-item-svg"></Vector1>
                                ) : (
                                    <Vector2 className="mSectionsTab-tab-item-svg"></Vector2>
                                )}
                            </span>
                        );
                    })}
                </div>

                {sectionsTab?.items.map(
                    ({ tittle, introduction, buttons }, index) => {
                        if (index === tabState) {
                            return (
                                <div
                                    key={tittle + index}
                                    className="mSectionsTab-content"
                                >
                                    <div className="mSectionsTab-content-left">
                                        <div className="mSectionsTab-content-left-logo">
                                            {TabLogoHandle(index + 1)}
                                        </div>
                                        <div className="mSectionsTab-content-left-tittle">
                                            <span className="text-black text-4xl">
                                                {tittle}
                                            </span>
                                        </div>
                                        <div className="mSectionsTab-content-left-introduction">
                                            <span className="text-black text-base">
                                                {introduction}
                                            </span>
                                        </div>
                                        <div className="mSectionsTab-content-left-buttons">
                                            {(buttons ?? []).map(
                                                (button, index) => {
                                                    return (
                                                        <Link
                                                            key={
                                                                button?.to +
                                                                index
                                                            }
                                                            href={button?.to}
                                                            title={
                                                                button?.title
                                                            }
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
                                    <div className="mSectionsTab-content-right">
                                        <div className="mSectionsTab-content-right-mask"></div>
                                        <div className="mSectionsTab-content-right-img">
                                            <Image
                                                alt=""
                                                src={require(`../../images/home/product${
                                                    index + 1
                                                }.png`)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    }
                )}
            </div>
        </div>
    );
};

export default PcTabSection;
