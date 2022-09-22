import styled from "styled-components";
import Practice from "../components/practice";

function HomePage() {
  return (
    <Wrapper>
      <h1>The Home Page</h1>
      <Practice />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 2rem;
  text-align: center;
`;

export default HomePage;
