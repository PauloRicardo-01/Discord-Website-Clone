import {
  BackgroundSvg,
  DownloadSvg,
  FirstSectionSvg,
  ForegroundSvg1,
  ForegroundSvg2,
  LastSvg,
  SecondSectionSvg,
  Sparkles,
  ThirdSectionSvg,
} from '~/assets';
import { Trigger } from '~/components/Trigger';
import { HomeHeader } from '~/layouts/Home/Header';
import { HomeHero } from '~/layouts/Home/Hero';
import {
  DownloadSection,
  FullHomeContainer,
  HomeContainer,
  HomeSection,
  LastSection,
} from './styles';

export function Home() {
  return (
    <div>
      <FullHomeContainer>
        <BackgroundSvg className='home-bg' />
        <ForegroundSvg1 className='absolute-foreground-1' />
        <ForegroundSvg2 className='absolute-foreground-2' />
        <HomeContainer>
          <HomeHeader />
          <HomeHero />
        </HomeContainer>
      </FullHomeContainer>
      <HomeSection className='first-section'>
        <div className='container first-container'>
          <FirstSectionSvg />
          <div className='section-content'>
            <h2>Crie um espaço controlado por convite onde você se sinta em casa</h2>
            <div>
              Os servidores Discord são organizados em canais com assuntos para vocês colaborarem,
              compartilharem ou simplesmente falarem do dia sem entupir um chat geral.
            </div>
          </div>
        </div>
      </HomeSection>
      <HomeSection className='second-section'>
        <div className='container second-container'>
          <SecondSectionSvg />
          <div className='section-content'>
            <h2>Aqui é fácil se encontrar</h2>
            <div>
              Entre no canal de voz quando estiver à toa. Amigos no mesmo servidor podem te ver e
              entrar imediatamente, sem nem ter que fazer a chamada.
            </div>
          </div>
        </div>
      </HomeSection>
      <HomeSection className='third-section'>
        <div className='container third-container'>
          <ThirdSectionSvg />
          <div className='section-content'>
            <h2>Para poucos e para muitos</h2>
            <div>
              Organize qualquer comunidade com ferramentas de moderação e acesso personalizado a
              membros. Dê poderes especiais aos membros, monte canais privados e muito mais.
            </div>
          </div>
        </div>
      </HomeSection>
      <LastSection>
        <div className='container'>
          <h2>Tecnologia de conexão confiável</h2>
          <div>
            Voz e vídeo de baixa latência, para você conversar como se estivesse na mesma sala. Dê
            um joinha por vídeo, veja amigos transmitirem a jogatina do dia ou junte uma galera pra
            desenhar na tela compartilhada.
          </div>
          <LastSvg />
        </div>
      </LastSection>
      <DownloadSection>
        <Sparkles />
        <h4>Vamos começar sua jornada?</h4>
        <Trigger type='link'>
          <DownloadSvg /> Baixar para Windows
        </Trigger>
      </DownloadSection>
    </div>
  );
}
