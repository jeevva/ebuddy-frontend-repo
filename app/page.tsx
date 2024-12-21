/* eslint-disable @next/next/no-img-element */
"use client";
import Cookies from "js-cookie";
import { useEffect, useMemo, useState } from "react";
// import { Provider } from "react-redux";

import { updateUserData } from "@/apis/userApi";
import { signInWithGoogle } from "@/config/firebaseConfig";
import { store } from "@/strore/store";
import AppTheme from "@/theme";
import { Box, Button, Card, Typography, useMediaQuery } from "@mui/material";

import BoxLogin from "./component/BoxLogin";
import BoxUser from "./component/BoxUser";
import { useUserData } from "./hook/userData";
import { Provider, useDispatch } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <AppTheme>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <BoxUser />
          <BoxLogin />
        </main>
      </AppTheme>
    </Provider>
  );
}
