import React from 'react'
import {useFormik} from 'formik'

const initialValues = {
            name:'',
            email:'',
            channel:''
}

const onSubmit = values => {
    console.log('Form data', values)
}

const validate = values => {
    let errors = {}

    if(!values.name){
        errors.name = 'Required'
    }

    if(!values.email){
        errors.email = 'Required'
    }

    if(!values.channel){
        errors.channel = 'Required'
    }
    else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email))
    {
        errors.email = 'Invalid email format'
    }


    return errors
}

function YoutubeForm() {

    const formik = useFormik({
         initialValues,
         onSubmit,
         validate
    })


    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" 
                onChange={formik.handleChange} value={formik.values.name}></input>

                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" name="email" 
                onChange={formik.handleChange} value={formik.values.email}></input>

                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" name="channel" 
                onChange={formik.handleChange} value={formik.values.channel}></input>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm
