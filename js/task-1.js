const categoriesList = document.querySelectorAll('#categories .item');

categoriesList.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('ul li').length;
});
