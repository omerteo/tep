"use client"

export default function DeleteButton({
    id,
    action,
}: {
    id: string,
    action: (id: string) => Promise<{ message: string, success: boolean, errors?: Record<string, string[]> }>
}) {
    const handleDelete = async () => {
        if (confirm("Are you sure you want to delete this item?")) {
            await action(id)
        }
    }

    return (
        <button
            className="btn btn-error btn-sm"
            onClick={handleDelete}
        >
            Delete
        </button>
    )
}