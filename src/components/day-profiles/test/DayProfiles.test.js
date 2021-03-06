import { render, screen } from '@testing-library/react';
import DayProfiles from './../DayProfiles';

test('renders learn react link', () => {
  render(<DayProfiles />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
