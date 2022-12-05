import { BackgroundSvg } from '~/assets';
import { HomeHeader } from '~/layouts/Home/Header';
import { HomeHero } from '~/layouts/Home/Hero';
import { FullHomeContainer, HomeContainer } from './styles';

export function Home() {
  return (
    <FullHomeContainer>
      <BackgroundSvg className='home-bg' />
      <HomeContainer>
        <HomeHeader />
        <HomeHero />
      </HomeContainer>
    </FullHomeContainer>
  );
}
