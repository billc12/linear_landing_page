import Device from '../Device';
import MobileTabSection from './mobile'
import PcTabSection from './pc'

const TabSection = ({sectionsTab}) => {
    return (
        <Device>
            {({ isMobile }) => {
                if (isMobile) return <MobileTabSection sectionsTab={sectionsTab} />;
                return <PcTabSection sectionsTab={sectionsTab} />;
            }}
        </Device>
    );
};
export default TabSection;
