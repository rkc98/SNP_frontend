import Pagination from "../Pagination/Pagination";
import { useMemo, useState } from "react";
import { CSVLink } from "react-csv";

let PageSize = 10;
const headers = [
  { label: "User Name", key: "username" },
  { label: "Mobile No", key: "mobile" },
  { label: "Email", key: "email" },
  { label: "EMP ID", key: "empid" },
];
const AdminList = (props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return props.responseData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, props.responseData]);
  return (
    <>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>
              <span className="custom-checkbox">
                <input
                  type="checkbox"
                  id="selectAll"
                  onChange={props.selectAll}
                />
                <label htmlFor="selectAll"></label>
              </span>
            </th>
            <th>Username</th>
            <th>Email</th>
            <th>Employee ID</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((data, index) => {
            return (
              <tr key={index}>
                <td>
                  <span className="custom-checkbox">
                    <input
                      type="checkbox"
                      id={`checkbox${index}`}
                      name="options[]"
                      value={data.id}
                    />
                    <label htmlFor={`checkbox+${index}`}></label>
                  </span>
                </td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>{data.empid}</td>
                <td>{data.mobile}</td>
                <td>
                  <a
                    href="#/"
                    className="edit"
                    onClick={() => props.editHandleShow(data.id)}
                  >
                    <i
                      className="material-icons"
                      data-toggle="tooltip"
                      title="Edit"
                    >
                      &#xE254;
                    </i>
                  </a>
                  <a
                    href="#/"
                    className="delete"
                    onClick={() => props.deleteData(data.id)}
                  >
                    <i
                      className="material-icons"
                      data-toggle="tooltip"
                      title="Delete"
                    >
                      &#xE872;
                    </i>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="row">
        <div className="col-sm-10">
          {" "}
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={props.responseData.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
        <div className="col-sm-2">
          <CSVLink
            data={props.responseData}
            headers={headers}
            filename={"admin.csv"}
            className="btn btn-primary p-2"
          >
            Export to CSV
          </CSVLink>
        </div>
      </div>
    </>
  );
};

export default AdminList;
