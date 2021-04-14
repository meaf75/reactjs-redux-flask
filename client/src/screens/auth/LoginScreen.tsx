import { createStyles, Grid, makeStyles, TextField } from '@material-ui/core'
import styled from 'styled-components'
import { Email, Lock } from '@material-ui/icons';
import { AuthCard } from '../../components/organisms/AuthCard';

const useStyles = makeStyles(() =>
    createStyles({
        
    }),
);

export const LoginScreen = () => {

    return (
        <AuthCard title='Login' actionButtonTitle='Login' footerLabel="Don't have an account?" footerLinkRoute='/register' footerLinkTitle='Create one'>
            {/* Form content */}
            <>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <Email htmlColor='#636363' />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Email" />
                    </Grid>
                </Grid>

                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <Lock htmlColor='#636363' />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Password" />
                    </Grid>
                </Grid>
            </>
        </AuthCard>
    )
}
