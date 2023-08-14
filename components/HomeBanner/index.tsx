import PcHomeBanner from './pc';
import MobileHomeBanner from './mobile';
import Device from '../../components/Device';

const HomeBanner = ({ heading, underline, buttons, subtitle }) => {
    return (
        <Device>
            {({ isMobile }) => {
                if (isMobile)
                    return (
                        <MobileHomeBanner
                            heading={heading}
                            underline={underline}
                            buttons={buttons}
                            subtitle={subtitle}
                        ></MobileHomeBanner>
                    );
                return (
                    <PcHomeBanner
                        heading={heading}
                        underline={underline}
                        buttons={buttons}
                        subtitle={subtitle}
                    />
                );
            }}
        </Device>
    );
};
export default HomeBanner;
