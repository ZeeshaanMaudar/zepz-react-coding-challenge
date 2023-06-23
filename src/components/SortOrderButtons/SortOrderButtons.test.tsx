import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import { SortOrderButtons } from './index';
import { SortOrder } from './types';

const mockSetSortCategory = jest.fn();

describe('<SortOrderButtons />', () => {

	it('returns the correct sort order on user selection', () => {
		render(
			<SortOrderButtons sortOrder={SortOrder.DESC} setSortOrder={mockSetSortCategory} disabled={false} />
		);
	
		const sortOrderAscButtonComp = screen.getByTestId(`order-${SortOrder.ASC}`);

		fireEvent.click(sortOrderAscButtonComp);

		expect(mockSetSortCategory).toBeCalledWith(SortOrder.ASC);

	});

	it('disables the Select Category component', async () => {
		render(
			<SortOrderButtons sortOrder={SortOrder.DESC} setSortOrder={mockSetSortCategory} disabled={true} />
		);
	
		const sortOrderAscButtonComp = screen.getByTestId(`order-${SortOrder.ASC}`);
		expect(sortOrderAscButtonComp).toBeDisabled();

	});

});
