import { DownloadSvg, ForegroundSvg1 } from '~/assets';
import { Trigger } from '~/components/Trigger';
import { HomeHeroButtons, HomeHeroContainer, HomeHeroContent } from './styles';

export function HomeHero() {
  return (
    <HomeHeroContainer>
      <HomeHeroContent>
        <h1>Imagine um lugar...</h1>
        <div>
          …onde você possa pertencer a um clube escolar, um grupo de gamers, ou uma comunidade
          artística mundial. Onde você e alguns amigos possam passar um tempo juntos. Um lugar que
          torna fácil conversar todos os dias e socializar com mais frequência.
        </div>
        <HomeHeroButtons>
          <Trigger type='link' to='/'>
            <DownloadSvg /> Baixar para Windows
          </Trigger>
          <Trigger type='button'>Abra o Discord no seu navegador</Trigger>
        </HomeHeroButtons>
      </HomeHeroContent>
      <ForegroundSvg1 className='relative-foreground-1' />
    </HomeHeroContainer>
  );
}
