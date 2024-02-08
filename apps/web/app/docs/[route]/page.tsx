const Docs: App.Page = ({ params }) => {
  return (
    <main className="bg-secondary flex h-[4000px] w-full flex-col items-center justify-between overflow-y-auto p-12">
      <p>{params.route}</p>
    </main>
  )
}

export default Docs
