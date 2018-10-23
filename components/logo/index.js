import styled from 'styled-components';
import Link from "../link";

const Root = styled.h1`

`;

const Logo = () => (
  <Link href="/" as={Root}>Logo</Link>
);

export default Logo;
