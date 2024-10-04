export const paths = {
  auth: {
    login: {
      byEmail            : '/loginByEmail',
      resetEmailPassword : '/resetEmailPassword'
    },
    signup: {
      byEmail: '/signupByEmail'
    }
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
