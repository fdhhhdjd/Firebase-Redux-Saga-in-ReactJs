import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteContactsStart, getContactsStart } from "../redux/actions";

const ListRecord = () => {
  //!get from Firebase
  const { contacts: data } = useSelector((state) => state.data);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsStart());
  }, []);
  //!Delete Firebase
  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      dispatch(deleteContactsStart(id));
      dispatch(getContactsStart());
    }
  };

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-12">
            <div class="jumbotron">
              <h1 class="display-2">Contact Management System</h1>
            </div>
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data).map((id, index) => {
                  return (
                    <tr key={id}>
                      <th scope="row">{index + 1}</th>
                      <td>{data[id].fullName}</td>
                      <td>{data[id].mobile}</td>
                      <td>{data[id].email}</td>
                      <td>{data[id].address}</td>
                      <td>
                        <Link to={`/update/${id}`}>
                          <p className="btn text-primary">
                            <i className="fas fa-pencil-alt" />
                          </p>
                        </Link>

                        <p
                          className="btn text-danger"
                          onClick={() => onDelete(id)}
                        >
                          <i className="fas fa-trash-alt" />
                        </p>
                        <Link to={`/view/${id}`}>
                          <p className="btn text-info">
                            <i className="fas fa-eye" />
                          </p>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListRecord;
