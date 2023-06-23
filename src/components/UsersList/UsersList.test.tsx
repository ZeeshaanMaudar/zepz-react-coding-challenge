import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import { UsersList } from './index';

const mockUserListData = [
	{
		display_name: 'Tim',
		user_id: 1,
		profile_image: 'TimImage',
		reputation: 500
	},
	{
		display_name: 'John',
		user_id: 2,
		profile_image: 'JohnImage',
		reputation: 250
	},
	{
		display_name: 'Henry',
		user_id: 3,
		profile_image: 'HenryImage',
		reputation: 340
	},
];

describe('<UsersList />', () => {

	it('can follow a user', () => {
		render(
			<UsersList usersList={mockUserListData} />
		);
	
		const accordionItem = screen.getByTestId(`accordion-3`);
		fireEvent.click(accordionItem);

		const followButton = screen.getByTestId(`follow-button-3`);
		expect(followButton).toBeInTheDocument();
		fireEvent.click(followButton);

		const followPersonIcon = screen.getByTestId(`follow-icon-3`);
		expect(followPersonIcon).toBeInTheDocument();
		expect(followButton).toHaveTextContent('Unfollow');

	});

	it('can unfollow a user', () => {
		render(
			<UsersList usersList={mockUserListData} />
		);
	
		const accordionItem = screen.getByTestId(`accordion-3`);
		const followPersonIcon = screen.getByTestId(`follow-icon-3`);
		expect(followPersonIcon).toBeInTheDocument();

		fireEvent.click(accordionItem);

		const followButton = screen.getByTestId(`follow-button-3`);
		expect(followButton).toBeInTheDocument();
		fireEvent.click(followButton);

		expect(followButton).toHaveTextContent('Follow');

	});

	it('can block a user', () => {
		render(
			<UsersList usersList={mockUserListData} />
		);
	
		const accordionItem = screen.getByTestId(`accordion-1`);
		fireEvent.click(accordionItem);

		const blockButton = screen.getByTestId(`block-button-1`);
		expect(blockButton).toBeInTheDocument();
		fireEvent.click(blockButton);

		const accordionSummaryItem = screen.getByTestId(`accordion-summary-1`);
		expect(accordionSummaryItem).toHaveClass('Mui-disabled');

	});

});
