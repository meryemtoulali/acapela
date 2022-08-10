import React, { Component } from "react";

import { COLUMNS } from "../Components/COLUMNS";
import Table from "../Components/Table"
import getCities from "../Services/api"
/*
const vCommunesVilles = () => {
    const [cities, setCities] = useState();
    const [loading, setLoading] = useState(true);

    const url = "http://demo5246547.mockable.io/";


    useEffect( () => {

       const doFetch = async (url) => {
            const response = await axios.get(url);
            //console.log(response.data);
            setCities(response.data);

            setLoading(false);
        
    }
       
        

        doFetch(url);

        
    }, [])
    
    
    console.log(cities);

    return(
        <div className="main-container">ok</div>
    )


    
}*/



class CommunesVilles extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cities: [] 
            
        
        };
    }

    componentDidMount() {
        
        const doGetCities = async () => {
            const result = await getCities("http://demo5246547.mockable.io/");
            console.log("result is ", result);
            this.setState({ cities: result});
        } 
        
        doGetCities();
    }

    // getCities = async (url) => {
    //     const response = await axios.get(url);

    //     this.setState({ cities: response.data });
    //     console.log(this.state.cities);
    // };

    render() {
        return (
            <div className="main-container">
                <div className="inner-container">
                    <Table columns = {COLUMNS}
                data = {this.state.cities}/>
                </div>
                
                
            </div>
        );
    }
}

export default CommunesVilles;
