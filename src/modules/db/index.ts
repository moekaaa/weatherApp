import { prisma } from "../../lib/prisma"

const localStorageKey = import.meta.env.VITE_LOCALSTORAGE_TODOLIST_KEY

export const getTodoItem = async () => {
    const data = await JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    return data
}

export const addTodoItem = async (todoText: string) => {
    const data = {
        id: new Date().getTime().toString(),
        todoText: todoText,
        isDone: false,
        createdAt: new Date(),
    }
    const prevData = await getTodoItem()
    const newData = [...prevData, data]
    const jsonData = JSON.stringify(newData)

    localStorage.setItem(localStorageKey, jsonData)

    return newData

    // This is for prisma operation
    // return await prisma.todo.create({
    //     data: {
    //         todoText: todoText,
    //         isDone: false,
    //         createdAt: new Date(),
    //     }
    // }) 
}