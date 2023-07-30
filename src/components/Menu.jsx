import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Link, Spacer } from '@nextui-org/react'
import { House } from './Icons'

export const Menu = () => {

  return (
    <Navbar 
      className='-mb-16'
    >
      <NavbarBrand>
        <House width={23} height={23}/>
        <Spacer x={1} />
        <p className="font-bold text-inherit">El Rincón</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/#home">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="success" href="/#gallery" aria-current="page">
            Fotos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#info">
            Características
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#opinion">
            Opiniones 
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className='hidden sm:flex' justify="end">
        <NavbarItem>
          <Button as={Link} color="success" href="/#contact" variant="flat">
            Contacto
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}