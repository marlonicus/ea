import Router from 'next/router'

const Link = ({ as: Root, href, children }) => (
  <Root onClick={() => Router.push(href)}>{ children }</Root>
);

export default Link;
