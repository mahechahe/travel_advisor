import React, {useState, useEffect} from 'react'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { CssBaseline, Grid } from '@mui/material'
import { Header } from './components/Header/Header'
import { List } from './components/List/List'
import { MapCom } from './components/Map/MapCom'
import { PlaceDeatils } from './components/PlaceDetails/PlaceDeatils'
import { getPlacesData } from './api';

const App = () => {
    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [coordinates, setCoords] = useState({});
    const [bounds, setBounds] = useState({});
    const [childClicked, setChildClicked] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [type, setType] = useState('restaurants')
    const [rating, setRating] = useState('restaurants')
    const theme = createTheme()

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
          setCoords({ lat: latitude, lng: longitude });
        });
      }, []);

    useEffect(() => {
        if (bounds) {
          setIsLoading(true);
    
          getPlacesData(type, bounds.sw, bounds.ne)
            .then((data) => {
              setPlaces(data);
              //setFilteredPlaces([]);
              setRating('');
              setIsLoading(false);
            });
        }
      }, [bounds, type]);

      


  return (
    <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <Header setCoordinates={setCoords}></Header>
        <Grid container spacing={3} style={{width: '100%'}}>
            <Grid item xs={12} md={4}>
                <List type={type} setType={setType} rating={rating} setRating={setRating} childClicked={childClicked} places={places} isLoading={isLoading}></List>
            </Grid>
            <Grid item xs={12} md={8}>
                <MapCom setChildClicked={setChildClicked} places={  places} setCoordinates={setCoords} setBounds={setBounds} coordinates={coordinates}></MapCom>
            </Grid>
        </Grid>
    </ThemeProvider>
  )
}

export default App
