import React from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledAbsoluteLink href="https://safefarm.finance">
        <TranslatedText translationId={2}>Home</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://www.safepal.io/">
        <TranslatedText translationId={4}>SafePal Wallet</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://www.safebitcoin.io">SafeBTC</StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://exchange.safefarm.finance" className="active">
        <TranslatedText translationId={8}>SafeSwap</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://farm.safefarm.finance">Farm</StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://t.me/SafeDao">
        <TranslatedText translationId={14}>Claim SafeFarm</TranslatedText>
      </StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  font-size: 20px;
  line-height: 45px;
  font-weight: 500;
  @media (max-width: 600px) {
    display: none;
  }
`

const StyledAbsoluteLink = styled.a`
  color: #12aab5;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  &:hover {
    color: #452a7a;
  }
  &.active {
    color: #452a7a;
  }
  @media (max-width: 400px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

export default Nav
