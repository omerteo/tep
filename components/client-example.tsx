"use client"

import { useSession } from "next-auth/react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react"
import SessionData from "./session-data"


const UpdateForm = () => {
  const { data: session, update } = useSession()
  const [name, setName] = useState(`New ${session?.user?.name}`)

  if (!session?.user) return null
  return (
    <>
      <h2 className="text-xl font-bold">Updating the session client-side</h2>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          placeholder="New name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <Button onClick={() => update({ user: { name } })} type="submit">
          Update
        </Button>
      </div>
    </>
  )
}

export default function ClientExample() {
  const { data: session, status } = useSession()
  // const [apiResponse, setApiResponse] = useState("")

  // const makeRequestWithToken = async () => {
  //   try {
  //     const response = await fetch("/api/authenticated/greeting")
  //     const data = await response.json()
  //     setApiResponse(JSON.stringify(data, null, 2))
  //   } catch (error) {
  //     setApiResponse("Failed to fetch data: " + error)
  //   }
  // }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Client Side Rendering</h1>


      {status === "loading" ? (
        <div>Loading...</div>
      ) : (
        <SessionData session={session} />
      )}
      <UpdateForm />
    </div>
  )
}
