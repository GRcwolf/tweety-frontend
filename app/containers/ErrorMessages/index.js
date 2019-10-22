import M from 'materialize-css';
import { unsetErrors } from 'containers/App/actions';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { makeSelectErrors } from 'containers/App/selectors';
import { connect } from 'react-redux';

function ErrorMessages({ errors, onUnsetErrors }) {
  if (errors.length < 1) {
    return '';
  }

  for (let i = 0; i < errors.length; i += 1) {
    renderMessage(errors[i]);
  }
  onUnsetErrors();
  return '';
}

function renderMessage(message) {
  M.toast({ html: message });
}

ErrorMessages.propTypes = {
  errors: PropTypes.array,
  onUnsetErrors: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  errors: makeSelectErrors(),
});

function mapDispatchToProps(dispatch) {
  return {
    onUnsetErrors: () => dispatch(unsetErrors()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorMessages);
