const { RESTDataSource } = require('apollo-datasource-rest')

class ProductHuntAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = process.env.PRODUCT_HUNT_API
  }

  willSendRequest(request) {
    request.headers.set(
      'Authorization',
      `Bearer ${this.context.productHuntToken}`
    )
  }

  async getPosts({ page = 1, perPage = 10, daysAgo = 0 } = {}) {
    return this.get(`/${process.env.PRODUCT_HUNT_API_VERSION}/posts`, {
      page,
      per_page: perPage,
      days_ago: daysAgo,
    })
  }
}

module.exports = ProductHuntAPI
