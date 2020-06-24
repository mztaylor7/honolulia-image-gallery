const db = require('./index.js');
const Images = require('./models.js');

const thumbnail = 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/Main.webp';

const houseImages = [
  'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/Main.webp',
  'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list1.webp',
  'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list2.webp',
  'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list3.webp',
  'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list5.webp',
  'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list6.webp',
  'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list7.webp',
  'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list8.webp',
  'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list9.webp',
  'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list10.webp',
  'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list11.webp',
  'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list12.webp',
  'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list13.webp',
  'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list14.webp',
  'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list15.webp',
  'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list16.webp',
  'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list17.webp',
  'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list18.webp',
  'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list19.webp',
  'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list20.webp',
  'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list21.webp',
  'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list22.webp',
  'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list23.webp',
  'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list24.webp'
]

var houses = (houseImages, thumbnail) => {
  var homes = [];
  var house = {
    images: houseImages,
    bigThumb: thumbnail
  }
  while (homes.length <= 99) {
    homes.push(house);
  }
  return homes;
}

var homes = houses(houseImages, thumbnail);
var counter = 0;
var seeds = homes.map((home) => {
  counter++
  home.houseId = counter;
  return new Images(home).save();
})
Promise.all(seeds)
  .then(() => {
    db.disconnect();
  })
