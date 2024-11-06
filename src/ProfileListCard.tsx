import React from 'react';
import { useQuery } from '@apollo/client';
import { PROFILE_LIST_CARD_QUERY } from './ApolloClient';

type ProfileListCardProps = {
  pk: number;
};

const ProfileListCard = ({ pk }: ProfileListCardProps) => {
  // Fetch data with typing
  const { data, loading, error } = useQuery(PROFILE_LIST_CARD_QUERY, {
    variables: { pk },
  });
  console.log(data);

  // Extracting fields
  const reward = data?.token_by_pk;
  const title = reward?.contract?.metadata?.benefit_tldr;
  const subtitle = reward?.metadata?.name;
  const rewardImageUrl = reward?.metadata.image;
  const value = reward?.metadata?.value;
  const expirationDatetime = reward?.metadata?.expiration_datetime;
  const brandName = reward?.contract?.metadata?.brand.name;
  const brandImageUrl = reward?.contract?.metadata?.brand?.image_url;
  console.log(reward);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // TODO:
  // Display Data
  // Handle navigation

  return (
    <div>
      <p>I am a Card!</p>
      {/* TODO: Complete the layout using title, subtitle, rewardImageUrl, etc. */}
    </div>
  );
};

export default ProfileListCard;
