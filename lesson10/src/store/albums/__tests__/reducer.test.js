import { GET_ALBUMS_REQUEST } from "../action";
import { REQUEST_STATUS } from '../../../utils/constant';
import { albumsReducer } from "../reducer";

describe('albumsReducer tests', () => {
    it('should handle GET_ALBUMS_REQUEST', () => {
        const expected = albumsReducer([], {
            type: GET_ALBUMS_REQUEST,
            status: REQUEST_STATUS.PENDING,
        });
        expect(expected).toMatchSnapshot();
    });
});