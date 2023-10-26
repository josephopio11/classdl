import { FileMeta } from './contentMeta';
import fs from "fs";
import matter from "gray-matter"
import { redirect } from "next/navigation";

const getPostMetadata = (): FileMeta[] => {
    try {
        const folder = "posts/";
        const files = fs.readdirSync(folder);
        const markdownPosts = files.filter((file) => file.endsWith(".md"));

        //gray matter to read data from each file
        const posts = markdownPosts.map((fileName) => {
            const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
            const matterResult = matter(fileContents);
            return {
                title: matterResult.data.title,
                date: matterResult.data.date,
                subtitle: matterResult.data.subtitle,
                slug: fileName,
                image: matterResult.data.image,
                tags: matterResult.data.tags,
            };
        });

        return posts.sort((a, b) => a.date < b.date ? 1 : -1);
    } catch (error) {
        redirect("/");
    }
}

export default getPostMetadata;