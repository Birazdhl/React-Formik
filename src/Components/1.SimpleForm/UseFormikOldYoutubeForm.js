import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
            name:'Biraz',
            email:'',
            channel:'',
            comments: '',
            address: '',
            social : {
                facebook:'',
                twitter:''
            },
            phoneNumbers: ['','']
}

const onSubmit = values => {
    console.log('Form data', values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email : Yup.string().email('Invalid emial format').required('Required!'),
    channel: Yup.string().required('Required!')
})

function UseOldYoutubeForm() {



    // console.log("Visited- Fields" ,formik.touched)

    return (
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
            <Form>

<div className='form-control'>

                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" 
                ></Field> 
                <ErrorMessage name='name' component={TextError} />
</div>

<div className='form-control'>

                <label htmlFor="email">E-mail</label>
                <Field type="text" id="email" name="email" 
                ></Field>
                <ErrorMessage name='email' >
                    {
                        (errorMsg) => <div className='error'>{errorMsg}</div>
                    }
                </ErrorMessage>
</div>

<div className='form-control'>

                <label htmlFor="channel">Channel</label>
                <Field type="text" id="channel" name="channel" placeholder='Youtube Channel Name'
                ></Field>
                <ErrorMessage name='channel' />
</div>

<div className='form-control'>

                <label htmlFor="comments">Comments</label>
                <Field as='textarea' id="comments" name="comments"
                ></Field>
</div>

<div className='form-control'>
        <label htmlFor='address'>Address</label>
        <Field name='address' >
            {
                (props) => {
                    const {field,form,meta} = props
                    // console.log('Render Props', props)
                    return<div> 
                        <input type='text' id='address'  {...field} />
                        {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                        </div>
                }
            }
        </Field>
</div>

<div className='form-control'>
    <label htmlFor='faebook'>Facebook Profile</label>
    <Field type='text' id='facebook' name='social.facebook' />
</div>

<div className='form-control'>
    <label htmlFor='twitter'>Twitter Profile</label>
    <Field type='text' id='twitter' name='social.twitter' />
</div>

<div className="form-control">
    <label htmlFor='primaryPh'>Primary Phone Numbers</label>
    <Field type='text' id='primaryPh' name='phoneNumbers[0]' />
</div>

<div className="form-control">
    <label htmlFor='secondaryPh'>Secondary Phone Numbers</label>
    <Field type='text' id='secondaryPh' name='phoneNumbers[1]' />
</div>


<button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default UseOldYoutubeForm


//yarn add yup
