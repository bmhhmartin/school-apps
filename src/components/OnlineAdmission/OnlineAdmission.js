import React, {Fragment, useState, useEffect} from 'react';
import {Container, Row, Col, Form } from 'react-bootstrap';
import schoolLogo from '../../assets/images/school-green.png';

export default function OnlineAdmission() {

    const [formValue, setFormValue] = useState({
        name: '',
        gender: '',
        jscRoll: '',
        jscReg: '',
        group: '',
        board: '',
        passingYear: '',
        infoCorrect: false,
        title: ''
    });

    const nameHandle =(event)=>{
        setFormValue({...formValue, name:event.target.value})
    }
    const correctCheckbox=(event)=>{
        setFormValue({...formValue, infoCorrect: alert('My all information is correct. You can verify (if needed)')})
    }


    const formValid=()=>{
        if (formValue.name === ""){
            alert("Please fillup name field");
        }else{
            alert("Name Added")
        }
    }

    useEffect(() => {
        console.log("Console Updated");
     }, [formValue.name])


    return (
       <Fragment>
            <div className="admission">
                <Container>
                    <Row>
                    <h2 className="title">Online Admission</h2>
                        <Col lg={6}>
                            <form action="" onSubmit={formValid} className="separateCard border-success p-4">
                                <Form.Group className="mb-3">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" onChange={nameHandle}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                        <Form.Check inline type='radio' label="Male" value="Male" name="gender" onChange={(event)=>setFormValue({...formValue, gender: event.target.value})}/>
                                        <Form.Check inline type='radio' label="Female" value="Female" name="gender" onChange={(event)=>setFormValue({...formValue, gender: event.target.value})}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Row>
                                        <Col>
                                            <Form.Control type="number" placeholder="JSC Roll" onChange={(event)=>setFormValue({...formValue, jscRoll: event.target.value})} />
                                        </Col>
                                        <Col>
                                            <Form.Control type="number" placeholder="JSC Registration"  onChange={(event)=>setFormValue({...formValue, jscReg: event.target.value})}/>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Board</Form.Label>
                                    <Form.Select defaultValue="Choose..." onChange={(event)=>setFormValue({...formValue, board: event.target.value})}> 
                                        <option>--Educational Board--</option>
                                        <option>Dhaka</option>
                                        <option>Rajshahi</option>
                                        <option>Khulna</option>
                                        <option>Dinajpur</option>
                                        <option>Chittagang</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mt-3 mb-3">
                                    <Form.Label>Group Choice</Form.Label>
                                <div>
                                        <Form.Check inline name="group" value="Science" label="Science" type="radio" onChange={(event)=>setFormValue({...formValue, group: event.target.value})}/>
                                        <Form.Check inline name="group" value="Humanities" label="Humanities" type="radio" onChange={(event)=>setFormValue({...formValue, group: event.target.value})}/>
                                        <Form.Check inline name="group" value="Commerce" label="Commerce" type="radio" onChange={(event)=>setFormValue({...formValue, group: event.target.value})}/>
                                </div>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Passing Year</Form.Label>
                                    <Form.Select defaultValue="Choose..." onChange={(event)=>setFormValue({...formValue, passingYear: event.target.value})}> 
                                        <option>--Passing Year--</option>
                                        <option>2020</option>
                                        <option>2019</option>
                                        <option>2018</option>
                                        <option>2017</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3 mt-3" id="formGridCheckbox">
                                    <Form.Check type="checkbox" label="All information is correct"  onChange={correctCheckbox} />
                                </Form.Group>
                                <input type="submit" value="Submit" className="btn btn-success"/>
                            </form>
                        </Col>
                        <Col lg={6}>
                            <div className="info">
                                <div className="info_top">
                                        <img src={schoolLogo} className="pb-2" alt="" />
                                        <h5>ABC School Online Admission Form</h5>
                                </div>
                                <ul>
                                    <li><span>Name : </span>{formValue.name}</li>
                                    <li><span>Gender : </span> {formValue.gender}</li>
                                    <li><span>JSC Roll : </span>{formValue.jscRoll}</li>
                                    <li><span>JSC Registration : </span>{formValue.jscReg}</li>
                                    <li><span>Board : </span>{formValue.board}</li>
                                    <li><span>Group : </span>{formValue.group}</li>
                                    <li><span>Passing Year : </span>{formValue.passingYear}</li>
                                </ul>
                                <div className="info_top">
                                        <img src={schoolLogo} className="pt-5" alt="" />
                                        <p className="mb-0">Contact: 90990998</p>
                                        <p className="mb-0">Address: xyz, road 90, xyz</p>
                                </div> 
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
       </Fragment>
    )
}
