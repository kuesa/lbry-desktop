import { connect } from 'react-redux';
import {
  doResolveUri,
  selectBalance,
  selectPublishFormValues,
  selectIsStillEditing,
  selectMyClaimForUri,
  selectIsResolvingPublishUris,
  selectTakeOverAmount,
  doResetThumbnailStatus,
  doClearPublish,
  doUpdatePublishForm,
  doPrepareEdit,
} from 'lbry-redux';
import { doPublishDesktop } from 'redux/actions/publish';
import { selectUnclaimedRewardValue } from 'lbryinc';
import PublishPage from './view';

const select = state => ({
  ...selectPublishFormValues(state),
  // The winning claim for a short lbry uri
  amountNeededForTakeover: selectTakeOverAmount(state),
  // My previously published claims under this short lbry uri
  myClaimForUri: selectMyClaimForUri(state),
  // If I clicked the "edit" button, have I changed the uri?
  // Need this to make it easier to find the source on previously published content
  isStillEditing: selectIsStillEditing(state),
  isResolvingUri: selectIsResolvingPublishUris(state),
  totalRewardValue: selectUnclaimedRewardValue(state),
  balance: selectBalance(state),
});

const perform = dispatch => ({
  updatePublishForm: value => dispatch(doUpdatePublishForm(value)),
  clearPublish: () => dispatch(doClearPublish()),
  resolveUri: uri => dispatch(doResolveUri(uri)),
  publish: () => dispatch(doPublishDesktop()),
  prepareEdit: (claim, uri) => dispatch(doPrepareEdit(claim, uri)),
  resetThumbnailStatus: () => dispatch(doResetThumbnailStatus()),
});

export default connect(
  select,
  perform
)(PublishPage);
