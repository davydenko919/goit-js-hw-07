const link = document.querySelector("ul#categories");
console.log(`Number of categories: ${link.children.length}`); 

const categoriesItems = link.querySelectorAll('li.item');
categoriesItems.forEach(item => {
    const category = item.querySelector('h2').textContent;
  
    const elements = item.querySelectorAll('ul > li');
  
    console.log(`Category: ${category}`);
    console.log(`Elements: ${elements.length}`);
  });
