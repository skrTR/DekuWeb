import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

const BLogList = () => {
  const [PostList, setPostList] = useState([]);
  const getData = () => {
    axios
      .get(`https://medialabadmin.com/api/v1/articles?limit=1000`)
      .then((res) => {
        setPostList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Fragment>
      <div className="row">
        {PostList.map((value, i) => (
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
            <div className="blog blog-style--1">
              <div className="thumbnail">
                <a href={`/news-details/${value._id}`}>
                  <img
                    className="w-100"
                    src={`https://medialabadmin.com/upload/${value.profile}`}
                    alt="Blog Images"
                  />
                </a>
              </div>
              <div className="content">
                <p className="blogtype">{value.category}</p>
                <h4 className="title">
                  <a href={`/news-details/${value._id}`}>{value.title}</a>
                </h4>
                <div className="blog-btn">
                  <a
                    className="rn-btn text-white"
                    href={`/news-details/${value._id}`}
                  >
                    Унших
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default BLogList;
