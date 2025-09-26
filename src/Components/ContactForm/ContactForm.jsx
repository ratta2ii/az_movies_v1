import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import "./styles.css";
import useStyles from './ContactFormStyles';


const ContactForm = () => {
    let contactForm = useRef();
    const classes = useStyles();
    const [formMessage, setFormMessage] = useState("");

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        await emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            contactForm.current,
            process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                if (result.status === 200) {
                    setTimeout(() => {
                        setFormMessage("Your form has been sent successfully. Thank you!");
                    }, 1000);
                }
            }, (error) => {
                console.log(error.text);
                setTimeout(() => {
                    setFormMessage("There was a problem submitting your form. Please try again later or call us at (208) 352-3909.");
                }, 1000);
            });

        return;
    };

    const validate = (values) => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'Required';
        }
        if (!values.lastName) {
            errors.lastName = 'Required';
        }
        if (!values.email) {
            errors.email = 'Required';
        }
        if (!values.phone) {
            errors.phone = 'Required';
        }
        return errors;
    };

    return (
        <section
            id='contact'
            className={classes.root}
        >
            <Box className={classes.form}>
                <Form
                    onSubmit={handleSubmitForm}
                    initialValues={{ employed: true }}
                    validate={validate}
                    render={({ form, handleSubmit, reset, restart, submitting, pristine, values }) => (
                        <form
                            id='contact-form'
                            ref={contactForm}
                            onReset={reset}
                            onSubmit={async event => {
                                await handleSubmitForm(event);
                                setTimeout(() => {
                                    form.restart();
                                }, 1000);
                            }}
                        >
                            <Paper className={classes.paper} >
                                <Grid container alignItems="flex-start" spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            variant="filled"
                                            color="primary"
                                            fullWidth
                                            required
                                            name="firstName"
                                            component={TextField}
                                            type="text"
                                            label="First Name"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            variant="filled"
                                            fullWidth
                                            required
                                            name="lastName"
                                            component={TextField}
                                            type="text"
                                            label="Last Name"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            variant="filled"
                                            name="email"
                                            fullWidth
                                            required
                                            component={TextField}
                                            type="email"
                                            label="Email"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            variant="filled"
                                            name="phone"
                                            fullWidth
                                            required
                                            component={TextField}
                                            type="phone"
                                            label="Phone Number"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            variant="filled"
                                            fullWidth
                                            required
                                            name="city"
                                            component={TextField}
                                            type="text"
                                            label="City"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            variant="filled"
                                            fullWidth
                                            required
                                            name="state"
                                            component={TextField}
                                            type="text"
                                            label="State"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}></Grid>
                                    {/* Message (text area*/}
                                    <Grid item xs={12}>
                                        <Field
                                            fullWidth
                                            name="message"
                                            component={TextField}
                                            multiline
                                            label="Message"
                                            placeholder="Write your message here..."
                                            minRows={6}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box className={classes.formMessage}>
                                            {formMessage}
                                        </Box>
                                    </Grid>
                                    {/* Margin */}
                                    {/* <Grid item xs={12} sm={7}></Grid> */}
                                    {/* <Grid item style={{ marginTop: 20 }}>
                                        <Button
                                            type="button"
                                            variant="contained"
                                            onClick={() => {
                                                form.restart();
                                                setFormMessage('');
                                            }}
                                            className={classes.formResetButton}
                                        >
                                            Reset
                                        </Button>
                                    </Grid> */}
                                    <Grid item xs={12} style={{ marginTop: 20 }}>
                                        <Button
                                            variant="contained"
                                            type="submit"
                                            disabled={submitting}
                                            className={classes.formSubmitButton}
                                        >
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </form>
                    )}
                />
            </Box>
        </section>
    );
}

export default ContactForm;
