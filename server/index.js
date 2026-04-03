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
import KPI from "./models/KPI.js";                      // One time used
// import { kpis } from "./data/data.js";

// Setup 03 : Import product to dashboard
import productRoutes from "./routes/product.js";
import Product from "./models/Product.js";              // One time used
// import { kpis, products } from "./data/data.js";

// Setup 04 : Import transaction to dashboard
import transactionRoutes from "./routes/transaction.js";
import Transaction from "./models/Transaction.js";   // One time used
import { kpis, products, transactions } from "./data/data.js";

/* Setup 01 :CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// ***Solve cann't render
// app.use(cors());
app.use(cors({
  origin: "*"
}));


// Test run : Setup 01
// console.log("Server run")


// Setup 02 : kpi
// /* ROUTES */
app.use("/kpi", kpiRoutes);
// Setup 03 : product
app.use("/product", productRoutes);
// Setup 03 : transaction
app.use("/transaction", transactionRoutes);


// /* Setup 01-1 : MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;                  // 9000 is backup PORT when presently failed to connect
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

    /* ADD DATA ONE TIME ONLY OR AS NEEDED */
    // await mongoose.connection.db.dropDatabase();     // Add 01 : Use to clear(drop down) data in database
    // KPI.insertMany(kpis);                            // Add 02
    // Product.insertMany(products);                    // Add 03
    // Transaction.insertMany(transactions);            // Add 04
  })
  .catch((error) => console.log(`${error} did not connect`));
