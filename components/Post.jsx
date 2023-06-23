import styled from 'styled-components/native';

const PostView = styled.View`
  padding: 15px;
  height: 150px;
  width: 100%;
  border-radius: 10px;
  border-bottom-width: 3px;
  border-bottom-color: rgba(0,0,0,0.3);
  border-bottom-style: solid;
  flex-direction: row;
  align-items: center;
`;

const PostImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin-right: 20px;
`;

const PostTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

const PostDetails = styled.View`
flex-direction:column;
justify-content: center;
`;

const PostDate = styled.Text`
  font-size: 15px;
  color: rgba(0,0,0,0.4);
`;

export const Post = ({ title, date, imgSource }) => {
    return (
        <PostView>
            <PostImage source={{ uri: imgSource }}></PostImage>
            <PostDetails>
                <PostTitle>{title}</PostTitle>
                <PostDate>{date}</PostDate>
            </PostDetails>
        </PostView >
    )
}