import styled from 'styled-components'

import { MdAdd } from 'react-icons/md'

export const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  /* background: red; */
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`
export const Add = styled(MdAdd)`
  width: 30px;
  height: 30px;
  color: white;
  cursor: pointer;
`
