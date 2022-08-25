import axios from "axios";
import React, { useEffect, useState } from "react";
const TeamOne = (props) => {
  const [post, setPost] = useState([]);
  const getData = () => {
    axios
      .get(`http://167.71.196.5/api/v1/users?limit=1000&team=Media Lab`)
      .then((res) => {
        console.log(res.data.data);
        setPost(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="row">
      {post.map((value, i) => (
        <div className="col-lg-3" key={i}>
          <div className={`team team-style--bottom`}>
            <div className="thumbnail">
              <img
                src={`http://167.71.196.5/upload/${value.profile}`}
                alt="Blog Images"
              />
            </div>
            <div className="content">
              <h4 className="title">
                {value.lastName} {value.firstName}
              </h4>
              <p className="designation">{value.occupation}</p>
            </div>
            {/* <ul className="social-icon">
              {value.socialNetwork.map((social, index) => (
                <li key={index}>
                  <a href={`${social.url}`}>{social.icon}</a>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      ))}
    </div>
  );
};
export default TeamOne;
