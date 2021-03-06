import React, {useState, useEffect, createRef} from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import useStyle from './styles'
import { PlaceDeatils } from '../PlaceDetails/PlaceDeatils'

export const List = ({places, childClicked, isLoading, type, setType, rating, setRating}) => {
  const classes = useStyle()
  
  const [elRefs, setElRefs] = useState([])
  
  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef())
    setElRefs(refs)

  }, [places])

  return (
    <div className={classes.container}>
      <Typography className={classes.marginBottom} variant='h5'>Restaurants, Hotels & Attractions around you</Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size='5rem'></CircularProgress>
        </div>
      ) : (
        <>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value='restaurants'>Restaurants</MenuItem>
              <MenuItem value='hotels'>Hotels</MenuItem>
              <MenuItem value='attractions'>Attractions</MenuItem>
            </Select> 
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}  className={classes.formControl}>
            <InputLabel>rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select> 
          </FormControl>
          <div className={classes.div}>
            <Grid container spacing={3} className={classes.list}>
              {places?.map((place, i) => {
                return <Grid ref={elRefs[i]} item key={i} xs={12}>
                  <PlaceDeatils place={place} selected={Number(childClicked) === i} refProp={elRefs[i]}></PlaceDeatils>
                </Grid>
              }) }
            </Grid>
          </div>
        </>
      )}
    </div>
  )
}
