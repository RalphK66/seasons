const Copyright = () => {
  return (
    <p style={{}}>
      {'Copyright © '}
      <a style={{}} href='https://ralphkilian.ca/'>
        Ralph Kilian
      </a>{' '}
      {new Date().getFullYear()}
    </p>
  )
}

const StickyFooter = () => {
  return (
    <footer
      style={{
        padding: '0.5em 1em',
        marginTop: 'auto',
        backgroundColor: 'lightgray',
        textAlign: 'center',
      }}>
      <Copyright />
    </footer>
  )
}

export default StickyFooter
