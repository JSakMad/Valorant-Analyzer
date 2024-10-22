// ToS.js
// Terms of Service page that explains the terms and conditions of using the site.

import React from 'react';
import { Link } from 'react-router-dom';

const ToS = () => {
  return (
    <div className="legal-content-container">
      <h2 className="center-text">Terms of Service</h2>
      <p>
        This document outlines the terms of service for Valorant Analyzer. I am a college student at the University of Pittsburgh studying computer science, and I am the creator of this website. The website is operated for the esports club and is used for data analysis for the Valorant team to provide insights into gameplay and identify areas for improvement.
      </p>
      <p>
        <strong>User Guidelines</strong><br />
        Users are expected to:
        <ul>
          <li>Use the website in a manner that is respectful and lawful.</li>
          <li>Not engage in any activity that could harm the website or its users.</li>
          <li>Not use the website to distribute any harmful or illegal content.</li>
        </ul>
        Prohibited behaviors include, but are not limited to:
        <ul>
          <li>Hacking or attempting to gain unauthorized access to the website or its data.</li>
          <li>Using the website for any form of harassment or abuse.</li>
          <li>Uploading or sharing content that infringes on the intellectual property rights of others.</li>
        </ul>
      </p>
      <p>
        <strong>Account Management</strong><br />
        We reserve the right to terminate or restrict access to accounts that violate these terms. Users who engage in prohibited behaviors or violate any part of these terms may have their accounts suspended or terminated without prior notice.
      </p>
      <p>
        <strong>Intellectual Property</strong><br />
        All content on this website, including text, graphics, logos, and software, is the property of Valorant Analyzer or its content suppliers and is protected by copyright laws. Users are not permitted to use any content from the website without permission. We reserve the right to remove any content that infringes on copyright.
      </p>
      <p>
        <strong>Liability</strong><br />
        Valorant Analyzer is provided “as is” without any warranties, express or implied. We do not guarantee that the website will be available at all times or that it will be free from errors or interruptions. We are not liable for any damages arising from the use or inability to use the website.
      </p>
      <p>
        <strong>Contact Information</strong><br />
        For any questions or concerns regarding these terms, please contact us at JES521@pitt.edu.
      </p>
      <p>
        <strong>Governing Law</strong><br />
        These terms are governed by and construed in accordance with the laws of the state of Pennsylvania. Any disputes arising from these terms will be resolved in the courts of Pennsylvania.
      </p>
      <p>
        <strong>Updates</strong><br />
        We may update these terms from time to time. Users will be notified of any changes through notifications on the website and an indication above the header stating when the terms were last updated.
      </p>
      <p>
        <strong>Privacy</strong><br />
        Please refer to our <Link to="/privacy-policy">Privacy Policy</Link> for information on how we collect, use, and protect your data.
      </p>
    </div>
  );
};

export default ToS;
