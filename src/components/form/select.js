import useTheme from '@mui/material/styles/useTheme';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

// ==============================|| FORM CONTROL SELECT ||============================== //

const FormControlSelect = ({
	captionLabel, currencies, formState, iconPrimary, iconSecondary, selected, textPrimary, textSecondary, onChange, sx
}) => {
	const theme = useTheme();
	const IconPrimary = iconPrimary;
	const primaryIcon = iconPrimary ? <IconPrimary fontSize="small" sx={{ color: theme.palette.grey[700] }} /> : null;

	const IconSecondary = iconSecondary;
	const secondaryIcon = iconSecondary ?
		<IconSecondary fontSize="small" sx={{ color: theme.palette.grey[700] }} /> : null;

	const errorState = formState === 'error';
	const handleChange = (event) => onChange(event?.target.value)

	return (
		<FormControl fullWidth error={errorState} sx={sx}>
			<TextField
				id="outlined-select-currency"
				select
				fullWidth
				label={captionLabel}
				value={selected}
				onChange={handleChange}
				InputProps={{
					startAdornment: (
						<>
							{primaryIcon && <InputAdornment position="start">{primaryIcon}</InputAdornment>}
							{textPrimary && (
								<>
									<InputAdornment position="start">{textPrimary}</InputAdornment>
									<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
								</>
							)}
						</>
					),
					endAdornment: (
						<>
							{secondaryIcon && <InputAdornment position="end">{secondaryIcon}</InputAdornment>}
							{textSecondary && (
								<>
									<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
									<InputAdornment position="end">{textSecondary}</InputAdornment>
								</>
							)}
						</>
					)
				}}
			>
				{currencies?.map((option, index) => (
					<MenuItem key={index} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</TextField>
		</FormControl>
	);
};

export default FormControlSelect;
