/**
 * This service provides the data that is displayed on the sidebar
 *
 * @author Omadoye Abraham <omadoyeabraham@gmail.com>
 */



/**
 * The naira Investments to be shown on the sidebar
 */
export const nairaInvestments: Array<object> = [
  {
    icon: 'dns',
    'icon-alt': 'dns',
    heading: 'Stockbroking',
    text: 'Stockbroking',
    totalValue: 10000,
    model: false,
    children: [
      { icon: 'keyboard_arrow_right', text: 'Portfolio Summary', link:'/stb/portfolio-summary' },
      { icon: 'keyboard_arrow_right', text: 'Trade', link:'/stb/portfolio-summary' },
      { icon: 'keyboard_arrow_right', text: 'Trade History', link:'/stb/portfolio-summary' },
      { icon: 'keyboard_arrow_right', text: 'Portfolio Holdings', link:'/stb/portfolio-summary' },
      { icon: 'keyboard_arrow_right', text: 'Market Data', link:'/stb/portfolio-summary' },
      { icon: 'keyboard_arrow_right', text: 'My Watchlist', link:'/stb/portfolio-summary' },
      { icon: 'keyboard_arrow_right', text: 'Tools', link:'/stb/portfolio-summary' }
    ]
  },
  {
    icon: 'contacts',
    'icon-alt': 'contacts',
    text: 'Fixed Income',
    totalValue: '15,000,000',
    model: false,
    children: [
      { icon: 'keyboard_arrow_right', text: 'Running Investments' },
      { icon: 'keyboard_arrow_right', text: 'Terminated Investments' }
    ]
  },
  { icon: 'keyboard', text: 'SMA', totalValue: '1,150,000,000' },
  { icon: 'keyboard', text: 'Cash Account', totalValue: '1,150,000,000' },
  {icon: 'keyboard', text: 'TOTAL', totalValue: '200,000,000'}
]

/**
 * The Dollar Investments to be shown on the sidebar
 */
export const dollarInvestments: Array<object> = [
  {
    icon: 'contacts',
    'icon-alt': 'contacts',
    text: 'Dollar Investments',
    totalValue: '1,150,000,000',
    model: false,
    children: [
      { icon: 'keyboard_arrow_right', text: 'Running Investments' },
      { icon: 'keyboard_arrow_right', text: 'Terminated Investments' }
    ]
  },
  { icon: 'keyboard', text: 'TOTAL', totalValue: '200,000,000' }
]

/**
 * The account actions that are shown on the sidebar
 */
export const userAccountActions: Array<object> = [
  { icon: 'credit_card', action: 'Fund My Account', link: '/fund-account' },
  { icon: 'perm_identity', action: 'Manage Profile', link: '/manage-profile' },
  { icon: 'lock', action: 'Reset Password', link: '/reset-password' },
  { icon: 'contact_phone', action: 'Contact Manager', link: '/contact-manager' },
]


