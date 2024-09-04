import React, { useState, useRef } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Employee() {
    const [show, setShow] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false); // For delete confirmation modal
    const [modalMode, setModalMode] = useState('add'); // 'add' or 'edit'
    const [editingIndex, setEditingIndex] = useState(null);
    const [deletingIndex, setDeletingIndex] = useState(null); // Index of employee to delete
    const [employees, setEmployees] = useState([
        { name: 'Vinay', id: '001', dept: 'Testing', salary: '55000', age: '21' },
        { name: 'Pranag', id: '002', dept: 'HR', salary: '85000', age: '20' },
        { name: 'Ashlesh', id: '003', dept: 'Testing', salary: '65000', age: '28' }
    ]);
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [dept, setDept] = useState('');
    const [salary, setSalary] = useState('');
    const [age, setAge] = useState('');

    // Create refs for each input field
    const idRef = useRef(null);
    const deptRef = useRef(null);
    const salaryRef = useRef(null);
    const ageRef = useRef(null);

    const handleClose = () => {
        setShow(false);
        setModalMode('add'); // Reset mode to 'add'
        setEditingIndex(null); // Clear editing index
        // Clear input fields
        setName('');
        setId('');
        setDept('');
        setSalary('');
        setAge('');
    };

    const handleShow = () => setShow(true);

    const handleSave = () => {
        if (modalMode === 'edit') {
            // Update existing employee
            setEmployees(prevEmployees => {
                const updatedEmployees = [...prevEmployees];
                updatedEmployees[editingIndex] = { name, id, dept, salary, age };
                return updatedEmployees;
            });
        } else {
            // Add new employee
            setEmployees(prevEmployees => [
                 ...prevEmployees,
                { name, id, dept, salary, age }
            ]);
        }
        // Log employee details to console
        console.log({
            name,
            id,
            dept,
            salary,
            age
        });
        handleClose(); // Close the modal after saving
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
        const employee = employees[index];
        setName(employee.name);
        setId(employee.id);
        setDept(employee.dept);
        setSalary(employee.salary);
        setAge(employee.age);
        setModalMode('edit');
        handleShow(); // Show the modal for editing
    };

    const handleDelete = (index) => {
        setDeletingIndex(index);
        setShowConfirm(true); // Show the confirmation modal
    };

    const confirmDelete = () => {
        setEmployees(prevEmployees => prevEmployees.filter((_, i) => i !== deletingIndex));
        setShowConfirm(false); // Close the confirmation modal
    };

    const cancelDelete = () => {
        setShowConfirm(false); // Close the confirmation modal
    };

    // Function to handle Enter key press
    const handleKeyDown = (e, nextFieldRef) => {
        if (e.key === 'Enter' && nextFieldRef.current) {
            nextFieldRef.current.focus();
        }
    };

    return (
        <div>
            <h1>Employee Details</h1>
            <div className='button'>
                <Button variant="primary" onClick={handleShow}>
                    ADD
                </Button>
            </div>

            {/* Add/Edit Modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalMode === 'add' ? 'Add Employee' : 'Edit Employee'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        style={{ marginTop: '20px' }}
                        type='text'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, idRef)}
                    />
                    <input
                        ref={idRef}
                        style={{ marginTop: '8px' }}
                        type='tel'
                        placeholder='Enter id'
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, deptRef)}
                    />
                    <input
                        ref={deptRef}
                        style={{ marginTop: '8px' }}
                        type='text'
                        placeholder='Enter dept'
                        value={dept}
                        onChange={(e) => setDept(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, salaryRef)}
                    />
                    <input
                        ref={salaryRef}
                        style={{ marginTop: '8px' }}
                        type='tel'
                        placeholder='Enter salary'
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, ageRef)}
                    />
                    <input
                        ref={ageRef}
                        style={{ marginTop: '8px' }}
                        type='tel'
                        placeholder='Enter age'
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSave(); // Save when Enter is pressed in the last field
                            }
                        }}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleSave}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Delete Confirmation Modal */}
            <Modal show={showConfirm} onHide={cancelDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete this employee?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={cancelDelete}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Id</th>
                        <th>Dept</th>
                        <th>Salary</th>
                        <th>Age</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{employee.name}</td>
                            <td>{employee.id}</td>
                            <td>{employee.dept}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.age}</td>
                            <td><Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button></td>
                            <td><Button variant="warning" onClick={() => handleEdit(index)}>Edit</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Employee;
