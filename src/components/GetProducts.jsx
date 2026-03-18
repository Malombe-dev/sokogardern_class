import axios from "axios";
import { useEffect, useState } from "react";

const GetProducts = () => {
  // hooks
  //prodcts hook''
  const [products, setProduct] = useState([]);
  const [error, setError] = useState("");
  const [loding, setLoading] = useState("");
//path to our images 
const img_url = "https://malombeswala.alwaysdata.net/static/images/"
  //  function to get alkl the products
  const getproducts = async () => {
    setLoading("please wait....");
    try {
      //connect to yopur backedb Api
      const response = await axios.get(
        "https://malombeswala.alwaysdata.net/api/get_product_details",
      );
      console.log(response.data);
      //update the products hook with the data from the api response
      setProduct(response.data);
      //after getting the reposnse reset the loadding hook
      setLoading("");
    } catch (error) {
      setLoading("");
      setError("something went wrong");
    }
  };
  useEffect(() => {
    getproducts();
  }, []); //empty dependancy to snsure get products fuction runs once when the component mounts

  return (
    <div className="row">
      <h3 className="display-4 mt-3">Alvailable products</h3>
      {error}
      {loding}
      {products.map((product)=>(
        
          <div className="col-md-3 text-centermb-4 ">
        {/* card with dummy data */}
        <div className="card shadow">
            <img src={img_url + product.product_photo} alt="" className="product_img  mt-4" />
            <div className="crsd-body">
                <h5 className="mt-2">{product.product_name}</h5>
                <p className="tesxt-muted">{product.product_description}</p>
                <b className="text-warning">{product.product_cost} KES</b>
                <button className="btn btn-dark w-100 mt-2">Purchase now</button> 
                
            </div>
        </div>
      </div>
    ))}
    </div>
  );
};

export default GetProducts;
