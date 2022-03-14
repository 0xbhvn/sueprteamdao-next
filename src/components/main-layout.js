import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import { useMoralis, useMoralisQuery } from "react-moralis";

const MainLayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100%",
  paddingTop: 64,
}));

export const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const { data, error, isLoading } = useMoralisQuery("GameScore");
  // const da = JSON.stringify(data, null, 2);
  // console.log(da);
  const router = useRouter();
  const {
    isAuthenticated,
    authenticate,
    isAuthenticating,
    user,
    logout,
    isLoggingOut,
  } = useMoralis();
  // const usrAddress = user;
  // console.log(user.id);
  const [isPhantom, setIsPhantom] = useState(false);

  const getProvider = () => {
    if ("solana" in window) {
      const provider = window.solana;
      if (provider.isPhantom) {
        setIsPhantom(true);
      }
    }
  };
  // const onOpenSidebar = () => {
  //   setIsSidebarOpen(true);
  // };
  useEffect(() => {
    getProvider();
  }, []);
  return (
    <MainLayoutRoot>
      {/* <IconButton color="inherit" onClick={onOpenSidebar()}></IconButton> */}
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: { md: "3rem", lg: " 4rem", sm: " 2rem" },
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        Welcome to Collab Dashboard
      </Typography>
      {/* <Typography>{usrAddress}</Typography> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "3rem",
        }}
      >
        {isAuthenticated && (
          <Button
            onClick={() => {
              router.push("/Collab/Collab");
            }}
            size="medium"
            variant="contained"
            sx={{ ml: 2 }}
            color="secondary"
          >
            Get started
          </Button>
        )}
      </Box>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {isAuthenticated ? (
          <Button
            component="a"
            onClick={logout}
            size="medium"
            sx={{ ml: 2 }}
            target="_blank"
            variant="outlined"
            color="secondary"
            disabled={isLoggingOut}
          >
            Logout
          </Button>
        ) : (
          <Button
            component="a"
            {...(isPhantom
              ? {
                  onClick: () => authenticate({ type: "sol" }),
                }
              : { href: "https://phantom.app/" })}
            size="medium"
            sx={{ ml: 2 }}
            target="_blank"
            variant="contained"
            disabled={isAuthenticating}
          >
            {isPhantom ? "Login" : "Get Phantom"}
          </Button>
        )}
      </Box>
    </MainLayoutRoot>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};
