
function Keypad() {
    return (
      <div>
        <input
          type='password'
          name='psd'
          onChange={() => console.log('Entering password...')}
        />
      </div>
    )
  }
  
  export default Keypad
