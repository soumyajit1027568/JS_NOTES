import { useState, type ChangeEvent } from 'react'
import Box from './components/Box'

function App() {
  const [value,setValue] = useState<string>("")
  return (
    <>
      <h1>PB</h1>
      <input
        type="text"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>): void => {
          setValue(e.target.value)
        }}
      />
      <Box title={"Heading"} count={5} fun={()=>{alert("asd")}}>
        {"Hello World"}
      </Box>
    </>
  )
}

export default App
