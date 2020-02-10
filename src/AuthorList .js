import React from "react";
import authors from "./data";
import AuthorCard from "./AuthorCard";

const AuthorList = props => {
  const authorscards = props.authors.map(author => (
    <AuthorCard author={author} />
  ));
  return (
    <div className="content col-10">
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{authorscards}</div>
      </div>
    </div>
  );
};
export default AuthorList;
