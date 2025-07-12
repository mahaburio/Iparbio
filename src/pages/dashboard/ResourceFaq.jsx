import React from 'react';
import HeaderDashboard from '../../components/header/HeaderDashboard';
import FaqSection from '../../components/product-page/Faq';

const ResourcesFaq = () => {



  const faqData = [
    {
      title: "Profile & Account Management",
      paragraphs: [


        <p><b>Can I change my profile picture?</b> <br />Yes, you can upload or replace your profile image and crop it as needed</p>,

        <p><b>How do I log out of the system?'</b> <br />Click on your profile and select 'Log Out'</p>,

      ],
    },
    {
      title: "Libraries & Content Management",
      paragraphs: [
        <p><b>The Cleansing+ Blend</b> merges potent botanical extracts from traditional medicine with modern nutritional science. Ingredients such as Senna Leaf and Aloe Vera work in synergy with Apple Cider Vinegar and Psyllium Husk to support the body's natural detoxification processes, ensuring a gentle yet effective cleanse.*</p>,
      ],
    },
    {
      title: "Initiatives Creation & Editing in My Libraries",
      paragraphs: [
        <p><b>The Cleansing+ Blend</b> merges potent botanical extracts from traditional medicine with modern nutritional science. Ingredients such as Senna Leaf and Aloe Vera work in synergy with Apple Cider Vinegar and Psyllium Husk to support the body's natural detoxification processes, ensuring a gentle yet effective cleanse.*</p>,

      ],
    },
    {
      title: "Sharing & Tracking Content",
      paragraphs: [
        <p><b>The Cleansing+ Blend</b> merges potent botanical extracts from traditional medicine with modern nutritional science. Ingredients such as Senna Leaf and Aloe Vera work in synergy with Apple Cider Vinegar and Psyllium Husk to support the body's natural detoxification processes, ensuring a gentle yet effective cleanse.*</p>,
      ],
    },

    {
      title: "Managing Events",
      paragraphs: [
        <p><b>The Cleansing+ Blend</b> merges potent botanical extracts from traditional medicine with modern nutritional science. Ingredients such as Senna Leaf and Aloe Vera work in synergy with Apple Cider Vinegar and Psyllium Husk to support the body's natural detoxification processes, ensuring a gentle yet effective cleanse.*</p>,
      ],
    },

    {
      title: "Contact & Group Management",
      paragraphs: [
        <p><b>The Cleansing+ Blend</b> merges potent botanical extracts from traditional medicine with modern nutritional science. Ingredients such as Senna Leaf and Aloe Vera work in synergy with Apple Cider Vinegar and Psyllium Husk to support the body's natural detoxification processes, ensuring a gentle yet effective cleanse.*</p>,
      ],
    },
  ];


  return (
    <div className='ipar_elite resource_faq'>
      <HeaderDashboard
        NotifySection={false}
        isEwalletPage={true}
        navResources={true}
      />

      <FaqSection faqData={faqData} faqFooter={false} />
    </div>
  );
};


export default ResourcesFaq