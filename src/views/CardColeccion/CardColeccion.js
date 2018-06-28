import React , {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid,Card,CardActions,Button } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { httpGet} from '../../services/servicesHttp'
import {ENDPOINTS } from '../../constants'
import {Link} from 'react-router-dom'
import defecto from '../../images/defecto.png'
import withSizes from 'react-sizes'

const styles = {
  card: {
    maxWidth: 345,
    minWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};



class CardColeccion extends Component {

  render(){
    const { classes,xs,sm,md,colecciones } = this.props;
    return (
      <Grid container justify='space-around'>
        {colecciones.map((item,i)=>(
          <Grid key={i} item xs={xs ? 12 : sm ? 6 : md ? 4 : 4} style={{marginTop:30,display:'flex',justifyContent : 'center'}}>
            <Card  className={classes.card}>
              <CardMedia
                className={classes.media}
                image={defecto}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  {item.Nombre}
                </Typography>
                <Typography component="p">
                 {item.Detalle}
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} to={this.props.match.path+"/"+item.Id} size="small" color="primary" style={{marginLeft:'auto'}}>
                  Entrar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
 
}

CardColeccion.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapSizesToProps = ({ width }) => ({
  xs: width < 420,
  sm: width < 600 ,
  md: width < 960 ,
})


export default withStyles(styles)(withSizes(mapSizesToProps)(CardColeccion));