import { groq } from 'next-sanity';
import { readClient } from './lib/client';
import { buildQuery } from '../utils';

interface GetSoftwareProductParams {
  query: string;
  page: string;
}

export const getPageContent = async () => {
  try {
    const resources = await readClient.fetch(
      groq`*[_type == "pagecontent"]{
        _id,
        title,
        description,
        "image": poster.asset->url,
      }`
    );
    return resources;
  } catch (error) {
    console.log(error);
  }
}

export const getSoftwareProducts = async (params: GetSoftwareProductParams) => {
  const { query, page } = params;

  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: 'software_product',
        query,
        page: parseInt(page),
      })}{
        title,
        description,
        price,
        _id,
        downloadLink,
        "image": poster.asset->url,
        views,
        stars,
        STRIPE_product_ID,
        STRIPE_price_ID
      }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
}