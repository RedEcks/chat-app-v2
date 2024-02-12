import React,{ useRef } from 'react'
import { Container, Form } from 'react-bootstrap'

export default function Login() {
    const idRef = useRef()

  return (
    <Container>
        <Form>
            <Form.Group>
                <Form.Label>Enter Your Id</Form.Label>
                    <Form.Control type='text' ref={idRef} required/>
            </Form.Group>
        </Form>
    </Container>
  )
}
