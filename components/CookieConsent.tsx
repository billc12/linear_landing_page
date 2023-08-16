import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { CookieContext } from './layout';
const MotionDiv = motion.div;

const CookieConsent = ({ title, text, allow, deny }) => {
    const {} = useContext(CookieContext);
    return (
        <AnimatePresence>
            {
                <MotionDiv
                    className="cookie-consent"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                    key="cookie-consent"
                    initial={{ opacity: 0, y: '32px', zIndex: 1060 }}
                    animate={{ opacity: 1, y: 0, zIndex: 1060 }}
                    exit={{ opacity: 0, y: '32px', zIndex: 1060 }}
                    transition={{
                        duration: 0.2,
                        delay: 0.2,
                        ease: 'easeOut',
                        type: 'tween'
                    }}
                >
                    <span className="">{title}</span>
                    <span className="">{text}</span>
                    <div>
                        <div className="">
                            <button onClick={() => {}}>{allow}</button>
                        </div>
                        <div className="flex-grow-0">
                            <button onClick={() => {}}>{deny}</button>
                        </div>
                    </div>
                </MotionDiv>
            }
        </AnimatePresence>
    );
};

CookieConsent.propTypes = {
    allow: PropTypes.string,
    deny: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string
};

CookieConsent.defaultProps = {
    allow: '',
    deny: '',
    text: '',
    title: ''
};

export default CookieConsent;
