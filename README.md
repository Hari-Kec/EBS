
# 💼 Enterprise Billing System

A robust full-stack **enterprise billing and invoicing solution** built with a modern tech stack:

* ⚙️ **Node.js + Express + Drizzle ORM** for backend
* 🎨 **React + Tailwind CSS + Firebase** for frontend
* 🧾 Features modules like Invoices, Purchase Orders, Projects, Inventory, Sales, Credit Notes, Estimates, Journals, and more.

> **Live repo**: [Enterprise\_Billing\_System](https://enterprise-billing-app.netlify.app/)

---

## 📁 Project Structure

```bash
Enterprise_Billing_System/
├── Server/                  # Backend
│   ├── drizzle/             # Drizzle ORM setup
│   ├── routes/              # REST API routes for all modules
│   ├── .env                 # Environment variables
│   ├── Index.js             # Express entry point
│   └── drizzle.config.js
│
├── tally/                   # Frontend
│   ├── src/
│   │   ├── components/      # Modular UI components (Bills, Invoice, Reports, etc.)
│   │   ├── assets/          # Logos and static files
│   │   ├── login/           # Auth (Firebase)
│   ├── index.html
│   └── tailwind.config.js
│
├── Enterprise Billing System Documentation.pdf
└── README.md
```

---

## 🚀 Features

### ✅ General

* Modular UI for different billing modules
* Responsive, modern design with TailwindCSS
* Centralized project documentation PDF

### 🧾 Billing Modules

* Invoices & Invoice PDF export
* Purchase Orders & Estimates
* Bills & Credit Notes
* Inventory & Items
* Sales Orders & Delivery Challans
* Customer & Vendor Management
* Projects and Journals
* Reports and Dashboards
* Salesperson tracking

### 🔐 Authentication

* Firebase-based login/signup
* Role-based access supported (can be extended)

---

## ⚙️ Tech Stack

| Layer    | Technologies                                                              |
| -------- | ------------------------------------------------------------------------- |
| Frontend | React, Vite, Tailwind CSS, MUI, Chart.js, React Router, Firebase Auth     |
| Backend  | Node.js, Express, Drizzle ORM, PostgreSQL / MySQL (via Neon / Serverless) |
| ORM/DB   | Drizzle ORM, PostgreSQL, MySQL2                                           |
| Extras   | PDF Export (jspdf), Excel Export (xlsx), Email Support (Nodemailer)       |

---

## 📦 Setup Instructions

### 🖥 Backend (Server)

1. Navigate to `Server/` and install dependencies:

```bash
cd Server
npm install
```

2. Configure `.env` file:

```env
DATABASE_URL=your_database_url
EMAIL_USER=your_email
EMAIL_PASS=your_password
```

3. Run database migrations:

```bash
npm run migrate
```

4. Start backend:

```bash
npm run dev
```

---

### 🌐 Frontend (Tally)

1. Navigate to `tally/` and install dependencies:

```bash
cd tally
npm install
```

2. Start frontend:

```bash
npm run dev
```

3. Open in browser:

```
http://localhost:5173
```

---

## 📄 API Modules (Backend)

| Route Path       | Description                |
| ---------------- | -------------------------- |
| `/bills`         | Bills CRUD                 |
| `/creditNotes`   | Manage credit notes        |
| `/customers`     | Customer profiles          |
| `/estimates`     | Estimations and quotes     |
| `/inventory`     | Inventory stock management |
| `/invoice`       | Invoice generation         |
| `/items`         | Product/service items      |
| `/journals`      | Financial journals         |
| `/projects`      | Project cost tracking      |
| `/purchaseorder` | Purchase orders            |
| `/salesOrder`    | Sales orders               |
| `/salesperson`   | Sales agent tracking       |
| `/users`         | User accounts              |
| `/vendors`       | Vendor details             |

---

## 📊 UI Highlights

* 📈 Dashboard with charts (`@mui/x-charts`, `chart.js`)
* 📂 Sidebar navigation across all modules
* 📄 Export to PDF and Excel (Invoices, Purchase Orders)
* 🔔 Toast notifications using `react-toastify`
* 🧭 Smooth routing with `react-router-dom`

---

## 📚 Documentation

📌 Detailed project design, ER diagrams, module interactions and screenshots are available in
[`Enterprise Billing System Documentation.pdf`](./Enterprise%20Billing%20System%20Documentation.pdf)







