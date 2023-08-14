import Device from '../../components/Device';
import dynamic from "next/dynamic";
const PcFooter = dynamic(import("./pc"), { ssr: false });
const MFooter = dynamic(import("./mobile"), { ssr: false });

const Footer = () => {
    return (
        <Device>
            {({ isMobile }) => {
                if (isMobile) return <MFooter />;
                return <PcFooter />;
            }}
        </Device>
    );
};
export default Footer;
