import styled from 'styled-components'
import { default as ReactHeader } from '../../molecules/Header'
import ReactItem from '../../atoms/Item'

export const Wrapper = styled.div``

export const Header = styled(ReactHeader)``

export const InputFile = styled.input.attrs({
  type: 'file',
  accept: '.mp4',
  multiple: true
})`
  display: none;
`

export const Item = styled(ReactItem)``
