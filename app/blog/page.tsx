import { getSortedPostsData } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";

export default function BlogIndex() {
    const allPostsData = getSortedPostsData();

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Latest Insights
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allPostsData.map(({ slug, frontmatter }) => (
                    <Link href={`/blog/${slug}`} key={slug}>
                        <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 h-full flex flex-col">
                            {frontmatter.cover_image && (
                                <div className="relative h-48 w-full overflow-hidden">
                                    {/* Using a placeholder image if local image logic isn't fully set up for assets */}
                                    <Image
                                        src={frontmatter.cover_image}
                                        alt={frontmatter.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-60" />
                                </div>
                            )}

                            <div className="p-6 flex flex-col flex-grow">
                                <p className="text-sm text-purple-400 mb-2">{frontmatter.date}</p>
                                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                    {frontmatter.title}
                                </h2>
                                <p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">
                                    {frontmatter.excerpt}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {frontmatter.tags?.map((tag) => (
                                        <span key={tag} className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-300">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
