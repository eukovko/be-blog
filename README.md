- Use AWS Console to create two database tables in DynamoDB. Expected schemas for products and stocks:
>> Product model:
>>
>> - id -  uuid (Primary key)
>> - title - text, not null
>> - description - text
>> - price - integer
>>
>> Stock model:
>> - product_id - uuid (Foreign key from products.id)
>> - count - integer (Total number of products in stock, can't be exceeded)
- Write a script to fill tables with test examples. Store it in your Github repository. Execute it for your DB to fill data.
- Extend your serverless.yml file with data about your database table and pass it to lambda’s environment variables section.
- Integrate the getProductsList lambda to return via GET /products request a list of products from the database (joined stocks and products tables).
- Implement a Product model on FE side as a joined model of product and stock by productId. For example:
- Integrate the getProductsById lambda to return via GET /products/{productId} request a single product from the database. Do not commit your environment variables in serverless.yml to github!
- Create a lambda function called createProduct under the same Serverless config file (i.e. serverless.yaml) of Product Service which will be triggered by the HTTP POST method.
- ✅ Commit all your work to separate branch (e.g. task-4 from the latest master) in BE (backend) and if needed in FE (frontend) repositories.
- ✅ Create a pull request to the master branch.

## Additional tasks  

- +1 (All languages) - POST /products lambda functions returns error 400 status code if product data is invalid
- +1 (All languages) - All lambdas return error 500 status code on any error (DB connection, any unhandled error in code)
- +1 (All languages) - All lambdas do console.log for each incoming requests and their arguments
- +1 (All languages) - Use RDS instance instead fo DynamoDB tables
- +1 (All languages) - Transaction based creation of product (in case stock creation is failed then related to this stock product is not created and not ready to be used by the end user and vice versa) (https://devcenter.kinvey.com/nodejs/tutorials/bl-transactional-support, https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/transaction-apis.html)