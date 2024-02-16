import React from 'react'

export const Footer = () => {
  return (
   <>
   <footer className="footer p-10 bg-[#00375C] text-white">
  <aside>
  <h6 className="footer-title">About</h6> 
    <p>URC is an organisation that deals with the <br></br> practical aspect of the theories that we learn in class.</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Teams</h6> 
    <a className="link link-hover">Software Team</a>
    <a className="link link-hover">Hardware & Prototyping Team </a>
    <a className="link link-hover">3D Modelling Team</a>
    <a className="link link-hover">Research & Development</a>
  </nav> 
  <nav>
    <h6 className="footer-title">URC</h6> 
    <a className="link link-hover">Home</a>
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Projects</a>
    <a className="link link-hover">Gallery</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Contact Us</h6> 
    <a className="link link-hover">Bono region - Sunyani, Fiapre</a>
    <a className="link link-hover"> +233 54300295</a>
    <a className="link link-hover">admin@uenrrobotics.org</a>
  </nav>
</footer>
   </>
  )
}
