import { Coordinate } from "./restaurant.js";

const MODEL = Symbol("RestaurantModel");
const VIEW = Symbol("RestaurantView");
const LOAD_RESTAURANT_OBJECTS = Symbol('Load Restaurant Objects');


class RestaurantController{
    constructor(model, view){
        this[MODEL] = model;
        this[VIEW] = view;

        this.onLoad();
        this.onInit();

        this[VIEW].bindInit(this.handleInit);
    }

    [LOAD_RESTAURANT_OBJECTS]() {
        const category1 = this[MODEL].createCategory('Hamburguesas', 'Mejores hamburguesas para todos los gustos');
        const category2 = this[MODEL].createCategory('Pizzas', 'Pizzas de todos los sabores');
        const category3 = this[MODEL].createCategory('Baguettes', 'Baguettes para todo el mundo');

        category1.url = "img/burger.jpg";
        category2.url = "img/pizza.jpg";
        category3.url = "img/baguette.jpg";
    
        this[MODEL].addCategory(category1, category2, category3);

        const dish1 = this[MODEL].createDish("Pizza jamón", "Pizza mediana de jamón york - 5€", ["Jamón York", "Pan", "Queso"], "img/pizza1.jpg");
        const dish2 = this[MODEL].createDish("Pizza bacon", "Pizza mediana de bacon y cebolla - 6€", ["Bacon","Cebolla", "Pan", "Queso"], "img/pizza2.jpg");
        const dish3 = this[MODEL].createDish("Pizza Ternera", "Pizza mediana de ternera y cebolla - 6,5€", ["Ternera","Cebolla", "Pan", "Queso"], "img/pizza3.jpg");
        const dish4 = this[MODEL].createDish("Hamburguesa doble", "Hamburguesa con doble carne - 4,5€", ["Ternera", "Pan", "Queso", "Cebolla"], "img/burger1.png");
        const dish5 = this[MODEL].createDish("Hamburguesa huevo", "Hamburguesa con huevo - 4€", ["Ternera", "Pan", "Huevo", "Cebolla"], "img/burger2.jpg");
        const dish6 = this[MODEL].createDish("Hamburguesa completa", "Hamburguesa ingredientes varios - 5,5€", ["Ternera", "Tomate", "Pan", "Queso", "Cebolla", "Huevo"], "img/burger3.jpg");
        const dish7 = this[MODEL].createDish("Baguette vegetal", "Baguette hecha de vegetales - 3€", ["Lechuga","Tomate","Maíz", "Pan", "Queso"], "img/baguette1.jpg");
        const dish8 = this[MODEL].createDish("Baguette bacon queso", "Baguette bacon/queso - 4€", ["Pan","Bacon","Queso"], "img/baguette2.jpg");
        const dish9 = this[MODEL].createDish("Baguette calamares", "Baguette de calamares - 4€", ["Pan", "Calamares", "Queso"], "img/baguette3.jpg");
        const dish10 = this[MODEL].createDish("Pizza 4 Quesos", "Pizza mediana de 4 quesos distintos - 6€", ["Pan", "Queso"], "img/pizza4.jpg");
        const dish11 = this[MODEL].createDish("Hamburguesa ciervo", "Hamburguesa con carne de ciervo - 5,5€", ["Carne de ciervo", "Pan", "Queso", "Cebolla"], "img/burger4.jpg");
        const dish12 = this[MODEL].createDish("Baguette lomo", "Baguette de lomo a la plancha - 4€", ["Tomate","Lomo", "Pan", "Queso"], "img/baguette4.jpg");



        this[MODEL].addDish(dish1, dish2, dish3, dish4, dish5, dish6, dish7, dish8, dish9, dish10, dish11, dish12);


        this[MODEL].assignCategoryToDish(dish1, category2);
        this[MODEL].assignCategoryToDish(dish2, category2);
        this[MODEL].assignCategoryToDish(dish3, category2);
        this[MODEL].assignCategoryToDish(dish10, category2);
        this[MODEL].assignCategoryToDish(dish4, category1);
        this[MODEL].assignCategoryToDish(dish5, category1);
        this[MODEL].assignCategoryToDish(dish6, category1);
        this[MODEL].assignCategoryToDish(dish11, category1);
        this[MODEL].assignCategoryToDish(dish7, category3);
        this[MODEL].assignCategoryToDish(dish8, category3);
        this[MODEL].assignCategoryToDish(dish9, category3);
        this[MODEL].assignCategoryToDish(dish12, category3);

        const allergen1 = this[MODEL].createAllergen("Gluten", "Alérgeno Gluten");
        const allergen2 = this[MODEL].createAllergen("Huevo", "Alérgeno Huevo");
        const allergen3 = this[MODEL].createAllergen("Lácteo", "Alérgeno Lácteo");
        const allergen4 = this[MODEL].createAllergen("Marisco", "Alérgeno Marisco");

        this[MODEL].addAllergen(allergen1, allergen2, allergen3, allergen4);

        this[MODEL].assignAllergenToDish(dish1, allergen1, allergen3);
        this[MODEL].assignAllergenToDish(dish2, allergen1, allergen3);
        this[MODEL].assignAllergenToDish(dish3, allergen1, allergen3);
        this[MODEL].assignAllergenToDish(dish4, allergen1, allergen3);
        this[MODEL].assignAllergenToDish(dish5, allergen1, allergen2);
        this[MODEL].assignAllergenToDish(dish6, allergen1, allergen3, allergen2);
        this[MODEL].assignAllergenToDish(dish7, allergen1, allergen3);
        this[MODEL].assignAllergenToDish(dish8, allergen1, allergen3);
        this[MODEL].assignAllergenToDish(dish9, allergen1, allergen3, allergen4);
        this[MODEL].assignAllergenToDish(dish10, allergen1, allergen3);
        this[MODEL].assignAllergenToDish(dish11, allergen1, allergen3);
        this[MODEL].assignAllergenToDish(dish12, allergen1, allergen3);


        const menu1 = this[MODEL].createMenu("PizzaAndFriends", "Pizzas escogidas para compartir en grupo");
        const menu2 = this[MODEL].createMenu("Burger4all", "Pizzas escodigas para compartir en grupo");
        const menu3 = this[MODEL].createMenu("PizzaBurger everywhere", "Mezcla de pizzas y hamburguesas para los grupos");

        this[MODEL].addMenu(menu1, menu2, menu3);

        this[MODEL].assignDishToMenu(menu1, dish1, dish2, dish3);
        this[MODEL].assignDishToMenu(menu2, dish4, dish5, dish6);
        this[MODEL].assignDishToMenu(menu3, dish5, dish7, dish9);

        const loc1 = new Coordinate(111,1);
        const loc2 = new Coordinate(222,2);
        const loc3 = new Coordinate(3,333);

        const rest1 = this[MODEL].createRestaurant("Bestaurant", "Mejor restaurante", loc1);
        const rest2 = this[MODEL].createRestaurant("Pizzaurant", "Pizzas a domicilio", loc2);
        const rest3 = this[MODEL].createRestaurant("Baguetterant", "Baguettes de todos los sabores", loc3);

        this[MODEL].addRestaurant(rest1, rest2, rest3);

    }

    onLoad = () => {
        this[LOAD_RESTAURANT_OBJECTS]();
        this.onAddCategory();
        this.onAddAllergen();
        this.onAddMenu();
        this.onAddRestaurant();
        this[VIEW].createWinCloser();
    };

    onInit = () => {
        this[VIEW].showCategories(this[MODEL].getterCategories());
        this[VIEW].bindProductsCategoryList(
            this.handleProductsCategoryList,
        );
        this[VIEW].showDishes(this[MODEL].getterDishes());
        this[VIEW].bindShowRandProduct(this.handleShowProduct);
    }

    handleInit = () => {
        this.onInit();
    }

    onAddCategory = () => {
        this[VIEW].showCategoriesInMenu(this[MODEL].getterCategories());
        this[VIEW].bindProductsCategoryListInMenu(
            this.handleProductsCategoryList,
        );
    };

    onAddAllergen = () => {
        this[VIEW].showAllergensInMenu(this[MODEL].getterAllergens());
        this[VIEW].bindProductsAllergenListInMenu(
            this.handleProductsAllergenList,
        );
    };

    onAddMenu = () => {
        this[VIEW].showMenusInMenu(this[MODEL].getterMenus());
        this[VIEW].bindProductsMenuListInMenu(
            this.handleProductsMenuList,
        );
    };

    onAddRestaurant = () => {
        this[VIEW].showRestaurantsInMenu(this[MODEL].getterRestaurants());
        this[VIEW].bindRestaurantsInMenu(
            this.handleRestaurant,
        );
    }

    handleProductsCategoryList = (name) => {
        const category = this[MODEL].createCategory(name, "");
        const dishes = this[MODEL].getDishesInCategory(category);
        this[VIEW].listProducts(dishes, category.name);

        this[VIEW].showDishes(this[MODEL].getterDishes());
        this[VIEW].bindShowRandProduct(this.handleShowProduct);

        this[VIEW].bindShowProduct(this.handleShowProduct);
    };

    handleShowProduct = (name) => {
        try {
          const product = this[MODEL].createDish(name, "","","");
          this[VIEW].showProduct(product);
          this[VIEW].bindShowProductInNewWindow(
            this.handleShowProductInNewWindow,
          );
        this[VIEW].closeWindows();

        } catch (error) {
          this[VIEW].showProduct(null, 'No existe este producto en la página.');
        }
    };

    handleShowProductInNewWindow = (name) => {
        try {
          const product = this[MODEL].createDish(name, "","","");
          this[VIEW].showProductInNewWindow(product);
        } catch (error) {
          this[VIEW].showProductInNewWindow(null, 'No existe este producto en la página.');
        }
    };

    handleProductsAllergenList = (name) => {
        const allergen = this[MODEL].createAllergen(name, "");
        this[VIEW].listProducts(this[MODEL].getDishesWithAllergen(allergen), allergen.name);
        this[VIEW].bindShowProduct(this.handleShowProduct);
    };

    handleProductsMenuList = (name) => {
        const menu = this[MODEL].createMenu(name, "");
        this[VIEW].listProductsMenu(this[MODEL].getDishesInMenu(menu.name), menu.name);
        this[VIEW].bindShowProduct(this.handleShowProduct);
    };

    handleRestaurant = (name) => {
        const rest = this[MODEL].createRestaurant(name, "", new Coordinate(1,1));
        this[VIEW].showRestaurant(rest, rest.name);
    };
        
}

export default RestaurantController;