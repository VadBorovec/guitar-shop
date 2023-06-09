function render() {
  const productsStore = localStorageUtil.getProducts();
  headerPage.render(productsStore.length);
  productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

// server/catalog.json
// https://api.jsonserve.com/bE9ZQP

fetch("server/catalog.json")
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;

    setTimeout(() => {
      spinnerPage.handleClear();
      render();
    }, 1000);
  })
  .catch(() => {
    spinnerPage.handleClear();
    errorPage.render();
  });
