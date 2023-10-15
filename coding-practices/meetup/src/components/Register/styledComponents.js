import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  overflow: auto;
`

export const RegisterContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RegisterImg = styled.img`
  height: 350px;
`

export const RegisterForm = styled.form``

export const FormHeading = styled.h1`
  font-family: 'Roboto';
  color: #334155;
  font-size: 48px;
  font-weight: 500;
  margin-bottom: 18px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`

export const Label = styled.label`
  font-family: 'Roboto';
  color: #7b8794;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 8px;
`

export const Input = styled.input`
  font-family: 'Roboto';
  font-size: 14px;
  color: #334155;
  width: 300px;
  padding: 8px;
  font-weight: 500;
  border-radius: 4px;
  border: 1px solid #cbd5e1;
  outline: none;
`

export const SelectTopics = styled.select`
  font-family: 'Roboto';
  color: #334155;
  font-size: 14px;
  width: 300px;
  padding: 8px;
  font-weight: 500;
  border-radius: 4px;
  border: 1px solid #cbd5e1;
  outline: none;
`

export const TopicOption = styled.option``

export const RegisterNowBtn = styled.button`
  font-family: 'Roboto';
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  padding: 11px 24px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 8px;
  margin-bottom: 8px;
`
export const RegisterFailure = styled.p`
  font-family: 'Roboto';
  color: #ff0b37;
  font-size: 13px;
  font-weight: 500;
`
