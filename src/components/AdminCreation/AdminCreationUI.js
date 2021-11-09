import { Fragment } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

import "./AdminCreationUI.css";
import { Button } from "react-bootstrap";
import AddModal from "./AdminModal/AddModal";
import EditModal from "./AdminModal/EditModal";
import AdminList from "./AdminList";

const AdminCreationUI = (props) => {
  let content = <h3 className="text-center text-danger">No data found !</h3>;

  if (props.responseData.length > 0) {
    content = (
      <AdminList
        selectAll={props.selectAll}
        responseData={props.responseData}
        editHandleShow={props.editHandleShow}
        deleteData={props.deleteData}
      />
    );
  }

  if (props.error) {
    content = <h3 className="text-center text-danger">{props.error}</h3>;
  }

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return item;
    // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
  };
  const items = [
    {
      id: 0,
      name: "Cobol",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
  ];

  return (
    <Fragment>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Manage <b>Admin</b>
                  </h2>
                </div>

                <div className="col-sm-3">
                  <div className="input-group mb-3">
                    <input
                      id="search-input"
                      type="search"
                      placeholder="Search  here..."
                      className="form-control"
                      value={props.searchInput}
                      onChange={props.handleSearchInput}
                    />
                    {/* <div style={{ width: 200 }}>
                      <ReactSearchAutocomplete
                        items={props.responseData}
                        fuseOptions={{ keys: ["username"] }} // Search on both fields
                        resultStringKeyName="username" // String to display in the results
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        showIcon={false}
                        styling={{
                          height: "34px",
                          border: "1px solid darkgreen",
                          borderRadius: "4px",
                          backgroundColor: "white",
                          boxShadow: "none",
                          hoverBackgroundColor: "lightgreen",
                          color: "darkgreen",
                          fontSize: "12px",
                          fontFamily: "Courier",
                          iconColor: "green",
                          lineColor: "lightgreen",
                          placeholderColor: "darkgreen",
                          clearIconMargin: "3px 8px 0 0",
                        }}
                      />
                    </div> */}
                    <div className="input-group-append">
                      <button
                        id="search-button"
                        type="submit"
                        className="btn-primary search-btn"
                        onClick={props.handleSearchSubmit}
                      >
                        {" "}
                        <i className="fa fa-search search-icon"> </i>{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <Button variant="primary" onClick={props.handleShow}>
                    <i className="material-icons">&#xE147;</i>{" "}
                    <span>Add New Admin</span>
                  </Button>
                  <Button onClick={props.deleteAll} className="btn btn-danger">
                    <i className="material-icons">&#xE15C;</i>{" "}
                    <span>Delete</span>
                  </Button>
                </div>
              </div>
            </div>

            {content}
          </div>
        </div>
      </div>

      {/* Add Modal  */}
      <AddModal show={props.show} handleClose={props.handleClose} />

      {/* Edit Modal */}
      <EditModal
        id={props.id}
        show={props.editShow}
        handleClose={props.editHandleClose}
      />
    </Fragment>
  );
};

export default AdminCreationUI;
