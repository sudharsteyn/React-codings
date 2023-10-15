import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: #152850;
  height: 100vh;
  overflow: auto;
`

export const Header = styled.nav`
  padding: 38px 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const WebsiteLogo = styled.img``

export const LogoutButton = styled.button`
  font-family: 'Roboto';
  font-size: 18px;
  background-color: transparent;
  color: #c3cad9;
  padding: 6px 16px;
  border: 1px solid #c3cad9;
  outline: none;
  cursor: pointer;
`

export const DigitalCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export const HomeSlogan = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 52px;
`

export const DigitalCard = styled.img`
  height: 360px;
`
