import Device from '../../components/Device';
import dynamic from 'next/dynamic';
const PcHeader = dynamic(import('./pc'), { ssr: false });
const MobileFooter = dynamic(import('./mobile'), { ssr: false });

const Footer = () => {
    return (
        <Device>
            {({ isMobile }) => {
                if (isMobile) return <MobileFooter />;
                return <PcHeader />;
            }}
        </Device>
    );
};
export default Footer;
