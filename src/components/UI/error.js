import React from "react";
import Button from "./Button";
import Card from "./Card";
import  "./error.modal.css";

const Error = props => {
    return (
        <div>
            <div className='backdrop' onClick={props.onConfirm}/>
            <Card cssClass="modal">
                <header className="header">
                    <h2>{props.title}</h2>
                </header>
                <div className="content">
                    <p>{props.message}</p>
                </div>
                <footer className="actions">
                    <Button onClick={props.onConfirm}>exit</Button>
                </footer>

            </Card>
        </div>
        )}
export default Error