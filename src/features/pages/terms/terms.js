/* eslint-disable max-len */
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { H1, H2, H3, Desc, Text, ListItem, ContactItem } from './components';
import { StatusContainer } from 'components/status-container';

const TermsConditions = () => (
  <StatusContainer
    Wrapper={(props) => (
      <Container maxWidth="lg" sx={{ my: 6, p: 0 }} {...props} />
    )}
  >
    <Container maxWidth="md" sx={{ mx: 0, p: { xs: 3, sm: 0 } }}>
      <H1
        sx={{
          color: '#180636',
          fontWeight: 600,
          fontFamily: `'Newsreader', serif`,
          fontSize: { xs: '48px', sm: '62px' },
          textAlign: 'start'
        }}
      >
        Terms of Service
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
          1. AGREEMENT TO TERMS
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
          These Terms of Use constitute a legally binding agreement made between
          you, whether personally or on behalf of an entity (&quot;you&quot;)
          and <strong>LAER AI, Inc.</strong>&nbsp; (&quot;Company&quot;,
          &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), concerning your
          access to and use of the{' '}
          <a
            style={{
              color: '#047FFF'
            }}
            href="https://laer.ai"
            target="_blank"
            rel="noreferrer"
          >
            https://laer.ai
          </a>{' '}
          &nbsp; website as well as any other media form, media channel, mobile
          website or mobile application related, linked, or otherwise connected
          thereto (collectively, the &quot;Site&quot;). We are registered in New
          York, United States and have our registered office at 646 239 9079, 42
          Broadway, 12th Floor , New York, NY 10004. You agree that by accessing
          the Site, you have read, understood, and agreed to be bound by all of
          these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF
          USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU
          MUST DISCONTINUE USE IMMEDIATELY.
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
          Supplemental terms and conditions or documents that may be posted on
          the Site from time to time are hereby expressly incorporated herein by
          reference. We reserve the right, in our sole discretion, to make
          changes or modifications to these Terms of Use from time to time. We
          will alert you about any changes by updating the “Last updated” date
          of these Terms of Use, and you waive any right to receive specific
          notice of each such change. Please ensure that you check the
          applicable Terms every time you use our Site so that you understand
          which Terms apply. You will be subject to, and will be deemed to have
          been made aware of and to have accepted, the changes in any revised
          Terms of Use by your continued use of the Site after the date such
          revised Terms of Use are posted.
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
          The information provided on the Site is not intended for distribution
          to or use by any person or entity in any jurisdiction or country where
          such distribution or use would be contrary to law or regulation or
          which would subject us to any registration requirement within such
          jurisdiction or country. Accordingly, those persons who choose to
          access the Site from other locations do so on their own initiative and
          are solely responsible for compliance with local laws, if and to the
          extent local laws are applicable.
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
          The Site is not tailored to comply with industry-specific regulations
          (Health Insurance Portability and Accountability Act (HIPAA), Federal
          Information Security Management Act (FISMA), etc.), so if your
          interactions would be subjected to such laws, you may not use this
          Site. You may not use the Site in a way that would violate the
          Gramm-Leach-Bliley Act (GLBA).
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
          All users who are minors in the jurisdiction in which they reside
          (generally under the age of 18) must have the permission of, and be
          directly supervised by, their parent or guardian to use the Site. If
          you are a minor, you must have your parent or guardian read and agree
          to these Terms of Use prior to you using the Site.
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
          {' '}
          2. How do we use your information?
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
          Unless otherwise indicated, the Site is our proprietary property and
          all source code, databases, functionality, software, website designs,
          audio, video, text, photographs, and graphics on the Site
          (collectively, the &quot;Content&quot;) and the trademarks, service
          marks, and logos contained therein (the &quot;Marks&quot;) are owned
          or controlled by us or licensed to us, and are protected by copyright
          and trademark laws and various other intellectual property rights and
          unfair competition laws of the United States, international copyright
          laws, and international conventions. The Content and the Marks are
          provided on the Site “AS IS” for your information and personal use
          only. Except as expressly provided in these Terms of Use, no part of
          the Site and no Content or Marks may be copied, reproduced,
          aggregated, republished, uploaded, posted, publicly displayed,
          encoded, translated, transmitted, distributed, sold, licensed, or
          otherwise exploited for any commercial purpose whatsoever, without our
          express prior written permission.
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
          Provided that you are eligible to use the Site, you are granted a
          limited license to access and use the Site and to download or print a
          copy of any portion of the Content to which you have properly gained
          access solely for your personal, non-commercial use. We reserve all
          rights not expressly granted to you in and to the Site, the Content
          and the Marks.
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
          3. USER REPRESENTATIONS
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
          By using the Site, you represent and warrant that: (1) you have the
          legal capacity and you agree to comply with these Terms of Use; (2)
          you are not a minor in the jurisdiction in which you reside, or if a
          minor, you have received parental permission to use the Site; (3) you
          will not access the Site through automated or non-human means, whether
          through a bot, script, or otherwise; (4) you will not use the Site for
          any illegal or unauthorized purpose; and (5) your use of the Site will
          not violate any applicable law or regulation.
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
          If you provide any information that is untrue, inaccurate, not
          current, or incomplete, we have the right to suspend or terminate your
          account and refuse any and all current or future use of the Site (or
          any portion thereof).
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
          4. PROHIBITED ACTIVITIES
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
          You may not access or use the Site for any purpose other than that for
          which we make the Site available. The Site may not be used in
          connection with any commercial endeavors except those that are
          specifically endorsed or approved by us.
        </Text>
        <Text>As a user of the Site, you agree not to:</Text>
        <Box component="ul">
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Systematically retrieve data or other content from the Site to
            create or compile, directly or indirectly, a collection,
            compilation, database, or directory without written permission from
            us.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Trick, defraud, or mislead us and other users, especially in any
            attempt to learn sensitive account information such as user
            passwords.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Circumvent, disable, or otherwise interfere with security-related
            features of the Site, including features that prevent or restrict
            the use or copying of any Content or enforce limitations on the use
            of the Site and/or the Content contained therein.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Disparage, tarnish, or otherwise harm, in our opinion, us and/or the
            Site.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Use any information obtained from the Site in order to harass,
            abuse, or harm another person.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Make improper use of our support services or submit false reports of
            abuse or misconduct.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Use the Site in a manner inconsistent with any applicable laws or
            regulations.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Engage in unauthorized framing of or linking to the Site.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Upload or transmit (or attempt to upload or to transmit) viruses,
            Trojan horses, or other material, including excessive use of capital
            letters and spamming (continuous posting of repetitive text), that
            interferes with any party&apos;s uninterrupted use and enjoyment of
            the Site or modifies, impairs, disrupts, alters, or interferes with
            the use, features, functions, operation, or maintenance of the Site.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Engage in any automated use of the system, such as using scripts to
            send comments or messages, or using any data mining, robots, or
            similar data gathering and extraction tools.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Delete the copyright or other proprietary rights notice from any
            Content.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Attempt to impersonate another user or person or use the username of
            another user.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Upload or transmit (or attempt to upload or to transmit) any
            material that acts as a passive or active information collection or
            transmission mechanism, including without limitation, clear graphics
            interchange formats (“gifs”), 1&times;1 pixels, web bugs, cookies,
            or other similar devices (sometimes referred to as “spyware” or
            “passive collection mechanisms” or “pcms”).
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Interfere with, disrupt, or create an undue burden on the Site or
            the networks or services connected to the Site.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Harass, annoy, intimidate, or threaten any of our employees or
            agents engaged in providing any portion of the Site to you.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Attempt to bypass any measures of the Site designed to prevent or
            restrict access to the Site, or any portion of the Site.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Copy or adapt the Site&apos;s software, including but not limited to
            Flash, PHP, HTML, JavaScript, or other code.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Except as permitted by applicable law, decipher, decompile,
            disassemble, or reverse engineer any of the software comprising or
            in any way making up a part of the Site.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Except as may be the result of standard search engine or Internet
            browser usage, use, launch, develop, or distribute any automated
            system, including without limitation, any spider, robot, cheat
            utility, scraper, or offline reader that accesses the Site, or using
            or launching any unauthorized script or other software.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Use a buying agent or purchasing agent to make purchases on the
            Site.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Make any unauthorized use of the Site, including collecting
            usernames and/or email addresses of users by electronic or other
            means for the purpose of sending unsolicited email, or creating user
            accounts by automated means or under false pretenses.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Use the Site as part of any effort to compete with us or otherwise
            use the Site and/or the Content for any revenue-generating endeavor
            or commercial enterprise.
          </ListItem>
        </Box>
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
          5. USER GENERATED CONTRIBUTIONS
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
          The Site does not offer users to submit or post content. We may
          provide you with the opportunity to create, submit, post, display,
          transmit, perform, publish, distribute, or broadcast content and
          materials to us or on the Site, including but not limited to text,
          writings, video, audio, photographs, graphics, comments, suggestions,
          or personal information or other material (collectively,
          &quot;Contributions&quot;). Contributions may be viewable by other
          users of the Site and through third-party websites. As such, any
          Contributions you transmit may be treated in accordance with the Site
          Privacy Policy. When you create or make available any Contributions,
          you thereby represent and warrant that:
        </Text>
        <Box component="ul">
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            The creation, distribution, transmission, public display, or
            performance, and the accessing, downloading, or copying of your
            Contributions do not and will not infringe the proprietary rights,
            including but not limited to the copyright, patent, trademark, trade
            secret, or moral rights of any third party.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            You are the creator and owner of or have the necessary licenses,
            rights, consents, releases, and permissions to use and to authorize
            us, the Site, and other users of the Site to use your Contributions
            in any manner contemplated by the Site and these Terms of Use.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            You have the written consent, release, and/or permission of each and
            every identifiable individual person in your Contributions to use
            the name or likeness of each and every such identifiable individual
            person to enable inclusion and use of your Contributions in any
            manner contemplated by the Site and these Terms of Use.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Your Contributions are not false, inaccurate, or misleading.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Your Contributions are not unsolicited or unauthorized advertising,
            promotional materials, pyramid schemes, chain letters, spam, mass
            mailings, or other forms of solicitation.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Your Contributions are not obscene, lewd, lascivious, filthy,
            violent, harassing, libelous, slanderous, or otherwise objectionable
            (as determined by us).
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Your Contributions do not ridicule, mock, disparage, intimidate, or
            abuse anyone.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Your Contributions are not used to harass or threaten (in the legal
            sense of those terms) any other person and to promote violence
            against a specific person or class of people.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Your Contributions do not violate any applicable law, regulation, or
            rule.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Your Contributions do not violate the privacy or publicity rights of
            any third party.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Your Contributions do not violate any applicable law concerning
            child pornography, or otherwise intended to protect the health or
            well-being of minors.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Your Contributions do not include any offensive comments that are
            connected to race, national origin, gender, sexual preference, or
            physical handicap.
          </ListItem>
          <ListItem
            sx={{
              color: '#3E4D6A',
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '16px',
              textAlign: 'start',
              lineHeight: '26px'
            }}
          >
            Your Contributions do not otherwise violate, or link to material
            that violates, any provision of these Terms of Use, or any
            applicable law or regulation.
          </ListItem>
        </Box>
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
          Any use of the Site in violation of the foregoing violates these Terms
          of Use and may result in, among other things, termination or
          suspension of your rights to use the Site.
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
          6. CONTRIBUTION LICENSE
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
          You and the Site agree that we may access, store, process, and use any
          information and personal data that you provide following the terms of
          the Privacy Policy and your choices (including settings).
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
          By submitting suggestions or other feedback regarding the Site, you
          agree that we can use and share such feedback for any purpose without
          compensation to you.
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
          We do not assert any ownership over your Contributions. You retain
          full ownership of all of your Contributions and any intellectual
          property rights or other proprietary rights associated with your
          Contributions. We are not liable for any statements or representations
          in your Contributions provided by you in any area on the Site. You are
          solely responsible for your Contributions to the Site and you
          expressly agree to exonerate us from any and all responsibility and to
          refrain from any legal action against us regarding your Contributions.
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
          7. SUBMISSIONS
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
          You acknowledge and agree that any questions, comments, suggestions,
          ideas, feedback, or other information regarding the Site
          (&quote;Submissions&quote;) provided by you to us are non-confidential
          and shall become our sole property. We shall own exclusive rights,
          including all intellectual property rights, and shall be entitled to
          the unrestricted use and dissemination of these Submissions for any
          lawful purpose, commercial or otherwise, without acknowledgment or
          compensation to you. You hereby waive all moral rights to any such
          Submissions, and you hereby warrant that any such Submissions are
          original with you or that you have the right to submit such
          Submissions. You agree there shall be no recourse against us for any
          alleged or actual infringement or misappropriation of any proprietary
          right in your Submissions.
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
          8. SITE MANAGEMENT
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
          We reserve the right, but not the obligation, to: (1) monitor the Site
          for violations of these Terms of Use; (2) take appropriate legal
          action against anyone who, in our sole discretion, violates the law or
          these Terms of Use, including without limitation, reporting such user
          to law enforcement authorities; (3) in our sole discretion and without
          limitation, refuse, restrict access to, limit the availability of, or
          disable (to the extent technologically feasible) any of your
          Contributions or any portion thereof; (4) in our sole discretion and
          without limitation, notice, or liability, to remove from the Site or
          otherwise disable all files and content that are excessive in size or
          are in any way burdensome to our systems; and (5) otherwise manage the
          Site in a manner designed to protect our rights and property and to
          facilitate the proper functioning of the Site.
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
          9. PRIVACY POLICY
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
          We care about data privacy and security. Please review our Privacy
          Policy:&nbsp;
          <a
            style={{
              color: '#047FFF'
            }}
            href="https://laer.ai/privacy"
            target="_blank"
            rel="noreferrer"
          >
            https://laer.ai/privacy
          </a>
          . By using the Site, you agree to be bound by our Privacy Policy,
          which is incorporated into these Terms of Use. Please be advised the
          Site is hosted in the United States. If you access the Site from any
          other region of the world with laws or other requirements governing
          personal data collection, use, or disclosure that differ from
          applicable laws in the United States, then through your continued use
          of the Site, you are transferring your data to the United States, and
          you agree to have your data transferred to and processed in the United
          States.
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
          10. TERM AND TERMINATION
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
          These Terms of Use shall remain in full force and effect while you use
          the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE,
          WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR
          LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING
          CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON,
          INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION,
          WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY
          APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR
          PARTICIPATION IN THE SITE OR DELETE ANY CONTENT OR INFORMATION THAT
          YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
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
          11. MODIFICATIONS AND INTERRUPTIONS
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
          We reserve the right to change, modify, or remove the contents of the
          Site at any time or for any reason at our sole discretion without
          notice. However, we have no obligation to update any information on
          our Site. We also reserve the right to modify or discontinue all or
          part of the Site without notice at any time. We will not be liable to
          you or any third party for any modification, price change, suspension,
          or discontinuance of the Site.
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
          We cannot guarantee the Site will be available at all times. We may
          experience hardware, software, or other problems or need to perform
          maintenance related to the Site, resulting in interruptions, delays,
          or errors. We reserve the right to change, revise, update, suspend,
          discontinue, or otherwise modify the Site at any time or for any
          reason without notice to you. You agree that we have no liability
          whatsoever for any loss, damage, or inconvenience caused by your
          inability to access or use the Site during any downtime or
          discontinuance of the Site. Nothing in these Terms of Use will be
          construed to obligate us to maintain and support the Site or to supply
          any corrections, updates, or releases in connection therewith.
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
          12. GOVERNING LAW
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
          These Terms of Use and your use of the Site are governed by and
          construed in accordance with the laws of the State of New York
          applicable to agreements made and to be entirely performed within the
          State of New York, without regard to its conflict of law principles.
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
          13. DISPUTE RESOLUTION
        </H2>
        <H3
          sx={{
            color: '#3E4D6A',
            fontWeight: 600,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '18ox',
            textAlign: 'start',
            lineHeight: '24px'
          }}
        >
          Binding Arbitration
        </H3>
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
          If the Parties are unable to resolve a Dispute through informal
          negotiations, the Dispute (except those Disputes expressly excluded
          below) will be finally and exclusively resolved by binding
          arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD
          HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. The arbitration
          shall be commenced and conducted under the Commercial Arbitration
          Rules of the American Arbitration Association (&quot;AAA&quot;) and,
          where appropriate, the AAA&apos;s Supplementary Procedures for
          Consumer Related Disputes (&quot;AAA Consumer Rules&quot;), both of
          which are available at the AAA website:&nbsp;
          <a
            style={{
              color: '#047FFF'
            }}
            href="www.adr.org"
            target="_blank"
            rel="noreferrer"
          >
            www.adr.org
          </a>
          . Your arbitration fees and your share of arbitrator compensation
          shall be governed by the AAA Consumer Rules and, where appropriate,
          limited by the AAA Consumer Rules. The arbitration may be conducted in
          person, through the submission of documents, by phone, or online. The
          arbitrator will make a decision in writing, but need not provide a
          statement of reasons unless requested by either Party. The arbitrator
          must follow applicable law, and any award may be challenged if the
          arbitrator fails to do so. Except where otherwise required by the
          applicable AAA rules or applicable law, the arbitration will take
          place in New York, New York. Except as otherwise provided herein, the
          Parties may litigate in court to compel arbitration, stay proceedings
          pending arbitration, or to confirm, modify, vacate, or enter judgment
          on the award entered by the arbitrator.
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
          If for any reason, a Dispute proceeds in court rather than
          arbitration, the Dispute shall be commenced or prosecuted in the state
          and federal courts located in New York, New York, and the Parties
          hereby consent to, and waive all defenses of lack of personal
          jurisdiction, and forum non conveniens with respect to venue and
          jurisdiction in such state and federal courts. Application of the
          United Nations Convention on Contracts for the International Sale of
          Goods and the Uniform Computer Information Transaction Act (UCITA) are
          excluded from these Terms of Use.
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
          In no event shall any Dispute brought by either Party related in any
          way to the Site be commenced more than one (1) years after the cause
          of action arose. If this provision is found to be illegal or
          unenforceable, then neither Party will elect to arbitrate any Dispute
          falling within that portion of this provision found to be illegal or
          unenforceable and such Dispute shall be decided by a court of
          competent jurisdiction within the courts listed for jurisdiction
          above, and the Parties agree to submit to the personal jurisdiction of
          that court.
        </Text>
        <H3
          sx={{
            color: '#3E4D6A',
            fontWeight: 600,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '18ox',
            textAlign: 'start',
            lineHeight: '24px'
          }}
        >
          Restrictions
        </H3>
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
          The Parties agree that any arbitration shall be limited to the Dispute
          between the Parties individually. To the full extent permitted by law,
          (a) no arbitration shall be joined with any other proceeding; (b)
          there is no right or authority for any Dispute to be arbitrated on a
          class-action basis or to utilize class action procedures; and (c)
          there is no right or authority for any Dispute to be brought in a
          purported representative capacity on behalf of the general public or
          any other persons.
        </Text>
        <H3
          sx={{
            color: '#3E4D6A',
            fontWeight: 600,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '18ox',
            textAlign: 'start',
            lineHeight: '24px'
          }}
        >
          Exceptions to Arbitration
        </H3>
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
          The Parties agree that the following Disputes are not subject to the
          above provisions concerning binding arbitration: (a) any Disputes
          seeking to enforce or protect, or concerning the validity of, any of
          the intellectual property rights of a Party; (b) any Dispute related
          to, or arising from, allegations of theft, piracy, invasion of
          privacy, or unauthorized use; and (c) any claim for injunctive relief.
          If this provision is found to be illegal or unenforceable, then
          neither Party will elect to arbitrate any Dispute falling within that
          portion of this provision found to be illegal or unenforceable and
          such Dispute shall be decided by a court of competent jurisdiction
          within the courts listed for jurisdiction above, and the Parties agree
          to submit to the personal jurisdiction of that court.
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
          14. CORRECTIONS
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
          There may be information on the Site that contains typographical
          errors, inaccuracies, or omissions, including descriptions, pricing,
          availability, and various other information. We reserve the right to
          correct any errors, inaccuracies, or omissions and to change or update
          the information on the Site at any time, without prior notice.
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
          15. DISCLAIMER
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
          THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE
          THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK.
          TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
          EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF,
          INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE
          ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY
          WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR
          RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF
          CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY
          NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE,
          (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY
          AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED
          THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM
          THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY
          BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6)
          ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS
          OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT
          POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO
          NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY
          PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE
          SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION
          FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A
          PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION
          BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS
          WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY
          ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION
          WHERE APPROPRIATE.
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
          16. LIMITATIONS OF LIABILITY
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
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
          TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
          EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
          PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR
          USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF
          SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED
          HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS
          OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT
          PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO
          ANY CAUSE OF ACTION ARISING. CERTAIN US STATE LAWS AND INTERNATIONAL
          LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION
          OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR
          ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND
          YOU MAY HAVE ADDITIONAL RIGHTS.
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
          17. INDEMNIFICATION
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
          You agree to defend, indemnify, and hold us harmless, including our
          subsidiaries, affiliates, and all of our respective officers, agents,
          partners, and employees, from and against any loss, damage, liability,
          claim, or demand, including reasonable attorneys&apos; fees and
          expenses, made by any third party due to or arising out of: (1) use of
          the Site; (2) breach of these Terms of Use; (3) any breach of your
          representations and warranties set forth in these Terms of Use; (4)
          your violation of the rights of a third party, including but not
          limited to intellectual property rights; or (5) any overt harmful act
          toward any other user of the Site with whom you connected via the
          Site. Notwithstanding the foregoing, we reserve the right, at your
          expense, to assume the exclusive defense and control of any matter for
          which you are required to indemnify us, and you agree to cooperate, at
          your expense, with our defense of such claims. We will use reasonable
          efforts to notify you of any such claim, action, or proceeding which
          is subject to this indemnification upon becoming aware of it.
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
          18. USER DATA
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
          We will maintain certain data that you transmit to the Site for the
          purpose of managing the performance of the Site, as well as data
          relating to your use of the Site. Although we perform regular routine
          backups of data, you are solely responsible for all data that you
          transmit or that relates to any activity you have undertaken using the
          Site. You agree that we shall have no liability to you for any loss or
          corruption of any such data, and you hereby waive any right of action
          against us arising from any such loss or corruption of such data.
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
          19. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
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
          Visiting the Site, sending us emails, and completing online forms
          constitute electronic communications. You consent to receive
          electronic communications, and you agree that all agreements, notices,
          disclosures, and other communications we provide to you
          electronically, via email and on the Site, satisfy any legal
          requirement that such communication be in writing. YOU HEREBY AGREE TO
          THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER
          RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS
          OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You
          hereby waive any rights or requirements under any statutes,
          regulations, rules, ordinances, or other laws in any jurisdiction
          which require an original signature or delivery or retention of
          non-electronic records, or to payments or the granting of credits by
          any means other than electronic means.
        </Text>
      </Box>
      <Box component="section" sx={{ my: 6 }}>
        <H2>20. CALIFORNIA USERS AND RESIDENTS</H2>
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
          If any complaint with us is not satisfactorily resolved, you can
          contact the Complaint Assistance Unit of the Division of Consumer
          Services of the California Department of Consumer Affairs in writing
          at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834
          or by telephone at (800) 952-5210 or (916) 445-1254.
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
          21. MISCELLANEOUS
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
          These Terms of Use and any policies or operating rules posted by us on
          the Site or in respect to the Site constitute the entire agreement and
          understanding between you and us. Our failure to exercise or enforce
          any right or provision of these Terms of Use shall not operate as a
          waiver of such right or provision. These Terms of Use operate to the
          fullest extent permissible by law. We may assign any or all of our
          rights and obligations to others at any time. We shall not be
          responsible or liable for any loss, damage, delay, or failure to act
          caused by any cause beyond our reasonable control. If any provision or
          part of a provision of these Terms of Use is determined to be
          unlawful, void, or unenforceable, that provision or part of the
          provision is deemed severable from these Terms of Use and does not
          affect the validity and enforceability of any remaining provisions.
          There is no joint venture, partnership, employment or agency
          relationship created between you and us as a result of these Terms of
          Use or use of the Site. You agree that these Terms of Use will not be
          construed against us by virtue of having drafted them. You hereby
          waive any and all defenses you may have based on the electronic form
          of these Terms of Use and the lack of signing by the parties hereto to
          execute these Terms of Use.
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
          22. CONTACT US
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
          In order to resolve a complaint regarding the Site or to receive
          further information regarding use of the Site, please contact us at:
        </Text>
        <ContactItem
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          LAER AI, Inc.
        </ContactItem>
        <ContactItem
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          646 239 9079
        </ContactItem>
        <ContactItem
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          42 Broadway, 12th Floor
        </ContactItem>
        <ContactItem
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          New York, NY 10004
        </ContactItem>
        <ContactItem
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          United States
        </ContactItem>
        <ContactItem
          sx={{
            color: '#3E4D6A',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          Phone: 646 239 9079
        </ContactItem>
        <ContactItem
          sx={{
            color: '#047FFF',
            fontWeight: 400,
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '16px',
            textAlign: 'start',
            lineHeight: '26px'
          }}
        >
          <a href="mailto:support@laer.ai">support@laer.ai</a>
        </ContactItem>
      </Box>
    </Container>
  </StatusContainer>
);

export default TermsConditions;
