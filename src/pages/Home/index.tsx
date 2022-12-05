import { BackgroundSvg, ForegroundSvg1, ForegroundSvg2 } from '~/assets';
import { HomeHeader } from '~/layouts/Home/Header';
import { HomeHero } from '~/layouts/Home/Hero';
import { FullHomeContainer, HomeContainer } from './styles';

export function Home() {
  return (
    <FullHomeContainer>
      <BackgroundSvg className='home-bg' />
      <ForegroundSvg1 className='absolute-foreground-1' />
      <ForegroundSvg2 className='absolute-foreground-2' />
      <HomeContainer>
        <HomeHeader />
        <HomeHero />
      </HomeContainer>
    </FullHomeContainer>
  );
}
