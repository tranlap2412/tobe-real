/* eslint-disable @next/next/no-img-element */
import './style.css'
function Main({ data }: { data: any }) {
    return ( 
        <div className="api">
            <img src={data?.img} alt="" />
            <h4>{data?.name}</h4>
            <p>{data?.title}</p>
        </div>
     );
}

export default Main;