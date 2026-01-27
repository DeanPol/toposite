'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import styled from '@emotion/styled';

interface Languages {
  [key: string]: { nativeName: string };
}

const lngs: Languages = {
  el: { nativeName: 'GR' },
  en: { nativeName: 'EN' },
};

// Styled components
const LanguageSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LanguageOption = styled.span`
  margin-right: 6px;
`;

const LanguageButton = styled.button<{ isSelected: boolean }>`
  padding: 2px 6px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
  background-color: ${props => (props.isSelected ? 'white' : 'black')};
  color: ${props => (props.isSelected ? 'black' : 'white')};
  border-color: ${props => (props.isSelected ? '#ccc' : 'black')};

  &:hover {
    background-color: ${props => (props.isSelected ? 'white' : 'gray')};
    color: ${props => (props.isSelected ? 'black' : 'white')};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #e0e0e0;
    color: #888;
  }
`;

const Separator = styled.span`
  color: #888;
  font-weight: bold;
`;

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  // Determine current locale from pathname
  const currentLocale = pathname.startsWith('/en') ? 'en' : 'el';

  const switchLocale = (locale: string) => {
    if (locale === currentLocale) return;

    // Remove current locale prefix
    let newPath = pathname.replace(/^\/en/, '');
    
    // Add new locale prefix (only for English, Greek is root)
    if (locale === 'en') {
      newPath = `/en${newPath || ''}`;
    } else {
      newPath = newPath || '/';
    }

    router.push(newPath);
  };

  return (
    <LanguageSwitcherContainer>
      {Object.entries(lngs).map(([key, value], index, array) => (
        <LanguageOption key={key}>
          <LanguageButton
            type='button'
            onClick={() => switchLocale(key)}
            disabled={currentLocale === key}
            isSelected={currentLocale === key}
          >
            {value.nativeName}
          </LanguageButton>
          {index < array.length - 1 && <Separator> | </Separator>}
        </LanguageOption>
      ))}
    </LanguageSwitcherContainer>
  );
}
