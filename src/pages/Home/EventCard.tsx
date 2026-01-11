import React, { type CSSProperties } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import "./EventCard.scss";

export interface EventCardProps {
  title: string;
  date: string;
  location: string;
  fee: string;
  imageUrl: string;
  goldBorder?: boolean;
  style?: CSSProperties;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  location,
  fee,
  imageUrl,
  goldBorder = false,
  style,
}) => {
  return (
    <Card
      className={`event-card ${goldBorder ? "gold-border" : "white-border"}`}
      style={style}
    >
      <CardMedia component="img" height="150" image={imageUrl} alt={title} />
      <CardContent className="card-content">
        <Typography variant="h6" className="event-title">
          {title}
        </Typography>
        <Typography variant="body2">{date}</Typography>
        <Typography variant="body2">{location}</Typography>
        <Typography variant="body2">Fee: {fee}</Typography>
      </CardContent>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        className="event-buttons"
      >
        <Button variant="contained" color="success">
          Join
        </Button>
        <Button variant="contained" color="primary">
          Details
        </Button>
      </Stack>
    </Card>
  );
};

export default EventCard;
