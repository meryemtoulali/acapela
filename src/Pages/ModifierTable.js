import { getPts, putPts } from "../Services/ServiceVilles";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const ModifierTable = (props) => {

    const updateId = useParams().id;
    //const itemId = navigation.getParam('itemId', 'NO-ID');
    const [ville, setVille] = useState("");
    const [pays, setPays] = useState("");
    const [codePostal, setCodePostal] = useState("");
    const [data, setData] = useState("");

    const [image, setImage] = useState("");

    const navigate = useNavigate();


    const doGetPts = async (updateId) => {
        const result = await getPts(updateId);
        //setData(result);
        console.log("result is ", result);
        //setVille(data.city); setPays(data.country); setCodePostal(data.postal_code)
        return result
    };

    

    useEffect(()=>{
        
        setData(doGetPts())
    }, [])
    
    
    
    

    const handleSubmit = (e) => {
        e.preventDefault();

        const formdata = new FormData();
        formdata.append("id", updateId);
        formdata.append("city", ville);
        formdata.append("country", pays);
        formdata.append("image", image);
        formdata.append("postal-code", codePostal);

        putPts(formdata);


        navigate('/points-d-interet');
    };
    const handleChange = (e) => {
        if (e.target.name === "ville") {
            setVille(e.target.value);
        } else
        if (e.target.name === "pays") {
            setPays(e.target.value);
        } else
        if (e.target.name === "codePostal") {
            setCodePostal(e.target.value);
        }
    };

    const handleFileSelect = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <div className="main-container">
            <div className="inner-container">
                <h5>Modifier</h5>
                <Form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-7">
                            <Form.Group>
                                <Form.Label htmlFor="Ville">
                                    Ville
                                </Form.Label>
                                <Form.Control
                                    name="ville"
                                    type="text"
                                    value={ville}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </div>

                        <div className="col-5">
                            <Form.Group>
                                <Form.Label>Image</Form.Label>
                                <Form.Control
                                    name="image"
                                    type="file"
                                    onChange={handleFileSelect}
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <Form.Group>
                        <Form.Label htmlFor="descriptionVille">
                            Pays
                        </Form.Label>
                        <Form.Control
                                    name="pays"
                                    type="text"
                                    value={pays}
                                    onChange={handleChange}
                                />
                    </Form.Group>


                    <Form.Group>
                        <Form.Label htmlFor="descriptionVille">
                            Code postal
                        </Form.Label>
                        <Form.Control
                                    name="codePostal"
                                    type="text"
                                    value={codePostal}
                                    onChange={handleChange}
                                />
                    </Form.Group>

                    <br />

                    <button className="btn btn-success mx-5" type="submit">
                        Valider
                    </button>
                    <button className="btn btn-secondary mx-5">Annuler</button>
                </Form>
            </div>
        </div>
    );
};

export default ModifierTable;
