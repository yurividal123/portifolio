import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './style'

const Sidebar = () => (
  <>
    <aside>
      <SidebarContainer>
        <Avatar />
        <Titulo fontSize={20}>Yuri Vidal</Titulo>
        <Paragrafo tipo="secundario" font-Size={16}>
          yurividal123
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Engenheiro Front-end
        </Descricao>
        <BotaoTema>Trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  </>
)

export default Sidebar
