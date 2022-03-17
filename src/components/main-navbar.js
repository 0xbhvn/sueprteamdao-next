import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";
import Image from "next/image";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Toolbar,
  Dialog,
} from "@mui/material";
import { useRouter } from "next/router";
import { Menu as MenuIcon } from "../icons/menu";

import log from "./superteam.jpg";
import { OfferForm } from "../components/Collab/OfferForm";

export const MainNavbar = (props) => {
  const { onOpenSidebar } = props;
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkill] = useState("");
  const [url, setUrl] = useState("");

  const userId = "62302ee3b9d20031f8cefa8d";
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const router = useRouter();
  const id = router.query.MyCollab;

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
        borderBottomColor: "divider",
        borderBottomStyle: "solid",
        borderBottomWidth: 1,
        color: "text.secondary",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 64 }}>
          <NextLink href="/" passHref>
            <a>
              <Image
                className="rounded"
                src={log}
                alt="logo"
                width="60"
                height="65"
              />
            </a>
          </NextLink>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            color="inherit"
            onClick={onOpenSidebar}
            sx={{
              display: {
                md: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box
            sx={{
              alignItems: "center",
              display: {
                md: "flex",
                xs: "none",
              },
            }}
          >
            <NextLink href="/AllCollab" passHref>
              <Link
                color="textSecondary"
                underline="none"
                variant="subtitle2"
                sx={{ padding: "0 1rem" }}
              >
                All Collab
              </Link>
            </NextLink>

            <Link
              onClick={() => router.push(`/Collab/Mycollab/${userId}`)}
              color="textSecondary"
              underline="none"
              variant="subtitle2"
              sx={{ padding: "0 1rem", cursor: "pointer" }}
            >
              My Collabs
            </Link>

            <Link
              color="textSecondary"
              sx={{ ml: 2, padding: "0 2rem", cursor: "pointer" }}
              underline="none"
              variant="subtitle2"
              onClick={() => {
                handleClickOpen();
              }}
            >
              Create an offer
            </Link>
            <Button
              sx={{
                ml: 2,
                "&:hover": {
                  color: "black",
                  backgroundColor: "rgb(250,180,25)",
                },
                backgroundColor: "#FACC15",
                color: "black",
              }}
              target="_blank"
              variant="contained"
              onClick={() => router.push("https://bdyc-six.vercel.app/")}
            >
              BDYC
            </Button>
          </Box>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{ padding: "3rem" }}
          >
            <OfferForm />
          </Dialog>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

MainNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};
