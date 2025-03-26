import { Link } from "react-router-dom"
export function Header(){
  return (
    <>
      <h1> Aplicação de filmes</h1>
      <ult>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies"></Link></li>
      </ult>
    </>
  );
}