import React from 'react'
import HeaderImg from "../assets/globe.png"

export default function Header() {
  return (
    <header className="header">
        <img src={HeaderImg} className="header--img" />
        <h2 className="header--heading">my travel journal</h2>
    </header>
  )
}
