// import { React, useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
// import { Box, Typography, Button } from '@mui/material';
// import { CardContent, TextField } from '@mui/material';
// import { createUserPair } from '@/features/pair/pair-slice';

// const types = ['BLACK', 'WHITE'];

// export const PairCreateForm = (props) => {
//     const dispatch = useDispatch();
//     const { display } = props;
//     const [isPairCreateReady, setPairCreate] = useState(false);
//     const [pairValues, setPairValues] = useState({name: '', lists: [], types: ''});

//     const handleChange = (event) => {
//         setPairValues({
//         ...pairValues,
//         [event.target.name]: event.target.value
//         });
//     };

//     const checkValuesValid = (field) => {
//         switch (field) {
//             case 'name':
//             return (pairValues[field].length != 0);
//             case 'types':
//             return (pairValues[field] in types);
//             case 'lists':
//             return (pairValues[field].length != 0);
//             return true;
//         }
//     }

//     useEffect(() => {
//         function checkValuesReady() {
//         for (let i = 0; i < Object.keys(pairValues).length; i ++) {
//             if (!checkValuesValid(Object.keys(pairValues)[i])) {
//                 return false;
//             }
//         }
//         return true;
//         }
//         const isPairReady = checkValuesReady();
//         setPairCreate(isPairReady)
//     }, [pairValues])


//     const createButtonClicked = () => {
//         const createPairInfo = {pair: pairValues};
//         dispatch(createUserPair(createPairInfo));
//         setPairValues({name: '', lists: [], types: ''});
//     }
//     if (!display) {
//         return (<></>);
//     }
//     return (
//     <>
//         <CardContent>
//             <Typography
//                 color="textPrimary"
//                 gutterBottom
//                 variant="h6"
//                 >
//                 Please fill out the following form to add an API key.
//             </Typography>
//             <TextField
//                 fullWidth
//                 label="Name"
//                 margin="normal"
//                 name="name"
//                 inputProps={{ maxLength: 64 }}
//                 onChange={handleChange}
//                 value={pairValues.name}
//                 variant="outlined"
//             />
//             <FormControl fullWidth>
//                 <InputLabel >Type</InputLabel>
//                 <Select
//                     name="types"
//                     id="types"
//                     label="types"
//                     value={pairValues.types}
//                     onChange={handleChange}
//                 >
//                     {types.map((type, idx) => (
//                         <MenuItem key={idx} value={type.toLowerCase()}>{type}</MenuItem>
//                     ))}
//                 </Select>
//             </FormControl>
            
//         </CardContent>
//         <Box
//         sx={{
//             display: 'flex',
//             justifyContent: 'flex-end',
//             p: 2
//         }}
//         >
//         <Button
//             color="primary"
//             variant="contained"
//             disabled={!isPairCreateReady}
//             onClick={createButtonClicked}
//         >
//             Add API Key
//         </Button>
//         </Box>
//     </>
//     );
// }