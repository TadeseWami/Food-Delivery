import React, { useEffect, useState, useContext } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
import { StoreContext } from "../../context/StoreContext";
const List = ({ url }) => {
  const { token } = useContext(StoreContext);
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("error occurred");
    }
  };
  const removeFood = async (foodId) => {
    const response = await axios.post(
      `${url}/api/food/remove`,
      {
        id: foodId,
      },
      {
        headers: {
          token: token,
        },
      },
    );

    console.log(response.data);

    if (response.data.success) {
      toast.success(response.data.message);
      await fetchList();
    } else {
      toast.error(response.data.message);
    }
  };
  // const removeFood = async (foodId) => {
  //   const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
  //   console.log(response.data);
  //   await fetchList();
  //   if (response.data.success) {
  //     toast.success(response.data.message);
  //   } else {
  //     toast.error(response.data.message);
  //   }
  // };
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>price</b>
          <b>Actions</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/${item.image}`} alt="" />
              {/* <p>{item.image}</p> */}
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={() => removeFood(item._id)} className="cursor">
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
