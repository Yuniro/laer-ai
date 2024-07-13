/* eslint-disable max-len */
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { H1, H2, Desc, Text } from './components';
import { StatusContainer } from 'components/status-container';


const Privacy = () => (
  <StatusContainer
    Wrapper={(props) => (
      <Container maxWidth="lg" sx={{ my: 6, p: 0 }} {...props} />
    )}
  >
    <Container maxWidth="md" sx={{ mx: 0, p: {xs : 3 ,sm: 0} }}>
      <H1
        sx={{
          color: '#180636',
          fontWeight: 600,
          fontFamily: `'Newsreader', serif`,
          fontSize: { xs: '48px', sm: '62px' },
          textAlign: 'start'
        }}
      >
        Privacy Policy
      </H1>
      <Desc
        sx={{
          color: '#46385E',
          fontWeight: 400,
          fontFamily: `'Poppins', sans-serif`,
          fontSize: { xs: '16px', lg: '18px' },
          textAlign: 'start'
        }}
      >
        Last updated June 02, 2022
      </Desc>
      <Box component="section" sx={{ mb: 6, mt: 4 }}>
        <Text
          sx={{
            color: '#5578A0',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '14px',
            textAlign: 'start'
          }}
        >
          Welcome to the web site (the “Site”) of LAER AI, Inc. (“LAER AI”,
          “Company”, “we”, “us” and/or “our”). This Site is operated by LAER AI
          and has been created to provide information about our company and our
          security services and related services (together with the Site, the
          “Services”) to our Service visitors (“you”, “your”). This Privacy
          Policy sets forth LAER AI&apos;s policy with respect to information
          including personally identifiable data (“Personal Data”) and other
          information that is collected from visitors to the Site and Services.
        </Text>
      </Box>
      <Box component="section" sx={{ my: 6 }}>
        <H2
          sx={{
            color: '#3E4D6A',
            fontWeight: 600,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '24px',
            textAlign: 'start',
            lineHeight: '30px'
          }}
        >
          What information do we collect?
        </H2>
        <Text
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          When you interact with us through the Services, we may collect
          Personal Data and other information from you, as further described
          below:
        </Text>
        <Text
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          <strong
            style={{
              fontWeight: 600
            }}
          >
            Personal Data That You Provide Through the Services
          </strong>
          : We collect Personal Data from you when you voluntarily provide such
          information, such as when you contact us with inquiries, respond to
          one of our surveys, register for access to the Services or use certain
          Services. Wherever LAER AI collects Personal Data we make an effort to
          provide a link to this Privacy Policy.
        </Text>
        <Text
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          By voluntarily providing us with Personal Data, you are consenting to
          our use of it in accordance with this Privacy Policy. If you provide
          Personal Data to the Services, you acknowledge and agree that such
          Personal Data may be transferred from your current location to the
          offices and servers of LAER AI and the authorized third parties
          referred to herein located in the United States.
        </Text>

        <H2
          sx={{
            color: '#3E4D6A',
            fontWeight: 600,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '24px',
            textAlign: 'start',
            lineHeight: '30px'
          }}
        >
          Other Information
        </H2>

        <Text
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          <strong
            style={{
              fontWeight: 600
            }}
          >
            Non-Identifiable Data
          </strong>
          : When you interact with LAER AI through the Services, we receive and
          store certain personally non-identifiable information. Such
          information, which is collected passively using various technologies,
          cannot presently be used to specifically identify you. LAER AI may
          store such information itself or such information may be included in
          databases owned and maintained by LAER AI affiliates, agents or
          service providers. The Services may use such information and pool it
          with other information to track, for example, the total number of
          visitors to our Site, the number of visitors to each page of our Site,
          and the domain names of our visitors&apos; Internet service providers.
          It is important to note that no Personal Data is available or used in
          this process.
        </Text>
        <Text
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          In operating the Services, we may use a technology called
          &quot;cookies.&quot; A cookie is a piece of information that the
          computer that hosts our Services gives to your browser when you access
          the Services. Our cookies help provide additional functionality to the
          Services and help us analyze Services usage more accurately. For
          instance, our Site may set a cookie on your browser that allows you to
          access the Services without needing to remember and then enter a
          password more than once during a visit to the Site. In all cases in
          which we use cookies, we will not collect Personal Data except with
          your permission. On most web browsers, you will find a “help” section
          on the toolbar. Please refer to this section for information on how to
          receive notification when you are receiving a new cookie and how to
          turn cookies off. We recommend that you leave cookies turned on
          because they allow you to take advantage of some of the Service
          features.
        </Text>
        <Text
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          <strong
            style={{
              fontWeight: 600
            }}
          >
            Aggregated Personal Data
          </strong>
          : In an ongoing effort to better understand and serve the users of the
          Services, LAER AI often conducts research on its customer
          demographics, interests and behavior based on the Personal Data and
          other information provided to us. This research may be compiled and
          analyzed on an aggregate basis, and LAER AI may share this aggregate
          data with its affiliates, agents and business partners. This aggregate
          information does not identify you personally. LAER AI may also
          disclose aggregated user statistics in order to describe our services
          to current and prospective business partners, and to other third
          parties for other lawful purposes.
        </Text>
        <Text
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          <strong
            style={{
              fontWeight: 600
            }}
          >
            {' '}
            Location Information
          </strong>
          : Our Service may collect and use your location information (for
          example, by using the GPS on your mobile device) to provide certain
          functionality of our Service. If you choose to enable our location
          features, your location information may be publicly displayed within
          the Service. Please keep in mind that other users can see this
          information about you, and they may use it or disclose it to other
          individuals or entities outside of our control and without your
          knowledge. Your location information may be subject to abuse, misuse,
          and monitoring by others, so please be careful if you choose to enable
          location functionality. We may also use your location information in
          an aggregate way, as described above in the “Aggregated Personal Data”
          section.
        </Text>

        <Text
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          <strong
            style={{
              fontWeight: 600
            }}
          >
            Analytics and Tracking Technologies
          </strong>
          : We may, and we may allow third party service providers to, use
          cookies (as noted above) or other tracking technologies to collect
          information about your browsing activities over time and across
          different websites following your use of the Site. For example, we use
          Google Analytics, a web analytics service provided by Google, Inc.
          (“Google”). Google Analytics uses cookies to help us analyze how users
          use the Site and enhance your experience when you use the Site. For
          more information on how Google uses this data, go to&nbsp;
          <a
            style={{
              color: '#047FFF'
            }}
            href="www.google.com/policies/privacy/partners/"
            target="_blank"
            rel="noreferrer"
          >
            www.google.com/policies/privacy/partners/
          </a>
          .
        </Text>
        <Text
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          <strong
            style={{
              fontWeight: 600
            }}
          >
            Information From Third-Party Services
          </strong>
          : We may receive information about you from other sources , including
          through Third-Party services that you may connect to LAER AI (such as
          Google API Services) and organizations to supplement information
          provided by you. For example, if you access our Services through a
          Third-Party application, such as Google Sign-In, we may collect
          information about you from that Third-Party application that you have
          made available. Information we collect through integrations and other
          connected Third-Party services may include your name, your email,
          logging information, etc. This information allows us to provide you
          with the LAER AI services and to enhance our ability to provide you
          with information about our business and products.
        </Text>
        <Text
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          Our Site currently does not respond to “Do Not Track” (DNT) signals
          and operates as described in this Privacy Policy whether or not a DNT
          signal is received. If we do so in the future, we will describe how we
          do so in this Privacy Policy.
        </Text>
      </Box>
      <Box component="section" sx={{ my: 6 }}>
        <H2
          sx={{
            color: '#3E4D6A',
            fontWeight: 600,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '24px',
            textAlign: 'start',
            lineHeight: '30px'
          }}
        >
          How do we use your information?
        </H2>
        <Text
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          LAER AI uses the Personal Data you provide in a manner that is
          consistent with this Privacy Policy. If you provide Personal Data for
          a certain reason, we may use the Personal Data in connection with the
          reason for which it was provided. For instance, if you contact us by
          email, we will use the Personal Data you provide to answer your
          question or resolve your problem. Also, if you provide Personal Data
          in order to obtain access to the Services, we will use your Personal
          Data to provide you with access to such services and to monitor your
          use of such services. LAER AI and its subsidiaries and affiliates (the
          “Related Companies”) may also use your Personal Data and other
          personally non-identifiable information collected through the Services
          to help us improve the content and functionality of the Services, to
          better understand our users and to improve the Services. LAER AI and
          its affiliates may use this information to contact you in the future
          to tell you about services we believe will be of interest to you. If
          we do so, each marketing communication we send you will contain
          instructions permitting you to &quot;opt-out&quot; of receiving future
          marketing communications. In addition, if at any time you wish not to
          receive any future marketing communications or you wish to have your
          name deleted from our mailing lists, please contact us as indicated
          below.
        </Text>
        <Text
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          If LAER AI intends on using any Personal Data in any manner that is
          not consistent with this Privacy Policy, you will be informed of such
          anticipated use prior to or at the time at which the Personal Data is
          collected.
        </Text>
      </Box>
      <Box component="section" sx={{ my: 6 }}>
        <H2
          sx={{
            color: '#3E4D6A',
            fontWeight: 600,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '24px',
            textAlign: 'start',
            lineHeight: '30px'
          }}
        >
          Our Disclosure of Your Personal Data and Other Information:
        </H2>
        <Text
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          LAER AI is not in the business of selling your information. We
          consider this information to be a vital part of our relationship with
          you. There are, however, certain circumstances in which we may share
          your Personal Data with certain third parties without further notice
          to you, as set forth below:
        </Text>
        <Text
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          <strong
            style={{
              fontWeight: 600
            }}
          >
            Business Transfers
          </strong>
          : As we develop our business, we might sell or buy businesses or
          assets. In the event of a corporate sale, merger, reorganization,
          dissolution or similar event, Personal Data may be part of the
          transferred assets.
        </Text>
        <Text
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          <strong
            style={{
              fontWeight: 600
            }}
          >
            Related Companies
          </strong>
          : We may also share your Personal Data with our Related Companies for
          purposes consistent with this Privacy Policy.
        </Text>
        <Text
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          <strong
            style={{
              fontWeight: 600
            }}
          >
            Agents, Consultants and Related Third Parties
          </strong>
          : LAER AI, like many businesses, sometimes hires other companies to
          perform certain business-related functions. Examples of such functions
          include mailing information, maintaining databases and processing
          payments. When we employ another entity to perform a function of this
          nature, we only provide them with the information that they need to
          perform their specific function.
        </Text>
        <Text
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          <strong
            style={{
              fontWeight: 600
            }}
          >
            {' '}
            Legal Requirements
          </strong>
          : LAER AI may disclose your Personal Data if required to do so by law
          or in the good faith belief that such action is necessary to (i)
          comply with a legal obligation, (ii) protect and defend the rights or
          property of LAER AI, (iii) act in urgent circumstances to protect the
          personal safety of users of the Services or the public, or (iv)
          protect against legal liability.
        </Text>
      </Box>
      <Box component="section" sx={{ my: 6 }}>
        <H2
          sx={{
            color: '#3E4D6A',
            fontWeight: 600,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '24px',
            textAlign: 'start',
            lineHeight: '30px'
          }}
        >
          What are your privacy rights?
        </H2>
        <Text
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          You can visit the Site without providing any Personal Data. If you
          choose not to provide any Personal Data, you may not be able to use
          certain Services.
        </Text>
        <Text
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          <strong
            style={{
              fontWeight: 600
            }}
          >
            {' '}
            Exclusions
          </strong>
          :
        </Text>
        <Text
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          This Privacy Policy does not apply to any Personal Data collected by
          LAER AI other than Personal Data collected through the Services. This
          Privacy Policy shall not apply to any unsolicited information you
          provide to LAER AI through the Services or through any other means.
          This includes, but is not limited to, information posted to any public
          areas of the Services, such as forums, any ideas for new products or
          modifications to existing products, and other unsolicited submissions
          (collectively, “Unsolicited Information”). All Unsolicited Information
          shall be deemed to be non-confidential and LAER AI shall be free to
          reproduce, use, disclose, and distribute such Unsolicited Information
          to others without limitation or attribution.
        </Text>
      </Box>
      <Box component="section" sx={{ my: 6 }}>
        <H2
          sx={{
            color: '#3E4D6A',
            fontWeight: 600,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '24px',
            textAlign: 'start',
            lineHeight: '30px'
          }}
        >
          Security
        </H2>
        <Text
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          LAER AI takes reasonable steps to protect the Personal Data provided
          via the Services from loss, misuse, and unauthorized access,
          disclosure, alteration, or destruction. However, no Internet or email
          transmission is ever fully secure or error free. In particular, email
          sent to or from the Services may not be secure. Therefore, you should
          take special care in deciding what information you send to us via
          email. Please keep this in mind when disclosing any Personal Data to
          LAER AI via the Internet.
        </Text>
      </Box>
      <Box component="section" sx={{ my: 6 }}>
        <H2
          sx={{
            color: '#3E4D6A',
            fontWeight: 600,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '24px',
            textAlign: 'start',
            lineHeight: '30px'
          }}
        >
          Changes to this privacy policy
        </H2>
        <Text
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          The Services and our business may change from time to time. As a
          result, at times it may be necessary for LAER AI to make changes to
          this Privacy Policy. LAER AI reserves the right to update or modify
          this Privacy Policy at any time and from time to time without prior
          notice. Please review this policy periodically, and especially before
          you provide any Personal Data. This Privacy Policy was last updated on
          the date indicated above. Your continued use of the Services after any
          changes or revisions to this Privacy Policy shall indicate your
          agreement with the terms of such revised Privacy Policy.
        </Text>
      </Box>
      <Box component="section" sx={{ my: 6 }}>
        <H2
          sx={{
            color: '#3E4D6A',
            fontWeight: 600,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '24px',
            textAlign: 'start',
            lineHeight: '30px'
          }}
        >
          How can you contact us about this policy?
        </H2>
        <Text
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          To keep your Personal Data accurate, current, and complete, please
          contact us as specified below. We will take reasonable steps to update
          or correct Personal Data in our possession that you have previously
          submitted via the Services.
        </Text>
        <Text
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          Please also feel free to contact us if you have any questions about
          LAER AI&apos;s Privacy Policy or the information practices of the
          Services.
        </Text>
        <Text
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          You may contact us as follows:{' '}
          <a
            style={{
              color: '#047FFF'
            }}
            href="mailto:support@laer.ai"
          >
            support@laer.ai
          </a>
        </Text>
      </Box>
    </Container>
  </StatusContainer>
);

export default Privacy;
