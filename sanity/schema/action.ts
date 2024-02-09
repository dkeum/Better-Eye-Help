import { groq } from "next-sanity";
import { writeClient, readClient } from "@/sanity/schema/lib/client";
import { buildQuery } from "../utils";

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
};

export const getSoftwareProducts = async (params: GetSoftwareProductParams) => {
  const { query, page } = params;

  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: "software_product",
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
};

interface UpdateProductRatingProps {
  _id: string;
  stars: number;
}


export const UpdateProductDownloads = async (
  _id: string) => {

    console.log("downloads inc by 1")
  try {
    // add the new star rating
      await writeClient
      .patch(_id)
      .setIfMissing({ views: 1 })
      .inc({ views: 1})
      .commit()

      const views_query = await readClient.fetch(
        `*[_id == "${_id}" ]`
      )
      console.log(views_query)

  } catch (error) {
    console.log(error);
    return error
  }
};



export const UpdateProductRating = async ({
  _id,
  stars,
}: UpdateProductRatingProps) => {


  try {
    // add the new star rating
      await writeClient
      .patch(_id)
      .setIfMissing({ stars_list: [stars] })
      .append("stars_list", [stars])
      .commit({autoGenerateArrayKeys: true})
    

      //get the new array
    const currrent_star_list = await readClient.fetch(
      groq`*[_id == "${_id}"]{stars_list}` 
    );

    // calculate the new mean
    const new_mean_rating = calculateAverage(currrent_star_list[0].stars_list);
    console.log(new_mean_rating)

    // update the stars
    const finalResult = await writeClient
      .patch(_id)
      .set({ stars: new_mean_rating })
      .commit({autoGenerateArrayKeys: true})

    return finalResult

  } catch (error) {
    console.log(error);

    return error
  }
};

function calculateAverage(array: []) {
  var total = 0;
  var count = 0;

  array.forEach(function (item, index) {
    total += item;
    count++;
  });

  var average = total / count;
  // Round the average to two decimal places
  return Math.round(average * 100) / 100;
}
