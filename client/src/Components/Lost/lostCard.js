// import {Card, Button} from 'react-bootstrap'
// import { useDispatch } from 'react-redux'
// import { useHistory } from 'react-router'
// import  { deleteLost } from '../../Redux/actions/lostActions'

// function LostCard({el}) {
//    const dispatch = useDispatch()

//     return(
//         <div>
//            <Card style={{ width: '10rem' }}>
//   <Card.Img variant="top" src={el.Picture}    />
//   <Card.Body>
//     <Card.Title>{el.name}</Card.Title>
//     <Card.Title>{el.age}</Card.Title>
//     <Card.Text>
//       {el.description}
//     </Card.Text>
//     <Button variant="primary" onClick={()=>(dispatch(deleteLost(el._id)))} >Go somewhere</Button>
//   </Card.Body>
// </Card>
//         </div>
//     )
// }





// import {Card, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
// import { useHistory } from 'react-router'
// import  { deleteLost } from '../../Redux/actions/lostActions'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function LostCard({el}) {
  // const dispatch = useDispatch()
  return (
    <div className="list">
    <Card className='lost-card' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={el.Picture}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {el.name} , {el.age}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {el.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}

export default LostCard




