import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react'
import { Menu } from './Icons/Menu'

export const MobileMenu = () => {
  const scrollToId = (id) => {
    document.querySelector(id).scrollIntoView()
  }

  return (
    <nav>
      <Dropdown className='sm:hidden'>
        <DropdownTrigger className='sm:hidden fixed bottom-5 right-5 z-30'>
          <Button variant='shadow' color='success' className='rounded-full h-20 w-20'>
            <Menu width={35} height={35} fill='#fff'/>
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label='Acciones del menu'>
          <DropdownItem textValue='inicio' as={'div'}>
            <Button color='foreground' onPress={() => scrollToId('#home')}>Inicio</Button>
          </DropdownItem>
          <DropdownItem textValue='fotos' as={'div'}>
            <Button color='foreground' onPress={() => scrollToId('#gallery')}>Fotos</Button>
          </DropdownItem>
          <DropdownItem textValue='caracterísitcas' as={'div'}>
            <Button color='foreground' onPress={() => scrollToId('#info')}>Caracterísitcas</Button>
          </DropdownItem>
          <DropdownItem textValue='opiniones' as={'div'}>
            <Button color='foreground' onPress={() => scrollToId('#opinion')}>Opiniones</Button>
          </DropdownItem>
          <DropdownItem textValue='contacto' as={'div'}>
            <Button color='foreground' onPress={() => scrollToId('#contact')}>Contacto</Button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </nav>
  )
}