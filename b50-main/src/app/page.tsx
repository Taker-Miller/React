import Image from 'next/image'
import styles from './page.module.css'
import { Saludo } from './Componentes/Saludo'
import { Formulario } from './Componentes/Formulario'

export default function Home() {
  return (
    <>
      
      <p>hola</p>
      <p>chao</p>
      <Saludo nombre='Natalia' apellido='Paredes'></Saludo>
      <Saludo nombre='Paulo'/>
      <Formulario />
    </>
  )
}
