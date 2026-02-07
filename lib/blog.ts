import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type BlogPost = {
    slug: string;
    frontmatter: {
        title: string;
        date: string;
        excerpt: string;
        cover_image?: string;
        tags?: string[];
    };
    content: string;
};

export function getSortedPostsData() {
    // Create directory if it doesn't exist to prevent errors
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const { data, content } = matter(fileContents);

        return {
            slug,
            frontmatter: data as BlogPost["frontmatter"],
            content,
        };
    });

    return allPostsData.sort((a, b) => {
        if (a.frontmatter.date < b.frontmatter.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getPostData(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        frontmatter: data as BlogPost["frontmatter"],
        content,
    };
}
