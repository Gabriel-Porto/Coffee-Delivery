import { MapPin, ShoppingCart, Trash } from '@phosphor-icons/react'
import { ButtonContainer } from './styles'

interface ButtonProps {
  type: 'primary' | 'secondary' | 'icon'
  icon?: typeof MapPin | typeof ShoppingCart | typeof Trash
  text?: string
}

export function Button({ type, text }: ButtonProps) {
  return (
    <ButtonContainer>
      {type === 'secondary' && (
        <>
          <MapPin weight="fill" /> <span>{text}</span>
        </>
      )}
      {type === 'icon' && (
        <>
          <ShoppingCart weight="fill" />
        </>
      )}
    </ButtonContainer>
  )
}
