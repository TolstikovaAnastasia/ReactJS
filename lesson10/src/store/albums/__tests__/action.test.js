import { getAlbums, getAlbumsRequest, getAlbumsSuccess, getAlbumsFailure, GET_ALBUMS_REQUEST } from "../action";
describe('getAlbumsRequest tests', () => {
    it('return object with certain type', () => {
        const expected = {
            type: GET_ALBUMS_REQUEST,
        };
        const received = getAlbumsRequest();
        expect(expected).toEqual(received);
    });
});
describe('getAlbums', () => {
    it('dispatches getAlbumsRequest', () => {
        const mockDispatch = jest.fn();
        getAlbums()(mockDispatch);

        expect(mockDispatch).toHaveBeenCalledWith(getAlbumsRequest());
    });
    it('calls getAlbumsSuccess if fetch was successfull', async() => {
        const mockDispatch = jest.fn();
        const body = { test: 'test' };
        fetch.mockResponseOnce(JSON.stringify(body));
        await getAlbums()(mockDispatch);

        expect(mockDispatch).toHaveBeenLastCalledWith(getAlbumsSuccess(body));
    });
    it('calles getAlbumsFailure if fetch was unsuccessfull', async() => {
        const mockDispatch = jest.fn();
        const error = { message: 'test' };
        fetch.mockRejectOnce(error);
        await getAlbums()(mockDispatch);

        expect(mockDispatch).toHaveBeenLastCalledWith(getAlbumsFailure(error.message));
    });
});