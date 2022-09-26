✅ 1 - Product Service Serverless config contains configuration for 2 lambda functions, API is not working at all, but YAML configuration is correct \
✅ 2 - The getProductsList OR getProductsById lambda function returns a correct response (POINT1) \
✅ 3 - The getProductsById AND getProductsList lambda functions return a correct response code (POINT2) \
⛔ 4 - Your own Frontend application is integrated with Product Service (/products API) and products from Product Service are represented on Frontend. AND POINT1 and POINT2 are done.
> https://ehmoc5kry7.execute-api.eu-west-1.amazonaws.com/dev/courses
> 
> https://ehmoc5kry7.execute-api.eu-west-1.amazonaws.com/dev/courses/{id}
>
✅  +1 - Async/await is used in lambda functions \
> Added a function invocation which is invoked asynchronously during courses/ endpoint handler execution. 
> This function is just a mock with 1 second timeout. 
> 
✅ +1 - ES6 modules are used for Product Service implementation \
⛔ +1 - Custom Webpack/ESBuild/etc is manually configured for Product Service. Not applicable for preconfigured/built-in bundlers that come with templates, plugins, etc. \
⛔ +1 (All languages) - SWAGGER documentation is created for Product Service \
⛔ +1 (All languages) - Lambda handlers are covered by basic UNIT tests (NO infrastructure logic is needed to be covered) \
✅ +1 (All languages) - Lambda handlers (getProductsList, getProductsById) code is written not in 1 single module (file) and separated in codebase. \
⛔ +1 (All languages) - Main error scenarios are handled by API ("Product not found" error). \