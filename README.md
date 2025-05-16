# chainable - AI-Powered C2C Fulfilment

**Smarter returns through direct customer-to-customer shipping.**

Chainable connects customers who want to return a product (customer A) with other customers who want to buy the exact same item (customer B). The product is shipped directly from customer A to B. Custoemr B receives a discount, while the platform eliminates warehouse and logistics costs. AI handles the matching, and Stripe Connect secures the payment via escrow.

---

## 📦 Core Features (MVP)

- Return registration by Customer A
- AI-assisted matching with Customer B
- Product listing of available returns
- Escrow payment (via Stripe Connect)
- Shipping label generation (via Sendcloud)
- Delivery tracking + automatic escrow release
- Basic review & dispute system

---

## ⚙️ Tech Stack

| Component       | Technology                           |
|----------------|---------------------------------------|
| Frontend        | Next.js + Tailwind CSS                |
| Backend API     | Node.js + Express (optional: tRPC)   |
| AI Matching     | Python + FastAPI + FAISS/PostGIS     |
| Database        | Supabase (PostgreSQL + Auth)         |
| Payments        | Stripe Connect (Escrow)              |
| Shipping        | Sendcloud API                        |


