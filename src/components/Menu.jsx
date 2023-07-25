import { useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Link, Spacer, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from '@nextui-org/react'
import { House } from './Icons'

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Navbar 
      className='-mb-16'
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
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
      <NavbarContent>
        <NavbarMenuToggle 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className='sm:hidden'
        />
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link onPress={() => setIsMenuOpen(false)} color="foreground" href="/#home">
            Inicio
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem isActive>
          <Link onPress={() => setIsMenuOpen(false)} color="success" href="/#gallery" aria-current="page">
            Fotos
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link onPress={() => setIsMenuOpen(false)} color="foreground" href="/#info">
            Características
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link  onPress={() => setIsMenuOpen(false)} color="foreground" href="/#opinion">
            Opiniones 
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button onPress={() => setIsMenuOpen(false)} as={Link} color="success" href="/#contact" variant="flat">
            Contacto
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}