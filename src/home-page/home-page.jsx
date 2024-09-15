import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';




export default function HomePage({ message }) {


    const [images, setImages] = useState([]);

    // let imgs = ["https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     "https://images.pexels.com/photos/5370674/pexels-photo-5370674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    // ]

    //useEffect is equivalent of lifecycle methods in class componenet in function comp.
    // reference code -https://stackoverflow.com/questions/70147185/rest-api-react-and-axios-in-functional-component
    //https://react.dev/reference/react/useEffect#connecting-to-an-external-system
    useEffect(() => {
        getImagesData();
    }, []);

    const nav = useNavigate();

    // getImagesData(); This function uses axios to connect to GET service and sets the state which is an array type variable.
    function getImagesData() {
        //axios is a thrid party library to send ajax request. fetch is an internal library to js. axios returns data in the form 
        //of promise.
        axios
            .get("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.data)
            .then(data => setImages(data))
            .catch(err => console.log(err))
    }

    console.log(images)

    return (
        <main className='home-page'>
            <div>
                <button className="btn" onClick={() => { nav('/') }}>
                    Back
                </button>
            </div>
            <div>
                <p>{message}</p>
                {images.map((url) => (<img key={url.id} src={url.url} alt="cart" style={{ maxHeight: '500px', width: 'auto', height: '70%' }} />))}
            </div>
        </main>
    );



}