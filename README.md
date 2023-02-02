# Micro frontend course :books:

## Course URL

https://www.udemy.com/course/microfrontend-course/

## Production URL

https://d3m4s1y7xi57al.cloudfront.net/

## Items covered:

- Monorepo
* Webpack Module Federation
  - Dependencies between apps
  - To link multiple apps together
  - Generic Ties between projects _(mount function)_
- Pipeline integration (GitHub Actions)
* AWS Deployment
  - S3
  - Cloudfront
  - IAM
- To handle CSS avoiding conflicts
* To handle Navigation
  - To handle with memory and browser history
  - Route synchronization between container and micro frontend
* Performance considerations
  - `publicPath` for webpack development server
  - History initial entries
  - Lazy loading micro frontends
* Using other frameworks
  - Exemplify how to use Vuejs together with Reactjs
  - Exemplify private routes
  
## Big Takeaways

1. Your requirements drive your architecture

This architecture is really usefull for big or projects that many developers from different scopes are working on. At those cases, we can choose micro frontend as a way to organize teams and deliver autonomy for them.

2. Always ask yourself

"If I have to change this in the future, will I have to change another app?"

3. Everyone will eventually forget React

Micro frontends are interesting because it does not/should not depend of a framework. So, keep in mind, aways when you need to share code between micro fronts, keep it a generic (e.g. pure functions, values, JS only without library or framework dependency)

4. Don't forget to scope your CSS

This is quite importante. Don't forget this, if you do, probably you will have CSS conflicts between micro fronts.

5. Micro frontends might cause issues in production that you don't see in development

Take care about it. Always test your changes both in production and development. Changes that you did may affect one of them environment.
