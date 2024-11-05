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
    getStartResourseData  : '/user/getStartResourseData',
    update                : '/user/update',
    sendEmailConfirmation : '/user/sendEmailConfirmation',
    logout                : '/user/logout/:email',
  },
  company: {
    update : '/company/update',
    // deleteCompany : '/deleteCompany/:companyId',
  },
}
