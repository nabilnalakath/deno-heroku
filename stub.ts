import { v4 } from "https://deno.land/std/uuid/mod.ts";


let todos = [
  {
    id: v4.generate(),
    todo: 'Eat Breakfast',
    isCompleted: true,
  },
  {
    id: v4.generate(),
    todo: 'Eat Lunch',
    isCompleted: false,
  },
  {
    id: v4.generate(),
    todo: 'Eat Dinner',
    isCompleted: true,
  },
  {
    id: v4.generate(),
    todo: 'Do dishes',
    isCompleted: false,
  }
];

export default todos;