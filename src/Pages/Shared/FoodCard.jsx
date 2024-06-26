
import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const axiosSecure= useAxiosSecure()
  const navigate = useNavigate()
  const location = useLocation()
  const { name, image, price, recipe,_id } = item;
  console.log(image);
  const {user}=UseAuth()
  const handleAddToCart = ()=> {
    // console.log(food, user.email);
    if (user && user.email) {
      // ToDo send a card
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post("/carts", cartItem)
        .then(res => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${name}added a to your card`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
      })
    } else {
      Swal.fire({
        title: "Your are not login",
        text: "Please Login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login',{state:{from:location}})

        }
      });
    }
}
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 p-2 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-400 mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
