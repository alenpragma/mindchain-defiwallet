import { useEffect } from "react";
import Container from "../components/layouts/Container";

const PrivacyPolicy = () => {
  const recipient = "support@mindchain.info";
  const subject = "Write your Subject Here";
  const body = "Write email body here.";

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    recipient
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="bg-lightBlue pb-[60px] md:pb-[150px] text-white">
      <Container>
        <div className="md:w-3/4 w-full mx-auto">
          <h3 className="text-center text-2xl font-semibold my-8">
            Privacy Policy
          </h3>
          {/* ------------------  1 */}
          <div className="text-justify">
            <p className="font-semibold text-[18px] ">
              Last updated: May 23, 2024
            </p>
            <p className="my-4">
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.
            </p>
            <p className="my-4">
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy. This Privacy
              Policy has been created with the help of the{" "}
              <a
                className="text-blue-400 hover:text-blue-500"
                href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Free privacy policy generator
              </a>
            </p>
          </div>
          <h3 className="text-[32px] my-3">Interpretation and Definitions</h3>
          {/* -------------- 2  */}
          <div className="text-justify my-10">
            <h2 className="text-[28px] my-3">Interpretation</h2>
            <p className="my-4">
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>
          </div>
          {/* -------------- 3  */}
          <div className="text-justify my-10">
            <h2 className="text-[28px] my-3">Definitions</h2>
            <h5 className="font-semibold">
              For the purposes of this Privacy Policy:
            </h5>
            <ul className="ml-5 space-y-3">
              <li className="list-disc">
                <span className="font-semibold">Account</span>{" "}
                <span className="font-light">
                  means a unique account created for You to access our Service
                  or parts of our Service.
                </span>
              </li>
              <li className="list-disc">
                <span className="font-semibold">Affiliate</span>{" "}
                <span className="font-light">
                  {`
                  means an entity that controls, is controlled by or is under
                  common control with a party, where "control" means ownership
                  of 50% or more of the shares, equity interest or other
                  securities entitled to vote for election of directors or other
                  managing authority.`}
                </span>
              </li>
              <li className="list-disc">
                <span className="font-semibold">Application</span>{" "}
                <span className="font-light">
                  {`refers to MindWallet, the software program provided by the Company.`}
                </span>
              </li>
              <li className="list-disc">
                <span className="font-semibold">Company</span>{" "}
                <span className="font-light">
                  {`(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Mindchain Ecosystem, Yonca Apartmant Sair Cem Sokak No 6/12 Aksamsettin Mahallesi Fatih, Istanbul, Turkey.`}
                </span>
              </li>
              <li className="list-disc">
                <span className="font-semibold">Device</span>{" "}
                <span className="font-light">{`means any device that can access the Service such as a computer, a cellphone or a digital tablet.`}</span>
              </li>
              <li className="list-disc">
                <span className="font-semibold">Personal Data</span>{" "}
                <span className="font-light">{`is any information that relates to an identified or identifiable individual.`}</span>
              </li>
              <li className="list-disc">
                <span className="font-semibold">Service</span>{" "}
                <span className="font-light">{`refers to the Application.`}</span>
              </li>
              <li className="list-disc">
                <span className="font-semibold">Service Provider</span>{" "}
                <span className="font-light">{`means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.`}</span>
              </li>
              <li className="list-disc">
                <span className="font-semibold">Usage Data</span>{" "}
                <span className="font-light">{`refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).`}</span>
              </li>
              <li className="list-disc">
                <span className="font-semibold">You</span>{" "}
                <span className="font-light">{`means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.`}</span>
              </li>
            </ul>
          </div>
          {/* -------------- 4  */}
          <div className="text-justify my-10">
            <h3 className="text-[32px] my-3">
              Collecting and Using Your Personal Data
            </h3>
            <h2 className="text-[28px] my-3">Types of Data Collected</h2>
            <h4 className="font-semibold text-[24px] my-3">Personal Data</h4>
            <div className="space-y-3">
              <p>
                {" "}
                While using Our Service, We may ask You to provide Us with
                certain personally identifiable information that can be used to
                contact or identify You. Personally identifiable information may
                include, but is not limited to:
              </p>
            </div>
            <h4 className="font-semibold text-[24px] my-3">Usage Data</h4>
            <div className="space-y-3">
              <p>
                {" "}
                Usage Data is collected automatically when using the Service.
              </p>
              <p>
                {" "}
                Usage Data may include information such as Your Device's
                Internet protocol address (e.g. IP address), browser type,
                browser version, the pages of our Service that You visit, the
                time and date of Your visit, the time spent on those pages,
                unique device identifiers and other diagnostic data.
              </p>{" "}
              <p>
                {" "}
                When You access the Service by or through a mobile device, We
                may collect certain information automatically, including, but
                not limited to, the type of mobile device You use, Your mobile
                device unique ID, the IP address of Your mobile device, Your
                mobile operating system, the type of mobile Internet browser You
                use, unique device identifiers and other diagnostic data.
              </p>{" "}
              <p>
                We may also collect information that Your browser sends whenever
                You visit our Service or when You access the Service by or
                through a mobile device.
              </p>
            </div>
          </div>
          {/* -------------- 5  */}
          <div className="text-justify my-10">
            <h2 className="text-[28px] my-3">Use of Your Personal Data</h2>
            <h5 className="font-semibold">
              The Company may use Personal Data for the following purposes:
            </h5>
            <ul className="ml-5 space-y-3">
              <li className="list-disc">
                <span className="font-semibold">To manage Your Account :</span>{" "}
                <span className="font-light">
                  to manage Your registration as a user of the Service. The
                  Personal Data You provide can give You access to different
                  functionalities of the Service that are available to You as a
                  registered user.
                </span>
              </li>
              <li className="list-disc">
                <span className="font-semibold">To provide You :</span>{" "}
                <span className="font-light">
                  with news, special offers and general information about other
                  goods, services and events which we offer that are similar to
                  those that you have already purchased or enquired about unless
                  You have opted not to receive such information.
                </span>
              </li>
              <li className="list-disc">
                <span className="font-semibold">For business transfers :</span>{" "}
                <span className="font-light">
                  We may use Your information to evaluate or conduct a merger,
                  divestiture, restructuring, reorganization, dissolution, or
                  other sale or transfer of some or all of Our assets, whether
                  as a going concern or as part of bankruptcy, liquidation, or
                  similar proceeding, in which Personal Data held by Us about
                  our Service users is among the assets transferred.
                </span>
              </li>
              <li className="list-disc">
                <span className="font-semibold">For other purposes :</span>{" "}
                <span className="font-light">
                  We may use Your information for other purposes, such as data
                  analysis, identifying usage trends, determining the
                  effectiveness of our promotional campaigns and to evaluate and
                  improve our Service, products, services, marketing and your
                  experience.
                </span>
              </li>
              <p>
                We may share Your personal information in the following
                situations
              </p>
              <li className="list-disc">
                <span className="font-semibold">With Service Providers :</span>{" "}
                <span className="font-light">
                  We may share Your personal information with Service Providers
                  to monitor and analyze the use of our Service, to contact You.
                </span>
              </li>
              <li className="list-disc">
                <span className="font-semibold">With Affiliates :</span>{" "}
                <span className="font-light">
                  We may share Your information with Our affiliates, in which
                  case we will require those affiliates to honor this Privacy
                  Policy. Affiliates include Our parent company and any other
                  subsidiaries, joint venture partners or other companies that
                  We control or that are under common control with Us.
                </span>
              </li>
              <li className="list-disc">
                <span className="font-semibold">With business partners :</span>{" "}
                <span className="font-light">
                  We may share Your information with Our business partners to
                  offer You certain products, services or promotions.
                </span>
              </li>
              <li className="list-disc">
                <span className="font-semibold">With other users :</span>{" "}
                <span className="font-light">
                  when You share personal information or otherwise interact in
                  the public areas with other users, such information may be
                  viewed by all users and may be publicly distributed outside.
                </span>
              </li>
              <li className="list-disc">
                <span className="font-semibold">With Your consent :</span>{" "}
                <span className="font-light">
                  when You share personal information or otherwise interact in
                  the public areas with other users, such information may be
                  viewed by all users and may be publicly distributed outside.
                </span>
              </li>
            </ul>
          </div>
          {/* -------------- 6  */}
          <div className="text-justify my-10">
            <h2 className="text-[28px] my-3">
              Retention of Your Personal Data
            </h2>
            <div className="space-y-3">
              <p>
                The Company will retain Your Personal Data only for as long as
                is necessary for the purposes set out in this Privacy Policy. We
                will retain and use Your Personal Data to the extent necessary
                to comply with our legal obligations (for example, if we are
                required to retain your data to comply with applicable laws),
                resolve disputes, and enforce our legal agreements and policies.
              </p>
              <p>
                The Company will also retain Usage Data for internal analysis
                purposes. Usage Data is generally retained for a shorter period
                of time, except when this data is used to strengthen the
                security or to improve the functionality of Our Service, or We
                are legally obligated to retain this data for longer time
                periods.
              </p>
            </div>
          </div>
          {/* -------------- 7  */}
          <div className="text-justify my-10">
            <h2 className="text-[28px] my-3">Transfer of Your Personal Data</h2>
            <div className="space-y-3">
              <p>
                {`Your information, including Personal Data, is processed at the
                Company's operating offices and in any other places where the
                parties involved in the processing are located. It means that
                this information may be transferred to — and maintained on —
                computers located outside of Your state, province, country or
                other governmental jurisdiction where the data protection laws
                may differ than those from Your jurisdiction.`}
              </p>
              <p>
                Your consent to this Privacy Policy followed by Your submission
                of such information represents Your agreement to that transfer.
              </p>
              <p>
                The Company will take all steps reasonably necessary to ensure
                that Your data is treated securely and in accordance with this
                Privacy Policy and no transfer of Your Personal Data will take
                place to an organization or a country unless there are adequate
                controls in place including the security of Your data and other
                personal information.
              </p>
            </div>
          </div>
          {/* -------------- 8  */}
          <div className="text-justify my-10">
            <h2 className="text-[28px] my-3">Delete Your Personal Data</h2>
            <div className="space-y-3">
              <p>
                You have the right to delete or request that We assist in
                deleting the Personal Data that We have collected about You.
              </p>
              <p>
                Our Service may give You the ability to delete certain
                information about You from within the Service.
              </p>
              <p>
                You may update, amend, or delete Your information at any time by
                signing in to Your Account, if you have one, and visiting the
                account settings section that allows you to manage Your personal
                information. You may also contact Us to request access to,
                correct, or delete any personal information that You have
                provided to Us.
              </p>
              <p>
                Please note, however, that We may need to retain certain
                information when we have a legal obligation or lawful basis to
                do so.
              </p>
            </div>
          </div>
          {/* -------------- 9  */}
          <div className="text-justify my-10">
            <h2 className="text-[28px] my-3">
              Disclosure of Your Personal Data
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-[24px] font-semibold mb-2">
                  Business Transactions
                </h3>
                <p>
                  If the Company is involved in a merger, acquisition or asset
                  sale, Your Personal Data may be transferred. We will provide
                  notice before Your Personal Data is transferred and becomes
                  subject to a different Privacy Policy.
                </p>
              </div>
              <div>
                <h3 className="text-[24px] font-semibold mb-2">
                  Law enforcement
                </h3>
                <p>
                  Under certain circumstances, the Company may be required to
                  disclose Your Personal Data if required to do so by law or in
                  response to valid requests by public authorities (e.g. a court
                  or a government agency).
                </p>
              </div>
              <div>
                <h3 className="text-[24px] font-semibold mb-2">
                  Other legal requirements
                </h3>
                <p>
                  The Company may disclose Your Personal Data in the good faith
                  belief that such action is necessary to:
                </p>
              </div>
              <div>
                <ul className="ml-5 space-y-3">
                  <li className="list-disc font-light">
                    Comply with a legal obligation
                  </li>
                  <li className="list-disc font-light">
                    Protect and defend the rights or property of the Company
                  </li>
                  <li className="list-disc font-light">
                    Prevent or investigate possible wrongdoing in connection
                    with the Service
                  </li>
                  <li className="list-disc font-light">
                    Protect the personal safety of Users of the Service or the
                    public
                  </li>
                  <li className="list-disc font-light">
                    Protect against legal liability
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* -------------- 9  */}
          <div className="text-justify my-10">
            <h2 className="text-[28px] my-3">Security of Your Personal Data</h2>
            <p>
              The security of Your Personal Data is important to Us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is 100% secure. While We strive to
              use commercially acceptable means to protect Your Personal Data,
              We cannot guarantee its absolute security.
            </p>
          </div>
          {/* -------------- 10  */}
          <div className="text-justify my-10">
            <h2 className="text-[28px] my-3">{`Children's Privacy`}</h2>
            <p>
              Our Service does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from anyone
              under the age of 13. If You are a parent or guardian and You are
              aware that Your child has provided Us with Personal Data, please
              contact Us. If We become aware that We have collected Personal
              Data from anyone under the age of 13 without verification of
              parental consent, We take steps to remove that information from
              Our servers.
            </p>
            <p>
              {`  If We need to rely on consent as a legal basis for processing Your
              information and Your country requires consent from a parent, We
              may require Your parent's consent before We collect and use that
              information.`}
            </p>
          </div>
          {/* -------------- 11  */}
          <div className="text-justify my-10">
            <h2 className="text-[28px] my-3">Links to Other Websites</h2>
            <p>
              {` Our Service may contain links to other websites that are not
              operated by Us. If You click on a third party link, You will be
              directed to that third party's site. We strongly advise You to
              review the Privacy Policy of every site You visit.`}
            </p>
            <p>
              We have no control over and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services.
            </p>
          </div>
          {/* -------------- 11  */}
          <div className="text-justify my-10">
            <h2 className="text-[28px] my-3">Changes to this Privacy Policy</h2>
            <p>
              We may update Our Privacy Policy from time to time. We will notify
              You of any changes by posting the new Privacy Policy on this page.
            </p>
            <p>
              {`We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.`}
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </div>
          {/* -------------- 12  */}
          <div className="text-justify my-10">
            <h2 className="text-[28px] my-3">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, You can
              contact us :
            </p>
            <ul>
              <li className="list-disc ml-5">
                By email:{" "}
                <a
                  className="text-blue-400 hover:text-blue-500"
                  href={gmailLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  support@mindchain.info
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PrivacyPolicy;
