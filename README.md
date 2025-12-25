# E-Commerce Platform - Full Stack MERN Application

A production-ready full-stack e-commerce platform built with the MERN stack, featuring Stripe payment integration and a complete admin dashboard.

## 🚀 Features

### User Features
- **Authentication & Authorization**: JWT-based authentication with role-based access control
- **Product Browsing**: Search, filter, and paginate through products
- **Shopping Cart**: Add/remove items with localStorage persistence
- **Secure Checkout**: Stripe payment integration for secure transactions
- **Order Management**: View order history and track order status

### Admin Features
- **Product Management**: Full CRUD operations for products
- **Order Management**: View all orders and update order statuses
- **Dashboard**: Overview of revenue, products, and orders

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- Redux Toolkit for state management
- React Router for navigation
- Tailwind CSS for styling
- Stripe.js for payment processing
- Axios for API calls

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JWT for authentication
- Stripe API for payments
- bcrypt for password hashing
- express-validator for input validation

## 📁 Project Structure

```
ecom/
├── server/                 # Backend
│   ├── config/            # Database configuration
│   ├── controllers/       # Route controllers
│   ├── middlewares/       # Custom middleware
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── utils/             # Utility functions
│   └── server.js          # Entry point
│
└── client/                # Frontend
    ├── public/
    └── src/
        ├── components/    # Reusable components
        ├── pages/         # Page components
        ├── redux/         # Redux store & slices
        ├── services/      # API services
        ├── hooks/         # Custom hooks
        └── App.jsx        # Main app component
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Stripe account

### Backend Setup

1. Navigate to server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_URL=http://localhost:5173
```

4. Start the server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
VITE_API_URL=http://localhost:5000
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

4. Start the development server:
```bash
npm run dev
```

## 🔐 Environment Variables

### Backend (.env)
- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `STRIPE_SECRET_KEY`: Stripe secret API key
- `CLIENT_URL`: Frontend URL for CORS
- `PORT`: Server port (default: 5000)

### Frontend (.env)
- `VITE_API_URL`: Backend API URL
- `VITE_STRIPE_PUBLISHABLE_KEY`: Stripe publishable key

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (Protected)

### Products
- `GET /api/products` - Get all products (with filters)
- `GET /api/products/:id` - Get single product
- `POST /api/products/admin/products` - Create product (Admin)
- `PUT /api/products/admin/products/:id` - Update product (Admin)
- `DELETE /api/products/admin/products/:id` - Delete product (Admin)

### Orders
- `POST /api/orders` - Create order (Protected)
- `GET /api/orders/my-orders` - Get user orders (Protected)
- `GET /api/orders/:id` - Get single order (Protected)
- `GET /api/orders/admin/orders` - Get all orders (Admin)
- `PUT /api/orders/admin/orders/:id` - Update order status (Admin)

### Payments
- `POST /api/payments/create-payment-intent` - Create Stripe payment intent (Protected)

## 🧪 Testing

### Test Stripe Payment
Use Stripe test card numbers:
- Card: `4242 4242 4242 4242`
- Expiry: Any future date
- CVC: Any 3 digits
- ZIP: Any 5 digits

## 🚀 Deployment

### Backend (Render)
1. Create new Web Service on Render
2. Connect your GitHub repository
3. Add environment variables
4. Deploy

### Frontend (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Add environment variables

### Database (MongoDB Atlas)
1. Create a cluster on MongoDB Atlas
2. Whitelist IP addresses
3. Get connection string

## 👥 Default Admin Account

To create an admin account, register a user and manually update the role in MongoDB:
```javascript
db.users.updateOne(
  { email: "admin@example.com" },
  { $set: { role: "admin" } }
)
```

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For any questions or support, please contact the development team.
