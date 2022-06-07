import React from "react";
import { Link } from "react-router-dom";
import Newsletter from "../Newsletter";

const Body = () => {
  return (
    <div className="container mt-5">
      <div className="post-wrap">
        <div className="post">
          <img
            src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="post"
          />
          <h4 className="bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            saepe.
          </h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            repudiandae eius quos autem quas molestiae?
          </p>
          <button className="button button-primary button-small">
            Read More
          </button>
        </div>
        <div className="post">
          <img
            src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="post"
          />
          <h4 className="bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            saepe.
          </h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            repudiandae eius quos autem quas molestiae?
          </p>
          <button className="button button-primary button-small">
            Read More
          </button>
        </div>
        <div className="sidebar">
          <div className="side-post mb-4">
            <h6>Lorem ipsum dolor sit amet consectetur.</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae sapiente optio corporis eveniet.
            </p>
            <Link to="/">Read More</Link>
          </div>
          <div className="side-post mb-4">
            <h6>Lorem ipsum dolor sit amet consectetur.</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae sapiente optio corporis eveniet.
            </p>
            <Link to="/">Read More</Link>
          </div>
          <div className="side-post mb-4">
            <h6>Lorem ipsum dolor sit amet consectetur.</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae sapiente optio corporis eveniet.
            </p>
            <Link to="/">Read More</Link>
          </div>
        </div>
      </div>

      <div className="second-post-container">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="bold mb-3 mt-4">Lorem, ipsum dolor.</h3>
          <Link className="button button-primary" to="/">
            See all articles
          </Link>
        </div>

        <div className="second-post">
          <div className="post">
            <img
              src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
            <h3 className="fs-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              molestiae accusamus expedita voluptatem itaque incidunt rem
              laboriosam ullam magni corporis.
            </p>
            <Link to="/">Read in 3 minutes</Link>
          </div>
          <div className="post">
            <img
              src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
            <h3 className="fs-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              molestiae accusamus expedita voluptatem itaque incidunt rem
              laboriosam ullam magni corporis.
            </p>
            <Link to="/">Read in 3 minutes</Link>
          </div>
          <div className="post">
            <img
              src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
            <h3 className="fs-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              molestiae accusamus expedita voluptatem itaque incidunt rem
              laboriosam ullam magni corporis.
            </p>
            <Link to="/">Read in 3 minutes</Link>
          </div>
          <div className="post">
            <img
              src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
            <h3 className="fs-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              molestiae accusamus expedita voluptatem itaque incidunt rem
              laboriosam ullam magni corporis.
            </p>
            <Link to="/">Read in 3 minutes</Link>
          </div>
        </div>
      </div>

      <div className="mt-5 third-post-container">
        <div className="post">
          <div className="post-item">
            <h3 className="bold fs-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              distinctio.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
              commodi, delectus quisquam laborum perferendis tenetur voluptate
              aliquam quam eum soluta.
            </p>
            <Link to="/">Read in 1 minutes</Link>
          </div>
          <div className="post-item">
            <h3 className="bold fs-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              distinctio.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
              commodi, delectus quisquam laborum perferendis tenetur voluptate
              aliquam quam eum soluta.
            </p>
            <Link to="/">Read in 1 minutes</Link>
          </div>
        </div>
        <div className="post">
          <img
            src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default Body;
