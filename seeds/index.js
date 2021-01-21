/* eslint-disable spaced-comment */
/* eslint-disable no-plusplus */

/* We will run this file on it's own separately
in the node app, and run it anytime
we need to seed the list of campgrounds.
CAUTION:  This will delete all entries in the DB before it seeds it. */

const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/lets-camp', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

// Deletes everything and makes new campgrounds.
const seedDB = async () => {
  //delete everything.
  await Campground.deleteMany({});
  // creates 50 random campgrounds.
  //   const c = new Campground({ title: 'Purple Fields' });
  //   await c.save();
  // Select 50 random locations from cities.js .
  // assign random seed names to the descriptor and place.
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      // assign random seed names to the descriptor and place.
      title: `${sample(descriptors)} ${sample(places)}`,
      image: 'https://source.unsplash.com/collection/483251',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ad quis cum earum suscipit accusamus, eaque error, distinctio aspernatur consequuntur accusantium, debitis libero rem. Soluta omnis velit iure unde cum?  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ad quis cum earum suscipit accusamus, eaque error, distinctio aspernatur consequuntur accusantium, debitis libero rem. Soluta omnis velit iure unde cum?  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel ad quis cum earum suscipit accusamus, eaque error, distinctio aspernatur consequuntur accusantium, debitis libero rem. Soluta omnis velit iure unde cum?',
      price,
    });
    // eslint-disable-next-line no-await-in-loop
    await camp.save();
  }
};
//seedDB();
seedDB().then(() => {
  mongoose.connection.close();
});
