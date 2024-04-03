import { useEffect, useState } from "react";

const CheckBox = () => {
  const response = [
    { name: "Devashish" },
    { name: "Jeevan" },
    { name: "Shaillo" },
    { name: "Jayesh" },
  ];
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(response);
  }, []);

  const handleClick = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };
  const handleChange = () => {};
  return (
    <div>
      <h1>CheckBox Ques</h1>
      <div>
        <input
          type="checkbox"
          className="checkall"
          name="allSelect"
          checked={
            users.filter((users) => users?.isChecked !== true).length < 1
          }
          onChange={handleChange}
        />
        <label className="checkall"> SelectAll </label>
      </div>
      {response.map((user) => (
        <div>
          <input
            type="checkbox"
            className="checkall"
            name="user.name"
            checked={user?.isChecked || false}
            onChange={handleClick}
          />
          <label className="checkall"> {user.name} </label>
        </div>
      ))}

      {/* <div>
        <input type="checkbox" className="checkall" />
        <label className="checkall"> SelectAll </label>
      </div>
      <div>
        <input type="checkbox" className="checkall" />
        <label className="checkall"> Check1 </label>
      </div>
      <div>
        <input type="checkbox" className="checkall" />
        <label className="checkall"> check2 </label>
      </div>
      <div>
        <input type="checkbox" className="checkall" />
        <label className="checkall"> check3 </label>
      </div>
      <div>
        <input type="checkbox" className="checkall" />
        <label className="checkall"> check4 </label>
      </div> */}
    </div>
  );
};

export default CheckBox;
