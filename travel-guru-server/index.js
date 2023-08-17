const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const destinations = require("./data/destinations.json");
const hotels = require("./data/hotels.json");

app.use(cors());

app.get("/", (req, res) => {
    res.send("Travel Guru Server Api Home");
})


// destinations data for home page
app.get("/destinations", (req, res) => {
    res.send(destinations);
})

app.get("/destinations/:id", (req, res) => {
    const id = req.params.id;
    const destination = destinations.find(dest => dest.id === id);

    res.send(destination);
})


// hotels data
app.get("/hotels", (req, res) => {
    res.send(hotels);
})


app.listen(port, () => {
    console.log("Travel guru server is running on port: ", port);
})

