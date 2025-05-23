import SessionData from "@/components/session-data"
import { auth } from "@/auth"
import { SignIn, SignOut } from "@/components/auth-components";

export default async function Page() {
  const session = await auth()
  const base = "https://apitoss.teo-intl.com" ; // "https://irp-5-toss-identity.teo-intl.com"
  const url = base + "/api/EmployeeAttendance/Employees"

   console.log("session", session?.accessToken)

  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
      "Content-Type": "application/json",
    },
  })
  console.log("res", res)
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">React Server Component Usage</h1>
      
      <SessionData session={session} />

      <SignOut>Out</SignOut>

      <SignIn>In</SignIn>
    </div>
  )
}
