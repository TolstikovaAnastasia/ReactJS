import { Button, CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAlbums, selectErrorMessage, selectIsError, selectIsLoading } from '../../store/albums/selectors';
import { getAlbums } from '../../store/albums/action';
import './albums.css';

export const Albums = () => {
    const albums = useSelector(selectAlbums);
    const errorMessage = useSelector(selectErrorMessage);
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectIsError);

    const dispatch = useDispatch();

    const requestAlbums = async () => {
        dispatch(getAlbums());
    };

    useEffect(() => {
        requestAlbums();
    }, []);

    return (
        <>
            <h3>Albums</h3>
            {isLoading && <CircularProgress />}
            {!isError ? (
                <ol className='albumsList'>
                    {albums.map((album) => (
                        <li key={album.id}>{album.title}</li>
                    ))}
                </ol>
            ) : (
                <>
                    <h4>Error: {errorMessage}</h4>
                    <Button onClick={requestAlbums}>Try again</Button>
                </>
            )}
        </>
    );
};