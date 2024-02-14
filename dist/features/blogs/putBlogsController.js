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
Object.defineProperty(exports, "__esModule", { value: true });
exports.putBlogsController = void 0;
const mongodb_1 = require("mongodb");
const blogsMongoRepository_1 = require("./blogsMongoRepository");
const putBlogsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const foundBlog =  await blogsRepository.findBlog(req.params.id);
    // if(!foundBlog) {
    //     res.sendStatus(404);
    //     return;
    // }
    //
    // await blogsRepository.updateBlog(foundBlog, req.body);
    // res
    //     .status(204)
    //     .send(foundBlog);
    yield blogsMongoRepository_1.blogsMongoRepository.updateBlog(new mongodb_1.ObjectId(req.params.id), req.body);
    const foundBlog = yield blogsMongoRepository_1.blogsMongoRepository.find(new mongodb_1.ObjectId(req.params.id));
    res
        .status(204)
        .send(foundBlog);
});
exports.putBlogsController = putBlogsController;
