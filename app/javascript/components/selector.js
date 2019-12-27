import { createSelector } from 'reselect'

const getCurrentUser = state => state.currentUser;

const mapStateToProps = state => {
  return {
      currentUser: getCurrentUser(state)
  }
}

export default mapStateToProps;