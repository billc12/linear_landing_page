import PcHomeBanner from './pc';
import Device from '../../components/Device';

const HomeBanner = ({ heading, underline, buttons, subtitle }) => {
    return (
        <Device>
            {({ isMobile }) => {
                if (isMobile) return;
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
