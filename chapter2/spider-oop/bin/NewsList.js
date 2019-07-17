"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Spider_1 = __importDefault(require("./Spider"));
class NewsList extends Spider_1.default {
    onCatchHTML(result) {
        console.log(JSON.parse(result));
    }
}
exports.default = NewsList;
