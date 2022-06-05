import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card,
         CardHeader,
         Box,
         Divider,
         Typography } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import { loadBuiltinPair } from '@/features/pair/pair-slice';
import { getBuiltinPair } from '@/features/pair/pair-selector';

export const BuiltinPairs = (props) => {
    const dispatch = useDispatch();
    const builtinPair = useSelector(getBuiltinPair);
    useEffect (() => {
        if (Object.keys(builtinPair).length == 0) {
        dispatch(loadBuiltinPair());
        }
        },[]
    );

    const BuiltinPairList = () => {
        if (Object.keys(builtinPair).length == 0) {
          return (<></>);
        } 
        return (
          <>
          {Object.values(builtinPair).map((pair, id) => (
            <Box key={id} sx={{backgroundColor:'#EEE', padding: '16px', marginBottom: '8px', marginTop: '8px'}}>
              <Box sx={{display: 'flex', flexDirection: 'row'}} >
                <KeyIcon color='primary'/>
                <Typography
                  sx={{marginLeft: '16px' }}
                  color="textPrimary"
                  gutterBottom
                  variant="h6"
                  >
                  {pair.name}
                </Typography>
              </Box>
    
              <Typography
                sx={{marginLeft: '48px'}}
                color="textSecondary"
                gutterBottom
                variant="button"
                >
                Type: {pair.types}List
              </Typography>
    
            </Box>
          ))}
          </>
        );
      }

    return (
        <Card sx={{margin: '32px 0'}}>
          <CardHeader
            subheader="Builtin Pairs will be available by default."
            title="Builtin Pairs"
          />
          <Box sx={{padding: '0 32px 32px'}} >
            <Divider />
            <BuiltinPairList/>
          </Box>
        </Card>
    );
}