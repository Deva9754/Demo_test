import { useEffect, useState } from "react";
import "./Cards.css";

const Card = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/users`);
      const data = await response.json();
      setData(data.users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setData(getData);
  }, []);

  const handlesearch = (e) => {
    if (e.target.value) {
      const filteredData = data.filter((user) =>
        user.company.department
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
      setData(filteredData);
    } else {
      getData();
    }
  };

  return (
    <div>
      <h1>Card</h1>
      <input
        className="search"
        type="text"
        placeholder="Search"
        onChange={handlesearch}
      />
      <div className="Body">
        {data?.length
          ? data?.map((item) => (
              <div className="main" key={item.id}>
                <div className=" Card-top">
                  <img
                    className="img-user"
                    src={item.image}
                    alt=" loading..."
                  />
                </div>
                <div className="Card-bottom">
                  <div className="Card-bottom-1">
                    <div className="Card-bottom-1-1">
                      {item.firstName}
                      <div className="text">FirstName</div>
                    </div>
                    <div className="divider"></div>
                    <div className="Card-bottom-1-2">
                      {item.age}
                      <div className="text">Age</div>
                    </div>
                    <div className="divider"></div>

                    <div className="Card-bottom-1-3">
                      {item.company.department}
                      <div className="text">Designation</div>
                    </div>
                  </div>
                </div>
                <button className="btn">Follow</button>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};
export default Card;
