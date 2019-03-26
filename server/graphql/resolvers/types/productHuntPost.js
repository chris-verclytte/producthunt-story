const getOr = require('lodash/fp/getOr')

module.exports = {
  ProductHuntPost: {
    /* eslint-disable camelcase */
    upvotes: ({ votes_count = 0 }) => votes_count,
    screenshotUrl: ({ screenshot_url }) => getOr('', '850px', screenshot_url),
    commentsCount: ({ comments_count }) => comments_count,
    /* eslint-enable camelcase */
    makersCount: ({ makers }) => getOr(0, 'length', makers),
  },
}
