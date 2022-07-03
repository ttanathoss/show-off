import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { FC, useState } from 'react';
import ColorLD from '../ColorLD';
import PlaceholderApp from '../PlaceholderApp';
import { AppsObject } from './models';
import ItemCard from './ItemCard';
import './App.css';

const apps: { [key: string]: AppsObject } = {
  colorLD: {
    name: 'Lighten / Darken Color',
    description: 'Little application for lightening or darkening provided color',
    render: () => <ColorLD />,
  },
  colorLD1: {
    name: 'Lighten / Darken Color',
    description: 'Little application for lightening or darkening provided color',
    render: () => <ColorLD />,
  },
  colorLD2: {
    name: 'Lighten / Darken Color',
    description: 'Little application for lightening or darkening provided color',
    render: () => <ColorLD />,
  },
  colorLD3: {
    name: 'Lighten / Darken Color',
    description: 'Little application for lightening or darkening provided color',
    render: () => <ColorLD />,
  },
};

const App: FC = () => {
  const [selectedAppKey, setSelectedAppKey] = useState<string | undefined>();
  const setItem = (key: string) => () => setSelectedAppKey(key);

  return (
    <Container>
      <Typography variant="h2" align="center" marginY={2}>
        Choose one of the following projects to see it live
      </Typography>
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 2, md: 3, lg: 4 }}>
        {Object.entries(apps).map(([key, item]) => (
          <Grid item xs={1} key={key}>
            <ItemCard {...{ ...item, setItem: setItem(key), isActive: selectedAppKey === key }} />
          </Grid>
        ))}
      </Grid>
      <Divider variant="middle" sx={{ marginY: 2 }} />
      <Box>{selectedAppKey ? apps[selectedAppKey].render({}) : <PlaceholderApp />}</Box>
    </Container>
  );
};

export default App;
