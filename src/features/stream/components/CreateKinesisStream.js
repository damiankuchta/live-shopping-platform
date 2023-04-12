import React, { useState } from 'react';
import AWS from 'aws-sdk';
import { useSelector } from 'react-redux';



const KinesisVideoStream = () => {
  const [streamName, setStreamName] = useState('temporary stream');
  const [streamArn, setStreamArn] = useState('');
  const [streamStatus, setStreamStatus] = useState('');

  const sessionInfo = useSelector((state) => state.auth.sessionInfo);

  const createStream = async () => {

    const credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'eu-west-1:bf76f175-2687-482c-9e59-fd313927c63f',
      Logins: {
        [`cognito-idp.${AWS.config.region}.amazonaws.com/eu-west-1_8n59JBhqC`]: JSON.parse(sessionInfo)['idToken']['jwtToken'],
      },
    });

    AWS.config.update({
      region: 'eu-west-1', 
      credentials: credentials,
    });

    const kinesisVideo = new AWS.KinesisVideo();
    const params = {
      StreamName: streamName,
      MediaType: 'video/h264',
      DataRetentionInHours: 24,
    };

    try {
      const response = await kinesisVideo.createStream(params).promise();
      setStreamArn(response.StreamARN);
      setStreamStatus(response.StreamStatus);
    } catch (error) {
      console.log(error);
    }
  };

  const captureVideo = async () => {
    // Code to capture video data
    // Code to send video data to Kinesis Video Stream
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter stream name"
        value={streamName}
        onChange={(e) => setStreamName(e.target.value)}
      />
      <button onClick={createStream}>Create Stream</button>
      <button onClick={captureVideo}>Capture Video</button>
      <p>Stream ARN: {streamArn}</p>
      <p>Stream Status: {streamStatus}</p>
    </div>
  );
};

export default KinesisVideoStream;