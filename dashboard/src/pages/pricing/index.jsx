import React from 'react'
import { Box, Button, colors, TextField, useTheme } from '@mui/material'
import Header from "../../components/Header";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { tokens } from "../../theme";

const tiers = [
  {
    title: 'BASIC',
    price: '55',
    description: [
      'Get basic KPIs of all containers installed',
      'Free maintainance of the system',
      '15% share of the produced electricity',
      '25% share of produced electricity after 3years',
      'CO2 emission reduction',
      'Marketing tools',
      '',
      '',
    ],
    buttonText: 'Subscribe now',
    buttonVariant: 'contained',
  },
  {
    title: 'PREMIUM+',
    price: '150',
    description: [
      'Get basic KPIs of all containers installed',
      'Access to the control dashboard',
      'Free maintainance of the system',
      'Free use of the battery system',
      '25% share of the produced electricity',
      '50% share of produced electricity after 3years',
      'CO2 emission reduction',
      'Marketing tools',
    ],
    buttonText: 'Subscribe now',
    buttonVariant: 'contained',
  },
  {
    title: 'ELITE',
    price: '70',
    description: [
      'Own the system and batteries',
      'Get basic KPIs of all containers installed',
      'Access to the control dashboard',
      'Free maintainance of the system',
      'Up to 25 KWh battery storagy',
      '100% share of the produced electricity',
      'CO2 emission reduction',
      'Marketing tools',
    ],
    buttonText: 'Buy now',
    buttonVariant: 'contained',
  },
];

const Pricing = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
          <Header title="Pricing Options" subtitle="Choose your ZIGRID subscription Model"/>
          <Container maxWidth="lg" component="main">
            <Grid container spacing={5} alignItems="center">
              {tiers.map((tier) => (
              
                <Grid
                  item
                  key={tier.title}
                  xs={12}
                  sm={tier.title === 'Enterprise' ? 12 : 6}
                  md={4}
                >
                  <Card>
                    <CardHeader
                      title={tier.title}
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: 'center' }}
                      action={tier.title === 'Pro' ? <StarIcon /> : null}
                      subheaderTypographyProps={{
                        align: 'center',
                      }}
                      sx={{
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark'
                            ? colors.greenAccent[500]
                            : colors.greenAccent[500]
                      }} 
                    />
                    <CardContent
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'dark'
                          ? colors.primary[400]
                          : theme.palette.grey[200],
                    }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'baseline',
                          mb: 2,
                          
                        }}
                      >
                        <Typography component="h2" variant="h1" color="text.primary">
                          {tier.price}€
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                          /month
                        </Typography>
                      </Box>
                      <ul>
                        {tier.description.map((line) => (
                          <Typography
                            component="li"
                            variant="subtitle1"
                            align="center"
                            key={line}
                          >
                            {line}
                          </Typography>
                        ))}
                      </ul>
                    </CardContent>
                    <CardActions
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'dark'
                          ? colors.primary[400]
                          : theme.palette.grey[200],
                    }}>
                      <Button fullWidth variant={tier.buttonVariant}
                      sx={{
                        color:"text.primary",
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark'
                            ? colors.greenAccent[400]
                            : theme.palette.grey[200],
                          
                      }}
                      
                      >
                        {tier.buttonText}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
      </Container>
          
        </Box>
      );
}

export default Pricing