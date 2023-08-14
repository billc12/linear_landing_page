import React from 'react';
import clsx from 'clsx';
import { type } from 'os';
import Image from 'next/image';

type Props = {
    variant?: string;
    className?: string;
    children?: React.ReactDOM;
    component?: string | React.ReactDOM;
};
const LogoGroup = ({
    variant = 'home-logo',
    className = '',
    children,
    component,
    ...props
}: Props) => {
    const Component: any = component || 'div';
    return (
        <Component
            {...props}
            className={clsx(
                {
                    [variant]: Component !== variant
                },
                className,
                'relative'
            )}
        >
            {variant === 'home-logo' && (
                <div
                    style={{
                        width: '199.111px',
                        height: '56px'
                    }}
                >
                    <Image
                        className="absolute"
                        style={{
                            top: '0px',
                            left: '0px'
                        }}
                        src={require('../../images/logos/home_logop1.png')}
                        alt=""
                    ></Image>
                    <Image
                        className="absolute"
                        style={{
                            top: '9.5px',
                            left: '91.14px'
                        }}
                        src={require('../../images/logos/home_logop2.png')}
                        alt=""
                    ></Image>
                    <Image
                        className="absolute"
                        style={{
                            top: '9.5px',
                            left: '69px'
                        }}
                        priority={true}
                        src={require('../../images/logos/home_logop3.png')}
                        alt=""
                    ></Image>
                </div>
            )}
            {variant === 'foot-logo' && (
                <div
                    style={{
                        width: '160px',
                        height: '45px'
                    }}
                >
                    <Image
                        className="absolute"
                        style={{
                            top: '0px',
                            left: '0px',
                            width:"41px",
                            height:"45px"
                        }}
                        src={require('../../images/logos/home_logop1.png')}
                        alt=""
                    ></Image>
                    <Image
                        className="absolute"
                        style={{
                            top: '7.69px',
                            left: '73px',
                        }}
                        src={require('../../images/logos/home_logop2.png')}
                        alt=""
                    ></Image>
                    <Image
                        className="absolute"
                        style={{
                            top: '7.68px',
                            left: '55px',
                            width:"104px",
                            height:"28px"
                        }}
                        priority={true}
                        src={require('../../images/logos/home_logop3.png')}
                        alt=""
                    ></Image>
                </div>
            )}
            {children}
        </Component>
    );
};

export default LogoGroup;
