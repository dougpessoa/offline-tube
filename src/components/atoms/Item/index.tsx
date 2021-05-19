import React from 'react'
import * as S from './styles'
import * as T from '../../../types'

export type ItemTypes = {
  videos: T.ListVideos[]
  onDoubleClicked: (item: T.ListVideos) => void
}

const Item = ({ onDoubleClicked, videos = [] }: ItemTypes) => {
  console.log(videos)
  return (
    <S.Wrapper>
      {videos.map((video, index) => (
        <S.Item key={video.name} onDoubleClick={() => onDoubleClicked(video)}>
          <S.Index>{index + 1}</S.Index>
          <S.Name>{ video.name }</S.Name>
          <S.Buttons>
            <S.PlayIcon />
            <S.RemoveIcon />
          </S.Buttons>
        </S.Item>
      ))}
    </S.Wrapper>
  )
}

export default Item
