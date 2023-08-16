import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Link from 'next/link';
import RrrowRight from '../../images/icons/arrow-right.svg';
import Spline from '@splinetool/react-spline';

const PcHomeBanner = ({ heading, underline, buttons, subtitle }) => {
    return (
        <section className="container home-banner">
            <div className="home-banner-text">
                <div
                    className="text-7xl font-extralight tracking-widest"
                    style={{
                        lineHeight: '80px'
                    }}
                >
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
                                    key={button?.to + index}
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
            <div className="home-banner-logo">
                <div className="home-banner-logo-content">
                    <Spline
                        style={{
                          width: "100%"
                        }}
                        scene="https://prod.spline.design/RgW4v8Eb9ioQmQgU/scene.splinecode"
                    />
                </div>
            </div>
        </section>
    );
};

PcHomeBanner.propTypes = {
    heading: PropTypes.string,
    subtitle: PropTypes.string,
    buttons: PropTypes.array,
    underline: PropTypes.object,
    scrollDownLabel: PropTypes.string
};

PcHomeBanner.defaultProps = {
    heading: 'The first cross-chain compatible, delta-one asset protocol.',
    subtitle:
        'linear is the first of its kind trading protocol that enables trading of liquid assets seamlessly and effectively.',
    buttons: [],
    underline: {},
    scrollDownLabel: 'Scroll down to learn more'
};

export default PcHomeBanner;
