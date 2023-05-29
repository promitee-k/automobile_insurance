"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const auth_1 = require("./routes/auth");
const quote_1 = require("./routes/quote");
const Automobiles_1 = require("./models/Automobiles");
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/auth", auth_1.authRouter);
app.use("/quote", quote_1.quoteRouter);
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let automobiles = yield Automobiles_1.AutoMobileModel.find();
    res.send(automobiles).status(200);
}));
mongoose_1.default.connect("mongodb+srv://admin:Password99@automobile-insurance.sqpr0vj.mongodb.net/automobile-insurance?retryWrites=true&w=majority");
app.listen(port, () => console.log("server started"));
