import { useParams } from 'react-router-dom';


function Detail() {
   // acceder al url 
    const { id } = useParams();
 return (
    <h1> {id} </h1>
 )
}

export default Detail;