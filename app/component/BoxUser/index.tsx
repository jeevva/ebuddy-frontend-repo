import Cookies from "js-cookie";
import Image from "next/image";
import { FunctionComponent, useEffect, useState } from "react";

import { User } from "@/apis/user";
import { useUserData } from "@/app/hook/userData";
import { Box, Button, Card, Typography, useMediaQuery } from "@mui/material";

import FormUser from "./_component/FormUser";

interface BoxUserProps {}

const BoxUser: FunctionComponent<BoxUserProps> = ({}) => {
  const mediaMaxWidth400 = useMediaQuery("(max-width:400px)");
  const [userData, setUserData] = useState<User | undefined>(undefined);

  const { user,setUserState } = useUserData();

  if (!user?.email) {
    return <></>;
  }


  const name = user?.name ? user?.name : user?.email;

  return (
    <Card
      variant="outlined"
      className="p-12 rounded-lg flex flex-col gap-4 items-center"
      style={{ minWidth: 400, maxWidth: 400 }}
    >
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
      >
        {`Hello, ${name?.slice(0, 5)}`}
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
      {userData ? (
        <FormUser userData={userData} setUserData={setUserData} />
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column" , gap:2,width:"100%"}}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => {
              setUserData(user);
            }}
          >
            Detail
          </Button>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => {
              Cookies.set("userEmail",  "", { expires: 7 });
              setUserState({})

            }}
          >
            Log Out
          </Button>
        </Box>
      )}
    </Card>
  );
};

export default BoxUser;
