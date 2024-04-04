import { prisma } from '../../lib/prisma';
import { TODO } from '../../types';

const localStorageKey = import.meta.env.VITE_LOCALSTORAGE_TODOLIST_KEY;

export const getTodoItemList = async () => {
  const data = await JSON.parse(localStorage.getItem(localStorageKey) || '[]');
  return data;
};

export const addTodoItem = async (newData: TODO[]) => {
  const jsonData = JSON.stringify(newData);

  localStorage.setItem(localStorageKey, jsonData);

  return newData;

  // This is for prisma operation
  // return await prisma.todo.create({
  //     data: {
  //         todoText: todoText,
  //         isDone: false,
  //         createdAt: new Date(),
  //     }
  // })
};

export const removeTodoItem = async (id: string) => {
  const prevData = (await getTodoItemList()) as TODO[];
  const filteredData = prevData.filter((data) => data.id !== id);
  await addTodoItem(filteredData);
  return filteredData;
};

export const addMember = async () => {
  const data = await JSON.parse(localStorage.getItem(localStorageKey) || '[]');
  return data;
};

export const getMember = async (todoText: string) => {
  const data = {
    id: new Date().getTime().toString(),
    todoText: todoText,
    isDone: false,
    createdAt: new Date(),
  };
  const prevData = await getTodoItemList();
  const newData = [...prevData, data];
  const jsonData = JSON.stringify(newData);

  localStorage.setItem(localStorageKey, jsonData);

  return newData;

  // This is for prisma operation
  // return await prisma.todo.create({
  //     data: {
  //         todoText: todoText,
  //         isDone: false,
  //         createdAt: new Date(),
  //     }
  // })
};
