import React, { useEffect, useState } from 'react'
import Spinner from "../layout/Spinner";
import { Link } from 'react-router-dom';

const Service = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState("");
  // const [search1, setSearch1] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    getCustomers();
    setLoading(false);
  }, [customers]);


  const date = new Date();
  const time = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const dateLine = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });


  const handleSearch = (e) => {
    e.preventDefault();

      console.log("Search Clicked");
      setSearch(value);
      console.log(search);
      customers.filter((customer) => customer.name.toLowerCase().includes(search));
      console.log(customers);
  };

  const handleReset = (e) => {
    e.preventDefault();
    console.log("Reset Clicked");
    setSearch("");
    customers.filter((customer) => customer.name.toLowerCase().includes(search));
    setValue("");
    // setStatusFilter("ALL")
    getCustomers();
  };

  // const getCustomers = async () => {
  //   return await axios
  //     .get("http://localhost:7000/customers")
  //     .then((res) => setCustomers(res.data))
  //     .catch((err) => console.log(err));
  // };
  const getCustomers = () => {
    fetch("https://64af87c2c60b8f941af42f32.mockapi.io/costumers")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error retrieving customers');
        }
        return res.json();
      })
      .then((resp) => {
        setCustomers(resp);
      })
      .catch((err) => {
        console.log('Error:', err.message);
        // Handle the error condition, display an error message, etc.
      });
  };

  const deleteHandler = (id, name) => {
    if (window.confirm(`Do you want to remove  ${name}'s Details ?`)) {
      fetch("https://64af87c2c60b8f941af42f32.mockapi.io/costumers/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          // window.location.reload();
          getCustomers();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <>
    <div className="justify-content-center">
      {/* <h1 className="mb-4 text-success colump">
        <b> Service Page </b>
      </h1> */}

      <section className="contact-search ">
        <div className="container">
          <div className="grid">
            <div className="row text-center">
              <div className="col">
                <p className="h1 fw-bold text-primary">ITR007 Customers</p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem voluptas officia officiis vero quibusdam ab maiores,
                  quasi tenetur corporis sapiente veniam, ipsa expedita alias
                  amet unde eum quas laboriosam voluptate provident.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="container col-md-12 my-5">
            <div className="card">
              <div className="card-title mt-2">
                <h2>Customers Data</h2>

                <h3 className="dateline">{dateLine}</h3>
                <h3 className="timeline">{time}</h3>
              </div>

              <div className="card-body">
                <div className="divbtn">
                  <Link to="/customers/add" className="btn btn-danger mb-2">
                    Add New <i className="fa fa-plus-circle me-1" />
                  </Link>
                </div>

                <div className="filter ">
                  <form className="m-2" onSubmit={handleSearch}>
                    <input
                      type="text"
                      placeholder="Search"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      required
                    />
                    <button
                      className="btn btn-success m-2"
                      // onClick={handleSearch}
                      type="submit"
                    >
                      Serach
                    </button>
                    <button
                      className="btn btn-success m-2 mx-1"
                      onClick={handleReset}
                    >
                      Reset
                    </button>
                  </form>
                </div>

                <table className="table table-bordered">
                  <thead className="bg-dark text-white">
                    <tr>
                      <td>ID</td>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Phone</td>
                      <td>Message</td>

                      <td>Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    {customers &&
                      customers
                        .filter((customer) =>
                          customer.name.toLowerCase().includes(search)
                        )
                        .map((item, index) => (
                          <tr key={item.id}>
                            <td>{index + 1}</td>

                            <td>{item.name.toUpperCase()}</td>
                           
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.msg}</td>

                            <td>
                              <Link
                                to={`/customers/view/${item.id}`}
                                className="btn btn-primary mx-1"
                                title="View The Data"
                              >
                                {" "}
                                <i className="fa fa-eye" />
                              </Link>
                              <Link
                                to={`/customers/edit/${item.id}`}
                                className="btn btn-success mx-1"
                                title="Edit The Data"
                              >
                                {" "}
                                <i className="fa fa-pen" />
                              </Link>
                              <a
                                onClick={(e) => deleteHandler(item.id, item.name)}
                                className="btn btn-danger mx-1"
                                title="Delete The Data"
                              >
                                {" "}
                                <i className="fa fa-trash" />
                              </a>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  </>
  )
}

export default Service