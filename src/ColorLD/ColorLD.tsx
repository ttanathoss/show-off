import { ChangeEvent, useEffect, useState } from 'react';
import { Container, Stack, Switch, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { Box } from '@mui/system';
import Slider from './InputSlider';
import { alterColor } from './convert';
import { Operation } from './models';

const validateInput = (value: string) => {
  const color = (value.startsWith('#') ? value : `#${value}`).toLowerCase();
  const isValid = /^#([0-9a-f]{3}){1,2}$/i.test(color);
  return isValid;
};

const ColorLD: FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [textInput, setTextInput] = useState<string>('#4080C0');
  const [inputColor, setInputColor] = useState<string>('#4080C0');
  const [operation, setOperation] = useState(Operation.Darken);
  const [percentage, setPercentage] = useState(30);
  const [alteredColor, setAlteredColor] = useState<string>('#2d5a86');

  const handleTextInput = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setTextInput(value);
  };

  const handleSwitchChange = ({ target: { checked } }: ChangeEvent<HTMLInputElement>) =>
    setOperation(checked ? Operation.Darken : Operation.Lighten);

  useEffect(() => {
    if (!validateInput(textInput)) {
      setErrorMessage('Input must be hex color: #ccc or #cccccc');
      return;
    }
    setErrorMessage('');
    setInputColor(textInput);
  }, [textInput]);

  useEffect(() => {
    const newColor = alterColor(operation, inputColor, percentage);
    setAlteredColor(newColor);
  }, [inputColor, operation, percentage]);

  return (
    <Container maxWidth={false}>
      <Typography variant="h1" align="center" gutterBottom>
        Let's calculate lighter / darker color variant
      </Typography>
      <TextField
        id="input-color"
        label="Color (hex)"
        variant="standard"
        value={textInput}
        onChange={handleTextInput}
        error={!!errorMessage}
        helperText={errorMessage}
      ></TextField>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Lighten</Typography>
        <Switch
          checked={operation === Operation.Darken}
          onChange={handleSwitchChange}
          inputProps={{ 'aria-label': 'Color alter direction' }}
        />
        <Typography>Darken</Typography>
      </Stack>
      <Slider percentage={percentage} setPercentage={setPercentage} />
      <Box marginY={1}>
        <Typography>Input color</Typography>
        <Box sx={{ width: '100%', height: '50px', backgroundColor: inputColor }}></Box>
      </Box>
      <Box marginY={1}>
        <Typography>Altered color</Typography>
        <Box sx={{ width: '100%', height: '50px', backgroundColor: alteredColor }}></Box>
      </Box>
    </Container>
  );
};

export default ColorLD;
