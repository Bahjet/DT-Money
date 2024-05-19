import { HeaderContainer, HeaderContent, NewTransactionButton } from './styled'
import logoImg from '../../assets/Ignite simbol.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root /* estrutura onde todo Modal fica */>
          <Dialog.DialogTrigger
            asChild /* triger é o button de abrir o modal, nesse caso usamos o asChild para usar apenas o button interno */
          >
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.DialogTrigger>
          <NewTransactionModal /* Componente Modal inteiro */ />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
