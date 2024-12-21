import { useUserData } from "@/app/hook/userData";
import { Box, Button, Card, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { FunctionComponent } from "react";

interface BoxLoginProps {}

const BoxLogin: FunctionComponent<BoxLoginProps> = ({}) => {
  const mediaMaxWidth400 = useMediaQuery("(max-width:400px)");

  const { user,loading, authLogin } = useUserData();

  if(user?.email){
    return <></>;
  }

  return (
    <Card
      variant="outlined"
      className="p-12 rounded-lg flex flex-col gap-4 items-center"
    >
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
      >
        Welcome Ebuddy App
      </Typography>

      <Image
        height="156"
        width="156"
        src="https://images.rentbabe.com/IMAGES/EBUDDY/ebuddy.svg"
        alt="logo"
      />

      {mediaMaxWidth400 && (
        <Typography component="h1" variant="body1">
          Sign in with Google
        </Typography>
      )}

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {loading ? (
          <Typography component="h1" variant="body1">
            Loading ...
          </Typography>
        ) : (
          <Button
            fullWidth
            variant="outlined"
            onClick={authLogin}
            className={`${mediaMaxWidth400 ? `mx-0` : "flex flex-row gap-2"}`}
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="24"
                width="24"
              >
                <path
                  fill="#4285f4"
                  d="M386 400c45-42 65-112 53-179H260v74h102c-4 24-18 44-38 57z"
                ></path>
                <path
                  fill="#34a853"
                  d="M90 341a192 192 0 0 0 296 59l-62-48c-53 35-141 22-171-60z"
                ></path>
                <path
                  fill="#fbbc02"
                  d="M153 292c-8-25-8-48 0-73l-63-49c-23 46-30 111 0 171z"
                ></path>
                <path
                  fill="#ea4335"
                  d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55z"
                ></path>
              </svg>
            }
          >
            {!mediaMaxWidth400 && "Sign in with Google"}
          </Button>
        )}
      </Box>
    </Card>
  );
};

export default BoxLogin;
