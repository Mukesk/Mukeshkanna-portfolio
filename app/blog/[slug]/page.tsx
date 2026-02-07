import { getPostData, getSortedPostsData } from "@/lib/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

interface Props {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPost({ params }: Props) {
    const postData = getPostData(params.slug);

    return (
        <article className="min-h-screen pt-32 pb-20 px-6 container mx-auto max-w-4xl">
            <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
            >
                <ArrowLeftIcon className="w-4 h-4" /> Back to Blog
            </Link>

            <div className="mb-12 text-center">
                {postData.frontmatter.cover_image && (
                    <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-8 shadow-2xl">
                        <Image
                            src={postData.frontmatter.cover_image}
                            alt={postData.frontmatter.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent" />
                    </div>
                )}
                <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
                    {postData.frontmatter.title}
                </h1>
                <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
                    <span>{postData.frontmatter.date}</span>
                    <span>•</span>
                    <div className="flex gap-2">
                        {postData.frontmatter.tags?.map(tag => (
                            <span key={tag} className="text-purple-400">#{tag}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-purple-300 prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-img:rounded-xl">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {postData.content}
                </ReactMarkdown>
            </div>
        </article>
    );
}
