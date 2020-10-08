import { connect } from 'react-redux';
import Works from './presentation';

const mapStateToProps = (state) => ({
  works: state.works,
});

export default connect(mapStateToProps)(Works);
