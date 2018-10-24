import Router from 'next/router'
import { noop } from "../../utils/fp"

const Link = ({ as: Root, href = false, children, onClick = () => { console.log('hey')} }) => (
    <Root onClick={() => href ? Router.push(href) : onClick()}>{ children }</Root>
);

export default Link;
