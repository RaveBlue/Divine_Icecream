const { createUser } = require("./Users");
const { createProduct } = require("../components/Products");
const { createReviews } = require("./reviews");
const { createShoppingCart } = require("../components/Shopping_Cart");
const { addItemsToCart } = require("./shopping_cartitems");
const client = require("./client");

async function dropTables() {
  try{
    console.log("Dropping All Tables...")
    await client.query(`DROP TABLE IF EXISTS products;`)
    await client.query(`DROP TABLE IF EXISTS orders;`)
    await client.query(`DROP TABLE IF EXISTS order_items;`)
    await client.query(`DROP TABLE IF EXISTS shopping_cart;`)
    await client.query(`DROP TABLE IF EXISTS reviews;`)
    await client.query(`DROP TABLE IF EXISTS users;`)
  } catch(error){
    throw new Error(error)
  }
}
//drop all tables, in the correct order

async function createTables() {
  console.log("Starting to build tables...")
  try{
    //create all tables, in the correct order
    await client.query(`
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      firstname VARCHAR(255) NOT NULL,
      lastname VARCHAR(255) NOT NULL,
      street VARCHAR(255) NOT NULL,
      city VARCHAR(255) NOT NULL,
      state VARCHAR(255) NOT NULL,
      zip VARCHAR(255) NOT NULL,
      phone VARCHAR(255) NOT NUll, 
      isadmin BOOLEAN DEFAULT FALSE

    );
  `)
  await client.query(`
  CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    image_url TEXT
    
  );
  INSERT INTO products (product_name, description, price, image_url) VALUES 
   ('Strawberry Chocolate', 'Vanilla ice cream swirled with strawberry sauce and swirls of chocolate.', 4.85, 'https://example.com/images/strawberry_chocolate.jpg'),
   ('Choco-loco', 'Chocolate ice cream with fudge swirls and chocolate chunks.', 4.75, 'https://example.com/images/choco_loco.jpg'),
   ('Blue Mint Chip', 'Mint ice cream with blue thin chocolate pieces and blue coloring.', 4.98, 'https://example.com/images/blue_mint_chip.jpg'),
   ('Cookies and Cream', 'Vanilla ice cream with cookie pieces.', 3.99, 'https://example.com/images/cookies_and_cream.jpg'),
   ('Green Tea', 'Green tea flavored ice cream.', 4.50, 'https://example.com/images/green_tea.jpg'),
   ('Peanut Butter Swirl', 'Vanilla ice cream with peanut butter swirls.', 4.99, 'https://example.com/images/peanut_butter_swirl.jpg'),
   ('Cake', 'Cake-flavored ice cream with sprinkles.', 4.00, 'https:/ ')
`)
  await client.query(`
  CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(user_id),
    order_date TIMESTAMP NOT NULL,
    total_price NUMERIC(10, 2) NOT NULL,
    transactioncomplete BOOLEAN DEFAULT FALSE
  );
`)
   await client.query(`
   CREATE TABLE order_items(
    order_item_id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL REFERENCES orders(order_id),
    product_id INTEGER NOT NULL REFERENCES products(product_id),
    quantity INTEGER NOT NULL, 
    price NUMERIC(10, 2) NOT NULL
   );
`)
   await client.query(`
   CREATE TABLE shopping_cart(
    cart_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    product_id INTEGER REFERENCES products(product_id),
    quantity INTEGER NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    added_at TIMESTAMP DEFAULT NOW()
   );
`)


   await client.query(`
   CREATE TABLE reviews(
    review_id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(product_id),
    user_id INTEGER REFERENCES users(user_id),
    rating INTEGER NOT NULL,
    comment TEXT,
    created_at TIMESTAMP DEFAULT NOW()
   ); 

   INSERT INTO reviews (product_id, user_id, rating, comment) VALUES
   (1, 1, 5, 'This strawberry chocolate ice cream is amazing!'),
   (2, 2, 4, 'I really enjoyed the choco-loco flavor, I love chocolate.'),
   (3, 3, 3, 'The blue mint chip was very good, and refreshing!'),
   (4, 1, 5, 'Cookies and cream is my go-to flavor!'),
   (5, 4, 4, 'The green tea flavor was unique and refreshing.'),
   (6, 5, 5, 'The peanut butter swirl was so delicious.'),
   (7, 2, 3, 'The cake flavor was very good, tastes just like ice cream cake!');

`),
console.log('finished creating the tables')
} catch (error) {
  console.log(error)
 }
};
