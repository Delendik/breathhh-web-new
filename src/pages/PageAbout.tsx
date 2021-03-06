import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'
import { LayoutCenter } from 'src/components/LayoutCenter'

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PageAbout: React.FC<RouteComponentProps> = () => {
  return (
    <LayoutCenter>
      <Root>About</Root>
    </LayoutCenter>
  )
}
