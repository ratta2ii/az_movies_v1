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
      process.env.REACT_APP_PUBLIC_KEY
    )
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
    if (!values.name) errors.name = 'Required';
    if (!values.email) errors.email = 'Required';
    if (!values.phone) errors.phone = 'Required';
    if (!values.eventLocation) errors.eventLocation = 'Required';
    if (!values.eventDate) errors.eventDate = 'Required';
    if (!values.eventTime) errors.eventTime = 'Required';
    return errors;
  };

  return (
    <section id='contact' className={classes.root}>
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
              <Paper className={classes.paper}>
                <Grid container alignItems="flex-start" spacing={2}>

                  {/* Name */}
                  <Grid item xs={12} sm={6}>
                    <Field
                      variant="filled"
                      color="primary"
                      fullWidth
                      required
                      name="name"
                      component={TextField}
                      type="text"
                      label="Name"
                    />
                  </Grid>

                  {/* Email Address */}
                  <Grid item xs={12} sm={6}>
                    <Field
                      variant="filled"
                      name="email"
                      fullWidth
                      required
                      component={TextField}
                      type="email"
                      label="Email Address"
                    />
                  </Grid>

                  {/* Phone Number */}
                  <Grid item xs={12} sm={6}>
                    <Field
                      variant="filled"
                      name="phone"
                      fullWidth
                      required
                      component={TextField}
                      type="tel"
                      label="Phone Number"
                    />
                  </Grid>

                  {/* Company Name (optional) */}
                  <Grid item xs={12} sm={6}>
                    <Field
                      variant="filled"
                      name="companyName"
                      fullWidth
                      component={TextField}
                      type="text"
                      label="Company Name (Optional)"
                    />
                  </Grid>

                  {/* Event Location — full width */}
                  <Grid item xs={12}>
                    <Field
                      variant="filled"
                      fullWidth
                      required
                      name="eventLocation"
                      component={TextField}
                      type="text"
                      label="Event Location"
                    />
                  </Grid>

                  {/* Date of Event — 50% */}
                  <Grid item xs={12} sm={6}>
                    <Field
                      variant="filled"
                      fullWidth
                      required
                      name="eventDate"
                      component={TextField}
                      type="date"
                      label="Date of Event"
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  {/* Event Time — 50% */}
                  <Grid item xs={12} sm={6}>
                    <Field
                      variant="filled"
                      fullWidth
                      required
                      name="eventTime"
                      component={TextField}
                      type="time"
                      label="Event Time"
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  {/* Message */}
                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      name="message"
                      component={TextField}
                      multiline
                      label="Message"
                      placeholder="Write your message here..."
                      minRows={8}
                      variant="outlined"
                    />
                  </Grid>

                  {/* Form status message */}
                  <Grid item xs={12}>
                    <Box className={classes.formMessage}>
                      {formMessage}
                    </Box>
                  </Grid>

                  {/* Submit */}
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
