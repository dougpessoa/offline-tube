import React from 'react'
import * as S from './styles'

type HeaderType = {
  addVideo: () => void
}

const Header = ({ addVideo }: HeaderType) => {
  return (
    <S.Wrapper>
      <S.Add onClick={addVideo} title="Adicionar vídeos" />
    </S.Wrapper>
  )
}

export default Header
