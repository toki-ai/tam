import { useState } from 'react';

import { Col, Row } from 'react-bootstrap';

import ButtonCustom from './components/Button';
import SelectCustom from './components/FilterRoom/Select';
import SearchBar from './components/SearchRoom/SearchBar';
import TableRoom from './components/Table';
import { RoomStyle } from './style';

const AdminRoom = () => {
    const [result, setResult] = useState('All');
    function handleChange(e) {
        setResult(e.target.value);
    }
    return (
        <div className="p-2">
            <RoomStyle>
                <div className="box-style">
                    <Col className="p-3">
                        <Row className="color-primary mb-3">
                            <h3 className="fw-bold">Room Management</h3>
                        </Row>
                        <Row className="d-flex justify-content-around align-items-center mb-3">
                            <Col className="col-5">
                                <SearchBar />
                            </Col>
                            <Col className="col-4 d-flex justify-content-center">
                                <SelectCustom
                                    props={{
                                        name: 'Visibility:',
                                    }}
                                    handleChange={handleChange}
                                />
                            </Col>
                            <Col className="col-3 d-flex align-items-center justify-content-end">
                                <ButtonCustom
                                    props={{
                                        text: 'Create room',
                                        className:
                                            'bg-primary-1 text-light d-flex align-items-center text-nowrap rfs',
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center">
                            <TableRoom state={result} />
                        </Row>
                    </Col>
                </div>
            </RoomStyle>
        </div>
    );
};
export default AdminRoom;