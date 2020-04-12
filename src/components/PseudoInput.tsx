import React, { useState } from 'react'
import blockStyles from './Block.module.css'

interface PseudoInputProps {
  setPseudo: (pseudo: string) => void
}

const PseudoInput: React.FC<PseudoInputProps> = ({ setPseudo }: PseudoInputProps) => {
  const [typingPseudo, setTypingPseudo] = useState('')
  const validatePseudo: () => void = () => setPseudo(typingPseudo)

  return (
    <div className={blockStyles.wrapper}>
      <input
        type='text'
        placeholder='Enter your pseudo'
        onChange={event => setTypingPseudo(event.target.value)}
        className={blockStyles.element}
      />
      <button
        onClick={validatePseudo}
        className={`${blockStyles.element} ${blockStyles.button}`}
      >
        OK
      </button>
    </div>
  )
}

export default PseudoInput
