<!-- Business Feature Architecture -->

## Business Feature Architecture

### Struktur folder
```bash
├── src/
│ ├── constants
│ ├── features
│ │ ├── user/
│ │ │ ├── controllers/
│ │ │ ├── services/
│ │ │ ├── repository/
│ │ │ ├── models/
│ │ │ ├── routes/
│ │ │ └── [feature_name].ts
│ │ ├── product/
│ │ │ ├── controllers/
│ │ │ ├── services/
│ │ │ ├── repository/
│ │ │ ├── models/
│ │ │ ├── routes/
│ │ │ └── [feature_name].ts
│ ├── middlewares/
│ │ ├── validationMiddleware.ts
│ │ ├── errorHandlers.ts
│ ├── config/
│ │ ├── prisma.ts
│ │ ├── mailer.ts
│ │ ├── index.ts
│ ├── app.ts
│ ├── server.ts
├── prisma/
│ ├── migrations/
│ ├── schema.prisma
│ └── seed.ts
├── tsconfig.json
├── package.json
├── pull_db.sh
├── .env
└── README.md
```

### Cara Menggunakan
```bash
cd express-prisma-architecture
cp .env.example .env
npm install
npm run dev
```

[TODO] : Penjelasakan struktur folder
