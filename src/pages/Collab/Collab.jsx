import React, { useState } from "react";
import { SingleCollab } from "../../components/Collab/SingleCollab";
import {
  Typography,
  Grid,
  Box,
  Button,
  Dialog,
  Input,
  Autocomplete,
  TextField,
  Stack,
} from "@mui/material";
import axios from "axios";
const Collab = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkill] = useState("");
  const [url, setUrl] = useState("");
  const [ratio, setRatio] = useState("");
  const PostData = ({ title, description, skills, url, ratio }) => {
    axios.post("", {
      title,
      description,
      skills,
      url,
      ratio,
    });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const top100Films = [
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
    {
      title: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: "Goodfellas", year: 1990 },
    { title: "The Matrix", year: 1999 },
    { title: "Seven Samurai", year: 1954 },
    {
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977,
    },
    { title: "City of God", year: 2002 },
    { title: "Se7en", year: 1995 },
    { title: "The Silence of the Lambs", year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: "Life Is Beautiful", year: 1997 },
    { title: "The Usual Suspects", year: 1995 },
    { title: "Léon: The Professional", year: 1994 },
    { title: "Spirited Away", year: 2001 },
    { title: "Saving Private Ryan", year: 1998 },
    { title: "Once Upon a Time in the West", year: 1968 },
    { title: "American History X", year: 1998 },
  ];
  return (
    <>
      <Typography
        sx={{
          paddingTop: "2rem",
          display: "flex",
          justifyContent: "center",
          fontSize: "4rem",
        }}
      >
        Find Collabrators
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          paddingTop: "3rem",
          paddingBottom: "3rem",
          width: "80%",
        }}
      >
        <Button
          onClick={() => {
            handleClickOpen();
          }}
          variant="outlined"
        >
          Create A Offer
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ padding: "3rem" }}
      >
        <Box>
          <Input
            sx={{ padding: "1rem" }}
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            focused
            sx={{ padding: "1rem" }}
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Stack
            spacing={3}
            sx={{ width: "100%", overflow: "hidden", padding: "1rem" }}
          >
            <Autocomplete
              multiple
              id="tags-standard"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Skills"
                  placeholder="Skills"
                  onChange={(e) => setSkill(e.target.value)}
                />
              )}
            />
          </Stack>
          <Input
            sx={{ padding: "1rem" }}
            type="tel"
            placeholder="Offered XP Ratio"
            onChange={(e) => setRatio(e.target.value)}
          />
        </Box>
        <Input
          sx={{ padding: "1rem" }}
          type="url"
          placeholder="Enter Bounty ID"
          onChange={(e) => setUrl(e.target.value)}
        />
        <Box
          sx={{
            height: "6rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            onClick={() => {
              PostData(title, description, skills, url, ratio);
            }}
          >
            Summit
          </Button>
        </Box>
      </Dialog>
      <Grid
        sx={{ paddingTop: "4rem" }}
        container
        spacing={2}
        gap={10}
        justifyContent="center"
        place-items="center"
      >
        {/* {arr.map(({ name, description }) => {
        return (
          <>
            <div key={}>
              <SingleCollab
                name="bounty 1"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
        fugiat eos saepe in quas nihil nesciunt, minus officia corporis
        consequatur esse amet ad, odit quia eius aliquid laudantium consectetur
        corrupti?"
              />
            </div>
          </>
        );
      })} */}
        <SingleCollab
          name="bounty 1"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
        fugiat eos saepe in quas nihil nesciunt, minus officia corporis
        consequatur esse amet ad, odit quia eius aliquid laudantium consectetur
        corrupti?"
        />
      </Grid>
    </>
  );
};

export default Collab;
