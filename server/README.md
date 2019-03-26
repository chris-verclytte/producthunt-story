This repository wraps Product Hunt API through a GraphQL proxy.

# Getting started
## Environment variables
In order to run the server correctly you should create a `.env` file at the root of the project with following env vars:
- PRODUCT_HUNT_API the ProductHunt API endpoint (should be https://api.producthunt.com)
- PRODUCT_HUNT_API_VERSION the ProductHunt API version (should be v1)
- PRODUCT_HUNT_DEVELOPER_TOKEN the developer token you can get on your [ProductHunt API Dashboard](https://www.producthunt.com/v1/oauth/applications)

## Run the server 
Simply run `yarn start` or `npm start` to launch the server. You're done.

## Don't know how to create a ProductHunt account ? 
1. Sign up on [Product Hunt](https://www.producthunt.com/).
1. Go to [Applications page](https://api.producthunt.com/v1/oauth/applications)
1. Create a new application
1. Create a Developer Token which will be embed in all ProductHunt requests