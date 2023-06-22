import React, { FC, useState } from 'react';
import { AccordionDetails, AccordionSummary, Box, Button, Avatar, Stack } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, Person as PersonIcon } from '@mui/icons-material';

import { useUserStatus } from '../../api/followStatus';
import { FollowStatus, FollowersMap } from '../../api/followStatus/types';

import { UsersListProps } from './types';
import { AccordionStyled, Header, Title, Subtitle} from './styles';


export const UsersList: FC<UsersListProps> = ({ usersList }) => {

	const [expanded, setExpanded] = useState<number | false>(false);

	const {
		usersStatus,
		followUser,
		unfollowUser,
		blockUser
	} = useUserStatus(usersList);

  const handleAccordionToggleChange = (isExpanded: boolean, panel: number) => {
		setExpanded(isExpanded ? panel : false);
	};

	const handleFollowChange = (usersStatus: FollowersMap, userId: number) => {
		if(usersStatus[userId] === FollowStatus.FOLLOWING) return unfollowUser(userId);
		return followUser(userId);
	}

	const handleBlockUser = (userId: number) => {
		blockUser(userId);
		setExpanded(false);
	};

	const callFollowOrUnFollow = (usersStatus: FollowersMap, userId: number) => {
		if(usersStatus[userId] === FollowStatus.FOLLOWING) return 'Unfollow';
		return 'Follow';
	};

	const callFollowIcon = (usersStatus: FollowersMap, userId: number) => {
		if(usersStatus[userId] === FollowStatus.FOLLOWING) {
			return (
				<PersonIcon color="success" />
			);
		}

		return null;
	};

	return (
		<Box>
			{usersList.map(({ user_id, display_name, profile_image, reputation }) => {
				return (
					<AccordionStyled
						key={user_id}
						expanded={expanded === user_id}
						onChange={(event, isExpanded) => handleAccordionToggleChange(isExpanded, user_id)}
						disabled={usersStatus[user_id] === FollowStatus.BLOCKED}
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
								<Stack direction="row">
									<Title>{display_name}</Title>
									{callFollowIcon(usersStatus, user_id)}
								</Stack>
								<Subtitle color="text.secondary">Reputation: {reputation}</Subtitle>
							</Header>
						</AccordionSummary>
						<AccordionDetails>
							<Button onClick={() => handleFollowChange(usersStatus, user_id)}>
								{callFollowOrUnFollow(usersStatus, user_id)}
							</Button>
							<Button color="error" onClick={() => handleBlockUser(user_id)}>Block</Button>
						</AccordionDetails>
				</AccordionStyled>
				)
			})}
		</Box>
	);

};