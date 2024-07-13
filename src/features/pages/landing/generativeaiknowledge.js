import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import automatedocumentreviewanalysis from '../../../assets/images/landing/automatedocumentreviewanalysis.png';
import conversewithyourdatafordeep from '../../../assets/images/landing/conversewithyourdatafordeep.png';
import transformservicedeliverywithproprietaryAI from '../../../assets/images/landing/transformservicedeliverywithproprietaryAI.png';
import unifyandconnectthedotsacrossallyourdata from '../../../assets/images/landing/unifyandconnectthedotsacrossallyourdata.png';

const GenerativeAIKnowledge = () => (
  <>
    <Box
      sx={{
        padding: { xs: '24px 0px', lg: '40px 0px' },
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: (theme) => theme.palette.blue['700'],
          fontWeight: 600,
          fontFamily: `'Newsreader', serif`,
          fontSize: { xs: '28px', lg: '36px' },
          maxWidth: '880px',
          marginBottom: '0px auto 10px auto',
          textAlign: 'center'
        }}
      >
        Aida: Knowledge-based Natural Language AI for Litigation
      </Typography>
      <Typography
        variant="h3"
        sx={{
          color: '#46385E',
          fontWeight: 400,
          fontFamily: `'Poppins', sans-serif`,
          fontSize: { xs: '16px', lg: '18px' },
          maxWidth: '660px',
          lineHeight: '130%'
        }}
      >
        Developed by pioneering AI researchers and used by the world&apos;s most
        elite law firms and service providers.
      </Typography>
    </Box>
    <Stack
      sx={{
        margin: '20px 0px'
      }}
    >
      {/* 1ST  */}
      <Box
        sx={{
          backgroundColor: '#F8F9FB',
          borderRadius: '12px',
          border: '1.5px solid #F7F4F2',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          margin: '10px 0px'
        }}
      >
        <span
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-25%)',
            zIndex: 0
          }}
        >
          <svg
            width="924"
            height="292"
            viewBox="0 0 924 292"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="806" cy="304" r="51.191" stroke="#EFEBE8" />
            <circle cx="806" cy="304" r="78.794" stroke="#EFEBE8" />
            <circle cx="806" cy="304" r="105.895" stroke="#EFEBE8" />
            <circle cx="806" cy="304" r="134" stroke="#EFEBE8" />
            <g opacity="0.4">
              <circle cx="268" cy="12" r="102" stroke="#D2DEEB" />
              <circle cx="268" cy="12" r="157" stroke="#D2DEEB" />
              <circle cx="268" cy="12" r="211" stroke="#D2DEEB" />
              <circle cx="268" cy="12" r="267" stroke="#D2DEEB" />
            </g>
          </svg>
        </span>

        <Box
          sx={{
            padding: { xs: '12px', lg: '0px 0px 0px 40px' },
            width: '100%',
            maxWidth: '530px',
            position: 'relative',
            zIndex: 1
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: '#3E3DFF',
              fontWeight: 600,
              fontFamily: `'Newsreader', serif`,
              fontSize: { xs: '22px', sm: '24px' },
              lineHeight: { xs: '28px', sm: '32px' },
              marginBottom: '24px'
            }}
          >
            Automate Document Review & Analysis
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: (theme) => theme.palette.blue['700'],
              fontWeight: 500,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: { xs: '18px', sm: '20px' },
              lineHeight: { xs: '24px', sm: '28px' }
            }}
          >
            Effortlessly load a review protocol or other written instructions
            and defensibly review and extract data from millions of documents.
            Refine and reapply as many times as you like - with no additional
            fees.
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            maxWidth: { xs: '450px', lg: '600px' }
          }}
        >
          <img
            style={{ width: '100%' }}
            src={automatedocumentreviewanalysis}
            alt="Automate Document Review & Analysis"
          />
        </Box>
      </Box>

      {/* 2ND   */}
      <Box
        sx={{
          backgroundColor: '#F8F9FB',
          borderRadius: '12px',
          border: '1.5px solid #F7F4F2',
          display: 'flex',
          flexDirection: { xs: 'column-reverse', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          margin: '10px 0px'
        }}
      >
        <span
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-25%)',
            zIndex: 0
          }}
        >
          <svg
            width="924"
            height="292"
            viewBox="0 0 924 292"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="806" cy="304" r="51.191" stroke="#EFEBE8" />
            <circle cx="806" cy="304" r="78.794" stroke="#EFEBE8" />
            <circle cx="806" cy="304" r="105.895" stroke="#EFEBE8" />
            <circle cx="806" cy="304" r="134" stroke="#EFEBE8" />
            <g opacity="0.4">
              <circle cx="268" cy="12" r="102" stroke="#D2DEEB" />
              <circle cx="268" cy="12" r="157" stroke="#D2DEEB" />
              <circle cx="268" cy="12" r="211" stroke="#D2DEEB" />
              <circle cx="268" cy="12" r="267" stroke="#D2DEEB" />
            </g>
          </svg>
        </span>

        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            maxWidth: { xs: '450px', lg: '600px' }
          }}
        >
          <img
            style={{ width: '100%' }}
            src={conversewithyourdatafordeep}
            alt="Converse with Your Data for Deep"
          />
        </Box>
        <Box
          sx={{
            padding: { xs: '12px', lg: '0px 40px 0px 0px' },
            width: '100%',
            maxWidth: '530px',
            position: 'relative',
            zIndex: 1
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: '#3E3DFF',
              fontWeight: 600,
              fontFamily: `'Newsreader', serif`,
              fontSize: { xs: '22px', sm: '24px' },
              lineHeight: { xs: '28px', sm: '32px' },
              marginBottom: '24px'
            }}
          >
            Converse for Deep Factual Insights and Data Visualizations
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: (theme) => theme.palette.blue['700'],
              fontWeight: 500,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: { xs: '18px', sm: '20px' },
              lineHeight: { xs: '24px', sm: '28px' }
            }}
          >
            Unlock precise insights and accurate visualizations effortlessly.
            Work directly from your inbox and within Aida, enjoying ultimate
            flexibility and convenience.
          </Typography>
        </Box>
      </Box>

      {/* 3RD  */}
      <Box
        sx={{
          backgroundColor: '#F8F9FB',
          borderRadius: '12px',
          border: '1.5px solid #F7F4F2',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          margin: '10px 0px'
        }}
      >
        <span
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-25%)',
            zIndex: 0
          }}
        >
          <svg
            width="924"
            height="292"
            viewBox="0 0 924 292"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="806" cy="304" r="51.191" stroke="#EFEBE8" />
            <circle cx="806" cy="304" r="78.794" stroke="#EFEBE8" />
            <circle cx="806" cy="304" r="105.895" stroke="#EFEBE8" />
            <circle cx="806" cy="304" r="134" stroke="#EFEBE8" />
            <g opacity="0.4">
              <circle cx="268" cy="12" r="102" stroke="#D2DEEB" />
              <circle cx="268" cy="12" r="157" stroke="#D2DEEB" />
              <circle cx="268" cy="12" r="211" stroke="#D2DEEB" />
              <circle cx="268" cy="12" r="267" stroke="#D2DEEB" />
            </g>
          </svg>
        </span>

        <Box
          sx={{
            padding: { xs: '12px', lg: '0px 0px 0px 40px' },
            width: '100%',
            maxWidth: '530px',
            position: 'relative',
            zIndex: 1
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: '#3E3DFF',
              fontWeight: 600,
              fontFamily: `'Newsreader', serif`,
              fontSize: { xs: '22px', sm: '24px' },
              lineHeight: { xs: '28px', sm: '32px' },
              marginBottom: '24px'
            }}
          >
            Unify and Connect the Dots Across All Your Data
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: (theme) => theme.palette.blue['700'],
              fontWeight: 500,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: { xs: '18px', sm: '20px' },
              lineHeight: { xs: '24px', sm: '28px' }
            }}
          >
            Aida seamlessly extracts, unifies, and persists entity knowledge
            from your data, including people, titles, events, and organizations.
            Enjoy auditable and reliable insights that bring transparency and
            precision to your investigation.
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            maxWidth: { xs: '450px', lg: '600px' }
          }}
        >
          <img
            style={{ width: '100%' }}
            src={unifyandconnectthedotsacrossallyourdata}
            alt="Unify and Connect the Dots Across All Your Data"
          />
        </Box>
      </Box>

      {/* 4th  */}
      <Box
        sx={{
          backgroundColor: '#F8F9FB',
          borderRadius: '12px',
          border: '1.5px solid #F7F4F2',
          display: 'flex',
          flexDirection: { xs: 'column-reverse', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          margin: '10px 0px'
        }}
      >
        <span
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-25%)',
            zIndex: 0
          }}
        >
          <svg
            width="924"
            height="292"
            viewBox="0 0 924 292"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="806" cy="304" r="51.191" stroke="#EFEBE8" />
            <circle cx="806" cy="304" r="78.794" stroke="#EFEBE8" />
            <circle cx="806" cy="304" r="105.895" stroke="#EFEBE8" />
            <circle cx="806" cy="304" r="134" stroke="#EFEBE8" />
            <g opacity="0.4">
              <circle cx="268" cy="12" r="102" stroke="#D2DEEB" />
              <circle cx="268" cy="12" r="157" stroke="#D2DEEB" />
              <circle cx="268" cy="12" r="211" stroke="#D2DEEB" />
              <circle cx="268" cy="12" r="267" stroke="#D2DEEB" />
            </g>
          </svg>
        </span>

        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            maxWidth: { xs: '450px', lg: '600px' }
          }}
        >
          <img
            style={{ width: '100%' }}
            src={transformservicedeliverywithproprietaryAI}
            alt="Transform Service Delivery with Proprietary AI"
          />
        </Box>
        <Box
          sx={{
            padding: { xs: '12px', lg: '0px 40px 0px 0px' },
            width: '100%',
            maxWidth: '530px',
            position: 'relative',
            zIndex: 1
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: '#3E3DFF',
              fontWeight: 600,
              fontFamily: `'Newsreader', serif`,
              fontSize: { xs: '22px', sm: '24px' },
              lineHeight: { xs: '28px', sm: '32px' },
              marginBottom: '24px'
            }}
          >
            Deploy Custom AI Solutions with Ease
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: (theme) => theme.palette.blue['700'],
              fontWeight: 500,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: { xs: '18px', sm: '20px' },
              lineHeight: { xs: '24px', sm: '28px' }
            }}
          >
            Create, save, and securely apply proprietary AI models using your
            written instructions and protocols. Transform your service delivery
            across practice areas.
          </Typography>
        </Box>
      </Box>
    </Stack>
  </>
);

export default GenerativeAIKnowledge