import { connect } from 'react-redux'
import { ShowCardView } from '../components/ShowCardView'

mapStateToProps = ({index, number, cards}) => {
  return {
    index: index,
    number: number,
    cards: cards
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => { dispatch({ type: 'SUBMIT' }) }
  }
}

export const ShowCard = connect(mapStateToProps,
  mapDispatchToProps)(ShowCardView)
