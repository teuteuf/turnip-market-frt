import React, { useState } from 'react'

interface PseudoInputProps {
  setPseudo: (pseudo: string) => void
}

const PseudoInput: React.FC<PseudoInputProps> = ({ setPseudo }: PseudoInputProps) => {
  const [typingPseudo, setTypingPseudo] = useState('')
  const validatePseudo: () => void = () => setPseudo(typingPseudo)

  return (
    <div>
      <input
        type='text'
        placeholder='Enter your pseudo'
        onChange={event => setTypingPseudo(event.target.value)}
      />
      <button onClick={validatePseudo}>OK</button>
    </div>
  )
}

export default PseudoInput
