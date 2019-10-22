import React from 'react';
import { Button, Row, Icon, Textarea } from 'react-materialize';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import saga from './saga';
import reducer from './reducer';
import { makeSelectTweetContent } from './selectors';
import { updateContent, createTweet } from './actions';

const key = 'createTweetForm';

const CreateTweetForm = ({ onSubmit, onChange, content }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <Row>
      <form onSubmit={onSubmit}>
        <Row>
          <Textarea onChange={onChange} value={content} s={12} />
        </Row>
        <Row>
          <Button waves="light">
            Create tweet
            <Icon right>check</Icon>
          </Button>
        </Row>
      </form>
    </Row>
  );
};

CreateTweetForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  content: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  content: makeSelectTweetContent(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: evt => {
      evt.preventDefault();
      dispatch(createTweet());
    },
    onChange: evt => dispatch(updateContent(evt.target.value)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateTweetForm);
