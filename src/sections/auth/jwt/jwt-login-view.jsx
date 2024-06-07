import React, {useState} from 'react';
import * as Yup from 'yup'
import { useForm, Controller } from 'react-hook-form';
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Button,
  Container,
  Card,
  CardContent,
  Box,
  Grid,
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../../assets/images/header/logo1@4x.png';
import Link from '@mui/material/Link';
import { RouterLink } from '../../../routes/components';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useAuthContext } from '../../../auth/hooks';
import { useRouter, useSearchParams } from '../../../routes/hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { PATH_AFTER_LOGIN } from '../../../config-global';
import { paths } from '../../../routes/paths';

// ----------------------------------------------------------------------

export default function JwtLoginView() {
  const { login } = useAuthContext();

  const router = useRouter();

  const [errorMsg, setErrorMsg] = useState('');

  const searchParams = useSearchParams();

  const returnTo = searchParams.get('returnTo');


  const LoginSchema = Yup.object().shape({
    phone_number: Yup.string().required('Phone number is required'),
    password: Yup.string().required('Password is required'),
    category: Yup.string().required('Vendor category is required'),
  });

  const defaultValues = {
    phone_number: '',
    password: '',
    category: '',
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await login?.(data);

      router.push(returnTo || PATH_AFTER_LOGIN);
    } catch (error) {
      console.error(error);
      reset();
      setErrorMsg(typeof error === 'string' ? error : error.message);
    }
  });


  return (
    <>
      <Container maxWidth="sm">
        <ToastContainer />
        <Box display="flex" justifyContent="center" alignItems="center" height={'100vh'}>
          <Card sx={{ mt: 5 }}>
            <CardContent
              sx={{
                pb: '70px !important',
                pt: '50px !important',
                px: '30px',
              }}
            >
              <Box
                display="flex"
                justifyContent="center"
                mb={3}
                sx={{ height: '130px', mb: '60px' }}
              >
                <img src={logo} alt="BootstrapBrain Logo" />
              </Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Controller
                      name="phone_number"
                      control={control}
                      render={({ field }) => (
                        <TextField {...field} label="Phone Number" fullWidth required />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ my: '10px' }}>
                    <Controller
                      name="password"
                      control={control}
                      render={({ field }) => (
                        <TextField {...field} label="Password" type="password" fullWidth required />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      name="category"
                      control={control}
                      render={({ field }) => (
                        <RadioGroup {...field} row>
                          <FormControlLabel value="Miller" control={<Radio />} label="Miller" />
                          <FormControlLabel
                            value="Distributor"
                            control={<Radio />}
                            label="Distributor"
                          />
                          <FormControlLabel
                            value="Miller & Distributor"
                            control={<Radio />}
                            label="Miller & Distributor"
                          />
                        </RadioGroup>
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox {...register('remember_me')} />}
                      label="Keep me logged in"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" size={'large'} color="primary" fullWidth type="submit">
                      Sign In
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack direction="row" sx={{mt:2, justifyContent: "center"}} spacing={1} >
                      <Typography variant="subtitle2">Become NCCF CSP?</Typography>

                      <Link component={RouterLink} href={paths.auth.jwt.register} variant="subtitle2">
                        Create an account
                      </Link>
                    </Stack>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}