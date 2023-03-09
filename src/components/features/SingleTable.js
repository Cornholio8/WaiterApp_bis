import { useParams } from 'react-router'
import { getTableById } from '../../redux/tablesRedux';
import { useSelector } from 'react-redux';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { updateTableData } from '../../redux/tablesRedux';
import { getAllStatuses } from '../../redux/statusRedux';

const SingleTable = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const tableData = useSelector(state => getTableById(state, id));
    const statuses = useSelector(getAllStatuses);

    const [status, setStatus] = useState(tableData.status);
    const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount);
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData.maxPeopleAmount);
    const [bill, setBill] = useState(tableData.bill);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateTableData({ status, peopleAmount, maxPeopleAmount, bill, id }));
        navigate('/');
    }

    if (maxPeopleAmount > 10) setMaxPeopleAmount(10);
    if (maxPeopleAmount < 0) setMaxPeopleAmount(0);
    if (peopleAmount > maxPeopleAmount) setPeopleAmount(maxPeopleAmount);
    if (peopleAmount < 0) setPeopleAmount(0);

    if (!tableData) return <h2>Loading...</h2>

    return (
        <>
            <Row>
                <h1>Table {tableData.id}</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Row className="mb-4 mt-4 d-flex align-items-center">
                            <Col md={1}>
                                <strong>Status:</strong>
                            </Col>
                            <Col md={2}>
                                <Form.Select id="statusSelect" onChange={(e) => setStatus(e.target.value)} value={status}>
                                    {statuses.map(status => <option key={shortid()} value={status} >{status}</option>)}
                                </Form.Select>
                            </Col>
                        </Row>
                        {status === 'Busy' &&
                        <Row className="mb-4 mt-4 d-flex align-items-center">
                            <Col md={1}>
                                <strong>People:</strong>
                            </Col>
                            <Form.Control
                                className="pl-3"
                                style={{ width: '60px', marginLeft: '10px', marginRight: '10px' }}
                                type="number"
                                value={peopleAmount}
                                onChange={(e)=> setPeopleAmount(e.target.value)}
                            />
                            /
                            <Form.Control
                                className="pl-3"
                                style={{ width: '60px', marginLeft: '10px', marginRight: '10px' }}
                                type="number"
                                value={maxPeopleAmount}
                                onChange={(e)=> setMaxPeopleAmount(e.target.value)}
                            />
                        </Row>}
                        {status === 'Busy' &&
                        <Row className={'d-flex align-items-center'}>
                            <Col md={1}>
                                <strong>Bill:</strong>
                            </Col>
                            $
                            <Col md={2}>
                                <Form.Control
                                    style={{ width: '60px', marginRight: '10px' }}
                                    type="number"
                                    placeholder="current bill"
                                    onChange={(e) => setBill(e.target.value)}
                                    value={bill}/>
                            </Col>
                        </Row>}
                    </Form.Group>
                    <Button as="input" value={'UPDATE'} type="submit" style={{ marginTop: '20px' }} />
                </Form>
            </Row>
        </>
    );
}

export default SingleTable;