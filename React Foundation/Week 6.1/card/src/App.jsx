import { useState } from 'react'
import { CardWrapper } from '../components/CardWrapper'
import { TextComponent } from '../components/TextComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <CardWrapper>
        <div>
        Hii there
        </div>
      </CardWrapper>

      <CardWrapper>
      <TextComponent/>
      </CardWrapper>
    </div>
    </>
  )
}

export default App
