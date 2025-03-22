import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";

const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const data = [
  { value: "Admin", label: "Admin" },
  { value: "Manager", label: "Manager" },
  { value: "User", label: "User" },
];

function Form() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (_event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = () => {
    handleClick();
    console.log("donneeeeee");
  };

  return (
    <Box>
      <Header title={"CREATE USER"} subTitle={"Create a New User Profile"}    />
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 3 }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack sx={{ gap: 3 }} direction="row">
        <TextField
          error={Boolean(errors.firstName)}
          helperText={errors.firstName ? "First Name is required" : null}
          {...register("firstName", {
            required: "First Name is required",
            minLength: { value: 3, message: "Minimum length is 3" },
          })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.lastName)}
          helperText={errors.lastName ? "Last Name is required" : null}
          {...register("lastName", { required: "Last Name is required" })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>

      <TextField
        label="Email"
        variant="filled"
        error={Boolean(errors.email)}
        helperText={errors.email ? "Email is required and must be valid" : null}
        {...register("email", {
          required: "Email is required",
          pattern: { value: regEmail, message: "Invalid email" },
        })}
      />

      <TextField
        label="Contact Number"
        variant="filled"
        error={Boolean(errors.contactNumber)}
        helperText={errors.contactNumber ? "Contact Number is required" : null}
        {...register("contactNumber", {
          required: "Contact Number is required",
          maxLength: { value: 11, message: "Maximum length is 11" },
          minLength: { value: 11, message: "Minimum length is 11" },
          pattern: { value: phoneRegExp, message: "Invalid phone number" },
        })}
      />

      <TextField label="Address 1" variant="filled" {...register("address1")} />
      <TextField label="Address 2" variant="filled" {...register("address2")} />

      <TextField
        id="outlined-select-role"
        select
        label="Role"
        defaultValue="User"
        variant="filled"
        {...register("role")}
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }}>
        <Button
          sx={{ textTransform: "capitalize" }}
          variant="contained"
          type="submit"
        >
          Create New User
        </Button>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="info"
            variant="filled"
            sx={{ width: "100%" }}
          >
            User created successfully!.
            </Alert>
        </Snackbar>
      </Box>
        </Box>
    </Box>
  );
}

export default Form;
