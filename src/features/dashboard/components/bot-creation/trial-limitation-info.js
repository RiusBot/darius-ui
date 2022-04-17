import {
    Box,
    Typography
} from '@mui/material';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { NavItem } from '@/common/components/nav-item';

const subscriptions = {
    href: '/subscription',
    icon: (<PlaylistAddCheckIcon fontSize="small" />),
    title: 'Go to Subscription & Plans to subscribe and explore additional service.'
  }

export const TrialLimitationInfo = (props) => {
    const { isTrial } = props;
    if (!isTrial) return null;
    return (
        <Box 
            sx={{   padding: '16px 32px 16px 16px',
                    marginBottom: '16px',
                    backgroundColor: '#C3B292',
                    border: '1px solid #C3B292',
                    borderRadius: '16px',
                    width: '100%' }}>
            <Box >
                <Typography 
                    color="#FFFFFF"
                    variant="button"
                    sx={{ width: '100%', paddingLeft: '32px' }}>
                    [ Free Trial ] - Quantity is restricted to 30, Leverage to 1 on free trial service.
                    <NavItem
                        key={subscriptions.title}
                        icon={subscriptions.icon}
                        href={subscriptions.href}
                        title={subscriptions.title}
                        />
                </Typography>
            </Box>
        </Box>
    );
}