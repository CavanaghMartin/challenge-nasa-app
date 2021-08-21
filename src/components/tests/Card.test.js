import { render, screen, cleanup } from '@testing-library/react';
import Card from "../Card"
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'


jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn()
}));

const mockStore = configureStore()
let store = mockStore("")

afterEach(() => {
    cleanup();
})



test('renders the card of the photo', () => {
    const photo = { id: 1, img: "https://m.media-amazon.com/images/I/61FlX89mYGL._AC_.jpg", earth_date: "12/10/1999", sol: 123, cameraName: "SWY", roverName: "Opportunity" }
    render(<Provider store={store}><Card key={photo.id} {...photo} /></Provider>);
    const photoElement = screen.getByTestId("card");
    expect(photoElement).toBeInTheDocument();

});


test('have text content of the component', () => {

    const photo = { id: 1, img: "https://m.media-amazon.com/images/I/61FlX89mYGL._AC_.jpg", earth_date: "12/10/1999", sol: 123, cameraName: "SWY", roverName: "Opportunity" }
    render(<Provider store={store}><Card key={photo.id} {...photo} /></Provider>);
    const photoElement = screen.getByTestId("card");
    expect(photoElement).toHaveTextContent("SWY")

});
