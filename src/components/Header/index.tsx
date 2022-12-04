import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AngleRightSvg, CloseSvg, DownloadSvg, HamburgerSvg, LogoSvg } from '~/assets';
import { Trigger } from '../Trigger';
import { AcademyLinks, SecurityLinks } from './data';
import {
  DesktopMenu,
  MenuCloseButton,
  MobileButtonContainer,
  MobileMenu,
  MobileMenuContent,
  MobileMenuFooter,
  MobileMenuOverlay,
  SecondaryMenu,
  StyledHeader,
} from './styles';

export function Header() {
  const generalMenuRef = useRef<HTMLDivElement>(null);
  const securityMenuRef = useRef<HTMLDivElement>(null);
  const academyMenuRef = useRef<HTMLDivElement>(null);
  const [generalSlide, setGeneralSlide] = useState(false);
  const [securitySlide, setSecuritySlide] = useState(false);
  const [academySlide, setAcademySlide] = useState(false);

  const handleOpen = (menu: 'general' | 'security' | 'academy') => {
    if (menu === 'general') {
      generalMenuRef.current!.style.display = 'flex';
      setTimeout(() => setGeneralSlide(true));
    }
    if (menu === 'security') {
      securityMenuRef.current!.style.display = 'flex';
      setTimeout(() => setSecuritySlide(true));
    }
    if (menu === 'academy') {
      academyMenuRef.current!.style.display = 'flex';
      setTimeout(() => setAcademySlide(true));
    }
  };

  const handleBack = (menu: 'general' | 'security' | 'academy') => {
    if (menu === 'general') {
      generalMenuRef.current!.style.display = 'none';
      setTimeout(() => setGeneralSlide(false));
    }
    if (menu === 'security') {
      securityMenuRef.current!.style.display = 'none';
      setTimeout(() => setSecuritySlide(false));
    }
    if (menu === 'academy') {
      academyMenuRef.current!.style.display = 'none';
      setTimeout(() => setAcademySlide(false));
    }
  };

  const handleClose = () => {
    generalMenuRef.current!.style.display = 'none';
    securityMenuRef.current!.style.display = 'none';
    academyMenuRef.current!.style.display = 'none';
    setGeneralSlide(false);
    setSecuritySlide(false);
    setAcademySlide(false);
  };

  useEffect(() => {
    generalMenuRef.current!.addEventListener('click', (e: MouseEvent) => {
      const overlay = e.target as HTMLDivElement;

      if (overlay === generalMenuRef.current!) handleClose();
    });
  }, []);

  return (
    <StyledHeader>
      <Link to='/'>
        <LogoSvg />
      </Link>
      <DesktopMenu>
        <Link to='/'>Baixar</Link>
        <Link to='/'>Nitro</Link>
        <Link to='/'>Descubra</Link>
        <Link to='/'>Segurança</Link>
        <Link to='/'>Suporte</Link>
        <Link to='/'>Blog</Link>
        <Link to='/'>Carreiras</Link>
      </DesktopMenu>
      <MobileButtonContainer>
        <Trigger type='link' backgroundColor='#ffffff'>
          Entrar
        </Trigger>
        <button onClick={() => handleOpen('general')}>
          <HamburgerSvg />
        </button>
      </MobileButtonContainer>
      <MobileMenuOverlay ref={generalMenuRef}>
        <MobileMenu slide={generalSlide}>
          <MobileMenuContent>
            <Link to='/'>
              <LogoSvg />
            </Link>
            <MenuCloseButton slide={generalSlide} onClick={() => handleClose()}>
              <CloseSvg />
            </MenuCloseButton>
            <nav>
              <Link to='/' className='selected'>
                Início
              </Link>
              <Link to='/'>Baixar</Link>
              <Link to='/'>Nitro</Link>
              <Link to='/'>Descubra</Link>
              <button onClick={() => handleOpen('security')}>
                Segurança <AngleRightSvg />
              </button>
              <button onClick={() => handleOpen('academy')}>
                Academia de Moderadores <AngleRightSvg />
              </button>
              <Link to='/'>Suporte</Link>
              <Link to='/'>Blog</Link>
              <Link to='/'>Carreiras</Link>
            </nav>
            <SecondaryMenu ref={securityMenuRef} slide={securitySlide}>
              <button onClick={() => handleBack('security')}>
                <AngleRightSvg /> Voltar
              </button>
              <ul className='main-ul'>
                {SecurityLinks.sections.map((section, i) => {
                  const finalLi = i === 3 ? 'final-li' : '';
                  return (
                    <>
                      <li className={`main-li ${finalLi}`}>
                        <div>{section.title}</div>
                        <ul>
                          {section.links.map((link, i) => {
                            return (
                              <li key={i}>
                                <Link to={link.path}>{link.text}</Link>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    </>
                  );
                })}
              </ul>
            </SecondaryMenu>
            <SecondaryMenu ref={academyMenuRef} slide={academySlide}>
              <button onClick={() => handleBack('academy')}>
                <AngleRightSvg /> Voltar
              </button>
              <ul className='main-ul'>
                {AcademyLinks.sections.map((section, i) => {
                  const finalLi = i === 6 ? 'final-li' : '';
                  return (
                    <>
                      <li key={i} className={`main-li ${finalLi}`}>
                        <div>{section.title}</div>
                        <ul>
                          {section.links.map((link, i) => {
                            return (
                              <li key={i}>
                                <Link to={link.path}>{link.text}</Link>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    </>
                  );
                })}
              </ul>
            </SecondaryMenu>
            <MobileMenuFooter slide={generalSlide}>
              <div>
                <Trigger type='link'>
                  <DownloadSvg /> Baixar para Windows
                </Trigger>
              </div>
            </MobileMenuFooter>
          </MobileMenuContent>
        </MobileMenu>
      </MobileMenuOverlay>
    </StyledHeader>
  );
}
