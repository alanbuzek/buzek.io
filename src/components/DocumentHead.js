import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';


const DocumentHead = ({ description, title, imageURL }) => (
    <Helmet>
      {title && <title>{title}</title>}
      {title && <meta property="og:title" content={title} />}
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={imageURL || 'https://dosha.design/img/graphics/other/og-image.png'} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
    </Helmet>
);

DocumentHead.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
  canonicalPath: PropTypes.string,
  title: PropTypes.string,
  imageURL: PropTypes.string,
};

export default DocumentHead;
