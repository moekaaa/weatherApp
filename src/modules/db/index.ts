import { prisma } from "../../lib/prisma"

export const addTodoItem = async (todoText: string) => {
    return await prisma.todo.create({
        data: {
            todoText: todoText,
            isDone: false,
            createdAt: new Date(),
        }
    }) 
}