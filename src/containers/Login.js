import { connect } from 'react-redux'
import Login from '../components/Login'

    const mapStateToProps = (state) => {
        return {
            loggedIn: state.loggedIn
        }
    }

    export default connect(mapStateToProps)(Login)