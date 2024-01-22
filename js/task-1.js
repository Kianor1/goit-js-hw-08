const categoriesList = document.querySelectorAll('#categories .item');
console.log('Number of categories:', categoriesList.length);

categoriesList.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  console.log(`Category: ${categoryName}`);
  const categoryItemsCount = category.querySelectorAll('li').length;
  console.log(`Elements: ${categoryItemsCount}`);
});
