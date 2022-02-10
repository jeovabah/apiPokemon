import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../styles/cartPokemon.css"
export default function CardPokemon({title, image}) {
  return (
    <Card id="card">
      <CardMedia id="card-image" 
        component="img"
        alt="pokemon"
        image={image}
      />
      <CardContent>
        <Typography style={{textTransform: " uppercase ", color: " white " }} gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button className='button' size="small">Status</Button>
        <Button className='button' size="small">Habilidades</Button>
      </CardActions>
    </Card>
  );
}