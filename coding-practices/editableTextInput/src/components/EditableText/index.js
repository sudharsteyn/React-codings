import {Component} from 'react'

import {
  BgContainer,
  EditableTextContainer,
  ContainerHeading,
  InputContainer,
  UserInput,
  EditButton,
  TextPara,
} from './styledComponents'

class EditableText extends Component {
  state = {text: '', isSaved: false}

  onTextChange = event => {
    this.setState({text: event.target.value})
  }

  onSaveText = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  renderPara = text => <TextPara>{text}</TextPara>

  renderInput = text => (
    <UserInput onChange={this.onTextChange} type="text" value={text} />
  )

  render() {
    const {text, isSaved} = this.state
    const buttonText = isSaved ? 'Edit' : 'Save'
    return (
      <BgContainer>
        <EditableTextContainer>
          <ContainerHeading>Editable Text Input</ContainerHeading>
          <InputContainer>
            {isSaved ? this.renderPara(text) : this.renderInput(text)}
            <EditButton onClick={this.onSaveText} type="button">
              {buttonText}
            </EditButton>
          </InputContainer>
        </EditableTextContainer>
      </BgContainer>
    )
  }
}

export default EditableText
