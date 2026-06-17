import { useState } from "react";
import { Alert, Button, Grid, MenuItem, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV2";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { yupResolver as resolveYup } from "@hookform/resolvers/yup";
import { bookingFormValidation } from "./bookingFormValidation";

const BookingForm = ({
  availableTimes,
  dispatchAvailableTimes,
  submitForm,
}) => {
  const [step, setStep] = useState(0);
  const [submitError, setSubmitError] = useState("");

  const methods = useForm({
    defaultValues: {
      date: null,
      time: "",
      guests: 2,
      firstName: "",
      surname: "",
      mobileNumber: "",
      email: "",
    },
    resolver: resolveYup(bookingFormValidation),
  });

  const {
    control,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = methods;

  const handleNext = async () => {
    const isStepValid = await trigger(["date", "time", "guests"]);

    if (isStepValid) {
      setStep(1);
    }
  };

  const onSubmit = (values) => {
    setSubmitError("");
    const isSubmitted = submitForm(values);

    if (!isSubmitted) {
      setSubmitError("Unable to confirm your reservation. Please try again.");
    }
  };

  const handleDateChange = (newDate, onChange) => {
    onChange(newDate);
    setValue("time", "");
    dispatchAvailableTimes({ type: "dateChanged", date: newDate });
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <FormProvider {...methods}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <form aria-label="Booking form" onSubmit={handleSubmit(onSubmit)}>
            {step === 0 ? (
              <Grid
                container
                direction="column"
                gap={2}
                width={{ xs: "100%", sm: "500px" }}
              >
                {submitError && <Alert severity="error">{submitError}</Alert>}
                <Controller
                  name="date"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      label="Reservation date"
                      value={field.value}
                      onChange={(newDate) =>
                        handleDateChange(newDate, field.onChange)
                      }
                      slotProps={{
                        textField: {
                          error: Boolean(errors.date),
                          helperText: errors.date?.message,
                        },
                      }}
                    />
                  )}
                />
                <Controller
                  name="time"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="reservation-time"
                      label="Reservation time"
                      select
                      error={Boolean(errors.time)}
                      helperText={errors.time?.message}
                    >
                      {availableTimes.map((time) => (
                        <MenuItem key={time} value={time}>
                          {time}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
                <Controller
                  name="guests"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="number-of-guests"
                      label="Number of guests"
                      type="number"
                      error={Boolean(errors.guests)}
                      helperText={errors.guests?.message}
                      inputProps={{ min: 1, max: 10 }}
                    />
                  )}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Next
                </Button>
              </Grid>
            ) : (
              <Grid
                container
                direction="column"
                gap={2}
                width={{ xs: "100%", sm: "500px" }}
              >
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="first-name"
                      label="First Name"
                      type="text"
                      error={Boolean(errors.firstName)}
                      helperText={errors.firstName?.message}
                    />
                  )}
                />
                <Controller
                  name="surname"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="surname"
                      label="Surname"
                      type="text"
                      error={Boolean(errors.surname)}
                      helperText={errors.surname?.message}
                    />
                  )}
                />
                <Controller
                  name="mobileNumber"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="mobile-number"
                      label="Mobile Number"
                      type="tel"
                      error={Boolean(errors.mobileNumber)}
                      helperText={errors.mobileNumber?.message}
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="email"
                      label="Email"
                      type="email"
                      error={Boolean(errors.email)}
                      helperText={errors.email?.message}
                    />
                  )}
                />
                <Grid
                  container
                  direction="row"
                  gap={2}
                  justifyContent="flex-end"
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setStep(0)}
                  >
                    Back
                  </Button>
                  <Button type="submit" variant="contained" color="primary">
                    Reserve a Table
                  </Button>
                </Grid>
              </Grid>
            )}
          </form>
        </LocalizationProvider>
      </FormProvider>
    </Grid>
  );
};

export default BookingForm;
