import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
`

export const SingerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 58px;
  padding-bottom: 32px;
`

export const SingerName = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: 500;
  margin: 6px;
`

export const SingerText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 24px;
  margin: 6px;
`

export const PlaylistContainer = styled.div`
  background-color: #152850;
  padding: 18px;
  height: 60vh;
`

export const PlaylistAndSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PlaylistTitle = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 24px;
  margin: 0px;
`

export const SearchContainer = styled.div`
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SearchInput = styled.input`
  background-color: transparent;
  color: #ffffff;
  font-family: 'Roboto';
  padding: 4px 8px;
  border: none;
  outline: none;
`

export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SongItemsList = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin-top: 18px;
  margin-bottom: 18px;
  height: 48vh;
  overflow: auto;
`

export const NoSongsFoundContainer = styled.div`
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoSongFoundHeading = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 28px;
`
