import React, { Component } from 'react';


class Info extends React.Component {
        state = {
            isLoading: true,
            pictures: [],
            error: null
        };
        getFetchPictures() {
            this.setState({
                loading: true
            }, () => {
                fetch("./info.json").then(res => res.json()).then(result => this.setState({
                    loading: false,
                    pictures: result
                })).catch(console.log);
            });
        }
        componentDidMount() {
            this.getFetchPictures();
        }
        render() {
            const {
                pictures,
                error
            } = this.state;
            return (
              <React.Fragment>
              <h1>All Pictures</h1>
              {
                    error ? <p>
              {
                        error.message
                    } </p> : null}  {
                        pictures.map(pictureinfo => {
                            const {
                                nombre,
                                artista,
                                tamaño,
                                ubicacion,
                                fechaCreacion
                            } = pictures;
                            return (
                            <div key={nombre}>
                                <p>Nombre: {nombre}</p>
                                <p>Artista: {artista}</p>
                                <p>Tamaño: {tamaño}</p>
                                <p>Ubicacion: {ubicacion}</p>
                                <p>Fecha Creacion: {fechaCreacion}</p>
                                <hr />
                            </div>
                            );
                        })
                    } </React.Fragment>);
            }
        }

export default Info;