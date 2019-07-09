import React from "react";
import '../styling.css'
// import { Button, Card, Row, Col, CardTitle} from 'react-materialize';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Fighter extends React.Component {

    render() {
        return (

            <Card align="center">
            <CardActionArea>
            <img src={this.props.fighter.img_url} alt={this.props.fighter.name} width={400} height={500} mode='fit'/>
              
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.fighter.name}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    Moves: <br></br>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    
                  {this.props.fighter.moves[0].name1}
                  <br></br>
                  {this.props.fighter.moves[0].name2}
                  <br></br>
                  {this.props.fighter.moves[0].name3}
                  <br></br>
                  {this.props.fighter.moves[0].name4}
                </Typography>
              </CardContent>
                
              <Button id={this.props.key} size="small" color="primary" align="center" onClick={(event) => this.props.selectFighter(event)}>
                Player 1 - Select
              </Button>
              <Button id={this.props.key} size="small" color="primary" align="center" onClick={(event) => this.props.selectFighter(event)}>
                Player 2 - Select
              </Button>
            
            </CardActionArea>
          </Card>
        )
    }
}

export default Fighter