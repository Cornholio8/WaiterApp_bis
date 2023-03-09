import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TableData = ({ id, status }) => {

    return (
        <Row>
            <Row className="align-items-end mb-3 mt-3">
                <Col className="col-2">
                    <h2><strong>Table {id}</strong></h2>
                </Col>
                <Col className="col-4">
                    <strong>Status:</strong> {status} {''}
                </Col>
                <Col className="col-6 d-flex justify-content-end padding-right-0">
                    <Link to={'/table/' + id}>
                        <Button variant="primary" size="lg">Show more</Button>
                    </Link>
                </Col>
            </Row>
            <hr />
        </Row>
    );
};


export default TableData;