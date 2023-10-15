import styled from 'styled-components'

export const SongItem = styled.li`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SongTitleContainer = styled.div`
  display: flex;
`

export const SongImg = styled.img`
  height: 100px;
  width: 160px;
`

export const TitleAndCategoryContainer = styled.div`
  margin-left: 12px;
`

export const SongTitle = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 18px;
`

export const SongCategory = styled.p`
  font-family: 'Roboto';
  color: #3b82f6;
  font-size: 18px;
`

export const DurationAndDeleteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SongDuration = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 18px;
`

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  margin-right: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`
