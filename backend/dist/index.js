"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const auth_1 = require("./routes/auth");
const quote_1 = require("./routes/quote");
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/auth", auth_1.authRouter);
app.use("/quote", quote_1.quoteRouter);
app.get("/", (req, res) => {
    res.send("HELLO FROM EXPRESS");
});
mongoose_1.default.connect("mongodb+srv://admin:Password99@automobile-insurance.sqpr0vj.mongodb.net/automobile-insurance?retryWrites=true&w=majority");
app.listen(port, () => console.log("server started"));
