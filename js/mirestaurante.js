import RestaurantApp from "./restaurantApp.js";

const historyActions = {
  init: () => {
    RestaurantApp.handleInit();
  },
  productsCategoryList: (event) => RestaurantApp.handleProductsCategoryList(event.state.category),
  showRandProduct: (event) => RestaurantApp.handleShowProduct(event.state.serial),
  productsAllergenList: (event) => RestaurantApp.handleProductsAllergenList(event.state.allergen),
  productsMenuList: (event) => RestaurantApp.handleProductsMenuList(event.state.menu),
  restaurantsList: (event) => RestaurantApp.handleRestaurant(event.state.restaurant),
  showProduct: (event) => RestaurantApp.handleShowProduct(event.state.serial),
};

window.addEventListener("popstate", (event) => {
  if (event.state) {
    historyActions[event.state.action](event);
  }
});

history.replaceState({ action: "init" }, null);
