import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AppContainer = styled.div`
  height: 600px;
  width: 1000px;
  display: flex;
`

export const CreateTaskContainer = styled.form`
  background-color: #131213;
  height: 100%;
  width: 40%;
  padding: 48px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CreateTaskHeading = styled.h1`
  font-family: 'Roboto';
  color: #f3aa4e;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 18px;
`

export const LabelText = styled.label`
  font-family: 'Roboto';
  color: #f1f5f9;
  font-size: 15px;
  margin-bottom: 8px;
`

export const Input = styled.input`
  font-family: 'Roboto';
  width: 100%;
  font-size: 15px;
  padding: 6px 14px;
  outline: none;
`

export const Select = styled.select`
  font-family: 'Roboto';
  width: 100%;
  font-size: 15px;
  padding: 6px 14px;
  outline: none;
`

export const Option = styled.option``

export const AddTaskButton = styled.button`
  font-family: 'Roboto';
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #f3aa4e;
  color: #f1f5f9;
  font-size: 16px;
  border-radius: 4px;
  padding: 8px 18px;
  margin: 14px;
`

export const DisplayTaskContainer = styled.div`
  background-color: #000000;
  width: 60%;
  padding-top: 42px;
  padding-left: 8px;
  padding-right: 8px;
`

export const SectionHeading = styled.h1`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 28px;
`

export const TagItemList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
`

export const NoTaskContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`

export const NoTaskText = styled.p`
  font-family: 'Roboto';
  color: #f1f5f9;
  font-size: 26px;
`

export const TaskItemList = styled.ul`
  list-style-type: none;
  padding: 0px;
  overflow: auto;
  height: 370px;
`
