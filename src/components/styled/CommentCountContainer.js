import styled from 'styled-components';

const CommentCountContainer = styled.p`
  display: flex;
  align-items: center;
  font-size: 15px;
  gap: 8px;
`;

CommentCountContainer.defaultProps = {
  margin: '0 auto',
};

export default CommentCountContainer;