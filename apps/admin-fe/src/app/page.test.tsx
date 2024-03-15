import { render, screen } from '@testing-library/react';
import Page from './page';

describe('Page', () => {
  it('renders the Page component', () => {
    render(<Page />);

    screen.debug(); // prints out the jsx in the App component unto the command line
  });
});
