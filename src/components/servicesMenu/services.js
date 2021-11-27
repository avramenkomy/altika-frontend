import React from 'react';
import { Container, Paper, Typography, Grid, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ServiceCard from './ServiceCard';

import decoration0 from '../../resources/img/types_of_expertise/calculator.jpeg';
import decoration1 from '../../resources/img/types_of_expertise/fingers_print.jpeg';
import decoration2 from '../../resources/img/types_of_expertise/home.jpg';
import decoration3 from '../../resources/img/types_of_expertise/lupa_400x400.jpeg';
import decoration4 from '../../resources/img/types_of_expertise/molotok.jpeg';
import decoration5 from '../../resources/img/types_of_expertise/transport.jpeg';

const serviceTypes = [
  {id: 0, title: 'Заключение эксперта', url: decoration0, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros. Nam id leo nec eros dignissim posuere.'},
  {id: 1, title: 'Отчет об оценке', url: decoration1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros. Nam id leo nec eros dignissim posuere.'},
  {id: 2, title: 'Заключение специалиста', url: decoration2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros. Nam id leo nec eros dignissim posuere.'},
  {id: 3, title: 'Рецензия', url: decoration3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros. Nam id leo nec eros dignissim posuere.'},
  {id: 4, title: 'Гарантийное письмо в суд', url: decoration4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros. Nam id leo nec eros dignissim posuere.'},
  {id: 5, title: 'Предварительный расчет', url: decoration5, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros. Nam id leo nec eros dignissim posuere.'},
];

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    width: '100vw',
  },
  title: {
    textAlign: 'center',
  },
  wrapper: {
    textAlign: 'center',
  },
}));

function Services() {
  const classes = useStyles();
  return (
    <>
      <Paper square className={classes.root}>
        <Container maxWidth={"lg"}>
          <Typography variant="h5" className={classes.title}>
            Услуги
          </Typography>

          {/** Этот блок виден только на маленьких экранах */}
          <Hidden mdUp>
            <span>Только для маленьких мониторов мониторов</span>
          </Hidden>

          {/** Этот блок виден только на больших экранах */}
          <Hidden smDown>
            <Grid container>
              {
                serviceTypes.map(service => {
                  return (
                    <Grid item xs={12} sm={6} md={4} key={service.id}>
                      <ServiceCard {...service} />
                    </Grid>
                  )
                })
              }
            </Grid>
          </Hidden>
        </Container>
      </Paper>
    </>
  )
}

export default Services;