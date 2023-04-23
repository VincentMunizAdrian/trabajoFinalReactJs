import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import styles from "./card.module.css";

const Cards = ({ items }) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia component="img" alt={items.nombre} height="300" image={items.imagen}/>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">{items.nombre}</Typography>
        {/* <Typography variant="body2" color="text.secondary">{items.posicion}</Typography> */}
        {/* <Typography variant="body2" color="text.secondary">{items.torneo}</Typography>
        <Typography variant="body2" color="text.secondary">{items.año}</Typography> */}
      </CardContent>
      
      <CardActions>
        <Button size="small">agregar al carrito</Button>
        <Link to={`/item/${items.id}`}>
          <Button size="small">+ info</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Cards;