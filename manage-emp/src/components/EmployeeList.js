
import { useContext, useState, useEffect } from 'react';
import Employee from './Employee';
import {EmployeeContext} from '../contexts/EmployeeContext';
import { Button, Alert } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import AddForm from './AddForm';
import Pagination from './Pagination';

const EmployeeList = () => {

   const {sortedEmployees} = useContext(EmployeeContext)

   const [showAlert, setShowAlert] = useState(false)
   const [currentPage, setCurrentPage]= useState(1)
   const [employeesPerPage] = useState(2)
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //const handleShowAlert = () => setShowAlert(true);

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    }

    useEffect(() => {
        handleClose();

        return () => {
            handleShowAlert();
        }

    }, [sortedEmployees]) // employees da herhangi bir değişiklik olunca handleclose çalışacak.

  const indexOfLastEmployee = currentPage * employeesPerPage
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
  const totalPagesNum = Math.ceil(sortedEmployees.length/ employeesPerPage)

    return (

        <>

        <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>Manage <b>Employees</b></h2>
          </div>
          <div className="col-sm-6">
            <Button onClick={handleShow} className="btn btn-success text-white" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
          </div>
        </div>
      </div>

      <Alert show={showAlert} variant="success">
          Employee List successfully updated!
      </Alert>
        
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    currentEmployees.map((employee) => (
                        <tr key={employee.id}>
                            <Employee employee={employee}></Employee>
                        </tr>
                    ))
                }
            </tbody>
        </table> 

        <Pagination 
         pages= {totalPagesNum} 
         setCurrentPage={setCurrentPage}
         currentEmployees = {currentEmployees}
         sortedEmployees = {sortedEmployees}
          />

        <Modal show={show} onHide={handleClose}>
            <Modal.Header className="modal-header" closeButton>
                Add Employee
            </Modal.Header>
            <Modal.Body>
                <AddForm></AddForm>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
            </Modal.Footer>
        </Modal>


        </>
    )
}

export default EmployeeList;

//.sort((a,b) => a.name.localeCompare(b.name))

// 