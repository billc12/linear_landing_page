import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
let language = 'en';

const postsDirectory = join(process.cwd(), 'md');

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

export function getMdByArea(area: string = 'en') {
    return fs.readdirSync(join(process.cwd(), `md/${area}`));
}

// export function getPostBySlug(slug: string, fields: string[] = []) {
//     const realSlug = slug.replace(/\.md$/, '');
//     const fullPath = join(postsDirectory, `${realSlug}.md`);
//     const fileContents = fs.readFileSync(fullPath, 'utf8');
//     const { data, content } = matter(fileContents);

//     type Items = {
//         [key: string]: string;
//     };

//     const items: Items = {};

//     fields.forEach(field => {
//         if (field === 'area') {
//             items[field] = realSlug;
//         }
//         if (field === 'slug') {
//             items[field] = realSlug;
//         }
//         if (field === 'content') {
//             items[field] = content;
//         }

//         if (typeof data[field] !== 'undefined') {
//             items[field] = data[field];
//         }
//     });
//     return items;
// }

export function getPostByArea(area, fields: string[] = []) {
    const realArea = area.replace(/\.md$/, '');
    const fullPath = join(
        join(process.cwd(), `md/${language}`),
        `${realArea}.md`
    );
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data } = matter(fileContents);

    type Items = {
        [key: string]: string;
    };

    const items: Items = {};

    fields.forEach(field => {
        if (typeof data[field] !== 'undefined') {
            items[field] = data[field];
        }
    });
    return items;
}

export function getAllArea(
    fields: string[] = [],
    params: ParamsItem = { area: 'en' }
) {
    language = params.area;
    const areas = getMdByArea();
    const posts = areas.map(area => {
        return getPostByArea(area, fields);
    });
    return posts;
}

interface ParamsItem {
    area: string;
}
