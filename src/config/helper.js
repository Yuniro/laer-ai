import igor from 'assets/images/persons/Igor-Labutov.png';
import bishan from 'assets/images/persons/Bishan-Yang.png';
import sanjay from 'assets/images/persons/Sanjay-Manocha.png';
import Ron from 'assets/images/persons/Ron-Brachman.png';
import Tom from 'assets/images/persons/Tom-Mitchell.png';
import acedslogo from 'assets/images/partners/aceds_logo_horizontal_cmyk.png';
import awsstartuplogo from 'assets/images/partners/aws_startup.png';
import cornelltech from 'assets/images/partners/cornell_tech.png';
import googlecloudlogo from 'assets/images/partners/Google-Cloud-Logo.png';
import inceptionprogramlogo from 'assets/images/partners/Inception-Program.png';
import microsoftforstartupslogo from 'assets/images/partners/Microsoft-for-Startups.png';
import relativitylogo from 'assets/images/partners/relativity-logo.png';
import SullivanCromwellstackedlogo from 'assets/images/partners/Sullivan-Cromwell-stacked-logo.png';
import cornelluniversitylogo from 'assets/images/partners/cornell-university-logo.png';
import cmulogo from 'assets/images/partners/cmu.jpg';
import cmu from 'assets/images/landing/cmu.png';
import corenlltech from 'assets/images/landing/corenll-tech.png';
import cornelluniversity from 'assets/images/landing/cornell-university.png';
import mld from 'assets/images/landing/mld.png';
import rutgers from 'assets/images/landing/rutgers.png';
import setonhall from 'assets/images/landing/seton-hall-law.png';
import foundedcornelluniversity from 'assets/images/landing/founded-cornell-university.png';



// NAVBAR LIST ITEM 
export const navlinkslist = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "AIDA",
    url: "/aida",
  },
  {
    name: "Security",
    url: "/",
  },
];


// TEAM LIST DATA 

export const ourteamlist = [
  {
    imageURL: igor,
    name: 'Igor Labutov, Ph.D.',
    designation: 'Co-Founder & CEO',
    graduations: 'PhD, Comp. Eng., Cornell University',
    description:
      'Postdoctoral Research, Machine Learning Department, Carnegie Mellon University',
    experience: 'NSF Fellow, ex-Microsoft',
    university: [
      {
        imageURL: mld,
        maxWidth: '42px'
      },
      {
        imageURL: cmu,
        maxWidth: '60px'
      },
      {
        imageURL: cornelluniversity,
        maxWidth: '139px'
      }
    ]
  },
  {
    imageURL: bishan,
    name: 'Bishan Yang, Ph.D.',
    designation: 'Co-Founder & CTO',
    graduations: 'PhD, Comp. Sci., Cornell University',
    description:
      'Postdoctoral Research, Machine Learning Department, Carnegie Mellon University',
    experience: 'ex-Google, Microsoft, eBay',
    university: [
      {
        imageURL: mld,
        maxWidth: '42px'
      },
      {
        imageURL: cmu,
        maxWidth: '60px'
      },
      {
        imageURL: cornelluniversity,
        maxWidth: '139px'
      }
    ]
  },
  {
    imageURL: sanjay,
    name: 'Sanjay Manocha, JD, CIPP/US',
    designation: 'GC & Chief Growth Officer',
    graduations: 'B.S., Comp. Sci. and Economics, Rutgers University',
    description: 'Seton Hall Law School',
    experience: 'ex-Founder and CEO, N-Tier Discovery',
    university: [
      {
        imageURL: rutgers,
        maxWidth: '100px'
      },
      {
        imageURL: setonhall,
        maxWidth: '100px'
      }
    ]
  }
];


export const ourpartners = [
  {
    imageURL: cornelltech,
    name: 'Cornell Tech',
    maxWidth: 195,
    maxHeight: 84
  },
  {
    imageURL: cornelluniversitylogo,
    name: 'Cornell Tech',
    maxWidth: 195,
    maxHeight: 84
  },
  {
    imageURL: microsoftforstartupslogo,
    name: 'Microsoft for Startups',
    maxWidth: 195,
    maxHeight: 89
  },
  {
    imageURL: inceptionprogramlogo,
    name: 'Inception Program',
    maxWidth: 195,
    maxHeight: 84
  },
  {
    imageURL: acedslogo,
    name: 'ACEDS',
    maxWidth: 195,
    maxHeight: 84
  },
  {
    imageURL: relativitylogo,
    name: 'Relativity',
    maxWidth: 195,
    maxHeight: 84
  },
  {
    imageURL: awsstartuplogo,
    name: 'AWS Startup',
    maxWidth: 195,
    maxHeight: 84
  },
  {
    imageURL: cmulogo,
    name: 'CMU',
    maxWidth: 195,
    maxHeight: 84
  },
  {
    imageURL: cornelluniversitylogo,
    name: 'Cornell Tech',
    maxWidth: 195,
    maxHeight: 84
  },
  {
    imageURL: cornelltech,
    name: 'Cornell Tech',
    maxWidth: 195,
    maxHeight: 84
  },
  {
    imageURL: googlecloudlogo,
    name: 'Google Cloud',
    maxWidth: 180,
    maxHeight: 84
  },

  {
    imageURL: microsoftforstartupslogo,
    name: 'Microsoft for Startups',
    maxWidth: 195,
    maxHeight: 89
  },
  {
    imageURL: SullivanCromwellstackedlogo,
    name: 'Sullivan Cromwell Stacked',
    maxWidth: 195,
    maxHeight: 84
  },
  {
    imageURL: inceptionprogramlogo,
    name: 'Inception Program',
    maxWidth: 195,
    maxHeight: 84
  },
  {
    imageURL: acedslogo,
    name: 'ACEDS',
    maxWidth: 195,
    maxHeight: 84
  },
  {
    imageURL: relativitylogo,
    name: 'Relativity',
    maxWidth: 195,
    maxHeight: 84
  },
  {
    imageURL: googlecloudlogo,
    name: 'Google Cloud',
    maxWidth: 180,
    maxHeight: 84
  },
  {
    imageURL: awsstartuplogo,
    name: 'AWS Startup',
    maxWidth: 195,
    maxHeight: 84
  },
  {
    imageURL: cmulogo,
    name: 'CMU',
    maxWidth: 195,
    maxHeight: 84
  }
];


// ADVISORS LIST DATA 


export const advisors = [
  {
    photo: Tom,
    name: 'Tom Mitchell',
    career: `E. Fredkin University Professor at Canegie Mellon, former Chair of the Machine Learning Department at Carnegie Mellon,
     former interim Dean of the School of Computer Science at Carnegie Mellon`,
    university: [
      {
        imageURL: cmu,
        maxWidth: '60px'
      },
      {
        imageURL: mld,
        maxWidth: '42px'
      }
    ]
  },
  {
    photo: Ron,
    name: 'Ron Brachman',
    career: `Director of the Jacobs Technion-Cornell Institute, Professor in the Department of Computer Science at Cornell, 
    former Chief Scientist of Yahoo! and head of Yahoo! Labs`,
    university: [
      {
        imageURL: corenlltech,
        maxWidth: '140px'
      },
      {
        imageURL: foundedcornelluniversity,
        maxWidth: '40px'
      }
    ]
  }
];


