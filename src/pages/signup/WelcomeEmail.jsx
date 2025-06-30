import React from 'react';

// Layout & Wrappers
import MainWrapper from '../../components/common/Mainwrapper.jsx';
import { Header } from '../../components';
import Footer from '../../components/footer/footer.jsx';
import { Help } from '../../components/common/Help.jsx';
import { HeroSection } from '../../components/common/HeroSection.jsx';

import '../../styles/pages/joinus.css';

const WelcomeEmail = ({
  userName = "xxxxxxx",
  userId = "10656408",
  emailType = "signup", // "signup" | "order"
}) => {
  const renderMessage = () => {
    if (emailType === "order") {
      return (
        <>
          <strong>Hey {userName},</strong>
          <br /><br />
          Welcome to IPAR!<br />
          Thank you for joining us. You're all set to take the first step toward a healthier, happier life.
          <br /><br />
          Today, we’ve received your first order and successfully set you up with an Independent Business Advisor (IBA) ID number to kickstart your business.
          <br /><br />
          <strong>Your IBA ID Number: {userId}</strong>
          <br /><br />
          You'll need this ID to: Order products, access our online services, bring new team members on board, customize your business’s online presence. Plus, you can explore sales tools, use the shopping cart, get business tips, and much more.
          <br /><br />
          Cheers,<br />
          The IPAR Team
        </>
      );
    }

    // Default: Sign-up welcome message
    return (
      <>
        <strong>Hey {userName},</strong>
        <br /><br />
        Welcome to the IPAR! We’re so excited to have you with us.
        <br /><br />
        You’re all set to take the first step toward a healthier, happier life. Today, we’ve set you up with an Independent Business Advisor (IBA) ID number to kickstart your business.
        <br /><br />
        <strong>Your temporary ID Number: {userId}</strong>
        <br /><br />
        You’ll need this ID to order products, access our online services, bring new team members on board, and customize your business’s online presence. Plus, you can explore sales tools, use the shopping cart, get business tips, and much more.
        <br /><br />
        To finish up your registration smoothly, we just need you to confirm a few details with us. No pressure—you can pause and come back anytime during the process. If you’d rather not handle this digitally, feel free to reach out to your local office. We’re here to help and can’t wait to work with you!
        <br /><br />
        Cheers,<br />
        IPAR
      </>
    );
  };

  return (
    <div>
      <MainWrapper>
        <Header />

        {/* Hero Section */}
        <HeroSection
          title={`Empower<br />Your<br />Journey<br />With Ipar`}
          description="Take the first step today with Ipar’s innovative tools, training, and support. Together, let’s create a brighter future!"
          shapeUrl="../images/leaf-shape.webp"
          imageUrl="../images/women3-Photoroom.webp"
        />

        {/* Message Section */}
        <section className="email-section">
          <div className="container">
            <p>{renderMessage()}</p>

            <div className="btn-sec text-end mt-5">
              <button className="green-btn">Get Started</button>
            </div>
          </div>
        </section>

        <Help />
        <Footer />
      </MainWrapper>
    </div>
  );
};

export default WelcomeEmail;
