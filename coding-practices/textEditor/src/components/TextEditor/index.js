import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  BgContainer,
  AppContainer,
  TitleAndImageContainer,
  TextEditorTitle,
  EditorImage,
  TextEditorContainer,
  TextOptionContainer,
  OptionItem,
  BoldButton,
  ItalicButton,
  UnderlineButton,
  Separator,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {bold: false, italic: false, underline: false}

  changeBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  changeItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  changeUnderline = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {bold, italic, underline} = this.state
    return (
      <BgContainer>
        <AppContainer>
          <TitleAndImageContainer>
            <TextEditorTitle>Text Editor</TextEditorTitle>
            <EditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TitleAndImageContainer>
          <TextEditorContainer>
            <TextOptionContainer>
              <OptionItem>
                <BoldButton
                  data-testid="bold"
                  onClick={this.changeBold}
                  type="button"
                  color={bold}
                >
                  <VscBold size="25" />
                </BoldButton>
              </OptionItem>
              <OptionItem>
                <ItalicButton
                  data-testid="italic"
                  onClick={this.changeItalic}
                  type="button"
                  color={italic}
                >
                  <GoItalic size="25" />
                </ItalicButton>
              </OptionItem>
              <OptionItem>
                <UnderlineButton
                  data-testid="underline"
                  onClick={this.changeUnderline}
                  type="button"
                  color={underline}
                >
                  <AiOutlineUnderline size="25" />
                </UnderlineButton>
              </OptionItem>
            </TextOptionContainer>
            <Separator />
            <TextArea bold={bold} italic={italic} underline={underline} />
          </TextEditorContainer>
        </AppContainer>
      </BgContainer>
    )
  }
}

export default TextEditor
