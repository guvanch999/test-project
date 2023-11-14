const app = require("./app");
const {sequelize} = require("./models");

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, "0.0.0.0",async () => {
    await sequelize.authenticate();
    // await Profile.drop()
    // await sequelize.sync({alter: true});
    // await sequelize.sync({force: true});
    //npx sequelize-cli db:seed:all
    console.log(`Connected to DB and listening on port ${PORT}...`);
})

