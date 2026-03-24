// Setup 01 : Tools package
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

// Setup 02 : Import dashboard data and function with KPI
import kpiRoutes from "./routes/kpi.js";
import KPI from "./models/KPI.js";
import { kpis } from "./data/data.js";

// import productRoutes from "./routes/product.js";
// import transactionRoutes from "./routes/transaction.js";
// import Product from "./models/Product.js";
// import Transaction from "./models/Transaction.js";
// import { kpis, products, transactions } from "./data/data.js";

/* Setup 01 :CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


// Test run : Setup 01
// console.log("Server run")


// Setup 02 : kpi, product, transaction
// /* ROUTES */
app.use("/kpi", kpiRoutes);
// app.use("/product", productRoutes);
// app.use("/transaction", transactionRoutes);


// /* Setup 01-1 : MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;                  // 9000 is backup PORT when presently failed to connect
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME ONLY OR AS NEEDED */
    // await mongoose.connection.db.dropDatabase();     // Add 01
    // KPI.insertMany(kpis);                            // Add 02
    // Product.insertMany(products);
    // Transaction.insertMany(transactions);
  })
  .catch((error) => console.log(`${error} did not connect`));
