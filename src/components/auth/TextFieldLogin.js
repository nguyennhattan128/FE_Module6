import React from 'react';
import {ErrorMessage, useField} from "formik";

export const TextFieldLogin = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <div className="mb-2">
            <label htmlFor={field.name}></label>
            <input
                className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete="on"
            />
            <ErrorMessage component="div" name={field.name} className="error" />
        </div>
    )
}