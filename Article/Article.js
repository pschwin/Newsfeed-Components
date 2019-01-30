// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent += 'Expand';
    
    console.log(this.domElement);
    //console.log(this.expandButton);

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    //Implicit Binding
    //ES5
    //this.expandButton.addEventListener('click', this.expandButton.bind(this));
    //ES6
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.add('article-open');
    //console.log(this.expandButton);
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  */

let articles = document.querySelectorAll('.article');

//- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

articles.forEach(article => new Article(article));

