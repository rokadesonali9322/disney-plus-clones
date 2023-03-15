import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Originals from './Originals'
import Viewers from './Viewers'
import Recommands from './Recommands'
import NewDisney from './NewDisney'
import Trending from './Trending'

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommands />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  )
}
export default Home

// container
const Container = styled.div `
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px);

&:after{
    background: url("/images/home-background.png") center center/cover no-repeat fixed ;        
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
}
`;