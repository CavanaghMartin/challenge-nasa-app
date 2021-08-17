import { render, screen, cleanup,fireEvent } from '@testing-library/react';
import SelectRover from "../SelectRover"
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'


const mockStore = configureStore()
let store = mockStore("")

afterEach(() => {
    cleanup();
})


test('Allows the user to select the photos of each rover (Curiosity, Opportunity and Spirit)', () => {
    render(<Provider store={store}><SelectRover /></Provider>);

    const selectElement = screen.getByTestId("selectRover");
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveTextContent("Curiosity​")

  
});