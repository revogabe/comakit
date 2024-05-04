import { redirect } from 'next/navigation'

const DocsHome: App.Page = ({ params }) => {
  redirect('/docs/installation')
}

export default DocsHome
