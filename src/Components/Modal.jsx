import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Fab, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
// import axios from 'axios';
import {addSchedule} from "../api/api";


// Modal
function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        justifyContent: "center",
        alignItems: "center",
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        // display: "flex"
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 500,
        backgroundColor: theme.palette.background.paper,
       
        borderRadius: '8px 8px 8px 0',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        alignItems: "center",

    },
}));

export default function SimpleModal() {

    
    const [title, setTitle] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [date, setDate] = React.useState("");
    // const [descrition, setDescription] = React.useState("")

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleSubmit = () => {
   
        addSchedule(date, title, location);
        // console.log(date, title, location)
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Add Event</h2>
            <br></br>

            <form onSubmit={handleSubmit}>
                
                {/* date Picker */}
                <TextField onChange={e => setDate(e.target.value)}
                    id="date"
                    label="Birthday"
                    type="date"
                    // defaultValue={date.now()}
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />

             
                <br></br>
                <br></br>
                <TextField id="outlined-basic" value={title} onChange={(e) => setTitle(e.target.value)} label="Title" variant="outlined" />
                <br></br>
                <br></br>
                <TextField id="outlined-basic" label="Location" value={location} onChange={(e) =>setLocation(e.target.value)} variant="outlined" />
                <br></br>
                <br></br>

                <Button onClick={() => handleSubmit()}>Save</Button>
                
            </form>

            {/* <SimpleModal /> */}
        </div>
    );

    return (
        <div>

            <Fab style={{ "float": "right" }} onClick={handleOpen} color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            {/* <button style={{ "float": "right" }} type="button" onClick={handleOpen}>
                Open Modal
            </button> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}