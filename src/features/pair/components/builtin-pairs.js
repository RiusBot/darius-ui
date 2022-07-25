import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card,
         CardHeader,
         Box,
         Divider,
         Typography,
         Button } from '@mui/material';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { loadBuiltinPair } from '@/features/pair/pair-slice';
import { getBuiltinPair } from '@/features/pair/pair-selector';
import useWindowDimensions from '@/common/utils/use-window-dimensions';

export const BuiltinPairs = (props) => {
    const dispatch = useDispatch();
    const { width } = useWindowDimensions();
    const { setPairDetailDialog } = props;
    const builtinPair = useSelector(getBuiltinPair);
    useEffect (() => {
        if (Object.keys(builtinPair).length == 0) {
        dispatch(loadBuiltinPair());
        }
        },[]
    );

    const PairOption = (props) => {
      const {pair} = props;
      if (pair.pair_id == null) return (<></>);
      return (
        <Box sx={{backgroundColor:'#EEE', padding: '16px', marginBottom: '8px', marginTop: '8px'}}>
          <Box sx={{display: 'flex', flexDirection: 'row'}} >
            <ListAltIcon color='primary'/>
            <Typography
              sx={{marginLeft: '16px',
                   maxWidth: width > 400 ? '80%' : '172px', 
                   wordWrap: "break-word" }}
              color="textPrimary"
              gutterBottom
              variant="h6"
              >
              {pair.name}
            </Typography>
            <Button
                color="primary"
                size="small"
                variant="contained"
                onClick={() => setPairDetailDialog({value: pair, open: true})}
                sx={{marginLeft: 'auto',
                     width: width > 400 ? '128px' : '64px'}}
            >
                Show Detail
            </Button>
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
      )
    }

    const BuiltinPairList = () => {
        if (Object.keys(builtinPair).length == 0) {
          return (<></>);
        } 
        return (
          <>
          {Object.values(builtinPair).map((pair, id) => (
            <PairOption 
              pair={pair}
              key={id}
            />
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