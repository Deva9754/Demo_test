// import { useEffect, useState } from "react";

// const CheckBox = () => {
//   const response = [
//     { name: "Devashish" },
//     { name: "Jeevan" },
//     { name: "Shaillo" },
//     { name: "Jayesh" },
//   ];
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     setUsers(response);
//   }, []);

//   const handleClick = (e) => {
//     const { name, checked } = e.target;
//     if (name === "allSelect") {
//       let tempUser = users.map((user) => {
//         return { ...user, isChecked: checked };
//       });
//       setUsers(tempUser);
//     } else {
//       let tempUser = users.map((user) =>
//         user.name === name ? { ...user, isChecked: checked } : user
//       );
//       setUsers(tempUser);
//     }
//   };
//   const handleChange = () => {};
//   return (
//     <div>
//       <h1>CheckBox Ques</h1>
//       <div>
//         <input
//           type="checkbox"
//           className="checkall"
//           name="allSelect"
//           checked={
//             users.filter((users) => users?.isChecked !== true).length < 1
//           }
//           onChange={handleChange}
//         />
//         <label className="checkall"> SelectAll </label>
//       </div>
//       {response.map((user) => (
//         <div>
//           <input
//             type="checkbox"
//             className="checkall"
//             name="user.name"
//             checked={user?.isChecked || false}
//             onChange={handleClick}
//           />
//           <label className="checkall"> {user.name} </label>
//         </div>
//       ))}

//       {/* <div>
//         <input type="checkbox" className="checkall" />
//         <label className="checkall"> SelectAll </label>
//       </div>
//       <div>
//         <input type="checkbox" className="checkall" />
//         <label className="checkall"> Check1 </label>
//       </div>
//       <div>
//         <input type="checkbox" className="checkall" />
//         <label className="checkall"> check2 </label>
//       </div>
//       <div>
//         <input type="checkbox" className="checkall" />
//         <label className="checkall"> check3 </label>
//       </div>
//       <div>
//         <input type="checkbox" className="checkall" />
//         <label className="checkall"> check4 </label>
//       </div> */}
//     </div>
//   );
// };

// export default CheckBox;

import React, { useEffect, useState } from "react";

function CheckBox() {
  const userData = [
    { name: "Jeevan" },
    { name: "Manish" },
    { name: "Prince" },
    { name: "Arti" },
    { name: "rahul" },
  ];

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
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

  return (
    <div style={{ width: "500px" }}>
      <h3>Select Users</h3>
      <div>
        <input
          type="checkbox"
          className="form-check-input"
          name="allSelect"
          // checked={
          //   users.filter((user) => user?.isChecked !== true).length < 1
          // }
          checked={!users.some((user) => user?.isChecked !== true)}
          onChange={handleChange}
        />
        <label className="form-check-label ms-2">All Select</label>
      </div>
      {users.map((user, index) => (
        <div key={index}>
          <input
            type="checkbox"
            className="form-check-input"
            name={user.name}
            checked={user?.isChecked || false}
            onChange={handleChange}
          />
          <label className="form-check-label ms-2">{user.name}</label>
        </div>
      ))}
    </div>
  );
}

export default CheckBox;
