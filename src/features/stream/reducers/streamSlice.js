import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    stream: null,
    streamId: null,
    streamARN: null,
    streamStatus: null,
    streamViewerCount: null,
    streamViewerList: null,
    open_datetime: null,
    close_datetime: null,
    streamTitle: null,
    streamDescription: null,
    streamTags: null,
    streamThumbnail: null,
    streamErrors: null,
}

export const authSlice = createSlice({
  name: 'stream',
  initialState,
  reducers: {
    openStreamSuccesfull: (state, action) => {
        state.stream = action.payload;
        state.streamId = action.payload.id;
        state.streamARN = action.payload.arn;
        state.streamStatus = "opened"
        state.streamViewerCount = action.payload.viewerCount;
        state.streamViewerList = action.payload.viewerList;
        state.open_datetime = Date.now();
        state.streamErrors = null;
    },
    openStreamFailed: (state, action) => {
        state.streamStatus = "open_failed";
        state.streamErrors = action.payload;
    },
    closeStreamFailed: (state, action) => {
        state.streamStatus = "close_failed";
        state.streamErrors = action.payload;
    },
    startOpenStream: (state, action) => {
        state.streamStatus = "opening";
        state.streamTitle = action.payload.title;
        state.streamDescription = action.payload.description;
        state.streamTags = action.payload.tags;
        state.streamThumbnail = action.payload.thumbnail;
        state.streamErrors = null;
    },
    closeStreamSuccesfull: (state, action) => {
        state.stream = null;
        state.streamId = null;
        state.streamARN = null;
        state.streamStatus = "closed";
        state.streamViewerCount = null;
        state.streamViewerList = null;
        state.close_datetime = Date.now();
        state.streamErrors = null;
    },
    startCloseStream: (state, action) => {
        state.streamStatus = "closing";
        state.streamErrors = null;
    },
    resetStream: (state, action) => {
        state.stream = null;
        state.streamId = null;
        state.streamARN = null;
        state.streamStatus = null;
        state.streamViewerCount = null;
        state.streamViewerList = null;
        state.open_datetime = null;
        state.close_datetime = null;
        state.streamTitle = null;
        state.streamDescription = null;
        state.streamTags = null;
        state.streamThumbnail = null;
        state.streamErrors = null;
    }
  },
});

export const { openStreamSuccesfull, resetStream, startOpenStream, startCloseStream, 
    closeStreamFailed, openStreamFailed, closeStreamSuccesfull} = authSlice.actions;


const openStream = ({title, descriptions, tags1}) => async (dispatch) => {
    
}

const closeStream = () => async (dispatch) => {

}

const clearStream = () => async (dispatch) => {

}





export default authSlice.reducer;