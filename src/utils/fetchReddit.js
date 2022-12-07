import {fetchData} from './fetchData';

export const redditService = {
  async get() {
    const res = await fetchData('https://www.reddit.com/r/reactjs.json')
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
