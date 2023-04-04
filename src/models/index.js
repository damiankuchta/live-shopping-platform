// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { LiveStream } = initSchema(schema);

export {
  LiveStream
};