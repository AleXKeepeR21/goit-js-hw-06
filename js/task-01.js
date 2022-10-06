const categoriesRef = document.querySelector("#categories");
const categoriesRefChildren = categoriesRef.children;
console.log("Number of categories:",categoriesRefChildren.length );

const titleRef = document.querySelectorAll('#categories > li');
titleRef.forEach(ref => {

   console.log(
      `Category: ${ref.firstElementChild.textContent}, 
    Elements: ${ref.lastElementChild.children.length}`,
  );
});
