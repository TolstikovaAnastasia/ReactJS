import { REQUEST_STATUS } from '../../utils/constant';

export const selectAlbums = (state) => state.albums.data;
export const selectErrorMessage = (state) => state.albums.request.error;
export const selectIsLoading = (state) => state.albums.request.status === REQUEST_STATUS.PENDING;
export const selectIsError = (state) => state.albums.request.status === REQUEST_STATUS.FAILURE;