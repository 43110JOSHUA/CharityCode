import React from "react";
import PageBorder from "../components/PageBorder";
import CreatePost from "../components/dashboard/CreatePost";
import OldPost from "../components/dashboard/OldPost";

const page = () => {
  return (
    <div className="bg-light-tan min-vh-100">
      <PageBorder>
        <div className="container py-5">
          <div className="row pt-2">
            <div className="col-12 col-md-6">
              <CreatePost />
            </div>
            <div className="col-12 col-md-6">
              <OldPost />
            </div>
          </div>
        </div>
      </PageBorder>
    </div>
  );
};
export default page;
