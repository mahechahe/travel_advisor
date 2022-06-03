import {makeStyles} from "@mui/styles";

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1), minWidth: 120, marginBottom: '30px', marginTop: '20px'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '28px',
    
  },
  marginBottom: {
    marginBottom: '0',
  },
  list: {
    height: '75vh', overflow: 'auto'
  },
  div: {
    marginTop: '0'
  }
  
}));