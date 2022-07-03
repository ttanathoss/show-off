import { Card, CardContent, CardActionArea, Typography } from '@mui/material';
import { FC } from 'react';
import { ItemProps } from './models';

const ItemCard: FC<ItemProps> = ({ name, description, setItem, isActive }) => (
  <Card elevation={3} sx={{ minWidth: '25%' }}>
    <CardActionArea onClick={setItem}>
      <CardContent>
        <Typography variant="h4" component="h2" marginBottom={1}>
          {name}
        </Typography>
        <Typography variant={'caption'}>{description}</Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default ItemCard;
