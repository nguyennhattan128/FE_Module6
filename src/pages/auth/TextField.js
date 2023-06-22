import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    console.log('meta:',meta)
    return (
        <div className="mb-2">
            <label htmlFor={field.name}></label>
            <input
                className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete="off"
            />
            <label style={{color: "red", marginTop: "10px"}}><ErrorMessage component="div" name={field.name} className="error" /></label>
        </div>
    )
}