import { createStyles, Grid, makeStyles, TextField } from '@material-ui/core'
import { Email, Face, Lock, Person } from '@material-ui/icons';
import { AuthCard } from '../../components/organisms/AuthCard';

const useStyles = makeStyles(() =>
    createStyles({
        name_fields_container: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        name_field: {
            flex: 1,
            minWidth: 180
        },
        flex: {
            display: 'flex',
            flex: 1
        }
    }),
);

export const RegisterScreen = () => {

    const styles = useStyles();

    return (
        <AuthCard title='Register' actionButtonTitle='Register' footerLabel="Already have an account?" footerLinkRoute='/login' footerLinkTitle='Login'>
            {/* Form content */}
            <>
                {/* Info*/}

                {/* Name fields */}
                <div className={styles.name_fields_container}>
                    <Grid container spacing={1} alignItems="flex-end" className={styles.name_field}>
                        <Grid item>
                            <Person htmlColor='#636363' />
                        </Grid>
                        <Grid item className={styles.flex}>
                            <TextField id="input-with-icon-grid" label="Name" className={styles.flex} />
                        </Grid>
                    </Grid>

                    <Grid container spacing={1} alignItems="flex-end" className={styles.name_field}>
                        <Grid item>
                            <Person htmlColor='#636363' />
                        </Grid>
                        <Grid item className={styles.flex}>
                            <TextField id="input-with-icon-grid" label="Last name" className={styles.flex}/>
                        </Grid>
                    </Grid>
                </div>

                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <Email htmlColor='#636363' />
                    </Grid>
                    <Grid item className={styles.flex}>
                        <TextField id="input-with-icon-grid" label="Email" className={styles.flex}/>
                    </Grid>
                </Grid>

                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <Face htmlColor='#636363' />
                    </Grid>
                    <Grid item className={styles.flex}>
                        <TextField id="input-with-icon-grid" label="Username" className={styles.flex}/>
                    </Grid>
                </Grid>

                {/* Passwords */}
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <Person htmlColor='#636363' />
                    </Grid>
                    <Grid item className={styles.flex}>
                        <TextField id="input-with-icon-grid" label="Password" className={styles.flex}/>
                    </Grid>
                </Grid>

                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <Lock htmlColor='#636363' />
                    </Grid>
                    <Grid item className={styles.flex}>
                        <TextField id="input-with-icon-grid" label="Confirm password" className={styles.flex}/>
                    </Grid>
                </Grid>
            </>
        </AuthCard>
    )
}
