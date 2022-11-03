import React from 'react'
import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Contact = (props) => {
  const navigate = useNavigate();
  return (
    <div style={backgroundColor=blue}>
    <Form method="post" action="/events">
        <input type="text" name="title" />
        <input type="text" name="description" />
        <button type="submit">Create</button>
    </Form>
    </div>
  )
}

export default Contact
