# Guitar Shop project

This is a simple Guitar Shop project built with JavaScript, HTML, CSS, and BEM technology. The product catalog is loaded dynamically from the JSON file, and each product has an add/remove to cart button. There is a modal window for the cart with the total amount.

## Project Structure

### index.html

The `index.html` file is the main HTML file for the project, containing the basic structure of the page. It includes the necessary `meta` tags and links to the CSS and JavaScript files. It also includes the HTML elements where the components will be rendered.

### index.js

The `index.js` file is the main JavaScript file for the project. It fetches the data from the `catalog.json` file and renders the components on the page.

### server/catalog.json

The `catalog.json` file is a JSON file that contains the product catalog data.

### images/favicon.png

The `favicon.png` file is an image file used for the website favicon.

### css/index.css

The `index.css` file is the main CSS file for the project. It contains the basic styles for the components.

### constants/root.js

The `root.js` file contains constants for the root HTML elements where the components will be rendered.

### utils/localStorageUtil.js

The `localStorageUtil.js` file contains a `LocalStorageUtil` class that handles getting and putting products into the local storage.

### components/Header/Header.js

The `Header.js` file contains a `Header` class that renders the header component. It includes a counter that shows the number of products in the cart and opens the shopping cart page when clicked.

### components/Products/Products.js

The `Products.js` file contains a `Products` class that renders the product catalog. It includes add/remove to cart buttons for each product.

### components/Shopping/Shopping.js

The `Shopping.js` file contains a `Shopping` class that renders the shopping cart. It includes a list of products in the cart, the total amount, and a checkout button.

### components/Spinner/Spinner.js

The `Spinner.js` file contains a `Spinner` class that renders a spinner while the data is being fetched from the server.

### components/Error/Error.js

The `Error.js` file contains an `Error` class that renders an error message if there is a problem fetching the data from the server.

## Usage

To use this project, simply open the `index.html` file in a web browser. The product catalog will be loaded dynamically from the `catalog.json` file, and each product will have an add/remove to cart button. Clicking on the counter in the header will open the shopping cart page, which will display a list of products in the cart, the total amount, and a checkout button.
