import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Container, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import * as yup from 'yup';
import { useFormik } from 'formik';
import getData from '../api/getData';
import { addText, setFirstLoad } from '../slices/imgSlice';

const validationSchema = yup.object().shape({
  text: yup.string().required('Обязательно').min(2, 'Минимум 2 символа'),
});

const Form = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      text: '',
    },
    validationSchema,
    onSubmit: ({ text }) => {
      dispatch(addText(text));
      dispatch(setFirstLoad(true));
      dispatch(getData({ text }));
      formik.resetForm();
    },
  });

  return (
    <Box component="section">
      <h1 className="center">Image generator</h1>
      <Container maxWidth="sm">
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            size="small"
            id="text"
            label="Поддерживаются русский и английский языки"
            variant="outlined"
            type="text"
            placeholder="Например: rabbit"
            onChange={formik.handleChange}
            value={formik.values.text}
            error={!!formik.errors.text}
            helperText={formik.errors.text}
            autoFocus
            InputProps={{
              endAdornment: (
                <IconButton type="submit" aria-label="search">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </form>
      </Container>
    </Box>
  );
};

export default Form;
