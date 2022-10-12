import logo from './assets/cropped-runner.png'

function Logo({width}) {
  return (
    <img src={logo} width={width} className='text-center mx-auto' alt='Bald Fits Logo' title='Bald Fits' />
  )
}

export default Logo