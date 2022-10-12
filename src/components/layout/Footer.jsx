import LogoFull from "./LogoFull"

function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className='footer p-10 bg-blue-300 text-black footer-center'>
    <div>
      <LogoFull width={70} />
      <p>Copyright &copy; {footerYear} All rights reserved</p>
    </div>
  </footer>
  )
}

export default Footer