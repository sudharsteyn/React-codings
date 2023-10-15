import {ProjectItem, ProjectImg, ProjectName} from './styledComponents'

const Project = props => {
  const {projectDetails} = props
  const {name, imageUrl} = projectDetails
  return (
    <ProjectItem>
      <ProjectImg src={imageUrl} alt={name} />
      <ProjectName>{name}</ProjectName>
    </ProjectItem>
  )
}

export default Project
