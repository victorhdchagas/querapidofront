import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <header className="h-24 flex items-center justify-start">
      <Image src="/logo.png" alt="Logo" width={100} height={100} />
      <span>Que Rapido</span>
    </header>
  )
}
