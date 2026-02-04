import SEO from '@/components/SEO';

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="KreateRevo Privacy Policy - Learn how we collect, use, and protect your personal data."
        canonical="/privacy"
        noindex
      />

      <div className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-label mb-4 block">Legal</span>
            <h1 className="font-display font-bold text-display-1 mb-6">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-card border border-border/30 rounded-2xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Important Notice:</strong> This is a placeholder privacy policy template. 
                As a Germany-based company serving EU clients, KreateRevo is committed to GDPR compliance. 
                Please consult with a qualified legal professional to ensure this privacy policy meets your specific requirements 
                and complies with all applicable data protection regulations.
              </p>
            </div>

            <section className="mb-10">
              <h2 className="font-display font-semibold text-2xl mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                KreateRevo (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                please do not access the site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display font-semibold text-2xl mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect information about you in a variety of ways. The information we may collect via the website includes:
              </p>
              <h3 className="font-medium text-lg mb-3">2.1 Personal Data</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Personally identifiable information, such as your name, email address, company name, and telephone number, 
                that you voluntarily give to us when you register with the website or when you choose to participate in 
                various activities related to the website, such as online chat and message boards.
              </p>
              <h3 className="font-medium text-lg mb-3">2.2 Derivative Data</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Information our servers automatically collect when you access the website, such as your IP address, 
                browser type, operating system, access times, and the pages you have viewed directly before and after accessing the website.
              </p>
              <h3 className="font-medium text-lg mb-3">2.3 Financial Data</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, 
                expiration date) that we may collect when you purchase, order, return, exchange, or request information about 
                our services from the website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display font-semibold text-2xl mb-4">3. Use of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. 
                Specifically, we may use information collected about you via the website to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Create and manage your account.</li>
                <li>Process your transactions and send you related information.</li>
                <li>Email you regarding your account or order.</li>
                <li>Respond to your comments, questions, and requests.</li>
                <li>Send you marketing and promotional communications.</li>
                <li>Improve our website and services.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-display font-semibold text-2xl mb-4">4. GDPR Compliance (for EU Residents)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you are a resident of the European Economic Area (EEA), you have certain data protection rights under the 
                General Data Protection Regulation (GDPR). These rights include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Right to Access:</strong> You have the right to request copies of your personal data.</li>
                <li><strong>Right to Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
                <li><strong>Right to Erasure:</strong> You have the right to request that we erase your personal data.</li>
                <li><strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data.</li>
                <li><strong>Right to Data Portability:</strong> You have the right to request that we transfer the data we have collected to another organization.</li>
                <li><strong>Right to Object:</strong> You have the right to object to our processing of your personal data.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise any of these rights, please contact us at privacy@kreaterevo.com.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display font-semibold text-2xl mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may use cookies, web beacons, tracking pixels, and other tracking technologies on the website to help customize 
                the website and improve your experience. When you access the website, your personal information is not collected 
                through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject 
                cookies, but be aware that such action could affect the availability and functionality of the website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display font-semibold text-2xl mb-4">6. Third-Party Websites</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The website may contain links to third-party websites and applications of interest that are not affiliated with us. 
                Once you have used these links to leave the website, any information you provide to these third parties is not 
                covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information. 
                Before visiting and providing any information to any third-party websites, you should inform yourself of 
                the privacy policies and practices of the third party responsible for that website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display font-semibold text-2xl mb-4">7. Security of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use administrative, technical, and physical security measures to help protect your personal information. 
                While we have taken reasonable steps to secure the personal information you provide to us, please be aware that 
                despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be 
                guaranteed against any interception or other type of misuse.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display font-semibold text-2xl mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-card border border-border/30 rounded-xl p-6">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">KreateRevo</strong><br />
                  Email: privacy@kreaterevo.com<br />
                  Address: Berlin, Germany
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
