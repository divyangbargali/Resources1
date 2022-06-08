import { useHistory } from "react-router-dom";



const history = useHistory();


  <span onClick={() => history.goBack()} >
           <ArrowBackIcon sx={{fontSize:'40px'}}/>
        </span>