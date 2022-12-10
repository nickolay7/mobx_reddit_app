import {fetchData} from './fetchData';
import {Tag} from "types";

export const redditService = {
  async get(tag = Tag.REACT) {
    const res = await fetchData(`https://www.reddit.com/r/${tag}js.json`)
    const resChildren = res.data.children
    const nextRes = []

    resChildren.forEach(({
                           data: {
                             id,
                             url,
                             title,
                             score,
                             author,
                             num_comments,
                             thumbnail,
                             thumbnail_width,
                             thumbnail_height
                           }
                         }) => {
      nextRes.push({
        id,
        url,
        title,
        // extra info
        score,
        author,
        comments: num_comments,
        // image (thumbnail)
        thumbnail: {
          src: thumbnail,
          width: thumbnail_width,
          height: thumbnail_height,
        },
      })
    })

    return nextRes
  },
}
