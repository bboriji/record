import styled from 'styled-components'
import { mainBlue } from '../../common/constant'

export const RegisterLayout = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-content: center;
`

export const Title = styled.a`
  margin: 3rem auto 0 auto;
  font-weight: bold;
  font-size: 2.7rem;
  color: ${mainBlue};
  text-decoration: none;
`

export const SubTitle = styled.p`
  margin: 0.1rem auto 3rem auto;
  font-weight: bold;
  font-size: 1.625rem;
  text-decoration: none;
`

export const InputContainer = styled.form`
  margin: auto;
  min-width: 20rem;
  display: flex;
  flex-direction: column;
`

export const InputHeaderText = styled.div`
  margin: 1rem 0 0.4rem 0;
  display: flex;
  font-size: 1rem;
`

export const InputErrorText = styled.span`
  font-size: 0.7rem;
  color: red;
  margin-top: 0.5rem;
`
