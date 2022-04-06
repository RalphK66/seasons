import path from 'path'
import fs from 'fs/promises'

const readFile = async ({ dir, paths }) => {
  const filePath = path.join(dir, ...paths)
  const joinData = await fs.readFile(filePath)
  const data = JSON.parse(joinData)
  return data
}

export default readFile
