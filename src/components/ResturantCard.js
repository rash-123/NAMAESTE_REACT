import { LOGO_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const { resData } = props;
    const {
        name,
        rating,
        cuisine,
        delivery,
    } = resData?.data;
 return (
  <div>
   <div className='res-card' style={{ backgroundColor: "#f0f0f0" }}>
    <img
     className='res-logo'
     src= {LOGO_URL}
     alt='res-logo'
    />
    <h3>{name}</h3>
    <h4>{cuisine}</h4>
    <h4>{rating}</h4>
    <h4>{delivery}</h4>
   </div>
  </div>
 );
};

export default ResturantCard;