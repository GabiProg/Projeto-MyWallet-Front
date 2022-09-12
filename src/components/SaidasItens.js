export default function SaidasItens ({data, description, value}){
    return(
    <>
        <h4>{data}</h4><p>{description}</p><h3>{value}</h3>
    </>
    );
}