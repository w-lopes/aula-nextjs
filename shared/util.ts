import fs from 'fs'
import path from 'path'

export const getPostlist = ():string[] => {
  const postsDir = path.join(process.cwd(), 'pages', 'posts')

  try {
    return fs
      .readdirSync(postsDir)
      .map(file => file.replace(/\..*/, ''))
  } catch {
    console.warn('There are no posts')
    return []
  }
}
