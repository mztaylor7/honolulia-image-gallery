const db = require('./index.js');
const Images = require('./models.js');

const data = [
  {
    imageUrl: 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/Main.webp',
    bigThumb: true
  },
  {
    imageUrl: 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list1.webp',
    bigThumb: false
  },
  {
    imageUrl: 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list2.webp',
    bigThumb: false
  },
  {
    imageUrl: 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list3.webp',
    bigThumb: false
  },
  {
    imageUrl: 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list4.webp',
    bigThumb: false
  },
  {
    imageUrl: 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list5.webp',
    bigThumb: false
  },
  {
    imageUrl: 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list6.webp',
    bigThumb: false
  },
  {
    imageUrl: 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list7.webp',
    bigThumb: false
  },
  {
    imageUrl: 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list8.webp',
    bigThumb: false
  },
  {
    imageUrl: 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list9.webp',
    bigThumb: false
  },
  {
    imageUrl: 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list10.webp',
    bigThumb: false
  },
  {
    imageUrl: 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list11.webp',
    bigThumb: false
  },
  {
    imageUrl: 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list12.webp',
    bigThumb: false
  },
  {
    imageUrl: 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list13.webp',
    bigThumb: false
  },
  {
    imageUrl: 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list14.webp',
    bigThumb: false
  },
  {
    imageUrl: 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list15.webp',
    bigThumb: false
  },
  {
    imageUrl: 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list16.webp',
    bigThumb: false
  },
  {
    imageUrl: 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list17.webp',
    bigThumb: false
  },
  {
    imageUrl: 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list18.webp',
    bigThumb: false
  },
  {
    imageUrl: 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list19.webp',
    bigThumb: false
  },
  {
    imageUrl: 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list20.webp',
    bigThumb: false
  },
  {
    imageUrl: 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list21.webp',
    bigThumb: false
  },
  {
    imageUrl: 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list22.webp',
    bigThumb: false
  },
  {
    imageUrl: 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list23.webp',
    bigThumb: false
  },
  {
    imageUrl: 'https://sokka-image-gallery.s3.us-east-2.amazonaws.com/list24.webp',
    bigThumb: false
  }
]

const insertImages = () => {
  Images.create(data)
    .then(() => db.close());
}

insertImages();