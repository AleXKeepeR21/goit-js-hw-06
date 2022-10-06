const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('.gallery');

const galleryMarkup = images
  .map(({ url, alt }) => {
  return `<li class = "galery__item"><img class = "galery__img" src = "${url}" alt = "${alt}"></li>`;
})
  .join(" ");

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);


// ---код нижче залишу для себе, він не підходить для саме цієї задачі---


// -----------------------спосіб через for----------------

// const elements = [];

// for (let i = 0; i < images.length; i += 1) {
// const image = images[i];

// const imageRef = document.createElement('img');
//   imageRef.src = image.url;
//   imageRef.alt = image.alt;
//   imageRef.width = 720;
   

//   elements.push(imageRef);
// }
 
// ---------------------------спосіб через map----------------

// const image = images[0];

// const imageRef = document.createElement('img');
// imageRef.src = image.url;
// imageRef.alt = image.alt;
// console.log(imageRef)


// const galleryRef = document.querySelector('.gallery');
// galleryRef.appendChild(imageRef);


// const elements = images.map(image => {
//   const imageRef = document.createElement('img');
//   imageRef.src = image.url;
//   imageRef.alt = image.alt;
//   imageRef.width = 720;
//   return imageRef;
// });

// console.log(elements)

// ----------------------спосіб через map(function)---------

// const galleryRef = document.querySelector('.gallery');

// const makeElements = (option) => {
//   return option.map(image => {
//   const imageRef = document.createElement('img');
//   imageRef.src = image.url;
//   imageRef.alt = image.alt;
//   imageRef.width = 720;
   
//   return imageRef;
        
// });
// }

// const elements = makeElements(images);

// galleryRef.append(...elements);


