import React from 'react'
import * as S from './styles'

export type VideoTypes = {
  label: string
}

const Video = ({ label = 'Video' }: VideoTypes) => {
  return (
    <S.Wrapper>
      <h1>{label}</h1>
    </S.Wrapper>
  )
}

export default Video
