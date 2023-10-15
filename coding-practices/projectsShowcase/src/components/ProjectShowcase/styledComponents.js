import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  overflow: auto;
`
export const Header = styled.nav`
  background-color: #f1f5f9;
  padding: 12px 58px;
`

export const SiteLogo = styled.img`
  height: 50px;
`

export const ProjectContainer = styled.div`
  padding: 38px 58px;
`

export const ProjectCategory = styled.select`
  font-family: 'Roboto';
  font-size: 14px;
  width: 300px;
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  outline: none;
`

export const CategoryOption = styled.option``

export const LoaderContainer = styled.div`
  height: 72vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FailureContainer = styled.div`
  height: 72vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureImg = styled.img`
  height: 300px;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  color: #475569;
  font-size: 38px;
`

export const FailureDescribe = styled.p`
  font-family: 'Roboto';
  color: #475569;
  margin-top: 0px;
`

export const RetryButton = styled.button`
  font-family: 'Roboto';
  background-color: #328af2;
  color: #ffffff;
  padding: 10px 28px;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ProjectItemList = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
`
