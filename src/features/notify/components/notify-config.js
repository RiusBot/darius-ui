import { Box, Avatar, Typography, Card, Grid, CardHeader, FormControlLabel, Checkbox, Button } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import TextsmsIcon from '@mui/icons-material/Textsms';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import { updateUserNotify } from '@/features/notify/notify-slice';


export const NotifyConfig = (props) => {

  const dispatch = useDispatch();
  const { userNotifyConfig } = props;
  const [newNotifyConfig, setNewNotifyConfig] = useState(userNotifyConfig);
  const [isUpdateReady, setUpdateReady] = useState(false);
  
  useEffect(() => {
    if (newNotifyConfig == undefined || Object.keys(newNotifyConfig).length == 0)
      setNewNotifyConfig(userNotifyConfig);
  }, [userNotifyConfig])
  
  useEffect(() => {
    const updateReady = !(JSON.stringify(userNotifyConfig) === JSON.stringify(newNotifyConfig));
    setUpdateReady(updateReady);
  }, [newNotifyConfig])
  
  const updateButtonClicked = () => {
    dispatch(updateUserNotify(newNotifyConfig));
    setUpdateReady(false);
  }
  
  const ServiceCheckbox = (notify) => {
    
    const handleChange = (event) => {
      const service = event.target.id;
      setNewNotifyConfig({
        ...newNotifyConfig,
        [notify]: {...newNotifyConfig[notify], [service]: event.target.checked}
      });
    };
    
    const serviceDispalyName = {
      'OCO': 'OCO trigger',
      'LIMIT': 'Limit order trigger',
      'OPEN': 'Open new orders'
    }
    
    if (notify != "TELEGRAM" || Object.keys(newNotifyConfig[notify]).length == 0) {
      return "Comming Soon";
    }

    return (
      <>
        <Grid>
          {Object.keys(newNotifyConfig[notify]).map((service, id) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    id={service}
                    checked={newNotifyConfig[notify][service]}
                    onChange={e => handleChange(e)}
                    inputProps={{ 'aria-label': 'controlled' }} />
                }
                label={serviceDispalyName[service]}
                id={service}
                key={service}
              />
            )
          })}
        </Grid>
      </>
    );
  }
  
  const getTitleIcon = (notify) => {
    if (notify == "TELEGRAM")
      return <TelegramIcon />
    else if (notify == "EMAIL")
      return <EmailIcon />
    else if (notify == "SMS")
      return <TextsmsIcon />
  }

  return (
    <>
    {Object.keys(newNotifyConfig).map((notify, id) => {
      return (
        <Accordion defaultExpanded={notify=="TELEGRAM"} id={notify} key={notify} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{m: 4}}/>}
          >
            <CardHeader
              title={
                <Box sx={{ display: 'flex', flexDirection: 'row' }} >
                  {getTitleIcon(notify)}
                  &nbsp;&nbsp;&nbsp;
                  {notify}
                </Box>
              }
            />
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ padding: '0 32px 32px', display: 'flex', flexDirection: 'row' }} >
              {ServiceCheckbox(notify)}
              <Button
                color="primary"
                variant="contained"
                disabled={!isUpdateReady}
                onClick={updateButtonClicked}
                sx={{marginLeft: "auto"}}
              >
                Save
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
      )
    })}
    </>
  );
}
