import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card,
         CardHeader,
         Box,
         Divider,
         Button,
         Typography } from '@mui/material';
import ListAltIcon from '@mui/icons-material/ListAlt';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { loadUserProfile } from '@/app/app-slice';
import { getUserProfile } from '@/common/selectors';
import { loadUserPair } from '@/features/pair/pair-slice';
import { getUserPair } from '@/features/pair/pair-selector';

export const CustomPairs = (props) => {
    const dispatch = useDispatch();
    const { setPairCreateDialog, setPairEditDialog, setPairDeleteDialog } = props;
    const [createButtonDisabled, setCreateButtonDisabled] = useState(true);
    const userPair = useSelector(getUserPair);
    const profile = useSelector(getUserProfile);
    useEffect (() => {
      if (Object.keys(profile).length == 0) {
        dispatch(loadUserProfile());
      }
      if (Object.keys(userPair).length == 0) {
      dispatch(loadUserPair());
      }
      },[]
    );

    useEffect (() => {
      if (profile.is_trial) {
        setCreateButtonDisabled(Object.keys(userPair).length >= 1);
      } 
      setCreateButtonDisabled(Object.keys(userPair).length >= 3);
      // switch (profile.role) {
      //   case 'user':
      //     setCreateButtonDisabled(true);
      //     break;
      //   case 'trial':
      //     setCreateButtonDisabled(Object.keys(userPair).length >= 1);
      //     break;
      //   case 'subscriber':
      //     setCreateButtonDisabled(Object.keys(userPair).length >= 3);
      //     break;
      //   default:
      //     setCreateButtonDisabled(false);
      //     break;
      // }
    }, [userPair, profile]);

    const CurrentPairList = () => {
        if (Object.keys(userPair).length == 0) {
          return (<></>);
        } 
        return (
          <>
          <Divider />
          {Object.values(userPair).map((pair, id) => (
            <Box key={id} sx={{backgroundColor:'#EEE', padding: '16px', marginBottom: '8px'}}>
              <Box sx={{display: 'flex', flexDirection: 'row'}} >
                <ListAltIcon color='primary'/>
                <Typography
                  sx={{marginLeft: '16px' }}
                  color="textPrimary"
                  gutterBottom
                  variant="h6"
                  >
                  {pair.name}
                </Typography>
                <Button
                    color="primary"
                    endIcon={<EditIcon fontSize="small" />}
                    size="small"
                    variant="contained"
                    onClick={() => setPairEditDialog({value: pair, open: true})}
                    sx={{marginLeft: 'auto'}}
                >
                    Edit
                </Button>
                <Button
                  color="error"
                  endIcon={<DeleteForeverIcon fontSize="small" />}
                  size="small"
                  variant="contained"
                  onClick={() => setPairDeleteDialog({open: true, pairId: pair.pair_id})}
                  sx={{marginLeft: '8px'}}
                >
                    Delete
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
          ))}
          </>
        );
      }

    return (
        <Card>
          <CardHeader
            subheader="Each user is allowed to set at most 3 Trading Lists at a time."
            title="Current Trading Lists"
          />
          <Box sx={{padding: '0 32px 32px'}} >
            <CurrentPairList/>

            <Divider />
            <Button
              disabled={createButtonDisabled}
              sx={{mt: '32px'}}
              color="primary"
              variant="contained"
              onClick={() => setPairCreateDialog({open: true})}
            >
                Create New List
            </Button>
          </Box>
        </Card>
    );
}