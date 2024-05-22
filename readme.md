Description of assignment-> we have to create product list which contains price, product name and image and there is a add to cart feature is attached with each
product card.
Performed Operation->1.I have sorted product according to given price range
                     2.I have sorted product according to price(low to high,high to low)
                     3.I have added a button clear cart which will remove all product from page
                     4.when we will click on add to cart then product will be appear before the clear cart button with product name,price and image along will 
                       a remove button(when we will click on it it will remove particular product from the page), and when we will double click on add to cart button
                       of any product then it will not appear but it will add its price in total price paragraph.
                     5.There is a paragraph which will calculate price or product which we have selected.
                     6.There is another paragraph called average price which will calculate average price of total selected product.

Pseudo Code of javascript:- 

Start
1.displayProducts(Function)
  Steps: 1. Clear the container element.
         2.For each product in filteredProducts:
         3.Create a card element.
         4.Create an image element and set its source and alt text.
         5.Create a name element and set its text content.
         6.Create a price element and set its text content.
         7.Create an 'Add to Cart' button and add a click event listener to call addToCart function.
         8.Append the image, name, price, and button to the card.
         9.Append the card to the container.
         10.End of Function

2.filterProductsByPrice(Function)
 Steps: 1.Extract minPrice and maxPrice from the range.
        2.Filter products based on the price range.
        3.Call displayProducts with the filtered products.
        4.End of Function

3.addToCart(Function)
 Steps: 1.If the product is already in the cart:
        2.Update its quantity and total price.
        3.If the product is not in the cart:
        4.Add it to the cart with quantity and total price.
        5.Create a cart item element:
        6.Create an image element for the product and set its source and size.
        7.Create a paragraph element for the product name.
        8.Create a paragraph element for the product price.
        9.Create a remove button with a click event listener to call removeProduct function.
        10.Append the image, name, price, and remove button to the cart item.
        11.Append the cart item to the cart items container.
        12.Update the total price.
        13.Calculate the average price and update the average price container.
        14.End of Function

4.removeProduct(Function)
 Steps: 1.If the product is in the cart:
        2.Update the total price.
        3.Calculate the new average price.
        4.Remove the product from the cart object.
        5.Remove the product element from the cart display.
        6.End of Function

5.clearCart(Function)
 Steps: 1.Clear the cart items container.
        2.Reset the total price.
        3.Reset the average price.
        4.Delete all products from the cart object.
        5.End of Function

6.sortProducts(Function)
 Steps: 1.Sort the products in ascending or descending order based on the sortOrder.
        2.End of Function

7.initialize:Initialize the product display.
 Steps: 1.Call displayProducts with all products.
        2.End of Function

8.Event Listeners: Set up event listeners.
 Steps: 1.For priceInput element:On 'input' event, call filterProductsByPrice.
        2.For sortPrice element:On 'change' event, call sortProducts.
        3.End of Event Listeners

End 



     