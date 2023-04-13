import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { PineconeClient } from '@pinecone-database/pinecone';
import { Configuration, OpenAIApi } from 'openai';

const inter = Inter({ subsets: ['latin'] });

function App({ Component, pageProps }: AppProps<{}>) {
  // const enum_metadata = [
  //   {
  //     id: '5u4JXimD91',
  //     query_name: 'test_query_1',
  //     main_table_id: 'table',
  //     query_code: 'select * from betastack.b7_table',
  //     project_id: '00001337-b37a-4ae2-a221-2470b63db374',
  //     created_at: '2023-03-31T09:03:12.518555Z',
  //   },
  //   {
  //     id: 'NZciUTUOem',
  //     query_name: 'test_query_2',
  //     main_table_id: 'query',
  //     query_code: 'select * from betastack.b7_query',
  //     project_id: '00001337-b37a-4ae2-a221-2470b63db374',
  //     created_at: '2023-03-31T09:05:07.831931Z',
  //   },
  // ];

  (async function generateEmbeddings() {
    // const pinecone = new PineconeClient();
    // await pinecone.init({
    //   environment: 'us-west1-gcp',
    //   apiKey: 'ec0f4e25-1fd5-4b29-843d-5108f02f8005',
    // });
    // const configuration = new Configuration({
    //   apiKey: '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',
    // });
    // const openAi = new OpenAIApi(configuration);
    // const input = JSON.stringify(enum_metadata[1]).replace(/\n/g, ' ');
    // // console.log(input);
    // const embeddingResponse = await openAi.createEmbedding({
    //   model: 'text-embedding-ada-002',
    //   input
    // });
    // // @ts-ignore
    // const [{ embedding }] = embeddingResponse.data.data;
    // console.log(embedding)
    // const index = pinecone.Index('betastack-ai');
    // const queryResponse = await index.query({
    //   queryRequest: {
    //     vector: embedding,
    //     topK: 3,
    //     includeMetadata: true,
    //   },
    // });
    // console.log(queryResponse);
    // const upsertRequest = {
    // 	vectors: [
    // 		{
    // 			id: data[0].id,
    // 			values:embedding,
    // 			metadata: data[0],
    // 		},
    // 	]
    // };
    // const upsertResponse = await index.upsert({ upsertRequest });
    // console.log('upsertResponse', embedding);
  })();

  return (
    <div className={inter.className}>
      <Toaster />
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(App);
