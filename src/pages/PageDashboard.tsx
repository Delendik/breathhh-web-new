import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'
import { observer } from 'mobx-react-lite'
import { UserStore } from 'src/store/UserStore'
import { Header } from 'src/components/Header'
import { ContentInner } from 'src/components/ContentInner'

const WrapRow = styled.div`
  display: grid;
  gap: 20px;
  max-width: 374px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const RowTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
`

const RowIndex = styled.div`
  padding: 3px;
  background: #f1f2f2;
  border-radius: 4px;
`

const Banner = styled.div`
  padding: 12px 16px;
  background: #f1f2f2;
  border-radius: 6px;
`

const BannerTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`

const BannerText = styled.div`
  margin-top: 8px;
  color: #71727b;
  font-size: 16px;
  line-height: 20px;
`

const Progress = styled.div`
  height: 5px;
  margin-top: 10px;
  background: #ffc839;
  border-radius: 2px;
`

export const PageDashboard: React.FC<RouteComponentProps> = observer(() => {
  return (
    <div>
      <Header />
      <ContentInner>
        <Banner>
          <BannerTitle>Here is your engagement when surfing the web</BannerTitle>
          <BannerText>
            You can estimate how much attention you devote to certain websites
          </BannerText>
        </Banner>
        <WrapRow>
          {UserStore.engList.map((item) => {
            return (
              <div>
                <Row>
                  <RowTitle>{item.name}</RowTitle>
                  <RowIndex>{item.value}</RowIndex>
                </Row>
                <Progress />
              </div>
            )
          })}
        </WrapRow>
      </ContentInner>
    </div>
  )
})
