import { Grid, Input as MuiInput, InputAdornment, Slider, styled } from '@mui/material';
import { ChangeEvent, FC } from 'react';

interface Fff {
  percentage: number;
  setPercentage: (number: number) => void;
}

const Input = styled(MuiInput)`
  width: 64px;
`;

const InputSlider: FC<Fff> = ({ percentage, setPercentage }) => {
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setPercentage(Array.isArray(newValue) ? newValue[0] : newValue);
  };

  const handleInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(value);
    if (!Number.isNaN(newValue)) setPercentage(newValue);
  };

  const handleBlur = () => {
    if (percentage < 0) {
      setPercentage(0);
    } else if (percentage > 100) {
      setPercentage(100);
    }
  };

  const formatValue = (value: number) => `${percentage}%`;

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs>
        <Slider
          aria-label="Color alter percentage"
          getAriaValueText={formatValue}
          valueLabelDisplay="on"
          valueLabelFormat={formatValue}
          step={1}
          min={0}
          max={100}
          track={false}
          value={typeof percentage === 'number' ? percentage : 0}
          onChange={handleSliderChange}
        />
      </Grid>
      <Grid item>
        <Input
          value={percentage}
          size="small"
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: 1,
            min: 0,
            max: 100,
            type: 'number',
            'aria-label': 'Color alter percentage',
          }}
          endAdornment={<InputAdornment position="end">%</InputAdornment>}
        />
      </Grid>
    </Grid>
  );
};

export default InputSlider;
