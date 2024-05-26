import { Card, CardContent, Typography } from "@mui/material";

const ListItemCard = ({ title, value }: any) => (
  <Card
    sx={{
      height: "100%",
      width: "100%",
      marginBottom: "1rem",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    }}>
    <CardContent>
      <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "0.5rem" }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ opacity: 0.8 }}>
        {value}
      </Typography>
    </CardContent>
  </Card>
);

export default ListItemCard;
