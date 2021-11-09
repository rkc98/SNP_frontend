import { useEffect, useState } from "react";
import AdminCreationUI from "../components/AdminCreation/AdminCreationUI";
import axios from "axios";
import { SERVICE_BASE_URL } from "../Utils/Constant";
import Swal from "sweetalert2";

const AdminCreation = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [responseData, setResponseData] = useState([]);
  const [error, setError] = useState();
  const [id, setId] = useState();
  const [editShow, setEditShow] = useState(false);

  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchInput) {
      console.log(searchInput);
      axios({
        method: "post",
        url: `${SERVICE_BASE_URL}admin/${searchInput}`,
      })
        .then((response) => {
          console.log(response.data);
          setResponseData(response.data);
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
        });
    } else {
      Swal.fire(
        "Type search text ",
        "Please enter some search text !",
        "warning"
      );
    }
  };

  const editHandleShow = (id) => {
    setEditShow(true);
    setId(id);
  };

  const editHandleClose = () => {
    setEditShow(false);
    window.location.reload();
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `${SERVICE_BASE_URL}admin`,
    })
      .then((response) => {
        console.log(response.data);
        setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  }, []);

  const deleteData = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete the record ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "delete",
          url: `${SERVICE_BASE_URL}admin/${id}`,
        })
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              Swal.fire("Deleted!", "Admin has been deleted.", "success");
              window.location.reload();
            } else {
              Swal.fire("Oops!", "Something went wrong.", "error");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const selectAll = (e) => {
    let value = false;

    console.log(e);
    if (e.target.checked) {
      value = true;
    }

    Array.from(document.querySelectorAll("input[name= 'options[]']")).forEach(
      (checkbox) => {
        document.getElementById(checkbox.id).checked = value;
      }
    );
  };

  const deleteAll = () => {
    let values = [];
    Array.from(
      document.querySelectorAll("input[name= 'options[]']:checked")
    ).forEach((checkbox) => {
      values.push(parseInt(checkbox.value));
    });

    if (values.length === 0) {
      Swal.fire(
        "Select record",
        "Please select records to be deleted !",
        "warning"
      );
    } else {
      console.log(values);
      axios({
        method: "delete",
        url: `${SERVICE_BASE_URL}deleteAllById`,
        data: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            Swal.fire(
              "Deleted!",
              "Records has been deleted successfully.",
              "success"
            );
          } else {
            Swal.fire("Oops!", "Something went wrong.", "error");
          }
        })
        .catch((err) => {
          console.log(err);
        });

      window.location.reload();
    }
  };

  return (
    <>
      <AdminCreationUI
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        responseData={responseData}
        editShow={editShow}
        editHandleShow={editHandleShow}
        editHandleClose={editHandleClose}
        id={id}
        deleteData={deleteData}
        selectAll={selectAll}
        deleteAll={deleteAll}
        error={error}
        handleSearchInput={handleSearchInput}
        searchInput={searchInput}
        handleSearchSubmit={handleSearchSubmit}
      />
    </>
  );
};

export default AdminCreation;
