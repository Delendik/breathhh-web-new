import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'
import { observer } from 'mobx-react-lite'

import { LayoutBase } from 'src/components/LayoutBase'

const Title = styled.div`
  margin-top: 70px;
  font-size: 42px;
  line-height: 50px;
`

const Subtitle = styled.p`
  margin: 30px 0 40px;
  color: #71727b;
  font-size: 18px;
  line-height: 24px;
`

const Row = styled.p`
  margin: 24px 0 0;
  color: #232a34;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`

export const PageContact: React.FC<RouteComponentProps> = observer(() => {
  return (
    <LayoutBase>
      <div>
        <Title>Contacts</Title>
        <Subtitle>Product developed by Yahht Team</Subtitle>
        <Row>
          Email: <a href="mailto:mail@breathhh.app">mail@breathhh.app</a>
        </Row>
        <Row>
          Facebook:{` `}
          <a href="https://www.facebook.com/breathhh.page" target="_blank" rel="noreferrer">
            www.facebook.com/breathhh.page
          </a>
        </Row>
      </div>
    </LayoutBase>
  )
})
