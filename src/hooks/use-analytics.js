import React from 'react';
import useAckee from 'use-ackee';

export default function useAnalytics(path) {
  return useAckee(path, {
    server: process.env.GATSBY_ACKEE_SERVER,
    domainId: process.env.GATSBY_ACKEE_DOMAIN_ID
  }, {
    ignoreLocalhost: process.env.GATSBY_ACKEE_IGNORE_LOCALHOST !== 'false',
    detailed: process.env.GATSBY_ACKEE_DETAILED !== 'false',
  });
}
