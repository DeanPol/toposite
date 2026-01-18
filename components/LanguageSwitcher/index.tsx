'use client';

import React from 'react';
import styled from '@emotion/styled';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const lngs = {
  el: { nativeName: 'GR', path: '/' },
  en: { nativeName: 'EN', path: '/en' },
};

// Styled components (unchanged)
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
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isEnglish = pathname.startsWith('/en');
  const currentLang = isEnglish ? 'en' : 'el';

  const query = searchParams.toString();
  const suffix = query ? `?${query}` : '';

  return (
    <LanguageSwitcherContainer>
      {Object.entries(lngs).map(([key, value], index, array) => (
        <LanguageOption key={key}>
          <LanguageButton
            type='button'
            isSelected={currentLang === key}
            disabled={currentLang === key}
            onClick={() => {
              router.push(`${value.path}${suffix}`);
            }}
          >
            {value.nativeName}
          </LanguageButton>

          {index < array.length - 1 && <Separator> | </Separator>}
        </LanguageOption>
      ))}
    </LanguageSwitcherContainer>
  );
}
