import { Link } from "@nextui-org/react"

export const Footer = () => {
  return (
    <footer className='bg-black p-6 flex justify-end'>
      <section className='flex gap-1'>
        <p className='text-sm text-slate-200'>Designed and developed by: </p>
        <Link className='text-sm text-yellow-500' href='https://www.sergiozabala.dev' target='_blank'>@Kyubiful</Link>
      </section>
    </footer>
  )
}