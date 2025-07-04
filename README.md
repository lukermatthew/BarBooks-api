📦 Order Summary API
A simple backend service for managing orders and generating summary statistics including total revenue, median order price, most sold product, and unique product count.

🔧 Tech Stack
Backend: Node.js, Express

Database: SQLite (via better-sqlite3)

Testing: Jest

Configuration: .env file for environment variables

📁 Project Structure
bash
Copy
Edit
.
├── src/
│ ├── server.ts # Main Express server
│ └── summarizeOrders.ts # Business logic to summarize orders
│
├── db/
│ ├── schema.sql # Database schema
│ └── seed.ts # Seed script for mock data
│
├── test/
│ └── summarizeOrders.test.ts # Unit tests for summarizeOrders
│
├── .env # Environment variables
├── jest.config.js # Jest configuration
├── package.json
└── README.md

📦 Installation

1. Clone the repository:
   bash
   Copy
   Edit
   git clone https://github.com/lukermatthew/BarBooks.git
   cd BarBooks

2. Install dependencies:
   bash
   Copy
   Edit
   npm install

3. Set up environment variables:

Create a .env file in the root:
ini
Copy
Edit
PORT=3000
DB_PATH=./data.db

🚀 Running the Server
bash
Copy
Edit
npx ts-node src/server.ts
Or compile with TypeScript and run:

bash
Copy
Edit
npx tsc
node dist/server.js
Server will be available at:
👉 http://localhost:3000

🧪 Running Tests
bash
Copy
Edit
npx jest
Make sure ts-jest is installed and configured.

👨‍💻 Author
Luker Matthew Tan
MIT License · GitHub
