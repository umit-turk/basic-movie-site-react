import { Form, Button, FormGroup } from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';

import { useContext, useState } from 'react';

const EditForm = ({theEmployee}) => {

    const { updateEmployee } = useContext(EmployeeContext);

    const employee = theEmployee;
    const id = employee.id;

    const [name, SetName] = useState(employee.name);
    const [email, SetEmail] = useState(employee.email);
    const [address, SetAddress] = useState(employee.address);
    const [phone, SetPhone] = useState(employee.phone);

    const updatedEmployee = {id, name, email, address, phone};

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, updatedEmployee);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => SetName(e.target.value)}
                required
                ></Form.Control>
            </FormGroup>

            <FormGroup>
                <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
                required
                ></Form.Control>
            </FormGroup>

            <FormGroup>
                <Form.Control
                as="textarea"
                placeholder="Adress"
                name="address"
                value={address}
                onChange={(e) => SetAddress(e.target.value)}
                row={3}
                ></Form.Control>
            </FormGroup>

            <FormGroup>
                <Form.Control
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => SetPhone(e.target.value)}
                placeholder="Phone"
                ></Form.Control>
            </FormGroup>

            <Button variant="success" type="submit" block>Update Employee</Button>
        </Form>
    )
}

export default EditForm;