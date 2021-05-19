import styled, { css } from 'styled-components'

import { FaPlay, FaTimes } from 'react-icons/fa'

export const Wrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  
`

export const Item = styled.div`
  width: 100%;
  padding: 3px 0;
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
`

export const Index = styled.div`
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 900;
`

export const Name = styled.div`
  width: calc(100% - 150px);
  padding-left: 10px;

  font-size: 15px;
  display: flex;
  align-items: center;
  font-weight: 700;
`

export const Buttons = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const iconCSS = css``

export const PlayIcon = styled(FaPlay)`
  width: 15px;
  height: 15px;
  margin: 0px 10px; 
  color: white;
`
export const RemoveIcon = styled(FaTimes)`
  width: 20px;
  height: 20px;
  margin: 0px 10px; color: red;`
