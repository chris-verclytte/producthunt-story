module.exports = {
  Query: {
    productHuntPosts: async (
      _source,
      { page, perPage, daysAgo },
      { dataSources }
    ) => {
      const result = await dataSources.productHuntAPI.getPosts({
        page,
        perPage,
        daysAgo,
      })
      return result.posts.map(post => ({
        ...post,
        upvotes: post.votes_count,
        screenshotUrl: post.screenshot_url['850px'],
        commentsCount: post.comments_count,
        makersCount: post.makers.length,
      }))
    },
  },
}
