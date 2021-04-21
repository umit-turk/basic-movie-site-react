import { Form, Button, FormGroup } from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext, useState } from 'react';

const AddForm = () => {

    const { addEmployee } = useContext(EmployeeContext);

   /*  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState(""); */

    const [ newEmployee, setNewEmployee] = useState({
        name: "", email: "", address: "" , phone: ""
    })

    const {name, email, address, phone } = newEmployee

    const onInputChange = (e) => {
        setNewEmployee({...newEmployee, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(name, email, address, phone)
    }

   

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={e => onInputChange(e)}
                required
                ></Form.Control>
            </FormGroup>

            <FormGroup>
                <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={e => onInputChange(e)}
                required
                ></Form.Control>
            </FormGroup>

            <FormGroup>
                <Form.Control
                as="textarea"
                placeholder="Adress"
                name="address"
                value={address}
                onChange={e => onInputChange(e)}
                row={3}
                ></Form.Control>
            </FormGroup>

            <FormGroup>
                <Form.Control
                type="text"
                name="phone"
                value={phone}
                onChange={e => onInputChange(e)}
                placeholder="Phone"
                ></Form.Control>
            </FormGroup>

            <Button variant="success" type="submit" block>Add New Employee</Button>
        </Form>
    )
}

export default AddForm;