const express = require("express");
const app = express();
const PORT = process.env.port || 5000;

const dbCongig = require("./db/conn");
const routes = require("./routes/roomsRoute");
const usersRoute = require("./routes/userRoute");
app.use(express.json());

app.use("/api/rooms", routes);
app.use("/api/users", usersRoute);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
