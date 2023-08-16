import Layout from '../components/layout';
import { getAllArea } from '../lib/api';
import delArrayEmpty from '../utils/tools';
import HomePage from '../components/HomePage';

export default function Index({
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

