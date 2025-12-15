<template>
  <navbar />

  <main class="policy-page">
    <section class="container">
      <h1 class="title">SMS Privacy Policysssssssssssssss</h1>

      <p>
        <strong>Elite Auto Estimates</strong> (“we,” “our,” “us”) values your
        privacy. This SMS Privacy Policy explains how we collect, use, and
        protect your information when we contact you via text message.
      </p>

      <div class="section">
        <h2>Website & Opt-In (Consent)</h2>
        <p>
          If you submit an online form on our website and provide your mobile
          number, you are consenting to receive text messages from Elite Auto
          Estimates related to customer care and account notifications, such as
          follow-ups when you do not answer our phone calls, coordinating
          scheduling, and confirming appointment details.
        </p>
        <p>
          We do not use SMS for marketing, promotional, or bulk informational
          messages.
        </p>
        <p>
          Message frequency may vary. On average, you can expect to receive
          1–2 messages per month. Message and data rates may apply.
        </p>
        <p>
          For help, reply <code>HELP</code> or <code>INFO</code>. To opt out,
          reply <code>STOP</code> or <code>UNSUBSCRIBE</code>.
        </p>
      </div>

      <div class="section">
        <h2>Information We Collect</h2>
        <ul>
          <li>
            Your name and mobile phone number, provided by you (e.g., through a
            form submission) or by your insurance company so we may contact you
            regarding your claim.
          </li>
          <li>
            Message content strictly limited to customer care and account
            notification purposes (e.g., scheduling, confirming, or updating an
            appointment).
          </li>
          <li>
            We do not collect unnecessary personal information through our SMS
            program.
          </li>
        </ul>
      </div>

      <div class="section">
        <h2>How We Use Your Information</h2>
        <ul>
          <li>Follow up if you miss our phone call.</li>
          <li>
            Schedule, confirm, or update your appointment related to your
            insurance claim.
          </li>
          <li>Provide important updates regarding your appointment.</li>
        </ul>
        <p>We do not use your number for marketing or promotional purposes.</p>
      </div>

      <div class="section">
        <h2>Message Frequency</h2>
        <p>
          Message frequency may vary. On average, you can expect to receive 1–2
          messages per month. We send only the minimum number of messages needed
          to coordinate scheduling and confirm appointment details.
        </p>
      </div>

      <div class="section">
        <h2>Message & Data Rates</h2>
        <p>
          Message and data rates may apply depending on your mobile carrier
          plan.
        </p>
      </div>

      <div class="section">
        <h2>Opt-Out & Support</h2>
        <p>
          <strong>SMS Commands:</strong> Reply <code>STOP</code> or
          <code>UNSUBSCRIBE</code> at any time to stop receiving SMS
          communications. Reply <code>HELP</code> or <code>INFO</code> for
          assistance.
        </p>
        <p>
          For support, call us at <a href="tel:7207105162">(720) 710-5162</a> or
          email
          <a href="mailto:support@eliteautoestimates.com"
            >support@eliteautoestimates.com</a
          >.
        </p>
      </div>

      <div class="section">
        <h2>Data Sharing</h2>
        <p>
          We do not share, sell, or rent your mobile number, opt-in data, or SMS
          consent information with third parties for marketing purposes. Your
          information is used solely for customer care and account notification
          purposes related to your claim and appointment coordination.
        </p>
      </div>

      <div class="section">
        <h2>Data Security</h2>
        <p>
          We implement reasonable security measures to protect your information
          from unauthorized access, use, or disclosure.
        </p>
      </div>

      <div class="section">
        <h2>Your Privacy Rights & Contact</h2>
        <p>
          For more information on our Privacy Policy and Terms & Conditions,
          please email us at
          <a href="mailto:support@eliteautoestimates.com"
            >support@eliteautoestimates.com</a
          >.
        </p>
        <address>
          <strong>Business Details</strong><br />
          Elite Auto Estimates<br />
          4610 S Ulster St, Ste 150<br />
          Denver, Colorado, 80237<br />
          <br />
          Phone: <a href="tel:7207105162">(720) 710-5162</a><br />
          Email:
          <a href="mailto:support@eliteautoestimates.com"
            >support@eliteautoestimates.com</a
          >
        </address>
      </div>

      <div class="section">
        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy periodically. Updates will be posted on this
          page with a new “Last Updated” date.
        </p>
      </div>

      <div class="last-updated">
        <p><strong>Last Updated:</strong> December 16, 2025</p>
      </div>
    </section>
  </main>

  <Footer />
  <ScrollTop />
</template>

<script>
import navbar from "@/layouts/navbar.vue";
import Footer from "@/layouts/Footer.vue";
import ScrollTop from "@/layouts/ScrollTop.vue";

export default {
  components: {
    navbar,
    Footer,
    ScrollTop,
  },
};
</script>

<style lang="scss" scoped>
.policy-page {
  background: #fafafa;
  color: #222;
  padding: 4rem 1rem;

  .container {
    max-width: 900px;
    margin: 0 auto;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
    padding: 3rem;

    .title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
      text-align: center;
      color: #2b2b2b;
    }

    .section {
      margin-top: 2rem;

      h2 {
        font-size: 1.25rem;
        margin-bottom: 0.75rem;
        color: #1e293b;
      }

      p,
      li {
        font-size: 1rem;
        line-height: 1.7;
        color: #374151;
      }

      ul {
        padding-left: 1.5rem;
        list-style-type: disc;
      }

      code {
        background: #f1f5f9;
        padding: 0.15rem 0.35rem;
        border-radius: 4px;
        font-family: monospace;
      }
    }

    address {
      font-style: normal;
      line-height: 1.6;

      a {
        color: #2563eb;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .last-updated {
      margin-top: 2.5rem;
      text-align: center;
      font-size: 0.95rem;
      color: #6b7280;
    }
  }
}
</style>
