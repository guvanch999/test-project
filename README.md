
# webApp test project

I have use in this project expressJS,
postgresSql 16.1, SequelizeORM



## Installation

To run this app locally pleace configure file in config/config.json for development, for test and for production

After configuration open an terminal in this folder and run command:

```bash
  npm install
```
This will install all necessary packages

After installation run:
```bash
npx sequelize-cli db:migrate
```
and

```bash
npx sequelize-cli db:seed:all
```
Second one will create user with balance=10000 and with id=1


Finally we have done all configurations
Now we can run:
```bash
npm run start
```

It will run the app on port 3001

Now we can update balanse with this request:
```bash
PUT http://localhost:3001/update-balance
```
and the body is:
```bash
{
    "userId":1,
    "amount":1000
}
```
