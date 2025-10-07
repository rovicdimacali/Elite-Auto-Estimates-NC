<template>
  <navbar />

  <main class="policy-page">
    <section class="container">
      <h1 class="title">SMS Privacy Policy</h1>

      <p>
        <strong>Elite Auto Estimates</strong> (“we,” “our,” “us”) values your
        privacy. This SMS Privacy Policy explains how we collect, use, and
        protect your information when we contact you via text message.
      </p>

      <div class="section">
        <h2>Information We Collect</h2>
        <ul>
          <li>
            Your name and mobile phone number, provided by your insurance
            company so we may contact you regarding your claim.
          </li>
          <li>
            Message content strictly limited to scheduling, confirming, or
            updating your appointment.
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
          You will receive only the minimum number of messages required to
          coordinate your appointment.
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
          <strong>SMS Commands:</strong> Reply <code>STOP</code> at any time to
          stop receiving SMS communications. Reply <code>HELP</code> for
          assistance.
        </p>
        <p>
          For support, call us at <a href="tel:7207105162">(720) 710-5162</a>.
        </p>
      </div>

      <div class="section">
        <h2>Data Sharing</h2>
        <p>
          We do not share, sell, or rent your mobile number, opt-in data, or SMS
          consent information with third parties. Your information is used
          solely for claim-related scheduling.
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
        <p><strong>Last Updated:</strong> October 7, 2025</p>
      </div>
    </section>
  </main>

  <Footer />
  <ScrollTop />
</template>

<script>
import navbar from "@/layouts/navbar.vue";
import Footer from "@/layouts/Footer.vue";

export default {
  components: {
    navbar,
    Footer,
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
