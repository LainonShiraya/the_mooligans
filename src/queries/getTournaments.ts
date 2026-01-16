export const GET_TOURNAMENTS = `
  query GetTournaments {
    tournaments(orderBy: date_ASC) {
      topdeckId
      title
      city
      date
      venue
      venueUrl
      image{
      url
      }
      hasTicket
      ticketsUrl
      detailsUrl
    }
  }
`;