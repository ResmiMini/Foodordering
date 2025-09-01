# React + Vite

a Food Ordering System built with React.
The idea behind this project is to simplify the way customers order food online. Instead of going through traditional methods, users can browse, search, and order their favorite dishes with just a few clicks.

USERS 
admin and user

FEATURES 

My project has the following key features:

A Home Page where all food items are displayed with images, names, and prices.

A Search option where users can find dishes by name or category. If a dish doesn’t exist, the app shows “Not Found”.

A Cart system where users can add items, increase or decrease quantity, and see the subtotal and total.

A Remove button to completely delete an item from the cart.

A Checkout flow that checks if the user is logged in:

If logged in → navigates to Home after placing the order.

If not logged in → navigates to Login page.

An Admin Panel where the admin can add new dishes with name, price, category, and image. These are stored locally in menu.json.

Login/Logout system with UserContext to manage authentication.

TECHNOLOGY STACK 

The project is built using:

React for the frontend.

Tailwind CSS for responsive design and modern UI.

React Router for navigation.

Context API for managing login state across pages.

Local JSON files to simulate backend storage for menu items and users.

SYSTEM FLOW

The flow of the system is simple:

A user visits the Home Page and browses available dishes.

They can search and add items to the Cart.

From the cart, they can adjust quantity or remove items.

On clicking Checkout, the app checks if the user is logged in.

If yes, the order is placed, and they’re redirected to the home page.

If not, they’re redirected to the Login Page.

The Admin has a separate page to add new dishes to the menu.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
