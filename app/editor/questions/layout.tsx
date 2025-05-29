
export default async function Layout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <div className="drawer-content flex h-full flex-col p-4">{children}</div>
    </>
  )
}
