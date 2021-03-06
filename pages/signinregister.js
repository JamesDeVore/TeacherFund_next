import Nav from '../components/nav'
import Footer from '../components/footer'
import Head from '../components/head'
import LoginForm from '../components/loginform'
import '../static/styles/main.scss'

const SignInSignUp = (props) => (
  <div className='main-container'>
    <Nav navColor='white' />
    <Head title='Sign In' />

    <div className='body text-center'>
      <div className='login-container'>
        <LoginForm type={props.teacher} />
      </div>
    </div>
    <Footer />
  </div>
)

SignInSignUp.getInitialProps = async ({ query }) => {
  return {
    teacher: query.type
  }
}

export default SignInSignUp
