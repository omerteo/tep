"use server"

import { revalidatePath } from "next/cache"
import { db } from "./db"
 
    import { Questionnaire } from "@prisma/client"

// Create a new item
export async function createItem(data: Questionnaire) {
  try {
    await db.questionnaire.create({
      data: {
        title: data.title,
        description: data.description,
      },
    })

    revalidatePath("/")
    return { success: true }
  } catch (error) {
    console.error("Failed to create item:", error)
    throw new Error("Failed to create item")
  }
}

// Get all items
export async function getItems() {
  try {
    const items = await db.questionSet.findMany()

    return items
  } catch (error) {
    console.error("Failed to fetch items:", error)
    return []
  }
}

// Update an item
export async function updateItem(id: string, data: ItemFormValues) {
  try {
    await db.questionSet.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description,
      },
    })

    revalidatePath("/")
    return { success: true }
  } catch (error) {
    console.error("Failed to update item:", error)
    throw new Error("Failed to update item")
  }
}

// Delete an item
export async function deleteItem(id: string) {
  try {
    await db.questionSet.delete({
      where: { id },
    })

    revalidatePath("/")
    return { success: true }
  } catch (error) {
    console.error("Failed to delete item:", error)
    throw new Error("Failed to delete item")
  }
}
