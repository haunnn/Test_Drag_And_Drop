import { KeywordType } from '../store/LaboratoryAtoms';
import styled from 'styled-components';

interface Props {
  item: KeywordType
}

const KeywordCardMini = ({item}: Props) => {
  return (
    <CardWrapper>
      {item.name}
    </CardWrapper>
  )
}

export default KeywordCardMini;

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  font-size: 12px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  background: #ffffff;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15),
    0px 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 24px;
`;