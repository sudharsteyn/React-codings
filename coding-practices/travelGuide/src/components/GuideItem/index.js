import {
  TravelGuideItem,
  PlaceImage,
  PlaceHeading,
  PlaceDescription,
} from './styledComponents'

const GuideItem = props => {
  const {guideData} = props
  const {imageUrl, name, description} = guideData
  return (
    <TravelGuideItem>
      <PlaceImage src={imageUrl} alt={name} />
      <PlaceHeading>{name}</PlaceHeading>
      <PlaceDescription>{description}</PlaceDescription>
    </TravelGuideItem>
  )
}

export default GuideItem
