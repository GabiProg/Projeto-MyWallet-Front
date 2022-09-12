export default function Entradas({data, description, value}) {
  return (
    <>
      <div><h4>{data}</h4><p>{description}</p><h3>{value}</h3></div>
    </>
  );
}
