import prisma from "@/prisma/prisma"


export default async function Page() {
    const questionSets = await prisma.questionnaire.findMany({   
   
})
  return (
    <>
      <div className="drawer-content flex h-full flex-col p-4">Questionnaires</div>
        <div className="overflow-x-auto">
            <table className="table w-full">
            <thead>
                <tr>
                <th>title</th>
                <th>description</th>
                </tr>
            </thead>
            <tbody>
                {questionSets.map((questionSet) => (
                <tr key={questionSet.id}>
                    <td>{questionSet.title}</td>
                    <td>{questionSet.description}</td>
                </tr>
                ))}
            </tbody>
            </table> 
        </div>
    </>
  )
}
