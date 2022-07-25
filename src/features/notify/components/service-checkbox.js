import { FormControlLabel, Grid, Checkbox } from '@mui/material';
import { useEffect, useState } from 'react';


export const ServiceCheckbox = (props) => {
  const { notifyConfig, notify } = props;
  const [newNotifyConfig, setNewNotifyConfig] = useState(notifyConfig);
  
  const handleChange = (e) => {
    const service = e.target.id;
    setNewNotifyConfig({...newNotifyConfig, [notify]: {...newNotifyConfig[notify], [service]: e.target.checked}});
  };

  if (Object.keys(newNotifyConfig[notify]).length == 0) {
    return (
      <>
      </>
    );
  }

  if (notify != "TELEGRAM")
    return "Comming soon"

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
              label={service}
            />
          )
        })}
      </Grid>
    </>
  );
}
