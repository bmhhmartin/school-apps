import React,  {Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,BarChart, Bar } from 'recharts';


export default function Charts() {
    const data = [
        {
          year: '2001',
          GPA5: 32,
          Scholarship: 5,
          students: 120
        },
        {
          year: '2002',
          GPA5: 130,
          Scholarship: 20,
          students: 435
        },
        {
            year: '2003',
            GPA5: 342,
            Scholarship: 140,
            students: 768
        },
        {
            year: '2004',
            GPA5: 56,
            Scholarship: 10,
            students: 1432
        },
        {
            year: '2005',
            GPA5: 112,
            Scholarship: 29,
            students: 1987
        },
        {
            year: '2006',
            GPA5: 323,
            Scholarship: 122,
            students: 3452
        },
        {
            year: '2007',
            GPA5: 211,
            Scholarship: 56,
            students: 5675
        },
        {
            year: '2008',
            GPA5: 355,
            Scholarship: 123,
            students: 7532
        },
        {
            year: '2009',
            GPA5: 456,
            Scholarship: 245,
            students: 8003
        },
        {
            year: '2010',
            GPA5: 654,
            Scholarship: 324,
            students: 9753
        }

        
      ];
    return (
        <Fragment>
            <h2 className="title">Result Charts</h2>
             <Container>
                 <Row>
                     <Col lg={6}>
                     <h3 className="subtitle text-center">Result Graph</h3>
                        <ResponsiveContainer width="100%" height={400}>
                                <LineChart
                                width={500}
                                height={400}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }} >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="year" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="GPA5" stroke="#FF5D55" fill="#FF5D55" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="Scholarship" stroke="#2ECD71" fill="#2ECD71" />
                                </LineChart>
                            </ResponsiveContainer>
                     </Col>
                     <Col lg={6}>
                         <h3 className="subtitle text-center">Total Student Graph</h3>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={data}>
                                <Bar dataKey="students" fill="#2ECD71" /><Tooltip />
                                <XAxis dataKey="year" fill="#FF5D55" /><Tooltip />
                                <YAxis dataKey="students" fill="#FF5D55" /><Tooltip />
                            </BarChart>
                        </ResponsiveContainer>
                     </Col>
                 </Row>
             </Container>
        </Fragment>
    )
}
