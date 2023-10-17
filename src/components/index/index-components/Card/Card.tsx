import "./Card.scss"

export default function Card({ children }:{children:JSX.Element}) {
  return <div className="card">{children}</div>;
}
