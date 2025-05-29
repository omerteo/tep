import { Form } from "./form"
import DeleteButton from "@/components/delete-button"
import { deleteItem, getItems } from "./actions"


export default async function Page() {
  const questions = await getItems().catch((error) => {
    console.error("Failed to fetch items:", error)
    return []
   
})
  return (
    <>
      <Form />
      <div className="drawer-content flex h-full flex-col p-4">Questions</div>
        <div className="overflow-x-auto">
            <table className="table w-full">
            <thead>
                <tr>
                <th>title</th>
                </tr>
            </thead>
            <tbody>
                {questions.map((item) => (
                <tr key={item.id}>
                    <td>{item.text}<DeleteButton id={item.id} action={deleteItem} /> </td>
                </tr>
                ))}
            </tbody>
            </table> 
        </div>
    </>
  )
}
