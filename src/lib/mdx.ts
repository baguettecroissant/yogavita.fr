import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content')
const posesDirectory = path.join(process.cwd(), 'content/poses')

export type Post = {
    slug: string
    meta: {
        title: string
        date: string
        description: string
        readingTime?: string
        [key: string]: any
    }
    content: string
}

export type Pose = {
    slug: string
    meta: {
        title: string
        sanskritName: string
        difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé'
        category: string
        benefits: string[]
        contraindications: string[]
        image?: string
        [key: string]: any
    }
    content: string
}

function getMDXFiles(dir: string) {
    if (!fs.existsSync(dir)) {
        return []
    }
    return fs.readdirSync(dir).filter((file) => file.endsWith('.mdx'))
}

function readMDXFile<T>(dir: string, slug: string): T | undefined {
    const realSlug = slug.replace(/\.mdx$/, '')
    const fullPath = path.join(dir, `${realSlug}.mdx`)

    if (!fs.existsSync(fullPath)) {
        return undefined
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
        slug: realSlug,
        meta: data,
        content,
    } as T
}

function getAllMDXFiles<T>(dir: string): T[] {
    const files = getMDXFiles(dir)
    return files.map((file) => readMDXFile<T>(dir, file)).filter((item): item is T => item !== undefined)
}

// --- Blog Posts ---

export function getPostSlugs() {
    return getMDXFiles(postsDirectory)
}

export function getPostBySlug(slug: string): Post | undefined {
    return readMDXFile<Post>(postsDirectory, slug)
}

export function getAllPosts(): Post[] {
    const posts = getAllMDXFiles<Post>(postsDirectory)
    return posts.sort((a, b) => (a.meta.date > b.meta.date ? -1 : 1))
}

// --- Yoga Poses ---

export function getPoseSlugs() {
    return getMDXFiles(posesDirectory)
}

export function getPoseBySlug(slug: string): Pose | undefined {
    return readMDXFile<Pose>(posesDirectory, slug)
}

export function getAllPoses(): Pose[] {
    return getAllMDXFiles<Pose>(posesDirectory)
}
