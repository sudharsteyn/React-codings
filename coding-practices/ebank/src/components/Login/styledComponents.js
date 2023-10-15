import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #152850;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginContainer = styled.div`
  background-color: #e0eefe;
  height: 500px;
  width: 800px;
  border-radius: 22px;
  display: flex;
  align-items: center;
`

export const LoginImg = styled.img`
  height: 400px;
  width: 450px;
`

export const LoginForm = styled.form`
  background-color: #ffffff;
  height: 100%;
  width: 350px;
  border-radius: 22px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const WelcomeText = styled.h1`
  font-family: 'Roboto';
  color: #183b56;
  font-size: 34px;
  font-weight: 800;
  margin-bottom: 12px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`

export const InputLabel = styled.label`
  font-family: 'Roboto';
  color: #5a7184;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`

export const CustomInput = styled.input`
  font-family: 'Roboto';
  font-size: 14px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #c3cad9;
  outline: none;
`

export const SubmitButton = styled.button`
  font-family: 'Roboto';
  background-color: #1565d8;
  color: #ffffff;
  font-size: 14px;
  border-radius: 6px;
  padding: 10px;
  margin-top: 12px;
  margin-bottom: 6px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const LoginErrorMsg = styled.p`
  font-family: 'Roboto';
  color: #ff0b37;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  margin: 0px;
`
