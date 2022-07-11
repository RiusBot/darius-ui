import { Chip, Container, Grid, Box, Card, Stack } from '@mui/material';


export const ProductTags = (props) => {
  const { data }  = props;
  const tags = data.map((tag) => {
      const { text, color } = tag;
      return (
          <>&nbsp;&nbsp;<Chip label={text} color={color} variant="outlined" size="small" /></>
      )
    });
  if (data == undefined)
    return <></>;
  return (
    <Grid>
    {tags}
    </Grid>
  )
}
