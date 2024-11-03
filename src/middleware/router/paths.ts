export const paths = {
  auth: {
    login: {
      byEmail            : '/auth/login/byEmail',
      resetEmailPassword : '/auth/login/resetEmailPassword',
    },
    signup: {
      byEmail: '/auth/signup/byEmail',
    },
  },
  user: {
    getStartResourseData  : '/getStartResourseData',
    updateUser            : '/updateUser',
    sendEmailConfirmation : '/sendEmailConfirmation',
    logout                : '/logout/:email',
  },
  company: {
    updateCompany : '/updateCompany',
    // deleteCompany : '/deleteCompany/:companyId',
  },
}
