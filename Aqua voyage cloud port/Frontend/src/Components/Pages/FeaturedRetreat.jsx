// FeaturedRetreat.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
// import './FeaturedRetreat.css'; // Import local styles

const FeaturedRetreat = ({ title, description, imageUrl, price }) => {
  return (
    <Card className="featured-retreat">
      <CardMedia component="img" height="140" image={imageUrl} alt={title} />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6" color="primary">
          ${price} per night
        </Typography>
      </CardContent>
    </Card>
  );
};

FeaturedRetreat.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default FeaturedRetreat;
