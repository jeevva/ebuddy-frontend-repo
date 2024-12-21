import { ChangeEvent, FormEvent, FunctionComponent } from "react";

import { User } from "@/apis/user";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { useUserData } from "@/app/hook/userData";

interface FormUserProps {
  userData?: User;
  setUserData: (data?: User) => void;
}

const FormUser: FunctionComponent<FormUserProps> = ({
  userData,
  setUserData,
}) => {
  const { message,loading, updateUser } = useUserData();

  const onChangeUser = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const data = { ...userData, [name]: value };
    setUserData(data);
  };

  const onChangeTextArea = async (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const data = { ...userData, [name]: value };
    setUserData(data);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userData) updateUser(userData);
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: 2,
      }}
    >
       <Typography
        component="h1"
        variant="h6"
        sx={{ width: "100%", fontSize: "clamp(1rem, 5vw, 1.15rem)" }}
      >
       {message}
      </Typography>

      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <TextField
          id="email"
          type="email"
          name="email"
          placeholder="your@email.com"
          autoFocus
          required
          disabled
          fullWidth
          value={userData?.email}
          variant="outlined"
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="name">Name</FormLabel>
        <TextField
          id="name"
          type="text"
          name="name"
          placeholder="your name"
          autoFocus
          required
          fullWidth
          value={userData?.name}
          variant="outlined"
          onChange={onChangeUser}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="age">Age</FormLabel>
        <TextField
          id="age"
          type="number"
          name="age"
          placeholder="your age"
          autoFocus
          value={userData?.age}
          fullWidth
          variant="outlined"
          onChange={onChangeUser}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="address">Address</FormLabel>
        <TextareaAutosize
          id="address"
          name="address"
          placeholder="your Address"
          className="p-4 rounded-md"
          style={{ border: "1px solid #c4c4c4" }}
          autoFocus
          value={userData?.address}
          onChange={onChangeTextArea}
        />
      </FormControl>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Button fullWidth variant="outlined" type="submit">
          {loading ? "Loading..." : "Update"}
        </Button>
        <Button
          fullWidth
          variant="outlined"
          type="button"
          onClick={() => setUserData(undefined)}
        >
          Home
        </Button>
      </Box>
    </Box>
  );
};

export default FormUser;
