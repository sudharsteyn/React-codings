import {AiOutlineDelete} from 'react-icons/ai'

import {
  SongItem,
  SongTitleContainer,
  SongImg,
  TitleAndCategoryContainer,
  SongTitle,
  SongCategory,
  DurationAndDeleteContainer,
  SongDuration,
  DeleteButton,
} from './styledComponents'

const TrackItem = props => {
  const {trackDetails, onDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = trackDetails
  const deleteSong = () => {
    onDeleteTrack(id)
  }
  return (
    <SongItem>
      <SongTitleContainer>
        <SongImg src={imageUrl} alt="track" />
        <TitleAndCategoryContainer>
          <SongTitle>{name}</SongTitle>
          <SongCategory>{genre}</SongCategory>
        </TitleAndCategoryContainer>
      </SongTitleContainer>
      <DurationAndDeleteContainer>
        <SongDuration>{duration}</SongDuration>
        <DeleteButton data-testid="delete" onClick={deleteSong} type="button">
          <AiOutlineDelete size={20} color="#ffffff" />
        </DeleteButton>
      </DurationAndDeleteContainer>
    </SongItem>
  )
}

export default TrackItem
