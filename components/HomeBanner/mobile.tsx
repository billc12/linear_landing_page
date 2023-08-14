import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import RrrowRight from '../../images/icons/arrow-right.svg';

const MobileHomeBanner = ({ heading, underline, buttons, subtitle }) => {
    return (
        <section className="container mHome-banner">
            <div className="mHome-banner-logo"></div>
            <div className="mHome-banner-text">
                <div className="text-4xl font-extralight tracking-widest">
                    {heading}
                </div>
                <div className="text-xl font-extralight mt-5">
                    {underline?.text}
                </div>

                <div
                    style={{
                        marginTop: '35px'
                    }}
                >
                    {(buttons ?? []).map((button, index) => {
                        return (
                            <>
                                <Link
                                    key={button?.label + index}
                                    href={button?.to}
                                    title={button?.title}
                                    className={clsx('btn', 'btn-type2')}
                                    target={button?.newWindow ? '_blank' : null}
                                    rel={
                                        button?.newWindow ? 'noreferrer' : null
                                    }
                                >
                                    <div className="btn-label">
                                        {button?.label}
                                        <RrrowRight className="ml-3 inline" />
                                    </div>
                                </Link>
                            </>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

MobileHomeBanner.propTypes = {
    heading: PropTypes.string,
    subtitle: PropTypes.string,
    buttons: PropTypes.array,
    underline: PropTypes.object,
    scrollDownLabel: PropTypes.string
};

MobileHomeBanner.defaultProps = {
    heading: 'The first cross-chain compatible, delta-one asset protocol.',
    subtitle:
        'linear is the first of its kind trading protocol that enables trading of liquid assets seamlessly and effectively.',
    buttons: [],
    underline: {},
    scrollDownLabel: 'Scroll down to learn more'
};

export default MobileHomeBanner;
