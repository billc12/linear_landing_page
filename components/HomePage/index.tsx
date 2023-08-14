import Device from '../../components/Device';
import PcHomePage from './pc';
import MobileHomePage from './mobile';

const HomePage = ({
    banner,
    sections,
    sectionsExtra1,
    sectionsExtra2,
    sectionsTab,
    partners
}) => {
    return (
        <Device>
            {({ isMobile }) => {
                if (isMobile)
                    return (
                        <MobileHomePage
                            banner={banner}
                            sections={sections}
                            sectionsExtra1={sectionsExtra1}
                            sectionsExtra2={sectionsExtra2}
                            sectionsTab={sectionsTab}
                            partners={partners}
                        />
                    );
                return (
                    <PcHomePage
                        banner={banner}
                        sections={sections}
                        sectionsExtra1={sectionsExtra1}
                        sectionsExtra2={sectionsExtra2}
                        sectionsTab={sectionsTab}
                        partners={partners}
                    />
                );
            }}
        </Device>
    );
};
export default HomePage;
