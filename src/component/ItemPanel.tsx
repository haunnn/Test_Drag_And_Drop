import styled from "styled-components"
import ItemCard from "./ItemCard"

const sampleItem = [
  {
    "id": 1,
    "keyword": "keyword1"
  },
  {
    "id": 2,
    "keyword": "keyword2"
  },
  {
    "id": 3,
    "keyword": "keyword3"
  },
  {
    "id": 4,
    "keyword": "keyword4"
  },
  {
    "id": 5,
    "keyword": "keyword5"
  },
  {
    "id": 6,
    "keyword": "keyword6"
  },
  {
    "id": 7,
    "keyword": "keyword7"
  },
  {
    "id": 8,
    "keyword": "keyword8"
  },

]

const ItemPanel = () => {
  return (
    <PanelLayout>
      <HeaderWrapper>
        종목
      </HeaderWrapper>
      <ContentWrapper>
        {sampleItem.map((item) => {
          return <ItemCard key={item.id} keyword={item.keyword}/>
        })}
      </ContentWrapper>
    </PanelLayout>
  )
}

export default ItemPanel;

export const PanelLayout = styled.div`
  width: 30%;
  background: #f8f8f8;
  border-radius: 24px;

  margin: 30px;
  padding: 18px 0px;

  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15),
  0px 1px 3px rgba(0, 0, 0, 0.3);
`

export const HeaderWrapper = styled.div`
  padding: 0 30px 12px 30px;
`

export const ContentWrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow: auto;

  padding: 10px 0;


  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 22px;
`