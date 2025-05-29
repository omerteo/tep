"use server"

import { revalidatePath } from "next/cache"
import { db } from "@/lib/db"
import { QuestionFormSchema } from "./types"
import { auth } from "@/auth"


// Create a new item
export async function addItem(formData: FormData, initialState: any) {

  const validatedFields = QuestionFormSchema.safeParse({
    text: formData.get('text'),
  })
  console.log("validatedFields", validatedFields)

  if (!validatedFields.success) {
    console.error("Validation failed:", validatedFields.error)
    throw new Error("Validation failed")
  }

  const user = await auth()
  console.log("user", user)

  try {
    await db.question.create({
      data: {
        text: validatedFields.data.text,
        createdBy: user?.user?.email || "anonymous",
        createdAt: new Date()
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
    const items = await db.question.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    return items
  } catch (error) {
    console.error("Failed to fetch items:", error)
    return []
  }
}



// // Delete an item
export async function deleteItem(id: string) {
  try {
    await db.question.delete({
      where: { id },
    })

    revalidatePath("/")
    return { success: true, message: "Item deleted successfully" }
  } catch (error) {
    console.error("Failed to delete item:", error)
    throw new Error("Failed to delete item")
  }
}
