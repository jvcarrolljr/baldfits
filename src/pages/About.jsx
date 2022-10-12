
function About() {
  return (
    <>
      <h1 className='text-6xl mb-4'>Bald Fits</h1>
      <p className='mb-4 text-2xl font-light'>
        An app that collects fits for bald guys, categorized by both genre and model.
      </p>
      <p className='text-lg text-gray-700'>
        Version <span className='text-blue-800'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-700'>
        Code, UI, and Backend created by:
        <a className='text-blue-800' href='https://github.com/jvcarrolljr' target="_blank">
          &nbsp;Joseph Valle
        </a>
      </p>
    </>
  )
}

export default About