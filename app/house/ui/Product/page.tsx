/* eslint-disable @next/next/no-img-element */
import './style.css'
function product_api({data} : {data :any}) {
    return ( 
        <div className="card">
            <img src={data?.img} alt="" />
            <h4>{data?.name}</h4>
            <p>{data?.title}</p>
        </div>
     );
}

export default product_api;