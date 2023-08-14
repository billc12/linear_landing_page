import { getAllArea } from '../lib/api';
import Layout from '../components/layout';
import Container from '../components/container';
import delArrayEmpty from '../utils/tools';
import HomePage from '../components/HomePage';

export default function Area({
    banner,
    sections,
    sectionsExtra1,
    sectionsExtra2,
    sectionsTab,
    partners
}) {
    return (
        <Layout>
            <HomePage
                banner={banner}
                sections={sections}
                sectionsExtra1={sectionsExtra1}
                sectionsExtra2={sectionsExtra2}
                sectionsTab={sectionsTab}
                partners={partners}
            ></HomePage>
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    const posts = getAllArea(['home'], params);
    const { home } = delArrayEmpty(posts)[0];

    return {
        props: {
            ...home
        }
    };
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { area: 'en' } },
            { params: { area: 'kr' } },
            { params: { area: 'fr' } }
        ],
        fallback: false
    };
}
