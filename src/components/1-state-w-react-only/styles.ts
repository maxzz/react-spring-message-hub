import styled from 'styled-components'
import { animated } from '@react-spring/web'

export const Main = styled.div`
  height: 100%;

  color: blueviolet;
  background-color: bisque;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
`

export const Container = styled.div`
  margin: 0 auto;
  width: 0 auto;
  position: fixed;
  left: 30px;
  right: 30px;
  bottom: 30px;

  z-index: 1000;
  pointer-events: none;
  
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 680px) {
    align-items: center;
  }
`

export const Message = styled(animated.div)`
  position: relative;
  width: 40ch;
  @media (max-width: 680px) {
    width: 100%;
  }
  overflow: hidden;
  box-sizing: border-box;
`

export const Content = styled.div`
  margin-top: 10px;
  padding: 12px 22px;
  height: auto;
  font-size: 1em;
  border-radius: 3px;

  color: white;
  background: #445159;
  opacity: 0.9;

  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 10px;
  overflow: hidden;
`

export const Button = styled.button`
  margin: 0;
  padding: 0;
  padding-bottom: 14px;

  color: rgba(255, 255, 255, 0.5);
  :hover {
    color: rgba(255, 255, 255, 0.6);
  }
  background: transparent;
  border: none;
  outline: 0;

  overflow: hidden;
  display: flex;
  align-self: flex-end;

  pointer-events: all;
  cursor: pointer;
`

export const Life = styled(animated.div)`
  position: absolute;
  left: 0px;
  bottom: 0;
  width: auto;
  height: 5px;
  
  background-image: linear-gradient(130deg, #00b4e6, #00f0e0);
`
