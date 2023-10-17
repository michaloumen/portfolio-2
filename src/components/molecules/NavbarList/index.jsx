import React from 'react';
import { useRouter } from 'next/router';
import NavItems from '../../atoms/NavItems';
import * as S from './styles';
import { useLanguageContext } from '../../../hooks/languageProvider';

const NavbarList = ({ closeMenu }) => {
  const router = useRouter();
  const { isEnglishLanguage } = useLanguageContext();
  const navItems = NavItems(isEnglishLanguage);

  const handleLinkClick = (path) => {
    router.push(path);
    closeMenu();
  };

  return (
    <S.NavbarListContainer>
      {navItems.map(({ itemName, itemPath }) => (
        <div key={itemPath} onClick={() => handleLinkClick(itemPath)}>
          {itemName}
        </div>
      ))}
    </S.NavbarListContainer>
  );
};

export default NavbarList;
