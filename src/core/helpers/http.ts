import fs from 'fs'
import path from 'path'
import util from 'util'
import stream from 'stream'
import got, { StreamOptions } from 'got'
import { getTempPath, mkdir } from './file'

const { name, version, homepage } = require('../../../package.json')

const pipe = util.promisify(stream.pipeline)

const client = got.extend({
  headers: {
    'user-agent': `${name}/${version} (${homepage})`
  }
})

/**
 * Send a http request.
 * @param url url
 * @param options options
 */
export const request = client.extend({
  // timeout: 5000,
  // https://github.com/sindresorhus/got/issues/1117
  responseType: 'json'
})

/**
 * Download remote resource
 * @param url url
 * @param options options
 */
export const download = async (url: string | URL, options?: StreamOptions): Promise<string> => {
  const filename = getTempPath(path.basename(url.toString()))
  await mkdir(path.dirname(filename))
  await pipe(client.stream(url, options), fs.createWriteStream(filename))
  return filename
}
