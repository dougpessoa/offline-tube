import React, { useRef, useCallback, RefObject, useState } from 'react'
import * as S from './styles'
import * as T from '../../../types'

const ListView = () => {
  const [videos, setVideos] = useState<T.ListVideos[]>([{
    name: 'LISTA_03_GAB.mp4',
    path: '/home/douglaspessoa/Videos/estrutura_de_dados/tema 3/LISTA_03_GAB.mp4',
    lastModified: 1620769927414,
    lastModifiedDate: new Date(),
    size: 74226783,
    type: 'video/mp4'
  }])
  const inputRef = useRef(null) as RefObject<HTMLInputElement>
  // as RefObject<HTMLInputElement>

  const handleAddVideos = useCallback(() => {
    inputRef.current?.click()
  }, [])

  const handleChange = useCallback(({ target }: any) => {
    // setVideos(target.files)
    const { files } = target

    const movies = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]

      movies.push(file)
    }

    console.log(movies)
    setVideos(movies)
  }, [])

  const handleDoubleClicked = useCallback((item: T.ListVideos) => {
    console.log({ video: item })
  }, [])

  return (
    <S.Wrapper>
      <S.Header addVideo={handleAddVideos} />
      <S.InputFile ref={inputRef} onChange={handleChange} />
      <S.Item videos={videos} onDoubleClicked={handleDoubleClicked} />
    </S.Wrapper>
  )
}

export default ListView
