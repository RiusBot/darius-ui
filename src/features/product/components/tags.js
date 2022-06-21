import { Chip } from '@mui/material';


export const ProductTags = (props) => {
  const { data }  = props;
  if (data == undefined)
    return <></>;
  return data.map((tag) => {
    const { text, color } = tag;
    return <>&nbsp;&nbsp;<Chip label={text} color={color} variant="outlined" size="small" /></>
  });
}
