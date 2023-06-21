import React, { FC, useState } from 'react';
import { AccordionDetails, AccordionSummary, Box, Button, Avatar } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

import { UsersListProps } from './types';
import { AccordionStyled, Header, Title, Subtitle} from './styles';


export const UsersList: FC<UsersListProps> = ({ usersList }) => {

	const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange = (isExpanded: boolean, panel: number) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Box>
			{usersList.map(({ user_id, display_name, profile_image, reputation }) => {
				return (
					<AccordionStyled
						key={user_id}
						expanded={expanded === user_id}
						onChange={(event, isExpanded) => handleChange(isExpanded, user_id)}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls={`${user_id}-content`}
							id={`${user_id}-header`}
						>
							<Box>
								<Avatar alt={display_name} src={profile_image} />
							</Box>
							<Header>
								<Title>{display_name}</Title>
								<Subtitle color="text.secondary">Reputation: {reputation}</Subtitle>
							</Header>
						</AccordionSummary>
						<AccordionDetails>
							<Button>Follow</Button>
							<Button color="error">Block</Button>
						</AccordionDetails>
				</AccordionStyled>
				)
			})}
		</Box>
	);

};