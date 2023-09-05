import express, { Router } from 'express';


import {register, login, addTodo, getAllTodos, toggleTodoDone, updateTodo, deleteTodo } from '../controller/controller.js';

const route = express.Router();




route.post("/register", register);
route.post("/login", login);

route.post('/todos', addTodo)
route.get('/todos', getAllTodos);
route.get('/todos/:id', toggleTodoDone);
route.put('/todos/:id', updateTodo);
route.delete('/todos/:id', deleteTodo);


export default route;