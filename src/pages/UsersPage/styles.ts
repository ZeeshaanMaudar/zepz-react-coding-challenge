import { styled, Box, Container } from '@mui/material';

export const SpinnerContainer = styled(Box)`
	width: 100%;
	display: flex;
	justify-content: center;
	color: #20b2aa;
`;

export const Wrapper = styled(Container)`
	border: 1px solid green;
	color: #20b2aa;

	:hover {
		color: #2e8b57;
	}
`;
