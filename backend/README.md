# Backend - Clothing E-commerce (MERN)

## Setup
1. Copy `.env.example` to `.env` and fill values (MONGO_URI, JWT_SECRET, EMAIL_USER, EMAIL_PASS)
2. Install dependencies:
   ```
   npm install
   ```
3. Seed products (optional):
   ```
   npm run seed
   ```
4. Start server:
   ```
   npm run dev
   ```

APIs:
- POST /api/auth/register
- POST /api/auth/login
- GET /api/products
- GET /api/products/:id
- GET /api/cart  (requires cookie JWT)
- POST /api/cart/add (requires cookie JWT)
- POST /api/orders (requires cookie JWT)

