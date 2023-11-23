import Titulo from '../../../components/Titulo'
import Paragrafo from '../../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo>Sobre Mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa accusamus
      sint facilis harum. Tempora velit quibusdam similique quia vitae suscipit,
      nulla sint, unde delectus cupiditate cum culpa provident quis esse?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=yurividal123&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=yurividal123&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
