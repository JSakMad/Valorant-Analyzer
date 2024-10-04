// PrivacyPolicy.js
// Privacy Policy page that explains how user data is handled on the site.

import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="legal-content-container">
      <h2 className="center-text">Privacy Policy</h2>
      <p>
        <strong>Data Collection</strong><br />
        This website collects Valorant data using Riot’s API, including player statistics, match outcomes, and other relevant match data. Users must use Riot Sign-On and log in with their account information to opt-in to data collection. The legal basis for data collection is user consent.
      </p>
      <p>
        <strong>Data Use</strong><br />
        Data is collected for analysis and visualization to provide insights into player performance and trends. This includes character usage rates, map win rates, round win rates, and other aggregated statistics.
      </p>
      <p>
        <strong>Data Access</strong><br />
        Access to the data is limited to Joshua Sakolsky-Madaras, the creator of the website, Riot Games (as the provider of the data through their API), and the database manager (likely MongoDB). No unauthorized third parties will have access to the data.
      </p>
      <p>
        <strong>Data Storage</strong><br />
        Data will be stored for up to 6 months to allow for semester-based analysis. After this period, the data will be deleted to make way for new data.
      </p>
      <p>
        <strong>User Rights</strong><br />
        Users have the right to submit their account data for analysis while they are part of the club or team. If they leave and wish to have their data removed, they can opt-out using Riot Sign-On and signing out of their account.
      </p>
      <p>
        <strong>Policy Changes</strong><br />
        Users will be notified of any changes to the privacy policy through notifications on the website and an indication above the header stating when it was last updated.
      </p>
      <p>
        <strong>Contact Information</strong><br />
        For any questions or concerns, users can contact the site owner at JES521@pitt.edu.
      </p>
      <p>
        <strong>Cookies</strong><br />
        If cookies are used for Riot Sign-On to maintain user sessions, users will be informed and given the option to disable them on the privacy policy page.
      </p>
      <p>
        <strong>Security</strong><br />
        The website employs strict security measures to protect user data, including encryption and access controls. Data is not shared with any unauthorized third parties.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
